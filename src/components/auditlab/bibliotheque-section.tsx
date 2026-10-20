'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { BookOpen, Calculator, Lightbulb, RotateCcw, Search, SearchX, Tags } from 'lucide-react'
import { libraryEntries } from '@/lib/content/library'
import type { LibraryEntry } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

// =====================================================================
// AuditLab — Bibliothèque technique : recherche instantanée (sans
// distinction d'accents), filtres par domaine et par référentiel,
// fiches notion avec exemple, formule et renvois cliquables (seeAlso
// relance la recherche sur le terme cliqué). Le champ de recherche
// reçoit le focus automatiquement quand le header émet l'événement
// window « auditlab:focus-search ».
// =====================================================================

type DomainFilter = 'all' | string
type ReferentielFilter = 'all' | 'PCG' | 'CGNC' | 'IFRS' | 'NEP' | 'transversal'

/** Minuscules + suppression des diacritiques pour la recherche plein texte. */
function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function entryHaystack(entry: LibraryEntry): string {
  return normalizeText(
    [
      entry.term,
      entry.definition,
      entry.domain,
      entry.example ?? '',
      entry.formula ?? '',
    ].join(' '),
  )
}

/** Le type Referentiel du contrat écrit « transversal » avec un espace
 *  initial : on compare donc sur une version nettoyée. */
function referentielKey(entry: LibraryEntry): string {
  return (entry.referentiel ?? '').trim()
}

const REFERENTIEL_OPTIONS: { value: ReferentielFilter; label: string }[] = [
  { value: 'all', label: 'Tous les référentiels' },
  { value: 'PCG', label: 'PCG' },
  { value: 'CGNC', label: 'CGNC' },
  { value: 'IFRS', label: 'IFRS' },
  { value: 'NEP', label: 'NEP' },
  { value: 'transversal', label: 'Transversal' },
]

const DOMAIN_OPTIONS: { value: DomainFilter; label: string }[] = [
  { value: 'all', label: 'Tous les domaines' },
  { value: 'Audit externe', label: 'Audit externe' },
  { value: 'Audit interne & contrôle interne', label: 'Audit interne & contrôle interne' },
  { value: 'Comptabilité', label: 'Comptabilité' },
  { value: 'Trésorerie', label: 'Trésorerie' },
  { value: 'Référentiels', label: 'Référentiels' },
]

const REFERENTIEL_BADGES: Record<string, string> = {
  PCG: 'border-emerald-600/40 bg-emerald-600/10 text-emerald-700 dark:text-emerald-300',
  CGNC: 'border-amber-600/40 bg-amber-600/10 text-amber-700 dark:text-amber-400',
  IFRS: 'border-orange-600/40 bg-orange-600/10 text-orange-700 dark:text-orange-400',
  NEP: 'border-rose-600/40 bg-rose-600/10 text-rose-700 dark:text-rose-300',
  transversal: 'border-slate-500/40 bg-slate-500/10 text-slate-600 dark:text-slate-300',
}

function referentielBadgeClass(key: string): string {
  return REFERENTIEL_BADGES[key] ?? 'border-border bg-muted text-muted-foreground'
}

function referentielLabel(key: string): string {
  return key === 'transversal' ? 'Transversal' : key
}

