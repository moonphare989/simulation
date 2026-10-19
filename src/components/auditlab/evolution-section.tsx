'use client'

import { useMemo, useSyncExternalStore } from 'react'
import type { ComponentType } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { allMissions, MISSION_STEPS } from '@/lib/content'
import { jobLabels } from '@/lib/content/interviewers'
import { bankQuestions } from '@/lib/content/questions'
import { useAppStore } from '@/lib/store'
import type { BankQuestion, JobTarget, QuestionStat } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HelpCircle,
  Layers,
  ListChecks,
  MessagesSquare,
  RefreshCcw,
  Target,
  TrendingUp,
} from 'lucide-react'

// =====================================================================
// AuditLab — « Mon évolution » : tableau de bord calculé localement à
// partir de la progression réellement enregistrée dans le store
// (missionProgress, questionStats, reviewCards, exerciseDone,
// savedInterviews). Aucune donnée ne quitte le navigateur, aucun statut
// n'est surévalué : la maîtrise exige ≥ 5 tentatives et ≥ 80 %.
// =====================================================================

const JOB_SHORT_LABELS: Record<JobTarget, string> = {
  'audit-externe': 'Audit ext.',
  'audit-interne': 'Audit int.',
  'controle-interne': 'Ctrl interne',
  comptabilite: 'Compta',
  revision: 'Révision',
  tresorerie: 'Trésorerie',
  'controle-gestion': 'Ctrl gestion',
  general: 'Général',
}

interface JobStat {
  job: JobTarget
  label: string
  short: string
  attempts: number
  correct: number
  rate: number | null
}

type JobStatus = 'mastered' | 'progress' | 'review'

const STATUS_META: Record<JobStatus, { label: string; className: string }> = {
  mastered: {
    label: 'Maîtrisé',
    className: 'border-emerald-600/50 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300',
  },
  progress: {
    label: 'En cours d’acquisition',
    className: 'border-amber-600/50 bg-amber-600/10 text-amber-700 dark:text-amber-400',
  },
  review: {
    label: 'À revoir',
    className: 'border-rose-600/50 bg-rose-600/10 text-rose-700 dark:text-rose-300',
  },
}

const PRIORITY_CLASS: Record<number, string> = {
  1: 'border-rose-600/50 bg-rose-600/10 text-rose-700 dark:text-rose-300',
  2: 'border-amber-600/50 bg-amber-600/10 text-amber-700 dark:text-amber-400',
  3: 'border-emerald-600/50 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300',
}

interface Recommendation {
  priority: 1 | 2 | 3
  severity: number
  title: string
  detail: string
  action: string
  onClick: () => void
}

/** Maîtrisé : ≥ 80 % ET ≥ 5 tentatives. Jamais après une seule bonne réponse. */
function jobStatus(stat: JobStat): JobStatus {
  if (stat.attempts === 0) return 'review'
  if (stat.rate !== null && stat.rate >= 80 && stat.attempts >= 5) return 'mastered'
  if (stat.rate !== null && stat.rate >= 50) return 'progress'
  return 'review'
}

function rateColor(rate: number): string {
  if (rate >= 80) return '#059669'
  if (rate >= 50) return '#d97706'
  return '#e11d48'
}

