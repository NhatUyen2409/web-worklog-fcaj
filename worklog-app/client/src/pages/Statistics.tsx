import { useState, useEffect } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Line, Legend, Area, AreaChart
} from 'recharts'
import { BarChart3, TrendingUp, PieChart as PieChartIcon } from 'lucide-react'
import { statisticsApi } from '@/services/api'
import type { DashboardStats, WeeklyHoursData, CategoryDistributionData } from '@/types'

export default function Statistics() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [weeklyHours, setWeeklyHours] = useState<WeeklyHoursData[]>([])
  const [categories, setCategories] = useState<CategoryDistributionData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      statisticsApi.getDashboard(),
      statisticsApi.getWeeklyHours(),
      statisticsApi.getCategoryDistribution()
    ])
      .then(([s, w, c]) => {
        setStats(s)
        setWeeklyHours(w)
        setCategories(c)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="space-y-4 animate-pulse"><div className="h-40 bg-muted rounded-xl" /><div className="grid grid-cols-2 gap-4"><div className="h-80 bg-muted rounded-xl" /><div className="h-80 bg-muted rounded-xl" /></div></div>

  // Calculate moving average for hours trend
  const trendData = weeklyHours.map((w, i, arr) => {
    let sum = w.hours
    let count = 1
    if (i > 0) { sum += arr[i-1].hours; count++ }
    if (i > 1) { sum += arr[i-2].hours; count++ }
    return {
      week: w.week,
      hours: w.hours,
      trend: parseFloat((sum / count).toFixed(1))
    }
  }).filter(w => w.hours > 0)

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Statistics</h1>
        <p className="page-subtitle">Visual analytics of your internship performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Hours Bar Chart */}
        <div className="section-card">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Weekly Hours</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyHours} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip 
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="hours" name="Hours Logged" radius={[4, 4, 0, 0]}>
                  {weeklyHours.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.status === 'COMPLETED' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution Donut */}
        <div className="section-card">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <PieChartIcon className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-foreground">Time by Category</h3>
          </div>
          <div className="h-80 flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} hours`, 'Duration']}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hours Trend Area Chart */}
        <div className="section-card lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-violet-600" />
            </div>
            <h3 className="font-semibold text-foreground">Effort Trend (3-Week Moving Avg)</h3>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="trend" name="Trend (Avg Hours)" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorTrend)" />
                <Line type="monotone" dataKey="hours" name="Actual Hours" stroke="hsl(var(--muted-foreground))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
