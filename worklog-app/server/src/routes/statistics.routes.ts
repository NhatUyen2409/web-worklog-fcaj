import { Router } from 'express'
import { getDashboardStats, getWeeklyHours, getCategoryDistribution, getWorklogConsistency } from '../controllers/statistics.controller'

const router = Router()

router.get('/dashboard', getDashboardStats)
router.get('/weekly-hours', getWeeklyHours)
router.get('/category-distribution', getCategoryDistribution)
router.get('/consistency', getWorklogConsistency)

export default router