function formatDay(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function plural(count: number, singular: string, pluralForm: string): string {
  return `${count} ${count > 1 ? pluralForm : singular}`
}

// ---------------------------------------------------------------------
// Horloge et détection client : useSyncExternalStore avec un instantané
// serveur neutre (0 / false) pour éviter tout écart d'hydratation —
// même approche que le module Questions rapides.
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

function subscribeNoop() {
  return () => undefined
}

function getTrue(): boolean {
  return true
}

function getFalse(): boolean {
  return false
}

function KpiCard({
  icon: Icon,
  label,
  value,
  hint,
  pct,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
  hint: string
  pct: number
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription className="flex items-center gap-1.5 font-medium">
          <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden /> {label}
        </CardDescription>
        <CardTitle className="text-2xl tabular-nums">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={pct} className="h-1.5" aria-label={`${label} : ${value}`} />
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  )
}

export default function EvolutionSection() {
  const missionProgress = useAppStore((s) => s.missionProgress)
  const questionStats = useAppStore((s) => s.questionStats)
  const reviewCards = useAppStore((s) => s.reviewCards)
  const exerciseDone = useAppStore((s) => s.exerciseDone)
  const savedInterviews = useAppStore((s) => s.savedInterviews)
  const navigate = useAppStore((s) => s.navigate)
  const openMission = useAppStore((s) => s.openMission)

  // Horloge alignée à la minute (0 côté serveur) et montage client
  // uniquement : évite tout écart d'hydratation pour les notions dues
  // et le rendu du graphique recharts.
  const now = useSyncExternalStore(subscribeToClock, getClockSnapshot, getServerClockSnapshot)
  const chartReady = useSyncExternalStore(subscribeNoop, getTrue, getFalse)

  // ----- Vue d'ensemble -----
  const missionsStarted = useMemo(
    () => allMissions.filter((m) => missionProgress[m.id] !== undefined),
    [missionProgress],
  )

  const missionsCompleted = useMemo(
    () =>
      allMissions.filter((m) => {
        const mp = missionProgress[m.id]
        return mp !== undefined && MISSION_STEPS.every((step) => mp.stepsDone.includes(step.key))
      }),
    [missionProgress],
  )

  const totalExercises = useMemo(
    () => allMissions.reduce((acc, m) => acc + m.exercises.length, 0),
    [],
  )

  const exercisesPassed = useMemo(
    () => Object.values(exerciseDone).filter((e) => e.score >= 60).length,
    [exerciseDone],
  )

  const quizTotals = useMemo(() => {
    let attempts = 0
    let correct = 0
    for (const stat of Object.values(questionStats)) {
      attempts += stat.attempts
      correct += stat.correct
    }
    return { attempts, correct, rate: attempts > 0 ? Math.round((correct / attempts) * 100) : null }
  }, [questionStats])

  // ----- Statistiques par métier (domaine des questions) -----
  const jobStats = useMemo<JobStat[]>(() => {
    const acc = new Map<JobTarget, { attempts: number; correct: number }>()
    for (const question of bankQuestions) {
      const stat = questionStats[question.id]
      if (!stat || stat.attempts === 0) continue
      const current = acc.get(question.job) ?? { attempts: 0, correct: 0 }
      current.attempts += stat.attempts
      current.correct += stat.correct
      acc.set(question.job, current)
    }
    return (Object.keys(jobLabels) as JobTarget[])
      .map((job) => {
        const current = acc.get(job) ?? { attempts: 0, correct: 0 }
        return {
          job,
          label: jobLabels[job],
          short: JOB_SHORT_LABELS[job],
          attempts: current.attempts,
          correct: current.correct,
          rate: current.attempts > 0 ? Math.round((current.correct / current.attempts) * 100) : null,
        }
      })
      .sort((a, b) => b.attempts - a.attempts)
  }, [questionStats])

  const chartData = useMemo(
    () =>
      jobStats
        .filter((s) => s.attempts > 0)
        .map((s) => ({ job: s.job, name: s.short, rate: s.rate ?? 0 })),
    [jobStats],
  )

  // ----- Questions à revoir : tentées au moins une fois, jamais entièrement réussies -----
  const questionsToReview = useMemo(() => {
    return bankQuestions
      .flatMap((question) => {
        const stat = questionStats[question.id]
        if (!stat || stat.attempts === 0 || stat.correct >= stat.attempts) return []
        return [{ question, stat }]
      })
      .sort((a, b) => {
        const rateA = a.stat.correct / a.stat.attempts
        const rateB = b.stat.correct / b.stat.attempts
        if (rateA !== rateB) return rateA - rateB
        return b.stat.attempts - a.stat.attempts
      })
      .slice(0, 15)
  }, [questionStats])

  // ----- Notions dues (répétition espacée) : cartes revues ≥ 2 fois et échues -----
  const dueNotions = useMemo(() => {
    if (now === 0) return [] as { question: BankQuestion; repetitions: number; dueAt: number }[]
    return bankQuestions
      .flatMap((question) => {
        const card = reviewCards[question.id]
        if (!card || card.repetitions < 2 || card.dueAt > now) return []
        return [{ question, repetitions: card.repetitions, dueAt: card.dueAt }]
      })
      .sort((a, b) => a.dueAt - b.dueAt)
      .slice(0, 10)
  }, [reviewCards, now])

  // ----- Missions jamais étudiées -----
  const unstudiedMissions = useMemo(
    () => allMissions.filter((m) => missionProgress[m.id] === undefined),
    [missionProgress],
  )

  // ----- Programme de révision personnalisé (généré localement, hiérarchisé) -----
  const recommendations = useMemo<Recommendation[]>(() => {
    const recs: Recommendation[] = []

    for (const stat of jobStats) {
      if (stat.attempts === 0 || stat.rate === null || stat.rate >= 50) continue
      recs.push({
        priority: 1,
        severity: 50 - stat.rate,
        title: `Mini-leçons + questions ciblées sur « ${stat.label} »`,
        detail: `Taux de réussite de ${stat.rate} % sur ${plural(stat.attempts, 'réponse', 'réponses')}. Relisez les fiches de la bibliothèque technique puis lancez une session filtrée sur ce métier (filtre « ${stat.label} » dans les questions rapides).`,
        action: 'Aller aux questions',
        onClick: () => navigate('quiz'),
      })
    }

    for (const mission of allMissions) {
      const attempted = mission.exercises.filter((ex) => exerciseDone[ex.id] !== undefined)
      if (attempted.length === 0) continue
      const below = attempted.filter((ex) => (exerciseDone[ex.id]?.score ?? 0) < 60)
      if (below.length === 0) continue
      recs.push({
        priority: 2,
        severity: below.length,
        title: `Refaire la mise en situation de la mission « ${mission.title} »`,
        detail: `${below.length} exercice${below.length > 1 ? 's' : ''} terminé${below.length > 1 ? 's' : ''} sous le seuil de 60 % (${mission.company}). Retravaillez la mise en situation à l’étape 5 du parcours.`,
        action: 'Ouvrir la mission',
        onClick: () => openMission(mission.id),
      })
    }

    if (dueNotions.length > 0) {
      recs.push({
        priority: 2,
        severity: dueNotions.length,
        title: `Réviser les ${dueNotions.length} notions dues aujourd’hui`,
        detail:
          'La répétition espacée signale des notions revues au moins deux fois et à reconsolider (onglet « Notions dues » des questions rapides).',
        action: 'Réviser maintenant',
        onClick: () => navigate('quiz'),
      })
    }

    if (savedInterviews.length === 0) {
      recs.push({
        priority: 3,
        severity: 0,
        title: 'Programmer un entretien blanc',
        detail:
          'Aucun entretien simulé enregistré. Planifiez une session de 15 à 20 minutes pour confronter vos connaissances à un recruteur simulé.',
        action: 'Simuler un entretien',
        onClick: () => navigate('simulateur'),
      })
    }

    return recs.sort((a, b) => a.priority - b.priority || b.severity - a.severity)
  }, [jobStats, exerciseDone, dueNotions, savedInterviews, navigate, openMission])

  // ----- Progression entre sessions -----
  const activity = useMemo(() => {
    const stamps = Object.values(questionStats).map((s) => s.lastTimestamp)
    if (stamps.length === 0) return null
    return {
      first: Math.min(...stamps),
      last: Math.max(...stamps),
      uniqueQuestions: stamps.length,
    }
  }, [questionStats])

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <section className="rounded-xl border bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-6">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingUp className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Mon évolution</h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Vue d’ensemble de votre progression pédagogique : missions, mises en situation,
              questions rapides et entretiens simulés. Tous les indicateurs sont calculés
              localement à partir de vos données enregistrées dans ce navigateur.
            </p>
          </div>
        </div>
      </section>

      {/* Vue d’ensemble — 4 KPI */}
      <section aria-label="Vue d’ensemble" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          icon={GraduationCap}
          label="Missions entamées"
          value={`${missionsStarted.length}/${allMissions.length}`}
          hint={
            missionsStarted.length > 0
              ? `${plural(missionsCompleted.length, 'mission entièrement terminée', 'missions entièrement terminées')} sur ${missionsStarted.length} entamée${missionsStarted.length > 1 ? 's' : ''}.`
              : 'Aucune mission du parcours encore ouverte.'
          }
          pct={allMissions.length > 0 ? Math.round((missionsStarted.length / allMissions.length) * 100) : 0}
        />
        <KpiCard
          icon={ClipboardList}
          label="Exercices réussis"
          value={`${exercisesPassed}/${totalExercises}`}
          hint={`Mises en situation terminées avec un score d’au moins 60 % (${plural(exercisesPassed, 'exercice', 'exercices')} validé${exercisesPassed > 1 ? 's' : ''}).`}
          pct={totalExercises > 0 ? Math.round((exercisesPassed / totalExercises) * 100) : 0}
        />
        <KpiCard
          icon={HelpCircle}
          label="Taux de réussite quiz"
          value={quizTotals.rate !== null ? `${quizTotals.rate} %` : '—'}
          hint={
            quizTotals.attempts > 0
              ? `${plural(quizTotals.correct, 'bonne réponse', 'bonnes réponses')} sur ${plural(quizTotals.attempts, 'réponse enregistrée', 'réponses enregistrées')}.`
              : 'Aucune réponse enregistrée pour l’instant.'
          }
          pct={quizTotals.rate ?? 0}
        />
        <KpiCard
          icon={MessagesSquare}
          label="Entretiens réalisés"
          value={`${savedInterviews.length}`}
          hint={
            savedInterviews.length > 0
              ? `${plural(savedInterviews.length, 'session sauvegardée', 'sessions sauvegardées')} dans l’historique du simulateur.`
              : 'Objectif informel : 5 sessions avant l’entretien réel.'
          }
          pct={Math.min(100, savedInterviews.length * 20)}
        />
      </section>

      {/* Graphique de progression par domaine */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-primary" aria-hidden /> Progression par domaine de questions
          </CardTitle>
          <CardDescription>
            Taux de réussite aux questions rapides, calculé sur vos réponses enregistrées et
            regroupé par métier visé par chaque question.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {chartData.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed py-10 text-center">
              <HelpCircle className="h-8 w-8 text-muted-foreground/60" aria-hidden />
              <p className="text-sm text-muted-foreground">
                Aucune réponse enregistrée pour l’instant.
              </p>
              <Button size="sm" variant="outline" onClick={() => navigate('quiz')}>
                <HelpCircle className="mr-1.5 h-4 w-4" aria-hidden /> Répondre à mes premières questions
              </Button>
            </div>
          ) : chartReady ? (
            <>
              <div
                className="h-72 w-full"
                role="img"
                aria-label="Taux de réussite par domaine de questions"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 8, right: 8, left: -18, bottom: 8 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(128,128,128,0.25)" />
                    <XAxis
                      dataKey="name"
                      interval={0}
                      angle={-25}
                      textAnchor="end"
                      height={64}
                      tick={{ fontSize: 11 }}
                      tickLine={false}
                      axisLine={{ stroke: 'rgba(128,128,128,0.4)' }}
                    />
                    <YAxis
                      domain={[0, 100]}
                      width={52}
                      tick={{ fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value: number) => `${value} %`}
                    />
                    <Tooltip
                      formatter={(value: number) => `${Math.round(value)} %`}
                      cursor={{ fill: 'rgba(128,128,128,0.12)' }}
                    />
                    <Bar dataKey="rate" name="Taux de réussite" radius={[6, 6, 0, 0]} maxBarSize={44}>
                      {chartData.map((entry) => (
                        <Cell key={entry.job} fill={rateColor(entry.rate)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Chaque barre indique le pourcentage de bonnes réponses d’un métier : vert ≥ 80 %,
                orange ≥ 50 %, rouge en dessous de 50 %.
              </p>
            </>
          ) : (
            <div className="h-72 w-full animate-pulse rounded-lg bg-muted" aria-hidden />
          )}
        </CardContent>
      </Card>

      {/* Compétences par métier */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ListChecks className="h-4 w-4 text-primary" aria-hidden /> Compétences par métier
          </CardTitle>
          <CardDescription>
            Tentatives cumulées, réussites et statut d’acquisition pour chaque métier couvert par la
            banque de questions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Métier</TableHead>
                <TableHead className="text-right">Tentatives</TableHead>
                <TableHead className="text-right">Réussites</TableHead>
                <TableHead className="text-right">Taux</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobStats.map((stat) => {
                const status = STATUS_META[jobStatus(stat)]
                return (
                  <TableRow key={stat.job}>
                    <TableCell className="font-medium">{stat.label}</TableCell>
                    <TableCell className="text-right tabular-nums">{stat.attempts}</TableCell>
                    <TableCell className="text-right tabular-nums">{stat.correct}</TableCell>
                    <TableCell className="text-right tabular-nums">
                      {stat.rate !== null ? `${stat.rate} %` : '—'}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={cn('text-[11px]', status.className)}>
                        {status.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <p className="flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
            <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            <span>
              Règle d’affichage : un métier n’est <strong>jamais</strong> marqué « Maîtrisé » après
              une seule bonne réponse. Il faut au moins 5 tentatives et 80 % de réussite ; entre 50 %
              et 80 % le métier reste « En cours d’acquisition », en dessous de 50 % ou jamais tenté
              il est « À revoir ».
            </span>
          </p>
        </CardContent>
      </Card>

      {/* Questions à revoir + erreurs récurrentes */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ClipboardList className="h-4 w-4 text-primary" aria-hidden /> Questions à revoir
            </CardTitle>
            <CardDescription>
              {questionsToReview.length > 0
                ? `${plural(questionsToReview.length, 'question tentée sans être entièrement réussie', 'questions tentées sans être entièrement réussies')} — affichage limité à 15.`
                : 'Questions tentées au moins une fois et jamais entièrement réussies.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            {questionsToReview.length === 0 ? (
              <div className="flex h-full min-h-32 flex-col items-center justify-center gap-2 rounded-lg border border-dashed text-center">
                <CheckCircle2 className="h-8 w-8 text-emerald-600/70" aria-hidden />
                <p className="text-sm font-medium">Aucune question à retravailler</p>
                <p className="max-w-xs text-xs text-muted-foreground">
                  Les questions tentées ont toutes été réussies au moins une fois. Continuez à
                  élargir les domaines couverts.
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {questionsToReview.map(({ question, stat }: { question: BankQuestion; stat: QuestionStat }) => (
                  <li key={question.id} className="rounded-lg border p-3">
                    <p className="line-clamp-2 text-sm leading-relaxed">{question.question}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline" className="text-[10px]">
                        {jobLabels[question.job]}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-rose-600/50 bg-rose-600/10 text-[10px] text-rose-700 dark:text-rose-300"
                      >
                        {stat.correct}/{stat.attempts} réussite{stat.attempts > 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
          {questionsToReview.length > 0 ? (
            <CardFooter className="border-t pt-4">
              <Button size="sm" onClick={() => navigate('quiz')}>
                <HelpCircle className="mr-1.5 h-4 w-4" aria-hidden /> Aller réviser
              </Button>
            </CardFooter>
          ) : null}
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Layers className="h-4 w-4 text-primary" aria-hidden /> Erreurs récurrentes / notions à réviser
            </CardTitle>
            <CardDescription>
              Notions signalées par la répétition espacée : revues au moins deux fois et dues
              aujourd’hui.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            {dueNotions.length === 0 ? (
              <div className="flex h-full min-h-32 flex-col items-center justify-center gap-2 rounded-lg border border-dashed text-center">
                <CheckCircle2 className="h-8 w-8 text-emerald-600/70" aria-hidden />
                <p className="text-sm font-medium">Aucune notion due à révision</p>
                <p className="max-w-xs text-xs text-muted-foreground">
                  La répétition espacée est à jour. Les notions auto-évaluées « Vaguement » ou « Pas
                  du tout » reviendront ici au fil de vos sessions.
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {dueNotions.map(({ question, repetitions }) => (
                  <li key={question.id} className="rounded-lg border p-3">
                    <p className="line-clamp-2 text-sm leading-relaxed">{question.question}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline" className="text-[10px]">
                        {jobLabels[question.job]}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-amber-600/50 bg-amber-600/10 text-[10px] text-amber-700 dark:text-amber-400"
                      >
                        Revue {repetitions} fois
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
          {dueNotions.length > 0 ? (
            <CardFooter className="border-t pt-4">
              <Button size="sm" variant="outline" onClick={() => navigate('quiz')}>
                <Layers className="mr-1.5 h-4 w-4" aria-hidden /> Réviser ces notions
              </Button>
            </CardFooter>
          ) : null}
        </Card>
      </div>

      {/* Missions non étudiées */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <GraduationCap className="h-4 w-4 text-primary" aria-hidden /> Missions non étudiées
          </CardTitle>
          <CardDescription>
            Missions du parcours jamais ouvertes — cliquez sur une mission pour la découvrir.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {unstudiedMissions.length === 0 ? (
            <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
              Toutes les missions ont été entamées. Concentrez-vous sur celles dont les 8 étapes ne
              sont pas encore terminées.
            </p>
          ) : (
            <ul className="grid gap-2 sm:grid-cols-2">
              {unstudiedMissions.map((mission) => (
                <li key={mission.id}>
                  <button
                    type="button"
                    onClick={() => openMission(mission.id)}
                    className="flex w-full flex-col items-start gap-1.5 rounded-lg border p-3 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-[10px]">
                        {mission.company}
                      </Badge>
                      Mission {mission.order} · {mission.period}
                    </span>
                    <span className="text-sm font-medium leading-snug">{mission.title}</span>
                    <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {mission.summary}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Programme de révision personnalisé */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Target className="h-4 w-4 text-primary" aria-hidden /> Programme de révision personnalisé
          </CardTitle>
          <CardDescription>
            Généré localement à partir de votre progression réelle, hiérarchisé par gravité —
            aucune donnée ne quitte ce navigateur.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recommendations.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-lg border border-emerald-600/30 bg-emerald-600/5 p-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden />
              <p className="text-sm font-medium">Aucun point faible détecté</p>
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
                Tous les domaines travaillés dépassent 50 % de réussite, vos mises en situation sont
                validées et au moins un entretien a été simulé. Continuez à varier les métiers et
                les niveaux de difficulté.
              </p>
            </div>
          ) : (
            <ol className="space-y-2">
              {recommendations.map((rec, index) => (
                <li
                  key={`${rec.priority}-${index}`}
                  className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-start"
                >
                  <Badge
                    variant="outline"
                    className={cn('shrink-0 text-[11px]', PRIORITY_CLASS[rec.priority])}
                  >
                    Priorité {rec.priority}
                  </Badge>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug">{rec.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{rec.detail}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="shrink-0 self-start"
                    onClick={rec.onClick}
                  >
                    {rec.action}
                  </Button>
                </li>
              ))}
            </ol>
          )}
        </CardContent>
      </Card>

      {/* Progression entre sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden /> Progression entre sessions
          </CardTitle>
          <CardDescription>Vos dates d’activité sur les questions rapides.</CardDescription>
        </CardHeader>
        <CardContent>
          {activity === null ? (
            <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
              Aucune activité enregistrée pour l’instant — votre première session de questions
              affichera ici vos dates de suivi.
            </p>
          ) : (
            <div className="space-y-1.5">
              <p className="text-sm leading-relaxed">
                Première activité le <strong>{formatDay(activity.first)}</strong>, dernière le{' '}
                <strong>{formatDay(activity.last)}</strong>.
              </p>
              <p className="text-xs text-muted-foreground">
                {plural(activity.uniqueQuestions, 'question distincte travaillée', 'questions distinctes travaillées')} sur cette période.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
