import { Request, Response } from 'express'
import { asyncHandler, createError } from '../middleware/error.middleware'
import prisma from '../lib/prisma'

export const getWorklogs = asyncHandler(async (req: Request, res: Response) => {
  const { weekId, date, status, category, projectId, search, page = '1', limit = '50' } = req.query

  const where: Record<string, unknown> = {}
  if (weekId) where.weekId = weekId as string
  if (date) where.date = date as string
  if (status) where.status = status as string
  if (category) where.category = category as string
  if (projectId) where.projectId = projectId as string
  if (search) {
    where.OR = [
      { title: { contains: search as string } },
      { description: { contains: search as string } },
      { result: { contains: search as string } },
    ]
  }

  const skip = (parseInt(page as string) - 1) * parseInt(limit as string)
  const [worklogs, total] = await Promise.all([
    prisma.worklog.findMany({
      where,
      include: { week: { select: { weekNumber: true } }, project: { select: { name: true, color: true } }, references: true },
      orderBy: [{ date: 'desc' }, { startTime: 'desc' }],
      skip,
      take: parseInt(limit as string),
    }),
    prisma.worklog.count({ where }),
  ])

  res.json({ success: true, data: worklogs, total, page: parseInt(page as string), totalPages: Math.ceil(total / parseInt(limit as string)) })
})

export const getWorklogById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const worklog = await prisma.worklog.findUnique({
    where: { id },
    include: { week: true, project: true, references: true },
  })
  if (!worklog) throw createError('Worklog not found', 404)
  res.json({ success: true, data: worklog })
})

export const createWorklog = asyncHandler(async (req: Request, res: Response) => {
  const { weekId, projectId, date, startTime, endTime, duration, title, description, result, status, category, references } = req.body

  if (!weekId || !date || !startTime || !endTime || !title || !description || !result) {
    throw createError('Missing required fields: weekId, date, startTime, endTime, title, description, result', 400)
  }

  const worklog = await prisma.worklog.create({
    data: {
      weekId, projectId: projectId || null, date, startTime, endTime,
      duration: duration || calculateDuration(startTime, endTime),
      title, description, result,
      status: status || 'COMPLETED',
      category: category || 'DEVELOPMENT',
      ...(references && references.length > 0 && {
        references: {
          create: references.map((ref: { title: string; url: string; source?: string; description?: string; accessDate?: string; category?: string }) => ({
            title: ref.title, url: ref.url,
            source: ref.source || '',
            description: ref.description || '',
            accessDate: ref.accessDate || new Date().toISOString().split('T')[0],
            category: ref.category || 'General',
            weekId,
          })),
        },
      }),
    },
    include: { week: true, project: true, references: true },
  })

  // Update week progress
  await updateWeekStats(weekId)

  res.status(201).json({ success: true, data: worklog, message: 'Worklog created successfully' })
})

export const updateWorklog = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const existing = await prisma.worklog.findUnique({ where: { id } })
  if (!existing) throw createError('Worklog not found', 404)

  const { startTime, endTime, references, ...rest } = req.body

  if (references !== undefined) {
    await prisma.reference.deleteMany({ where: { worklogId: id } })
  }

  const worklog = await prisma.worklog.update({
    where: { id },
    data: {
      ...rest,
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(startTime && endTime && { duration: calculateDuration(startTime, endTime) }),
      ...(references && {
        references: {
          create: references.map((ref: any) => ({
            title: ref.title,
            url: ref.url,
            source: ref.source || '',
            description: ref.description || '',
            accessDate: ref.accessDate || new Date().toISOString().split('T')[0],
            category: ref.category || 'General',
            weekId: rest.weekId || existing.weekId,
          }))
        }
      })
    },
    include: { week: true, project: true, references: true },
  })

  await updateWeekStats(worklog.weekId)
  res.json({ success: true, data: worklog, message: 'Worklog updated successfully' })
})

export const deleteWorklog = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const worklog = await prisma.worklog.findUnique({ where: { id } })
  if (!worklog) throw createError('Worklog not found', 404)

  await prisma.worklog.delete({ where: { id } })
  await updateWeekStats(worklog.weekId)

  res.json({ success: true, message: 'Worklog deleted successfully' })
})

export const getWorklogsByWeek = asyncHandler(async (req: Request, res: Response) => {
  const weekId = req.params.weekId as string
  const worklogs = await prisma.worklog.findMany({
    where: { weekId },
    include: { project: { select: { name: true, color: true } }, references: true },
    orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
  })
  res.json({ success: true, data: worklogs })
})

export const getMissingDays = asyncHandler(async (req: Request, res: Response) => {
  const profile = await prisma.user.findFirst()
  if (!profile?.internshipStartDate) return res.json({ success: true, data: [] })

  const startDate = new Date(profile.internshipStartDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const allWorklogDates = await prisma.worklog.findMany({
    select: { date: true },
    distinct: ['date'],
  })
  const worklogDateSet = new Set(allWorklogDates.map(w => w.date))

  const missingDays: string[] = []
  const current = new Date(startDate)
  while (current <= today) {
    const dayOfWeek = current.getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip weekends
      const dateStr = current.toISOString().split('T')[0]
      if (!worklogDateSet.has(dateStr)) {
        missingDays.push(dateStr)
      }
    }
    current.setDate(current.getDate() + 1)
  }

  res.json({ success: true, data: missingDays.slice(-10) }) // Last 10 missing days
})

export const checkOverlap = asyncHandler(async (req: Request, res: Response) => {
  const { date, startTime, endTime, excludeId } = req.body

  const worklogs = await prisma.worklog.findMany({
    where: { date, ...(excludeId && { NOT: { id: excludeId } }) },
    select: { id: true, title: true, startTime: true, endTime: true },
  })

  const overlapping = worklogs.filter(w => {
    return !(endTime <= w.startTime || startTime >= w.endTime)
  })

  res.json({ success: true, hasOverlap: overlapping.length > 0, overlapping })
})

export const clearSampleData = asyncHandler(async (_req: Request, res: Response) => {
  await prisma.reference.deleteMany()
  await prisma.worklog.deleteMany()
  await prisma.project.deleteMany()
  await prisma.week.updateMany({
    data: {
      totalHours: 0,
      progress: 0,
      status: 'NOT_STARTED',
      summaryEnglish: '',
      summaryVietnamese: '',
    }
  })
  res.json({ success: true, message: 'All sample data cleared successfully' })
})

// ─── Helpers ──────────────────────────────────────────────────────────────
function calculateDuration(startTime: string, endTime: string): number {
  const [sh, sm] = startTime.split(':').map(Number)
  const [eh, em] = endTime.split(':').map(Number)
  const start = sh * 60 + sm
  const end = eh * 60 + em
  return Math.max(0, (end - start) / 60)
}

async function updateWeekStats(weekId: string) {
  const worklogs = await prisma.worklog.findMany({ where: { weekId }, select: { duration: true, status: true } })
  const totalHours = worklogs.reduce((sum, w) => sum + w.duration, 0)
  const completedCount = worklogs.filter(w => w.status === 'COMPLETED').length
  const progress = worklogs.length > 0 ? Math.round((completedCount / worklogs.length) * 100) : 0

  await prisma.week.update({
    where: { id: weekId },
    data: {
      totalHours,
      progress,
      status: progress === 100 ? 'COMPLETED' : worklogs.length > 0 ? 'IN_PROGRESS' : 'NOT_STARTED',
    },
  })
}
