import type {
  AnswerEvaluation,
  BankQuestion,
  InterviewConfig,
  InterviewMessage,
  InterviewerProfile,
  QuestionCategory,
} from '@/lib/types'
import { bankQuestions } from '@/lib/content/questions'
import { getInterviewer, jobLabels } from '@/lib/content/interviewers'

// =====================================================================
// AuditLab — Fallback OFFLINE du simulateur d'entretien.
// Utilisé quand l'API LLM est indisponible (ou désactivée dans les
// paramètres). Honnêteté : rien ici ne simule une réponse du LLM —
// questions tirées de la banque locale, évaluation par couverture de
// mots-clés extraits de la réponse attendue. Limites assumées et
// affichées à l'utilisateur.
// =====================================================================

/** Question locale (avec lien éventuel vers la banque) */
export interface OfflineQuestion {
  question: string
  intent: string
  questionId?: string
}

/** Résultat de l'évaluation locale : évaluation + question suivante (null = plus de questions) */
export interface OfflineEvaluateResult {
  evaluation: AnswerEvaluation
  question: string | null
  intent: string
  nextQuestionId?: string
}

/** Bilan final local */
export interface OfflineFinalResult {
  bilan: string
  finalScore: number
  strengths: string[]
  weaknesses: string[]
  advice: string
}

// ---- Correspondance thème → catégories de la banque ----

const themeCategories: Record<string, QuestionCategory[]> = {
  'Général (mélange des thèmes)': [],
  'Audit légal vs audit contractuel': ['referentiels', 'definitions'],
  'Planification et prise de connaissance': ['procedures', 'organisation'],
  'Risques et seuil de signification': ['risques-controles', 'definitions'],
  'Contrôle interne et tests de conformité': ['risques-controles', 'procedures'],
  'Tests substantifs et revue analytique': ['procedures', 'justificatifs'],
  'Cycle achats-fournisseurs': ['cas-pratiques', 'procedures', 'justificatifs'],
  'Cycle ventes-clients': ['cas-pratiques', 'procedures', 'justificatifs'],
  'Cycle trésorerie': ['cas-pratiques', 'procedures', 'calculs'],
  'Révision comptable et balance': ['procedures', 'anomalies'],
  'Cut-off et séparation des exercices': ['cas-pratiques', 'anomalies'],
  'Anomalies et mémos de cycle': ['anomalies', 'communication-client'],
  'Rapprochements bancaires et suspens': ['cas-pratiques', 'procedures'],
  'BFR et analyse financière': ['calculs', 'definitions'],
  'Clôture mensuelle et annuelle': ['procedures', 'organisation'],
  'Saisie, imputation et TVA': ['calculs', 'definitions'],
  'Lettrage et comptes tiers': ['procedures', 'anomalies'],
  'Piste d’audit fiable et Procure-to-Pay': ['procedures', 'referentiels'],
  'Excel et traitement des données': ['excel'],
}

// ---- Normalisation / mots-clés ----

/** Minuscules sans accents, séparateurs standardisés. */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Mots-clés extraits de la réponse attendue : mots > 5 lettres, top 12 par fréquence. */
export function extractKeywords(expectedAnswer: string): string[] {
  const words = normalizeText(expectedAnswer)
    .split(' ')
    .filter((w) => w.length > 5)
  const counts = new Map<string, number>()
  for (const w of words) counts.set(w, (counts.get(w) ?? 0) + 1)
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 12)
    .map(([w]) => w)
}

const JUSTIFICATION_MARKERS = ['parce que', 'parce qu', ' donc ', ' car ', 'afin de', 'permet de', 'ce qui']

/** Score local par couverture de mots-clés (seuils 60 % / 30 %) + bonus justification. */
export function keywordScore(answer: string, keywords: string[]): { ratio: number; matched: string[]; score: number } {
  const normAnswer = normalizeText(answer)
  const answerWords = new Set(normAnswer.split(' ').filter(Boolean))
  // tolérance flexion française minimale (pluriels) dans les deux sens
  const matchesWord = (k: string): boolean =>
    answerWords.has(k) ||
    answerWords.has(`${k}s`) ||
    answerWords.has(`${k}es`) ||
    answerWords.has(`${k}x`) ||
    (k.endsWith('s') && answerWords.has(k.slice(0, -1)))
  const matched = keywords.filter(matchesWord)
  const ratio = keywords.length > 0 ? matched.length / keywords.length : 0
  const normSpaced = ` ${normAnswer} `
  const trimmed = answer.trim()
  let score: number
  if (trimmed.length < 15) {
    score = 0
  } else if (ratio >= 0.6) {
    score = 5
  } else if (ratio >= 0.3) {
    score = 3
  } else {
    score = matched.length > 0 ? 1 : 0
  }
  if (score > 0 && score < 5 && JUSTIFICATION_MARKERS.some((m) => normSpaced.includes(m))) {
    // une réponse justifiée mérite d'être valorisée (règle d'honnêteté)
    score = Math.min(5, score + 1)
  }
  return { ratio, matched, score }
}

