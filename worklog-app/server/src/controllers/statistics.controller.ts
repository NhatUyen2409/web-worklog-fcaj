import { Request, Response } from 'express'
import { asyncHandler } from '../middleware/error.middleware'
import prisma from '../lib/prisma'

export const getDashboardStats = asyncHandler(async (_req: Request, res: Response) => {
  const [worklogs, weeks, references, projects] = await Promise.all([
    prisma.worklog.findMany({ select: { duration: true, status: true, category: true } }),
    prisma.week.findMany({ orderBy: { weekNumber: 'asc' } }),
    prisma.reference.count(),
    prisma.project.count(),
  ])

  const totalWorklogs = worklogs.length
  const totalHoursRaw = worklogs.reduce((sum, w) => sum + w.duration, 0)
  const hours = Math.floor(totalHoursRaw)
  const minutes = Math.round((totalHoursRaw - hours) * 60)

  const completedWeeks = weeks.filter(w => w.status === 'COMPLETED').length
  const currentWeek = weeks.find(w => w.status === 'IN_PROGRESS') || weeks.find(w => w.status === 'NOT_STARTED')
  const internshipProgress = Math.round((completedWeeks / 12) * 100)

  res.json({
    success: true,
    data: {
      totalWorklogs,
      totalWorkingHours: `${hours}h ${minutes}m`,
      totalWorkingHoursRaw: totalHoursRaw,
      completedWeeks,
      totalWeeks: 12,
      totalReferences: references,
      totalProjects: projects,
      internshipProgress,
      currentWeek,
    },
  })
})

export const getWeeklyHours = asyncHandler(async (_req: Request, res: Response) => {
  const weeks = await prisma.week.findMany({
    select: { weekNumber: true, totalHours: true, status: true },
    orderBy: { weekNumber: 'asc' },
  })

  const data = weeks.map(w => ({
    week: `W${w.weekNumber}`,
    weekNumber: w.weekNumber,
    hours: parseFloat(w.totalHours.toFixed(1)),
    status: w.status,
  }))

  res.json({ success: true, data })
})

export const getCategoryDistribution = asyncHandler(async (_req: Request, res: Response) => {
  const worklogs = await prisma.worklog.findMany({ select: { category: true, duration: true } })

  const dist: Record<string, number> = {}
  worklogs.forEach(w => {
    dist[w.category] = (dist[w.category] || 0) + w.duration
  })

  const COLORS: Record<string, string> = {
    DEVELOPMENT: '#4F46E5', CLOUD: '#0EA5E9', SECURITY: '#EF4444',
    NETWORKING: '#F59E0B', RESEARCH: '#8B5CF6', DOCUMENTATION: '#10B981',
    MEETING: '#F97316', TRAINING: '#06B6D4', OTHER: '#6B7280',
  }

  const data = Object.entries(dist).map(([name, hours]) => ({
    name: name.charAt(0) + name.slice(1).toLowerCase(),
    value: parseFloat(hours.toFixed(1)),
    color: COLORS[name] || '#6B7280',
  })).sort((a, b) => b.value - a.value)

  res.json({ success: true, data })
})

export const getWorklogConsistency = asyncHandler(async (_req: Request, res: Response) => {
  const profile = await prisma.user.findFirst()
  if (!profile?.internshipStartDate) return res.json({ success: true, data: { streak: 0, thisWeekDays: 0, totalWorkingDays: 0, loggedDays: 0, missingToday: false } })

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Get start of current week (Monday)
  const dayOfWeek = today.getDay()
  const monday = new Date(today)
  monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))

  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)

  const mondayStr = monday.toISOString().split('T')[0]
  const sundayStr = sunday.toISOString().split('T')[0]
  const todayStr = today.toISOString().split('T')[0]

  const [thisWeekLogs, todayLog] = await Promise.all([
    prisma.worklog.findMany({
      where: { date: { gte: mondayStr, lte: sundayStr } },
      select: { date: true },
      distinct: ['date'],
    }),
    prisma.worklog.findFirst({ where: { date: todayStr } }),
  ])

  // Count working days this week (Mon-Fri, up to today)
  let workingDaysThisWeek = 0
  const curr = new Date(monday)
  while (curr <= today && curr <= sunday) {
    const d = curr.getDay()
    if (d !== 0 && d !== 6) workingDaysThisWeek++
    curr.setDate(curr.getDate() + 1)
  }

  res.json({
    success: true,
    data: {
      thisWeekDays: thisWeekLogs.length,
      totalWorkingDays: workingDaysThisWeek,
      missingToday: !todayLog && today.getDay() !== 0 && today.getDay() !== 6,
      todayStr,
    },
  })
})
