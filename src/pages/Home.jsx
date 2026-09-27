import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';

// Floating pastel blobs for hero background
const FloatingBlob = ({ style, className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-40 ${className}`}
    animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 7 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
    style={style}
  />
);

const StatCard = ({ value, label, color, delay, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className={`rounded-3xl p-5 text-center flex-1 min-w-[100px] border transition-all duration-300 ${
      isDark ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white shadow-sm hover:shadow-md'
    } backdrop-blur-sm`}
  >
    <p className="text-2xl font-extrabold" style={{ color }}>{value}</p>
    <p className={`text-xs mt-1 leading-tight ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>{label}</p>
  </motion.div>
);

const Home = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].home;

  const statColors = ['#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2'];

  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background blobs */}
        <FloatingBlob
          style={{ width: 500, height: 500, backgroundColor: '#E9D5FF', top: '-10%', right: '-10%' }}
        />
        <FloatingBlob
          style={{ width: 400, height: 400, backgroundColor: '#D6E8FF', bottom: '5%', left: '-5%' }}
        />
        <FloatingBlob
          style={{ width: 300, height: 300, backgroundColor: '#FFD6E7', top: '30%', left: '5%' }}
        />
        <FloatingBlob
          style={{ width: 250, height: 250, backgroundColor: '#D8F3E3', bottom: '15%', right: '10%' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* FCAJ Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 border"
            style={{
              background: 'linear-gradient(135deg, #CDB4DB20, #A2D2FF20)',
              borderColor: '#CDB4DB60',
              color: isDark ? '#CDB4DB' : '#7C3AED',
            }}
          >
            <Sparkles className="w-4 h-4" />
            {t.badge}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-lg mb-2 font-medium ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}
          >
            {t.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight ${
              isDark ? 'text-white' : 'text-[#5B5566]'
            }`}
          >
            {t.name.split(' ').map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <span
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(135deg, #CDB4DB, #A2D2FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  word
                )}
                {i < arr.length - 1 ? ' ' : ''}
              </span>
            ))}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-base sm:text-lg font-medium mb-5 ${isDark ? 'text-gray-300' : 'text-[#7C3AED]'}`}
          >
            {t.role}
          </motion.p>

          {/* Avatar Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, type: 'spring', bounce: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center text-5xl shadow-2xl border-4"
                style={{
                  background: 'linear-gradient(135deg, #E9D5FF, #D6E8FF)',
                  borderColor: '#CDB4DB',
                }}
              >
                👩‍💻
              </div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#CDB4DB]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              {/* Shield badge */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center shadow-md border-2 border-white dark:border-[#1a1025]">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-10 ${
              isDark ? 'text-gray-300' : 'text-[#7E7791]'
            }`}
          >
            {t.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link to="/worklog">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-2xl font-bold text-sm text-white shadow-lg flex items-center gap-2 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #CDB4DB, #A2D2FF)',
                  boxShadow: '0 8px 24px -6px #CDB4DB80',
                }}
              >
                {t.ctaWorklog}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-7 py-3.5 rounded-2xl font-bold text-sm border-2 flex items-center gap-2 transition-all duration-200 ${
                  isDark
                    ? 'border-white/20 text-gray-200 hover:bg-white/10'
                    : 'border-[#CDB4DB] text-[#7C3AED] hover:bg-[#F3E8FF]'
                }`}
              >
                {t.ctaProjects}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {Object.entries(t.stats).map(([key, { value, label }], i) => (
              <StatCard
                key={key}
                value={value}
                label={label}
                color={statColors[i]}
                delay={0.7 + i * 0.1}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{t.scrollDown}</p>
          <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`} />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
