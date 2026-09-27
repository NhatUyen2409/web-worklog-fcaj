import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles, Shield, Network, Code, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';

// Floating pastel blobs for hero background
const FloatingBlob = ({ style, className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-40 pointer-events-none ${className}`}
    animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 7 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
    style={style}
  />
);

const StatCard = ({ value, label, color, delay, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, y: -3 }}
    className={`rounded-[28px] p-5 text-center flex-1 min-w-[130px] border transition-all duration-300 ${
      isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-white shadow-md hover:shadow-xl'
    } backdrop-blur-md`}
  >
    <p className="text-3xl font-extrabold" style={{ color }}>{value}</p>
    <p className={`text-xs mt-1.5 font-semibold leading-tight ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>{label}</p>
  </motion.div>
);

const Home = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].home;

  const statColors = ['#CDB4DB', '#A2D2FF', '#FFC8DD', '#95D5B2'];

  const highlightIcons = {
    Shield: Shield,
    Network: Network,
    Code: Code,
    Sparkles: Sparkles,
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background blobs */}
        <FloatingBlob
          style={{ width: 520, height: 520, backgroundColor: '#E9D5FF', top: '-10%', right: '-10%' }}
        />
        <FloatingBlob
          style={{ width: 440, height: 440, backgroundColor: '#D6E8FF', bottom: '5%', left: '-5%' }}
        />
        <FloatingBlob
          style={{ width: 340, height: 340, backgroundColor: '#FFD6E7', top: '25%', left: '5%' }}
        />
        <FloatingBlob
          style={{ width: 300, height: 300, backgroundColor: '#D8F3E3', bottom: '15%', right: '8%' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* FCAJ Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold mb-7 border shadow-sm backdrop-blur-md"
            style={{
              background: isDark ? 'rgba(205, 180, 219, 0.15)' : 'rgba(233, 213, 255, 0.65)',
              borderColor: '#CDB4DB70',
              color: isDark ? '#E9D5FF' : '#7C3AED',
            }}
          >
            <Sparkles className="w-4 h-4 text-[#CDB4DB]" />
            {t.badge}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-lg sm:text-xl mb-2 font-semibold ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}
          >
            {t.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight ${
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-base sm:text-lg font-bold mb-6 ${isDark ? 'text-[#CDB4DB]' : 'text-[#7C3AED]'}`}
          >
            {t.role}
          </motion.p>

          {/* Avatar Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, type: 'spring', bounce: 0.35 }}
            className="flex justify-center mb-7"
          >
            <div className="relative group cursor-pointer">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 transition-transform duration-300 group-hover:scale-105"
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
                animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Shield badge */}
              <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center shadow-lg border-2 border-white dark:border-[#120b1e]">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-9 font-normal ${
              isDark ? 'text-gray-300' : 'text-[#6A6377]'
            }`}
          >
            {t.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="/worklog">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-2xl font-bold text-sm text-white shadow-lg flex items-center gap-2.5 transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #CDB4DB, #A2D2FF)',
                  boxShadow: '0 8px 24px -6px #CDB4DB90',
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
                className={`px-8 py-3.5 rounded-2xl font-bold text-sm border-2 flex items-center gap-2.5 transition-all duration-200 backdrop-blur-sm ${
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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3.5"
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className={`text-[11px] font-semibold ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{t.scrollDown}</p>
          <ChevronDown className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`} />
        </motion.div>
      </section>

      {/* ── Highlights / Capabilities Section ── */}
      {t.highlights && (
        <section className="py-16 px-6 max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block"
              style={{
                backgroundColor: isDark ? 'rgba(205, 180, 219, 0.15)' : '#F3E8FF',
                color: isDark ? '#E9D5FF' : '#7C3AED',
              }}
            >
              {t.featuredBadge}
            </span>
            <h2 className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {t.highlightsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.highlights.map((item, i) => {
              const Icon = highlightIcons[item.icon] || Shield;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-[28px] p-7 border transition-all duration-300 ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-white shadow-md hover:shadow-xl'
                  } backdrop-blur-sm`}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: item.color + '30', border: `1.5px solid ${item.color}` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
