// ──────────────────────────────────────────────────────────────────
// Database Models
// ──────────────────────────────────────────────────────────────────

export type WeekStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
export type WorklogStatus = 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED'
export type WorklogCategory =
  | 'DEVELOPMENT' | 'CLOUD' | 'SECURITY' | 'NETWORKING'
  | 'RESEARCH' | 'DOCUMENTATION' | 'MEETING' | 'TRAINING' | 'OTHER'
export type ProjectStatus = 'PLANNING' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD'

export interface User {
  id: string
  fullName: string
  phone: string
  email: string
  studentId: string
  university: string
  major: string
  company: string
  position: string
  internshipStartDate: string
  internshipEndDate: string
  class: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface Week {
  id: string
  weekNumber: number
  startDate: string
  endDate: string
  status: WeekStatus
  progress: number
  totalHours: number
  summaryEnglish: string
  summaryVietnamese: string
  createdAt: string
  updatedAt: string
  _count?: { worklogs: number; references: number }
}

export interface WeekDetail extends Week {
  worklogs: WorklogWithRelations[]
  references: Reference[]
}

export interface Worklog {
  id: string
  weekId: string
  projectId?: string
  date: string
  startTime: string
  endTime: string
  duration: number
  title: string
  description: string
  result: string
  status: WorklogStatus
  category: WorklogCategory
  createdAt: string
  updatedAt: string
}

export interface WorklogWithRelations extends Worklog {
  week?: { weekNumber: number }
  project?: { name: string; color: string }
  references: Reference[]
}

export interface Reference {
  id: string
  title: string
  url: string
  source: string
  category: string
  description: string
  accessDate: string
  weekId?: string
  worklogId?: string
  createdAt: string
  updatedAt: string
  week?: { weekNumber: number }
  worklog?: { title: string }
}

export interface Project {
  id: string
  name: string
  description: string
  status: ProjectStatus
  progress: number
  startDate: string
  endDate: string
  totalHours: number
  color: string
  createdAt: string
  updatedAt: string
  _count?: { worklogs: number }
}

// ──────────────────────────────────────────────────────────────────
// API Response Types
// ──────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  totalPages: number
}

// ──────────────────────────────────────────────────────────────────
// Statistics Types
// ──────────────────────────────────────────────────────────────────

export interface DashboardStats {
  totalWorklogs: number
  totalWorkingHours: string
  totalWorkingHoursRaw: number
  completedWeeks: number
  totalWeeks: number
  totalReferences: number
  totalProjects: number
  internshipProgress: number
  currentWeek?: Week
}

export interface WeeklyHoursData {
  week: string
  weekNumber: number
  hours: number
  status: WeekStatus
}

export interface CategoryDistributionData {
  name: string
  value: number
  color: string
}

export interface ConsistencyData {
  thisWeekDays: number
  totalWorkingDays: number
  missingToday: boolean
  todayStr: string
}

// ──────────────────────────────────────────────────────────────────
// Form Types
// ──────────────────────────────────────────────────────────────────

export interface WorklogFormData {
  weekId: string
  projectId?: string
  date: string
  startTime: string
  endTime: string
  duration?: number
  title: string
  description: string
  result: string
  status: WorklogStatus
  category: WorklogCategory
  references?: ReferenceFormData[]
}

export interface ReferenceFormData {
  title: string
  url: string
  source?: string
  description?: string
  accessDate?: string
  category?: string
}

export interface ProfileFormData {
  fullName: string
  phone: string
  email: string
  studentId: string
  university: string
  major: string
  company: string
  position: string
  internshipStartDate: string
  internshipEndDate: string
  class: string
}

// ──────────────────────────────────────────────────────────────────
// Filter Types
// ──────────────────────────────────────────────────────────────────

export interface WorklogFilters {
  weekId?: string
  date?: string
  status?: WorklogStatus
  category?: WorklogCategory
  projectId?: string
  search?: string
  page?: number
  limit?: number
}

export interface ReferenceFilters {
  weekId?: string
  worklogId?: string
  category?: string
  search?: string
}

// ──────────────────────────────────────────────────────────────────
// UI Helper Types
// ──────────────────────────────────────────────────────────────────

export interface SelectOption {
  value: string
  label: string
}

export const WEEK_NUMBERS: SelectOption[] = Array.from({ length: 12 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Week ${i + 1}`,
}))

export const WORKLOG_STATUS_OPTIONS: SelectOption[] = [
  { value: 'PLANNED', label: 'Planned' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'BLOCKED', label: 'Blocked' },
]

export const WORKLOG_CATEGORY_OPTIONS: SelectOption[] = [
  { value: 'DEVELOPMENT', label: 'Development' },
  { value: 'CLOUD', label: 'Cloud' },
  { value: 'SECURITY', label: 'Security' },
  { value: 'NETWORKING', label: 'Networking' },
  { value: 'RESEARCH', label: 'Research' },
  { value: 'DOCUMENTATION', label: 'Documentation' },
  { value: 'MEETING', label: 'Meeting' },
  { value: 'TRAINING', label: 'Training' },
  { value: 'OTHER', label: 'Other' },
]

export const PROJECT_STATUS_OPTIONS: SelectOption[] = [
  { value: 'PLANNING', label: 'Planning' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'ON_HOLD', label: 'On Hold' },
]

export const REFERENCE_CATEGORIES: SelectOption[] = [
  { value: 'Cloud Computing', label: 'Cloud Computing' },
  { value: 'Security', label: 'Security' },
  { value: 'Networking', label: 'Networking' },
  { value: 'Database', label: 'Database' },
  { value: 'DevOps', label: 'DevOps' },
  { value: 'Monitoring', label: 'Monitoring' },
  { value: 'General', label: 'General' },
]
