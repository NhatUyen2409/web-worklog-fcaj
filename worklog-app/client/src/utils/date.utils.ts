import { format, parseISO, differenceInMinutes, isWeekend, eachDayOfInterval, isValid } from 'date-fns'

export const formatDate = (dateStr: string, fmt = 'MMM dd, yyyy'): string => {
  if (!dateStr) return ''
  try {
    return format(parseISO(dateStr), fmt)
  } catch {
    return dateStr
  }
}

export const formatDateShort = (dateStr: string): string => formatDate(dateStr, 'MMM dd')

export const formatDateFull = (dateStr: string): string => formatDate(dateStr, 'EEEE, MMMM dd, yyyy')

export const formatTime = (timeStr: string): string => {
  if (!timeStr) return ''
  const [h, m] = timeStr.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return `${hour}:${m.toString().padStart(2, '0')} ${period}`
}

export const calculateDuration = (startTime: string, endTime: string): number => {
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = endTime.split(':').map(Number)
  const start = sh * 60 + sm
  const end = eh * 60 + em
  return Math.max(0, (end - start) / 60)
}

export const formatDuration = (hours: number): string => {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  if (h === 0) return `${m}m`
  if (m === 0) return `${h}h`
  return `${h}h ${m}m`
}

export const formatHours = (hours: number): string => {
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  return `${h}h ${m.toString().padStart(2, '0')}m`
}

export const getWeekFromDate = (dateStr: string, internshipStartDate: string): number => {
  if (!dateStr || !internshipStartDate) return 1
  try {
    const date = parseISO(dateStr)
    const start = parseISO(internshipStartDate)
    const diff = Math.floor(differenceInMinutes(date, start) / (60 * 24 * 7))
    return Math.max(1, Math.min(12, diff + 1))
  } catch {
    return 1
  }
}

export const getWorkingDays = (startStr: string, endStr: string): string[] => {
  try {
    const start = parseISO(startStr)
    const end = parseISO(endStr)
    if (!isValid(start) || !isValid(end)) return []
    return eachDayOfInterval({ start, end })
      .filter(d => !isWeekend(d))
      .map(d => format(d, 'yyyy-MM-dd'))
  } catch {
    return []
  }
}

export const getGreeting = (lang: 'en' | 'vi' = 'en'): string => {
  const hour = new Date().getHours()
  if (hour < 12) return lang === 'vi' ? 'Chào buổi sáng' : 'Good morning'
  if (hour < 17) return lang === 'vi' ? 'Chào buổi chiều' : 'Good afternoon'
  return lang === 'vi' ? 'Chào buổi tối' : 'Good evening'
}

export const todayString = (): string => format(new Date(), 'yyyy-MM-dd')

export const nowTimeString = (): string => format(new Date(), 'HH:mm')

export const isToday = (dateStr: string): boolean => dateStr === todayString()
