import type { FicheMeta, Mission } from '@/lib/types'
import { fidumacMissions } from './fiche1-fidumac'
import { renaultMissions } from './fiche2-renault'
import { danoneMissions } from './fiche3-danone'

export const fiches: FicheMeta[] = [
  {
    id: 'fidumac',
    company: 'Fidumac',
    domain: 'Audit externe, audit interne et révision comptable',
    period: 'Janvier – Mars 2026 (scénario pédagogique)',
    location: 'Cabinet d\'audit — entreprises fictives des secteurs distribution et BTP',
    colorKey: 'emerald',
    description:
      "Audit légal et contractuel, évaluation du contrôle interne sur trois cycles, révision de quarante comptes selon le CGNC marocain, documentation d'anomalies et mémos de cycle.",
  },
  {
    id: 'renault',
    company: 'Renault',
    domain: 'Comptabilité et trésorerie',
    period: 'Juin – Septembre 2025 (scénario pédagogique)',
    location: 'Service comptable et financier',
    colorKey: 'amber',
    description:
      'Suivi quotidien de cinq comptes bancaires, BFR, dix rapprochements bancaires mensuels, contrôle par échantillonnage de cinquante décaissements mensuels et revue de plus de soixante-dix écritures de clôture.',
  },
  {
    id: 'danone',
    company: 'Centrale Danone',
    domain: 'Comptabilité générale',
    period: 'Juin – Septembre 2024 (scénario pédagogique)',
    location: 'Service comptabilité',
    colorKey: 'rose',
    description:
      "Saisie d'environ cent cinquante factures par mois, piste d'audit fiable sur quatre-vingt-dix factures, vérification des justificatifs, lettrage de quarante-cinq comptes tiers, remontée de deux failles de procédure et trois tableaux de bord Excel.",
  },
]

export const allMissions: Mission[] = [
  ...fidumacMissions,
  ...renaultMissions,
  ...danoneMissions,
].sort((a, b) => {
  if (a.ficheId !== b.ficheId) {
    const order: Record<string, number> = { fidumac: 0, renault: 1, danone: 2 }
    return order[a.ficheId] - order[b.ficheId]
  }
  return a.order - b.order
})

export function getMission(id: string | null): Mission | undefined {
  if (!id) return undefined
  return allMissions.find((m) => m.id === id)
}

export const MISSION_STEPS = [
  { key: 'comprehension', label: 'Compréhension', description: 'Comprendre la mission et son vocabulaire' },
  { key: 'objectives', label: 'Objectifs', description: 'Pourquoi cette mission existe' },
  { key: 'preparation', label: 'Préparation', description: 'Documents et questions avant de commencer' },
  { key: 'method', label: 'Méthode', description: 'La procédure étape par étape' },
  { key: 'situation', label: 'Mise en situation', description: 'Données et documents fictifs à examiner' },
  { key: 'interview', label: 'Entretien', description: 'Questions de recruteur sur la procédure' },
  { key: 'followups', label: 'Relances', description: 'Le recruteur challenge votre réponse' },
  { key: 'evaluation', label: 'Évaluation', description: 'Grille de compétences à acquérir' },
] as const
