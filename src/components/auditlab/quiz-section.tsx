'use client'

import { useMemo, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import {
  AlertTriangle,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  Eye,
  HelpCircle,
  ListChecks,
  Loader2,
  MessageCircle,
  Mic,
  Play,
  RotateCcw,
  Search,
  Target,
} from 'lucide-react'
import { bankQuestions } from '@/lib/content/questions'
import { useAppStore } from '@/lib/store'
import type {
  BankQuestion,
  Difficulty,
  JobTarget,
  QuestionCategory,
  QuestionStat,
} from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

// =====================================================================
// AuditLab — Questions rapides : parcours filtrable de la banque,
// sessions de révision auto-évaluées (10 questions, tirage biaisé vers
// les questions jamais réussies) et notions dues via la répétition
// espacée du store. Aucune correction automatique des réponses libres :
// la comparaison avec la réponse attendue est honnête, l’évaluation
// appartient à l’utilisateur.
// =====================================================================

const MAX_DISPLAYED = 30
const SESSION_SIZE = 10

type TabValue = 'browse' | 'session' | 'due'
type JobFilter = 'all' | JobTarget
type CategoryFilter = 'all' | QuestionCategory
type DifficultyFilter = 'all' | Difficulty

const JOB_LABELS: Record<JobTarget, string> = {
  'audit-externe': 'Audit externe / légal',
  'audit-interne': 'Audit interne',
  'controle-interne': 'Contrôle interne',
  comptabilite: 'Comptabilité générale',
  revision: 'Révision comptable',
  tresorerie: 'Trésorerie',
  'controle-gestion': 'Contrôle de gestion',
  general: 'Général',
}

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  definitions: 'Définitions',
  procedures: 'Procédures',
  justificatifs: 'Choix des justificatifs',
  'risques-controles': 'Risques et contrôles',
  calculs: 'Calculs et interprétation',
  'cas-pratiques': 'Cas pratiques',
  anomalies: 'Anomalies et erreurs',
  justification: 'Justification d’une conclusion',
  pieges: 'Questions pièges',
  relances: 'Relances d’un auditeur senior',
  rh: 'Questions RH',
  'communication-client': 'Communication client',
  organisation: 'Organisation et priorisation',
  limites: 'Limites d’une procédure',
  referentiels: 'Référentiels comptables',
  excel: 'Excel et données',
}

const JOB_OPTIONS: { value: JobFilter; label: string }[] = [
  { value: 'all', label: 'Tous les métiers' },
  ...(Object.keys(JOB_LABELS) as JobTarget[]).map((job) => ({
    value: job,
    label: JOB_LABELS[job],
  })),
]

const CATEGORY_OPTIONS: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'Toutes les catégories' },
  ...(Object.keys(CATEGORY_LABELS) as QuestionCategory[]).map((category) => ({
    value: category,
    label: CATEGORY_LABELS[category],
  })),
]

const DIFFICULTY_OPTIONS: { value: DifficultyFilter; label: string }[] = [
  { value: 'all', label: 'Tous niveaux' },
  { value: 1, label: 'D1 · Initiation' },
  { value: 2, label: 'D2 · Guidé' },
  { value: 3, label: 'D3 · Standard' },
  { value: 4, label: 'D4 · Confirmé' },
  { value: 5, label: 'D5 · Expert' },
]

const DIFFICULTY_BADGE_CLASS: Record<Difficulty, string> = {
  1: 'bg-emerald-600',
  2: 'bg-lime-600',
  3: 'bg-amber-600',
  4: 'bg-orange-600',
  5: 'bg-rose-600',
}

const SELF_EVALUATION = [
  {
    label: 'Je savais',
    correct: true,
    quality: 3,
    className: 'border-emerald-600/50 text-emerald-700 hover:bg-emerald-600/10 dark:text-emerald-300',
  },
  {
    label: 'À peu près',
    correct: true,
    quality: 2,
    className: 'border-lime-600/50 text-lime-700 hover:bg-lime-600/10 dark:text-lime-300',
  },
  {
    label: 'Vaguement',
    correct: false,
    quality: 1,
    className: 'border-amber-600/50 text-amber-700 hover:bg-amber-600/10 dark:text-amber-400',
  },
  {
    label: 'Pas du tout',
    correct: false,
    quality: 0,
    className: 'border-rose-600/50 text-rose-700 hover:bg-rose-600/10 dark:text-rose-300',
  },
]

