import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Clock, MinusCircle, Camera, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';

// ── Status config ────────────────────────────────────────────
const statusConfig = {
  Completed:   { icon: CheckCircle, bg: 'bg-[#D8F3DC]', text: 'text-[#2D6A4F]' },
  'In Progress':{ icon: Clock,       bg: 'bg-[#FFF3D6]', text: 'text-[#92682C]' },
  Pending:     { icon: MinusCircle,  bg: 'bg-[#F0F0F0]', text: 'text-[#888]' },
}

// ── Helpers ──────────────────────────────────────────────────
const SectionHeading = ({ label, color }) => (
  <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
      style={{ color }}>
    <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
    {label}
  </h4>
)

const EmptyHint = ({ text, isDark }) => (
  <p className={`text-xs italic px-3 py-2 rounded-xl ${
    isDark ? 'bg-white/5 text-gray-600' : 'bg-[#F8F5FF] text-[#C5BDD8]'
  }`}>{text}</p>
)

// ── WorklogCard ───────────────────────────────────────────────
const WorklogCard = ({ week, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].worklog;

  const cfg = statusConfig[week.status] || statusConfig.Pending;
  const StatusIcon = cfg.icon;
  const statusLabel = week.status === 'Completed' ? t.statusCompleted
                    : week.status === 'In Progress' ? t.statusProgress
                    : t.statusPending;

  // Helper to render a list or an empty hint
  const List = ({ items, emptyHint }) =>
    items && items.length > 0 && items[0] !== ''
      ? <ul className="space-y-1.5">{items.map((item, i) => (
          <li key={i} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
            <span className="mt-0.5" style={{ color: week.accentColor }}>✦</span>{item}
          </li>
        ))}</ul>
      : <EmptyHint text={emptyHint} isDark={isDark} />

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md hover:shadow-lg'
      }`}
    >
      {/* ── Header (always visible, clickable) ── */}
      <div className="p-5 cursor-pointer select-none" onClick={() => setExpanded(e => !e)}>
        <div className="flex items-start justify-between gap-3">
          {/* Week number bubble + title */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-2xl flex flex-col items-center justify-center shadow-sm"
              style={{ background: `${week.accentColor}25`, border: `1.5px solid ${week.accentColor}50` }}
            >
              <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>W</span>
              <span className="text-lg font-extrabold leading-none" style={{ color: week.accentColor }}>
                {String(week.week).padStart(2, '0')}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              {/* Category tag */}
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ backgroundColor: week.accentColor + '25', color: week.accentColor }}
              >
                {week.category || '—'}
              </span>
              <h3 className={`font-bold text-sm mt-1 leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                {week.title || `${t.weekLabel} ${String(week.week).padStart(2, '0')}`}
              </h3>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-[#C5BDD8]'}`}>
                {week.dateRange || '—'}
              </p>
            </div>
          </div>

          {/* Status badge + chevron */}
          <div className="flex-shrink-0 flex flex-col items-end gap-2">
            <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
              <StatusIcon className="w-3 h-3" /> {statusLabel}
            </span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-[#C5BDD8]'}`} />
            </motion.div>
          </div>
        </div>

        {/* Objective preview */}
        <p className={`text-xs leading-relaxed mt-3 pl-[60px] line-clamp-2 ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {week.objective || `[${t.sectionObjective}]`}
        </p>
      </div>

      {/* ── Expanded body ── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`border-t px-5 py-5 space-y-5 ${isDark ? 'border-white/10' : 'border-[#E9D5FF]/30'}`}>

              {/* Objective */}
              <div>
                <SectionHeading label={t.sectionObjective} color={week.accentColor} />
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                  {week.objective || <EmptyHint text="[Chưa có nội dung]" isDark={isDark} />}
                </p>
              </div>

              {/* Tasks */}
              <div>
                <SectionHeading label={t.sectionTasks} color={week.accentColor} />
                <List items={week.tasks} emptyHint="[Chưa có nhiệm vụ — điền vào worklogData.js]" />
              </div>

              {/* AWS Services */}
              {(week.awsServices && week.awsServices.length > 0) && (
                <div>
                  <SectionHeading label={t.sectionServices} color={week.accentColor} />
                  <div className="flex flex-wrap gap-1.5">
                    {week.awsServices.map(s => (
                      <span key={s}
                        className={`text-xs px-2.5 py-1 rounded-xl font-medium flex items-center gap-1 ${
                          isDark ? 'bg-white/10 text-gray-300' : 'bg-[#F3E8FF] text-[#7C3AED]'
                        }`}
                      >
                        <Tag className="w-2.5 h-2.5" />{s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {(week.technologies && week.technologies.length > 0) && (
                <div>
                  <SectionHeading label={t.sectionTech} color={week.accentColor} />
                  <div className="flex flex-wrap gap-1.5">
                    {week.technologies.map(tech => (
                      <span key={tech}
                        className={`text-xs px-2.5 py-1 rounded-xl font-medium ${
                          isDark ? 'bg-white/10 text-gray-300' : 'bg-[#F0F9FF] text-[#0284C7]'
                        }`}
                      >{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              <div>
                <SectionHeading label={t.sectionResult} color={week.accentColor} />
                <List items={week.results} emptyHint="[Chưa có kết quả]" />
              </div>

              {/* Reflection */}
              <div>
                <SectionHeading label={t.sectionReflect} color={week.accentColor} />
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                  {week.reflection || <span className={isDark ? 'text-gray-600 italic' : 'text-[#C5BDD8] italic'}>[Chưa có cảm nhận]</span>}
                </p>
              </div>

              {/* Daily breakdown */}
              {week.dailyBreakdown && week.dailyBreakdown.length > 0 && (
                <div>
                  <SectionHeading label={t.sectionDaily} color={week.accentColor} />
                  <div className="space-y-2">
                    {week.dailyBreakdown.map(({ day, task }) => (
                      <div key={day}
                        className={`flex gap-3 rounded-2xl p-3 text-sm ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}
                      >
                        <span className="flex-shrink-0 font-bold text-xs w-10 pt-0.5" style={{ color: week.accentColor }}>
                          {day}
                        </span>
                        <span className={isDark ? 'text-gray-300' : 'text-[#7E7791]'}>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Screenshot */}
              <div>
                <SectionHeading label={t.screenshotLabel} color={week.accentColor} />
                {week.screenshot ? (
                  <img
                    src={week.screenshot}
                    alt={week.screenshotCaption || `Week ${week.week}`}
                    className="rounded-2xl w-full object-cover max-h-64"
                  />
                ) : (
                  <div className={`rounded-2xl h-36 flex flex-col items-center justify-center border-2 border-dashed ${
                    isDark ? 'border-white/20 bg-white/5' : 'border-[#CDB4DB]/40 bg-[#F8F5FF]'
                  }`}>
                    <Camera className="w-8 h-8 mb-2 opacity-30" style={{ color: week.accentColor }} />
                    <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}>
                      {week.screenshotCaption || `[Thêm ảnh vào /public/screenshots/week${String(week.week).padStart(2,'0')}.png]`}
                    </p>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default WorklogCard;
