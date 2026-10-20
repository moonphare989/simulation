'use client'

import { useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useAppStore } from '@/lib/store'
import type { ExperienceEntry } from '@/lib/types'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { BadgeCheck, Briefcase, Info, Pencil, Plus, RotateCcw, Save, ShieldCheck, Trash2, Wrench } from 'lucide-react'

// =====================================================================
// AuditLab — « Mes expériences réelles » (Mode B) : module d’honnêteté.
// Seules des expériences authentiques, attestées par l’utilisateur,
// peuvent être saisies ici. AuditLab ne transforme jamais une mission
// fictive (Mode A) en expérience vécue. Persistance locale via le store.
// =====================================================================

type ExperienceType = ExperienceEntry['type']

const TYPE_OPTIONS: { value: ExperienceType; label: string; badgeClass: string }[] = [
  {
    value: 'stage',
    label: 'Stage',
    badgeClass: 'border-emerald-600/50 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300',
  },
  {
    value: 'emploi',
    label: 'Emploi',
    badgeClass: 'border-amber-600/50 bg-amber-600/10 text-amber-700 dark:text-amber-400',
  },
  {
    value: 'projet',
    label: 'Projet universitaire',
    badgeClass: 'border-lime-600/50 bg-lime-600/10 text-lime-700 dark:text-lime-300',
  },
  {
    value: 'formation',
    label: 'Formation',
    badgeClass: 'border-primary/50 bg-primary/10 text-primary',
  },
  {
    value: 'benevolat',
    label: 'Bénévolat',
    badgeClass: 'border-rose-600/50 bg-rose-600/10 text-rose-700 dark:text-rose-300',
  },
]

interface FormState {
  type: ExperienceType
  org: string
  role: string
  period: string
  location: string
  tasks: string
  tools: string
  results: string
  attested: boolean
}

const EMPTY_FORM: FormState = {
  type: 'stage',
  org: '',
  role: '',
  period: '',
  location: '',
  tasks: '',
  tools: '',
  results: '',
  attested: false,
}

type RequiredField = 'org' | 'role' | 'period' | 'tasks'

const FIELD_LABELS: Record<RequiredField, string> = {
  org: 'L’organisation',
  role: 'Le rôle ou l’intitulé',
  period: 'La période',
  tasks: 'Les tâches réalisées',
}

function typeMeta(type: ExperienceType) {
  return TYPE_OPTIONS.find((o) => o.value === type) ?? TYPE_OPTIONS[0]
}

