'use client'

import { useMemo } from 'react'
import { AlertTriangle, BookMarked, Info, Landmark } from 'lucide-react'
import { referenceNotes } from '@/lib/content/references'
import type { ReferenceNote } from '@/lib/content/references'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// =====================================================================
// AuditLab — Références : notes de sources institutionnelles (France,
// Maroc, international) groupées par domaine. Chaque note affiche son
// autorité (obligatoire / bonne pratique / pédagogique) et son statut
// de vérification honnête : aucune source n'est fabriquée, aucun lien
// précis n'est inventé — seules les racines institutionnelles certaines
// sont citées. Alerte permanente : reconfirmer les textes en vigueur.
// =====================================================================

type Obligatory = ReferenceNote['obligatory']

const AUTHORITY_BADGES: Record<Obligatory, { label: string; className: string }> = {
  obligatoire: {
    label: 'Obligatoire',
    className: 'border-rose-700/40 bg-rose-700/10 text-rose-800 dark:text-rose-300',
  },
  'bonne pratique': {
    label: 'Bonne pratique',
    className:
      'border-amber-600/40 bg-amber-600/10 text-amber-700 dark:text-amber-400',
  },
  pédagogique: {
    label: 'Pédagogique',
    className:
      'border-emerald-600/40 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300',
  },
}

interface DomainGroup {
  domain: string
  notes: ReferenceNote[]
}

function groupByDomain(notes: ReferenceNote[]): DomainGroup[] {
  const groups: DomainGroup[] = []
  for (const note of notes) {
    const existing = groups.find((group) => group.domain === note.domain)
    if (existing) {
      existing.notes.push(note)
    } else {
      groups.push({ domain: note.domain, notes: [note] })
    }
  }
  return groups
}

function NoteCard({ note }: { note: ReferenceNote }) {
  const authority = AUTHORITY_BADGES[note.obligatory]
  return (
    <Card className="h-fit gap-3 py-4">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{note.title}</CardTitle>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="secondary" className="font-normal">
            {note.referentiel}
          </Badge>
          <Badge variant="outline" className={cn('font-normal', authority.className)}>
            {authority.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed text-foreground/90">{note.summary}</p>
        <div className="rounded-md bg-muted/60 p-2.5">
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Landmark className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Autorité / accès
          </p>
          <p className="text-xs leading-relaxed text-foreground/80">{note.authority}</p>
        </div>
        <p className="flex items-start gap-1.5 text-xs italic leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          {note.verification}
        </p>
      </CardContent>
    </Card>
  )
}

export default function ReferencesSection() {
  const groups = useMemo(() => groupByDomain(referenceNotes), [])

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <BookMarked className="h-4.5 w-4.5 text-primary" aria-hidden />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Références & sources</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {referenceNotes.length} notes de sources institutionnelles françaises, marocaines et
            internationales, avec autorité et statut de vérification. Aucune URL précise
            n&apos;est citée : seulement les racines institutionnelles certaines et la voie
            d&apos;accès.
          </p>
        </div>
      </div>

      {/* Alerte : textes en vigueur */}
      <Alert>
        <AlertTriangle aria-hidden />
        <AlertTitle>Textes en vigueur</AlertTitle>
        <AlertDescription>
          Vérifiez toujours les textes en vigueur avant un entretien — les règles évoluent.
          Chaque note indique honnêtement si la référence est stable (numéro d&apos;article ou
          institution) ou dépendante d&apos;un texte révisable.
        </AlertDescription>
      </Alert>

      {/* Groupes par domaine */}
      {groups.length === 0 ? (
        <Card className="py-8">
          <CardContent className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm font-medium">Aucune référence disponible</p>
            <p className="text-xs text-muted-foreground">
              Les notes de référence seront ajoutées prochainement.
            </p>
          </CardContent>
        </Card>
      ) : (
        groups.map((group) => (
          <section key={group.domain} className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.domain}
              </h2>
              <Badge variant="outline" className="font-normal text-muted-foreground">
                {group.notes.length} note{group.notes.length > 1 ? 's' : ''}
              </Badge>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {group.notes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