function EntryCard({
  entry,
  onSeeAlso,
}: {
  entry: LibraryEntry
  onSeeAlso: (term: string) => void
}) {
  const refKey = referentielKey(entry)
  return (
    <Card className="h-fit gap-3 py-4">
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{entry.term}</CardTitle>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="secondary" className="font-normal">
            {entry.domain}
          </Badge>
          {refKey ? (
            <Badge variant="outline" className={cn('font-normal', referentielBadgeClass(refKey))}>
              {referentielLabel(refKey)}
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="space-y-2.5">
        <p className="text-sm leading-relaxed text-foreground/90">{entry.definition}</p>
        {entry.example ? (
          <div className="rounded-md bg-muted p-2.5">
            <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Lightbulb className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Exemple
            </p>
            <p className="text-xs leading-relaxed text-foreground/80">{entry.example}</p>
          </div>
        ) : null}
        {entry.formula ? (
          <div className="rounded-md border bg-card p-2.5">
            <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Calculator className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Formule
            </p>
            <code className="block font-mono text-xs leading-relaxed text-foreground/90">
              {entry.formula}
            </code>
          </div>
        ) : null}
        {entry.seeAlso && entry.seeAlso.length > 0 ? (
          <div>
            <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Tags className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Notions liées
            </p>
            <div className="flex flex-wrap gap-1.5">
              {entry.seeAlso.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => onSeeAlso(term)}
                  className="rounded-full border bg-background px-2 py-0.5 text-[11px] leading-snug text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  aria-label={`Rechercher la notion ${term}`}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

export default function BibliothequeSection() {
  const [query, setQuery] = useState('')
  const [domainFilter, setDomainFilter] = useState<DomainFilter>('all')
  const [referentielFilter, setReferentielFilter] = useState<ReferentielFilter>('all')
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Focus automatique quand le header émet « auditlab:focus-search »
  // (bouton recherche de la barre supérieure : navigation + focus).
  useEffect(() => {
    const handler = () => {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
    window.addEventListener('auditlab:focus-search', handler)
    return () => window.removeEventListener('auditlab:focus-search', handler)
  }, [])

  const normalizedQuery = useMemo(() => normalizeText(query), [query])

  const filtered = useMemo(() => {
    return libraryEntries.filter((entry) => {
      if (domainFilter !== 'all' && entry.domain !== domainFilter) return false
      if (referentielFilter !== 'all' && referentielKey(entry) !== referentielFilter) return false
      if (normalizedQuery && !entryHaystack(entry).includes(normalizedQuery)) return false
      return true
    })
  }, [domainFilter, normalizedQuery, referentielFilter])

  const hasActiveFilters =
    query.trim() !== '' || domainFilter !== 'all' || referentielFilter !== 'all'

  const handleSeeAlso = (term: string) => {
    setDomainFilter('all')
    setReferentielFilter('all')
    setQuery(term)
    inputRef.current?.focus()
  }

  const resetFilters = () => {
    setQuery('')
    setDomainFilter('all')
    setReferentielFilter('all')
    inputRef.current?.focus()
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <BookOpen className="h-4.5 w-4.5 text-primary" aria-hidden />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Bibliothèque technique</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {libraryEntries.length} notions d&apos;audit, de comptabilité et de trésorerie, avec
            définitions rigoureuses, exemples chiffrés, formules et écarts de référentiel
            (PCG · CGNC · IFRS · NEP). Recherche instantanée, sans distinction d&apos;accents.
          </p>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="space-y-3">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une notion (ex. seuil de signification, BFR, lettrage, cut-off…)"
            className="pl-9"
            aria-label="Rechercher dans la bibliothèque"
            type="search"
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Select value={domainFilter} onValueChange={(value) => setDomainFilter(value)}>
            <SelectTrigger className="w-full sm:w-64" aria-label="Filtrer par domaine">
              <SelectValue placeholder="Tous les domaines" />
            </SelectTrigger>
            <SelectContent>
              {DOMAIN_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={referentielFilter}
            onValueChange={(value) => setReferentielFilter(value as ReferentielFilter)}
          >
            <SelectTrigger className="w-full sm:w-56" aria-label="Filtrer par référentiel">
              <SelectValue placeholder="Tous les référentiels" />
            </SelectTrigger>
            <SelectContent>
              {REFERENTIEL_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2 sm:ml-auto">
            <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
              {filtered.length} notion{filtered.length > 1 ? 's' : ''} affichée
              {filtered.length > 1 ? 's' : ''} sur {libraryEntries.length}
            </p>
            {hasActiveFilters ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="h-7 gap-1 px-2 text-xs"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                Réinitialiser
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <Card className="gap-2 py-8">
          <CardContent className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <SearchX className="h-5 w-5 text-muted-foreground" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-medium">Aucune notion ne correspond à cette recherche</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Essayez un terme plus court (ex. « TVA », « seuil », « trésorerie ») ou réinitialisez
                les filtres : la recherche ignore les accents et explore définitions, exemples et
                formules.
              </p>
            </div>
            {hasActiveFilters ? (
              <Button variant="outline" size="sm" onClick={resetFilters} className="gap-1.5">
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                Réinitialiser les filtres
              </Button>
            ) : null}
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="max-h-[75vh] pr-3">
          <div className="grid grid-cols-1 gap-3 pb-2 xl:grid-cols-2">
            {filtered.map((entry) => (
              <EntryCard key={entry.id} entry={entry} onSeeAlso={handleSeeAlso} />
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
