import { Router } from 'express'
import { getWeeks, getWeekById, updateWeekSummary, getWeekDetail } from '../controllers/week.controller'

const router = Router()

router.get('/', getWeeks)
router.get('/:id', getWeekById)
router.get('/:id/detail', getWeekDetail)
router.put('/:id/summary', updateWeekSummary)

export default router
