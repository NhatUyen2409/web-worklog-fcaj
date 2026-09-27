import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Building2, Tag, ChevronDown,
  Target, BookOpen, Server, Image as ImageIcon, FileText,
  Link as LinkIcon, CheckCircle, Camera, ShieldCheck, Plus, Trash2
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { useData } from '../contexts/DataContext';
import { translations } from '../data/translations';
import { getText } from '../utils/text';

const SectionTitle = ({ icon: Icon, title, color = '#CDB4DB', isDark }) => (
  <div className="flex items-center gap-3.5 mb-6">
    <div
      className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
      style={{ backgroundColor: color + '25', border: `1.5px solid ${color}50` }}
    >
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div className="h-6 w-1 rounded-full" style={{ backgroundColor: color }} />
    <h2 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{title}</h2>
  </div>
);

const Workshop = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { settings } = useSettings();
  const { data, isEditMode, updateWorkshop, updateWorkshopLab } = useData();
  const t = translations[lang].workshop;
  const w = data.workshop;

  const [expandedLab, setExpandedLab] = useState(null);

  const title = getText(w.title, lang);
  const subtitle = getText(w.subtitle, lang);
  const overview = getText(w.overview, lang);
  const archCaption = getText(w.architectureCaption, lang);

  const metaRows = [
    { icon: Calendar,  label: t.dateLabel,      value: w.date, key: 'date' },
    { icon: Clock,     label: t.durationLabel,   value: getText(w.duration, lang), key: 'duration' },
    { icon: MapPin,    label: t.locationLabel,   value: getText(w.location, lang), key: 'location' },
    { icon: Building2, label: t.organizerLabel,  value: w.organizer, key: 'organizer' },
  ];

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border shadow-sm"
          style={{
            background: isDark ? 'rgba(205, 180, 219, 0.15)' : '#F3E8FF',
            borderColor: `${settings.primaryColor}60`,
            color: isDark ? '#E9D5FF' : '#7C3AED',
          }}
        >
          ☁️ AWS First Cloud AI Journey 2026
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto font-normal ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* ── Workshop Title & Meta Banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`rounded-[28px] p-8 border mb-10 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <ShieldCheck className="w-6 h-6 text-[#7C3AED] dark:text-[#CDB4DB]" />
          {isEditMode ? (
            <input
              type="text"
              value={title}
              onChange={e => {
                const val = e.target.value;
                updateWorkshop({
                  title: typeof w.title === 'object' ? { ...w.title, [lang]: val } : val,
                });
              }}
              className="text-2xl font-extrabold w-full bg-transparent border-b border-[#7C3AED] outline-none"
            />
          ) : (
            <h2 className={`text-2xl font-extrabold leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {title}
            </h2>
          )}
        </div>

        {isEditMode ? (
          <input
            type="text"
            value={subtitle}
            onChange={e => {
              const val = e.target.value;
              updateWorkshop({
                subtitle: typeof w.subtitle === 'object' ? { ...w.subtitle, [lang]: val } : val,
              });
            }}
            className="text-sm font-semibold w-full text-[#7C3AED] dark:text-[#CDB4DB] bg-transparent border-b border-gray-400 outline-none mb-6"
          />
        ) : (
          <p className="text-sm font-semibold text-[#7C3AED] dark:text-[#CDB4DB] mb-6">
            {subtitle}
          </p>
        )}

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {metaRows.map(({ icon: Icon, label, value, key }) => (
            <div
              key={label}
              className={`rounded-2xl p-4 flex flex-col gap-1.5 transition-colors ${
                isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-[#CDB4DB]" />
                <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{label}</span>
              </div>
              {isEditMode ? (
                <input
                  type="text"
                  value={value}
                  onChange={e => {
                    const val = e.target.value;
                    if (typeof w[key] === 'object') {
                      updateWorkshop({ [key]: { ...w[key], [lang]: val } });
                    } else {
                      updateWorkshop({ [key]: val });
                    }
                  }}
                  className="text-xs font-bold bg-transparent border-b border-gray-400 outline-none"
                />
              ) : (
                <span className={`text-xs font-bold leading-tight ${isDark ? 'text-gray-100' : 'text-[#5B5566]'}`}>
                  {value}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Overview ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-[28px] p-8 border mb-8 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <SectionTitle icon={BookOpen} title={t.overviewTitle} color={settings.primaryColor} isDark={isDark} />
        {isEditMode ? (
          <textarea
            rows={5}
            value={overview}
            onChange={e => {
              const val = e.target.value;
              updateWorkshop({
                overview: typeof w.overview === 'object' ? { ...w.overview, [lang]: val } : val,
              });
            }}
            className={`w-full p-4 rounded-2xl text-sm border outline-none ${
              isDark ? 'bg-white/5 border-white/20 text-white' : 'bg-white border-[#CDB4DB] text-[#5B5566]'
            }`}
          />
        ) : (
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
            {overview}
          </p>
        )}
      </motion.section>

      {/* ── Objectives + AWS Services ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Objectives */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-[28px] p-8 border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
          } backdrop-blur-md`}
        >
          <SectionTitle icon={Target} title={t.objectivesTitle} color={settings.secondaryColor} isDark={isDark} />
          <ul className="space-y-3">
            {w.objectives.map((obj, i) => (
              <li key={i} className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: `${settings.secondaryColor}40`, color: '#0284C7' }}
                >
                  {i + 1}
                </span>
                {isEditMode ? (
                  <input
                    type="text"
                    value={getText(obj, lang)}
                    onChange={e => {
                      const newObj = [...w.objectives];
                      const val = e.target.value;
                      newObj[i] = typeof obj === 'object' ? { ...obj, [lang]: val } : val;
                      updateWorkshop({ objectives: newObj });
                    }}
                    className="w-full text-xs font-medium bg-transparent border-b border-gray-400 outline-none"
                  />
                ) : (
                  <span className="leading-snug">{getText(obj, lang)}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* AWS Services */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-[28px] p-8 border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
          } backdrop-blur-md`}
        >
          <SectionTitle icon={Server} title={t.servicesTitle} color="#FFC8DD" isDark={isDark} />
          <div className="flex flex-wrap gap-2">
            {w.awsServices.map((svc, i) => (
              <span
                key={svc + i}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-2xl ${
                  isDark ? 'bg-white/10 text-gray-200' : 'bg-[#FFF0F5] text-[#C2185B]'
                }`}
              >
                <Tag className="w-3 h-3" />
                {svc}
              </span>
            ))}
          </div>
          {isEditMode && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10">
              <label className="block text-xs font-semibold mb-1">Thêm dịch vụ AWS (phân cách bằng dấu phẩy):</label>
              <input
                type="text"
                value={w.awsServices.join(', ')}
                onChange={e => {
                  const arr = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                  updateWorkshop({ awsServices: arr });
                }}
                className="w-full text-xs p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent"
              />
            </div>
          )}
        </motion.section>
      </div>

      {/* ── Architecture Blueprint ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-[28px] p-8 border mb-8 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <SectionTitle icon={ImageIcon} title={t.archTitle} color="#95D5B2" isDark={isDark} />
        <div className={`rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-dashed ${
          isDark ? 'border-white/20 bg-white/5' : 'border-[#95D5B2]/50 bg-[#F0FDF4]'
        }`}>
          <ImageIcon className="w-12 h-12 mb-3 text-[#52B788]" />
          {isEditMode ? (
            <input
              type="text"
              value={archCaption}
              onChange={e => {
                const val = e.target.value;
                updateWorkshop({
                  architectureCaption: typeof w.architectureCaption === 'object'
                    ? { ...w.architectureCaption, [lang]: val }
                    : val,
                });
              }}
              className="w-full text-center text-sm font-bold bg-transparent border-b border-[#52B788] outline-none mb-1"
            />
          ) : (
            <p className={`text-sm font-bold text-center mb-1 ${isDark ? 'text-gray-200' : 'text-[#2D6A4F]'}`}>
              {archCaption}
            </p>
          )}
          <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-[#52B788]'}`}>
            {t.addArchHint}
          </p>
        </div>
      </motion.section>

      {/* ── Lab Activities ── */}
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div
            className="h-8 w-1.5 rounded-full"
            style={{ background: `linear-gradient(to bottom, ${settings.primaryColor}, ${settings.secondaryColor})` }}
          />
          <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {t.sectionsTitle}
          </h2>
          <span className="text-xs px-3 py-1 rounded-full bg-[#CDB4DB]/20 text-[#7C3AED] dark:text-[#CDB4DB] font-bold">
            {w.sections.length} Practical Labs
          </span>
        </motion.div>

        <div className="space-y-4">
          {w.sections.map((section, i) => {
            const isExpanded = expandedLab === i;
            const colors = [settings.primaryColor, settings.secondaryColor, '#FFC8DD', '#95D5B2'];
            const color = colors[i % colors.length];
            const labTitle = getText(section.title, lang);
            const labDesc = getText(section.description, lang);
            const labOutcome = getText(section.outcome, lang);

            return (
              <div
                key={section.id || i}
                className={`rounded-[28px] border overflow-hidden transition-all duration-300 ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
                } backdrop-blur-sm`}
              >
                {/* Lab Header */}
                <div
                  className="p-6 cursor-pointer select-none flex items-start justify-between gap-4"
                  onClick={() => setExpandedLab(isExpanded ? null : i)}
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-2xl flex flex-col items-center justify-center shadow-sm"
                      style={{ background: `${color}25`, border: `1.5px solid ${color}50` }}
                    >
                      <span className={`text-[10px] font-bold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>LAB</span>
                      <span className="text-base font-extrabold leading-none" style={{ color }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      {isEditMode ? (
                        <input
                          type="text"
                          value={labTitle}
                          onClick={e => e.stopPropagation()}
                          onChange={e => {
                            const val = e.target.value;
                            updateWorkshopLab(i, {
                              title: typeof section.title === 'object' ? { ...section.title, [lang]: val } : val,
                            });
                          }}
                          className="font-extrabold text-base w-full bg-transparent border-b border-gray-400 outline-none"
                        />
                      ) : (
                        <h3 className={`font-extrabold text-base leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                          {labTitle}
                        </h3>
                      )}
                      <span className="text-xs font-semibold mt-1 inline-flex items-center gap-1.5" style={{ color }}>
                        <Clock className="w-3 h-3" /> {section.duration}
                      </span>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`} />
                  </motion.div>
                </div>

                {/* Lab Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`border-t px-6 py-6 space-y-6 ${isDark ? 'border-white/10' : 'border-[#E9D5FF]/40'}`}>
                        {/* Overview */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color }}>
                            <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                            Overview
                          </h4>
                          {isEditMode ? (
                            <textarea
                              rows={3}
                              value={labDesc}
                              onChange={e => {
                                const val = e.target.value;
                                updateWorkshopLab(i, {
                                  description: typeof section.description === 'object' ? { ...section.description, [lang]: val } : val,
                                });
                              }}
                              className={`w-full p-3 text-xs rounded-xl border outline-none ${
                                isDark ? 'bg-white/5 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                              }`}
                            />
                          ) : (
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                              {labDesc}
                            </p>
                          )}
                        </div>

                        {/* Tasks */}
                        {section.tasks && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2" style={{ color }}>
                              <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                              {t.tasksLabel}
                            </h4>
                            <ol className="space-y-2 list-none">
                              {section.tasks.map((task, taskIdx) => (
                                <li key={taskIdx} className={`text-sm flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                                  <span
                                    className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-extrabold flex items-center justify-center mt-0.5"
                                    style={{ backgroundColor: color + '30', color }}
                                  >
                                    {taskIdx + 1}
                                  </span>
                                  {isEditMode ? (
                                    <input
                                      type="text"
                                      value={getText(task, lang)}
                                      onChange={e => {
                                        const newTasks = [...section.tasks];
                                        const val = e.target.value;
                                        newTasks[taskIdx] = typeof task === 'object' ? { ...task, [lang]: val } : val;
                                        updateWorkshopLab(i, { tasks: newTasks });
                                      }}
                                      className="w-full text-xs bg-transparent border-b border-gray-400 outline-none"
                                    />
                                  ) : (
                                    <span>{getText(task, lang)}</span>
                                  )}
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}

                        {/* Outcome */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color }}>
                            <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                            {t.outcomeLabel}
                          </h4>
                          {isEditMode ? (
                            <input
                              type="text"
                              value={labOutcome}
                              onChange={e => {
                                const val = e.target.value;
                                updateWorkshopLab(i, {
                                  outcome: typeof section.outcome === 'object' ? { ...section.outcome, [lang]: val } : val,
                                });
                              }}
                              className="w-full text-xs p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent font-medium"
                            />
                          ) : (
                            <div className={`flex items-start gap-3 p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
                              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color }} />
                              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>{labOutcome}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Notes / Key Takeaways ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-[28px] p-8 border mb-8 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <SectionTitle icon={FileText} title={t.notesTitle} color="#BDE0FE" isDark={isDark} />
        <ul className="space-y-3">
          {w.notes.map((note, i) => (
            <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
              <span className="mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#A2D2FF]" />
              {isEditMode ? (
                <input
                  type="text"
                  value={getText(note, lang)}
                  onChange={e => {
                    const newNotes = [...w.notes];
                    const val = e.target.value;
                    newNotes[i] = typeof note === 'object' ? { ...note, [lang]: val } : val;
                    updateWorkshop({ notes: newNotes });
                  }}
                  className="w-full text-xs font-medium bg-transparent border-b border-gray-400 outline-none"
                />
              ) : (
                <span>{getText(note, lang)}</span>
              )}
            </li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
};

export default Workshop;
