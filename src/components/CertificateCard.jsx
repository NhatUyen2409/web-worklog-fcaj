import { motion } from 'framer-motion';
import { ExternalLink, Award, ImageOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';

const CertificateCard = ({ cert, index }) => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].certificates;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 group ${
        isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/90 border-white shadow-md hover:shadow-2xl'
      }`}
    >
      {/* ── Image / placeholder ── */}
      <div
        className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}10)` }}
      >
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-full object-contain p-3"
          />
        ) : (
          <>
            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-40"
                 style={{ backgroundColor: cert.color }} />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full blur-xl opacity-30"
                 style={{ backgroundColor: cert.color }} />
            {/* Badge */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                style={{ backgroundColor: cert.color + '40', border: `2px solid ${cert.color}60` }}
              >
                {cert.badge || '🏅'}
              </div>
              <p className={`text-xs text-center max-w-[160px] leading-tight ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}>
                {/* ← Add image to /public/certificates/ and set path in certificatesData.js */}
                [Thêm ảnh vào /public/certificates/]
              </p>
            </div>
          </>
        )}
      </div>

      {/* ── Content ── */}
      <div className="p-5">
        <h3 className={`font-bold text-sm leading-snug mb-1.5 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {cert.name || '[Tên chứng chỉ]'}
        </h3>

        <div className="flex items-center gap-1 mb-1">
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{t.issuedBy}:</span>
          <span className="text-xs font-medium" style={{ color: cert.color }}>
            {cert.issuer || '[Tổ chức cấp]'}
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3">
          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{t.issuedDate}:</span>
          <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
            {cert.date || '[Tháng, Năm]'}
          </span>
        </div>

        <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {cert.description || '[Điền mô tả chứng chỉ vào certificatesData.js]'}
        </p>

        {/* View button — links to verifyUrl if present */}
        <motion.a
          href={cert.verifyUrl || '#'}
          target={cert.verifyUrl ? '_blank' : '_self'}
          rel="noopener noreferrer"
          whileTap={{ scale: 0.96 }}
          className="w-full py-2 rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
          style={{ backgroundColor: cert.color + '25', color: cert.color }}
          onClick={e => !cert.verifyUrl && e.preventDefault()}
        >
          <ExternalLink className="w-3 h-3" />
          {t.viewCert}
        </motion.a>
      </div>
    </motion.article>
  );
};

export default CertificateCard;
