'use client'

import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ChevronRight,
  GraduationCap,
  Lightbulb,
  ListOrdered,
  MessageCircle,
  MessagesSquare,
  RotateCcw,
  Search,
  SearchX,
  Sparkles,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { oralTopics } from '@/lib/content/oral'
import type { OralTopic } from '@/lib/types'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// =====================================================================
// AuditLab — Réponses orales : 30 sujets filtrables (domaine + recherche
// sans accents), chaque sujet en trois versions calibrées (courte /
// standard / approfondie) avec temps de passage estimé (mots ÷ 2,5
// mots/seconde), structure en stepper vertical et conseils d'oral.
// Sous chaque version : deux reformulations LOCALES et déterministes —
// « plus naturelle » (fractionnement des longues phrases aux , / ; puis
// connecteurs oraux) et « plus technique » (substitutions lexicales
// professionnelles + précision de référentiel). Aucun appel d'API, aucun
// contenu inventé : uniquement de la reformulation conservative.
// =====================================================================

// ---------------------------------------------------------------------
// Estimation du temps de parole
// ---------------------------------------------------------------------

const WORDS_PER_SECOND = 2.5

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

/** Durée de passage à l'oral : mots ÷ 2,5 mots/seconde, arrondie. */
function estimateSeconds(text: string): number {
  return Math.round(countWords(text) / WORDS_PER_SECOND)
}

// ---------------------------------------------------------------------
// Recherche (sans accents)
// ---------------------------------------------------------------------

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

