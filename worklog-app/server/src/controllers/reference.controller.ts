import { Request, Response } from 'express'
import { asyncHandler, createError } from '../middleware/error.middleware'
import prisma from '../lib/prisma'

export const getReferences = asyncHandler(async (req: Request, res: Response) => {
  const { weekId, worklogId, category, search } = req.query
  const where: Record<string, unknown> = {}
  if (weekId) where.weekId = weekId as string
  if (worklogId) where.worklogId = worklogId as string
  if (category) where.category = category as string
  if (search) {
    where.OR = [
      { title: { contains: search as string } },
      { source: { contains: search as string } },
      { description: { contains: search as string } },
    ]
  }

  const references = await prisma.reference.findMany({
    where,
    include: {
      week: { select: { weekNumber: true } },
      worklog: { select: { title: true } },
    },
    orderBy: { accessDate: 'desc' },
  })
  res.json({ success: true, data: references })
})

export const createReference = asyncHandler(async (req: Request, res: Response) => {
  const { title, url, source, category, description, accessDate, weekId, worklogId } = req.body
  if (!title || !url) throw createError('Title and URL are required', 400)

  const reference = await prisma.reference.create({
    data: { title, url, source: source || '', category: category || 'General', description: description || '', accessDate: accessDate || new Date().toISOString().split('T')[0], weekId: weekId || null, worklogId: worklogId || null },
    include: { week: { select: { weekNumber: true } }, worklog: { select: { title: true } } },
  })
  res.status(201).json({ success: true, data: reference, message: 'Reference added successfully' })
})

export const updateReference = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const ref = await prisma.reference.findUnique({ where: { id } })
  if (!ref) throw createError('Reference not found', 404)

  const updated = await prisma.reference.update({
    where: { id },
    data: req.body,
    include: { week: { select: { weekNumber: true } } },
  })
  res.json({ success: true, data: updated, message: 'Reference updated successfully' })
})

export const deleteReference = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const ref = await prisma.reference.findUnique({ where: { id } })
  if (!ref) throw createError('Reference not found', 404)
  await prisma.reference.delete({ where: { id } })
  res.json({ success: true, message: 'Reference deleted successfully' })
})
