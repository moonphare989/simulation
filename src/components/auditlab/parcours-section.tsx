'use client'

import { useEffect, useMemo, useState } from 'react'
import { allMissions, fiches, getMission, MISSION_STEPS } from '@/lib/content'
import { useAppStore } from '@/lib/store'
import type { FicheId, Mission } from '@/lib/types'
import { ExerciseRunner } from '@/components/auditlab/exercise-runner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  ArrowLeft,
  BookOpen,
  Target,
  ClipboardList,
  ListOrdered,
  MessagesSquare,
  Reply,
  Gauge,
  Building2,
  CalendarDays,
  Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ficheBadge: Record<FicheId, { label: string; className: string }> = {
  fidumac: { label: 'Fiche 1 — Fidumac · Audit', className: 'bg-emerald-600' },
  renault: { label: 'Fiche 2 — Renault · Compta & Trésorerie', className: 'bg-amber-600' },
  danone: { label: 'Fiche 3 — Centrale Danone · Comptabilité', className: 'bg-rose-600' },
}

function MissionList() {
  const openMission = useAppStore((s) => s.openMission)
  const selectedFiche = useAppStore((s) => s.selectedFiche)
  const setFicheFilter = useAppStore((s) => s.setFicheFilter)
  const missionProgress = useAppStore((s) => s.missionProgress)

  const filtered = useMemo(
    () => (selectedFiche === 'all' ? allMissions : allMissions.filter((m) => m.ficheId === selectedFiche)),
    [selectedFiche]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Parcours d&apos;apprentissage</h1>
        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Les trois fiches de stage transformées en modules pédagogiques indépendants. Chaque
          mission suit un parcours en dix étapes : compréhension, objectifs, préparation, méthode,
          mise en situation, travail actif, correction, entretien, relances et évaluation.
        </p>
        <div className="mt-3 rounded-md border border-dashed bg-muted/40 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          <Info className="mr-1 inline h-3.5 w-3.5" aria-hidden />
          Rappel d&apos;honnêteté : ces fiches sont des scénarios pédagogiques. Le site ne considère
          pas que ces missions ont été réellement effectuées — utilisez le mode A pour apprendre, et
          la rubrique « Mes expériences réelles » pour vos véritables expériences.
        </div>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par fiche">
        <Button
          variant={selectedFiche === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFicheFilter('all')}
        >
          Toutes les fiches ({allMissions.length})
        </Button>
        {fiches.map((f) => (
          <Button
            key={f.id}
            variant={selectedFiche === f.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFicheFilter(f.id)}
          >
            {f.company} ({allMissions.filter((m) => m.ficheId === f.id).length})
          </Button>
        ))}
      </div>

      {fiches
        .filter((f) => selectedFiche === 'all' || selectedFiche === f.id)
        .map((fiche) => {
          const missions = filtered.filter((m) => m.ficheId === fiche.id)
          if (missions.length === 0) return null
          return (
            <section key={fiche.id} aria-labelledby={`fiche-${fiche.id}`}>
              <div className="mb-3 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" aria-hidden />
                <h2 className="text-lg font-semibold">{fiche.company}</h2>
                <Badge variant="outline">{fiche.domain}</Badge>
              </div>
              <p className="mb-4 max-w-3xl text-sm text-muted-foreground">{fiche.description}</p>
              <div className="grid gap-3 md:grid-cols-2">
                {missions.map((mission) => {
                  const progress = missionProgress[mission.id]
                  const doneSteps = progress?.stepsDone.length ?? 0
                  const pct = Math.round((doneSteps / MISSION_STEPS.length) * 100)
                  return (
                    <Card
                      key={mission.id}
                      className="cursor-pointer transition-shadow hover:shadow-md"
                      onClick={() => openMission(mission.id)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-medium text-muted-foreground">
                              Mission {mission.order}
                            </p>
                            <CardTitle className="text-base leading-snug">{mission.title}</CardTitle>
                          </div>
                          <Badge className={cn('shrink-0 text-[10px]', ficheBadge[mission.ficheId].className)}>
                            Fiche {mission.ficheId === 'fidumac' ? '1' : mission.ficheId === 'renault' ? '2' : '3'}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-1 pt-1">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden /> {mission.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{mission.summary}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <Progress value={pct} className="h-1.5 flex-1" aria-label={`Progression ${pct}%`} />
                          <span className="text-xs text-muted-foreground">{pct}%</span>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {mission.exercises.length} exercice(s) interactif(s) ·{' '}
                          {mission.referenceData.length} donnée(s) de référence
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>
          )
        })}
    </div>
  )
}

function StepHeader({ icon: Icon, title, subtitle }: { icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4.5 w-4.5 text-primary" aria-hidden />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

function MissionDetail({ mission }: { mission: Mission }) {
  const openMission = useAppStore((s) => s.openMission)
  const navigate = useAppStore((s) => s.navigate)
  const markStepDone = useAppStore((s) => s.markStepDone)
  const progress = useAppStore((s) => s.missionProgress[mission.id])
  const [tab, setTab] = useState('comprehension')

  useEffect(() => {
    markStepDone(mission.id, tab)
  }, [tab, mission.id, markStepDone])

  const doneSteps = progress?.stepsDone.length ?? 0
  const pct = Math.round((doneSteps / MISSION_STEPS.length) * 100)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => openMission(null)}>
          <ArrowLeft className="mr-1 h-4 w-4" aria-hidden /> Toutes les missions
        </Button>
        <Badge className={ficheBadge[mission.ficheId].className}>
          {ficheBadge[mission.ficheId].label}
        </Badge>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Mission {mission.order} — {mission.title}
        </h1>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" aria-hidden /> {mission.company} (fictif) · {mission.sector}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden /> {mission.period} — scénario pédagogique
          </span>
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed">{mission.summary}</p>
        {mission.referenceData.length > 0 ? (
          <div className="mt-3 rounded-md border bg-muted/30 px-3 py-2">
            <p className="text-xs font-semibold text-muted-foreground">Données de référence de la fiche</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-muted-foreground">
              {mission.referenceData.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="mt-3 flex items-center gap-2">
          <Progress value={pct} className="h-1.5 max-w-64" aria-label={`Progression de la mission : ${pct}%`} />
          <span className="text-xs text-muted-foreground">
            {doneSteps}/{MISSION_STEPS.length} étapes visitées
          </span>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="gap-4">
        <TabsList className="auditlab-scroll h-auto w-full flex-wrap justify-start overflow-x-auto">
          <TabsTrigger value="comprehension" className="text-xs sm:text-sm">
            <BookOpen className="mr-1 h-3.5 w-3.5" aria-hidden /> 1 · Compréhension
          </TabsTrigger>
          <TabsTrigger value="objectives" className="text-xs sm:text-sm">
            <Target className="mr-1 h-3.5 w-3.5" aria-hidden /> 2 · Objectifs
          </TabsTrigger>
          <TabsTrigger value="preparation" className="text-xs sm:text-sm">
            <ClipboardList className="mr-1 h-3.5 w-3.5" aria-hidden /> 3 · Préparation
          </TabsTrigger>
          <TabsTrigger value="method" className="text-xs sm:text-sm">
            <ListOrdered className="mr-1 h-3.5 w-3.5" aria-hidden /> 4 · Méthode
          </TabsTrigger>
          <TabsTrigger value="situation" className="text-xs sm:text-sm">
            5-6 · Mise en situation & travail actif
          </TabsTrigger>
          <TabsTrigger value="interview" className="text-xs sm:text-sm">
            <MessagesSquare className="mr-1 h-3.5 w-3.5" aria-hidden /> 8 · Entretien
          </TabsTrigger>
          <TabsTrigger value="followups" className="text-xs sm:text-sm">
            <Reply className="mr-1 h-3.5 w-3.5" aria-hidden /> 9 · Relances
          </TabsTrigger>
          <TabsTrigger value="evaluation" className="text-xs sm:text-sm">
            <Gauge className="mr-1 h-3.5 w-3.5" aria-hidden /> 10 · Évaluation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comprehension" className="space-y-4">
          <StepHeader icon={BookOpen} title="Étape 1 — Compréhension" subtitle="La mission expliquée en langage professionnel accessible" />
          <p className="text-sm leading-relaxed">{mission.comprehension.intro}</p>
          {mission.comprehension.definitions.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {mission.comprehension.definitions.map((d, i) => (
                <div key={i} className="rounded-lg border-l-4 border-primary bg-muted/30 p-3">
                  <p className="text-sm font-semibold">{d.term}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.definition}</p>
                </div>
              ))}
            </div>
          ) : null}
          {mission.comprehension.keyPoints.length > 0 ? (
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-semibold">Points clés à retenir</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {mission.comprehension.keyPoints.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </TabsContent>

        <TabsContent value="objectives" className="space-y-4">
          <StepHeader icon={Target} title="Étape 2 — Objectifs" subtitle="Pourquoi cette mission existe et quels risques elle couvre" />
          <p className="text-sm leading-relaxed">{mission.objectives.why}</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-semibold">Informations à obtenir</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {mission.objectives.infoSought.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-semibold">Risques couverts</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {mission.objectives.risksCovered.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preparation" className="space-y-4">
          <StepHeader icon={ClipboardList} title="Étape 3 — Préparation" subtitle="Ce qu'un professionnel réunit avant de commencer" />
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-semibold">Documents à demander</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {mission.preparation.documents.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-semibold">Questions à poser</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {mission.preparation.questionsToAsk.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-semibold">Précautions</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {mission.preparation.precautions.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="method" className="space-y-4">
          <StepHeader icon={ListOrdered} title="Étape 4 — Méthode" subtitle="La procédure complète, dans son ordre logique" />
          <ol className="space-y-3">
            {mission.method.map((step, i) => (
              <li key={i} className="rounded-lg border p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    <p className="mt-1.5 text-sm italic leading-relaxed text-primary">
                      Pourquoi : {step.why}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </TabsContent>

        <TabsContent value="situation" className="space-y-4">
          <StepHeader icon={ListOrdered} title="Étapes 5 & 6 — Mise en situation et travail actif" subtitle="Examinez les données fictives, choisissez vos contrôles, répondez — les corrections sont révélées après validation (étape 7)" />
          {mission.exercises.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucun exercice pour cette mission.</p>
          ) : (
            <div className="space-y-6">
              {mission.exercises.map((ex) => (
                <ExerciseRunner key={ex.id} exercise={ex} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="interview" className="space-y-4">
          <StepHeader icon={MessagesSquare} title="Étape 8 — Entretien" subtitle="Les questions qu'un recruteur pourrait poser sur cette procédure" />
          <Accordion type="single" collapsible className="space-y-2">
            {mission.interviewQuestions.map((q, i) => (
              <AccordionItem key={i} value={`iq-${i}`} className="rounded-lg border px-4">
                <AccordionTrigger className="py-3 text-left text-sm font-medium hover:no-underline">
                  « {q.question} »
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  {q.hint ? (
                    <p className="mb-2 rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                      Indice : {q.hint}
                    </p>
                  ) : null}
                  <p className="text-sm leading-relaxed">{q.expected}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="followups" className="space-y-4">
          <StepHeader icon={Reply} title="Étape 9 — Questions de relance" subtitle="Le recruteur challenge votre réponse : soyez capable de justifier votre choix" />
          <Accordion type="single" collapsible className="space-y-2">
            {mission.followUps.map((q, i) => (
              <AccordionItem key={i} value={`fq-${i}`} className="rounded-lg border px-4">
                <AccordionTrigger className="py-3 text-left text-sm font-medium hover:no-underline">
                  « {q.question} »
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-sm leading-relaxed">{q.expected}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="evaluation" className="space-y-4">
          <StepHeader icon={Gauge} title="Étape 10 — Évaluation" subtitle="Grille de compétences : ce que vous devez maîtriser à l'issue de cette mission" />
          <div className="rounded-lg border">
            <CriteriaTable criteria={mission.evaluation.criteria} />
          </div>
          <Card>
            <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold">Vérifiez vos acquis</p>
                <p className="text-sm text-muted-foreground">
                  Passez les questions rapides liées à cette mission pour ancrer les notions.
                </p>
              </div>
              <Button onClick={() => navigate('quiz')}>Aller aux questions rapides</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CriteriaTable({ criteria }: { criteria: { label: string; description: string }[] }) {
  return (
    <div className="auditlab-scroll overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/40">
            <th className="px-4 py-2.5 text-left font-medium">Compétence</th>
            <th className="px-4 py-2.5 text-left font-medium">Attendu</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((c, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="px-4 py-2.5 font-medium">{c.label}</td>
              <td className="px-4 py-2.5 text-muted-foreground">{c.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ParcoursSection() {
  const selectedMissionId = useAppStore((s) => s.selectedMissionId)
  const mission = getMission(selectedMissionId)
  if (mission) {
    return <MissionDetail key={mission.id} mission={mission} />
  }
  return <MissionList />
}
