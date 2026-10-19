'use client'

import { useRef, useState } from 'react'
import type { ChangeEvent } from 'react'
import { difficultyLabels } from '@/lib/content/interviewers'
import { useAppStore } from '@/lib/store'
import { useToast } from '@/hooks/use-toast'
import type { Difficulty } from '@/lib/types'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
  Cpu,
  Database,
  Download,
  GraduationCap,
  Info,
  RotateCcw,
  Settings,
  ShieldCheck,
  Upload,
} from 'lucide-react'

// =====================================================================
// AuditLab — « Paramètres » : préférences d’entraînement branchées sur
// updateSettings, gestion des données locales (export / import JSON,
// réinitialisation confirmée) et rappel pédagogique. Les données restent
// dans le navigateur : aucune synchronisation, aucun envoi.
// =====================================================================

const DURATIONS = [10, 15, 20, 30] as const

const APP_VERSION = '0.2.1'

export default function ParametresSection() {
  const settings = useAppStore((s) => s.settings)
  const updateSettings = useAppStore((s) => s.updateSettings)
  const exportData = useAppStore((s) => s.exportData)
  const importData = useAppStore((s) => s.importData)
  const resetProgress = useAppStore((s) => s.resetProgress)
  const { toast } = useToast()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [pendingFile, setPendingFile] = useState<File | null>(null)

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setPendingFile(event.target.files?.[0] ?? null)
  }

  function handleExport() {
    try {
      const json = exportData()
      const now = new Date()
      const date = [
        now.getFullYear(),
        `${now.getMonth() + 1}`.padStart(2, '0'),
        `${now.getDate()}`.padStart(2, '0'),
      ].join('-')
      const blob = new Blob([json], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = `auditlab-export-${date}.json`
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      URL.revokeObjectURL(url)
      toast({
        title: 'Export réussi',
        description: `Fichier auditlab-export-${date}.json téléchargé.`,
      })
    } catch {
      toast({
        title: 'Échec de l’export',
        description: 'Le fichier de sauvegarde n’a pas pu être généré.',
        variant: 'destructive',
      })
    }
  }

  async function handleImport() {
    const file = pendingFile
    if (!file) return
    try {
      const text = await file.text()
      const ok = importData(text)
      if (ok) {
        toast({
          title: 'Import réussi',
          description: 'Votre progression a été restaurée depuis le fichier sélectionné.',
        })
      } else {
        toast({
          title: 'Import impossible',
          description:
            'Le fichier sélectionné n’est pas une sauvegarde AuditLab valide (JSON illisible ou format inconnu).',
          variant: 'destructive',
        })
      }
    } catch {
      toast({
        title: 'Import impossible',
        description: 'Erreur de lecture du fichier sélectionné.',
        variant: 'destructive',
      })
    } finally {
      setPendingFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  function handleReset() {
    resetProgress()
    toast({
      title: 'Progression réinitialisée',
      description: 'Vos expériences réelles et vos paramètres ont été conservés.',
    })
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <section className="rounded-xl border bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-6">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Settings className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Paramètres</h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Préférences d’entraînement et gestion de vos données locales. Vos réglages
              s’appliquent au simulateur d’entretien et aux sessions de révision.
            </p>
          </div>
        </div>
      </section>

      {/* Préférences d’entraînement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <GraduationCap className="h-4 w-4 text-primary" aria-hidden /> Préférences d’entraînement
          </CardTitle>
          <CardDescription>
            Valeurs utilisées par défaut au démarrage d’une nouvelle session.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="default-difficulty">Difficulté par défaut</Label>
              <p className="text-xs text-muted-foreground">
                Niveau du recruteur simulé au lancement d’un entretien (ajustable ensuite).
              </p>
            </div>
            <Select
              value={String(settings.defaultDifficulty)}
              onValueChange={(value) =>
                updateSettings({ defaultDifficulty: Number(value) as Difficulty })
              }
            >
              <SelectTrigger id="default-difficulty" className="w-full sm:w-80">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem key={level} value={String(level)}>
                    {difficultyLabels[level]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="session-duration">Durée de session par défaut</Label>
              <p className="text-xs text-muted-foreground">
                Durée cible d’un entretien simulé, utilisée pour doser le nombre de questions.
              </p>
            </div>
            <Select
              value={String(settings.sessionDurationMinutes)}
              onValueChange={(value) => updateSettings({ sessionDurationMinutes: Number(value) })}
            >
              <SelectTrigger id="session-duration" className="w-full sm:w-80">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DURATIONS.map((duration) => (
                  <SelectItem key={duration} value={String(duration)}>
                    {duration} minutes
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="pedagogical-mode">Mode pédagogique par défaut</Label>
              <p className="text-xs text-muted-foreground">
                Activé : corrections et conseils après chaque réponse. Désactivé : entretien blanc,
                sans aide jusqu’au bilan final.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="pedagogical-mode"
                checked={settings.pedagogicalMode}
                onCheckedChange={(checked) => updateSettings({ pedagogicalMode: checked })}
                aria-label="Mode pédagogique par défaut"
              />
              <Badge variant="outline" className="text-[10px]">
                {settings.pedagogicalMode ? 'Corrections immédiates' : 'Entretien blanc'}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="llm-enabled" className="flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5" aria-hidden /> Modèle de langage du simulateur
              </Label>
              <p className="text-xs text-muted-foreground">
                Si désactivé, le simulateur fonctionne en mode autonome avec la banque de questions
                locale et une évaluation par mots-clés — limites connues pour les réponses libres.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="llm-enabled"
                checked={settings.llmEnabled}
                onCheckedChange={(checked) => updateSettings({ llmEnabled: checked })}
                aria-label="Utilisation du modèle de langage pour le simulateur"
              />
              <Badge variant="outline" className="text-[10px]">
                {settings.llmEnabled ? 'Modèle de langage actif' : 'Mode autonome local'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mes données locales */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Database className="h-4 w-4 text-primary" aria-hidden /> Mes données locales
          </CardTitle>
          <CardDescription>
            Vos données restent dans ce navigateur (localStorage) : elles ne sont ni synchronisées
            ni envoyées.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Progression des missions, statistiques de questions, cartes de révision, scores
            d’exercices, entretiens sauvegardés, expériences réelles et paramètres sont stockés
            uniquement dans le stockage local de ce navigateur. Exportez-les pour les conserver ou
            les reporter sur un autre appareil.
          </p>

          <div className="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium">Exporter ma progression</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Télécharge un fichier JSON nommé auditlab-export-AAAA-MM-JJ.json.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleExport} className="shrink-0">
              <Download className="mr-1.5 h-4 w-4" aria-hidden /> Exporter ma progression
            </Button>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium">Importer une sauvegarde</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Sélectionnez un fichier .json exporté depuis AuditLab. L’import remplace la
                progression actuelle de ce navigateur.
              </p>
              <Input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileChange}
                aria-label="Fichier de sauvegarde JSON à importer"
                className="mt-2 max-w-sm"
              />
            </div>
            <Button size="sm" onClick={() => void handleImport()} disabled={!pendingFile} className="shrink-0">
              <Upload className="mr-1.5 h-4 w-4" aria-hidden /> Importer
            </Button>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-destructive/40 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-destructive">Réinitialiser ma progression</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Efface missions, statistiques, révisions, exercices et entretiens. Expériences
                réelles et paramètres conservés.
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm" className="shrink-0">
                  <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden /> Réinitialiser ma progression
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Réinitialiser toute votre progression ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Cette action efface définitivement : l’avancement des missions (étapes visitées
                    et exercices), les statistiques de questions rapides, les cartes de répétition
                    espacée, les scores d’exercices et l’historique des entretiens simulés. Vos
                    expériences réelles (Mode B) et vos paramètres sont conservés. La réinitialisation
                    est irréversible — pensez à exporter vos données avant de continuer.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleReset}
                    className="bg-destructive text-white hover:bg-destructive/90"
                  >
                    Tout réinitialiser
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>

      {/* À propos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Info className="h-4 w-4 text-primary" aria-hidden /> À propos d’AuditLab
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            AuditLab est un outil pédagogique de préparation aux entretiens de fin d’études. Les
            missions du parcours se déroulent dans des entreprises fictives (Fidumac, Renault,
            Centrale Danone — scénarios pédagogiques) : montants, documents et situations sont
            fictifs et identifiés comme tels. Vos expériences réelles relèvent exclusivement du
            module « Mes expériences réelles » (Mode B).
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Badge variant="secondary">
              <ShieldCheck className="mr-1 h-3 w-3" aria-hidden /> Outil pédagogique — données 100 %
              locales
            </Badge>
            <Badge variant="outline">Version {APP_VERSION} — prototype de préparation PFE</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
