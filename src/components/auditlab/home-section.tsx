'use client'

import { useMemo } from 'react'
import { allMissions, fiches } from '@/lib/content'
import { bankQuestions } from '@/lib/content/questions'
import { practicalCases } from '@/lib/content/cases'
import { useAppStore } from '@/lib/store'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  MessagesSquare,
  GraduationCap,
  FolderSearch,
  HelpCircle,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Info,
  BookMarked,
} from 'lucide-react'

export default function HomeSection() {
  const navigate = useAppStore((s) => s.navigate)
  const openMission = useAppStore((s) => s.openMission)
  const missionProgress = useAppStore((s) => s.missionProgress)
  const exerciseDone = useAppStore((s) => s.exerciseDone)
  const questionStats = useAppStore((s) => s.questionStats)
  const reviewCards = useAppStore((s) => s.reviewCards)
  const experiences = useAppStore((s) => s.experiences)
  const savedInterviews = useAppStore((s) => s.savedInterviews)

  const stats = useMemo(() => {
    const missionsVisited = Object.keys(missionProgress).length
    const exercisesOk = Object.values(exerciseDone).filter((e) => e.score >= 60).length
    const totalExercises = allMissions.reduce((acc, m) => acc + m.exercises.length, 0)
    const qAttempts = Object.values(questionStats).reduce((acc, q) => acc + q.attempts, 0)
    const qCorrect = Object.values(questionStats).reduce((acc, q) => acc + q.correct, 0)
    const dueReviews = Object.values(reviewCards).filter((c) => c.dueAt <= Date.now()).length
    const stepsDone = Object.values(missionProgress).reduce((acc, m) => acc + m.stepsDone.length, 0)
    return { missionsVisited, exercisesOk, totalExercises, qAttempts, qCorrect, dueReviews, stepsDone }
  }, [missionProgress, exerciseDone, questionStats, reviewCards])

  const quickAccess = [
    {
      id: 'parcours' as const,
      icon: GraduationCap,
      title: "Parcours d'apprentissage",
      desc: `${allMissions.length} missions pédagogiques issues des 3 fiches, en 10 étapes`,
      cta: 'Commencer une mission',
    },
    {
      id: 'simulateur' as const,
      icon: MessagesSquare,
      title: "Simulateur d'entretien",
      desc: 'Conversation interactive avec 6 profils de recruteurs et 5 niveaux de difficulté',
      cta: 'Lancer un entretien',
    },
    {
      id: 'cas' as const,
      icon: FolderSearch,
      title: 'Laboratoire de cas',
      desc: `${practicalCases.length || '12+'} dossiers documentaires à analyser étape par étape`,
      cta: 'Ouvrir un dossier',
    },
    {
      id: 'quiz' as const,
      icon: HelpCircle,
      title: 'Questions rapides',
      desc: `${bankQuestions.length || '250+'} questions classées par métier, mission et difficulté`,
      cta: 'Réviser',
    },
  ]

  const notStarted = allMissions.filter((m) => !missionProgress[m.id]).slice(0, 3)

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <section className="rounded-xl border bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-6">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
              AuditLab — Préparation aux entretiens PFE
            </h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Audit externe et légal · audit contractuel · audit interne · contrôle interne ·
              comptabilité générale · révision comptable · trésorerie et rapprochements bancaires ·
              contrôle de gestion · contrôle des achats, ventes et décaissements · clôtures
              mensuelle et annuelle.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button onClick={() => navigate('simulateur')}>
            <MessagesSquare className="mr-1.5 h-4 w-4" aria-hidden /> Simuler un entretien
          </Button>
          <Button variant="outline" onClick={() => navigate('parcours')}>
            <GraduationCap className="mr-1.5 h-4 w-4" aria-hidden /> Explorer les missions
          </Button>
        </div>
      </section>

      {/* Indicateurs de progression */}
      <section aria-label="Progression globale">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: 'Missions entamées',
              value: `${stats.missionsVisited}/${allMissions.length}`,
              pct: allMissions.length ? Math.round((stats.missionsVisited / allMissions.length) * 100) : 0,
            },
            {
              label: 'Exercices réussis (≥ 60 %)',
              value: `${stats.exercisesOk}/${stats.totalExercises}`,
              pct: stats.totalExercises ? Math.round((stats.exercisesOk / stats.totalExercises) * 100) : 0,
            },
            {
              label: 'Réponses aux quiz',
              value: stats.qAttempts ? `${Math.round((stats.qCorrect / stats.qAttempts) * 100)} %` : '—',
              pct: stats.qAttempts ? Math.round((stats.qCorrect / stats.qAttempts) * 100) : 0,
            },
            {
              label: 'Entretiens réalisés',
              value: `${savedInterviews.length}`,
              pct: Math.min(savedInterviews.length * 20, 100),
            },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="mt-1 text-xl font-semibold tabular-nums">{s.value}</p>
                <Progress value={s.pct} className="mt-2 h-1.5" aria-hidden />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* File de révision */}
      {stats.dueReviews > 0 ? (
        <Card className="border-amber-300 bg-amber-50/60 dark:border-amber-800 dark:bg-amber-950/40">
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <BookMarked className="mt-0.5 h-5 w-5 text-amber-600" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                  {stats.dueReviews} notion(s) à réviser aujourd&apos;hui
                </p>
                <p className="text-xs text-amber-800/80 dark:text-amber-300/80">
                  Révision espacée : les questions mal maîtrisées reviennent au bon moment.
                </p>
              </div>
            </div>
            <Button size="sm" onClick={() => navigate('quiz')} className="shrink-0">
              Réviser maintenant <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
            </Button>
          </CardContent>
        </Card>
      ) : null}

      {/* Accès rapides */}
      <section aria-label="Accès rapides">
        <h2 className="mb-3 text-lg font-semibold">Accès rapides</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {quickAccess.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => navigate(item.id)}
            >
              <CardContent className="flex gap-4 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <p className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {item.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reprendre / suggestions */}
      <section aria-label="Suggestions">
        <h2 className="mb-3 text-lg font-semibold">Pour commencer</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {notStarted.map((m) => (
            <Card
              key={m.id}
              className="cursor-pointer transition-shadow hover:shadow-md"
              onClick={() => openMission(m.id)}
            >
              <CardHeader className="pb-2">
                <CardDescription>
                  {fiches.find((f) => f.id === m.ficheId)?.company} · Mission {m.order}
                </CardDescription>
                <CardTitle className="text-sm leading-snug">{m.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">{m.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Honnêteté professionnelle */}
      <section aria-label="Avertissement d'honnêteté">
        <Card className="border-dashed">
          <CardContent className="flex gap-3 p-4">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
            <div className="space-y-1 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">Deux modes d&apos;entraînement, zéro invention</p>
              <p>
                <strong>Mode A — Apprentissage technique :</strong> les fiches de stage sont des
                scénarios pédagogiques fictifs ; les exercices emploient des formulations
                hypothétiques (« dans ce cas, je commencerais par… »).
              </p>
              <p>
                <strong>Mode B — Expériences réelles :</strong> saisissez uniquement vos véritables
                expériences dans « Mes expériences réelles » (
                {experiences.length > 0 ? `${experiences.length} déclarée(s)` : 'aucune pour l’instant'}
                ). Le simulateur ne transforme jamais une mission fictive en expérience vécue.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
