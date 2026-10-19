'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
  Loader2,
  RotateCcw,
  Save,
  Send,
  WifiOff,
} from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { difficultyLabels, getInterviewer, interviewerProfiles, jobLabels, themeOptions } from '@/lib/content/interviewers'
import { bankQuestions } from '@/lib/content/questions'
import type { AnswerEvaluation, InterviewConfig, InterviewMessage, InterviewerProfile, JobTarget, SavedInterview } from '@/lib/types'
import type {
  InterviewApiPayload,
  InterviewApiRequest,
  InterviewEvaluatePayload,
  InterviewFinalPayload,
  InterviewPhase,
  InterviewQuestionPayload,
} from '@/lib/interview-api'
import { offlineEvaluate, offlineFinal, offlineOpening } from '@/lib/interview-fallback'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// =====================================================================
// AuditLab — Simulateur d'entretien PFE (3 écrans : configuration,
// conversation, bilan). Moteur LLM via /api/interview (backend) avec
// fallback OFFLINE honnête : si l'API échoue ou renvoie
// { "error": "llm_unavailable" }, un bandeau « Mode autonome » s'affiche
// et la conversation continue en local (banque de questions + correction
// par mots-clés). On ne prétend JAMAIS que le LLM répond quand il ne
// répond pas.
// =====================================================================

type Screen = 'config' | 'chat' | 'bilan'

/** Vue du bilan (compatible payloads LLM et fallback local) */
interface FinalView {
  bilan: string
  finalScore: number
  strengths: string[]
  weaknesses: string[]
  advice: string
}

const DURATIONS = [10, 15, 20, 30] as const

function maxQuestionsFor(durationMinutes: number): number {
  return Math.max(1, Math.round(durationMinutes / 2.5))
}