export default function ExperiencesSection() {
  const experiences = useAppStore((s) => s.experiences)
  const addExperience = useAppStore((s) => s.addExperience)
  const updateExperience = useAppStore((s) => s.updateExperience)
  const removeExperience = useAppStore((s) => s.removeExperience)

  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const formCardRef = useRef<HTMLDivElement>(null)

  // ----- Validation stricte des champs requis -----
  const errors = useMemo(() => {
    const e: Partial<Record<RequiredField, string>> = {}
    if (form.org.trim() === '') e.org = 'L’organisation est requise (entreprise, cabinet, université, association…).'
    if (form.role.trim() === '') e.role = 'Le rôle ou l’intitulé est requis.'
    if (form.period.trim() === '') e.period = 'La période est requise (ex. : juin – septembre 2025).'
    if (form.tasks.trim() === '') e.tasks = 'Décrivez au moins une tâche réellement réalisée.'
    return e
  }, [form])

  const hasErrors = Object.keys(errors).length > 0
  const canSubmit = !hasErrors && form.attested

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function markTouched(key: string) {
    setTouched((t) => ({ ...t, [key]: true }))
  }

  function fieldError(key: RequiredField): string | undefined {
    return touched[key] ? errors[key] : undefined
  }

  function resetForm() {
    setForm(EMPTY_FORM)
    setEditingId(null)
    setTouched({})
  }

  function startEdit(entry: ExperienceEntry) {
    setEditingId(entry.id)
    setForm({
      type: entry.type,
      org: entry.org,
      role: entry.role,
      period: entry.period,
      location: entry.location ?? '',
      tasks: entry.tasks,
      tools: entry.tools ?? '',
      results: entry.results ?? '',
      attested: entry.attested,
    })
    setTouched({})
    formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!canSubmit) {
      setTouched({ org: true, role: true, period: true, tasks: true })
      return
    }
    const payload = {
      type: form.type,
      org: form.org.trim(),
      role: form.role.trim(),
      period: form.period.trim(),
      location: form.location.trim() === '' ? undefined : form.location.trim(),
      tasks: form.tasks.trim(),
      tools: form.tools.trim() === '' ? undefined : form.tools.trim(),
      results: form.results.trim() === '' ? undefined : form.results.trim(),
      attested: true,
    }
    if (editingId !== null) {
      updateExperience(editingId, payload)
    } else {
      addExperience(payload)
    }
    resetForm()
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <section className="rounded-xl border bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-6">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Briefcase className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Mes expériences réelles</h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Mode B d’AuditLab : le registre de vos expériences authentiques, utilisé par le
              simulateur lorsque l’option « centré sur mon CV réel » est active.
            </p>
          </div>
        </div>
      </section>

      {/* Alerte d’honnêteté */}
      <Alert className="border-primary/60">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
        <AlertTitle>Module d’honnêteté — expériences réelles uniquement</AlertTitle>
        <AlertDescription>
          Ce module ne sert qu’à vos expériences RÉELLES (stages, emplois, projets universitaires,
          exercices de formation). AuditLab ne transforme jamais une mission fictive en expérience
          vécue.
        </AlertDescription>
      </Alert>

      {/* Formulaire */}
      <Card>
        <div ref={formCardRef} />
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            {editingId !== null ? (
              <>
                <Pencil className="h-4 w-4 text-primary" aria-hidden /> Modifier une expérience
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 text-primary" aria-hidden /> Ajouter une expérience authentique
              </>
            )}
          </CardTitle>
          <CardDescription>
            Ces informations restent stockées localement dans ce navigateur et ne sont partagées
            avec personne.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="experience-type">Type d’expérience</Label>
                <Select
                  value={form.type}
                  onValueChange={(value) => setField('type', value as ExperienceType)}
                >
                  <SelectTrigger id="experience-type" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TYPE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience-org">
                  Organisation <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="experience-org"
                  value={form.org}
                  onChange={(e) => setField('org', e.target.value)}
                  onBlur={() => markTouched('org')}
                  placeholder="Ex. : Cabinet Fidumac (stage réel)"
                  aria-required="true"
                  aria-invalid={fieldError('org') !== undefined}
                  aria-describedby={fieldError('org') !== undefined ? 'experience-org-error' : undefined}
                />
                {fieldError('org') !== undefined ? (
                  <p id="experience-org-error" className="text-xs text-destructive">
                    {fieldError('org')}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="experience-role">
                  Rôle / intitulé <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="experience-role"
                  value={form.role}
                  onChange={(e) => setField('role', e.target.value)}
                  onBlur={() => markTouched('role')}
                  placeholder="Ex. : Assistant auditeur junior"
                  aria-required="true"
                  aria-invalid={fieldError('role') !== undefined}
                  aria-describedby={fieldError('role') !== undefined ? 'experience-role-error' : undefined}
                />
                {fieldError('role') !== undefined ? (
                  <p id="experience-role-error" className="text-xs text-destructive">
                    {fieldError('role')}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience-period">
                  Période <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="experience-period"
                  value={form.period}
                  onChange={(e) => setField('period', e.target.value)}
                  onBlur={() => markTouched('period')}
                  placeholder="Ex. : juin – septembre 2025"
                  aria-required="true"
                  aria-invalid={fieldError('period') !== undefined}
                  aria-describedby={fieldError('period') !== undefined ? 'experience-period-error' : undefined}
                />
                {fieldError('period') !== undefined ? (
                  <p id="experience-period-error" className="text-xs text-destructive">
                    {fieldError('period')}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience-location">Lieu (optionnel)</Label>
              <Input
                id="experience-location"
                value={form.location}
                onChange={(e) => setField('location', e.target.value)}
                placeholder="Ex. : Casablanca, Maroc"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience-tasks">
                Tâches réalisées <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="experience-tasks"
                value={form.tasks}
                onChange={(e) => setField('tasks', e.target.value)}
                onBlur={() => markTouched('tasks')}
                placeholder="Décrivez ce que vous avez réellement fait : contrôles, rapprochements, saisies, participations à des missions…"
                rows={4}
                aria-required="true"
                aria-invalid={fieldError('tasks') !== undefined}
                aria-describedby={fieldError('tasks') !== undefined ? 'experience-tasks-error' : undefined}
              />
              {fieldError('tasks') !== undefined ? (
                <p id="experience-tasks-error" className="text-xs text-destructive">
                  {fieldError('tasks')}
                </p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="experience-tools">Outils utilisés (optionnel)</Label>
                <Input
                  id="experience-tools"
                  value={form.tools}
                  onChange={(e) => setField('tools', e.target.value)}
                  placeholder="Ex. : Excel, Sage, SAP FI, ACL"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience-results">Résultats obtenus (optionnel)</Label>
                <Input
                  id="experience-results"
                  value={form.results}
                  onChange={(e) => setField('results', e.target.value)}
                  placeholder="Ex. : 10 rapprochements bancaires mensualisés"
                />
                <p className="text-xs text-muted-foreground">
                  Ne saisissez que des résultats réels et vérifiables.
                </p>
              </div>
            </div>

            {/* Attestation obligatoire */}
            <div className="flex items-start gap-2.5 rounded-lg border border-primary/40 bg-primary/5 p-3">
              <Checkbox
                id="experience-attestation"
                checked={form.attested}
                onCheckedChange={(checked) => setField('attested', checked === true)}
                className="mt-0.5"
                aria-required="true"
              />
              <Label
                htmlFor="experience-attestation"
                className="text-sm font-normal leading-relaxed"
              >
                J’atteste que cette expérience est authentique et que les informations saisies sont
                exactes.
              </Label>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button type="submit" disabled={!canSubmit}>
                {editingId !== null ? (
                  <>
                    <Save className="mr-1.5 h-4 w-4" aria-hidden /> Enregistrer les modifications
                  </>
                ) : (
                  <>
                    <Plus className="mr-1.5 h-4 w-4" aria-hidden /> Ajouter l’expérience
                  </>
                )}
              </Button>
              {editingId !== null ? (
                <Button type="button" variant="outline" onClick={resetForm}>
                  <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden /> Annuler
                </Button>
              ) : null}
              {!canSubmit ? (
                <p className="text-xs text-muted-foreground">
                  {hasErrors
                    ? `Complétez les champs requis : ${(['org', 'role', 'period', 'tasks'] as RequiredField[])
                        .filter((key) => errors[key] !== undefined)
                        .map((key) => FIELD_LABELS[key].toLowerCase())
                        .join(', ')}.`
                    : 'Cochez l’attestation d’authenticité pour activer l’ajout.'}
                </p>
              ) : null}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Liste des expériences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Briefcase className="h-4 w-4 text-primary" aria-hidden /> Mes expériences enregistrées
            <Badge variant="secondary" className="text-[10px] tabular-nums">
              {experiences.length}
            </Badge>
          </CardTitle>
          <CardDescription>
            Ces données alimentent le simulateur uniquement quand l’option « centré sur mon CV
            réel » est active.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {experiences.length === 0 ? (
            <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-8 text-center">
              <Briefcase className="h-8 w-8 text-muted-foreground/60" aria-hidden />
              <p className="text-sm font-medium">Aucune expérience réelle enregistrée</p>
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
                Ajoutez vos stages, emplois, projets universitaires, formations ou bénévolats réels
                via le formulaire ci-dessus. Chaque saisie exige votre attestation d’authenticité.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {experiences.map((entry) => {
                const meta = typeMeta(entry.type)
                return (
                  <li key={entry.id} className="rounded-lg border p-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline" className={cn('text-[10px]', meta.badgeClass)}>
                        {meta.label}
                      </Badge>
                      {entry.attested ? (
                        <Badge
                          variant="outline"
                          className="border-emerald-600/50 bg-emerald-600/10 text-[10px] text-emerald-700 dark:text-emerald-300"
                        >
                          <BadgeCheck className="mr-1 h-3 w-3" aria-hidden /> Attestation vérifiée
                        </Badge>
                      ) : null}
                    </div>
                    <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium leading-snug">
                          {entry.role} — {entry.org}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {entry.period}
                          {entry.location ? ` · ${entry.location}` : ''}
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-1">
                        <Button variant="outline" size="sm" onClick={() => startEdit(entry)}>
                          <Pencil className="mr-1 h-3.5 w-3.5" aria-hidden /> Modifier
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                            >
                              <Trash2 className="mr-1 h-3.5 w-3.5" aria-hidden /> Supprimer
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Supprimer cette expérience ?</AlertDialogTitle>
                              <AlertDialogDescription>
                                « {entry.role} — {entry.org} » sera définitivement retirée de vos
                                données locales. Cette action est irréversible.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Annuler</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => removeExperience(entry.id)}
                                className="bg-destructive text-white hover:bg-destructive/90"
                              >
                                Supprimer définitivement
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Tâches réalisées
                        </p>
                        <p className="mt-0.5 whitespace-pre-line leading-relaxed text-foreground/90">
                          {entry.tasks}
                        </p>
                      </div>
                      {entry.tools ? (
                        <div>
                          <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            <Wrench className="h-3 w-3" aria-hidden /> Outils utilisés
                          </p>
                          <p className="mt-0.5 leading-relaxed text-foreground/90">{entry.tools}</p>
                        </div>
                      ) : null}
                      {entry.results ? (
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Résultats obtenus
                          </p>
                          <p className="mt-0.5 leading-relaxed text-foreground/90">{entry.results}</p>
                        </div>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Mode A vs Mode B */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Info className="h-4 w-4 text-primary" aria-hidden /> Mode A (parcours fictif) et Mode B
            (expériences réelles)
          </CardTitle>
          <CardDescription>
            Les deux modes coexistent : l’un vous entraîne, l’autre reflète votre parcours réel.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border p-3">
            <p className="text-sm font-medium">Mode A — Parcours pédagogique fictif</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Les missions du parcours se déroulent dans des entreprises fictives (Fidumac, Renault
              et Centrale Danone — scénarios pédagogiques). Les formulations à l’oral restent
              hypothétiques — « sur une mission d’audit, je serais amené à… » — et ne doivent jamais
              être présentées comme des expériences vécues.
            </p>
          </div>
          <div className="rounded-lg border border-primary/40 bg-primary/5 p-3">
            <p className="text-sm font-medium">Mode B — Vos données réelles</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Les expériences saisies ici sont les vôtres, avec attestation d’authenticité. Le
              simulateur s’appuie sur elles lorsque l’option « centré sur mon CV réel » est active,
              pour des questions ancrées dans votre parcours vérifiable.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
