import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Filter, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
import { translations } from '../data/translations';
import WorklogCard from '../components/WorklogCard';

const Worklog = () => {
  const [filter, setFilter] = useState('all');
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { data } = useData();
  const t = translations[lang].worklog;

  const worklogList = data?.worklog || [];

  const counts = useMemo(() => ({
    all:       worklogList.length,
    completed: worklogList.filter(w => w.status === 'Completed').length,
    progress:  worklogList.filter(w => w.status === 'In Progress').length,
  }), [worklogList]);

  const filtered = useMemo(() => {
    if (filter === 'completed') return worklogList.filter(w => w.status === 'Completed');
    if (filter === 'progress')  return worklogList.filter(w => w.status === 'In Progress');
    return worklogList;
  }, [filter, worklogList]);

  const filterOptions = [
    { key: 'all',       label: t.filterAll,       count: counts.all,       icon: Filter },
    { key: 'completed', label: t.filterCompleted,  count: counts.completed, icon: CheckCircle },
    { key: 'progress',  label: t.filterProgress,   count: counts.progress,  icon: Clock },
  ];

  const progressPct = counts.all > 0 ? Math.round((counts.completed / counts.all) * 100) : 0;

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border shadow-sm"
          style={{
            background: isDark ? 'rgba(205, 180, 219, 0.15)' : '#F3E8FF',
            borderColor: '#CDB4DB60',
            color: isDark ? '#E9D5FF' : '#7C3AED',
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          12-Week Cloud Progression Timeline
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto font-normal ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* Progress Bar Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`rounded-[28px] p-7 border mb-8 ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm font-bold ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
            {t.progress}
          </span>
          <span className="text-sm font-extrabold text-[#7C3AED] dark:text-[#CDB4DB]">
            {counts.completed} / {counts.all} {t.weekLabel.toLowerCase()} ({progressPct}%)
          </span>
        </div>
        <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-[#F3E8FF]'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-[#CDB4DB] via-[#A2D2FF] to-[#95D5B2]"
          />
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-wrap gap-2.5 mb-8"
      >
        {filterOptions.map(({ key, label, count, icon: Icon }) => (
          <motion.button
            key={key}
            onClick={() => setFilter(key)}
            whileTap={{ scale: 0.96 }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-200 ${
              filter === key
                ? 'bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] text-white border-transparent shadow-md'
                : isDark
                  ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  : 'bg-white/70 border-[#E9D5FF] text-[#7E7791] hover:bg-[#F3E8FF]'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
              filter === key ? 'bg-white/30 text-white' : isDark ? 'bg-white/10 text-gray-400' : 'bg-[#F3E8FF] text-[#9C93B0]'
            }`}>{count}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Accordion Cards */}
      <div className="space-y-4">
        {filtered.map((week, i) => (
          <WorklogCard key={week.week} week={week} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
          <p className={isDark ? 'text-gray-400' : 'text-[#8A829D]'}>No entries match this filter.</p>
        </motion.div>
      )}
    </main>
  );
};

export default Worklog;
