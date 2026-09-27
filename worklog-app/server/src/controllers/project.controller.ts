import { Request, Response } from 'express'
import { asyncHandler, createError } from '../middleware/error.middleware'
import prisma from '../lib/prisma'

export const getProjects = asyncHandler(async (_req: Request, res: Response) => {
  const projects = await prisma.project.findMany({
    include: { _count: { select: { worklogs: true } } },
    orderBy: { startDate: 'asc' },
  })
  res.json({ success: true, data: projects })
})

export const getProjectById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      worklogs: {
        include: { week: { select: { weekNumber: true } } },
        orderBy: { date: 'desc' },
        take: 20,
      },
      _count: { select: { worklogs: true } },
    },
  })
  if (!project) throw createError('Project not found', 404)
  res.json({ success: true, data: project })
})

export const createProject = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, status, progress, startDate, endDate, color } = req.body
  if (!name || !startDate) throw createError('Name and start date are required', 400)

  const project = await prisma.project.create({
    data: { name, description: description || '', status: status || 'IN_PROGRESS', progress: progress || 0, startDate, endDate: endDate || '', color: color || '#4F46E5' },
  })
  res.status(201).json({ success: true, data: project, message: 'Project created successfully' })
})

export const updateProject = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const project = await prisma.project.findUnique({ where: { id } })
  if (!project) throw createError('Project not found', 404)

  // Recalculate totalHours from worklogs
  const worklogs = await prisma.worklog.findMany({ where: { projectId: id }, select: { duration: true } })
  const totalHours = worklogs.reduce((sum, w) => sum + w.duration, 0)

  const updated = await prisma.project.update({
    where: { id },
    data: { ...req.body, totalHours },
  })
  res.json({ success: true, data: updated, message: 'Project updated successfully' })
})

export const deleteProject = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id as string
  const project = await prisma.project.findUnique({ where: { id } })
  if (!project) throw createError('Project not found', 404)
  await prisma.project.delete({ where: { id } })
  res.json({ success: true, message: 'Project deleted successfully' })
})
