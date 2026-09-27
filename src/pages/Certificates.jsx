import { motion } from 'framer-motion';
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
    <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="text-center mb-12"
      >
        <h1 className={`text-4xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* Count badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-10"
      >
        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'
        }`}>
          <span className="text-2xl">🏅</span>
          <div>
            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{t.totalLabel}</p>
            <p className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {certificatesData.length}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificatesData.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>

      {/* Edit hint */}
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.5 }}
        className={`text-center text-xs mt-10 ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}
      >
        ✏️ Thêm chứng chỉ bằng cách chỉnh sửa <code className="font-mono">src/data/certificatesData.js</code>
      </motion.p>
    </main>
  );
};

export default Certificates;
