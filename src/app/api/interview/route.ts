import { NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import type { ChatMessage } from 'z-ai-web-dev-sdk'
import type { AnswerEvaluation, Difficulty, InterviewConfig, InterviewMessage, InterviewerType, JobTarget } from '@/lib/types'
import { difficultyLabels, getInterviewer, jobLabels } from '@/lib/content/interviewers'
import type {
  InterviewApiBadRequest,
  InterviewApiError,
  InterviewApiPayload,
  InterviewApiRequest,
  InterviewEvaluatePayload,
  InterviewFinalPayload,
  InterviewPhase,
  InterviewQuestionPayload,
} from '@/lib/interview-api'

// =====================================================================
// POST /api/interview — moteur LLM du simulateur d'entretien (backend
// uniquement : z-ai-web-dev-sdk ne doit jamais être importé côté client).
// Phases : 'question' (prochaine question), 'evaluate' (correction +
// question suivante), 'final' (bilan complet).
// En cas d'échec LLM : { "error": "llm_unavailable" } avec status 200,
// le frontend bascule honnêtement en mode autonome local.
// =====================================================================

const REQUEST_TIMEOUT_MS = 60_000
const MAX_HISTORY_MESSAGES = 20
const MAX_MESSAGE_CHARS = 600

// ---- Instance SDK réutilisée entre les requêtes ----
const globalForZai = globalThis as unknown as { __auditlabZai?: Promise<ZAI> }

async function getZai(): Promise<ZAI> {
  if (!globalForZai.__auditlabZai) {
    globalForZai.__auditlabZai = ZAI.create().catch((err: unknown) => {
      // reset pour permettre une nouvelle tentative à la requête suivante
      globalForZai.__auditlabZai = undefined
      throw err
    })
  }
  return globalForZai.__auditlabZai
}

// ---- Helpers de validation / coercion (jamais de `any`) ----

interface ChatCompletionLike {
  choices?: { message?: { content?: string } }[]
}

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  const n = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, Math.round(n * 2) / 2))
}

function coerceString(value: unknown, fallback = ''): string {
  if (typeof value === 'string' && value.trim().length > 0) return value.trim()
  return fallback
}

function coerceStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((v): v is string => typeof v === 'string' && v.trim().length > 0).map((s) => s.trim())
  }
  if (typeof value === 'string' && value.trim().length > 0) return [value.trim()]
  return []
}

/** Extraction robuste du JSON : retire les balises ```json éventuelles puis parse. */
function extractJson(raw: string): unknown {
  let text = raw.trim()
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence && fence[1]) text = fence[1].trim()
  try {
    return JSON.parse(text)
  } catch {
    // seconde chance : entre la première accolade ouvrante et la dernière fermante
    const start = text.indexOf('{')
    const end = text.lastIndexOf('}')
    if (start !== -1 && end > start) {
      return JSON.parse(text.slice(start, end + 1))
    }
    throw new Error('invalid_json')
  }
}

// ---- Construction du system prompt ----

