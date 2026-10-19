// =====================================================================
// Fiche 3 — Centrale Danone : éléments communs aux six missions.
// Chiffres de référence de la fiche d’origine : TOUS conservés et
// repris dans chaque mission (aucune suppression autorisée).
// =====================================================================
import type { FicheId } from '@/lib/types'

/** Champs d’identification communs aux missions de la Fiche 3. */
export function danoneBase(order: number): {
  ficheId: FicheId
  order: number
  period: string
  company: string
  sector: string
} {
  return {
    ficheId: 'danone',
    order,
    period: 'Juin – Septembre 2024 (scénario pédagogique)',
    company: 'Centrale Danone',
    sector: 'Agroalimentaire — produits laitiers frais',
  }
}

/** Mention d’honnêteté : scénario fictif, aucune mission réelle. */
export const FICHE3_DISCLAIMER =
  'Scénario pédagogique fictif : cette fiche simule un stage de fin d’études en comptabilité au sein d’une centrale laitière. Toutes les personnes, sociétés, opérations et montants sont inventés à visée pédagogique ; les corrections sont formulées de manière hypothétique (« on aurait… », « il conviendrait de… ») et aucune de ces missions n’est présentée comme réellement vécue.'

/** Chiffres de référence de la fiche d’origine — jamais supprimés. */
export const DANONE_REFERENCE: string[] = [
  'Environ 150 factures saisies et imputées par mois entre juin et septembre 2024.',
  'Environ 90 factures fournisseurs et clients par mois contrôlées sur la piste d’audit fiable (rapprochement commande / réception / facture).',
  'Vérification de la validité et de l’exhaustivité des justificatifs sur les factures contrôlées.',
  'Lettrage et apurement de 45 comptes tiers : 5 incohérences identifiées, corrigées et documentées.',
  '2 failles de procédure signalées à la direction, avec recommandations, responsable et suivi.',
  '3 tableaux de bord Excel construits : factures et délais de traitement, comptes clients/fournisseurs, anomalies et contrôles à réaliser.',
  'TVA française de référence : 20 % (taux normal), 5,5 % pour les produits alimentaires (taux réduit), 10 % (taux intermédiaire : transport de voyageurs, restauration, hébergement). Référentiel comptable : plan comptable général français (PCG). Montants en euros, deux décimales au plus ; les réponses peuvent dépendre du régime de TVA, de la taille de l’entité et du référentiel retenu.',
]
