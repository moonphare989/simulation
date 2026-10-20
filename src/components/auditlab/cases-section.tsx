'use client'

import { useMemo, useState } from 'react'
import { practicalCases } from '@/lib/content/cases'
import type { Difficulty, Exercise, PracticalCase } from '@/lib/types'
import { useAppStore } from '@/lib/store'
import { ExerciseRunner } from '@/components/auditlab/exercise-runner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  FlaskConical,
  Info,
  ListChecks,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const difficultyBadge: Record<Difficulty, { label: string; className: string }> = {
  1: { label: 'D1 · Initiation', className: 'bg-emerald-600' },
  2: { label: 'D2 · Guidé', className: 'bg-lime-600' },
  3: { label: 'D3 · Standard', className: 'bg-amber-600' },
  4: { label: 'D4 · Confirmé', className: 'bg-orange-600' },
  5: { label: 'D5 · Expert', className: 'bg-rose-600' },
}

const ORIGIN_OPTIONS: { value: OriginFilter; label: string }[] = [
  { value: 'all', label: 'Toutes les origines' },
  { value: 'fidumac', label: 'Fiche Fidumac · Audit' },
  { value: 'renault', label: 'Fiche Renault · Trésorerie' },
  { value: 'danone', label: 'Fiche Danone · Comptabilité' },
  { value: 'transversal', label: 'Transversal' },
]

type OriginFilter = 'all' | 'fidumac' | 'renault' | 'danone' | 'transversal'
type DifficultyFilter = 'all' | Difficulty

function originBadgeClass(origin: string): string {
  if (origin.includes('Fidumac')) return 'bg-emerald-600'
  if (origin.includes('Renault')) return 'bg-amber-600'
  if (origin.includes('Danone')) return 'bg-rose-600'
  return 'bg-slate-600'
}

function matchesOrigin(c: PracticalCase, filter: OriginFilter): boolean {
  if (filter === 'all') return true
  return c.origin.toLowerCase().includes(filter)
}

function caseExerciseId(c: PracticalCase): string {
  return `case-${c.id}`
}

