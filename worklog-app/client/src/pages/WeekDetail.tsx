import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, Clock, BookMarked, ClipboardList, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'
import { weekApi } from '@/services/api'
import { formatDate, formatDuration } from '@/utils/date.utils'
import { cn } from '@/lib/utils'
import type { WeekDetail as WeekDetailType } from '@/types'

export default function WeekDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [week, setWeek] = useState<WeekDetailType | null>(null)
  const [loading, setLoading] = useState(true)
  const [summaryEn, setSummaryEn] = useState('')
  const [summaryVi, setSummaryVi] = useState('')
  const [savingSummary, setSavingSummary] = useState(false)

  useEffect(() => {
    if (!id) return
    weekApi.getDetail(id)
      .then(data => {
        setWeek(data)
        setSummaryEn(data.summaryEnglish)
        setSummaryVi(data.summaryVietnamese)
      })
      .finally(() => setLoading(false))
  }, [id])

  const saveSummary = async () => {
    if (!id) return
    setSavingSummary(true)
    try {
      await weekApi.updateSummary(id, summaryEn, summaryVi)
      toast.success('Weekly summary saved ✓')
    } catch {
      toast.error('Failed to save summary')
    } finally {
      setSavingSummary(false)
    }
  }

  if (loading) return <div className="space-y-4 animate-pulse">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-32 bg-muted rounded-xl" />)}</div>
  if (!week) return <div className="empty-state"><p>Week not found</p></div>

  // Group worklogs by date
  const byDate = week.worklogs.reduce((acc, wl) => {
    if (!acc[wl.date]) acc[wl.date] = []
    acc[wl.date].push(wl)
    return acc
  }, {} as Record<string, typeof week.worklogs>)

  const allTasks = week.worklogs.map(w => w.title)
  const allResults = week.worklogs.map(w => w.result)

  const CATEGORY_COLORS: Record<string, string> = {
    DEVELOPMENT: 'bg-indigo-100 text-indigo-700',
    CLOUD: 'bg-sky-100 text-sky-700',
    SECURITY: 'bg-red-100 text-red-700',
    NETWORKING: 'bg-amber-100 text-amber-700',
    RESEARCH: 'bg-purple-100 text-purple-700',
    DOCUMENTATION: 'bg-emerald-100 text-emerald-700',
    MEETING: 'bg-orange-100 text-orange-700',
    TRAINING: 'bg-cyan-100 text-cyan-700',
    OTHER: 'bg-gray-100 text-gray-700',
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/weeks')} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="page-title">Week {week.weekNumber}</h1>
          <p className="page-subtitle">{formatDate(week.startDate, 'MMMM dd')} – {formatDate(week.endDate, 'MMMM dd, yyyy')}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" /> {formatDuration(week.totalHours)}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <ClipboardList className="w-4 h-4" /> {week.worklogs.length} worklogs
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <BookMarked className="w-4 h-4" /> {week.references.length} refs
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="section-card">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">Week Progress</span>
          <span className="text-primary font-bold">{week.progress}%</span>
        </div>
        <div className="progress-bar h-3">
          <div className="progress-fill h-full" style={{ width: `${week.progress}%` }} />
        </div>
      </div>

      {/* 1. Work Done */}
      {allTasks.length > 0 && (
        <div className="section-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">1</span>
            Work Done
          </h3>
          <ul className="space-y-1.5">
            {allTasks.map((task, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 2. Results */}
      {allResults.length > 0 && (
        <div className="section-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold">2</span>
            Results / Achievements
          </h3>
          <ul className="space-y-1.5">
            {allResults.map((result, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-emerald-500">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. References */}
      {week.references.length > 0 && (
        <div className="section-card">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-violet-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            References Used This Week
          </h3>
          <div className="space-y-2">
            {week.references.map(ref => (
              <div key={ref.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{ref.title}</p>
                  <p className="text-xs text-muted-foreground">{ref.source} · Accessed {formatDate(ref.accessDate)}</p>
                </div>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Daily Worklog */}
      {Object.keys(byDate).length > 0 && (
        <div className="section-card">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center font-bold">4</span>
            Daily Worklog
          </h3>
          <div className="space-y-4">
            {Object.entries(byDate).map(([date, logs]) => (
              <div key={date}>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {formatDate(date, 'EEEE, MMMM dd')}
                </h4>
                <div className="space-y-2 ml-4">
                  {logs.map(log => (
                    <div key={log.id} className="p-3 rounded-lg border border-border bg-muted/30">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">{log.title}</p>
                        <span className={cn('text-xs px-2 py-0.5 rounded-full shrink-0', CATEGORY_COLORS[log.category])}>
                          {log.category.toLowerCase()}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {log.startTime} – {log.endTime} · {formatDuration(log.duration)}
                      </p>
                      <p className="text-xs text-foreground/80 mt-1.5">{log.description}</p>
                      <p className="text-xs text-emerald-700 mt-1">✓ {log.result}</p>
                      {log.references.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {log.references.map(ref => (
                            <a key={ref.id} href={ref.url} target="_blank" rel="noopener noreferrer"
                              className="text-xs text-primary underline hover:text-primary/70">
                              {ref.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Weekly Summary */}
      <div className="section-card">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold">5</span>
          Weekly Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label">English</label>
            <textarea
              value={summaryEn}
              onChange={e => setSummaryEn(e.target.value)}
              rows={5}
              className="form-input resize-none"
              placeholder="During this week, I learned..."
            />
          </div>
          <div>
            <label className="form-label">Vietnamese</label>
            <textarea
              value={summaryVi}
              onChange={e => setSummaryVi(e.target.value)}
              rows={5}
              className="form-input resize-none"
              placeholder="Trong tuần này, tôi đã học..."
            />
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button
            onClick={saveSummary}
            disabled={savingSummary}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            <Save className="w-4 h-4" />
            {savingSummary ? 'Saving...' : 'Save Summary'}
          </button>
        </div>
      </div>

      {/* Empty state */}
      {week.worklogs.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-icon">
            <ClipboardList className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-lg font-semibold text-foreground">No worklogs yet</p>
          <p className="text-sm text-muted-foreground mt-1">Start adding daily worklogs for this week</p>
          <Link to="/worklogs?new=true" className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            + Add Worklog
          </Link>
        </div>
      )}
    </div>
  )
}
