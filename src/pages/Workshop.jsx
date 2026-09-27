import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Building2, Tag, ChevronDown,
  Target, BookOpen, Server, Image as ImageIcon, FileText,
  Link as LinkIcon, CheckCircle, Camera, ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { workshopData } from '../data/workshopData';
import { getText } from '../utils/text';

// ── Reusable section title ────────────────────────────────────
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

// ── Expandable lab section card ───────────────────────────────
const LabCard = ({ section, index, t, lang, isDark }) => {
  const [open, setOpen] = useState(false);
  const colors = ['#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2'];
  const color = colors[index % colors.length];

  const title = getText(section.title, lang);
  const desc = getText(section.description, lang);
  const outcome = getText(section.outcome, lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-[28px] border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-white shadow-md hover:shadow-xl'
      } backdrop-blur-sm`}
    >
      {/* Header */}
      <div
        className="p-6 cursor-pointer select-none"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Lab number bubble */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-2xl flex flex-col items-center justify-center shadow-sm"
              style={{ background: `${color}25`, border: `1.5px solid ${color}50` }}
            >
              <span className={`text-[10px] font-bold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>LAB</span>
              <span className="text-base font-extrabold leading-none" style={{ color }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className={`font-extrabold text-base leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                {title}
              </h3>
              {section.duration && (
                <span
                  className="text-xs font-semibold mt-1 inline-flex items-center gap-1.5"
                  style={{ color }}
                >
                  <Clock className="w-3 h-3" /> {section.duration}
                </span>
              )}
            </div>
          </div>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`} />
          </motion.div>
        </div>

        {/* Description preview */}
        <p className={`text-xs sm:text-sm leading-relaxed mt-3.5 pl-[64px] line-clamp-2 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
          {desc}
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
            <div className={`border-t px-6 py-6 space-y-6 ${isDark ? 'border-white/10' : 'border-[#E9D5FF]/40'}`}>
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                    style={{ color }}>
                  <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  Overview
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                  {desc}
                </p>
              </div>

              {/* Tasks list */}
              {section.tasks && section.tasks.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2"
                      style={{ color }}>
                    <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                    {t.tasksLabel}
                  </h4>
                  <ol className="space-y-2 list-none">
                    {section.tasks.map((task, i) => (
                      <li key={i} className={`text-sm flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-extrabold flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: color + '30', color }}
                        >
                          {i + 1}
                        </span>
                        <span>{getText(task, lang)}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Outcome */}
              {outcome && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                      style={{ color }}>
                    <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                    {t.outcomeLabel}
                  </h4>
                  <div className={`flex items-start gap-3 p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color }} />
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>{outcome}</p>
                  </div>
                </div>
              )}

              {/* Screenshot */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2"
                    style={{ color }}>
                  <span className="w-4 h-0.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  {t.screenshotLabel}
                </h4>
                {section.screenshot ? (
                  <img
                    src={section.screenshot}
                    alt={`Lab ${index + 1} screenshot`}
                    className="rounded-2xl w-full object-cover max-h-64 shadow-md"
                  />
                ) : (
                  <div className={`rounded-2xl h-36 flex flex-col items-center justify-center border-2 border-dashed ${
                    isDark ? 'border-white/15 bg-white/5' : 'border-[#CDB4DB]/40 bg-[#FBF9FD]'
                  }`}>
                    <Camera className="w-7 h-7 mb-2 opacity-30" style={{ color }} />
                    <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
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

  const title = getText(w.title, lang);
  const subtitle = getText(w.subtitle, lang);
  const duration = getText(w.duration, lang);
  const location = getText(w.location, lang);
  const overview = getText(w.overview, lang);
  const archCaption = getText(w.architectureCaption, lang);

  const metaRows = [
    { icon: Calendar,  label: t.dateLabel,      value: w.date },
    { icon: Clock,     label: t.durationLabel,   value: duration },
    { icon: MapPin,    label: t.locationLabel,   value: location },
    { icon: Building2, label: t.organizerLabel,  value: w.organizer },
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
            borderColor: '#CDB4DB60',
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
          <h2 className={`text-2xl font-extrabold leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {title}
          </h2>
        </div>
        <p className="text-sm font-semibold text-[#7C3AED] dark:text-[#CDB4DB] mb-6">
          {subtitle}
        </p>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {metaRows.map(({ icon: Icon, label, value }) => (
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
              <span className={`text-xs font-bold leading-tight ${isDark ? 'text-gray-100' : 'text-[#5B5566]'}`}>
                {value}
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
        className={`rounded-[28px] p-8 border mb-8 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <SectionTitle icon={BookOpen} title={t.overviewTitle} color="#CDB4DB" isDark={isDark} />
        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
          {overview}
        </p>
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
          <SectionTitle icon={Target} title={t.objectivesTitle} color="#A2D2FF" isDark={isDark} />
          <ul className="space-y-3">
            {w.objectives.map((obj, i) => (
              <li key={i} className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: '#A2D2FF30', color: '#0284C7' }}
                >
                  {i + 1}
                </span>
                <span className="leading-snug">{getText(obj, lang)}</span>
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
            {w.awsServices.map(svc => (
              <motion.span
                key={svc}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-2xl ${
                  isDark ? 'bg-white/10 text-gray-200' : 'bg-[#FFF0F5] text-[#C2185B]'
                }`}
              >
                <Tag className="w-3 h-3" />{svc}
              </motion.span>
            ))}
          </div>
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
          <p className={`text-sm font-bold text-center mb-1 ${isDark ? 'text-gray-200' : 'text-[#2D6A4F]'}`}>
            {archCaption}
          </p>
          <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-[#52B788]'}`}>
            {t.addArchHint}
          </p>
        </div>
      </motion.section>

      {/* ── Hands-on Labs ── */}
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#CDB4DB] to-[#A2D2FF]" />
          <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {t.sectionsTitle}
          </h2>
          <span className="text-xs px-3 py-1 rounded-full bg-[#CDB4DB]/20 text-[#7C3AED] dark:text-[#CDB4DB] font-bold">
            {w.sections.length} Practical Labs
          </span>
        </motion.div>

        <div className="space-y-4">
          {w.sections.map((section, i) => (
            <LabCard key={section.id} section={section} index={i} t={t} lang={lang} isDark={isDark} />
          ))}
        </div>
      </section>

      {/* ── Key Architectural Takeaways ── */}
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
              <span>{getText(note, lang)}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* ── Documentation & Resources ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-[28px] p-8 border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <SectionTitle icon={LinkIcon} title={t.resourcesTitle} color="#CDB4DB" isDark={isDark} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {w.resources.map((res, i) => (
            <motion.a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className={`flex items-center gap-3 p-4 rounded-2xl text-xs sm:text-sm font-semibold border transition-all ${
                isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-200' : 'bg-[#F8F5FF] border-[#E9D5FF] hover:bg-[#F0EBFF] text-[#5B5566]'
              }`}
            >
              <LinkIcon className="w-4 h-4 text-[#7C3AED] dark:text-[#CDB4DB] flex-shrink-0" />
              <span className="line-clamp-1">{res.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Workshop;