function CaseCard({
  c,
  onOpen,
  doneScore,
}: {
  c: PracticalCase
  onOpen: () => void
  doneScore?: number
}) {
  return (
    <Card
      className="cursor-pointer transition-shadow hover:shadow-md"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
    >
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{c.title}</CardTitle>
        <CardDescription className="pt-1">{c.domain}</CardDescription>
        <CardAction>
          <Badge className={cn('shrink-0 text-[10px]', difficultyBadge[c.difficulty].className)}>
            {difficultyBadge[c.difficulty].label}
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="mt-2 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge className={cn('text-[10px] font-normal', originBadgeClass(c.origin))}>{c.origin}</Badge>
          {doneScore !== undefined ? (
            <Badge variant="outline" className="gap-1 text-[10px] text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-3 w-3" aria-hidden /> Réalisé : {doneScore} %
            </Badge>
          ) : (
            <Badge variant="outline" className="text-[10px] font-normal">
              À traiter
            </Badge>
          )}
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{c.situation}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" aria-hidden /> {c.documents.length} document(s)
          </span>
          <span className="flex items-center gap-1">
            <ClipboardList className="h-3.5 w-3.5" aria-hidden /> {c.tasks.length} tâches
          </span>
          <span className="flex items-center gap-1">
            <ListChecks className="h-3.5 w-3.5" aria-hidden /> {c.expectedFindings.length} anomalies au dossier
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function CaseDetail({ c, onBack }: { c: PracticalCase; onBack: () => void }) {
  const exerciseId = caseExerciseId(c)
  const doneEntry = useAppStore((s) => s.exerciseDone[exerciseId])

  const exercise = useMemo<Exercise>(
    () => ({
      id: exerciseId,
      title: c.title,
      context: c.situation,
      documents: c.documents,
      questions: c.tasks,
      solutionSummary: c.conclusionModel,
      risks: undefined,
    }),
    [c, exerciseId]
  )

  return (
    <div className="space-y-5">
      <div>
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" aria-hidden /> Retour aux dossiers
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{c.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <Badge className={cn('text-[10px] font-normal', originBadgeClass(c.origin))}>{c.origin}</Badge>
          <Badge className={cn('text-[10px]', difficultyBadge[c.difficulty].className)}>
            {difficultyBadge[c.difficulty].label}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-normal">
            {c.domain}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {c.documents.length} document(s) · {c.tasks.length} tâches
          </span>
        </div>
      </div>

      <ExerciseRunner key={exercise.id} exercise={exercise} />

      {doneEntry ? (
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-4 sm:p-5">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <ListChecks className="h-4 w-4 text-primary" aria-hidden />
              Anomalies à découvrir ({c.expectedFindings.length})
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              {c.expectedFindings.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border-2 border-primary/60 bg-primary/5 p-4 sm:p-5">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
              <BookOpen className="h-4 w-4" aria-hidden />
              Conclusion modèle
            </h3>
            <p className="text-sm leading-relaxed">{c.conclusionModel}</p>
          </div>
        </div>
      ) : (
        <p className="rounded-lg border border-dashed bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          Les anomalies attendues et la conclusion modèle de ce dossier seront révélées après la
          validation de vos réponses. Prenez le temps de construire votre démarche : elle est évaluée
          autant que la réponse finale.
        </p>
      )}
    </div>
  )
}

export default function CasesSection() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null)
  const [originFilter, setOriginFilter] = useState<OriginFilter>('all')
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all')
  const exerciseDone = useAppStore((s) => s.exerciseDone)

  const filtered = useMemo(
    () =>
      practicalCases.filter(
        (c) => matchesOrigin(c, originFilter) && (difficultyFilter === 'all' || c.difficulty === difficultyFilter)
      ),
    [originFilter, difficultyFilter]
  )

  const doneCount = practicalCases.filter((c) => exerciseDone[caseExerciseId(c)] !== undefined).length
  const selected = selectedCaseId
    ? practicalCases.find((c) => c.id === selectedCaseId)
    : undefined

  if (selected) {
    return <CaseDetail c={selected} onBack={() => setSelectedCaseId(null)} />
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <FlaskConical className="h-4.5 w-4.5 text-primary" aria-hidden />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Laboratoire de cas</h1>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {practicalCases.length} dossiers complets inspirés des trois fiches de stage : cut-off,
              situations de travaux, cycle achats, revue analytique, position de trésorerie,
              rapprochement bancaire, délégations, clôture mensuelle, imputation et TVA, piste
              d’audit fiable, lettrage, réconciliation globale. Chaque dossier fournit des documents
              fictifs cohérents, des tâches notées automatiquement et une conclusion modèle rédigée
              comme en mission.
            </p>
          </div>
        </div>
        <div className="mt-3 rounded-md border border-dashed bg-muted/40 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          <Info className="mr-1 inline h-3.5 w-3.5" aria-hidden />
          Tous les dossiers sont fictifs et les conclusions formulées hypothétiquement, à visée
          pédagogique. La démarche compte autant que la réponse finale : les corrections détaillent
          le raisonnement étape par étape et les calculs. Les points dépendant du référentiel
          (PCG, CGNC marocain, IFRS, TVA) sont signalés dans les dossiers.
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Select value={originFilter} onValueChange={(v) => setOriginFilter(v as OriginFilter)}>
          <SelectTrigger className="w-60" aria-label="Filtrer les dossiers par origine">
            <SelectValue placeholder="Origine" />
          </SelectTrigger>
          <SelectContent>
            {ORIGIN_OPTIONS.map((o) => (
              <SelectItem key={o.value} value={o.value}>
                {o.label}
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
          <SelectTrigger className="w-44" aria-label="Filtrer les dossiers par difficulté">
            <SelectValue placeholder="Difficulté" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes difficultés</SelectItem>
            {([1, 2, 3, 4, 5] as Difficulty[]).map((d) => (
              <SelectItem key={d} value={String(d)}>
                Difficulté {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Badge variant="secondary" className="ml-auto text-xs">
          {doneCount}/{practicalCases.length} dossiers traités
        </Badge>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed px-4 py-8 text-sm text-muted-foreground">
          <p>Aucun dossier ne correspond à ces filtres.</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setOriginFilter('all')
              setDifficultyFilter('all')
            }}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((c) => (
            <CaseCard
              key={c.id}
              c={c}
              doneScore={exerciseDone[caseExerciseId(c)]?.score}
              onOpen={() => setSelectedCaseId(c.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