// ---- Sélection des questions dans la banque ----

function uniqueById(questions: BankQuestion[]): BankQuestion[] {
  const seen = new Set<string>()
  return questions.filter((q) => {
    if (seen.has(q.id)) return false
    seen.add(q.id)
    return true
  })
}

function pickClosestDifficulty(list: BankQuestion[], difficulty: number): BankQuestion | null {
  if (list.length === 0) return null
  const sorted = [...list].sort(
    (a, b) =>
      Math.abs(a.difficulty - difficulty) - Math.abs(b.difficulty - difficulty) ||
      a.id.localeCompare(b.id),
  )
  return sorted[0]
}

/**
 * Prochaine question locale : pool = métier visé + questions générales,
 * priorité à la catégorie la plus proche du thème (relâchée si épuisée),
 * puis proximité de difficulté. Retourne null si la banque est vide ou
 * épuisée.
 */
export function pickNextBankQuestion(
  config: InterviewConfig,
  usedQuestionIds: string[],
): BankQuestion | null {
  if (bankQuestions.length === 0) return null

  // 1. pool par métier (métier visé + questions « générales », sinon tout)
  let pool = uniqueById(
    bankQuestions.filter((q) => q.job === config.job || q.job === 'general'),
  )
  if (pool.length === 0) pool = uniqueById(bankQuestions)

  // 2. questions non encore posées
  const unusedPool = pool.filter((q) => !usedQuestionIds.includes(q.id))
  if (unusedPool.length === 0) return null

  // 3. catégorie la plus proche du thème (relâchée si épuisée), puis difficulté
  const cats = themeCategories[config.theme] ?? []
  if (cats.length > 0) {
    const byCat = unusedPool.filter((q) => cats.includes(q.category))
    return pickClosestDifficulty(byCat.length > 0 ? byCat : unusedPool, config.difficulty)
  }
  return pickClosestDifficulty(unusedPool, config.difficulty)
}

/** Question d'ouverture locale : accroche du profil de recruteur. */
export function offlineOpening(profile: InterviewerProfile): OfflineQuestion {
  return {
    question: profile.greeting,
    intent: 'Présentation, parcours et communication — question d\'ouverture',
  }
}

/** Prochaine question locale encapsulée (null si plus rien en réserve). */
export function offlineNextQuestion(config: InterviewConfig, usedQuestionIds: string[]): OfflineQuestion | null {
  const q = pickNextBankQuestion(config, usedQuestionIds)
  if (!q) return null
  return { question: q.question, intent: q.skill, questionId: q.id }
}

function findBankQuestion(questionId: string | undefined): BankQuestion | undefined {
  if (!questionId) return undefined
  return bankQuestions.find((q) => q.id === questionId)
}

/**
 * Évaluation locale d'une réponse : couverture de mots-clés extraits de
 * expectedAnswer. Les erreurs ne sont pas détectables localement : les
 * erreurs fréquentes de la banque sont listées « à vérifier soi-même ».
 */
export function offlineEvaluate(
  config: InterviewConfig,
  answer: string,
  currentQuestionId: string | undefined,
  usedQuestionIds: string[],
): OfflineEvaluateResult {
  const bankQuestion = findBankQuestion(currentQuestionId)
  let evaluation: AnswerEvaluation

  if (!bankQuestion) {
    // Pas de référence locale pour cette question (ex. question d'ouverture) :
    // appréciation indicative, clairement signalée comme telle.
    const trimmed = answer.trim()
    const indicative = trimmed.length >= 250 ? 3 : trimmed.length >= 80 ? 2 : trimmed.length >= 15 ? 1 : 0
    evaluation = {
      score: indicative,
      comprehension:
        'Analyse locale indisponible pour cette question (aucune réponse attendue dans la banque locale) — appréciation indicative basée sur la longueur et la structure uniquement.',
      answeredTheQuestion:
        trimmed.length >= 80
          ? 'Réponse développée ; impossible de vérifier localement le fond. Comparez avec la bibliothèque technique.'
          : 'Réponse trop courte pour être exploitable.',
      errors: [],
      omissions: [],
      improvedResponse: 'Formulez une réponse en trois temps : définition, méthode, justification concrète.',
      whyBetter: 'Une structure définition → méthode → justification est toujours évaluée favorablement à l\'oral.',
    }
  } else {
    const keywords = extractKeywords(bankQuestion.expectedAnswer)
    const { ratio, matched, score } = keywordScore(answer, keywords)
    const missing = keywords.filter((k) => !matched.includes(k))
    evaluation = {
      score,
      comprehension: `Analyse locale par mots-clés : ${matched.length}/${keywords.length} points clés couverts (${Math.round(ratio * 100)} %).`,
      answeredTheQuestion:
        ratio >= 0.6
          ? 'La réponse couvre l\'essentiel des points attendus pour cette question.'
          : ratio >= 0.3
            ? 'Réponse partielle : une partie des points attendus est couverte, le reste mérite d\'être complété.'
            : 'La réponse ne couvre presque aucun des points attendus — vérifiez qu\'elle répond bien à LA question posée.',
      errors: bankQuestion.commonErrors.map((e) => `À vérifier (erreur fréquente sur ce type de question) : ${e}`),
      omissions: missing.slice(0, 5).map((k) => `Point attendu non détecté : « ${k} »`),
      improvedResponse: bankQuestion.oralShort,
      whyBetter: bankQuestion.reasoning,
    }
  }

  // la question qui vient d'être répondue ne doit plus être re-tirée :
  // on l'ajoute à la liste d'exclusion AVANT de choisir la suivante.
  const newUsed =
    currentQuestionId && !usedQuestionIds.includes(currentQuestionId)
      ? [...usedQuestionIds, currentQuestionId]
      : usedQuestionIds
  const next = pickNextBankQuestion(config, newUsed)
  return {
    evaluation,
    question: next ? next.question : null,
    intent: next ? next.skill : '',
    nextQuestionId: next ? next.id : undefined,
  }
}

