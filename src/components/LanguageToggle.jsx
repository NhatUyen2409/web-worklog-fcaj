import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 bg-[#F3E8FF] dark:bg-white/10 rounded-xl p-1">
      {['vi', 'en'].map((l) => (
        <motion.button
          key={l}
          onClick={() => setLang(l)}
          whileTap={{ scale: 0.9 }}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
            lang === l
              ? 'bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] text-white shadow-sm'
              : 'text-[#5B5566] dark:text-gray-300 hover:bg-white/60 dark:hover:bg-white/10'
          }`}
          aria-label={`Switch to ${l === 'vi' ? 'Vietnamese' : 'English'}`}
        >
          {l.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageToggle;