function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `int-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

/** Validation légère côté client des payloads renvoyés par l'API. */
function isValidPayload(phase: InterviewPhase, data: InterviewApiPayload | null): boolean {
  if (data === null) return false
  if (phase === 'question') {
    return 'question' in data && typeof data.question === 'string' && data.question.trim().length > 0
  }
  if (phase === 'evaluate') {
    return 'evaluation' in data && 'question' in data && typeof data.question === 'string'
  }
  return 'bilan' in data && typeof data.bilan === 'string' && data.bilan.trim().length > 0
}

// ---------------------------------------------------------------------
// Petits composants de rendu
// ---------------------------------------------------------------------

function Markdown({ content }: { content: string }) {
  return (
    <div className="text-sm leading-relaxed [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-semibold [&_h3]:mb-1 [&_h3]:mt-3 [&_h3]:font-semibold [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

function OfflineBanner({ bankEmpty }: { bankEmpty: boolean }) {
  return (
    <div
      role="status"
      className="flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-400"
    >
      <WifiOff className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
      <p>
        Mode autonome : correction par mots-clés, limites connues pour l&apos;évaluation des réponses libres.
        {bankEmpty
          ? ' La banque de questions locale est vide pour le moment : la session sera très courte.'
          : ''}
      </p>
    </div>
  )
}

function FeedbackBlock({ evaluation }: { evaluation: AnswerEvaluation }) {
  return (
    <div className="ml-11 rounded-lg border border-primary/60 bg-primary/5 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Badge aria-label={`Score ${evaluation.score} sur 5`}>{evaluation.score}/5</Badge>
        <span className="text-sm font-semibold">Correction du recruteur</span>
      </div>
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-medium">Compréhension</p>
          <p className="text-muted-foreground">{evaluation.comprehension}</p>
        </div>
        <div>
          <p className="font-medium">Réponse à la question posée</p>
          <p className="text-muted-foreground">{evaluation.answeredTheQuestion}</p>
        </div>
        {evaluation.errors.length > 0 ? (
          <div>
            <p className="font-medium text-destructive">Erreurs et points à vérifier</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              {evaluation.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {evaluation.omissions.length > 0 ? (
          <div>
            <p className="font-medium">Omissions</p>
            <ul className="list-disc pl-5 text-muted-foreground">
              {evaluation.omissions.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div>
          <p className="font-medium">Réponse améliorée, à dire à l&apos;oral</p>
          <blockquote className="mt-1 border-l-2 border-primary pl-3 italic text-foreground">
            « {evaluation.improvedResponse} »
          </blockquote>
        </div>
        <p className="text-xs text-muted-foreground">Pourquoi c&apos;est mieux : {evaluation.whyBetter}</p>
      </div>
    </div>
  )
}

function ChatBubble({
  message,
  profile,
  intent,
}: {
  message: InterviewMessage
  profile: InterviewerProfile | undefined
  intent?: string
}) {
  if (message.role === 'recruteur') {
    return (
      <div className="flex gap-3">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
          aria-hidden
        >
          {profile?.name.charAt(0) ?? 'R'}
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm border bg-muted/50 px-4 py-2.5">
          <p className="text-xs font-medium text-muted-foreground">
            {profile?.name ?? 'Recruteur'}
            {profile ? ` — ${profile.role}` : ''}
          </p>
          <p className="whitespace-pre-wrap text-sm">{message.content}</p>
          {intent ? <p className="mt-1 text-[11px] italic text-muted-foreground">Évalue : {intent}</p> : null}
        </div>
      </div>
    )
  }
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-primary-foreground">
        <p className="text-xs font-medium opacity-80">Vous</p>
        <p className="whitespace-pre-wrap text-sm">{message.content}</p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------
// Écran 1 — Configuration (+ historique des sessions sauvegardées)
// ---------------------------------------------------------------------

function SavedSessionsPanel({ sessions }: { sessions: SavedInterview[] }) {
  if (sessions.length === 0) return null
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Historique des sessions</CardTitle>
        <CardDescription>
          Vos {sessions.length} entretien{sessions.length > 1 ? 's' : ''} sauvegardé
          {sessions.length > 1 ? 's' : ''} (stockage local).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {sessions.slice(0, 10).map((s) => (
          <Collapsible key={s.id}>
            <div className="flex items-center justify-between gap-2 rounded-md border px-3 py-2">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{jobLabels[s.config.job] ?? s.config.job}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {new Date(s.startedAt).toLocaleString('fr-FR')} ·{' '}
                  {getInterviewer(s.config.interviewer)?.name ?? 'Recruteur'} · {s.messages.length} messages
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {typeof s.finalScore === 'number' ? <Badge variant="secondary">{s.finalScore}/20</Badge> : null}
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Déplier la session">
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
            <CollapsibleContent>
              <div className="mt-2 rounded-md border bg-muted/40 p-3">
                <p className="text-xs text-muted-foreground">
                  Thème « {s.config.theme} » · Niveau {s.config.difficulty} ·{' '}
                  {s.config.blancMode ? 'Entretien blanc' : 'Mode pédagogique'} ·{' '}
                  {s.config.cvFocus ? 'centré CV' : 'thème imposé'}
                </p>
                <ScrollArea className="mt-2 max-h-56">
                  <ul className="space-y-1.5 pr-3 text-xs">
                    {s.messages.map((m, i) => (
                      <li key={i} className="whitespace-pre-wrap">
                        <span className="font-semibold">
                          {m.role === 'recruteur' ? 'Recruteur' : m.role === 'candidat' ? 'Candidat' : 'Correction'} :
                        </span>{' '}
                        {m.content.length > 220 ? `${m.content.slice(0, 220)}…` : m.content}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
                {s.bilan ? (
                  <div className="mt-2 border-t pt-2">
                    <Markdown content={s.bilan.slice(0, 1200)} />
                  </div>
                ) : null}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------
// Composant principal
// ---------------------------------------------------------------------

export default function SimulateurSection() {
  const settings = useAppStore((s) => s.settings)
  const experiences = useAppStore((s) => s.experiences)
  const savedInterviews = useAppStore((s) => s.savedInterviews)
  const saveInterview = useAppStore((s) => s.saveInterview)
  const { toast } = useToast()

  const [screen, setScreen] = useState<Screen>('config')
  const [config, setConfig] = useState<InterviewConfig>(() => ({
    job: 'general',
    difficulty: settings.defaultDifficulty,
    interviewer: 'rh',
    theme: themeOptions[0],
    durationMinutes: DURATIONS.includes(settings.sessionDurationMinutes as (typeof DURATIONS)[number])
      ? settings.sessionDurationMinutes
      : 20,
    blancMode: !settings.pedagogicalMode,
    cvFocus: false,
  }))
  const [messages, setMessages] = useState<InterviewMessage[]>([])
  const [questionCount, setQuestionCount] = useState(0)
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([])
  const [currentQuestionId, setCurrentQuestionId] = useState<string | undefined>(undefined)
  const [currentIntent, setCurrentIntent] = useState<string | undefined>(undefined)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [offline, setOffline] = useState(false)
  const [finalResult, setFinalResult] = useState<FinalView | null>(null)
  const [startedAt, setStartedAt] = useState(0)
  const [saved, setSaved] = useState(false)

  const scrollRootRef = useRef<HTMLDivElement>(null)
  const maxQuestions = maxQuestionsFor(config.durationMinutes)
  const selectedProfile = getInterviewer(config.interviewer)
  const bankEmpty = bankQuestions.length === 0
  const lastRecruiterIndex = useMemo(() => {
    let last = -1
    messages.forEach((m, i) => {
      if (m.role === 'recruteur') last = i
    })
    return last
  }, [messages])

  const experiencesText = useMemo(() => {
    if (!config.cvFocus || experiences.length === 0) return undefined
    return experiences
      .map((e) =>
        `- ${e.type} — ${e.role} chez ${e.org} (${e.period})${e.location ? `, ${e.location}` : ''} : ${e.tasks}${
          e.tools ? ` Outils : ${e.tools}` : ''
        }${e.results ? ` Résultats : ${e.results}` : ''}`,
      )
      .join('\n')
  }, [config.cvFocus, experiences])

  // Défilement automatique du chat vers le bas
  useEffect(() => {
    const viewport = scrollRootRef.current?.querySelector<HTMLElement>('[data-radix-scroll-area-viewport]')
    if (viewport) viewport.scrollTop = viewport.scrollHeight
  }, [messages, loading])

  // ---- Appel API (retourne null si indisponible → bascule autonome) ----
  const apiCall = useCallback(
    async (body: InterviewApiRequest): Promise<InterviewApiPayload | null> => {
      try {
        const res = await fetch('/api/interview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        if (!res.ok) return null
        const data: unknown = await res.json()
        if (typeof data === 'object' && data !== null && 'error' in data) return null
        return data as InterviewApiPayload
      } catch {
        return null
      }
    },
    [],
  )

  // ---- Phase final (LLM puis fallback local honnête) ----
  const goFinal = useCallback(
    async (history: InterviewMessage[], forceOffline = false) => {
      const useOffline = forceOffline || offline || !settings.llmEnabled
      setLoading(true)
      try {
        if (!useOffline) {
          const payload = await apiCall({
            config,
            history,
            phase: 'final',
            questionCount,
            ...(experiencesText ? { experiences: experiencesText } : {}),
          })
          if (payload && isValidPayload('final', payload)) {
            const p = payload as InterviewFinalPayload
            setFinalResult(p)
            setScreen('bilan')
            return
          }
          setOffline(true)
        }
        const r = offlineFinal(config, history)
        setFinalResult(r)
        setScreen('bilan')
      } finally {
        setLoading(false)
      }
    },
    [apiCall, config, experiencesText, offline, questionCount, settings.llmEnabled],
  )

  // ---- Démarrage : question d'ouverture ----
  const startInterview = useCallback(async () => {
    setMessages([])
    setQuestionCount(0)
    setUsedQuestionIds([])
    setCurrentQuestionId(undefined)
    setCurrentIntent(undefined)
    setFinalResult(null)
    setSaved(false)
    setInput('')
    setStartedAt(Date.now())
    setScreen('chat')

    const openOffline = () => {
      setOffline(true)
      const profile = getInterviewer(config.interviewer)
      const opening = profile ? offlineOpening(profile) : { question: 'Bonjour, commençons.', intent: '' }
      setMessages([{ role: 'recruteur', content: opening.question }])
      setCurrentIntent(opening.intent)
      setQuestionCount(1)
    }

    if (!settings.llmEnabled) {
      openOffline()
      return
    }
    setOffline(false)
    setLoading(true)
    try {
      const payload = await apiCall({
        config,
        history: [],
        phase: 'question',
        questionCount: 0,
        ...(experiencesText ? { experiences: experiencesText } : {}),
      })
      if (payload && isValidPayload('question', payload)) {
        const p = payload as InterviewQuestionPayload
        setMessages([{ role: 'recruteur', content: p.question }])
        setCurrentIntent(p.intent)
        setQuestionCount(1)
      } else {
        // API indisponible (erreur llm_unavailable / réseau) : fallback honnête
        openOffline()
      }
    } finally {
      setLoading(false)
    }
  }, [apiCall, config, experiencesText, settings.llmEnabled])

  // ---- Envoi d'une réponse : évaluation + question suivante ----
  const submitAnswer = useCallback(async () => {
    const answer = input.trim()
    if (!answer || loading || screen !== 'chat') return
    setInput('')
    const withAnswer: InterviewMessage[] = [...messages, { role: 'candidat', content: answer }]
    setMessages(withAnswer)
    setLoading(true)
    const isLastQuestion = questionCount >= maxQuestions
    const feedbackMessage = (evaluation: AnswerEvaluation): InterviewMessage => ({
      role: 'feedback',
      content: `Score ${evaluation.score}/5 — ${evaluation.comprehension}`,
      evaluation,
    })

    try {
      if (!offline && settings.llmEnabled) {
        const payload = await apiCall({
          config,
          history: withAnswer,
          answer,
          phase: 'evaluate',
          questionCount,
          ...(experiencesText ? { experiences: experiencesText } : {}),
        })
        if (payload && isValidPayload('evaluate', payload)) {
          const p = payload as InterviewEvaluatePayload
          const next: InterviewMessage[] = [...withAnswer, feedbackMessage(p.evaluation)]
          if (!isLastQuestion) {
            next.push({ role: 'recruteur', content: p.question })
          }
          setMessages(next)
          setCurrentIntent(p.intent)
          if (isLastQuestion) {
            await goFinal(next)
          } else {
            setQuestionCount((c) => c + 1)
          }
          return
        }
        // échec LLM : bascule en mode autonome pour la suite de la session
        setOffline(true)
        toast({
          title: 'IA indisponible',
          description: "Poursuite en mode autonome (correction par mots-clés, limites connues).",
        })
      }

      // ---- Fallback local : évaluation par mots-clés ----
      const r = offlineEvaluate(config, answer, currentQuestionId, usedQuestionIds)
      const newUsed =
        currentQuestionId && !usedQuestionIds.includes(currentQuestionId)
          ? [...usedQuestionIds, currentQuestionId]
          : usedQuestionIds
      setUsedQuestionIds(newUsed)
      const next: InterviewMessage[] = [...withAnswer, feedbackMessage(r.evaluation)]
      if (r.question !== null && !isLastQuestion) {
        next.push({ role: 'recruteur', content: r.question, questionId: r.nextQuestionId })
        setCurrentQuestionId(r.nextQuestionId)
        setCurrentIntent(r.intent)
        setMessages(next)
        setQuestionCount((c) => c + 1)
      } else {
        if (r.question === null) {
          next.push({
            role: 'recruteur',
            content:
              "Je n'ai plus de questions en réserve sur ce thème. Merci pour vos réponses, passons au bilan.",
          })
        }
        setMessages(next)
        await goFinal(next, true)
      }
    } finally {
      setLoading(false)
    }
  }, [
    apiCall,
    config,
    currentQuestionId,
    experiencesText,
    goFinal,
    input,
    loading,
    maxQuestions,
    messages,
    offline,
    questionCount,
    screen,
    settings.llmEnabled,
    toast,
    usedQuestionIds,
  ])

  const handleSave = useCallback(() => {
    if (!finalResult || saved) return
    const session: SavedInterview = {
      id: uuid(),
      config,
      startedAt,
      endedAt: Date.now(),
      messages,
      finalScore: finalResult.finalScore,
      bilan: finalResult.bilan,
    }
    saveInterview(session)
    setSaved(true)
    toast({ title: 'Session sauvegardée', description: 'Retrouvez-la dans l’historique de l’écran de configuration.' })
  }, [config, finalResult, messages, saveInterview, saved, startedAt, toast])

  const resetToConfig = useCallback(() => {
    setScreen('config')
    setMessages([])
    setFinalResult(null)
    setSaved(false)
  }, [])

  // ------------------------------------------------------------------
  // Rendu
  // ------------------------------------------------------------------

  if (screen === 'config') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Simulateur d&apos;entretien</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Entraînez-vous face à un recruteur réaliste : choisissez le métier, l&apos;interlocuteur, la difficulté et
            le thème, puis répondez comme à l&apos;oral. Corrections après chaque réponse (mode pédagogique) ou bilan
            complet à la fin (entretien blanc).
          </p>
        </div>

        <SavedSessionsPanel sessions={savedInterviews} />

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Métier visé</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="sim-job" className="sr-only">
                Métier visé
              </Label>
              <Select
                value={config.job}
                onValueChange={(v) => setConfig((c) => ({ ...c, job: v as JobTarget }))}
              >
                <SelectTrigger id="sim-job" className="w-full">
                  <SelectValue placeholder="Choisir un métier" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(jobLabels) as JobTarget[]).map((j) => (
                    <SelectItem key={j} value={j}>
                      {jobLabels[j]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Interlocuteur</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="sim-interviewer" className="sr-only">
                Interlocuteur
              </Label>
              <Select
                value={config.interviewer}
                onValueChange={(v) => setConfig((c) => ({ ...c, interviewer: v as InterviewConfig['interviewer'] }))}
              >
                <SelectTrigger id="sim-interviewer" className="w-full">
                  <SelectValue placeholder="Choisir un recruteur" />
                </SelectTrigger>
                <SelectContent>
                  {interviewerProfiles.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.name} — {p.role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedProfile ? (
                <p className="mt-2 text-xs text-muted-foreground">
                  {selectedProfile.style} Axes : {selectedProfile.focusAreas.join(' · ')}
                </p>
              ) : null}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Difficulté</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="sim-difficulty" className="sr-only">
                Difficulté
              </Label>
              <Select
                value={String(config.difficulty)}
                onValueChange={(v) => setConfig((c) => ({ ...c, difficulty: Number(v) as InterviewConfig['difficulty'] }))}
              >
                <SelectTrigger id="sim-difficulty" className="w-full">
                  <SelectValue placeholder="Choisir un niveau" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((d) => (
                    <SelectItem key={d} value={String(d)}>
                      {difficultyLabels[d]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Thème</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="sim-theme" className="sr-only">
                Thème
              </Label>
              <Select value={config.theme} onValueChange={(v) => setConfig((c) => ({ ...c, theme: v }))}>
                <SelectTrigger id="sim-theme" className="w-full">
                  <SelectValue placeholder="Choisir un thème" />
                </SelectTrigger>
                <SelectContent>
                  {themeOptions.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Durée</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="sim-duration" className="sr-only">
                Durée
              </Label>
              <Select
                value={String(config.durationMinutes)}
                onValueChange={(v) => setConfig((c) => ({ ...c, durationMinutes: Number(v) }))}
              >
                <SelectTrigger id="sim-duration" className="w-full">
                  <SelectValue placeholder="Choisir une durée" />
                </SelectTrigger>
                <SelectContent>
                  {DURATIONS.map((d) => (
                    <SelectItem key={d} value={String(d)}>
                      {d} min — environ {maxQuestionsFor(d)} questions
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Mode d&apos;entretien</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <Label htmlFor="sim-blanc">Entretien blanc</Label>
                  <p className="text-xs text-muted-foreground">
                    Bilan complet à la fin, sans correction en cours de route. Désactivé = mode pédagogique
                    (correction après chaque réponse).
                  </p>
                </div>
                <Switch
                  id="sim-blanc"
                  checked={config.blancMode}
                  onCheckedChange={(v) => setConfig((c) => ({ ...c, blancMode: v }))}
                  aria-label="Activer le mode entretien blanc"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <Label htmlFor="sim-cv">Centré sur mon CV réel</Label>
                  <p className="text-xs text-muted-foreground">
                    {experiences.length === 0
                      ? 'Aucune expérience déclarée dans « Mes expériences réelles ».'
                      : `${experiences.length} expérience${experiences.length > 1 ? 's' : ''} déclarée${experiences.length > 1 ? 's' : ''} serai${experiences.length > 1 ? 'ent' : 't'} transmise${experiences.length > 1 ? 's' : ''} au recruteur.`}
                  </p>
                </div>
                {experiences.length === 0 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span tabIndex={0} className="inline-flex">
                          <Switch
                            id="sim-cv"
                            checked={false}
                            disabled
                            aria-label="Option indisponible : aucune expérience déclarée"
                          />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-56 text-xs">
                        Déclarez d&apos;abord vos expériences réelles (module « Mes expériences réelles »), puis
                        revenez activer cette option.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <Switch
                    id="sim-cv"
                    checked={config.cvFocus}
                    onCheckedChange={(v) => setConfig((c) => ({ ...c, cvFocus: v }))}
                    aria-label="Centrer l'entretien sur mon CV réel"
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <Button size="lg" className="w-full sm:w-auto sm:self-start" onClick={() => void startInterview()}>
            Démarrer l&apos;entretien
          </Button>
          <p className="text-xs text-muted-foreground">
            {settings.llmEnabled
              ? "Questions et corrections générées par IA (API locale). En cas d'indisponibilité, l'entretien bascule automatiquement et honnêtement en mode autonome : questions de la banque locale, correction par mots-clés."
              : "IA désactivée dans les Paramètres : l'entretien démarre directement en mode autonome (banque de questions locale, correction par mots-clés)."}
          </p>
        </div>
      </div>
    )
  }

  if (screen === 'chat') {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
              aria-hidden
            >
              {selectedProfile?.name.charAt(0) ?? 'R'}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{selectedProfile?.name ?? 'Recruteur'}</p>
              <p className="text-xs text-muted-foreground">{selectedProfile?.role}</p>
            </div>
          </div>
          <Badge variant="secondary">{jobLabels[config.job] ?? config.job}</Badge>
          <Badge variant="outline">Niveau {config.difficulty}</Badge>
          {config.blancMode ? <Badge variant="destructive">Entretien blanc</Badge> : <Badge variant="outline">Pédagogique</Badge>}
          {config.cvFocus ? <Badge variant="outline">Centré CV</Badge> : null}
          <div className="ml-auto flex items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" disabled={loading || messages.length === 0}>
                  Terminer l&apos;entretien
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Terminer l&apos;entretien ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Le recruteur va établir le bilan final de la session (score sur 20, forces, faiblesses, conseils).
                    Vous ne pourrez plus répondre aux questions.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Continuer l&apos;entretien</AlertDialogCancel>
                  <AlertDialogAction onClick={() => void goFinal(messages)}>Établir le bilan</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="shrink-0 text-xs font-medium text-muted-foreground" aria-live="polite">
            Question {Math.min(questionCount, maxQuestions)}/{maxQuestions}
          </p>
          <Progress value={(Math.min(questionCount, maxQuestions) / maxQuestions) * 100} className="h-1.5" aria-hidden />
        </div>

        {offline ? <OfflineBanner bankEmpty={bankEmpty} /> : null}

        <ScrollArea className="max-h-[60vh] rounded-xl border" ref={scrollRootRef}>
          <div className="space-y-4 p-4" aria-live="polite">
            {messages.map((m, i) => {
              if (m.role === 'feedback') {
                // en mode blanc, les corrections ne s'affichent qu'au bilan
                if (config.blancMode || !m.evaluation) return null
                return <FeedbackBlock key={i} evaluation={m.evaluation} />
              }
              return (
                <ChatBubble
                  key={i}
                  message={m}
                  profile={selectedProfile}
                  intent={m.role === 'recruteur' && i === lastRecruiterIndex ? currentIntent : undefined}
                />
              )
            })}
            {loading ? (
              <div className="flex items-center gap-2 pl-11 text-sm text-muted-foreground" role="status">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Le recruteur réfléchit…
              </div>
            ) : null}
          </div>
        </ScrollArea>

        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            void submitAnswer()
          }}
        >
          <Label htmlFor="sim-answer" className="text-sm font-medium">
            Votre réponse
          </Label>
          <Textarea
            id="sim-answer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault()
                void submitAnswer()
              }
            }}
            placeholder="Répondez comme à l'oral : définition, méthode, justification… (Ctrl+Entrée pour envoyer)"
            rows={3}
            disabled={loading}
            aria-describedby="sim-answer-hint"
          />
          <div className="flex items-center justify-between gap-2">
            <p id="sim-answer-hint" className="text-xs text-muted-foreground">
              Ctrl+Entrée pour envoyer. Réponses longues acceptées.
            </p>
            <Button type="submit" disabled={!input.trim() || loading}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden /> : <Send className="mr-2 h-4 w-4" aria-hidden />}
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    )
  }

  // ---- Écran 3 : bilan ----
  if (!finalResult) {
    return (
      <div className="flex h-64 items-center justify-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Établissement du bilan…
      </div>
    )
  }

  const scoreVariant =
    finalResult.finalScore >= 14 ? 'default' : finalResult.finalScore >= 10 ? 'secondary' : 'destructive'

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div>
            <CardTitle>Bilan de l&apos;entretien</CardTitle>
            <CardDescription>
              {jobLabels[config.job] ?? config.job} · Niveau {config.difficulty} · « {config.theme} » ·{' '}
              {selectedProfile?.name ?? 'Recruteur'}
            </CardDescription>
          </div>
          <Badge variant={scoreVariant} className="text-base" aria-label={`Score final ${finalResult.finalScore} sur 20`}>
            {finalResult.finalScore}/20
          </Badge>
        </CardHeader>
        <CardContent>
          <Markdown content={finalResult.bilan} />
          {offline ? (
            <p className="mt-4 flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-400">
              <WifiOff className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              Bilan généré en mode autonome (correction par mots-clés) — limites connues pour l&apos;évaluation des
              réponses libres.
            </p>
          ) : null}
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden /> Forces
            </CardTitle>
          </CardHeader>
          <CardContent>
            {finalResult.strengths.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {finalResult.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Aucune force majeure relevée cette fois.</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-amber-500" aria-hidden /> Faiblesses
            </CardTitle>
          </CardHeader>
          <CardContent>
            {finalResult.weaknesses.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {finalResult.weaknesses.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">Aucune faiblesse franche relevée.</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="h-4 w-4 text-primary" aria-hidden /> Conseil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{finalResult.advice}</p>
          </CardContent>
        </Card>
      </div>

      {/* En mode blanc, les corrections cumulées sont révélées ici */}
      {config.blancMode ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Corrections détaillées (mode blanc)</CardTitle>
            <CardDescription>Relevées question par question, révélées maintenant que l&apos;entretien est terminé.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {messages.filter((m) => m.role === 'feedback' && m.evaluation).length > 0 ? (
              messages
                .filter((m) => m.role === 'feedback' && m.evaluation)
                .map((m, i) => <FeedbackBlock key={i} evaluation={m.evaluation as AnswerEvaluation} />)
            ) : (
              <p className="text-sm text-muted-foreground">Aucune correction enregistrée pour cette session.</p>
            )}
          </CardContent>
        </Card>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={resetToConfig}>
          <RotateCcw className="mr-2 h-4 w-4" aria-hidden /> Nouvel entretien
        </Button>
        <Button onClick={handleSave} disabled={saved}>
          {saved ? <Check className="mr-2 h-4 w-4" aria-hidden /> : <Save className="mr-2 h-4 w-4" aria-hidden />}
          {saved ? 'Session sauvegardée' : 'Sauvegarder la session'}
        </Button>
      </div>
    </div>
  )
}
