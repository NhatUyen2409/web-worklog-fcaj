import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Clock, BookMarked, ChevronRight } from 'lucide-react'
import { weekApi } from '@/services/api'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'
import { formatDate, formatDuration } from '@/utils/date.utils'
import type { Week } from '@/types'

export default function WeeklyWorklog() {
  const { t, language } = useTranslation()
  const [weeks, setWeeks] = useState<Week[]>([])
  const [loading, setLoading] = useState(true)

  const STATUS_CONFIG = {
    COMPLETED: { label: t.statusLabels.COMPLETED, cls: 'badge-completed', dot: 'bg-emerald-500' },
    IN_PROGRESS: { label: t.statusLabels.IN_PROGRESS, cls: 'badge-in-progress', dot: 'bg-blue-500' },
    NOT_STARTED: { label: t.statusLabels.NOT_STARTED, cls: 'badge-not-started', dot: 'bg-gray-400' },
  }

  useEffect(() => {
    weekApi.getAll()
      .then(setWeeks)
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const completedWeeks = weeks.filter(w => w.status === 'COMPLETED').length
  const totalHours = weeks.reduce((sum, w) => sum + w.totalHours, 0)

  if (loading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-48 bg-muted rounded-xl animate-pulse" />
      ))}
    </div>
  )

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">{t.weeklyWorklog.title}</h1>
        <p className="page-subtitle">{t.weeklyWorklog.subtitle}</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="stat-card text-center">
          <p className="text-2xl font-bold text-foreground">{completedWeeks} / 12</p>
          <p className="text-xs text-muted-foreground mt-1">{t.weeklyWorklog.completedWeeks}</p>
        </div>
        <div className="stat-card text-center">
          <p className="text-2xl font-bold text-foreground">{formatDuration(totalHours)}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.weeklyWorklog.totalHours}</p>
        </div>
        <div className="stat-card text-center">
          <p className="text-2xl font-bold text-foreground">
            {Math.round((completedWeeks / 12) * 100)}%
          </p>
          <p className="text-xs text-muted-foreground mt-1">{t.weeklyWorklog.overallProgress}</p>
        </div>
      </div>

      {/* 12-Week Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {weeks.map((week) => {
          const cfg = STATUS_CONFIG[week.status as keyof typeof STATUS_CONFIG] || STATUS_CONFIG.NOT_STARTED
          const summaryText = language === 'vi'
            ? (week.summaryVietnamese || week.summaryEnglish)
            : (week.summaryEnglish || week.summaryVietnamese)

          return (
            <Link
              key={week.id}
              to={`/weeks/${week.id}`}
              className="section-card hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm',
                    week.status === 'COMPLETED' && 'bg-emerald-50 text-emerald-700',
                    week.status === 'IN_PROGRESS' && 'bg-blue-50 text-blue-700',
                    week.status === 'NOT_STARTED' && 'bg-gray-100 text-gray-500'
                  )}>
                    {week.weekNumber}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{language === 'vi' ? 'Tuần' : 'Week'} {week.weekNumber}</h3>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(week.startDate, 'MMM dd')} – {formatDate(week.endDate, 'MMM dd')}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Status badge */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className={cn('px-2 py-0.5 rounded-full text-xs font-medium border inline-flex items-center gap-1', cfg.cls)}>
                  <span className={cn('w-1.5 h-1.5 rounded-full', cfg.dot)} />
                  {cfg.label}
                </span>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatDuration(week.totalHours)}
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {week._count?.worklogs || 0} {language === 'vi' ? 'nhật ký' : 'worklogs'}
                </span>
                <span className="flex items-center gap-1">
                  <BookMarked className="w-3 h-3" />
                  {week._count?.references || 0} {language === 'vi' ? 'tài liệu' : 'refs'}
                </span>
              </div>

              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{t.weeklyWorklog.progress}</span>
                  <span className="font-medium">{week.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${week.progress}%` }} />
                </div>
              </div>

              {/* Summary preview */}
              {summaryText && (
                <p className="text-xs text-muted-foreground mt-3 line-clamp-2">
                  {summaryText}
                </p>
              )}

              {week.status === 'NOT_STARTED' && (
                <p className="text-xs text-muted-foreground mt-3 italic">{language === 'vi' ? 'Chưa có nhật ký cho tuần này.' : 'No worklogs yet for this week.'}</p>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
