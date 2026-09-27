import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ClipboardList, Clock, CheckCircle2, BookMarked,
  FolderOpen, TrendingUp, AlertTriangle, Plus, ChevronRight,
  Calendar, ArrowRight,
} from 'lucide-react'
import { statisticsApi, worklogApi } from '@/services/api'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'
import { getGreeting, formatDate, formatDuration } from '@/utils/date.utils'
import type { DashboardStats } from '@/types'

interface StatCard {
  title: string
  value: string | number
  icon: React.ComponentType<{ className?: string }>
  color: string
  bg: string
  suffix?: string
  link?: string
}

export default function Dashboard() {
  const { profile, weeks, consistencyData, loadConsistency } = useAppStore()
  const { t, language } = useTranslation()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [missingDays, setMissingDays] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [statsData, missing] = await Promise.all([
          statisticsApi.getDashboard(),
          worklogApi.getMissingDays(),
        ])
        setStats(statsData)
        setMissingDays(missing)
      } finally {
        setLoading(false)
      }
    }
    load()
    loadConsistency()
  }, [])

  const currentWeek = weeks.find(w => w.status === 'IN_PROGRESS') || weeks[6]

  const statCards: StatCard[] = stats ? [
    { title: t.dashboard.totalWorklogs, value: stats.totalWorklogs, icon: ClipboardList, color: 'text-indigo-600', bg: 'bg-indigo-50', link: '/worklogs' },
    { title: t.dashboard.workingHours, value: stats.totalWorkingHours, icon: Clock, color: 'text-sky-600', bg: 'bg-sky-50', link: '/statistics' },
    { title: t.dashboard.completedWeeks, value: `${stats.completedWeeks} / 12`, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', link: '/weeks' },
    { title: t.dashboard.references, value: stats.totalReferences, icon: BookMarked, color: 'text-violet-600', bg: 'bg-violet-50', link: '/references' },
    { title: t.dashboard.projects, value: stats.totalProjects, icon: FolderOpen, color: 'text-amber-600', bg: 'bg-amber-50', link: '/projects' },
    { title: t.dashboard.internshipProgress, value: `${stats.internshipProgress}%`, icon: TrendingUp, color: 'text-rose-600', bg: 'bg-rose-50', link: '/weeks' },
  ] : []

  if (loading) return <DashboardSkeleton />

  return (
    <div className="space-y-6 animate-fade-in">
      {/* ── Hero greeting ───────────────────────────────────────── */}
      <div className="gradient-hero rounded-2xl p-6 border border-primary/10">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {getGreeting(language)}, {profile?.fullName?.split(' ').slice(-1)[0] || t.header.student} 👋
            </h2>
            <p className="text-muted-foreground mt-1">{t.dashboard.subtitle}</p>
          </div>
          <Link
            to="/worklogs?new=true"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {t.dashboard.addTodayWorklog}
          </Link>
        </div>

        {/* Overall progress */}
        {stats && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{t.dashboard.internshipProgress}</span>
              <span className="text-sm font-bold text-primary">
                {language === 'vi' ? 'Tuần' : 'Week'} {currentWeek?.weekNumber || '?'} / 12 — {stats.internshipProgress}%
              </span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${stats.internshipProgress}%` }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">
                {profile?.internshipStartDate ? formatDate(profile.internshipStartDate) : (language === 'vi' ? 'Bắt đầu' : 'Start Date')}
              </span>
              <span className="text-xs text-muted-foreground">
                {profile?.internshipEndDate ? formatDate(profile.internshipEndDate) : (language === 'vi' ? 'Kết thúc' : 'End Date')}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* ── Missing worklog alert ────────────────────────────────── */}
      {consistencyData?.missingToday && (
        <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
          <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-orange-800">{t.dashboard.missingAlertTitle}</p>
            <p className="text-xs text-orange-600 mt-0.5">{t.dashboard.missingAlertDesc} {formatDate(consistencyData.todayStr, 'EEEE, dd/MM/yyyy')}</p>
          </div>
          <Link to="/worklogs?new=true" className="flex items-center gap-1 text-xs font-medium text-orange-700 hover:text-orange-900">
            {t.dashboard.addNow} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}

      {/* ── Stats grid ──────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {statCards.map((card) => (
          <Link key={card.title} to={card.link || '#'} className="stat-card group">
            <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center mb-3', card.bg)}>
              <card.icon className={cn('w-4.5 h-4.5', card.color)} />
            </div>
            <p className="text-xl font-bold text-foreground">{card.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{card.title}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── Current Week ────────────────────────────────────── */}
        {currentWeek && (
          <div className="section-card lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">{t.dashboard.currentWeek}</h3>
              <Link to={`/weeks/${currentWeek.id}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                {t.dashboard.viewDetail} <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-lg">{currentWeek.weekNumber}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{language === 'vi' ? 'Tuần' : 'Week'} {currentWeek.weekNumber}</h4>
                <p className="text-sm text-muted-foreground">
                  {formatDate(currentWeek.startDate, 'MMM dd')} – {formatDate(currentWeek.endDate, 'MMM dd, yyyy')}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm"><span className="font-medium">{formatDuration(currentWeek.totalHours)}</span> <span className="text-muted-foreground">{language === 'vi' ? 'tổng' : 'total'}</span></span>
                  <span className="text-sm"><span className="font-medium">{currentWeek._count?.worklogs || 0}</span> <span className="text-muted-foreground">{language === 'vi' ? 'nhật ký' : 'worklogs'}</span></span>
                  <span className="text-sm"><span className="font-medium">{currentWeek._count?.references || 0}</span> <span className="text-muted-foreground">{language === 'vi' ? 'tài liệu' : 'refs'}</span></span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{t.weeklyWorklog.progress}</span>
                    <span className="font-medium">{currentWeek.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${currentWeek.progress}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Worklog Consistency ──────────────────────────────── */}
        <div className="section-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">{language === 'vi' ? 'Chỉ số đều đặn tuần này' : "This Week's Consistency"}</h3>
            <Calendar className="w-4 h-4 text-muted-foreground" />
          </div>

          {consistencyData ? (
            <div className="space-y-3">
              <div className="text-center py-3">
                <p className="text-4xl font-bold text-foreground">
                  {consistencyData.thisWeekDays}
                  <span className="text-xl text-muted-foreground font-normal"> / {consistencyData.totalWorkingDays}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">{language === 'vi' ? 'ngày làm việc hoàn thành' : 'working days completed'}</p>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${consistencyData.totalWorkingDays > 0
                      ? (consistencyData.thisWeekDays / consistencyData.totalWorkingDays) * 100
                      : 0}%`
                  }}
                />
              </div>

              {consistencyData.missingToday ? (
                <p className="text-xs text-orange-600 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> {language === 'vi' ? 'Chưa ghi nhật ký hôm nay' : "Today's worklog missing"}
                </p>
              ) : (
                <p className="text-xs text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {language === 'vi' ? 'Đã ghi nhật ký hôm nay ✓' : "Today's worklog submitted ✓"}
                </p>
              )}
            </div>
          ) : (
            <div className="empty-state py-6">
              <p className="text-sm text-muted-foreground">{language === 'vi' ? 'Thiết lập ngày bắt đầu thực tập trong Hồ sơ' : 'Set your internship start date in Profile'}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Missing Days ─────────────────────────────────────── */}
      {missingDays.length > 0 && (
        <div className="section-card">
          <h3 className="font-semibold text-foreground mb-3">{language === 'vi' ? 'Các ngày chưa ghi nhận' : 'Missing Worklogs'}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {missingDays.slice(0, 10).map(date => (
              <Link
                key={date}
                to={`/worklogs?new=true&date=${date}`}
                className="flex flex-col items-center p-2 rounded-lg border border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors"
              >
                <span className="text-xs font-medium text-orange-700">{formatDate(date, 'EEE')}</span>
                <span className="text-sm font-bold text-orange-800">{formatDate(date, 'MMM dd')}</span>
                <span className="text-xs text-orange-600 mt-0.5">{language === 'vi' ? 'Chưa ghi' : 'Missing'}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── 12-Week Timeline ─────────────────────────────────── */}
      <div className="section-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">{language === 'vi' ? 'Tiến độ 12 tuần thực tập' : '12-Week Timeline'}</h3>
          <Link to="/weeks" className="text-xs text-primary hover:underline">{language === 'vi' ? 'Xem tất cả' : 'View All'}</Link>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2">
          {weeks.map((week) => (
            <Link
              key={week.id}
              to={`/weeks/${week.id}`}
              className={cn(
                'flex flex-col items-center p-2 rounded-lg border text-center transition-all hover:scale-105',
                week.status === 'COMPLETED' && 'bg-emerald-50 border-emerald-200',
                week.status === 'IN_PROGRESS' && 'bg-blue-50 border-blue-200 ring-2 ring-primary/30',
                week.status === 'NOT_STARTED' && 'bg-gray-50 border-gray-200'
              )}
            >
              <span className={cn(
                'text-xs font-semibold',
                week.status === 'COMPLETED' && 'text-emerald-700',
                week.status === 'IN_PROGRESS' && 'text-blue-700',
                week.status === 'NOT_STARTED' && 'text-gray-500'
              )}>W{week.weekNumber}</span>
              {week.status === 'COMPLETED' && <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5" />}
              {week.status === 'IN_PROGRESS' && (
                <div className="w-5 h-1 rounded-full bg-gray-200 mt-1 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${week.progress}%` }} />
                </div>
              )}
              {week.status === 'NOT_STARTED' && <div className="w-3 h-3 rounded-full border-2 border-gray-300 mt-0.5" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-32 bg-muted rounded-2xl" />
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 bg-muted rounded-xl" />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 h-40 bg-muted rounded-xl" />
        <div className="h-40 bg-muted rounded-xl" />
      </div>
    </div>
  )
}
