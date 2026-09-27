import { useState, useEffect } from 'react'
import { Calendar as BigCalendar, dateFnsLocalizer, View, Views } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useNavigate } from 'react-router-dom'
import { worklogApi } from '@/services/api'
import type { WorklogWithRelations } from '@/types'

const locales = { 'en-US': enUS }
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales })

export default function CalendarPage() {
  const navigate = useNavigate()
  const [worklogs, setWorklogs] = useState<WorklogWithRelations[]>([])
  const [view, setView] = useState<View>(Views.MONTH)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    worklogApi.getAll({ limit: 500 })
      .then(res => setWorklogs(res.data))
      .catch(err => console.error(err))
  }, [])

  const events = worklogs.map(log => {
    const [startH, startM] = log.startTime.split(':').map(Number)
    const [endH, endM] = log.endTime.split(':').map(Number)
    
    const start = new Date(log.date)
    start.setHours(startH, startM, 0)
    
    const end = new Date(log.date)
    end.setHours(endH, endM, 0)

    return {
      id: log.id,
      title: log.title,
      start,
      end,
      resource: log
    }
  })

  const eventPropGetter = (event: typeof events[0]) => {
    const cat = event.resource.category
    let bg = '#6B7280' // default OTHER
    if (cat === 'DEVELOPMENT') bg = '#4F46E5'
    else if (cat === 'CLOUD') bg = '#0EA5E9'
    else if (cat === 'SECURITY') bg = '#EF4444'
    else if (cat === 'NETWORKING') bg = '#F59E0B'
    else if (cat === 'RESEARCH') bg = '#8B5CF6'
    else if (cat === 'DOCUMENTATION') bg = '#10B981'
    else if (cat === 'MEETING') bg = '#F97316'
    else if (cat === 'TRAINING') bg = '#06B6D4'

    return {
      style: {
        backgroundColor: bg,
        border: 'none',
        borderRadius: '6px',
        opacity: 0.9,
        color: 'white',
        display: 'block',
        fontSize: '12px',
        padding: '2px 6px',
      }
    }
  }

  return (
    <div className="space-y-6 animate-fade-in h-[calc(100vh-8rem)] flex flex-col">
      <div className="page-header shrink-0">
        <h1 className="page-title">Calendar</h1>
        <p className="page-subtitle">Visual timeline of your internship work</p>
      </div>

      <div className="section-card flex-1 min-h-[500px] flex flex-col p-2 sm:p-6 overflow-hidden">
        {/* Custom Calendar Header overrides tailwind typography defaults */}
        <style>{`
          .rbc-calendar { font-family: 'Inter', sans-serif; }
          .rbc-header { padding: 8px 0; font-weight: 600; font-size: 14px; text-transform: uppercase; color: hsl(var(--muted-foreground)); border-bottom: 1px solid hsl(var(--border)); }
          .rbc-month-view { border: 1px solid hsl(var(--border)); border-radius: 12px; overflow: hidden; }
          .rbc-day-bg { border-left: 1px solid hsl(var(--border)); border-bottom: 1px solid hsl(var(--border)); }
          .rbc-today { background-color: hsl(var(--primary) / 0.05); }
          .rbc-event { padding: 4px 8px; border-radius: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
          .rbc-toolbar button { border-radius: 6px; padding: 6px 12px; border-color: hsl(var(--border)); color: hsl(var(--foreground)); transition: all 0.2s; }
          .rbc-toolbar button:hover { background-color: hsl(var(--accent)); }
          .rbc-toolbar button.rbc-active { background-color: hsl(var(--primary)); color: white; border-color: hsl(var(--primary)); }
          .rbc-time-view { border: 1px solid hsl(var(--border)); border-radius: 12px; overflow: hidden; }
        `}</style>
        
        <div className="flex-1 min-h-0">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            view={view}
            onView={setView}
            date={date}
            onNavigate={setDate}
            eventPropGetter={eventPropGetter}
            onSelectEvent={(e) => navigate(`/worklogs?search=${encodeURIComponent(e.title)}`)}
            views={['month', 'week', 'day']}
            popup
            tooltipAccessor="title"
          />
        </div>
      </div>
    </div>
  )
}