function buildSystemPrompt(config: InterviewConfig, experiences?: string): string {
  const interviewer = getInterviewer(config.interviewer)
  const difficultyLabel = difficultyLabels[config.difficulty] ?? `Niveau ${config.difficulty}`
  const cvSection =
    config.cvFocus && experiences && experiences.trim().length > 0
      ? `\n- CENTRÉ CV RÉEL : le candidat a déclaré les expériences suivantes (authentiques, fournies par lui) :\n${experiences.slice(0, 2000)}\n  Appuie tes questions sur CE CV quand c'est pertinent, sans jamais inventer une expérience supplémentaire.`
      : ''

  return `Tu es ${interviewer?.name ?? 'un recruteur'}, ${interviewer?.role ?? 'recruteur'} qui mène un entretien de recrutement pour un stage de fin d'études (PFE), en France/Afrique francophone. Tu joues ce personnage avec réalisme.

PERSONNALITÉ
- Style : ${interviewer?.style ?? 'Professionnel, exigeant et bienveillant.'}
- Axes d'évaluation privilégiés : ${(interviewer?.focusAreas ?? ['Compétences techniques']).join(' ; ')}
- Accroche habituelle : « ${interviewer?.greeting ?? 'Bonjour, commençons.'} »

CONTEXTE DE LA SESSION
- Poste visé : ${jobLabels[config.job] ?? config.job}
- Thème imposé : ${config.theme}
- Niveau de difficulté : ${difficultyLabel}
  (échelle : 1 = définitions, objectifs, vocabulaire ; 2 = procédures, justificatifs, calculs simples ; 3 = cas complexes, anomalies multiples, arbitrages ; 4 = objections, informations incomplètes, contradictions ; 5 = enchaînements exigeants, AUCUNE indication donnée, cohérence exigée sur toute la durée).
- Mode : ${config.blancMode ? 'ENTRETIEN BLANC — aucune correction ni encouragement en cours de route, tout est observé silencieusement pour le bilan final' : 'MODE PÉDAGOGIQUE — une correction structurée est produite après chaque réponse (tu ne la donnes pas dans la question, elle est générée à part)'}.
- Une seule question à la fois, formulations orales naturelles (le candidat répond à l'écrit comme il parlerait).${cvSection}

RÈGLES D'HONNÊTETÉ (strictes, non négociables)
1. N'invente JAMAIS une expérience vécue que le candidat n'a pas décrite. Son parcours se limite à ce qu'il a dit ou aux expériences fournies ci-dessus.
2. INTERDICTION ABSOLUE dans les reformulations et réponses modèles : ne JAMAIS ajouter un stage, un emploi, un employeur, un chiffre d'expérience ou un fait biographique que le candidat n'a pas mentionné lui-même. La « réponse améliorée » enrichit uniquement la STRUCTURE, la PRÉCISION TECHNIQUE et les FORMULATIONS de ce que le candidat a réellement écrit — jamais sa biographie.
3. Si le candidat n'a pas décrit d'expérience pertinente, la réponse améliorée doit rester au conditionnel (« je n'ai pas encore rencontré ce cas, mais je raisonnerais ainsi… », « dans ce cas, je commencerais par… »).
4. Valorise les formulations hypothétiques honnêtes : elles ne doivent PAS être pénalisées par rapport à une expérience réelle.
5. Une réponse simple, précise, cohérente et justifiée mérite une bonne note, même sans jargon technique.
6. Ne confonds pas le CGNC marocain et le PCG français : ce sont deux référentiels distincts avec des divergences réelles.
7. Les IFRS ne sont pas obligatoires pour toutes les entités : ne pénalise pas leur absence quand le contexte ne les exige pas.
8. Signale explicitement les points qui dépendent du référentiel applicable (CGNC / PCG / IFRS / NEP).

FORMAT DE SORTIE (obligatoire)
Réponds UNIQUEMENT avec du JSON valide : aucun texte avant ni après, aucune balise markdown, aucun commentaire. Toutes les valeurs textuelles sont en français.`
}

function questionSchema(): string {
  return '{"question": "la question du recruteur (une seule)", "intent": "ce que cette question évalue, une phrase courte"}'
}

function evaluateSchema(): string {
  return '{"evaluation": {"score": 0 à 5 (number), "comprehension": "ce que le candidat a compris", "answeredTheQuestion": "est-ce que la réponse répond à LA question posée, et pourquoi", "errors": ["erreurs factuelles ou de raisonnement, en liste"], "omissions": ["points importants oubliés, en liste"], "improvedResponse": "reformulation orale améliorée STRICTEMENT construite sur le contenu réel de la réponse du candidat (mêmes faits, même parcours) : améliore la structure, la précision technique et les formulations — interdiction formelle d\'y ajouter un stage, un employeur, une expérience ou un fait biographique non mentionné par le candidat ; si le candidat n\'a pas d\'expérience pertinente, rester au conditionnel", "whyBetter": "pourquoi cette version est meilleure"}, "question": "la question suivante du recruteur", "intent": "ce qu\'elle évalue, une phrase courte"}'
}

