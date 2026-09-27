import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'

import profileRoutes from './routes/profile.routes'
import worklogRoutes from './routes/worklog.routes'
import weekRoutes from './routes/week.routes'
import referenceRoutes from './routes/reference.routes'
import projectRoutes from './routes/project.routes'
import statisticsRoutes from './routes/statistics.routes'
import { errorMiddleware } from './middleware/error.middleware'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// ─── Middleware ───────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Static files (avatars)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

// ─── Routes ──────────────────────────────────────────────────────────────
app.use('/api/profile', profileRoutes)
app.use('/api/worklogs', worklogRoutes)
app.use('/api/weeks', weekRoutes)
app.use('/api/references', referenceRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/statistics', statisticsRoutes)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' })
})

// ─── Error Handler ────────────────────────────────────────────────────────
app.use(errorMiddleware)

// ─── Start ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 WorkLog API Server running on http://localhost:${PORT}`)
  console.log(`📚 Health check: http://localhost:${PORT}/api/health\n`)
})

export default app
