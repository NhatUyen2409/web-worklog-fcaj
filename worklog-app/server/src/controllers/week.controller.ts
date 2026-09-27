import { Request, Response } from 'express'
import { asyncHandler, createError } from '../middleware/error.middleware'
import prisma from '../lib/prisma'

export const getWeeks = asyncHandler(async (_req: Request, res: Response) => {
  const weeks = await prisma.week.findMany({
    include: {
      _count: { select: { worklogs: true, references: true } },
    },
    orderBy: { weekNumber: 'asc' },
  })
  res.json({ success: true, data: weeks })
})

export const getWeekById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const week = await prisma.week.findUnique({
    where: { id },
    include: {
      _count: { select: { worklogs: true, references: true } },
    },
  })
  if (!week) throw createError('Week not found', 404)
  res.json({ success: true, data: week })
})

export const getWeekDetail = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const week = await prisma.week.findUnique({
    where: { id },
    include: {
      worklogs: {
        include: {
          project: { select: { name: true, color: true } },
          references: true,
        },
        orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
      },
      references: { orderBy: { accessDate: 'asc' } },
    },
  })
  if (!week) throw createError('Week not found', 404)
  res.json({ success: true, data: week })
})

export const updateWeekSummary = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const { summaryEnglish, summaryVietnamese } = req.body
  const week = await prisma.week.findUnique({ where: { id } })
  if (!week) throw createError('Week not found', 404)

  const updated = await prisma.week.update({
    where: { id },
    data: {
      ...(summaryEnglish !== undefined && { summaryEnglish }),
      ...(summaryVietnamese !== undefined && { summaryVietnamese }),
    },
  })
  res.json({ success: true, data: updated, message: 'Week summary updated successfully' })
})