function finalSchema(): string {
  return '{"bilan": "bilan complet au format markdown (avec des ## sous-titres et des listes) : déroulé, niveau technique constaté, communication, points dépendant du référentiel, axes de progrès", "finalScore": 0 à 20 (number), "strengths": ["forces constatées, en liste"], "weaknesses": ["faiblesses constatées, en liste"], "advice": "un conseil concret pour la suite"}'
}

// ---- Condensation de l'historique ----

function condenseHistory(history: InterviewMessage[], dropTrailingAnswer: boolean): string {
  let msgs = history
  if (dropTrailingAnswer) {
    while (msgs.length > 0 && msgs[msgs.length - 1].role === 'candidat') {
      msgs = msgs.slice(0, -1)
    }
  }
  const kept = msgs.slice(-MAX_HISTORY_MESSAGES)
  if (kept.length === 0) return "(début de l'entretien, aucune question posée pour l'instant)"
  return kept
    .map((m) => {
      const truncated = m.content.length > MAX_MESSAGE_CHARS ? `${m.content.slice(0, MAX_MESSAGE_CHARS)}…` : m.content
      if (m.role === 'recruteur') return `Recruteur: ${truncated}`
      if (m.role === 'candidat') return `Candidat: ${truncated}`
      const score = typeof m.evaluation?.score === 'number' ? m.evaluation.score : '?'
      return `Feedback pédagogique donné (score ${score}/5): ${truncated.slice(0, 200)}`
    })
    .join('\n')
}

// ---- Prompt utilisateur selon la phase ----

function buildUserPrompt(body: InterviewApiRequest, systemContext: string): string {
  const { config, phase, questionCount } = body

  if (phase === 'question') {
    const opening =
      questionCount === 0
        ? "C'est l'OUVERTURE de l'entretien : commence par une salutation brève et naturelle cohérente avec ton personnage, puis pose ta première question, ancrée sur le thème et le niveau de difficulté."
        : `Pose la question SUIVANTE : cohérente avec l'historique (ne répète JAMAIS une question déjà posée), avec une montée en exigence adaptée au niveau ${config.difficulty}/5 et à ton style de recruteur.`
    return `${systemContext}

Phase : génération de la prochaine question.
Nombre de questions déjà posées : ${questionCount}.
${opening}

Réponds UNIQUEMENT avec du JSON valide au format exact : ${questionSchema()}`
  }

  if (phase === 'evaluate') {
    const answer = (body.answer ?? '').trim() || '(réponse vide)'
    return `${systemContext}

Phase : évaluation de la dernière réponse du candidat.
Dernière réponse à évaluer (entre guillemets) :
"""${answer.slice(0, 3000)}"""

Évalue-la par rapport à la question qui vient d'être posée : compréhension réelle, est-ce qu'il répond à LA question posée (et pas à une question voisine), erreurs factuelles ou de raisonnement, omissions importantes. Respecte les règles d'honnêteté (formulations hypothétiques valorisées, une réponse simple juste et justifiée mérite une bonne note, attention aux référentiels). CRITIQUE pour improvedResponse : construis-la UNIQUEMENT à partir des faits et du parcours que le candidat vient d'écrire — n'ajoute AUCUN stage, employeur ou expérience ; enrichis seulement la structure et la précision technique. Puis pose la question suivante (sans répéter les précédentes).

Réponds UNIQUEMENT avec du JSON valide au format exact : ${evaluateSchema()}`
  }

  // phase 'final'
  return `${systemContext}

Phase : bilan final de l'entretien.
${config.blancMode
      ? "L'entretien s'est déroulé en mode BLANC : aucune correction n'a été donnée en cours de route. Appuie-toi sur tes observations accumulées question par question."
      : "Le candidat a reçu des corrections après chaque réponse : le bilan synthétise son niveau, ses progrès et ses lacunes récurrentes."}
Rédige un bilan complet, honnête et utilisable (markdown : ## sous-titres, listes). Le finalScore sur 20 doit être cohérent avec les réponses observées — ni complaisant, ni injustement sévère.

Réponds UNIQUEMENT avec du JSON valide au format exact : ${finalSchema()}`
}