const QUALITY_LABELS: Record<number, string> = {
  3: 'Je savais',
  2: 'À peu près',
  1: 'Vaguement',
  0: 'Pas du tout',
}

function qualityBadgeClass(quality: number): string {
  if (quality >= 3) return 'border-emerald-600/40 text-emerald-700 dark:text-emerald-300'
  if (quality === 2) return 'border-lime-600/40 text-lime-700 dark:text-lime-300'
  if (quality === 1) return 'border-amber-600/40 text-amber-700 dark:text-amber-400'
  return 'border-rose-600/40 text-rose-700 dark:text-rose-300'
}

/** Minuscules + suppression des diacritiques pour la recherche plein texte. */
function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function questionHaystack(q: BankQuestion): string {
  return normalizeText(
    [
      q.question,
      q.expectedAnswer,
      q.reasoning,
      q.skill,
      q.oralShort,
      q.oralLong,
      q.commonErrors.join(' '),
    ].join(' '),
  )
}

/**
 * Tirage aléatoire biaisé : chaque question reçoit Math.random() + 1 si elle
 * existe dans les statistiques avec correct < attempts (jamais entièrement
 * réussie), ce qui la fait remonter dans le tri décroissant.
 */
function pickSessionQuestions(
  pool: BankQuestion[],
  stats: Record<string, QuestionStat>,
): BankQuestion[] {
  return pool
    .map((question) => {
      const stat = stats[question.id]
      const bonus = stat && stat.correct < stat.attempts ? 1 : 0
      return { question, key: Math.random() + bonus }
    })
    .sort((a, b) => b.key - a.key)
    .slice(0, SESSION_SIZE)
    .map((scored) => scored.question)
}

// ---------------------------------------------------------------------
// Horloge (notions dues) : instantané aligné à la minute pour rester
// stable entre deux rendus ; instantané serveur à 0 pour éviter tout
// écart d’hydratation (aucune notion due avant le montage client).
// ---------------------------------------------------------------------

const MINUTE_MS = 60_000

function subscribeToClock(onStoreChange: () => void) {
  const timer = setInterval(onStoreChange, MINUTE_MS)
  return () => clearInterval(timer)
}

function getClockSnapshot(): number {
  return Math.floor(Date.now() / MINUTE_MS) * MINUTE_MS
}

function getServerClockSnapshot(): number {
  return 0
}

function useNow(): number {
  return useSyncExternalStore(subscribeToClock, getClockSnapshot, getServerClockSnapshot)
}

// ---------------------------------------------------------------------
// Session de révision
// ---------------------------------------------------------------------

interface SessionEntry {
  questionId: string
  answer: string
  /** Auto-évaluation : 3 = je savais, 2 = à peu près, 1 = vaguement, 0 = pas du tout */
  quality: number
}

interface ActiveSession {
  questionIds: string[]
  index: number
  phase: 'answer' | 'feedback' | 'done'
  answer: string
  entries: SessionEntry[]
  /** true = session relancée depuis le bilan, restreinte aux notions faibles */
  targeted: boolean
}

// ---------------------------------------------------------------------
// Petits composants de rendu
// ---------------------------------------------------------------------

function LabeledSection({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon?: React.ComponentType<{ className?: string }>
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {Icon ? <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden /> : null}
        {label}
      </p>
      {children}
    </div>
  )
}

/**
 * Détail de la correction. Variante « compare » (session) : réponse attendue,
 * raisonnement, erreurs fréquentes. Variante « full » (parcours / notions
 * dues) : ajoute la réponse orale courte, la réponse développée et la relance.
 */
