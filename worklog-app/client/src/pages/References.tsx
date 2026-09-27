import { useState, useEffect } from 'react'
import { Plus, Search, ExternalLink, Edit2, Trash2, BookMarked, X } from 'lucide-react'
import { toast } from 'sonner'
import { referenceApi } from '@/services/api'
import { useTranslation } from '@/i18n/useTranslation'
import { formatDate, todayString } from '@/utils/date.utils'
import type { Reference } from '@/types'
import { REFERENCE_CATEGORIES as CATS } from '@/types'

type ViewMode = 'list' | 'form'

export default function References() {
  const { t, language } = useTranslation()
  const [references, setReferences] = useState<Reference[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const [search, setSearch] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

  const [form, setForm] = useState({
    title: '', url: '', source: '', category: 'General', description: '', accessDate: todayString(),
  })
  const [saving, setSaving] = useState(false)

  const load = async () => {
    try {
      const data = await referenceApi.getAll({ search: search || undefined, category: filterCategory || undefined })
      setReferences(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [search, filterCategory])

  const resetForm = () => {
    setForm({ title: '', url: '', source: '', category: 'General', description: '', accessDate: todayString() })
    setEditingId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title || !form.url) return toast.error(language === 'vi' ? 'Tiêu đề và đường link là bắt buộc' : 'Title and URL are required')
    
    setSaving(true)
    try {
      if (editingId) {
        await referenceApi.update(editingId, form)
        toast.success(language === 'vi' ? 'Đã cập nhật tài liệu ✓' : 'Reference updated')
      } else {
        await referenceApi.create(form)
        toast.success(language === 'vi' ? 'Đã thêm tài liệu mới ✓' : 'Reference added')
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

  const handleEdit = (ref: Reference) => {
    setForm({
      title: ref.title, url: ref.url, source: ref.source,
      category: ref.category, description: ref.description, accessDate: ref.accessDate,
    })
    setEditingId(ref.id)
    setViewMode('form')
  }

  const handleDelete = async (id: string) => {
    if (!confirm(t.references.confirmDelete)) return
    try {
      await referenceApi.delete(id)
      toast.success(language === 'vi' ? 'Đã xóa tài liệu' : 'Reference deleted')
      load()
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  if (loading) return <div className="space-y-4 animate-pulse">{Array.from({length:5}).map((_,i) => <div key={i} className="h-20 bg-muted rounded-xl" />)}</div>

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="page-header mb-0">
          <h1 className="page-title">{t.references.title}</h1>
          <p className="page-subtitle">{t.references.subtitle} ({references.length} {language === 'vi' ? 'mục' : 'items'})</p>
        </div>
        {viewMode === 'list' ? (
          <button onClick={() => { resetForm(); setViewMode('form') }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
            <Plus className="w-4 h-4" /> {t.references.newReference}
          </button>
        ) : (
          <button onClick={() => { resetForm(); setViewMode('list') }} className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent">
            <X className="w-4 h-4" /> {t.common.cancel}
          </button>
        )}
      </div>

      {viewMode === 'form' && (
        <form onSubmit={handleSubmit} className="section-card space-y-4">
          <h2 className="font-semibold">{editingId ? t.references.editReference : t.references.newReference}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">{t.references.refTitle} *</label>
              <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="form-input" required />
            </div>
            <div>
              <label className="form-label">{t.references.url} *</label>
              <input type="url" value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="form-input" required />
            </div>
            <div>
              <label className="form-label">{t.references.source}</label>
              <input value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} className="form-input" placeholder="e.g. AWS Documentation" />
            </div>
            <div>
              <label className="form-label">{t.references.category}</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} className="form-input">
                {CATS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="form-label">{t.references.accessDate}</label>
              <input type="date" value={form.accessDate} onChange={e => setForm(f => ({ ...f, accessDate: e.target.value }))} className="form-input" />
            </div>
            <div className="md:col-span-2">
              <label className="form-label">{t.references.notes}</label>
              <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={2} className="form-input resize-none" />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={saving} className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50">
              {saving ? t.common.saving : t.references.saveReference}
            </button>
          </div>
        </form>
      )}

      {viewMode === 'list' && (
        <>
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={search} onChange={e => setSearch(e.target.value)} className="form-input pl-9" placeholder={t.common.search} />
            </div>
            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="form-input w-48">
              <option value="">{t.dailyWorklog.allCategories}</option>
              {CATS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          {references.length === 0 ? (
            <div className="empty-state section-card">
              <div className="empty-state-icon"><BookMarked className="w-8 h-8 text-muted-foreground" /></div>
              <p className="text-lg font-semibold text-foreground">{t.references.emptyTitle}</p>
              <p className="text-sm text-muted-foreground mt-1">{t.references.emptyDesc}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {references.map(ref => (
                <div key={ref.id} className="section-card hover:-translate-y-0.5 transition-transform flex flex-col group p-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{ref.category}</span>
                        {ref.week && <span className="text-xs text-primary font-medium">W{ref.week.weekNumber}</span>}
                      </div>
                      <h3 className="font-semibold text-foreground truncate">{ref.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{ref.source} · {formatDate(ref.accessDate, 'MMM dd, yyyy')}</p>
                    </div>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  {ref.description && <p className="text-sm text-foreground/80 mt-3 line-clamp-2">{ref.description}</p>}
                  
                  <div className="mt-auto pt-4 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEdit(ref)} className="p-1.5 text-muted-foreground hover:text-foreground rounded hover:bg-accent"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(ref.id)} className="p-1.5 text-muted-foreground hover:text-destructive rounded hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
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
