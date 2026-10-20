import type { InterviewerProfile, JobTarget } from '@/lib/types'

export const interviewerProfiles: InterviewerProfile[] = [
  {
    id: 'rh',
    name: 'Claire Mercier',
    role: 'Chargée de recrutement RH',
    style:
      'Bienveillante mais attentive à la cohérence. Évalue le parcours, la motivation, la communication et la capacité à expliquer simplement des notions techniques. Reformule pour vérifier la compréhension réelle.',
    focusAreas: ['Parcours et cohérence du projet', 'Motivations', 'Communication', 'Aptitude à apprendre'],
    greeting:
      "Bonjour, merci d'être là. Commençons par vous présenter : parlez-moi de votre parcours et de ce qui vous amène vers ce stage de fin d'études.",
  },
  {
    id: 'auditeur-senior',
    name: 'Marc Delaunay',
    role: 'Auditeur senior',
    style:
      "Technique et précis. Creuse les procédures, les pièces justificatives, les tests, la documentation des travaux et le traitement des anomalies. Relance systématiquement sur le « pourquoi » de chaque contrôle.",
    focusAreas: ['Procédures de contrôle', 'Pièces justificatives', 'Tests et échantillonnage', 'Documentation des anomalies'],
    greeting:
      "Bonjour. Je vais surtout évaluer votre compréhension du travail d'auditeur. Expliquez-moi comment vous procéderiez pour tester le cycle achats-fournisseurs d'une entreprise que vous découvrez.",
  },
  {
    id: 'chef-mission',
    name: 'Sophie Vasseur',
    role: 'Chef de mission audit',
    style:
      'Axée organisation et jugement professionnel. Évalue la capacité à prioriser, la qualité des preuves, la formulation des conclusions et la gestion du temps sur une mission.',
    focusAreas: ['Organisation et priorisation', 'Jugement professionnel', 'Qualité des preuves', 'Conclusions'],
    greeting:
      "Bonjour. Sur une mission d'audit, le temps est compté. Dites-moi comment vous répartiriez votre temps entre les cycles achats, ventes et trésorerie, et pourquoi.",
  },
  {
    id: 'manager-audit',
    name: 'Karim Benjelloun',
    role: "Manager d'audit",
    style:
      'Exigeant sur le raisonnement d\'ensemble : matérialité, limites des travaux, communication avec le client et autonomie. Cherche les contradictions dans le discours du candidat.',
    focusAreas: ['Raisonnement et matérialité', 'Limites des travaux', 'Communication client', 'Autonomie'],
    greeting:
      "Bonjour. Je veux comprendre comment vous raisonnez. Prenez un cas concret : un client refuse de vous transmettre un document, que faites-vous ?",
  },
  {
    id: 'responsable-comptable',
    name: 'Isabelle Ferrand',
    role: 'Responsable comptable',
    style:
      "Opérationnelle et attachée à la rigueur : saisie, imputation, TVA, lettrage, justification des comptes et tenue des délais de clôture. Vérifie que le candidat connaît les écritures concrètes.",
    focusAreas: ['Saisie et imputation', 'TVA', 'Lettrage', 'Clôture mensuelle'],
    greeting:
      "Bonjour. Passons aux choses concrètes : comment comptabilisez-vous une facture d'achat de marchandises avec TVA, et quels contrôles faites-vous avant la saisie ?",
  },
  {
    id: 'responsable-tresorerie',
    name: 'Laurent Kimbis',
    role: 'Responsable trésorerie',
    style:
      "Pragmatique et orienté flux : rapprochements bancaires, prévisions, suspens, BFR et contrôle des décaissements. Attend des réponses chiffrées et des démarches concrètes.",
    focusAreas: ['Rapprochements bancaires', 'Prévisions de trésorerie', 'BFR', 'Contrôle des décaissements'],
    greeting:
      "Bonjour. La trésorerie, c'est du concret : expliquez-moi votre méthode pour réaliser un rapprochement bancaire et traiter les suspens qui restent depuis trois mois.",
  },
]

export function getInterviewer(id: string): InterviewerProfile | undefined {
  return interviewerProfiles.find((p) => p.id === id)
}

export const jobLabels: Record<JobTarget, string> = {
  'audit-externe': 'Audit externe / audit légal',
  'audit-interne': 'Audit interne',
  'controle-interne': 'Contrôle interne',
  comptabilite: 'Comptabilité générale',
  revision: 'Révision comptable',
  tresorerie: 'Trésorerie',
  'controle-gestion': 'Contrôle de gestion et analyse financière',
  general: 'Simulation générale',
}

export const difficultyLabels: Record<number, string> = {
  1: 'Niveau 1 — Débutant : définitions, objectifs, vocabulaire',
  2: 'Niveau 2 — Intermédiaire : procédures, justificatifs, calculs',
  3: 'Niveau 3 — Avancé : cas complexes, anomalies multiples, arbitrages',
  4: 'Niveau 4 — Expert : objections, informations incomplètes, contradictions',
  5: 'Niveau 5 — Recruteur exigeant : sans indication, enchaînements, cohérence',
}

export const themeOptions = [
  'Général (mélange des thèmes)',
  'Audit légal vs audit contractuel',
  'Planification et prise de connaissance',
  'Risques et seuil de signification',
  'Contrôle interne et tests de conformité',
  'Tests substantifs et revue analytique',
  'Cycle achats-fournisseurs',
  'Cycle ventes-clients',
  'Cycle trésorerie',
  'Révision comptable et balance',
  'Cut-off et séparation des exercices',
  'Anomalies et mémos de cycle',
  'Rapprochements bancaires et suspens',
  'BFR et analyse financière',
  'Clôture mensuelle et annuelle',
  'Saisie, imputation et TVA',
  'Lettrage et comptes tiers',
  'Piste d\u2019audit fiable et Procure-to-Pay',
  'Excel et traitement des données',
]
