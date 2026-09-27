import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { getText } from '../utils/text';

const CertificateCard = ({ cert, index }) => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].certificates;

  const certName = getText(cert.name, lang);
  const certDate = getText(cert.date, lang);
  const certDesc = getText(cert.description, lang);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`rounded-[28px] border overflow-hidden transition-all duration-300 group flex flex-col justify-between ${
        isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/90 border-white shadow-md hover:shadow-2xl'
      } backdrop-blur-sm`}
    >
      <div>
        {/* ── Banner / Badge Area ── */}
        <div
          className="relative h-40 flex items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${cert.color}35, ${cert.color}15)` }}
        >
          {cert.image ? (
            <img
              src={cert.image}
              alt={certName}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <>
              {/* Decorative blobs */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-40 pointer-events-none"
                style={{ backgroundColor: cert.color }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full blur-xl opacity-30 pointer-events-none"
                style={{ backgroundColor: cert.color }}
              />
              {/* Central Badge */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: cert.color + '40', borderColor: cert.color }}
                >
                  {cert.badge || '🏅'}
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase opacity-80" style={{ color: cert.color }}>
                  Verified Credential
                </span>
              </div>
            </>
          )}
        </div>

        {/* ── Content ── */}
        <div className="p-6">
          <h3 className={`font-extrabold text-base leading-snug mb-2 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {certName}
          </h3>

          <div className="flex items-center gap-1.5 mb-1.5">
            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{t.issuedBy}:</span>
            <span className="text-xs font-bold" style={{ color: cert.color }}>
              {cert.issuer}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mb-3.5">
            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{t.issuedDate}:</span>
            <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
              {certDate}
            </span>
          </div>

          <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
            {certDesc}
          </p>
        </div>
      </div>

      {/* ── Verify Link ── */}
      <div className="p-6 pt-0">
        <motion.a
          href={cert.verifyUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.96 }}
          className="w-full py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm"
          style={{ backgroundColor: cert.color + '25', color: cert.color }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          {t.viewCert}
        </motion.a>
      </div>
    </motion.article>
  );
};

export default CertificateCard;
