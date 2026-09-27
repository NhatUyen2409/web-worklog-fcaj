import { useState, useEffect, useRef } from 'react'
import { Printer } from 'lucide-react'
import { weekApi } from '@/services/api'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'
import type { Week } from '@/types'
import { formatDate } from '@/utils/date.utils'

type Language = 'EN' | 'VI' | 'BOTH'

export default function FinalReport() {
  const { profile } = useAppStore()
  const { t, language } = useTranslation()
  const [weeks, setWeeks] = useState<Week[]>([])
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useState<Language>('BOTH')
  
  const reportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    weekApi.getAll()
      .then(data => {
        setWeeks(data.filter(w => w.status === 'COMPLETED' || w.status === 'IN_PROGRESS'))
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (loading) return <div className="space-y-4 animate-pulse"><div className="h-40 bg-muted rounded-xl" /><div className="h-96 bg-muted rounded-xl" /></div>

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between print:hidden">
        <div className="page-header mb-0">
          <h1 className="page-title">{t.report.title}</h1>
          <p className="page-subtitle">{t.report.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-muted/50 p-1 rounded-lg border border-border">
            <button onClick={() => setLang('EN')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${lang === 'EN' ? 'bg-white shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>EN</button>
            <button onClick={() => setLang('VI')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${lang === 'VI' ? 'bg-white shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>VI</button>
            <button onClick={() => setLang('BOTH')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${lang === 'BOTH' ? 'bg-white shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{t.report.bilingual}</button>
          </div>
          <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
            <Printer className="w-4 h-4" /> {t.report.printPdf}
          </button>
        </div>
      </div>

      {/* Report Preview */}
      <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden print:shadow-none print:border-none print:bg-transparent">
        <div ref={reportRef} className="p-8 sm:p-12 max-w-4xl mx-auto print:p-0">
          
          {/* Cover Page Area */}
          <div className="text-center pb-12 border-b-2 border-border mb-12">
            <h1 className="text-3xl font-bold text-foreground uppercase tracking-wider mb-2">
              Internship Worklog Report
            </h1>
            <h2 className="text-xl text-muted-foreground mb-12">
              Báo Cáo Nhật Ký Thực Tập
            </h2>
            
            <div className="grid grid-cols-2 gap-y-6 text-left max-w-2xl mx-auto bg-muted/20 p-6 rounded-xl border border-border/50">
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Student Name / Sinh viên</p>
                <p className="text-base font-medium text-foreground">{profile?.fullName || '---'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Student ID / MSSV</p>
                <p className="text-base font-medium text-foreground">{profile?.studentId || '---'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">University / Trường</p>
                <p className="text-base font-medium text-foreground">{profile?.university || '---'}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Major / Chuyên ngành</p>
                <p className="text-base font-medium text-foreground">{profile?.major || '---'}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground uppercase font-semibold">Company / Công ty thực tập</p>
                <p className="text-base font-medium text-foreground">{profile?.company || '---'}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-muted-foreground uppercase font-semibold">Position / Vị trí</p>
                <p className="text-base font-medium text-foreground">{profile?.position || '---'}</p>
              </div>
              <div className="col-span-2 flex gap-8">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Start Date</p>
                  <p className="text-base font-medium text-foreground">{profile?.internshipStartDate ? formatDate(profile.internshipStartDate) : '---'}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">End Date</p>
                  <p className="text-base font-medium text-foreground">{profile?.internshipEndDate ? formatDate(profile.internshipEndDate) : '---'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Summaries */}
          <div className="space-y-12">
            <h3 className="text-xl font-bold text-foreground border-l-4 border-primary pl-4">Weekly Summaries / Tổng Kết Hàng Tuần</h3>
            
            {weeks.length === 0 ? (
              <p className="text-center text-muted-foreground italic py-8">No completed weeks to report yet.</p>
            ) : (
              weeks.map((week) => (
                <div key={week.id} className="break-inside-avoid">
                  <div className="flex items-end justify-between border-b border-border/50 pb-2 mb-4">
                    <h4 className="text-lg font-bold text-foreground">Week {week.weekNumber}</h4>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(week.startDate, 'MMM dd')} – {formatDate(week.endDate, 'MMM dd, yyyy')} ({week.totalHours} hrs)
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {(lang === 'EN' || lang === 'BOTH') && (
                      <div className="text-sm text-foreground leading-relaxed text-justify">
                        <span className="font-semibold block mb-1 text-primary">English:</span>
                        {week.summaryEnglish || <span className="italic text-muted-foreground">No English summary provided for this week.</span>}
                      </div>
                    )}
                    
                    {(lang === 'VI' || lang === 'BOTH') && (
                      <div className="text-sm text-foreground leading-relaxed text-justify">
                        <span className="font-semibold block mb-1 text-secondary">Vietnamese:</span>
                        {week.summaryVietnamese || <span className="italic text-muted-foreground">Chưa có tổng kết tiếng Việt cho tuần này.</span>}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Signatures */}
          <div className="mt-24 pt-12 flex justify-between px-12 break-inside-avoid">
            <div className="text-center">
              <p className="font-bold text-foreground mb-16">Intern / Sinh viên thực tập</p>
              <p className="text-sm font-medium">{profile?.fullName || '...........................................'}</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground mb-16">Mentor / Supervisor</p>
              <p className="text-sm font-medium">...........................................</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 20mm; size: A4 portrait; }
          body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .sidebar, header, .print\\:hidden { display: none !important; }
          .main-content { margin: 0 !important; padding: 0 !important; width: 100% !important; overflow: visible !important; }
          .page-content { padding: 0 !important; overflow: visible !important; }
        }
      `}</style>
    </div>
  )
}
