import { Router } from 'express'
import {
  getWorklogs, getWorklogById, createWorklog,
  updateWorklog, deleteWorklog, getWorklogsByWeek,
  getMissingDays, checkOverlap, clearSampleData,
} from '../controllers/worklog.controller'

const router = Router()

router.get('/', getWorklogs)
router.get('/missing', getMissingDays)
router.post('/clear-sample', clearSampleData)
router.get('/week/:weekId', getWorklogsByWeek)
router.post('/check-overlap', checkOverlap)
router.get('/:id', getWorklogById)
router.post('/', createWorklog)
router.put('/:id', updateWorklog)
router.delete('/:id', deleteWorklog)

export default router
