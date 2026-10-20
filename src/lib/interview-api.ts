import type { AnswerEvaluation, InterviewConfig, InterviewMessage } from '@/lib/types'

// =====================================================================
// AuditLab — Contrats de l'API d'entretien (/api/interview)
// Partagé entre la route serveur et le composant simulateur.
// Les types métier (InterviewConfig, AnswerEvaluation…) viennent de
// types.ts ; ici : uniquement les payloads de requête/réponse HTTP.
// =====================================================================

/** Phases gérées par l'API d'entretien */
export type InterviewPhase = 'question' | 'evaluate' | 'final'

/** Corps de la requête POST /api/interview */
export interface InterviewApiRequest {
  config: InterviewConfig
  history: InterviewMessage[]
  /** Dernière réponse du candidat (phase 'evaluate') */
  answer?: string
  phase: InterviewPhase
  /** Expériences réelles déclarées (texte formaté), utilisé si config.cvFocus */
  experiences?: string
  /** Nombre de questions déjà posées (0 = ouverture) */
  questionCount: number
}

/** Réponse de la phase 'question' */
export interface InterviewQuestionPayload {
  question: string
  /** Ce que la question évalue, en une phrase courte */
  intent: string
}

/** Réponse de la phase 'evaluate' : évaluation + question suivante */
export interface InterviewEvaluatePayload {
  evaluation: AnswerEvaluation
  question: string
  intent: string
}

/** Réponse de la phase 'final' : bilan complet */
export interface InterviewFinalPayload {
  /** Bilan détaillé au format markdown */
  bilan: string
  /** Score final sur 20 */
  finalScore: number
  strengths: string[]
  weaknesses: string[]
  advice: string
}

export type InterviewApiPayload = InterviewQuestionPayload | InterviewEvaluatePayload | InterviewFinalPayload

/**
 * Réponse d'erreur renvoyée avec status 200 : le LLM est indisponible,
 * le frontend bascule en mode autonome (fallback honnête, jamais de
 * simulation de réponse LLM côté client).
 */
export interface InterviewApiError {
  error: 'llm_unavailable'
}

/** Erreur de requête mal formée (status 400) */
export interface InterviewApiBadRequest {
  error: 'bad_request'
}
