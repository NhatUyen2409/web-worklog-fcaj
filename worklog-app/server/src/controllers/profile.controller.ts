import { Request, Response } from 'express'
import { asyncHandler, createError } from '../middleware/error.middleware'
import prisma from '../lib/prisma'

export const getProfile = asyncHandler(async (_req: Request, res: Response) => {
  let user = await prisma.user.findFirst()
  if (!user) {
    user = await prisma.user.create({ data: {} })
  }
  res.json({ success: true, data: user })
})

export const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  const { fullName, phone, email, studentId, university, major, company, position, internshipStartDate, internshipEndDate, class: className } = req.body

  let user = await prisma.user.findFirst()
  if (!user) {
    user = await prisma.user.create({ data: {} })
  }

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: {
      ...(fullName !== undefined && { fullName }),
      ...(phone !== undefined && { phone }),
      ...(email !== undefined && { email }),
      ...(studentId !== undefined && { studentId }),
      ...(university !== undefined && { university }),
      ...(major !== undefined && { major }),
      ...(company !== undefined && { company }),
      ...(position !== undefined && { position }),
      ...(internshipStartDate !== undefined && { internshipStartDate }),
      ...(internshipEndDate !== undefined && { internshipEndDate }),
      ...(className !== undefined && { class: className }),
    },
  })
  res.json({ success: true, data: updated, message: 'Profile updated successfully' })
})

export const uploadAvatar = asyncHandler(async (req: Request, res: Response) => {
  // Avatar stored as base64 in DB for simplicity
  const { avatar } = req.body
  if (!avatar) throw createError('No avatar provided', 400)

  let user = await prisma.user.findFirst()
  if (!user) throw createError('Profile not found', 404)

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { avatar },
  })
  res.json({ success: true, data: updated, message: 'Avatar updated successfully' })
})
