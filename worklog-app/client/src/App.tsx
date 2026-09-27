import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import DailyWorklog from '@/pages/DailyWorklog'
import WeeklyWorklog from '@/pages/WeeklyWorklog'
import WeekDetail from '@/pages/WeekDetail'
import References from '@/pages/References'
import CalendarPage from '@/pages/Calendar'
import Projects from '@/pages/Projects'
import Statistics from '@/pages/Statistics'
import FinalReport from '@/pages/FinalReport'
import Settings from '@/pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="worklogs" element={<DailyWorklog />} />
        <Route path="weeks" element={<WeeklyWorklog />} />
        <Route path="weeks/:id" element={<WeekDetail />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="references" element={<References />} />
        <Route path="projects" element={<Projects />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="report" element={<FinalReport />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
