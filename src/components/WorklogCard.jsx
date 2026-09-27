import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Clock, MinusCircle, Camera, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { getText } from '../utils/text';

// ── Status config ────────────────────────────────────────────
const statusConfig = {
  Completed:    { icon: CheckCircle, bg: 'bg-[#D8F3DC]', text: 'text-[#2D6A4F]' },
  'In Progress':{ icon: Clock,       bg: 'bg-[#FFF3D6]', text: 'text-[#92682C]' },
  Pending:      { icon: MinusCircle, bg: 'bg-[#F0F0F0]', text: 'text-[#888]' },
};

// ── Helpers ──────────────────────────────────────────────────
const SectionHeading = ({ label, color }) => (
  <h4
    className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
    style={{ color }}
  >
    <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
    {label}
  </h4>
);

// ── WorklogCard ───────────────────────────────────────────────
const WorklogCard = ({ week, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].worklog;

  const cfg = statusConfig[week.status] || statusConfig.Pending;
  const StatusIcon = cfg.icon;
  const statusLabel =
    week.status === 'Completed'
      ? t.statusCompleted
      : week.status === 'In Progress'
      ? t.statusProgress
      : t.statusPending;

  const weekTitle = getText(week.title, lang);
  const weekCategory = getText(week.category, lang);
  const weekObjective = getText(week.objective, lang);
  const weekReflection = getText(week.reflection, lang);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-[28px] border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-white shadow-md hover:shadow-xl'
      } backdrop-blur-sm`}
    >
      {/* ── Header (always visible, clickable) ── */}
      <div className="p-6 cursor-pointer select-none" onClick={() => setExpanded(e => !e)}>
        <div className="flex items-start justify-between gap-4">
          {/* Week number bubble + title */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div
              className="flex-shrink-0 w-13 h-13 rounded-2xl flex flex-col items-center justify-center shadow-sm p-2"
              style={{ background: `${week.accentColor}25`, border: `1.5px solid ${week.accentColor}50` }}
            >
              <span className={`text-[10px] font-semibold tracking-wider ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>WEEK</span>
              <span className="text-xl font-extrabold leading-none" style={{ color: week.accentColor }}>
                {String(week.week).padStart(2, '0')}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              {/* Category tag */}
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: week.accentColor + '25', color: week.accentColor }}
              >
                {weekCategory || 'AWS Cloud'}
              </span>
              <h3 className={`font-bold text-base mt-1.5 leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                {weekTitle || `${t.weekLabel} ${String(week.week).padStart(2, '0')}`}
              </h3>
              <p className={`text-xs mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-[#A098B5]'}`}>
                📅 {week.dateRange || 'FCAJ 2026'}
              </p>
            </div>
          </div>

          {/* Status badge + chevron */}
          <div className="flex-shrink-0 flex flex-col items-end gap-2.5">
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${cfg.bg} ${cfg.text}`}>
              <StatusIcon className="w-3.5 h-3.5" /> {statusLabel}
            </span>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`} />
            </motion.div>
          </div>
        </div>

        {/* Objective preview */}
        <p className={`text-xs sm:text-sm leading-relaxed mt-3.5 pl-[68px] line-clamp-2 ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {weekObjective}
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
            <div className={`border-t px-6 py-6 space-y-6 ${isDark ? 'border-white/10' : 'border-[#E9D5FF]/40'}`}>

              {/* Objective */}
              <div>
                <SectionHeading label={t.sectionObjective} color={week.accentColor} />
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                  {weekObjective}
                </p>
              </div>

              {/* Tasks */}
              {week.tasks && week.tasks.length > 0 && (
                <div>
                  <SectionHeading label={t.sectionTasks} color={week.accentColor} />
                  <ul className="space-y-2">
                    {week.tasks.map((task, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2.5 ${isDark ? 'text-gray-300' : 'text-[#6B6577]'}`}>
                        <span className="mt-0.5 text-xs font-bold" style={{ color: week.accentColor }}>✦</span>
                        <span>{getText(task, lang)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AWS Services */}
              {week.awsServices && week.awsServices.length > 0 && (
                <div>
                  <SectionHeading label={t.sectionServices} color={week.accentColor} />
                  <div className="flex flex-wrap gap-2">
                    {week.awsServices.map(s => (
                      <span
                        key={s}
                        className={`text-xs px-3 py-1 rounded-xl font-medium flex items-center gap-1.5 transition-colors ${
                          isDark ? 'bg-white/10 text-gray-200' : 'bg-[#F3E8FF] text-[#7C3AED]'
                        }`}
                      >
                        <Tag className="w-3 h-3" />{s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {week.technologies && week.technologies.length > 0 && (
                <div>
                  <SectionHeading label={t.sectionTech} color={week.accentColor} />
                  <div className="flex flex-wrap gap-2">
                    {week.technologies.map(tech => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-xl font-medium ${
                          isDark ? 'bg-white/10 text-gray-200' : 'bg-[#F0F9FF] text-[#0284C7]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {week.results && week.results.length > 0 && (
                <div>
                  <SectionHeading label={t.sectionResult} color={week.accentColor} />
                  <ul className="space-y-2">
                    {week.results.map((res, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2.5 p-3 rounded-2xl ${isDark ? 'bg-white/5 text-gray-300' : 'bg-[#F8F5FF] text-[#5B5566]'}`}>
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: week.accentColor }} />
                        <span>{getText(res, lang)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reflection */}
              {weekReflection && (
                <div>
                  <SectionHeading label={t.sectionReflect} color={week.accentColor} />
                  <blockquote className={`text-sm italic leading-relaxed p-4 rounded-2xl border-l-4 ${
                    isDark ? 'bg-white/5 border-[#CDB4DB] text-gray-300' : 'bg-[#FDFBFE] border-[#CDB4DB] text-[#5B5566]'
                  }`}>
                    “{weekReflection}”
                  </blockquote>
                </div>
              )}

              {/* Daily breakdown */}
              {week.dailyBreakdown && week.dailyBreakdown.length > 0 && (
                <div>
                  <SectionHeading label={t.sectionDaily} color={week.accentColor} />
                  <div className="space-y-2">
                    {week.dailyBreakdown.map(({ day, task }) => (
                      <div
                        key={day}
                        className={`flex items-start gap-3 rounded-2xl p-3 text-sm transition-colors ${
                          isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'
                        }`}
                      >
                        <span
                          className="flex-shrink-0 font-bold text-xs w-10 px-2 py-1 rounded-lg text-center"
                          style={{ backgroundColor: week.accentColor + '30', color: week.accentColor }}
                        >
                          {day}
                        </span>
                        <span className={isDark ? 'text-gray-300' : 'text-[#6B6577]'}>
                          {getText(task, lang)}
                        </span>
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
                    alt={`Week ${week.week}`}
                    className="rounded-2xl w-full object-cover max-h-64 shadow-md"
                  />
                ) : (
                  <div className={`rounded-2xl h-36 flex flex-col items-center justify-center border-2 border-dashed ${
                    isDark ? 'border-white/15 bg-white/5' : 'border-[#CDB4DB]/40 bg-[#FBF9FD]'
                  }`}>
                    <Camera className="w-8 h-8 mb-2 opacity-35" style={{ color: week.accentColor }} />
                    <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
                      {getText(week.screenshotCaption, lang) || `AWS Console Verification · Week ${String(week.week).padStart(2, '0')}`}
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