function AnswerDetails({ q, variant }: { q: BankQuestion; variant: 'full' | 'compare' }) {
  return (
    <div className="space-y-4">
      <LabeledSection icon={BookOpen} label="Réponse attendue">
        <div className="rounded-lg border border-primary/40 bg-primary/5 p-3 text-sm leading-relaxed">
          {q.expectedAnswer}
        </div>
      </LabeledSection>
      <LabeledSection icon={Brain} label="Raisonnement technique">
        <p className="text-sm leading-relaxed text-foreground/90">{q.reasoning}</p>
      </LabeledSection>
      {q.commonErrors.length > 0 ? (
        <LabeledSection icon={AlertTriangle} label="Erreurs fréquentes">
          <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">
            {q.commonErrors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </LabeledSection>
      ) : null}
      {variant === 'full' ? (
        <>
          <LabeledSection icon={Mic} label="Réponse orale courte (20-30 s)">
            <p className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed">
              {q.oralShort}
            </p>
          </LabeledSection>
          <LabeledSection label="Réponse développée">
            <p className="text-sm leading-relaxed">{q.oralLong}</p>
          </LabeledSection>
          <LabeledSection icon={MessageCircle} label="Relance possible">
            <p className="rounded-lg border border-dashed px-3 py-2 text-sm leading-relaxed">
              {q.followUp}
            </p>
          </LabeledSection>
        </>
      ) : null}
    </div>
  )
}

/**
 * Carte repliable d’une question : badges (difficulté, catégorie, métier,
 * statistiques), révélation progressive de la réponse puis enregistrement
 * « Je la maîtrise / À revoir » via recordQuestionResult.
 */
function QuestionCard({ q, defaultOpen = false }: { q: BankQuestion; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const [revealed, setRevealed] = useState(false)
  const [recorded, setRecorded] = useState<'mastered' | 'review' | null>(null)
  const recordQuestionResult = useAppStore((s) => s.recordQuestionResult)
  const stat = useAppStore((s) => s.questionStats[q.id])

  const handleRecord = (correct: boolean, quality: number, kind: 'mastered' | 'review') => {
    recordQuestionResult(q.id, correct, quality)
    setRecorded(kind)
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className="gap-4 py-4">
        <CardHeader className="pb-0">
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className="group flex w-full items-start justify-between gap-3 text-left"
              aria-expanded={open}
            >
              <span className="min-w-0">
                <span className="block text-sm font-medium leading-snug">{q.question}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{q.skill}</span>
              </span>
              <ChevronDown
                className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge
                className={cn('text-[10px] font-medium', DIFFICULTY_BADGE_CLASS[q.difficulty])}
                title={`Difficulté ${q.difficulty} sur 5`}
              >
                D{q.difficulty}
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal">
                {CATEGORY_LABELS[q.category]}
              </Badge>
              <Badge variant="outline" className="text-[10px] font-normal">
                {JOB_LABELS[q.job]}
              </Badge>
              {stat && stat.attempts > 0 ? (
                <Badge
                  variant="secondary"
                  className="text-[10px] font-normal"
                  title={`Réussie ${stat.correct} fois sur ${stat.attempts} tentative(s)`}
                >
                  {stat.correct}/{stat.attempts} réussie{stat.correct > 1 ? 's' : ''}
                </Badge>
              ) : null}
            </div>

            {revealed ? (
              <AnswerDetails q={q} variant="full" />
            ) : (
              <div className="space-y-2">
                <Button variant="outline" size="sm" onClick={() => setRevealed(true)}>
                  <Eye className="h-4 w-4" aria-hidden /> Révéler la réponse attendue
                </Button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Formulez d’abord votre réponse à voix haute : la comparaison honnête avec la
                  réponse attendue vaut mieux qu’une lecture passive.
                </p>
              </div>
            )}

            {revealed ? (
              <div className="space-y-2 border-t pt-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Comment évaluez-vous cette notion ?
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={recorded !== null}
                    onClick={() => handleRecord(true, 2, 'mastered')}
                    className="border-emerald-600/50 text-emerald-700 hover:bg-emerald-600/10 dark:text-emerald-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Je la maîtrise
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={recorded !== null}
                    onClick={() => handleRecord(false, 0, 'review')}
                    className="border-amber-600/50 text-amber-700 hover:bg-amber-600/10 dark:text-amber-400"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden /> À revoir
                  </Button>
                </div>
                {recorded === 'mastered' ? (
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    Enregistré : notion maîtrisée — sa prochaine révision s’espace.
                  </p>
                ) : null}
                {recorded === 'review' ? (
                  <p className="text-xs text-amber-700 dark:text-amber-400">
                    Enregistré : à revoir — elle reviendra bientôt dans « Notions dues ».
                  </p>
                ) : null}
              </div>
            ) : null}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}

// ---------------------------------------------------------------------
// Section principale
// ---------------------------------------------------------------------

export default function QuizSection() {
  const [tab, setTab] = useState<TabValue>('browse')
  const [jobFilter, setJobFilter] = useState<JobFilter>('all')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all')
  const [search, setSearch] = useState('')
  const [session, setSession] = useState<ActiveSession | null>(null)
  /** Horloge alignée à la minute : 0 côté serveur, donc aucune notion due avant le montage. */
  const now = useNow()

  const questionStats = useAppStore((s) => s.questionStats)
  const reviewCards = useAppStore((s) => s.reviewCards)
  const recordQuestionResult = useAppStore((s) => s.recordQuestionResult)

  const byId = useMemo(
    () => new Map<string, BankQuestion>(bankQuestions.map((q) => [q.id, q])),
    [bankQuestions],
  )

  const haystacks = useMemo(() => {
    const map = new Map<string, string>()
    for (const q of bankQuestions) map.set(q.id, questionHaystack(q))
    return map
  }, [bankQuestions])

  const filtered = useMemo(() => {
    const needle = normalizeText(search)
    return bankQuestions.filter((q) => {
      if (jobFilter !== 'all' && q.job !== jobFilter) return false
      if (categoryFilter !== 'all' && q.category !== categoryFilter) return false
      if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false
      if (needle !== '') {
        const haystack = haystacks.get(q.id) ?? ''
        if (!haystack.includes(needle)) return false
      }
      return true
    })
  }, [bankQuestions, jobFilter, categoryFilter, difficultyFilter, search, haystacks])

  /** Questions dont la carte de révision est échue (dueAt <= maintenant). */
  const dueItems = useMemo(() => {
    if (now === 0) return []
    return Object.values(reviewCards)
      .filter((card) => card.dueAt <= now)
      .sort((a, b) => a.dueAt - b.dueAt)
      .flatMap((card) => {
        const question = byId.get(card.questionId)
        return question ? [{ question, dueAt: card.dueAt }] : []
      })
  }, [reviewCards, now, byId])

  const practicedCount = useMemo(
    () => Object.keys(questionStats).filter((id) => byId.has(id)).length,
    [questionStats, byId],
  )

  // --- Banque vide : l’agrégation peut être branchée après ce composant ---
  if (bankQuestions.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <HelpCircle className="h-4.5 w-4.5 text-primary" aria-hidden />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Questions rapides</h1>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Banque de questions d’entretien pour préparer les PFE : parcours filtrable, sessions
              de révision auto-évaluées et répétition espacée des notions fragiles.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed px-4 py-16 text-center">
          <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden />
          <p className="text-sm font-medium">Banque de questions en cours de chargement.</p>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            L’agrégation des questions est en cours de branchement. Cette interface deviendra
            utilisable dès que la banque est disponible — aucun réglage n’est nécessaire de votre
            part.
          </p>
        </div>
      </div>
    )
  }

  const hasActiveFilters =
    jobFilter !== 'all' ||
    categoryFilter !== 'all' ||
    difficultyFilter !== 'all' ||
    search.trim() !== ''

  const resetFilters = () => {
    setJobFilter('all')
    setCategoryFilter('all')
    setDifficultyFilter('all')
    setSearch('')
  }

  // --- Session ---

  const startSession = (pool: BankQuestion[], targeted: boolean) => {
    if (pool.length === 0) return
    const stats = useAppStore.getState().questionStats
    const questions = pickSessionQuestions(pool, stats)
    setSession({
      questionIds: questions.map((q) => q.id),
      index: 0,
      phase: 'answer',
      answer: '',
      entries: [],
      targeted,
    })
  }

  const handleValidate = () => {
    if (!session) return
    setSession({ ...session, phase: 'feedback' })
  }

  const handleSelfEval = (correct: boolean, quality: number) => {
    if (!session) return
    const currentId = session.questionIds[session.index]
    if (currentId === undefined) return
    recordQuestionResult(currentId, correct, quality)
    const entries: SessionEntry[] = [
      ...session.entries,
      { questionId: currentId, answer: session.answer, quality },
    ]
    if (session.index + 1 < session.questionIds.length) {
      setSession({ ...session, entries, index: session.index + 1, phase: 'answer', answer: '' })
    } else {
      setSession({ ...session, entries, phase: 'done' })
    }
  }

  const quitSession = () => setSession(null)

  const currentQuestion =
    session && session.phase !== 'done' ? byId.get(session.questionIds[session.index]) : undefined

  const sessionScore = session ? session.entries.filter((e) => e.quality >= 2).length : 0
  const weakEntries = session ? session.entries.filter((e) => e.quality <= 1) : []
  const weakQuestions = weakEntries
    .map((e) => byId.get(e.questionId))
    .filter((q): q is BankQuestion => q !== undefined)

  const sessionLabel = `Démarrer ${
    filtered.length > 0 ? Math.min(SESSION_SIZE, filtered.length) : SESSION_SIZE
  } questions`

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <HelpCircle className="h-4.5 w-4.5 text-primary" aria-hidden />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Questions rapides</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {bankQuestions.length} questions d’entretien couvrant les huit métiers ciblés :
            parcourez-les par métier, catégorie et difficulté, entraînez-vous en sessions de dix
            questions, et laissez la répétition espacée ramener les notions mal maîtrisées au bon
            moment.
          </p>
        </div>
      </div>

      {/* Filtres (partagés par les trois onglets) */}
      <Card className="gap-4 py-4">
        <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une notion, un mot-clé…"
              className="pl-8"
              aria-label="Recherche plein texte dans les questions"
            />
          </div>
          <Select value={jobFilter} onValueChange={(v) => setJobFilter(v as JobFilter)}>
            <SelectTrigger className="w-full" aria-label="Filtrer par métier">
              <SelectValue placeholder="Métier" />
            </SelectTrigger>
            <SelectContent>
              {JOB_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={categoryFilter}
            onValueChange={(v) => setCategoryFilter(v as CategoryFilter)}
          >
            <SelectTrigger className="w-full" aria-label="Filtrer par catégorie">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={String(difficultyFilter)}
            onValueChange={(v) =>
              setDifficultyFilter(v === 'all' ? 'all' : (Number(v) as Difficulty))
            }
          >
            <SelectTrigger className="w-full" aria-label="Filtrer par difficulté">
              <SelectValue placeholder="Difficulté" />
            </SelectTrigger>
            <SelectContent>
              {DIFFICULTY_OPTIONS.map((option) => (
                <SelectItem key={String(option.value)} value={String(option.value)}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
        <div className="flex flex-wrap items-center gap-2 px-6">
          <Badge variant="secondary" className="text-xs font-normal">
            {filtered.length} question{filtered.length > 1 ? 's' : ''} correspond
            {filtered.length > 1 ? 'ent' : ''}
          </Badge>
          {hasActiveFilters ? (
            <Button variant="ghost" size="sm" onClick={resetFilters}>
              <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Réinitialiser les filtres
            </Button>
          ) : null}
        </div>
      </Card>

      <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)}>
        <TabsList className="grid w-full gap-1 sm:inline-flex sm:w-auto">
          <TabsTrigger value="browse">Parcourir</TabsTrigger>
          <TabsTrigger value="session">Session de révision</TabsTrigger>
          <TabsTrigger value="due">
            Notions dues
            {dueItems.length > 0 ? (
              <Badge className="h-5 px-1.5 text-[10px] leading-none">{dueItems.length}</Badge>
            ) : null}
          </TabsTrigger>
        </TabsList>

        {/* ----- Onglet Parcourir ----- */}
        <TabsContent value="browse" className="mt-4">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed px-4 py-8 text-sm text-muted-foreground">
              <p>Aucune question ne correspond à ces filtres.</p>
              <Button variant="outline" size="sm" onClick={resetFilters}>
                <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <ScrollArea className="max-h-[75vh] pr-3">
              <div className="space-y-3">
                {filtered.slice(0, MAX_DISPLAYED).map((q) => (
                  <QuestionCard key={q.id} q={q} />
                ))}
                {filtered.length > MAX_DISPLAYED ? (
                  <p className="rounded-lg border border-dashed bg-muted/30 px-3 py-2.5 text-center text-xs leading-relaxed text-muted-foreground">
                    + {filtered.length - MAX_DISPLAYED} autres questions correspondent encore à
                    ces filtres — affinez la recherche ou lancez une session pour les travailler.
                  </p>
                ) : null}
              </div>
            </ScrollArea>
          )}
        </TabsContent>

        {/* ----- Onglet Session de révision ----- */}
        <TabsContent value="session" className="mt-4">
          {session === null ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Session de révision</CardTitle>
                <CardDescription>
                  Dix questions tirées au hasard dans la sélection actuelle, pondérées en faveur
                  des questions que vous n’avez jamais réussies. Vous répondez par écrit, vous
                  comparez avec la réponse attendue, puis vous vous évaluez vous-même : c’est
                  cette évaluation honnête qui alimente la répétition espacée.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  <li>Réponse libre rédigée, comme à l’oral.</li>
                  <li>
                    Comparaison systématique : votre réponse, la réponse attendue, le raisonnement
                    technique et les erreurs fréquentes.
                  </li>
                  <li>Auto-évaluation en quatre niveaux, sans complaisance.</li>
                  <li>
                    Bilan final avec, si besoin, une session ciblée sur vos lacunes de la session.
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-3">
                  <Button onClick={() => startSession(filtered, false)} disabled={filtered.length === 0}>
                    <Play className="h-4 w-4" aria-hidden /> {sessionLabel}
                  </Button>
                  {filtered.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Aucune question ne correspond aux filtres — réinitialisez-les pour démarrer.
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">
                      Sélection : {filtered.length} question{filtered.length > 1 ? 's' : ''}
                      {practicedCount > 0
                        ? ` · ${practicedCount} déjà travaillée${practicedCount > 1 ? 's' : ''}`
                        : ''}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : session.phase === 'done' ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ListChecks className="h-4.5 w-4.5 text-primary" aria-hidden />
                  Bilan de la session
                </CardTitle>
                <CardDescription>
                  {session.targeted
                    ? 'Session ciblée sur les notions repérées comme fragiles.'
                    : `${session.entries.length} question${
                        session.entries.length > 1 ? 's' : ''
                      } travaillée${session.entries.length > 1 ? 's' : ''}, auto-évaluées sans complaisance.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-semibold tabular-nums">{sessionScore}</span>
                    <span className="text-sm text-muted-foreground">
                      / {session.entries.length} réussie{sessionScore > 1 ? 's' : ''}
                    </span>
                  </p>
                  <Progress
                    value={
                      session.entries.length > 0
                        ? (sessionScore / session.entries.length) * 100
                        : 0
                    }
                    className="h-2 min-w-40 flex-1"
                    aria-label="Taux de réussite de la session"
                  />
                </div>

                <div className="space-y-2">
                  {session.entries.map((entry) => {
                    const q = byId.get(entry.questionId)
                    return (
                      <div
                        key={entry.questionId}
                        className="flex items-start justify-between gap-3 rounded-lg border px-3 py-2"
                      >
                        <p className="min-w-0 text-sm leading-snug">
                          {q ? q.question : entry.questionId}
                        </p>
                        <Badge
                          variant="outline"
                          className={cn('shrink-0 text-[10px]', qualityBadgeClass(entry.quality))}
                        >
                          {QUALITY_LABELS[entry.quality] ?? '—'}
                        </Badge>
                      </div>
                    )
                  })}
                </div>

                <div className="rounded-xl border-2 border-amber-500/40 bg-amber-500/5 p-4">
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <AlertTriangle className="h-4 w-4 text-amber-600" aria-hidden />
                    Notions à revoir ({weakEntries.length})
                  </p>
                  {weakEntries.length === 0 ? (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Aucune notion marquée « vaguement » ou « pas du tout » dans cette session.
                      Continuez ainsi.
                    </p>
                  ) : (
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                      {weakEntries.map((entry) => {
                        const q = byId.get(entry.questionId)
                        return <li key={entry.questionId}>{q ? q.question : entry.questionId}</li>
                      })}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    disabled={weakQuestions.length === 0}
                    onClick={() => startSession(weakQuestions, true)}
                  >
                    <Target className="h-4 w-4" aria-hidden /> Session ciblée sur mes lacunes
                  </Button>
                  <Button variant="outline" onClick={quitSession}>
                    Nouvelle session
                  </Button>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Chaque auto-évaluation est enregistrée localement et programme la revue de la
                  notion : « Je savais » espace la révision, « Pas du tout » la ramène dès que
                  possible dans l’onglet « Notions dues ».
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-medium">
                  Question {session.index + 1} / {session.questionIds.length}
                  {session.targeted ? (
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      session ciblée sur vos lacunes
                    </span>
                  ) : null}
                </p>
                <Button variant="ghost" size="sm" onClick={quitSession}>
                  Interrompre
                </Button>
              </div>
              <Progress
                value={(session.entries.length / session.questionIds.length) * 100}
                aria-label={`Progression ${session.entries.length} sur ${session.questionIds.length}`}
              />

              {currentQuestion ? (
                <Card>
                  <CardHeader className="pb-0">
                    <div className="flex flex-wrap gap-1.5">
                      <Badge
                        className={cn(
                          'text-[10px] font-medium',
                          DIFFICULTY_BADGE_CLASS[currentQuestion.difficulty],
                        )}
                      >
                        D{currentQuestion.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] font-normal">
                        {CATEGORY_LABELS[currentQuestion.category]}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] font-normal">
                        {JOB_LABELS[currentQuestion.job]}
                      </Badge>
                    </div>
                    <CardTitle className="pt-2 text-base leading-snug">
                      {currentQuestion.question}
                    </CardTitle>
                    <CardDescription>{currentQuestion.skill}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4 space-y-4">
                    {session.phase === 'answer' ? (
                      <>
                        <Textarea
                          value={session.answer}
                          onChange={(e) => setSession({ ...session, answer: e.target.value })}
                          placeholder="Rédigez votre réponse comme si vous étiez à l’oral : définition, démarche, exemple concret…"
                          rows={7}
                          aria-label="Votre réponse libre"
                        />
                        <div>
                          <Button onClick={handleValidate}>
                            <CheckCircle2 className="h-4 w-4" aria-hidden /> Valider
                          </Button>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                            La comparaison ne note pas à votre place : lisez la réponse attendue,
                            repérez vos oublis, puis évaluez-vous honnêtement.
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <LabeledSection label="Votre réponse">
                          <blockquote className="border-l-2 border-muted-foreground/40 pl-3 text-sm leading-relaxed text-foreground/90">
                            {session.answer.trim() !== ''
                              ? session.answer
                              : 'Aucune réponse rédigée — comparez tout de même la réponse attendue avant de vous évaluer.'}
                          </blockquote>
                        </LabeledSection>
                        <AnswerDetails q={currentQuestion} variant="compare" />
                        <div className="space-y-2 rounded-lg border bg-muted/30 p-3 sm:p-4">
                          <p className="text-sm font-semibold">Auto-évaluation</p>
                          <p className="text-xs leading-relaxed text-muted-foreground">
                            Soyez exigeant : « Je savais » suppose une réponse structurée et juste,
                            « À peu près » une réponse incomplète mais dans le vrai.
                          </p>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {SELF_EVALUATION.map((option) => (
                              <Button
                                key={option.label}
                                variant="outline"
                                size="sm"
                                className={option.className}
                                onClick={() => handleSelfEval(option.correct, option.quality)}
                              >
                                {option.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed px-4 py-6 text-sm text-muted-foreground">
                  <p>Cette question n’est plus disponible dans la banque.</p>
                  <Button variant="outline" size="sm" onClick={quitSession}>
                    Quitter la session
                  </Button>
                </div>
              )}
            </div>
          )}
        </TabsContent>

        {/* ----- Onglet Notions dues ----- */}
        <TabsContent value="due" className="mt-4">
          {dueItems.length === 0 ? (
            <div className="rounded-xl border border-dashed px-4 py-10 text-center text-sm leading-relaxed text-muted-foreground">
              Aucune notion n’est due pour l’instant — les questions mal maîtrisées reviendront au
              bon moment.
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {dueItems.length} notion{dueItems.length > 1 ? 's' : ''} à réviser maintenant :
                relisez la question, répondez à voix haute, révélez la réponse puis évaluez-vous.
              </p>
              <ScrollArea className="max-h-[75vh] pr-3">
                <div className="space-y-3">
                  {dueItems.map(({ question, dueAt }) => (
                    <div key={question.id} className="space-y-1">
                      <p className="px-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Due depuis le{' '}
                        {new Date(dueAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                        })}
                      </p>
                      <QuestionCard q={question} defaultOpen />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
