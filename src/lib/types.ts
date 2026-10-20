// =====================================================================
// AuditLab — PFE Interview Simulator : contrats de types partagés
// Ce fichier est le contrat commun entre tous les modules de contenu.
// NE PAS MODIFIER sans coordonner avec l'architecture globale.
// =====================================================================

// ===== Navigation =====
export type SectionId =
  | 'accueil'
  | 'parcours'
  | 'bibliotheque'
  | 'simulateur'
  | 'cas'
  | 'quiz'
  | 'excel'
  | 'oral'
  | 'evolution'
  | 'experiences'
  | 'references'
  | 'parametres'

// ===== Fiches de stage =====
export type FicheId = 'fidumac' | 'renault' | 'danone'

export interface FicheMeta {
  id: FicheId
  company: string
  domain: string
  period: string
  location: string
  colorKey: 'emerald' | 'amber' | 'rose'
  description: string
}

// ===== Contenu pédagogique =====
export interface Definition {
  term: string
  definition: string
}

export interface MethodStep {
  title: string
  description: string
  why: string
}

// Documents simulés
export interface DocTable {
  kind: 'table'
  name: string
  columns: string[]
  rows: (string | number)[][]
  note?: string
}

export interface DocText {
  kind: 'text'
  name: string
  content: string
  note?: string
}

export type SimDocument = DocTable | DocText

// ===== Exercices interactifs =====
export type ExerciseQuestionType = 'mcq' | 'multi' | 'numeric' | 'open' | 'truefalse'

export interface ExerciseQuestion {
  id: string
  question: string
  type: ExerciseQuestionType
  /** Options pour mcq / multi / truefalse */
  options?: string[]
  /** Réponse attendue : index d'option (string), nombre (number) ou liste d'index (string[]) */
  expected?: string | number | string[]
  /** Correction détaillée, affichée après validation */
  explanation: string
  /** Mots-clés pour l'auto-évaluation des réponses ouvertes (mode autonome) */
  keywords?: string[]
}

export interface Exercise {
  id: string
  title: string
  cycle?: string
  /** Mise en situation : contexte narratif */
  context: string
  /** Documents simulés (tables, factures, relevés…) */
  documents: SimDocument[]
  questions: ExerciseQuestion[]
  /** Risques travaillés dans l'exercice */
  risks?: string[]
  /** Correction générale de l'exercice (raisons, calculs, conclusion) */
  solutionSummary: string
  /** Conseils de formulation à l'oral */
  interviewTips?: string[]
}

// ===== Mission (parcours en 10 étapes) =====
export interface Mission {
  id: string
  ficheId: FicheId
  order: number
  title: string
  period: string
  company: string
  sector: string
  /** Chiffres de référence de la fiche d'origine (jamais supprimés) */
  referenceData: string[]
  summary: string
  /** Étape 1 — Compréhension */
  comprehension: {
    intro: string
    definitions: Definition[]
    keyPoints: string[]
  }
  /** Étape 2 — Objectifs */
  objectives: {
    why: string
    infoSought: string[]
    risksCovered: string[]
  }
  /** Étape 3 — Préparation */
  preparation: {
    documents: string[]
    questionsToAsk: string[]
    precautions: string[]
  }
  /** Étape 4 — Méthode */
  method: MethodStep[]
  /** Étapes 5 & 6 — Mise en situation + travail actif */
  exercises: Exercise[]
  /** Étape 8 — Entretien */
  interviewQuestions: { question: string; expected: string; hint?: string }[]
  /** Étape 9 — Questions de relance */
  followUps: { question: string; expected: string }[]
  /** Étape 10 — Évaluation */
  evaluation: {
    criteria: { label: string; description: string }[]
  }
}

// ===== Banque de questions =====
export type Difficulty = 1 | 2 | 3 | 4 | 5

export type JobTarget =
  | 'audit-externe'
  | 'audit-interne'
  | 'controle-interne'
  | 'comptabilite'
  | 'revision'
  | 'tresorerie'
  | 'controle-gestion'
  | 'general'

export type QuestionCategory =
  | 'definitions'
  | 'procedures'
  | 'justificatifs'
  | 'risques-controles'
  | 'calculs'
  | 'cas-pratiques'
  | 'anomalies'
  | 'justification'
  | 'pieges'
  | 'relances'
  | 'rh'
  | 'communication-client'
  | 'organisation'
  | 'limites'
  | 'referentiels'
  | 'excel'