// ---- Bilan final local ----

interface QuestionObservation {
  question: string
  score: number
  ratio: number | null
}

function collectObservations(messages: InterviewMessage[]): QuestionObservation[] {
  const observations: QuestionObservation[] = []
  let lastRecruiterQuestion = ''
  for (const m of messages) {
    if (m.role === 'recruteur') {
      lastRecruiterQuestion = m.content
    } else if (m.role === 'feedback' && m.evaluation) {
      const ratioMatch = /(\d+)\/(\d+) points clés/.exec(m.evaluation.comprehension)
      const ratio =
        ratioMatch && Number(ratioMatch[2]) > 0 ? Number(ratioMatch[1]) / Number(ratioMatch[2]) : null
      observations.push({
        question: lastRecruiterQuestion,
        score: m.evaluation.score,
        ratio,
      })
    }
  }
  return observations
}

/** Bilan final local, honnête sur ses limites (markdown simple). */
export function offlineFinal(config: InterviewConfig, messages: InterviewMessage[]): OfflineFinalResult {
  const interviewer = getInterviewer(config.interviewer)
  const observations = collectObservations(messages)
  const scores = observations.map((o) => o.score)
  const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0
  const finalScore = scores.length > 0 ? Math.round(avg * 4) : 10

  const bilanLines: string[] = []
  bilanLines.push('## Bilan de l\'entretien (mode autonome)')
  bilanLines.push('')
  bilanLines.push(
    `**Configuration** : ${jobLabels[config.job] ?? config.job} · Niveau ${config.difficulty} · Thème « ${config.theme} » · Recruteur : ${interviewer?.name ?? 'recruteur'} (${interviewer?.role ?? ''}).`,
  )
  bilanLines.push('')
  bilanLines.push('### Observations par question')
  if (observations.length === 0) {
    bilanLines.push('- Aucune réponse évaluée localement (session très courte ou évaluations non disponibles).')
  } else {
    observations.forEach((o, i) => {
      const short = o.question.length > 90 ? `${o.question.slice(0, 90)}…` : o.question
      const ratioText = o.ratio !== null ? ` · ${Math.round(o.ratio * 100)} % des points clés` : ''
      bilanLines.push(`${i + 1}. **« ${short.replace(/\n/g, ' ')} »** — ${o.score}/5${ratioText}`)
    })
  }
  bilanLines.push('')
  bilanLines.push(`### Score final : ${finalScore}/20`)
  bilanLines.push('')
  bilanLines.push(
    '*Généré localement (correction par mots-clés) — limites connues pour l\'évaluation des réponses libres. Pour un bilan détaillé, relancez une session avec l\'IA activée.*',
  )

  const strengths = observations
    .filter((o) => o.score >= 4)
    .slice(0, 5)
    .map((o) => {
      const short = o.question.length > 70 ? `${o.question.slice(0, 70)}…` : o.question
      return `Question « ${short.replace(/\n/g, ' ')} » bien traitée (${o.score}/5)`
    })
  const weaknesses = observations
    .filter((o) => o.score <= 2)
    .slice(0, 5)
    .map((o) => {
      const short = o.question.length > 70 ? `${o.question.slice(0, 70)}…` : o.question
      return `Question « ${short.replace(/\n/g, ' ')} » à retravailler (${o.score}/5)`
    })

  const advice =
    observations.length === 0
      ? 'Refaire une session complète : répondez à au moins une question pour obtenir des observations.'
      : strengths.length === 0 && weaknesses.length > 0
        ? `Reprenez le thème « ${config.theme} » dans la bibliothèque technique puis refaites une session en mode pédagogique.`
        : `Continuez sur votre lancée et refaites une session en entretien blanc sur le thème « ${config.theme} » pour valider en conditions réelles.`

  return {
    bilan: bilanLines.join('\n'),
    finalScore,
    strengths: strengths.length > 0 ? strengths : ['Session terminée sans faiblesse majeure détectée par l\'analyse locale.'],
    weaknesses: weaknesses.length > 0 ? weaknesses : ['Aucune faiblesse franche détectée par l\'analyse locale (limites connues de la correction par mots-clés).'],
    advice,
  }
}
