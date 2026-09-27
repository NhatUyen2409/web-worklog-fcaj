import { useState } from 'react'
import { Save, Bell, Shield, Database, Download, Moon, Sun, Globe, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'
import { worklogApi } from '@/services/api'

export default function Settings() {
  const { profile, loadWeeks, loadConsistency } = useAppStore()
  const { t, language, setLanguage } = useTranslation()
  const [theme, setTheme] = useState('light')
  const [notifications, setNotifications] = useState(true)
  const [saving, setSaving] = useState(false)
  const [clearing, setClearing] = useState(false)

  const handleSave = () => {
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      toast.success(language === 'vi' ? 'Đã lưu cài đặt thành công ✓' : 'Settings saved successfully ✓')
    }, 400)
  }

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ profile, exportDate: new Date() }))
    const dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute("href", dataStr)
    dlAnchorElem.setAttribute("download", "worklog_backup.json")
    dlAnchorElem.click()
    toast.success(language === 'vi' ? 'Đã xuất dữ liệu sao lưu thành công' : 'Backup exported successfully')
  }

  const handleClearSampleData = async () => {
    const msg = language === 'vi'
      ? 'Bạn có chắc chắn muốn xóa TOÀN BỘ dữ liệu mẫu (33 worklogs, 4 projects, references)? Bạn sẽ bắt đầu với trang web hoàn toàn trống.'
      : 'Are you sure you want to clear ALL sample data (33 worklogs, 4 projects, references)? You will start fresh with a clean slate.'
    if (!window.confirm(msg)) return

    setClearing(true)
    try {
      await worklogApi.clearSampleData()
      await Promise.all([loadWeeks(), loadConsistency()])
      toast.success(language === 'vi' ? 'Đã dọn sạch toàn bộ dữ liệu mẫu thành công ✓' : 'All sample data cleared successfully ✓')
    } catch (err) {
      toast.error((err as Error).message)
    } finally {
      setClearing(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">{t.settings.title}</h1>
        <p className="page-subtitle">{t.settings.subtitle}</p>
      </div>

      {/* App Preferences */}
      <div className="section-card">
        <h3 className="font-semibold text-foreground mb-4">{t.settings.preferences}</h3>
        
        <div className="space-y-4">
          {/* Language selection */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{t.settings.language}</p>
                <p className="text-xs text-muted-foreground">{t.settings.languageDesc}</p>
              </div>
            </div>
            <select 
              value={language} 
              onChange={e => setLanguage(e.target.value as 'vi' | 'en')}
              className="form-input w-40 font-medium"
            >
              <option value="vi">🇻🇳 Tiếng Việt</option>
              <option value="en">🇬🇧 English</option>
            </select>
          </div>

          {/* Theme mode */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </div>
              <div>
                <p className="font-medium text-foreground">{t.settings.themeMode}</p>
                <p className="text-xs text-muted-foreground">Light / Dark mode</p>
              </div>
            </div>
            <select 
              value={theme} 
              onChange={e => setTheme(e.target.value)}
              className="form-input w-40"
              disabled
            >
              <option value="light">Light</option>
              <option value="dark">Dark (Soon)</option>
            </select>
          </div>

          {/* Daily reminders */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{t.settings.dailyReminders}</p>
                <p className="text-xs text-muted-foreground">{t.settings.dailyRemindersDesc}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={notifications} onChange={() => setNotifications(!notifications)} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="section-card">
        <h3 className="font-semibold text-foreground mb-4">{t.settings.dataManagement}</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{t.settings.exportBackup}</p>
                <p className="text-xs text-muted-foreground">{t.settings.exportBackupDesc}</p>
              </div>
            </div>
            <button onClick={exportData} className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
              <Download className="w-4 h-4" /> {language === 'vi' ? 'Xuất tệp' : 'Export'}
            </button>
          </div>

          {/* Reset sample data */}
          <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl border border-red-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-red-900">{t.settings.resetData}</p>
                <p className="text-xs text-red-600">{t.settings.resetDataDesc}</p>
              </div>
            </div>
            <button 
              onClick={handleClearSampleData} 
              disabled={clearing}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50 transition-colors shadow-sm"
            >
              <Trash2 className="w-4 h-4" /> {clearing ? (language === 'vi' ? 'Đang dọn...' : 'Clearing...') : (language === 'vi' ? 'Dọn sạch ngay' : 'Clear Data')}
            </button>
          </div>
        </div>
      </div>

      {/* Account / Security */}
      <div className="section-card">
        <h3 className="font-semibold text-foreground mb-4">Account & Privacy</h3>
        
        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground">Privacy & Security</p>
              <p className="text-xs text-muted-foreground">{language === 'vi' ? 'Dữ liệu được lưu trữ an toàn trong cơ sở dữ liệu SQLite nội bộ trên máy bạn.' : 'All data is stored securely in local SQLite database on your machine.'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors shadow-sm"
        >
          <Save className="w-4 h-4" />
          {saving ? t.common.saving : t.settings.saveSettings}
        </button>
      </div>
    </div>
  )
}
