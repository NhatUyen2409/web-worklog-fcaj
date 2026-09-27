import { Bell, Plus, Globe } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'
import { getGreeting, todayString, formatDate } from '@/utils/date.utils'

export default function Header() {
  const { profile, consistencyData } = useAppStore()
  const { t, language, setLanguage } = useTranslation()
  const location = useLocation()

  const routeKeyMap: Record<string, keyof typeof t.nav> = {
    '/dashboard': 'dashboard',
    '/profile': 'profile',
    '/worklogs': 'dailyWorklog',
    '/weeks': 'weeklyWorklog',
    '/calendar': 'calendar',
    '/references': 'references',
    '/projects': 'projects',
    '/statistics': 'statistics',
    '/report': 'report',
    '/settings': 'settings',
  }

  const activeKey = Object.entries(routeKeyMap).find(([path]) =>
    location.pathname.startsWith(path)
  )?.[1] || 'dashboard'

  const currentPage = t.nav[activeKey] || t.nav.dashboard
  const showBell = consistencyData?.missingToday

  const hour = new Date().getHours()
  const greeting = language === 'vi'
    ? (hour < 12 ? t.header.greetingMorning : hour < 18 ? t.header.greetingAfternoon : t.header.greetingEvening)
    : getGreeting()

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-border shrink-0 sticky top-0 z-10">
      {/* Left: Page title */}
      <div>
        <h1 className="text-base font-semibold text-foreground">{currentPage}</h1>
        <p className="text-xs text-muted-foreground capitalize">
          {language === 'vi'
            ? formatDate(todayString(), 'EEEE, dd/MM/yyyy')
            : formatDate(todayString(), 'EEEE, MMMM dd, yyyy')}
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2.5">
        {/* Language switcher pill */}
        <div className="flex items-center bg-muted/60 p-0.5 rounded-lg border border-border text-xs">
          <button
            type="button"
            onClick={() => setLanguage('vi')}
            className={cn(
              'px-2 py-1 rounded-md transition-all font-medium flex items-center gap-1',
              language === 'vi'
                ? 'bg-white shadow-sm text-primary font-bold'
                : 'text-muted-foreground hover:text-foreground'
            )}
            title="Tiếng Việt"
          >
            <span>🇻🇳</span> VI
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={cn(
              'px-2 py-1 rounded-md transition-all font-medium flex items-center gap-1',
              language === 'en'
                ? 'bg-white shadow-sm text-primary font-bold'
                : 'text-muted-foreground hover:text-foreground'
            )}
            title="English"
          >
            <span>🇬🇧</span> EN
          </button>
        </div>

        {/* Quick add worklog */}
        <Link
          to="/worklogs?new=true"
          className={cn(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium',
            'bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm'
          )}
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.header.addWorklog}</span>
        </Link>

        {/* Missing worklog bell */}
        <button
          className={cn(
            'relative w-8 h-8 rounded-lg flex items-center justify-center',
            'hover:bg-accent transition-colors',
            showBell && 'text-orange-500'
          )}
          title={showBell ? t.header.missingTodayAlert : t.header.notifications}
        >
          <Bell className="w-4 h-4" />
          {showBell && (
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white" />
          )}
        </button>

        {/* User greeting */}
        <div className="hidden md:flex items-center gap-2 pl-2 border-l border-border">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
            {profile?.avatar ? (
              <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xs font-bold">
                {profile?.fullName?.charAt(0)?.toUpperCase() || '?'}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {greeting}, <span className="font-medium text-foreground">{profile?.fullName?.split(' ')[0] || t.header.student}</span>
          </span>
        </div>
      </div>
    </header>
  )
}