// ---- Appel LLM avec timeout + relance unique ----

async function callLlmOnce(messages: ChatMessage[]): Promise<string> {
  const zai = await getZai()
  // Le SDK n'expose pas de signal d'annulation : on borne l'attente via un
  // AbortController (la réponse SDK est abandonnée après 60 s).
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    const completion = (await Promise.race([
      zai.chat.completions.create({
        messages,
        thinking: { type: 'disabled' },
      }),
      new Promise<never>((_, reject) => {
        controller.signal.addEventListener(
          'abort',
          () => reject(new Error('llm_timeout')),
          { once: true },
        )
      }),
    ])) as ChatCompletionLike
    const content = completion.choices?.[0]?.message?.content
    if (typeof content !== 'string' || content.trim().length === 0) {
      throw new Error('empty_llm_response')
    }
    return content
  } finally {
    clearTimeout(timer)
  }
}

async function callLlm(messages: ChatMessage[]): Promise<string> {
  try {
    return await callLlmOnce(messages)
  } catch {
    // une seule relance
    await new Promise((resolve) => setTimeout(resolve, 500))
    return callLlmOnce(messages)
  }
}

// ---- Validation des payloads parsés ----

function parseQuestionPayload(data: unknown): InterviewQuestionPayload | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  const question = coerceString(obj.question)
  if (!question) return null
  return { question, intent: coerceString(obj.intent, 'Évaluation technique') }
}

function parseEvaluatePayload(data: unknown): InterviewEvaluatePayload | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  const rawEval = obj.evaluation
  if (typeof rawEval !== 'object' || rawEval === null) return null
  const ev = rawEval as Record<string, unknown>
  const evaluation: AnswerEvaluation = {
    score: clampNumber(ev.score, 0, 5, 2),
    comprehension: coerceString(ev.comprehension, 'Évaluation non détaillée par le modèle.'),
    answeredTheQuestion: coerceString(ev.answeredTheQuestion, 'Non précisé par le modèle.'),
    errors: coerceStringArray(ev.errors),
    omissions: coerceStringArray(ev.omissions),
    improvedResponse: coerceString(ev.improvedResponse, 'Reformulation non fournie par le modèle.'),
    whyBetter: coerceString(ev.whyBetter, 'Explication non fournie par le modèle.'),
  }
  const question = coerceString(
    obj.question,
    'Merci pour votre réponse. Pouvez-vous approfondir un autre point du thème ?',
  )
  return { evaluation, question, intent: coerceString(obj.intent, 'Évaluation technique') }
}

function parseFinalPayload(data: unknown): InterviewFinalPayload | null {
  if (typeof data !== 'object' || data === null) return null
  const obj = data as Record<string, unknown>
  const bilan = coerceString(obj.bilan)
  if (!bilan) return null
  return {
    bilan,
    finalScore: clampNumber(obj.finalScore, 0, 20, 10),
    strengths: coerceStringArray(obj.strengths),
    weaknesses: coerceStringArray(obj.weaknesses),
    advice: coerceString(obj.advice, 'Reprenez les points signalés comme faibles dans la bibliothèque technique.'),
  }
}

function parsePayload(phase: InterviewPhase, data: unknown): InterviewApiPayload | null {
  if (phase === 'question') return parseQuestionPayload(data)
  if (phase === 'evaluate') return parseEvaluatePayload(data)
  return parseFinalPayload(data)
}

// ---- Validation du corps de requête ----

const JOBS: JobTarget[] = ['audit-externe', 'audit-interne', 'controle-interne', 'comptabilite', 'revision', 'tresorerie', 'controle-gestion', 'general']
const INTERVIEWERS: InterviewerType[] = ['rh', 'auditeur-senior', 'chef-mission', 'manager-audit', 'responsable-comptable', 'responsable-tresorerie']
const PHASES: InterviewPhase[] = ['question', 'evaluate', 'final']

