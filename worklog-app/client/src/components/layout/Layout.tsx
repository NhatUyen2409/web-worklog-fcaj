import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { cn } from '@/lib/utils'
import Sidebar from './Sidebar'
import Header from './Header'
import { useAppStore } from '@/store'

export default function Layout() {
  const { sidebarCollapsed, loadProfile, loadWeeks, loadConsistency } = useAppStore()

  useEffect(() => {
    loadProfile()
    loadWeeks()
    loadConsistency()
  }, [])

  return (
    <div className={cn('app-layout', sidebarCollapsed && 'collapsed')}>
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="page-content animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
