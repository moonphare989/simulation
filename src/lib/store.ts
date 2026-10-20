'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type {
  SectionId,
  MissionProgress,
  QuestionStat,
  ReviewCard,
  ExperienceEntry,
  AppSettings,
  SavedInterview,
} from '@/lib/types'

// ---- Répétition espacée (SM-2 simplifié) ----
export function scheduleReview(card: ReviewCard | undefined, quality: number): ReviewCard {
  // quality : 0 = mauvais, 1 = moyen, 2 = bon, 3 = excellent
  if (!card) {
    return {
      questionId: '',
      ease: 2.5,
      intervalDays: quality >= 2 ? 1 : 0,
      dueAt: Date.now() + (quality >= 2 ? 24 * 3600 * 1000 : 4 * 3600 * 1000),
      repetitions: 1,
    }
  }
  let ease = card.ease
  if (quality === 0) ease = Math.max(1.3, ease - 0.2)
  else if (quality === 3) ease = Math.min(3.0, ease + 0.1)
  const repetitions = quality === 0 ? 1 : card.repetitions + 1
  let intervalDays: number
  if (repetitions === 1) intervalDays = 1
  else if (repetitions === 2) intervalDays = 3
  else intervalDays = Math.round(card.intervalDays * ease)
  if (quality === 0) intervalDays = 0
  return {
    ...card,
    ease,
    intervalDays,
    repetitions,
    dueAt: Date.now() + Math.max(intervalDays, 0) * 24 * 3600 * 1000 + 4 * 3600 * 1000,
  }
}

interface AppState {
  // Navigation
  section: SectionId
  selectedMissionId: string | null
  selectedFiche: 'all' | 'fidumac' | 'renault' | 'danone'
  // Progression
  missionProgress: Record<string, MissionProgress>
  questionStats: Record<string, QuestionStat>
  reviewCards: Record<string, ReviewCard>
  exerciseDone: Record<string, { score: number; timestamp: number }>
  // Simulateur
  savedInterviews: SavedInterview[]
  // Mode B — expériences réelles
  experiences: ExperienceEntry[]
  // Paramètres
  settings: AppSettings
  // Recherche
  searchQuery: string

  // Actions
  navigate: (section: SectionId) => void
  openMission: (missionId: string | null) => void
  setFicheFilter: (fiche: 'all' | 'fidumac' | 'renault' | 'danone') => void
  markStepDone: (missionId: string, step: string) => void
  markExerciseDone: (exerciseId: string, score: number) => void
  recordQuestionResult: (questionId: string, correct: boolean, quality: number) => void
  saveInterview: (session: SavedInterview) => void
  addExperience: (entry: Omit<ExperienceEntry, 'id' | 'createdAt'>) => void
  updateExperience: (id: string, entry: Partial<ExperienceEntry>) => void
  removeExperience: (id: string) => void
  updateSettings: (settings: Partial<AppSettings>) => void
  setSearchQuery: (q: string) => void
  resetProgress: () => void
  exportData: () => string
  importData: (json: string) => boolean
}

const defaultSettings: AppSettings = {
  defaultDifficulty: 2,
  sessionDurationMinutes: 20,
  pedagogicalMode: true,
  llmEnabled: true,
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      section: 'accueil',
      selectedMissionId: null,
      selectedFiche: 'all',
      missionProgress: {},
      questionStats: {},
      reviewCards: {},
      exerciseDone: {},
      savedInterviews: [],
      experiences: [],
      settings: defaultSettings,
      searchQuery: '',

      navigate: (section) => set({ section }),
      openMission: (missionId) => set({ selectedMissionId: missionId, section: 'parcours' }),
      setFicheFilter: (fiche) => set({ selectedFiche: fiche }),

      markStepDone: (missionId, step) =>
        set((state) => {
          const mp = state.missionProgress[missionId] ?? {
            stepsDone: [],
            exercisesDone: [],
            lastVisited: Date.now(),
          }
          if (!mp.stepsDone.includes(step)) mp.stepsDone = [...mp.stepsDone, step]
          return {
            missionProgress: {
              ...state.missionProgress,
              [missionId]: { ...mp, lastVisited: Date.now() },
            },
          }
        }),

      markExerciseDone: (exerciseId, score) =>
        set((state) => ({
          exerciseDone: {
            ...state.exerciseDone,
            [exerciseId]: { score, timestamp: Date.now() },
          },
        })),

      recordQuestionResult: (questionId, correct, quality) =>
        set((state) => {
          const stat = state.questionStats[questionId] ?? {
            attempts: 0,
            correct: 0,
            lastTimestamp: Date.now(),
          }
          const card = scheduleReview(state.reviewCards[questionId], quality)
          return {
            questionStats: {
              ...state.questionStats,
              [questionId]: {
                attempts: stat.attempts + 1,
                correct: stat.correct + (correct ? 1 : 0),
                lastTimestamp: Date.now(),
              },
            },
            reviewCards: {
              ...state.reviewCards,
              [questionId]: { ...card, questionId },
            },
          }
        }),

      saveInterview: (session) =>
        set((state) => ({
          savedInterviews: [session, ...state.savedInterviews].slice(0, 30),
        })),

      addExperience: (entry) =>
        set((state) => ({
          experiences: [
            ...state.experiences,
            { ...entry, id: `exp-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, createdAt: Date.now() },
          ],
        })),

      updateExperience: (id, entry) =>
        set((state) => ({
          experiences: state.experiences.map((e) => (e.id === id ? { ...e, ...entry } : e)),
        })),

      removeExperience: (id) =>
        set((state) => ({ experiences: state.experiences.filter((e) => e.id !== id) })),

      updateSettings: (settings) => set((state) => ({ settings: { ...state.settings, ...settings } })),
      setSearchQuery: (q) => set({ searchQuery: q }),

      resetProgress: () =>
        set({
          missionProgress: {},
          questionStats: {},
          reviewCards: {},
          exerciseDone: {},
          savedInterviews: [],
        }),

      exportData: () => {
        const s = get()
        return JSON.stringify(
          {
            version: 1,
            exportedAt: new Date().toISOString(),
            missionProgress: s.missionProgress,
            questionStats: s.questionStats,
            reviewCards: s.reviewCards,
            exerciseDone: s.exerciseDone,
            savedInterviews: s.savedInterviews,
            experiences: s.experiences,
            settings: s.settings,
          },
          null,
          2
        )
      },

      importData: (json) => {
        try {
          const data = JSON.parse(json)
          if (typeof data !== 'object' || data === null) return false
          set({
            missionProgress: data.missionProgress ?? {},
            questionStats: data.questionStats ?? {},
            reviewCards: data.reviewCards ?? {},
            exerciseDone: data.exerciseDone ?? {},
            savedInterviews: data.savedInterviews ?? [],
            experiences: data.experiences ?? [],
            settings: { ...defaultSettings, ...data.settings },
          })
          return true
        } catch {
          return false
        }
      },
    }),
    {
      name: 'auditlab-progress-v1',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