/** Comparaison des débuts de phrase : minuscules, sans accents, apostrophes uniformisées. */
function normalizeForCompare(value: string): string {
  return normalizeText(value).replace(/[\u2018\u2019']/g, "'")
}

// ---------------------------------------------------------------------
// Reformulation « plus naturelle » — locale, déterministe, conservative
// ---------------------------------------------------------------------

/** Une phrase est fractionnée seulement si elle dépasse ce nombre de mots. */
const LONG_SENTENCE_WORDS = 16
/** Un morceau séparé aux , / ; doit atteindre ce nombre de mots pour devenir une phrase. */
const CLAUSE_MIN_WORDS = 5
/** Un connecteur n'est inséré que devant une phrase d'au moins ce nombre de mots. */
const CONNECTOR_MIN_WORDS = 6

const SENTENCE_END_RE = /[.!?…](?=\s|$)/g
/** Séparateurs de propositions : virgule et point-virgule, sauf virgule décimale (entre chiffres). */
const CLAUSE_SEPARATOR_RE = /(?<!\d)([,;])(?!\d)/g

/** Débuts de phrase qui structurent déjà le discours : on ne double pas d'un connecteur. */
const SEQUENCING_STARTERS = [
  "d'abord",
  "d'entrée",
  'ensuite',
  'puis',
  'enfin',
  'concrètement',
  'en pratique',
  'et pour finir',
  'premièrement',
  'deuxièmement',
  'troisièmement',
  'premier',
  'deuxième',
  'troisième',
  'quatrième',
  'cinquième',
  'un,',
  'deux,',
  'trois,',
  'quatre,',
  'cinq,',
  'définition',
  'objectif',
  'étapes',
  'exemple',
  'conclusion',
  'en résumé',
  'en clair',
  // conjonctions de coordination et articulateurs : on ne les préfixe pas
  'mais',
  'et',
  'ou',
  'donc',
  'or',
  'ni',
  'car',
  'parce que',
  'alors',
  'cependant',
  'toutefois',
  'néanmoins',
]

/** Mêmes amorces, normalisées (sans accents, apostrophes uniformisées) pour la comparaison. */
const NORMALIZED_SEQUENCING_STARTERS = SEQUENCING_STARTERS.map((starter) =>
  normalizeForCompare(starter),
)

const NATURAL_CONNECTORS: {
  text: string
  /** Racine à éviter dans la phrase cible pour ne pas faire écho au connecteur. */
  avoidStem: string
  pick: (count: number) => number
}[] = [
  { text: 'D’abord, ', avoidStem: 'abord', pick: () => 0 },
  { text: 'Concrètement, ', avoidStem: 'concret', pick: (count) => Math.floor((count - 1) / 2) },
  { text: 'En pratique, ', avoidStem: 'pratique', pick: (count) => count - 2 },
  { text: 'Et pour finir, ', avoidStem: 'finir', pick: (count) => count - 1 },
]

function capitalizeFr(text: string): string {
  if (text === '') return text
  return text.charAt(0).toLocaleUpperCase('fr-FR') + text.slice(1)
}

/** Minuscule sur la première lettre, sauf sigle (IFRS, PCG…) que l'on respecte. */
function lowercaseFirstFr(text: string): string {
  if (text === '') return text
  const firstWord = text.split(/[\s’']/)[0] ?? ''
  const isAcronym =
    firstWord.length >= 2 &&
    firstWord === firstWord.toLocaleUpperCase('fr-FR') &&
    firstWord !== firstWord.toLocaleLowerCase('fr-FR')
  if (isAcronym) return text
  return text.charAt(0).toLocaleLowerCase('fr-FR') + text.slice(1)
}

/** Ponctuation finale + majuscule initiale d'une phrase reconstruite. */
function finishSentence(raw: string): string {
  const stripped = raw
    .trim()
    .replace(/[,;]+$/, '')
    .trim()
  if (stripped === '') return ''
  const capitalized = capitalizeFr(stripped)
  return /[.!?…]$/.test(capitalized) ? capitalized : `${capitalized}.`
}

/** Fractionne les phrases longues aux , / ; en phrases plus courtes.
 *  Jamais les virgules décimales (0,5) ni les séparateurs internes aux citations « … ». */
function splitLongSentence(sentence: string): string[] {
  if (countWords(sentence) < LONG_SENTENCE_WORDS) return [sentence]

  const separatorIndexes: number[] = []
  for (const match of sentence.matchAll(CLAUSE_SEPARATOR_RE)) {
    const index = match.index ?? 0
    const before = sentence.slice(0, index)
    const openQuotes = (before.match(/«/g) ?? []).length
    const closeQuotes = (before.match(/»/g) ?? []).length
    if (openQuotes > closeQuotes) continue // séparateur à l'intérieur d'une citation
    separatorIndexes.push(index)
  }

  const pieces: string[] = []
  let start = 0
  for (let i = 0; i < separatorIndexes.length; i += 1) {
    const index = separatorIndexes[i]
    const left = sentence.slice(start, index)
    const nextBoundary = separatorIndexes[i + 1] ?? sentence.length
    const right = sentence.slice(index + 1, nextBoundary)
    // On ne coupe que si les deux morceaux sont assez fournis pour tenir seuls.
    if (countWords(left) >= CLAUSE_MIN_WORDS && countWords(right) >= CLAUSE_MIN_WORDS) {
      pieces.push(left)
      start = index + 1
    }
  }
  pieces.push(sentence.slice(start))
  return pieces.map(finishSentence).filter((piece) => piece !== '')
}

/** Découpe en phrases : ponctuation forte suivie d'un blanc, sauf apparente fin
 *  de phrase à l'intérieur d'une citation « … ». */
function splitIntoSentences(text: string): string[] {
  const boundaries: number[] = []
  for (const match of text.matchAll(SENTENCE_END_RE)) {
    const index = match.index ?? 0
    const before = text.slice(0, index)
    const openQuotes = (before.match(/«/g) ?? []).length
    const closeQuotes = (before.match(/»/g) ?? []).length
    if (openQuotes > closeQuotes) continue
    boundaries.push(index + 1)
  }
  const sentences: string[] = []
  let start = 0
  for (const boundary of boundaries) {
    const sentence = text.slice(start, boundary).trim()
    if (sentence !== '') sentences.push(sentence)
    start = boundary
  }
  const tail = text.slice(start).trim()
  if (tail !== '') sentences.push(tail)
  return sentences
}

function splitLongSentences(text: string): string[] {
  return splitIntoSentences(text).flatMap((sentence) => splitLongSentence(sentence))
}

function startsWithSequencing(sentence: string): boolean {
  const normalized = normalizeForCompare(sentence)
  return NORMALIZED_SEQUENCING_STARTERS.some((starter) => normalized.startsWith(starter))
}

/** Insère des connecteurs oraux : jamais sur deux phrases voisines, jamais sur un
 *  début déjà structuré, jamais quand la phrase ferait écho au connecteur. */
function insertConnectors(sentences: string[]): string[] {
  const count = sentences.length
  if (count < 3) return sentences
  const result = [...sentences]
  const usedIndexes = new Set<number>()
  for (const connector of NATURAL_CONNECTORS) {
    const index = connector.pick(count)
    if (index < 0 || index > count - 1) continue
    if (usedIndexes.has(index)) continue
    if (usedIndexes.has(index - 1) || usedIndexes.has(index + 1)) continue
    const sentence = result[index]
    if (countWords(sentence) < CONNECTOR_MIN_WORDS) continue
    if (startsWithSequencing(sentence)) continue
    if (normalizeForCompare(sentence).includes(connector.avoidStem)) continue
    result[index] = connector.text + lowercaseFirstFr(sentence)
    usedIndexes.add(index)
  }
  return result
}

function naturalReformulation(text: string): string {
  return insertConnectors(splitLongSentences(text))
    .join(' ')
    .replace(/ {2,}/g, ' ')
    .trim()
}

// ---------------------------------------------------------------------
// Reformulation « plus technique » — locale, déterministe, conservative
// ---------------------------------------------------------------------

const REFERENTIAL_NOTE =
  'Selon le référentiel applicable (PCG, CGNC ou IFRS), les libellés et traitements peuvent varier — je le préciserais en entretien.'

const TECHNICAL_REPLACEMENTS: { from: string; to: string }[] = [
  { from: 'vérifications', to: 'contrôles' },
  { from: 'vérification', to: 'contrôle' },
  { from: 'vérifier', to: 'contrôler' },
  { from: 'vérifie', to: 'contrôle' },
  { from: 'vérifiées', to: 'contrôlées' },
  { from: 'vérifiés', to: 'contrôlés' },
  { from: 'vérifiée', to: 'contrôlée' },
  { from: 'vérifié', to: 'contrôlé' },
  { from: 'papiers', to: 'pièces justificatives' },
  { from: 'sous-ensembles', to: 'échantillons' },
  { from: 'sous-ensemble', to: 'échantillon' },
  { from: 'différences', to: 'écarts' },
  { from: 'différence', to: 'écart' },
  { from: 'en même temps', to: 'de manière concomitante' },
  { from: 'du coup', to: 'par conséquent' },
  { from: 'parce que', to: 'car' },
  { from: 'regardé', to: 'examiné' },
  { from: 'regardée', to: 'examinée' },
  { from: 'regarder', to: 'examiner' },
  { from: 'regarde', to: 'examine' },
]

interface TechnicalResult {
  text: string
  applied: { from: string; to: string }[]
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Substitutions lexicales professionnelles (mots entiers uniquement) + précision de référentiel. */
function technicalReformulation(text: string): TechnicalResult {
  let result = text
  const applied: { from: string; to: string }[] = []
  for (const mapping of TECHNICAL_REPLACEMENTS) {
    const pattern = new RegExp(`(?<![\\p{L}])${escapeRegExp(mapping.from)}(?![\\p{L}])`, 'giu')
    let occurrences = 0
    result = result.replace(pattern, (match) => {
      occurrences += 1
      const startsUpper = match.charAt(0) !== match.charAt(0).toLocaleLowerCase('fr-FR')
      return startsUpper ? capitalizeFr(mapping.to) : mapping.to
    })
    if (occurrences > 0) applied.push(mapping)
  }
  const trimmed = result.replace(/\s+/g, ' ').trim()
  return { text: `${trimmed} ${REFERENTIAL_NOTE}`, applied }
}

// ---------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------

type DomainFilter = 'all' | string
type VariantKind = 'natural' | 'technical'

function SectionLabel({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
      <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
      {children}
    </p>
  )
}

/** Une version (courte / standard / approfondie) + ses deux reformulations locales. */
function VersionPanel({ text }: { text: string }) {
  const [shownVariant, setShownVariant] = useState<VariantKind | null>(null)

  const naturalVariant = useMemo(() => naturalReformulation(text), [text])
  const technicalVariant = useMemo(() => technicalReformulation(text), [text])

  const variantText = shownVariant === 'natural' ? naturalVariant : technicalVariant.text

  return (
    <div className="space-y-3 pt-1">
      <p className="text-sm leading-relaxed text-foreground/90">{text}</p>
      <p className="text-xs text-muted-foreground">
        ≈ {estimateSeconds(text)} s à l&rsquo;oral — {countWords(text)} mots, à 2,5 mots/seconde.
      </p>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={shownVariant === 'natural' ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setShownVariant((current) => (current === 'natural' ? null : 'natural'))}
          aria-pressed={shownVariant === 'natural'}
          className="gap-1.5"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
          Reformuler plus naturellement
        </Button>
        <Button
          variant={shownVariant === 'technical' ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setShownVariant((current) => (current === 'technical' ? null : 'technical'))}
          aria-pressed={shownVariant === 'technical'}
          className="gap-1.5"
        >
          <Wrench className="h-3.5 w-3.5" aria-hidden />
          Réponse plus technique
        </Button>
      </div>

      {shownVariant !== null ? (
        <div className="space-y-1.5 rounded-lg border border-dashed bg-muted/30 p-3.5">
          <p className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {shownVariant === 'natural' ? (
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
            ) : (
              <GraduationCap className="h-3.5 w-3.5 text-primary" aria-hidden />
            )}
            Variante générée localement — à adapter à votre style
          </p>
          <p className="text-[11px] leading-snug text-muted-foreground">
            {shownVariant === 'natural'
              ? 'Reformulation naturelle : phrases longues fractionnées aux virgules et points-virgules, connecteurs oraux insérés — aucun contenu ajouté.'
              : 'Réponse technique : tournures simples remplacées par le vocabulaire professionnel, précision de référentiel ajoutée en clôture — aucun contenu inventé.'}
          </p>
          <p className="text-sm leading-relaxed text-foreground/90">{variantText}</p>
          <p className="text-xs text-muted-foreground">
            ≈ {estimateSeconds(variantText)} s à l&rsquo;oral
          </p>
          {shownVariant === 'technical' ? (
            technicalVariant.applied.length > 0 ? (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] text-muted-foreground">Remplacements appliqués :</span>
                {technicalVariant.applied.map((mapping) => (
                  <Badge key={mapping.from} variant="outline" className="font-normal text-[10px]">
                    {mapping.from} → {mapping.to}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-[11px] italic leading-snug text-muted-foreground">
                Aucune tournure simple détectée : seule la précision de référentiel a été ajoutée.
              </p>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

function TopicDetail({ topic, onBack }: { topic: OralTopic; onBack: () => void }) {
  return (
    <div className="space-y-5">
      <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Retour à la liste
      </Button>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="font-normal">
          {topic.domain}
        </Badge>
        <span className="text-xs text-muted-foreground">
          Version standard : ≈ {estimateSeconds(topic.standardVersion)} s à l&rsquo;oral
        </span>
      </div>

      <h2 className="text-xl font-semibold tracking-tight">{topic.title}</h2>

      <blockquote className="rounded-r-lg border-l-4 border-primary/60 bg-muted/40 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Question du recruteur
        </p>
        <p className="mt-1 text-sm italic leading-relaxed text-foreground/90">
          «&nbsp;{topic.question}&nbsp;»
        </p>
      </blockquote>

      <Tabs defaultValue="standard">
        <TabsList className="h-auto w-full grid grid-cols-3 sm:flex sm:h-9 sm:w-auto">
          <TabsTrigger
            value="short"
            className="whitespace-normal px-1 sm:whitespace-nowrap sm:px-2"
          >
            Courte (20-30 s)
          </TabsTrigger>
          <TabsTrigger
            value="standard"
            className="whitespace-normal px-1 sm:whitespace-nowrap sm:px-2"
          >
            Standard (45-60 s)
          </TabsTrigger>
          <TabsTrigger
            value="deep"
            className="whitespace-normal px-1 sm:whitespace-nowrap sm:px-2"
          >
            Approfondie (90-120 s)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="short" className="mt-3">
          <VersionPanel text={topic.shortVersion} />
        </TabsContent>
        <TabsContent value="standard" className="mt-3">
          <VersionPanel text={topic.standardVersion} />
        </TabsContent>
        <TabsContent value="deep" className="mt-3">
          <VersionPanel text={topic.deepVersion} />
        </TabsContent>
      </Tabs>

      {/* Structure — stepper vertical */}
      <div className="space-y-2.5">
        <SectionLabel icon={ListOrdered}>
          {`Structure — déroulé en ${topic.structure.length} étapes`}
        </SectionLabel>
        <ol>
          {topic.structure.map((step, index) => (
            <li key={index} className="relative flex gap-3 pb-4 last:pb-0">
              {index < topic.structure.length - 1 ? (
                <span
                  className="absolute top-7 bottom-0 left-[13px] w-px bg-border"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-[1] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-primary/10 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-foreground/90">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Conseils d'oral */}
      <div className="rounded-lg border border-amber-600/30 bg-amber-500/5 p-4">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          <Lightbulb className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Conseils d&rsquo;oral
        </p>
        <ul className="mt-2 space-y-1.5">
          {topic.tips.map((tip, index) => (
            <li key={index} className="text-sm leading-relaxed text-foreground/90">
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TopicCard({ topic, onSelect }: { topic: OralTopic; onSelect: () => void }) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect()
        }
      }}
      className="cursor-pointer gap-2 py-4 transition-colors hover:border-primary/50 hover:bg-muted/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-snug">{topic.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="font-normal">
            {topic.domain}
          </Badge>
          <span className="text-xs text-muted-foreground">
            ≈ {estimateSeconds(topic.standardVersion)} s à l&rsquo;oral
          </span>
          <ChevronRight
            className="ml-auto h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default function OralSection() {
  const [query, setQuery] = useState('')
  const [domainFilter, setDomainFilter] = useState<DomainFilter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Domaines uniques déduits des données, triés alphabétiquement.
  const domains = useMemo(() => {
    return Array.from(new Set(oralTopics.map((topic) => topic.domain))).sort((a, b) =>
      a.localeCompare(b, 'fr'),
    )
  }, [])

  const normalizedQuery = useMemo(() => normalizeText(query), [query])

  const filtered = useMemo(() => {
    return oralTopics.filter((topic) => {
      if (domainFilter !== 'all' && topic.domain !== domainFilter) return false
      if (normalizedQuery !== '') {
        const haystack = normalizeText(`${topic.title} ${topic.question}`)
        if (!haystack.includes(normalizedQuery)) return false
      }
      return true
    })
  }, [domainFilter, normalizedQuery])

  const selectedTopic = useMemo(() => {
    if (selectedId === null) return null
    return oralTopics.find((topic) => topic.id === selectedId) ?? null
  }, [selectedId])

  const hasActiveFilters = query.trim() !== '' || domainFilter !== 'all'

  const resetFilters = () => {
    setQuery('')
    setDomainFilter('all')
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <MessagesSquare className="h-4.5 w-4.5 text-primary" aria-hidden />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Réponses orales</h1>
          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {oralTopics.length} sujets d&rsquo;entretien prêts à répéter, chacun en trois versions
            calibrées — courte, standard, approfondie — avec temps de passage estimé, structure en
            cinq étapes et conseils de formulation. Les variantes « naturelle » et « technique »
            sont reformulées localement, sans IA externe.
          </p>
        </div>
      </div>

      {selectedTopic !== null ? (
        <TopicDetail topic={selectedTopic} onBack={() => setSelectedId(null)} />
      ) : (
        <>
          {/* Filtres */}
          <div className="space-y-3">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un sujet (ex. seuil, cut-off, trésorerie, présentation…)"
                className="pl-9"
                type="search"
                aria-label="Rechercher un sujet d'entretien"
              />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Select value={domainFilter} onValueChange={(value) => setDomainFilter(value)}>
                <SelectTrigger className="w-full sm:w-72" aria-label="Filtrer par domaine">
                  <SelectValue placeholder="Tous les domaines" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les domaines</SelectItem>
                  {domains.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 sm:ml-auto">
                <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
                  {filtered.length} sujet{filtered.length > 1 ? 's' : ''} affiché
                  {filtered.length > 1 ? 's' : ''} sur {oralTopics.length}
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

          {/* Liste */}
          {filtered.length === 0 ? (
            <Card className="gap-2 py-8">
              <CardContent className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <SearchX className="h-5 w-5 text-muted-foreground" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium">Aucun sujet ne correspond à cette recherche</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Essayez un terme plus court (ex. « audit », « seuil », « trésorerie ») ou
                    réinitialisez les filtres : la recherche ignore les accents et explore titres
                    et questions.
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
              <div className="grid grid-cols-1 gap-3 pb-2 md:grid-cols-2 2xl:grid-cols-3">
                {filtered.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onSelect={() => setSelectedId(topic.id)}
                  />
                ))}
              </div>
            </ScrollArea>
          )}
        </>
      )}
    </div>
  )
}
