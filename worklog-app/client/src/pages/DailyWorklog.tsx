import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Plus, Search, Edit2, Trash2, Eye, ExternalLink, ClipboardList, X } from 'lucide-react'
import { toast } from 'sonner'
import { worklogApi, weekApi, projectApi } from '@/services/api'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'
import { formatDate, formatDuration, calculateDuration, todayString } from '@/utils/date.utils'
import { cn } from '@/lib/utils'
import type { WorklogWithRelations, Week, Project, WorklogCategory, WorklogStatus } from '@/types'
import { WORKLOG_STATUS_OPTIONS, WORKLOG_CATEGORY_OPTIONS as CATS } from '@/types'

const STATUS_COLORS: Record<string, string> = {
  COMPLETED: 'badge-completed', IN_PROGRESS: 'badge-in-progress',
  PLANNED: 'badge-planned', BLOCKED: 'badge-blocked',
}
const CATEGORY_COLORS: Record<string, string> = {
  DEVELOPMENT: 'cat-development', CLOUD: 'cat-cloud', SECURITY: 'cat-security',
  NETWORKING: 'cat-networking', RESEARCH: 'cat-research', DOCUMENTATION: 'cat-documentation',
  MEETING: 'cat-meeting', TRAINING: 'cat-training', OTHER: 'bg-gray-50 text-gray-600 border-gray-200',
}

type ViewMode = 'table' | 'form' | 'view'