export interface BankQuestion {
  id: string
  job: JobTarget
  category: QuestionCategory
  difficulty: Difficulty
  /** Identifiant de mission liée (optionnel) */
  missionRef?: string
  /** Compétence évaluée */
  skill: string
  /** Formulation du recruteur */
  question: string
  /** Bonne réponse attendue */
  expectedAnswer: string
  /** Raisonnement technique */
  reasoning: string
  /** Erreurs fréquentes */
  commonErrors: string[]
  /** Réponse orale courte (20-30 s) */
  oralShort: string
  /** Réponse orale développée (entretien technique) */
  oralLong: string
  /** Relance possible */
  followUp: string
  /** Grille de notation : points clés */
  grading: string[]
}

// ===== Simulateur d'entretien =====
export type InterviewerType =
  | 'rh'
  | 'auditeur-senior'
  | 'chef-mission'
  | 'manager-audit'
  | 'responsable-comptable'
  | 'responsable-tresorerie'

export interface InterviewerProfile {
  id: InterviewerType
  name: string
  role: string
  style: string
  focusAreas: string[]
  greeting: string
}

export interface InterviewConfig {
  job: JobTarget
  difficulty: Difficulty
  interviewer: InterviewerType
  theme: string
  durationMinutes: number
  /** true = entretien blanc sans aide ; false = mode pédagogique */
  blancMode: boolean
  /** true = simulation centrée sur le CV réel de l'utilisateur */
  cvFocus: boolean
}

export interface AnswerEvaluation {
  score: number // 0 à 5
  comprehension: string
  answeredTheQuestion: string
  errors: string[]
  omissions: string[]
  improvedResponse: string
  whyBetter: string
}

export interface InterviewMessage {
  role: 'recruteur' | 'candidat' | 'feedback'
  content: string
  evaluation?: AnswerEvaluation
  questionId?: string
}

// ===== Cas pratiques (Laboratoire) =====
export interface PracticalCase {
  id: string
  title: string
  origin: string
  domain: string
  difficulty: Difficulty
  situation: string
  documents: SimDocument[]
  tasks: ExerciseQuestion[]
  /** Anomalies à découvrir (révélées seulement après validation) */
  expectedFindings: string[]
  conclusionModel: string
}

// ===== Réponses orales =====
export interface OralTopic {
  id: string
  domain: string
  title: string
  question: string
  shortVersion: string
  standardVersion: string
  deepVersion: string
  structure: string[]
  tips: string[]
}

// ===== Bibliothèque technique =====
export type Referentiel = 'CGNC' | 'PCG' | 'IFRS' | 'NEP' | ' transversal'

export interface LibraryEntry {
  id: string
  domain: string
  term: string
  definition: string
  example?: string
  formula?: string
  referentiel?: Referentiel
  seeAlso?: string[]
}

// ===== Module Excel =====
export interface ExcelFormulaCard {
  id: string
  name: string
  syntax: string
  purpose: string
  example: string
  oldVersionAlternative?: string
}

export interface ExcelExercise {
  id: string
  title: string
  objective: string
  dataColumns: string[]
  dataRows: (string | number)[][]
  tasks: { question: string; expected: string; formula?: string }[]
  explanation: string
}

export interface DashboardSpec {
  id: string
  name: string
  objective: string
  indicators: { name: string; formula: string; interpretation: string }[]
  structure: string[]
  sampleData: SimDocument
  referenceCheck: string[]
}

// ===== Expériences réelles (Mode B) =====
export interface ExperienceEntry {
  id: string
  type: 'stage' | 'emploi' | 'projet' | 'formation' | 'benevolat'
  org: string
  role: string
  period: string
  location?: string
  tasks: string
  tools?: string
  results?: string
  /** L'utilisateur atteste l'authenticité de cette expérience */
  attested: boolean
  createdAt: number
}

// ===== Progression =====
export interface QuestionStat {
  attempts: number
  correct: number
  lastTimestamp: number
}

export interface ReviewCard {
  questionId: string
  ease: number
  intervalDays: number
  dueAt: number
  repetitions: number
}

export interface MissionProgress {
  stepsDone: string[]
  exercisesDone: string[]
  lastVisited: number
}

export interface AppSettings {
  defaultDifficulty: Difficulty
  sessionDurationMinutes: number
  pedagogicalMode: boolean
  llmEnabled: boolean
}

// ===== Session d'entretien sauvegardée =====
export interface SavedInterview {
  id: string
  config: InterviewConfig
  startedAt: number
  endedAt?: number
  messages: InterviewMessage[]
  finalScore?: number
  bilan?: string
}
