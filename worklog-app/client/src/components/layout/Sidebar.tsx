import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, User, BookOpen, CalendarDays, BookMarked,
  FolderOpen, BarChart3, FileText, Settings, ChevronLeft,
  ChevronRight, ClipboardList, LogOut, Briefcase,
} from 'lucide-react'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'

interface NavItem {
  to: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  badge?: string
}

export default function Sidebar() {
  const { sidebarCollapsed, toggleSidebar, profile } = useAppStore()
  const { t } = useTranslation()

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: t.nav.dashboard },
    { to: '/profile', icon: User, label: t.nav.profile },
    { to: '/worklogs', icon: ClipboardList, label: t.nav.dailyWorklog },
    { to: '/weeks', icon: BookOpen, label: t.nav.weeklyWorklog },
    { to: '/calendar', icon: CalendarDays, label: t.nav.calendar },
    { to: '/references', icon: BookMarked, label: t.nav.references },
    { to: '/projects', icon: FolderOpen, label: t.nav.projects },
    { to: '/statistics', icon: BarChart3, label: t.nav.statistics },
    { to: '/report', icon: FileText, label: t.nav.report },
    { to: '/settings', icon: Settings, label: t.nav.settings },
  ]

  return (
    <aside
      className={cn(
        'sidebar z-20',
        sidebarCollapsed && 'collapsed'
      )}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-border shrink-0">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-sm">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          {!sidebarCollapsed && (
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-foreground leading-tight truncate">{t.nav.appName}</p>
              <p className="text-xs text-muted-foreground truncate">{t.nav.appSubtitle}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn('nav-item group', isActive && 'active')
            }
            title={sidebarCollapsed ? label : undefined}
          >
            <Icon className="w-4.5 h-4.5 shrink-0" />
            {!sidebarCollapsed && (
              <span className="truncate">{label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Info */}
      <div className="border-t border-border p-3 shrink-0">
        <div className={cn(
          'flex items-center gap-2.5 p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors',
          sidebarCollapsed && 'justify-center'
        )}>
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 overflow-hidden">
            {profile?.avatar ? (
              <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xs font-bold">
                {profile?.fullName?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            )}
          </div>
          {!sidebarCollapsed && (
            <div className="overflow-hidden flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {profile?.fullName || 'Your Name'}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {profile?.company ? profile.company.split(' ').slice(0, 2).join(' ') : 'Company'}
              </p>
            </div>
          )}
          {!sidebarCollapsed && (
            <LogOut className="w-4 h-4 text-muted-foreground shrink-0" />
          )}
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={toggleSidebar}
        className={cn(
          'absolute top-20 -right-3 w-6 h-6 rounded-full bg-white border border-border shadow-sm',
          'flex items-center justify-center text-muted-foreground hover:text-foreground',
          'transition-colors z-30'
        )}
        title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {sidebarCollapsed
          ? <ChevronRight className="w-3 h-3" />
          : <ChevronLeft className="w-3 h-3" />
        }
      </button>
    </aside>
  )
}
