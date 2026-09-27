import { useState, useEffect } from 'react'
import { Plus, Search, Edit2, Trash2, FolderOpen, Calendar, Clock, X } from 'lucide-react'
import { toast } from 'sonner'
import { projectApi } from '@/services/api'
import { useTranslation } from '@/i18n/useTranslation'
import { formatDate, formatDuration, todayString } from '@/utils/date.utils'
import type { Project, ProjectStatus } from '@/types'
import { PROJECT_STATUS_OPTIONS as STATUSES } from '@/types'
import { cn } from '@/lib/utils'

const STATUS_COLORS: Record<string, string> = {
  PLANNING: 'badge-planned', IN_PROGRESS: 'badge-in-progress',
  COMPLETED: 'badge-completed', ON_HOLD: 'badge-blocked',
}

type ViewMode = 'list' | 'form'

export default function Projects() {
  const { t, language } = useTranslation()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const [form, setForm] = useState({
    name: '', description: '', status: 'IN_PROGRESS' as ProjectStatus, progress: 0,
    startDate: todayString(), endDate: '', color: '#4F46E5',
  })
  const [saving, setSaving] = useState(false)

  const load = async () => {
    try {
      const data = await projectApi.getAll()
      setProjects(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.description.toLowerCase().includes(search.toLowerCase())
  )

  const resetForm = () => {
    setForm({ name: '', description: '', status: 'IN_PROGRESS' as ProjectStatus, progress: 0, startDate: todayString(), endDate: '', color: '#4F46E5' })
    setEditingId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name) return toast.error(language === 'vi' ? 'Vui lòng nhập tên dự án' : 'Project name is required')
    
    setSaving(true)
    try {
      if (editingId) {
        await projectApi.update(editingId, form)
        toast.success(language === 'vi' ? 'Đã cập nhật dự án ✓' : 'Project updated')
      } else {
        await projectApi.create(form)
        toast.success(language === 'vi' ? 'Đã tạo dự án mới ✓' : 'Project created')
      }
      resetForm()
      setViewMode('list')
      load()
    } catch (err) {
      toast.error((err as Error).message)
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (p: Project) => {
    setForm({
      name: p.name, description: p.description, status: p.status,
      progress: p.progress, startDate: p.startDate, endDate: p.endDate, color: p.color,
    })
    setEditingId(p.id)
    setViewMode('form')
  }

  const handleDelete = async (id: string) => {
    if (!confirm(t.projects.confirmDelete)) return
    try {
      await projectApi.delete(id)
      toast.success(language === 'vi' ? 'Đã xóa dự án' : 'Project deleted')
      load()
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  if (loading) return <div className="space-y-4 animate-pulse">{Array.from({length:3}).map((_,i) => <div key={i} className="h-32 bg-muted rounded-xl" />)}</div>

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="page-header mb-0">
          <h1 className="page-title">{t.projects.title}</h1>
          <p className="page-subtitle">{t.projects.subtitle}</p>
        </div>
        {viewMode === 'list' ? (
          <button onClick={() => { resetForm(); setViewMode('form') }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
            <Plus className="w-4 h-4" /> {t.projects.newProject}
          </button>
        ) : (
          <button onClick={() => { resetForm(); setViewMode('list') }} className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent">
            <X className="w-4 h-4" /> {t.common.cancel}
          </button>
        )}
      </div>

      {viewMode === 'form' && (
        <form onSubmit={handleSubmit} className="section-card space-y-4 max-w-2xl">
          <h2 className="font-semibold">{editingId ? t.projects.editProject : t.projects.newProject}</h2>
          
          <div>
            <label className="form-label">{t.projects.nameLabel} *</label>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="form-input" required />
          </div>
          
          <div>
            <label className="form-label">{t.projects.descLabel}</label>
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={2} className="form-input resize-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">{t.projects.startDate} *</label>
              <input type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))} className="form-input" required />
            </div>
            <div>
              <label className="form-label">{t.projects.endDate}</label>
              <input type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))} className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.common.status}</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as ProjectStatus }))} className="form-input">
                {STATUSES.map(s => <option key={s.value} value={s.value}>{t.statusLabels[s.value as keyof typeof t.statusLabels] || s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">{t.projects.progress}</label>
              <input type="number" min="0" max="100" value={form.progress} onChange={e => setForm(f => ({ ...f, progress: Number(e.target.value) }))} className="form-input" />
            </div>
            <div>
              <label className="form-label">{t.projects.color}</label>
              <div className="flex gap-2 items-center mt-1">
                <input type="color" value={form.color} onChange={e => setForm(f => ({ ...f, color: e.target.value }))} className="w-10 h-10 p-1 rounded cursor-pointer border border-border" />
                <span className="text-sm font-mono text-muted-foreground">{form.color}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={saving} className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50">
              {saving ? t.common.saving : t.projects.saveProject}
            </button>
          </div>
        </form>
      )}

      {viewMode === 'list' && (
        <>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} className="form-input pl-9" placeholder={t.common.search} />
          </div>

          {filteredProjects.length === 0 ? (
            <div className="empty-state section-card">
              <div className="empty-state-icon"><FolderOpen className="w-8 h-8 text-muted-foreground" /></div>
              <p className="text-lg font-semibold text-foreground">{t.projects.emptyTitle}</p>
              <p className="text-sm text-muted-foreground mt-1">{t.projects.emptyDesc}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredProjects.map(project => (
                <div key={project.id} className="section-card flex flex-col group p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.color }} />
                      <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    </div>
                    <span className={cn('text-xs px-2 py-0.5 rounded-full border font-medium whitespace-nowrap', STATUS_COLORS[project.status])}>
                      {t.statusLabels[project.status as keyof typeof t.statusLabels] || project.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-10">{project.description || (language === 'vi' ? 'Không có mô tả.' : 'No description provided.')}</p>
                  
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(project.startDate)} {project.endDate ? `– ${formatDate(project.endDate)}` : ''}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{formatDuration(project.totalHours)} {language === 'vi' ? 'đã ghi' : 'logged'}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-foreground">{t.weeklyWorklog.progress}</span>
                      <span className="font-bold text-primary">{project.progress}%</span>
                    </div>
                    <div className="progress-bar mb-4">
                      <div className="progress-fill" style={{ width: `${project.progress}%`, background: project.color }} />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{project._count?.worklogs || 0} {language === 'vi' ? 'nhật ký' : 'worklogs'}</span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEdit(project)} className="p-1.5 text-muted-foreground hover:text-foreground rounded hover:bg-accent"><Edit2 className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(project.id)} className="p-1.5 text-muted-foreground hover:text-destructive rounded hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
