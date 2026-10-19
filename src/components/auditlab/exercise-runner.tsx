'use client'

import { useMemo, useState } from 'react'
import type { Exercise, ExerciseQuestion } from '@/lib/types'
import { DocumentViewer } from '@/components/auditlab/document-viewer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useAppStore } from '@/lib/store'
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardCheck,
  Lightbulb,
  BookOpen,
} from 'lucide-react'
import { cn } from '@/lib/utils'

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

type QuestionResult = 'correct' | 'incorrect' | 'partial'

interface GradeOutcome {
  result: QuestionResult
  coverage: number
  feedback: string
}

function gradeOpen(answer: string, keywords: string[] | undefined): GradeOutcome {
  if (!answer.trim()) {
    return { result: 'incorrect', coverage: 0, feedback: 'Aucune réponse saisie.' }
  }
  const norm = normalize(answer)
  const words = new Set(norm.split(' '))
  if (!keywords || keywords.length === 0) {
    return {
      result: 'partial',
      coverage: 0.5,
      feedback: 'Réponse enregistrée — comparez-la à la correction détaillée ci-dessous.',
    }
  }
  const found = keywords.filter((kw) => {
    const nk = normalize(kw)
    if (!nk) return false
    if (norm.includes(nk)) return true
    return nk.split(' ').every((w) => words.has(w))
  })
  const coverage = found.length / keywords.length
  const result: QuestionResult = coverage >= 0.7 ? 'correct' : coverage >= 0.4 ? 'partial' : 'incorrect'
  const missing = keywords.filter((kw) => !found.includes(kw))
  return {
    result,
    coverage,
    feedback:
      coverage >= 0.7
        ? `Bonne couverture des points clés (${found.length}/${keywords.length} repères trouvés).`
        : coverage >= 0.4
          ? `Réponse partielle : ${found.length}/${keywords.length} repères trouvés. Éléments à compléter : ${missing.slice(0, 4).join(', ')}.`
          : `Réponse insuffisante : repères attendus non retrouvés (${missing.slice(0, 5).join(', ')}…).`,
  }
}

function gradeNumeric(answer: string, expected: number | undefined): GradeOutcome {
  const val = Number(answer.replace(/\s/g, '').replace(',', '.'))
  if (!answer.trim() || Number.isNaN(val)) {
    return { result: 'incorrect', coverage: 0, feedback: 'Montant non renseigné ou non numérique.' }
  }
  if (expected === undefined) {
    return { result: 'partial', coverage: 0.5, feedback: 'Réponse enregistrée — vérifiez la correction.' }
  }
  const ok = Math.abs(val - expected) <= Math.max(0.01, Math.abs(expected) * 0.005)
  return {
    result: ok ? 'correct' : 'incorrect',
    coverage: ok ? 1 : 0,
    feedback: ok
      ? `Correct : ${expected.toLocaleString('fr-FR')}.`
      : `Incorrect. La valeur attendue est ${expected.toLocaleString('fr-FR')} — revoyez le calcul dans la correction.`,
  }
}

function gradeChoice(
  selected: string | string[],
  expected: string | number | string[] | undefined,
  multi: boolean
): GradeOutcome {
  if (multi) {
    const sel = Array.isArray(selected) ? selected : []
    const exp = Array.isArray(expected) ? expected.map(String) : expected !== undefined ? [String(expected)] : []
    if (sel.length === 0) return { result: 'incorrect', coverage: 0, feedback: 'Aucune option sélectionnée.' }
    const correctSel = sel.filter((s) => exp.includes(s))
    const wrongSel = sel.filter((s) => !exp.includes(s))
    if (correctSel.length === exp.length && wrongSel.length === 0) {
      return { result: 'correct', coverage: 1, feedback: 'Sélection complète et exacte.' }
    }
    if (wrongSel.length > 0) {
      return {
        result: 'incorrect',
        coverage: correctSel.length / Math.max(exp.length, 1),
        feedback: `Des réponses incorrectes sont cochées (${wrongSel.length}). Réponses attendues : ${exp.length} option(s).`,
      }
    }
    return {
      result: 'partial',
      coverage: correctSel.length / Math.max(exp.length, 1),
      feedback: `Sélection incomplète : ${correctSel.length}/${exp.length} bonnes options identifiées.`,
    }
  }
  const sel = Array.isArray(selected) ? selected[0] : selected
  if (!sel) return { result: 'incorrect', coverage: 0, feedback: 'Aucune option sélectionnée.' }
  const exp = Array.isArray(expected) ? String(expected[0]) : expected !== undefined ? String(expected) : undefined
  if (exp === undefined) {
    return { result: 'partial', coverage: 0.5, feedback: 'Réponse enregistrée — vérifiez la correction.' }
  }
  const ok = sel === exp
  return {
    result: ok ? 'correct' : 'incorrect',
    coverage: ok ? 1 : 0,
    feedback: ok ? 'Réponse exacte.' : 'Réponse inexacte — consultez la correction détaillée.',
  }
}

