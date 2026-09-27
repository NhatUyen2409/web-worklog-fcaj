import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MinusCircle, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { worklogData } from '../data/worklogData';
import WorklogCard from '../components/WorklogCard';

const Worklog = () => {
  const [filter, setFilter] = useState('all');
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].worklog;

  const counts = useMemo(() => ({
    all:       worklogData.length,
    completed: worklogData.filter(w => w.status === 'Completed').length,
    progress:  worklogData.filter(w => w.status === 'In Progress').length,
  }), []);

  const filtered = useMemo(() => {
    if (filter === 'completed') return worklogData.filter(w => w.status === 'Completed');
    if (filter === 'progress')  return worklogData.filter(w => w.status === 'In Progress');
    return worklogData;
  }, [filter]);

  const filterOptions = [
    { key: 'all',       label: t.filterAll,       count: counts.all,       icon: Filter },
    { key: 'completed', label: t.filterCompleted,  count: counts.completed, icon: CheckCircle },
    { key: 'progress',  label: t.filterProgress,   count: counts.progress,  icon: Clock },
  ];

  const progressPct = counts.all > 0 ? Math.round((counts.completed / counts.all) * 100) : 0;

  return (
    <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="text-center mb-10"
      >
        <h1 className={`text-4xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-3xl p-5 border mb-8 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-[#5B5566]'}`}>
            {t.progress}
          </span>
          <span className="text-sm font-bold text-[#CDB4DB]">
            {counts.completed} / {counts.all} ({progressPct}%)
          </span>
        </div>
        <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-[#F3E8FF]'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF]"
          />
        </div>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {filterOptions.map(({ key, label, count, icon: Icon }) => (
          <motion.button
            key={key}
            onClick={() => setFilter(key)}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold border transition-all duration-200 ${
              filter === key
                ? 'bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] text-white border-transparent shadow-md'
                : isDark
                  ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  : 'bg-white/70 border-[#E9D5FF] text-[#7E7791] hover:bg-[#F3E8FF]'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
              filter === key ? 'bg-white/30 text-white' : isDark ? 'bg-white/10 text-gray-400' : 'bg-[#F3E8FF] text-[#9C93B0]'
            }`}>{count}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Cards */}
      <div className="space-y-4">
        {filtered.map((week, i) => (
          <WorklogCard key={week.week} week={week} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-center py-16">
          <p className={isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}>No entries match this filter.</p>
        </motion.div>
      )}

      {/* Edit hint */}
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.5 }}
        className={`text-center text-xs mt-10 ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}
      >
        ✏️ Điền nội dung từng tuần tại <code className="font-mono">src/data/worklogData.js</code>
      </motion.p>
    </main>
  );
};

export default Worklog;
