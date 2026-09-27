import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Clock, MinusCircle, Camera, Tag, Plus, Trash2, Edit3, Image } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
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
  const [newTaskInput, setNewTaskInput] = useState('');
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { isEditMode, updateWeek, addWeekTask, deleteWeekTask } = useData();
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

  const handleFieldChange = (field, value) => {
    // If field is an object with lang keys
    if (typeof week[field] === 'object' && week[field] !== null && !Array.isArray(week[field])) {
      updateWeek(week.week, {
        [field]: {
          ...week[field],
          [lang]: value,
        },
      });
    } else {
      updateWeek(week.week, { [field]: value });
    }
  };

  const handleAddTask = (e) => {
    e?.preventDefault();
    if (!newTaskInput.trim()) return;
    addWeekTask(week.week, newTaskInput.trim());
    setNewTaskInput('');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`rounded-[28px] border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-white shadow-md hover:shadow-xl'
      } backdrop-blur-sm ${isEditMode ? 'ring-2 ring-purple-300/40' : ''}`}
    >
      {/* ── Header (always visible) ── */}
      <div
        className="p-6 cursor-pointer select-none"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="flex items-start justify-between gap-4">
          {/* Week number bubble + title */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div
              className="flex-shrink-0 w-13 h-13 rounded-2xl flex flex-col items-center justify-center shadow-sm p-2"
              style={{ background: `${week.accentColor || '#CDB4DB'}25`, border: `1.5px solid ${week.accentColor || '#CDB4DB'}50` }}
            >
              <span className={`text-[10px] font-semibold tracking-wider ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>WEEK</span>
              <span className="text-xl font-extrabold leading-none" style={{ color: week.accentColor || '#7C3AED' }}>
                {String(week.week).padStart(2, '0')}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              {/* Category tag */}
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                  style={{ backgroundColor: (week.accentColor || '#CDB4DB') + '25', color: week.accentColor || '#7C3AED' }}
                >
                  {weekCategory || 'AWS Cloud'}
                </span>
                {isEditMode && (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 flex items-center gap-1">
                    <Edit3 className="w-2.5 h-2.5" /> Chỉnh sửa / Edit
                  </span>
                )}
              </div>

              {/* Title Input or View */}
              {isEditMode ? (
                <div onClick={(e) => e.stopPropagation()} className="mt-1">
                  <input
                    type="text"
                    value={weekTitle}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                    placeholder="Tiêu đề tuần / Week Title"
                    className={`w-full text-base font-bold px-3 py-1.5 rounded-xl border ${
                      isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                    } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                  />
                </div>
              ) : (
                <h3 className={`font-bold text-base mt-1.5 leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                  {weekTitle || `${t.weekLabel} ${String(week.week).padStart(2, '0')}`}
                </h3>
              )}

              <p className={`text-xs mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-[#A098B5]'}`}>
                📅 {week.dateRange || 'FCAJ 2026'}
              </p>
            </div>
          </div>

          {/* Status badge & dropdown + chevron */}
          <div className="flex-shrink-0 flex flex-col items-end gap-2.5">
            {isEditMode ? (
              <div onClick={(e) => e.stopPropagation()}>
                <select
                  value={week.status || 'Pending'}
                  onChange={(e) => updateWeek(week.week, { status: e.target.value })}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl border shadow-sm ${
                    isDark ? 'bg-gray-800 border-white/20 text-white' : 'bg-white border-purple-200 text-[#5B5566]'
                  } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                >
                  <option value="Completed">✓ {t.statusCompleted}</option>
                  <option value="In Progress">⏳ {t.statusProgress}</option>
                  <option value="Pending">○ {t.statusPending}</option>
                </select>
              </div>
            ) : (
              <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${cfg.bg} ${cfg.text}`}>
                <StatusIcon className="w-3.5 h-3.5" /> {statusLabel}
              </span>
            )}

            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`} />
            </motion.div>
          </div>
        </div>

        {/* Objective preview */}
        {!isEditMode && (
          <p className={`text-xs sm:text-sm leading-relaxed mt-3.5 pl-[68px] line-clamp-2 ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
            {weekObjective}
          </p>
        )}
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

              {/* 1. Objective */}
              <div>
                <SectionHeading label={t.sectionObjective} color={week.accentColor || '#7C3AED'} />
                {isEditMode ? (
                  <textarea
                    rows={2}
                    value={weekObjective}
                    onChange={(e) => handleFieldChange('objective', e.target.value)}
                    placeholder="Mục tiêu của tuần / Weekly Objective"
                    className={`w-full text-sm p-3 rounded-2xl border ${
                      isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                    } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                  />
                ) : (
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                    {weekObjective}
                  </p>
                )}
              </div>

              {/* 2. Tasks (Dynamic Add / Delete) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <SectionHeading label={t.sectionTasks} color={week.accentColor || '#7C3AED'} />
                  {isEditMode && (
                    <span className="text-[11px] text-purple-600 dark:text-purple-300 font-semibold">
                      {week.tasks?.length || 0} nhiệm vụ
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {week.tasks && week.tasks.map((task, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-center justify-between gap-3 p-2.5 rounded-2xl transition-colors ${
                        isDark ? 'bg-white/5 text-gray-300' : 'bg-[#F9F7FC] text-[#6B6577]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <span className="mt-0.5 text-xs font-bold flex-shrink-0" style={{ color: week.accentColor || '#7C3AED' }}>✦</span>
                        <span className="break-words">{getText(task, lang)}</span>
                      </div>

                      {isEditMode && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteWeekTask(week.week, i);
                          }}
                          className="flex-shrink-0 p-1.5 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors"
                          title="Xóa nhiệm vụ / Delete Task"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Add new task input in edit mode */}
                {isEditMode && (
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      type="text"
                      value={newTaskInput}
                      onChange={(e) => setNewTaskInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTask();
                        }
                      }}
                      placeholder="Nhập nhiệm vụ mới... / Enter new task..."
                      className={`flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-2xl border ${
                        isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                      } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                    />
                    <button
                      type="button"
                      onClick={handleAddTask}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#CDB4DB] hover:bg-[#b89bc7] text-white shadow-sm transition-all"
                    >
                      <Plus className="w-4 h-4" /> Thêm / Add
                    </button>
                  </div>
                )}
              </div>

              {/* 3. AWS Services */}
              <div>
                <SectionHeading label={t.sectionServices} color={week.accentColor || '#7C3AED'} />
                {isEditMode ? (
                  <div className="space-y-1">
                    <input
                      type="text"
                      value={(week.awsServices || []).join(', ')}
                      onChange={(e) => {
                        const arr = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                        updateWeek(week.week, { awsServices: arr });
                      }}
                      placeholder="Dịch vụ AWS (ngăn cách bởi dấu phẩy, vd: VPC, IAM, EC2)"
                      className={`w-full text-xs sm:text-sm p-3 rounded-2xl border ${
                        isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                      } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                    />
                    <span className="text-[11px] text-gray-400">Các dịch vụ phân cách bằng dấu phẩy</span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {week.awsServices && week.awsServices.map(s => (
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
                )}
              </div>

              {/* 4. Technologies */}
              <div>
                <SectionHeading label={t.sectionTech} color={week.accentColor || '#7C3AED'} />
                {isEditMode ? (
                  <div className="space-y-1">
                    <input
                      type="text"
                      value={(week.technologies || []).join(', ')}
                      onChange={(e) => {
                        const arr = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                        updateWeek(week.week, { technologies: arr });
                      }}
                      placeholder="Công nghệ & Công cụ (ngăn cách bởi dấu phẩy, vd: Terraform, Wireshark, Docker)"
                      className={`w-full text-xs sm:text-sm p-3 rounded-2xl border ${
                        isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                      } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                    />
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {week.technologies && week.technologies.map(tech => (
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
                )}
              </div>

              {/* 5. Results */}
              <div>
                <SectionHeading label={t.sectionResult} color={week.accentColor || '#7C3AED'} />
                {isEditMode ? (
                  <textarea
                    rows={2}
                    value={Array.isArray(week.results) ? week.results.map(r => getText(r, lang)).join('\n') : ''}
                    onChange={(e) => {
                      const arr = e.target.value.split('\n').filter(Boolean);
                      updateWeek(week.week, { results: arr });
                    }}
                    placeholder="Mỗi dòng là một kết quả đạt được..."
                    className={`w-full text-xs sm:text-sm p-3 rounded-2xl border ${
                      isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                    } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                  />
                ) : (
                  <ul className="space-y-2">
                    {week.results && week.results.map((res, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2.5 p-3 rounded-2xl ${isDark ? 'bg-white/5 text-gray-300' : 'bg-[#F8F5FF] text-[#5B5566]'}`}>
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: week.accentColor || '#7C3AED' }} />
                        <span>{getText(res, lang)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* 6. Reflection */}
              <div>
                <SectionHeading label={t.sectionReflect} color={week.accentColor || '#7C3AED'} />
                {isEditMode ? (
                  <textarea
                    rows={3}
                    value={weekReflection}
                    onChange={(e) => handleFieldChange('reflection', e.target.value)}
                    placeholder="Bài học & Cảm nhận / Retrospective & Reflection"
                    className={`w-full text-xs sm:text-sm p-3 rounded-2xl border ${
                      isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                    } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                  />
                ) : (
                  weekReflection && (
                    <blockquote className={`text-sm italic leading-relaxed p-4 rounded-2xl border-l-4 ${
                      isDark ? 'bg-white/5 border-[#CDB4DB] text-gray-300' : 'bg-[#FDFBFE] border-[#CDB4DB] text-[#5B5566]'
                    }`}>
                      “{weekReflection}”
                    </blockquote>
                  )
                )}
              </div>

              {/* 7. Screenshot */}
              <div>
                <SectionHeading label={t.screenshotLabel} color={week.accentColor || '#7C3AED'} />
                {isEditMode ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Image className="w-4 h-4 text-purple-400" />
                      <input
                        type="text"
                        value={week.screenshot || ''}
                        onChange={(e) => updateWeek(week.week, { screenshot: e.target.value })}
                        placeholder="Đường dẫn URL ảnh minh họa (Screenshot URL)"
                        className={`flex-1 text-xs sm:text-sm p-2.5 rounded-2xl border ${
                          isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                        } focus:outline-none focus:ring-2 focus:ring-[#CDB4DB]`}
                      />
                    </div>
                  </div>
                ) : (
                  week.screenshot ? (
                    <img
                      src={week.screenshot}
                      alt={`Week ${week.week}`}
                      className="rounded-2xl w-full object-cover max-h-64 shadow-md"
                    />
                  ) : (
                    <div className={`rounded-2xl h-36 flex flex-col items-center justify-center border-2 border-dashed ${
                      isDark ? 'border-white/15 bg-white/5' : 'border-[#CDB4DB]/40 bg-[#FBF9FD]'
                    }`}>
                      <Camera className="w-8 h-8 mb-2 opacity-35" style={{ color: week.accentColor || '#7C3AED' }} />
                      <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
                        {getText(week.screenshotCaption, lang) || `AWS Console Verification · Week ${String(week.week).padStart(2, '0')}`}
                      </p>
                    </div>
                  )
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