function QuestionCard({
  q,
  index,
  answered,
  outcome,
}: {
  q: ExerciseQuestion
  index: number
  answered: boolean
  outcome: GradeOutcome | null
}) {
  const [text, setText] = useState('')
  const [numeric, setNumeric] = useState('')
  const [choice, setChoice] = useState<string>('')
  const [multiChoice, setMultiChoice] = useState<string[]>([])

  const toggleMulti = (opt: string) => {
    setMultiChoice((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]))
  }

  const disabled = answered

  return (
    <div className="rounded-lg border p-4">
      <div className="mb-3 flex items-start gap-2">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
          {index + 1}
        </span>
        <p className="text-sm font-medium leading-relaxed">{q.question}</p>
      </div>

      <div className="pl-8">
        {q.type === 'mcq' || q.type === 'truefalse' ? (
          <RadioGroup value={choice} onValueChange={setChoice} disabled={disabled} className="gap-2">
            {(q.options ?? (q.type === 'truefalse' ? ['Vrai', 'Faux'] : [])).map((opt, i) => (
              <div key={i} className="flex items-center space-x-2">
                <RadioGroupItem value={String(i)} id={`${q.id}-${i}`} />
                <Label htmlFor={`${q.id}-${i}`} className="cursor-pointer font-normal text-sm">
                  {opt}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : null}

        {q.type === 'multi' ? (
          <div className="flex flex-col gap-2">
            {(q.options ?? []).map((opt, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Checkbox
                  id={`${q.id}-${i}`}
                  checked={multiChoice.includes(String(i))}
                  onCheckedChange={() => toggleMulti(String(i))}
                  disabled={disabled}
                />
                <Label htmlFor={`${q.id}-${i}`} className="cursor-pointer font-normal text-sm">
                  {opt}
                </Label>
              </div>
            ))}
            <p className="text-xs text-muted-foreground">Plusieurs réponses possibles.</p>
          </div>
        ) : null}

        {q.type === 'numeric' ? (
          <div className="max-w-56">
            <Input
              type="text"
              inputMode="decimal"
              placeholder="Montant (ex. 1250,50)"
              value={numeric}
              onChange={(e) => setNumeric(e.target.value)}
              disabled={disabled}
              aria-label={`Réponse numérique à la question ${index + 1}`}
            />
          </div>
        ) : null}

        {q.type === 'open' ? (
          <Textarea
            placeholder="Rédigez votre réponse en quelques phrases : démarche, documents, conclusion…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={disabled}
            rows={4}
            aria-label={`Réponse libre à la question ${index + 1}`}
          />
        ) : null}
      </div>

      {outcome ? (
        <div
          className={cn(
            'mt-3 ml-8 rounded-md border px-3 py-2 text-sm',
            outcome.result === 'correct' && 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200',
            outcome.result === 'partial' && 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200',
            outcome.result === 'incorrect' && 'border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200'
          )}
          role="status"
        >
          <div className="flex items-center gap-2 font-medium">
            {outcome.result === 'correct' ? (
              <CheckCircle2 className="h-4 w-4" aria-hidden />
            ) : outcome.result === 'partial' ? (
              <AlertTriangle className="h-4 w-4" aria-hidden />
            ) : (
              <XCircle className="h-4 w-4" aria-hidden />
            )}
            {outcome.result === 'correct' ? 'Correct' : outcome.result === 'partial' ? 'Partiel' : 'À retravailler'}
          </div>
          <p className="mt-1 leading-relaxed">{outcome.feedback}</p>
          <Separator className="my-2" />
          <p className="leading-relaxed text-foreground/90">
            <span className="font-medium">Correction : </span>
            {q.explanation}
          </p>
        </div>
      ) : null}

      <QuestionAnswersBridge
        q={q}
        register={{ text, numeric, choice, multiChoice, setText, setNumeric, setChoice, setMultiChoice }}
      />
    </div>
  )
}

/**
 * Pont interne : stocke les réponses de chaque question dans un registre
 * monté par le parent via un identifiant unique.
 */
interface AnswerState {
  text: string
  numeric: string
  choice: string
  multiChoice: string[]
  setText: (v: string) => void
  setNumeric: (v: string) => void
  setChoice: (v: string) => void
  setMultiChoice: (v: string[]) => void
}

const answerRegistry = new Map<string, AnswerState>()

function QuestionAnswersBridge({ q, register }: { q: ExerciseQuestion; register: AnswerState }) {
  answerRegistry.set(q.id, register)
  return null
}

export function ExerciseRunner({
  exercise,
  onCompleted,
}: {
  exercise: Exercise
  onCompleted?: (score: number) => void
}) {
  const [submitted, setSubmitted] = useState(false)
  const [outcomes, setOutcomes] = useState<Record<string, GradeOutcome>>({})
  const [revealed, setRevealed] = useState(false)
  const markExerciseDone = useAppStore((s) => s.markExerciseDone)
  const previousScore = useAppStore((s) => s.exerciseDone[exercise.id]?.score)

  const score = useMemo(() => {
    if (!submitted) return null
    const values = Object.values(outcomes)
    if (values.length === 0) return 0
    const total = values.reduce((acc, o) => acc + o.coverage, 0)
    return Math.round((total / values.length) * 100)
  }, [submitted, outcomes])

  const handleSubmit = () => {
    const results: Record<string, GradeOutcome> = {}
    for (const q of exercise.questions) {
      const reg = answerRegistry.get(q.id)
      if (q.type === 'open') {
        results[q.id] = gradeOpen(reg?.text ?? '', q.keywords)
      } else if (q.type === 'numeric') {
        results[q.id] = gradeNumeric(reg?.numeric ?? '', q.expected as number | undefined)
      } else if (q.type === 'multi') {
        results[q.id] = gradeChoice(reg?.multiChoice ?? [], q.expected, true)
      } else {
        results[q.id] = gradeChoice(reg?.choice ?? '', q.expected, false)
      }
    }
    setOutcomes(results)
    setSubmitted(true)
    const values = Object.values(results)
    const avg = values.length
      ? Math.round((values.reduce((acc, o) => acc + o.coverage, 0) / values.length) * 100)
      : 0
    markExerciseDone(exercise.id, avg)
    onCompleted?.(avg)
  }

  const canSubmit = !submitted

  return (
    <div className="rounded-xl border bg-card shadow-sm">
      <div className="flex flex-wrap items-center gap-2 border-b px-4 py-3 sm:px-5">
        <ClipboardCheck className="h-4 w-4 text-primary" aria-hidden />
        <h4 className="text-sm font-semibold">{exercise.title}</h4>
        {exercise.cycle ? (
          <Badge variant="secondary" className="text-xs">
            Cycle {exercise.cycle}
          </Badge>
        ) : null}
        {previousScore !== undefined && !submitted ? (
          <Badge variant="outline" className="ml-auto text-xs">
            Tentative précédente : {previousScore}%
          </Badge>
        ) : null}
        {score !== null ? (
          <Badge
            className={cn(
              'ml-auto text-xs',
              score >= 70 ? 'bg-emerald-600' : score >= 40 ? 'bg-amber-600' : 'bg-rose-600'
            )}
          >
            Score : {score}%
          </Badge>
        ) : null}
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{exercise.context}</p>

        {exercise.risks && exercise.risks.length > 0 ? (
          <div className="rounded-md border border-dashed bg-muted/30 px-3 py-2">
            <p className="text-xs font-medium text-muted-foreground">
              Risques travaillés : {exercise.risks.join(' · ')}
            </p>
          </div>
        ) : null}

        {exercise.documents.length > 0 ? (
          <div className="grid gap-3">
            {exercise.documents.map((doc, i) => (
              <DocumentViewer key={i} document={doc} />
            ))}
          </div>
        ) : null}

        <Separator />

        <div className="space-y-3">
          {exercise.questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              q={q}
              index={i}
              answered={submitted}
              outcome={outcomes[q.id] ?? null}
            />
          ))}
        </div>

        {submitted || revealed ? (
          <Accordion type="single" collapsible className="rounded-lg border px-4">
            <AccordionItem value="solution" className="border-0">
              <AccordionTrigger className="py-3 text-sm font-medium">
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden />
                  Correction générale de l&apos;exercice
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed">
                {exercise.solutionSummary}
                {exercise.interviewTips && exercise.interviewTips.length > 0 ? (
                  <div className="mt-3 rounded-md bg-primary/5 p-3">
                    <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <Lightbulb className="h-3.5 w-3.5" aria-hidden /> À l&apos;oral, en entretien
                    </p>
                    <ul className="list-disc space-y-1 pl-4 text-xs leading-relaxed">
                      {exercise.interviewTips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : null}

        <div className="flex flex-wrap items-center gap-2">
          {canSubmit ? (
            <>
              <Button onClick={handleSubmit} className="min-w-40">
                Valider mes réponses
              </Button>
              <Button variant="outline" onClick={() => setRevealed(true)}>
                Demander la correction sans répondre
              </Button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Exercice validé — vous pouvez le refaire en rechargant la page de la mission.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export { answerRegistry }
