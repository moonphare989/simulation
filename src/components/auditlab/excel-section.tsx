'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  BookOpen,
  Check,
  ClipboardCheck,
  Copy,
  Eye,
  EyeOff,
  FileSpreadsheet,
  Lightbulb,
  ListChecks,
  RotateCcw,
  Search,
  SearchX,
  Sigma,
  Table2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { dashboardSpecs, excelExercises, excelFormulaCards } from '@/lib/content/excel'
import type { DashboardSpec, DocTable, ExcelExercise, ExcelFormulaCard } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DocumentViewer } from '@/components/auditlab/document-viewer'

// =====================================================================
// AuditLab — Module Excel & données : 16 fiches formules (recherche par
// nom, syntaxe copiable en un clic), 5 exercices aux données vérifiées
// (données sources rendues par DocumentViewer, réponses révélées tâche
// par tâche) et 3 specs de tableaux de bord (indicateurs, structure du
// classeur, contrôles de référence en checklist décorative).
// =====================================================================

/** Minuscules + suppression des diacritiques pour la recherche par nom. */
function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function SectionLabel({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
      <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
      {children}
    </p>
  )
}

// ---------------------------------------------------------------------
// Onglet 1 — Fiches formules
// ---------------------------------------------------------------------

function FormulaCard({ card }: { card: ExcelFormulaCard }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleCopy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    try {
      await navigator.clipboard.writeText(card.syntax)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    timerRef.current = setTimeout(() => setCopyState('idle'), 2500)
  }

  return (
    <Card className="h-fit gap-3 py-4">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{card.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {/* Syntaxe copiable */}
        <div className="rounded-md border bg-muted/50 p-2.5">
          <div className="flex items-start justify-between gap-2">
            <code className="min-w-0 flex-1 break-all font-mono text-xs leading-relaxed text-foreground/90">
              {card.syntax}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 shrink-0 gap-1 px-2 text-xs"
              aria-label={`Copier la syntaxe de ${card.name}`}
            >
              {copyState === 'copied' ? (
                <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden />
              )}
              {copyState === 'copied' ? 'Copié ✓' : 'Copier'}
            </Button>
          </div>
          <p className="mt-1 min-h-4 text-[11px] leading-snug" role="status" aria-live="polite">
            {copyState === 'copied' ? (
              <span className="text-primary">Copié ✓</span>
            ) : copyState === 'error' ? (
              <span className="text-destructive">
                Copie impossible — sélectionnez la syntaxe manuellement.
              </span>
            ) : null}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-foreground/90">{card.purpose}</p>

        <div className="rounded-md bg-muted p-2.5">
          <SectionLabel icon={Lightbulb}>Exemple</SectionLabel>
          <p className="mt-1 text-xs leading-relaxed text-foreground/80">{card.example}</p>
        </div>

        {card.oldVersionAlternative ? (
          <div>
            <Badge variant="outline" className="font-normal">
              Anciennes versions
            </Badge>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {card.oldVersionAlternative}
            </p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

function FormulaCardsTab() {
  const [query, setQuery] = useState('')

  const normalizedQuery = useMemo(() => normalizeText(query), [query])

  const filtered = useMemo(() => {
    if (!normalizedQuery) return excelFormulaCards
    return excelFormulaCards.filter((card) => normalizeText(card.name).includes(normalizedQuery))
  }, [normalizedQuery])

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une formule par nom (ex. SOMME.SI, RECHERCHEX, NB…)"
          className="pl-9"
          type="search"
          aria-label="Rechercher une formule par nom"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
          {filtered.length} fiche{filtered.length > 1 ? 's' : ''} affichée
          {filtered.length > 1 ? 's' : ''} sur {excelFormulaCards.length}
        </p>
        {query.trim() !== '' ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuery('')}
            className="h-7 gap-1 px-2 text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Réinitialiser
          </Button>
        ) : null}
      </div>

      {filtered.length === 0 ? (
        <Card className="gap-2 py-8">
          <CardContent className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <SearchX className="h-5 w-5 text-muted-foreground" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-medium">Aucune formule ne correspond à ce nom</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Essayez un nom plus court (ex. « SOMME », « NB », « SI ») ou réinitialisez la
                recherche : elle ignore les accents.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setQuery('')} className="gap-1.5">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              Réinitialiser la recherche
            </Button>
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="max-h-[75vh] pr-3">
          <div className="grid grid-cols-1 gap-3 pb-2 md:grid-cols-2 2xl:grid-cols-3">
            {filtered.map((card) => (
              <FormulaCard key={card.id} card={card} />
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------
// Onglet 2 — Exercices
// ---------------------------------------------------------------------

function ExerciseCard({ exercise }: { exercise: ExcelExercise }) {
  const [openTasks, setOpenTasks] = useState<number[]>([])

  const toggleTask = (index: number) => {
    setOpenTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const sourceDocument: DocTable = {
    kind: 'table',
    name: `Données sources — ${exercise.title}`,
    columns: exercise.dataColumns,
    rows: exercise.dataRows,
  }

  return (
    <Card className="gap-4 py-5">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{exercise.title}</CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">{exercise.objective}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <DocumentViewer document={sourceDocument} />

        <div className="space-y-2.5">
          <SectionLabel icon={ListChecks}>Tâches</SectionLabel>
          <ol className="space-y-4">
            {exercise.tasks.map((task, index) => {
              const isOpen = openTasks.includes(index)
              return (
                <li key={index} className="flex gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-primary/10 text-[11px] font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1 space-y-2">
                    <p className="text-sm leading-relaxed text-foreground/90">{task.question}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleTask(index)}
                      aria-expanded={isOpen}
                      className="h-7 gap-1.5 px-2.5 text-xs"
                    >
                      {isOpen ? (
                        <EyeOff className="h-3.5 w-3.5" aria-hidden />
                      ) : (
                        <Eye className="h-3.5 w-3.5" aria-hidden />
                      )}
                      {isOpen ? 'Masquer la réponse' : 'Voir la réponse'}
                    </Button>
                    {isOpen ? (
                      <div className="space-y-2 rounded-md border bg-muted/40 p-3">
                        <p className="text-sm leading-relaxed text-foreground/90">
                          {task.expected}
                        </p>
                        {task.formula ? (
                          <div className="rounded-md border bg-card p-2.5">
                            <SectionLabel icon={Sigma}>Formule</SectionLabel>
                            <code className="mt-1 block break-all font-mono text-xs leading-relaxed text-foreground/90">
                              {task.formula}
                            </code>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="rounded-r-lg border-l-2 border-primary bg-primary/5 px-4 py-3">
          <SectionLabel icon={BookOpen}>Explication</SectionLabel>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
            {exercise.explanation}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------
// Onglet 3 — Tableaux de bord
// ---------------------------------------------------------------------

function DashboardCard({ spec }: { spec: DashboardSpec }) {
  return (
    <Card className="gap-4 py-5">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{spec.name}</CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">{spec.objective}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Indicateurs */}
        <div className="space-y-2">
          <SectionLabel icon={Sigma}>Indicateurs</SectionLabel>
          <div className="overflow-hidden rounded-lg border">
            <div className="auditlab-scroll max-h-72 overflow-auto">
              <Table className="min-w-[40rem]">
                <TableHeader className="sticky top-0 z-10 bg-card">
                  <TableRow>
                    <TableHead className="w-[22%] text-xs">Indicateur</TableHead>
                    <TableHead className="w-[30%] text-xs">Formule</TableHead>
                    <TableHead className="text-xs">Interprétation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {spec.indicators.map((indicator) => (
                    <TableRow key={indicator.name}>
                      <TableCell className="whitespace-normal align-top text-xs font-medium">
                        {indicator.name}
                      </TableCell>
                      <TableCell className="whitespace-normal align-top">
                        <code className="break-all font-mono text-xs text-foreground/90">
                          {indicator.formula}
                        </code>
                      </TableCell>
                      <TableCell className="whitespace-normal align-top text-xs leading-relaxed text-muted-foreground">
                        {indicator.interpretation}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Structure du classeur */}
        <div className="space-y-2">
          <SectionLabel icon={ListChecks}>Structure du classeur</SectionLabel>
          <ol className="space-y-2">
            {spec.structure.map((section, index) => (
              <li key={index} className="flex gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-primary/10 text-[11px] font-semibold text-primary">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{section}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Données d'exemple */}
        <div className="space-y-2">
          <SectionLabel icon={Table2}>Données d&rsquo;exemple</SectionLabel>
          <DocumentViewer document={spec.sampleData} />
        </div>

        {/* Contrôles de référence */}
        <div className="space-y-2">
          <SectionLabel icon={ClipboardCheck}>Contrôles de référence</SectionLabel>
          <ul className="space-y-2">
            {spec.referenceCheck.map((check, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <Checkbox
                  checked
                  disabled
                  aria-hidden
                  tabIndex={-1}
                  className="mt-0.5 pointer-events-none"
                />
                <p className="text-sm leading-relaxed text-foreground/90">{check}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------
// Section principale
// ---------------------------------------------------------------------

export default function ExcelSection() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <FileSpreadsheet className="h-4.5 w-4.5 text-primary" aria-hidden />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Excel &amp; données</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {excelFormulaCards.length} fiches formules (syntaxe française, séparateur «&nbsp;;&nbsp;»),
            {excelExercises.length} exercices aux données vérifiées et {dashboardSpecs.length}{' '}
            tableaux de bord prêts à construire — le socle Excel du stage Danone, mission 6.
          </p>
        </div>
      </div>

      <Tabs defaultValue="formules">
        <TabsList className="h-auto w-full grid grid-cols-3 sm:flex sm:h-9 sm:w-auto">
          <TabsTrigger
            value="formules"
            className="whitespace-normal sm:whitespace-nowrap"
          >
            Fiches formules
          </TabsTrigger>
          <TabsTrigger value="exercices" className="whitespace-normal sm:whitespace-nowrap">
            Exercices
          </TabsTrigger>
          <TabsTrigger value="tableaux" className="whitespace-normal sm:whitespace-nowrap">
            Tableaux de bord
          </TabsTrigger>
        </TabsList>

        <TabsContent value="formules" className="mt-3">
          <FormulaCardsTab />
        </TabsContent>

        <TabsContent value="exercices" className="mt-3">
          <ScrollArea className="max-h-[75vh] pr-3">
            <div className="space-y-4 pb-2">
              {excelExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="tableaux" className="mt-3">
          <ScrollArea className="max-h-[75vh] pr-3">
            <div className="space-y-4 pb-2">
              {dashboardSpecs.map((spec) => (
                <DashboardCard key={spec.id} spec={spec} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
