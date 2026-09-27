import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Building2, Tag, ChevronDown,
  Target, BookOpen, Server, Image as ImageIcon, FileText,
  Link as LinkIcon, CheckCircle, Camera,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { workshopData } from '../data/workshopData';

// ── Reusable section title ────────────────────────────────────
const SectionTitle = ({ icon: Icon, title, color = '#CDB4DB', isDark }) => (
  <div className="flex items-center gap-3 mb-5">
    <div
      className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: color + '25' }}
    >
      <Icon className="w-4 h-4" style={{ color }} />
    </div>
    <div className="h-6 w-0.5 rounded-full" style={{ backgroundColor: color + '60' }} />
    <h2 className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{title}</h2>
  </div>
);

// ── Empty placeholder hint ────────────────────────────────────
const Hint = ({ text, isDark }) => (
  <p className={`text-xs italic px-3 py-2 rounded-xl ${
    isDark ? 'bg-white/5 text-gray-600' : 'bg-[#F8F5FF] text-[#C5BDD8]'
  }`}>{text}</p>
);

// ── Expandable lab section card ───────────────────────────────
const LabCard = ({ section, index, t, isDark }) => {
  const [open, setOpen] = useState(false);
  const colors = ['#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2', '#BDE0FE'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md hover:shadow-lg'
      }`}
    >
      {/* Header */}
      <div
        className="p-5 cursor-pointer select-none"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Lab number bubble */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-2xl flex flex-col items-center justify-center shadow-sm"
              style={{ background: `${color}25`, border: `1.5px solid ${color}50` }}
            >
              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>Lab</span>
              <span className="text-sm font-extrabold leading-none" style={{ color }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className={`font-bold text-sm leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                {section.title || `[Tên Lab ${index + 1}]`}
              </h3>
              {section.duration && (
                <span
                  className="text-xs font-medium mt-1 flex items-center gap-1"
                  style={{ color }}
                >
                  <Clock className="w-3 h-3" /> {section.duration}
                </span>
              )}
            </div>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-[#C5BDD8]'}`} />
          </motion.div>
        </div>

        {/* Description preview */}
        <p className={`text-xs leading-relaxed mt-3 pl-[56px] line-clamp-2 ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {section.description || `[Điền mô tả Lab ${index + 1} vào workshopData.js]`}
        </p>
      </div>

      {/* Expanded body */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`border-t px-5 py-5 space-y-5 ${isDark ? 'border-white/10' : 'border-[#E9D5FF]/30'}`}>
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                    style={{ color }}>
                  <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  Overview
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                  {section.description || <Hint text="[Mô tả lab chưa có]" isDark={isDark} />}
                </p>
              </div>

              {/* Steps */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                    style={{ color }}>
                  <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  {t.tasksLabel}
                </h4>
                {section.tasks && section.tasks.length > 0 ? (
                  <ol className="space-y-1.5 list-none">
                    {section.tasks.map((task, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2.5 ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: color + '30', color }}
                        >
                          {i + 1}
                        </span>
                        {task}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <Hint text="[Điền các bước thực hành vào workshopData.js → sections[].tasks]" isDark={isDark} />
                )}
              </div>

              {/* Outcome */}
              {section.outcome && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                      style={{ color }}>
                    <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                    {t.outcomeLabel}
                  </h4>
                  <div className={`flex items-start gap-2 p-3 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color }} />
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>{section.outcome}</p>
                  </div>
                </div>
              )}

              {/* Screenshot */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                    style={{ color }}>
                  <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  {t.screenshotLabel}
                </h4>
                {section.screenshot ? (
                  <img
                    src={section.screenshot}
                    alt={`Lab ${index + 1} screenshot`}
                    className="rounded-2xl w-full object-cover max-h-64"
                  />
                ) : (
                  <div className={`rounded-2xl h-32 flex flex-col items-center justify-center border-2 border-dashed ${
                    isDark ? 'border-white/20 bg-white/5' : 'border-[#CDB4DB]/40 bg-[#F8F5FF]'
                  }`}>
                    <Camera className="w-7 h-7 mb-2 opacity-25" style={{ color }} />
                    <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}>
                      {t.addScreenHint}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Main Workshop Page ────────────────────────────────────────
const Workshop = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].workshop;
  const w = workshopData;

  // Meta info rows
  const metaRows = [
    { icon: Calendar,  label: t.dateLabel,      value: w.date },
    { icon: Clock,     label: t.durationLabel,   value: w.duration },
    { icon: MapPin,    label: t.locationLabel,   value: w.location },
    { icon: Building2, label: t.organizerLabel,  value: w.organizer },
  ];

  return (
    <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border"
          style={{
            background: 'linear-gradient(135deg, #CDB4DB20, #A2D2FF20)',
            borderColor: '#CDB4DB50',
            color: isDark ? '#CDB4DB' : '#7C3AED',
          }}
        >
          ☁️ AWS First Cloud AI Journey 2026
        </motion.span>

        <h1 className={`text-4xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* ── Workshop Title Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`rounded-3xl p-7 border mb-8 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
        }`}
      >
        <h2 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {w.title || '[Điền tên Workshop vào workshopData.js → title]'}
        </h2>
        <p className={`text-sm mb-5 ${isDark ? 'text-[#CDB4DB]' : 'text-[#CDB4DB]'}`}>
          {w.subtitle || '[Mô tả phụ]'}
        </p>

        {/* Meta info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {metaRows.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className={`rounded-2xl p-3 flex flex-col gap-1 ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className="w-3 h-3 text-[#CDB4DB]" />
                <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{label}</span>
              </div>
              <span className={`text-xs font-semibold ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                {value || '—'}
              </span>
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
        className={`rounded-3xl p-7 border mb-6 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
        }`}
      >
        <SectionTitle icon={BookOpen} title={t.overviewTitle} color="#CDB4DB" isDark={isDark} />
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {w.overview || <Hint text="[Điền tổng quan workshop vào workshopData.js → overview]" isDark={isDark} />}
        </p>
      </motion.section>

      {/* ── Objectives + AWS Services side by side ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Objectives */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-3xl p-6 border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
          }`}
        >
          <SectionTitle icon={Target} title={t.objectivesTitle} color="#A2D2FF" isDark={isDark} />
          {w.objectives && w.objectives.length > 0 ? (
            <ul className="space-y-2.5">
              {w.objectives.map((obj, i) => (
                <li key={i} className={`flex items-start gap-2.5 text-sm ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#A2D2FF30', color: '#A2D2FF' }}
                  >
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          ) : (
            <Hint text="[Điền mục tiêu vào workshopData.js → objectives]" isDark={isDark} />
          )}
        </motion.section>

        {/* AWS Services */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-3xl p-6 border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
          }`}
        >
          <SectionTitle icon={Server} title={t.servicesTitle} color="#FFC8DD" isDark={isDark} />
          {w.awsServices && w.awsServices.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {w.awsServices.map(svc => (
                <motion.span
                  key={svc}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-2xl ${
                    isDark ? 'bg-white/10 text-gray-300' : 'bg-[#FFF0F5] text-[#C2185B]'
                  }`}
                >
                  <Tag className="w-3 h-3" />{svc}
                </motion.span>
              ))}
            </div>
          ) : (
            <Hint text="[Điền dịch vụ AWS vào workshopData.js → awsServices]" isDark={isDark} />
          )}
        </motion.section>
      </div>

      {/* ── Architecture Diagram ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-3xl p-6 border mb-6 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
        }`}
      >
        <SectionTitle icon={ImageIcon} title={t.archTitle} color="#95D5B2" isDark={isDark} />
        {w.architectureImage ? (
          <img
            src={w.architectureImage}
            alt={w.architectureCaption || 'Architecture Diagram'}
            className="rounded-2xl w-full object-contain max-h-96 border"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#E9D5FF50' }}
          />
        ) : (
          <div className={`rounded-2xl h-52 flex flex-col items-center justify-center border-2 border-dashed ${
            isDark ? 'border-white/20 bg-white/5' : 'border-[#95D5B2]/50 bg-[#F0FDF4]'
          }`}>
            <ImageIcon className="w-10 h-10 mb-3 opacity-20 text-[#95D5B2]" />
            <p className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>
              {w.architectureCaption || '[Chú thích sơ đồ kiến trúc]'}
            </p>
            <p className={`text-xs ${isDark ? 'text-gray-700' : 'text-[#C5BDD8]'}`}>
              {t.addArchHint}
            </p>
          </div>
        )}
      </motion.section>

      {/* ── Lab Sections ── */}
      <section className="mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-7 w-1 rounded-full bg-gradient-to-b from-[#CDB4DB] to-[#A2D2FF]" />
          <h2 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {t.sectionsTitle}
          </h2>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
            isDark ? 'bg-white/10 text-gray-400' : 'bg-[#F3E8FF] text-[#9C93B0]'
          }`}>
            {w.sections?.length || 0} labs
          </span>
        </motion.div>

        <div className="space-y-4">
          {w.sections && w.sections.length > 0 ? (
            w.sections.map((section, i) => (
              <LabCard key={section.id} section={section} index={i} t={t} isDark={isDark} />
            ))
          ) : (
            <Hint text="[Thêm lab vào workshopData.js → sections]" isDark={isDark} />
          )}
        </div>
      </section>

      {/* ── Key Takeaways ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-3xl p-6 border mb-6 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
        }`}
      >
        <SectionTitle icon={FileText} title={t.notesTitle} color="#BDE0FE" isDark={isDark} />
        {w.notes && w.notes.length > 0 ? (
          <ul className="space-y-2.5">
            {w.notes.map((note, i) => (
              <li key={i} className={`flex items-start gap-2.5 text-sm ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#BDE0FE]" />
                {note}
              </li>
            ))}
          </ul>
        ) : (
          <Hint text="[Điền bài học vào workshopData.js → notes]" isDark={isDark} />
        )}
      </motion.section>

      {/* ── Resources ── */}
      {w.resources && w.resources.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-3xl p-6 border ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
          }`}
        >
          <SectionTitle icon={LinkIcon} title={t.resourcesTitle} color="#CDB4DB" isDark={isDark} />
          <div className="space-y-2">
            {w.resources.map((res, i) => (
              <motion.a
                key={i}
                href={res.url || '#'}
                target={res.url && res.url !== '#' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 p-3 rounded-2xl text-sm font-medium transition-colors ${
                  isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-[#F8F5FF] hover:bg-[#F0EBFF] text-[#5B5566]'
                }`}
                onClick={e => (!res.url || res.url === '#') && e.preventDefault()}
              >
                <LinkIcon className="w-4 h-4 text-[#CDB4DB] flex-shrink-0" />
                {res.label || '[Tên tài liệu]'}
              </motion.a>
            ))}
          </div>
        </motion.section>
      )}

      {/* Edit hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className={`text-center text-xs mt-10 ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}
      >
        ✏️ Điền nội dung workshop tại <code className="font-mono">src/data/workshopData.js</code>
      </motion.p>
    </main>
  );
};

export default Workshop;
