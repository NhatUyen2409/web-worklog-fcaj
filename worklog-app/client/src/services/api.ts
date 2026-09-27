import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred'
    return Promise.reject(new Error(message))
  }
)

export default api

// ──────────────────────────────────────────────────────────────────
// Profile Service
// ──────────────────────────────────────────────────────────────────
import type { User, ProfileFormData } from '@/types'

export const profileApi = {
  get: () => api.get<{ success: boolean; data: User }>('/profile').then(r => r.data.data),
  update: (data: Partial<ProfileFormData>) => api.put<{ success: boolean; data: User }>('/profile', data).then(r => r.data.data),
  uploadAvatar: (avatar: string) => api.post<{ success: boolean; data: User }>('/profile/avatar', { avatar }).then(r => r.data.data),
}

// ──────────────────────────────────────────────────────────────────
// Week Service
// ──────────────────────────────────────────────────────────────────
import type { Week, WeekDetail } from '@/types'

export const weekApi = {
  getAll: () => api.get<{ success: boolean; data: Week[] }>('/weeks').then(r => r.data.data),
  getById: (id: string) => api.get<{ success: boolean; data: Week }>(`/weeks/${id}`).then(r => r.data.data),
  getDetail: (id: string) => api.get<{ success: boolean; data: WeekDetail }>(`/weeks/${id}/detail`).then(r => r.data.data),
  updateSummary: (id: string, summaryEnglish: string, summaryVietnamese: string) =>
    api.put<{ success: boolean; data: Week }>(`/weeks/${id}/summary`, { summaryEnglish, summaryVietnamese }).then(r => r.data.data),
}

// ──────────────────────────────────────────────────────────────────
// Worklog Service
// ──────────────────────────────────────────────────────────────────
import type { WorklogWithRelations, WorklogFormData, WorklogFilters } from '@/types'

export const worklogApi = {
  getAll: (filters?: WorklogFilters) =>
    api.get<{ success: boolean; data: WorklogWithRelations[]; total: number; totalPages: number }>('/worklogs', { params: filters }).then(r => r.data),
  getById: (id: string) =>
    api.get<{ success: boolean; data: WorklogWithRelations }>(`/worklogs/${id}`).then(r => r.data.data),
  getByWeek: (weekId: string) =>
    api.get<{ success: boolean; data: WorklogWithRelations[] }>(`/worklogs/week/${weekId}`).then(r => r.data.data),
  create: (data: WorklogFormData) =>
    api.post<{ success: boolean; data: WorklogWithRelations }>('/worklogs', data).then(r => r.data.data),
  update: (id: string, data: Partial<WorklogFormData>) =>
    api.put<{ success: boolean; data: WorklogWithRelations }>(`/worklogs/${id}`, data).then(r => r.data.data),
  delete: (id: string) =>
    api.delete<{ success: boolean }>(`/worklogs/${id}`).then(r => r.data),
  getMissingDays: () =>
    api.get<{ success: boolean; data: string[] }>('/worklogs/missing').then(r => r.data.data),
  checkOverlap: (date: string, startTime: string, endTime: string, excludeId?: string) =>
    api.post<{ success: boolean; hasOverlap: boolean; overlapping: WorklogWithRelations[] }>('/worklogs/check-overlap', { date, startTime, endTime, excludeId }).then(r => r.data),
  clearSampleData: () =>
    api.post<{ success: boolean; message: string }>('/worklogs/clear-sample').then(r => r.data),
}

// ──────────────────────────────────────────────────────────────────
// Reference Service
// ──────────────────────────────────────────────────────────────────
import type { Reference, ReferenceFilters, ReferenceFormData } from '@/types'

export const referenceApi = {
  getAll: (filters?: ReferenceFilters) =>
    api.get<{ success: boolean; data: Reference[] }>('/references', { params: filters }).then(r => r.data.data),
  create: (data: ReferenceFormData & { weekId?: string; worklogId?: string }) =>
    api.post<{ success: boolean; data: Reference }>('/references', data).then(r => r.data.data),
  update: (id: string, data: Partial<ReferenceFormData>) =>
    api.put<{ success: boolean; data: Reference }>(`/references/${id}`, data).then(r => r.data.data),
  delete: (id: string) =>
    api.delete<{ success: boolean }>(`/references/${id}`).then(r => r.data),
}

// ──────────────────────────────────────────────────────────────────
// Project Service
// ──────────────────────────────────────────────────────────────────
import type { Project } from '@/types'

export const projectApi = {
  getAll: () => api.get<{ success: boolean; data: Project[] }>('/projects').then(r => r.data.data),
  getById: (id: string) => api.get<{ success: boolean; data: Project }>(`/projects/${id}`).then(r => r.data.data),
  create: (data: Partial<Project>) => api.post<{ success: boolean; data: Project }>('/projects', data).then(r => r.data.data),
  update: (id: string, data: Partial<Project>) => api.put<{ success: boolean; data: Project }>(`/projects/${id}`, data).then(r => r.data.data),
  delete: (id: string) => api.delete<{ success: boolean }>(`/projects/${id}`).then(r => r.data),
}

// ──────────────────────────────────────────────────────────────────
// Statistics Service
// ──────────────────────────────────────────────────────────────────
import type { DashboardStats, WeeklyHoursData, CategoryDistributionData, ConsistencyData } from '@/types'

export const statisticsApi = {
  getDashboard: () => api.get<{ success: boolean; data: DashboardStats }>('/statistics/dashboard').then(r => r.data.data),
  getWeeklyHours: () => api.get<{ success: boolean; data: WeeklyHoursData[] }>('/statistics/weekly-hours').then(r => r.data.data),
  getCategoryDistribution: () => api.get<{ success: boolean; data: CategoryDistributionData[] }>('/statistics/category-distribution').then(r => r.data.data),
  getConsistency: () => api.get<{ success: boolean; data: ConsistencyData }>('/statistics/consistency').then(r => r.data.data),
}
