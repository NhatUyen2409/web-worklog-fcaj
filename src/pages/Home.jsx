import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, GraduationCap, BookOpen, Edit2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { useData } from '../contexts/DataContext';
import { translations } from '../data/translations';
import { getText } from '../utils/text';

// Ambient floating pastel blobs
const FloatingBlob = ({ style, className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-40 pointer-events-none ${className}`}
    animate={{ y: [0, -18, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
    transition={{ duration: 7 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
    style={style}
  />
);

const Home = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { settings } = useSettings();
  const { data, isEditMode, updateHome } = useData();
  const t = translations[lang].home;

  const currentIntro = getText(data.home.intro, lang);

  return (
    <main className="min-h-[88vh] flex flex-col justify-center items-center relative overflow-hidden px-6 pt-24 pb-16">
      {/* Background blobs */}
      <FloatingBlob
        style={{ width: 480, height: 480, backgroundColor: settings.primaryColor, top: '-10%', right: '-8%' }}
      />
      <FloatingBlob
        style={{ width: 420, height: 420, backgroundColor: settings.secondaryColor, bottom: '5%', left: '-5%' }}
      />
      <FloatingBlob
        style={{ width: 320, height: 320, backgroundColor: '#FFD6E7', top: '30%', left: '8%' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
        {/* FCAJ Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold mb-7 border shadow-sm backdrop-blur-md"
          style={{
            background: isDark ? 'rgba(205, 180, 219, 0.15)' : 'rgba(233, 213, 255, 0.65)',
            borderColor: `${settings.primaryColor}80`,
            color: isDark ? '#E9D5FF' : '#7C3AED',
          }}
        >
          <Sparkles className="w-4 h-4 text-[#CDB4DB]" />
          {isEditMode ? (
            <input
              type="text"
              value={data.home.program}
              onChange={e => updateHome({ program: e.target.value })}
              className="bg-transparent border-b border-[#7C3AED] outline-none text-center font-bold px-1"
            />
          ) : (
            data.home.program
          )}
        </motion.div>

        {/* Avatar with pulse ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, type: 'spring', bounce: 0.35 }}
          className="flex justify-center mb-6"
        >
          <div className="relative group cursor-pointer">
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${settings.primaryColor}50, ${settings.secondaryColor}50)`,
                borderColor: settings.primaryColor,
              }}
            >
              {isEditMode ? (
                <input
                  type="text"
                  value={data.home.avatar || '👩‍💻'}
                  onChange={e => updateHome({ avatar: e.target.value })}
                  className="w-16 bg-transparent text-center text-4xl outline-none"
                  title="Emoji avatar"
                />
              ) : (
                data.home.avatar || '👩‍💻'
              )}
            </div>
            {/* Ambient Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: settings.primaryColor }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Shield Icon Badge */}
            <div
              className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-[#120b1e]"
              style={{ background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})` }}
            >
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-base sm:text-lg mb-1 font-semibold ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}
        >
          {t.greeting}
        </motion.p>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3"
        >
          {isEditMode ? (
            <input
              type="text"
              value={data.home.name}
              onChange={e => updateHome({ name: e.target.value })}
              className="text-4xl sm:text-5xl font-extrabold text-center bg-transparent border-b-2 border-dashed border-[#CDB4DB] outline-none w-full"
            />
          ) : (
            <h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
              style={{
                background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {data.home.name}
            </h1>
          )}
        </motion.div>

        {/* University & Major Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border ${
            isDark ? 'bg-white/5 border-white/10 text-gray-200' : 'bg-white/80 border-[#E9D5FF] text-[#5B5566]'
          } shadow-sm backdrop-blur-sm`}>
            <GraduationCap className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#A2D2FF]" />
            {isEditMode ? (
              <input
                type="text"
                value={data.home.university}
                onChange={e => updateHome({ university: e.target.value })}
                className="bg-transparent border-b border-gray-400 outline-none text-xs"
              />
            ) : (
              data.home.university
            )}
          </div>

          <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border ${
            isDark ? 'bg-white/5 border-white/10 text-gray-200' : 'bg-white/80 border-[#E9D5FF] text-[#5B5566]'
          } shadow-sm backdrop-blur-sm`}>
            <BookOpen className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#CDB4DB]" />
            {isEditMode ? (
              <input
                type="text"
                value={data.home.major}
                onChange={e => updateHome({ major: e.target.value })}
                className="bg-transparent border-b border-gray-400 outline-none text-xs"
              />
            ) : (
              data.home.major
            )}
          </div>
        </motion.div>

        {/* Short Professional Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-9"
        >
          {isEditMode ? (
            <div className="relative">
              <textarea
                rows={4}
                value={typeof data.home.intro === 'object' ? data.home.intro[lang] || '' : data.home.intro}
                onChange={e => {
                  const val = e.target.value;
                  updateHome({
                    intro: typeof data.home.intro === 'object'
                      ? { ...data.home.intro, [lang]: val }
                      : val,
                  });
                }}
                className={`w-full p-4 rounded-2xl text-sm border outline-none ${
                  isDark ? 'bg-white/5 border-white/20 text-white' : 'bg-white border-[#CDB4DB] text-[#5B5566]'
                }`}
              />
              <span className="text-[10px] text-amber-500 font-bold block mt-1">
                Editing intro for ({lang.toUpperCase()})
              </span>
            </div>
          ) : (
            <p className={`max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal ${
              isDark ? 'text-gray-300' : 'text-[#6A6377]'
            }`}>
              {currentIntro}
            </p>
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/worklog">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-2xl font-bold text-sm text-white shadow-lg flex items-center gap-2.5 transition-all duration-200"
              style={{
                background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})`,
                boxShadow: `0 8px 24px -6px ${settings.primaryColor}80`,
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
      </div>
    </main>
  );
};

export default Home;
