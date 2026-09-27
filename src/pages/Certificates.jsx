import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { certificatesData } from '../data/certificatesData';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].certificates;

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
          <Award className="w-3.5 h-3.5" />
          Industry Badges & Accreditations
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto font-normal ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* Count Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className={`inline-flex items-center gap-4 px-7 py-3.5 rounded-[28px] border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'
        } backdrop-blur-md`}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center text-2xl shadow-sm">
            🏅
          </div>
          <div>
            <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{t.totalLabel}</p>
            <p className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {certificatesData.length}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {certificatesData.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </main>
  );
};

export default Certificates;
