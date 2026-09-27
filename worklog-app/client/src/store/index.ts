import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, Week, ConsistencyData } from '@/types'
import { profileApi, weekApi, statisticsApi } from '@/services/api'

interface AppState {
  // UI State
  sidebarCollapsed: boolean
  toggleSidebar: () => void

  // Profile
  profile: User | null
  profileLoading: boolean
  loadProfile: () => Promise<void>
  updateProfile: (data: Partial<User>) => void

  // Weeks
  weeks: Week[]
  weeksLoading: boolean
  loadWeeks: () => Promise<void>

  // Language
  language: 'vi' | 'en'
  setLanguage: (lang: 'vi' | 'en') => void

  // Consistency
  consistencyData: ConsistencyData | null
  loadConsistency: () => Promise<void>
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // ── UI ──────────────────────────────────────────────
      sidebarCollapsed: false,
      toggleSidebar: () => set(s => ({ sidebarCollapsed: !s.sidebarCollapsed })),

      // ── Language ─────────────────────────────────────────
      language: 'vi',
      setLanguage: (language) => set({ language }),

      // ── Profile ─────────────────────────────────────────
      profile: null,
      profileLoading: false,
      loadProfile: async () => {
        set({ profileLoading: true })
        try {
          const profile = await profileApi.get()
          set({ profile, profileLoading: false })
        } catch {
          set({ profileLoading: false })
        }
      },
      updateProfile: (data) => {
        set(s => ({ profile: s.profile ? { ...s.profile, ...data } : null }))
      },

      // ── Weeks ────────────────────────────────────────────
      weeks: [],
      weeksLoading: false,
      loadWeeks: async () => {
        set({ weeksLoading: true })
        try {
          const weeks = await weekApi.getAll()
          set({ weeks, weeksLoading: false })
        } catch {
          set({ weeksLoading: false })
        }
      },

      // ── Consistency ──────────────────────────────────────
      consistencyData: null,
      loadConsistency: async () => {
        try {
          const data = await statisticsApi.getConsistency()
          set({ consistencyData: data })
        } catch { /* silently fail */ }
      },
    }),
    {
      name: 'worklog-app-store',
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        profile: state.profile,
        language: state.language,
      }),
    }
  )
)