export default function DailyWorklog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { profile } = useAppStore()
  const { t, language } = useTranslation()

  const [worklogs, setWorklogs] = useState<WorklogWithRelations[]>([])
  const [weeks, setWeeks] = useState<Week[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [viewingLog, setViewingLog] = useState<WorklogWithRelations | null>(null)
  const [search, setSearch] = useState('')
  const [filterWeek, setFilterWeek] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

  // Form state
  const [form, setForm] = useState({
    weekId: '', projectId: '', date: todayString(), startTime: '08:30', endTime: '17:30',
    title: '', description: '', result: '', status: 'COMPLETED' as WorklogStatus, category: 'DEVELOPMENT' as WorklogCategory,
    references: [] as Array<{ title: string; url: string; source: string; accessDate: string; description: string }>
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    try {
      const [wls, ws, ps] = await Promise.all([
        worklogApi.getAll({ search: search || undefined, weekId: filterWeek || undefined, status: filterStatus as WorklogStatus || undefined, category: filterCategory as WorklogCategory || undefined, limit: 100 }),
        weekApi.getAll(),
        projectApi.getAll(),
      ])
      setWorklogs(wls.data)
      setWeeks(ws)
      setProjects(ps)
    } catch (err) {
      toast.error('Failed to load worklogs: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }, [search, filterWeek, filterStatus, filterCategory])

  useEffect(() => { load() }, [load])

  useEffect(() => {
    if (searchParams.get('new') === 'true') {
      const date = searchParams.get('date') || todayString()
      setForm(f => ({ ...f, date }))
      setViewMode('form')
      setEditingId(null)
    }
  }, [searchParams])

  // Auto-detect week from date
  useEffect(() => {
    if (!profile?.internshipStartDate || !form.date) return
    const start = new Date(profile.internshipStartDate)
    const selected = new Date(form.date)
    const diff = Math.floor((selected.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 7))
    const weekNum = Math.max(1, Math.min(12, diff + 1))
    const matchedWeek = weeks.find(w => w.weekNumber === weekNum)
    if (matchedWeek) setForm(f => ({ ...f, weekId: matchedWeek.id }))
  }, [form.date, weeks, profile])

  const duration = calculateDuration(form.startTime, form.endTime)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.weekId) errs.weekId = language === 'vi' ? 'Vui lòng chọn tuần' : 'Please select a week'
    if (!form.date) errs.date = language === 'vi' ? 'Vui lòng chọn ngày' : 'Date is required'
    if (!form.startTime) errs.startTime = language === 'vi' ? 'Vui lòng chọn giờ bắt đầu' : 'Start time is required'
    if (!form.endTime) errs.endTime = language === 'vi' ? 'Vui lòng chọn giờ kết thúc' : 'End time is required'
    if (duration <= 0) errs.endTime = language === 'vi' ? 'Giờ kết thúc phải sau giờ bắt đầu' : 'End time must be after start time'
    if (!form.title.trim()) errs.title = language === 'vi' ? 'Vui lòng nhập tên công việc' : 'Task title is required'
    if (!form.description.trim()) errs.description = language === 'vi' ? 'Vui lòng nhập mô tả chi tiết' : 'Description is required'
    if (!form.result.trim()) errs.result = language === 'vi' ? 'Vui lòng nhập kết quả đạt được' : 'Result / Achievement is required'
    
    const hasInvalidRefs = form.references.some(r => !r.title.trim() || !r.url.trim())
    if (hasInvalidRefs) errs.references = language === 'vi' ? 'Tất cả tài liệu tham khảo phải có tiêu đề và URL' : 'All references must have a title and URL'
    
    setFormErrors(errs)
    if (errs.references) toast.error(errs.references)
    return Object.keys(errs).length === 0
  }

  const resetForm = () => {
    setForm({ weekId: '', projectId: '', date: todayString(), startTime: '08:30', endTime: '17:30', title: '', description: '', result: '', status: 'COMPLETED', category: 'DEVELOPMENT', references: [] })
    setFormErrors({})
    setEditingId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSaving(true)
    try {
      if (editingId) {
        await worklogApi.update(editingId, { ...form, duration })
        toast.success(language === 'vi' ? 'Cập nhật nhật ký thành công ✓' : 'Worklog updated successfully ✓')
      } else {
        await worklogApi.create({ ...form, duration })
        toast.success(language === 'vi' ? 'Lưu nhật ký thành công ✓' : 'Worklog saved successfully ✓')
      }
      resetForm()
      setViewMode('table')
      setSearchParams({})
      load()
    } catch (err) {
      toast.error((err as Error).message)
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (log: WorklogWithRelations) => {
    setForm({
      weekId: log.weekId, projectId: log.projectId || '', date: log.date,
      startTime: log.startTime, endTime: log.endTime, title: log.title,
      description: log.description, result: log.result,
      status: log.status, category: log.category,
      references: log.references.map(r => ({ title: r.title, url: r.url, source: r.source, accessDate: r.accessDate, description: r.description })),
    })
    setEditingId(log.id)
    setViewMode('form')
  }

  const handleDelete = async (id: string) => {
    if (!confirm(t.dailyWorklog.confirmDelete)) return
    try {
      await worklogApi.delete(id)
      toast.success(language === 'vi' ? 'Đã xóa nhật ký thành công' : 'Worklog deleted successfully')
      load()
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  const addReference = () => setForm(f => ({ ...f, references: [...f.references, { title: '', url: '', source: '', accessDate: todayString(), description: '' }] }))
  const removeReference = (i: number) => setForm(f => ({ ...f, references: f.references.filter((_, idx) => idx !== i) }))
  const updateReference = (i: number, field: string, value: string) =>
    setForm(f => ({ ...f, references: f.references.map((r, idx) => idx === i ? { ...r, [field]: value } : r) }))

  if (loading) return <div className="space-y-3 animate-pulse">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="h-14 bg-muted rounded-lg" />)}</div>

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="page-header mb-0">
          <h1 className="page-title">{t.dailyWorklog.title}</h1>
          <p className="page-subtitle">{worklogs.length} {t.dailyWorklog.entriesCount}</p>
        </div>
        {viewMode === 'table' ? (
          <button onClick={() => { resetForm(); setViewMode('form') }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
            <Plus className="w-4 h-4" /> {t.header.addWorklog}
          </button>
        ) : (
          <button onClick={() => { resetForm(); setViewMode('table'); setSearchParams({}) }}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
            <X className="w-4 h-4" /> {t.common.cancel}
          </button>
        )}
      </div>

      {/* ── FORM ───────────────────────────────────────────────────────── */}
      {viewMode === 'form' && (
        <form onSubmit={handleSubmit} className="section-card space-y-5">
          <h2 className="font-semibold text-foreground text-lg">{editingId ? t.dailyWorklog.editWorklog : t.dailyWorklog.newWorklog}</h2>

          {/* Row 1: Date + Week */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">{t.common.date} <span className="text-destructive">*</span></label>
              <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} className={`form-input ${formErrors.date ? 'border-destructive' : ''}`} />
              {formErrors.date && <p className="form-error">{formErrors.date}</p>}
            </div>
            <div>
              <label className="form-label">{t.common.week} <span className="text-destructive">*</span></label>
              <select value={form.weekId} onChange={e => setForm(f => ({ ...f, weekId: e.target.value }))} className={`form-input ${formErrors.weekId ? 'border-destructive' : ''}`}>
                <option value="">{t.dailyWorklog.selectWeek}</option>
                {weeks.map(w => <option key={w.id} value={w.id}>{language === 'vi' ? `Tuần ${w.weekNumber}` : `Week ${w.weekNumber}`}</option>)}
              </select>
              {formErrors.weekId && <p className="form-error">{formErrors.weekId}</p>}
            </div>
          </div>

          {/* Row 2: Time */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="form-label">{t.dailyWorklog.startTime} <span className="text-destructive">*</span></label>
              <input type="time" value={form.startTime} onChange={e => setForm(f => ({ ...f, startTime: e.target.value }))} className={`form-input ${formErrors.startTime ? 'border-destructive' : ''}`} />
            </div>
            <div>
              <label className="form-label">{t.dailyWorklog.endTime} <span className="text-destructive">*</span></label>
              <input type="time" value={form.endTime} onChange={e => setForm(f => ({ ...f, endTime: e.target.value }))} className={`form-input ${formErrors.endTime ? 'border-destructive' : ''}`} />
              {formErrors.endTime && <p className="form-error">{formErrors.endTime}</p>}
            </div>
            <div>
              <label className="form-label">{t.dailyWorklog.duration}</label>
              <div className="form-input bg-muted/50 font-medium text-primary">{duration > 0 ? formatDuration(duration) : '—'}</div>
            </div>
          </div>

          {/* Row 3: Title */}
          <div>
            <label className="form-label">{t.dailyWorklog.taskLabel} <span className="text-destructive">*</span></label>
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={`form-input ${formErrors.title ? 'border-destructive' : ''}`} placeholder={t.dailyWorklog.taskPlaceholder} />
            {formErrors.title && <p className="form-error">{formErrors.title}</p>}
          </div>

          {/* Row 4: Description */}
          <div>
            <label className="form-label">{t.dailyWorklog.descLabel} <span className="text-destructive">*</span></label>
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={3} className={`form-input resize-none ${formErrors.description ? 'border-destructive' : ''}`} placeholder={t.dailyWorklog.descPlaceholder} />
            {formErrors.description && <p className="form-error">{formErrors.description}</p>}
          </div>

          {/* Row 5: Result */}
          <div>
            <label className="form-label">{t.dailyWorklog.resultLabel} <span className="text-destructive">*</span></label>
            <textarea value={form.result} onChange={e => setForm(f => ({ ...f, result: e.target.value }))} rows={2} className={`form-input resize-none ${formErrors.result ? 'border-destructive' : ''}`} placeholder={t.dailyWorklog.resultPlaceholder} />
            {formErrors.result && <p className="form-error">{formErrors.result}</p>}
          </div>

          {/* Row 6: Category + Status + Project */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="form-label">{t.common.category}</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as WorklogCategory }))} className="form-input">
                {CATS.map(c => <option key={c.value} value={c.value}>{(t.categoryLabels as Record<string, string>)[c.value] || c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">{t.common.status}</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as WorklogStatus }))} className="form-input">
                {WORKLOG_STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{(t.statusLabels as Record<string, string>)[s.value] || s.label}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">{t.projects.title}</label>
              <select value={form.projectId} onChange={e => setForm(f => ({ ...f, projectId: e.target.value }))} className="form-input">
                <option value="">{t.dailyWorklog.noProject}</option>
                {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
          </div>

          {/* References */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="form-label mb-0">{t.dailyWorklog.references}</label>
              <button type="button" onClick={addReference} className="text-xs text-primary hover:underline flex items-center gap-1 font-medium">
                <Plus className="w-3.5 h-3.5" /> {t.dailyWorklog.addReference}
              </button>
            </div>
            {form.references.map((ref, i) => (
              <div key={i} className="p-3 rounded-lg border border-border bg-muted/30 mb-2">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{language === 'vi' ? `Tài liệu ${i + 1}` : `Reference ${i + 1}`}</span>
                  <button type="button" onClick={() => removeReference(i)} className="text-destructive hover:text-destructive/70">
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input value={ref.title} onChange={e => updateReference(i, 'title', e.target.value)} className="form-input text-sm" placeholder={`${t.dailyWorklog.refTitle} *`} />
                  <input value={ref.url} onChange={e => updateReference(i, 'url', e.target.value)} className="form-input text-sm" placeholder={`${t.dailyWorklog.refUrl} *`} />
                  <input value={ref.source} onChange={e => updateReference(i, 'source', e.target.value)} className="form-input text-sm" placeholder={t.dailyWorklog.refSource} />
                  <input type="date" value={ref.accessDate} onChange={e => updateReference(i, 'accessDate', e.target.value)} className="form-input text-sm" />
                </div>
                <input value={ref.description} onChange={e => updateReference(i, 'description', e.target.value)} className="form-input text-sm mt-2" placeholder={t.dailyWorklog.descPlaceholder} />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-2 border-t border-border">
            <button type="button" onClick={() => { resetForm(); setViewMode('table') }} className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors">{t.common.cancel}</button>
            <button type="submit" disabled={saving} className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors shadow-sm">
              {saving ? t.common.saving : editingId ? t.dailyWorklog.updateWorklog : t.dailyWorklog.saveWorklog}
            </button>
          </div>
        </form>
      )}

      {/* ── TABLE ──────────────────────────────────────────────────────── */}
      {viewMode === 'table' && (
        <>
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} className="form-input pl-9" placeholder={t.common.search} />
            </div>
            <select value={filterWeek} onChange={e => setFilterWeek(e.target.value)} className="form-input w-40">
              <option value="">{t.dailyWorklog.allWeeks}</option>
              {weeks.map(w => <option key={w.id} value={w.id}>{language === 'vi' ? `Tuần ${w.weekNumber}` : `Week ${w.weekNumber}`}</option>)}
            </select>
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="form-input w-40">
              <option value="">{t.dailyWorklog.allStatus}</option>
              {WORKLOG_STATUS_OPTIONS.map(s => <option key={s.value} value={s.value}>{(t.statusLabels as Record<string, string>)[s.value] || s.label}</option>)}
            </select>
            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="form-input w-44">
              <option value="">{t.dailyWorklog.allCategories}</option>
              {CATS.map(c => <option key={c.value} value={c.value}>{(t.categoryLabels as Record<string, string>)[c.value] || c.label}</option>)}
            </select>
          </div>

          {/* Table */}
          {worklogs.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon"><ClipboardList className="w-8 h-8 text-muted-foreground" /></div>
              <p className="text-lg font-semibold text-foreground">{t.dailyWorklog.emptyTitle}</p>
              <p className="text-sm text-muted-foreground mt-1">{t.dailyWorklog.emptyDesc}</p>
              <button onClick={() => setViewMode('form')} className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                {t.dailyWorklog.addFirstWorklog}
              </button>
            </div>
          ) : (
            <div className="section-card p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>{t.common.date}</th><th>{t.common.week}</th><th>{t.dailyWorklog.taskLabel}</th><th>{t.common.category}</th>
                      <th>{t.common.duration}</th><th>{t.common.status}</th><th>Refs</th><th>{t.common.actions}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {worklogs.map(log => (
                      <tr key={log.id}>
                        <td className="whitespace-nowrap text-xs">{formatDate(log.date, 'MMM dd, yyyy')}</td>
                        <td><span className="text-xs font-medium">W{log.week?.weekNumber}</span></td>
                        <td className="max-w-xs">
                          <p className="font-medium text-foreground truncate">{log.title}</p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">{log.result}</p>
                        </td>
                        <td>
                          <span className={cn('text-xs px-2 py-0.5 rounded-full border font-medium', CATEGORY_COLORS[log.category])}>
                            {(t.categoryLabels as Record<string, string>)[log.category] || log.category}
                          </span>
                        </td>
                        <td className="text-xs font-medium whitespace-nowrap">{formatDuration(log.duration)}</td>
                        <td>
                          <span className={cn('text-xs px-2 py-0.5 rounded-full border font-medium', STATUS_COLORS[log.status])}>
                            {(t.statusLabels as Record<string, string>)[log.status] || log.status}
                          </span>
                        </td>
                        <td className="text-xs">{log.references.length}</td>
                        <td>
                          <div className="flex items-center gap-1">
                            <button onClick={() => { setViewingLog(log); setViewMode('view') }} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors" title={t.common.view}><Eye className="w-3.5 h-3.5" /></button>
                            <button onClick={() => handleEdit(log)} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors" title={t.common.edit}><Edit2 className="w-3.5 h-3.5" /></button>
                            <button onClick={() => handleDelete(log.id)} className="p-1.5 rounded hover:bg-red-50 text-muted-foreground hover:text-red-600 transition-colors" title={t.common.delete}><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* ── VIEW ──────────────────────────────────────────────────────── */}
      {viewMode === 'view' && viewingLog && (
        <div className="section-card space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-foreground text-lg">{viewingLog.title}</h2>
              <p className="text-sm text-muted-foreground">
                {language === 'vi'
                  ? formatDate(viewingLog.date, 'EEEE, dd/MM/yyyy')
                  : formatDate(viewingLog.date, 'EEEE, MMMM dd, yyyy')} · {viewingLog.startTime} – {viewingLog.endTime} · {formatDuration(viewingLog.duration)}
              </p>
            </div>
            <button onClick={() => setViewMode('table')} className="text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-muted/50 rounded-lg"><p className="text-xs text-muted-foreground">{t.common.week}</p><p className="font-medium">{language === 'vi' ? `Tuần ${viewingLog.week?.weekNumber}` : `W${viewingLog.week?.weekNumber}`}</p></div>
            <div className="p-3 bg-muted/50 rounded-lg"><p className="text-xs text-muted-foreground">{t.common.category}</p><p className="font-medium capitalize">{(t.categoryLabels as Record<string, string>)[viewingLog.category] || viewingLog.category}</p></div>
            <div className="p-3 bg-muted/50 rounded-lg"><p className="text-xs text-muted-foreground">{t.common.status}</p><p className="font-medium capitalize">{(t.statusLabels as Record<string, string>)[viewingLog.status] || viewingLog.status}</p></div>
          </div>
          <div><p className="form-label">{t.dailyWorklog.descLabel}</p><p className="text-sm text-foreground">{viewingLog.description}</p></div>
          <div><p className="form-label">{t.dailyWorklog.resultLabel}</p><p className="text-sm text-emerald-700">✓ {viewingLog.result}</p></div>
          {viewingLog.references.length > 0 && (
            <div>
              <p className="form-label">{t.dailyWorklog.references}</p>
              <div className="space-y-2">
                {viewingLog.references.map(ref => (
                  <div key={ref.id} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <div className="flex-1"><p className="text-sm font-medium">{ref.title}</p><p className="text-xs text-muted-foreground">{ref.source}</p></div>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-2 pt-2">
            <button onClick={() => handleEdit(viewingLog)} className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-accent"><Edit2 className="w-3.5 h-3.5" /> {t.common.edit}</button>
            <button onClick={() => handleDelete(viewingLog.id)} className="flex items-center gap-1.5 px-3 py-1.5 border border-red-200 text-red-600 rounded-lg text-sm hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /> {t.common.delete}</button>
          </div>
        </div>
      )}
    </div>
  )
}