function parseRequestBody(raw: unknown): InterviewApiRequest | null {
  if (typeof raw !== 'object' || raw === null) return null
  const body = raw as Record<string, unknown>

  const phase = body.phase
  if (typeof phase !== 'string' || !PHASES.includes(phase as InterviewPhase)) return null

  const c = body.config
  if (typeof c !== 'object' || c === null) return null
  const cfg = c as Record<string, unknown>
  const job = cfg.job
  const difficulty = cfg.difficulty
  const interviewer = cfg.interviewer
  const theme = cfg.theme
  const durationMinutes = cfg.durationMinutes
  const blancMode = cfg.blancMode
  const cvFocus = cfg.cvFocus
  if (
    typeof job !== 'string' || !JOBS.includes(job as JobTarget) ||
    typeof difficulty !== 'number' || ![1, 2, 3, 4, 5].includes(difficulty) ||
    typeof interviewer !== 'string' || !INTERVIEWERS.includes(interviewer as InterviewerType) ||
    typeof theme !== 'string' || theme.trim().length === 0 ||
    typeof durationMinutes !== 'number' ||
    typeof blancMode !== 'boolean' ||
    typeof cvFocus !== 'boolean'
  ) {
    return null
  }

  const history = body.history
  if (!Array.isArray(history)) return null
  const messages: InterviewMessage[] = []
  for (const m of history) {
    if (typeof m !== 'object' || m === null) return null
    const msg = m as Record<string, unknown>
    const role = msg.role
    const content = msg.content
    if (
      (role !== 'recruteur' && role !== 'candidat' && role !== 'feedback') ||
      typeof content !== 'string'
    ) {
      return null
    }
    messages.push({
      role,
      content: content.slice(0, 4000),
      ...(typeof msg.questionId === 'string' ? { questionId: msg.questionId } : {}),
    })
  }

  const config: InterviewConfig = {
    job: job as JobTarget,
    difficulty: difficulty as Difficulty,
    interviewer: interviewer as InterviewerType,
    theme: theme.slice(0, 200),
    durationMinutes: Math.min(120, Math.max(5, Math.round(durationMinutes))),
    blancMode,
    cvFocus,
  }

  return {
    config,
    history: messages.slice(-40),
    ...(typeof body.answer === 'string' ? { answer: body.answer.slice(0, 8000) } : {}),
    phase: phase as InterviewPhase,
    ...(typeof body.experiences === 'string' ? { experiences: body.experiences.slice(0, 4000) } : {}),
    questionCount:
      typeof body.questionCount === 'number' && Number.isFinite(body.questionCount)
        ? Math.max(0, Math.round(body.questionCount))
        : 0,
  }
}

// ---- Route POST ----

export async function POST(req: Request) {
  let rawBody: unknown
  try {
    rawBody = await req.json()
  } catch {
    const bad: InterviewApiBadRequest = { error: 'bad_request' }
    return NextResponse.json(bad, { status: 400 })
  }

  const body = parseRequestBody(rawBody)
  if (body === null) {
    const bad: InterviewApiBadRequest = { error: 'bad_request' }
    return NextResponse.json(bad, { status: 400 })
  }

  const experiences = body.config.cvFocus ? body.experiences : undefined
  const systemPrompt = buildSystemPrompt(body.config, experiences)
  const transcript = condenseHistory(body.history, body.phase === 'evaluate')
  const systemContext = `HISTORIQUE CONDENSÉ DE L'ENTRETIEN (format Recruteur/Candidat) :\n${transcript}`
  const userPrompt = buildUserPrompt(body, systemContext)

  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ]

  try {
    const raw = await callLlm(messages)
    const data = extractJson(raw)
    const payload = parsePayload(body.phase, data)
    if (payload === null) {
      throw new Error('invalid_payload')
    }
    return NextResponse.json(payload)
  } catch (err) {
    console.error('[/api/interview] échec LLM :', err instanceof Error ? err.message : err)
    const unavailable: InterviewApiError = { error: 'llm_unavailable' }
    // status 200 : le frontend gère le fallback en mode autonome
    return NextResponse.json(unavailable, { status: 200 })
  }
}
