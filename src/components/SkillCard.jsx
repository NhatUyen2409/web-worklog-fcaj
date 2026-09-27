import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getText } from '../utils/text';

const SkillCard = ({ skill, index }) => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();

  const levelMap = { Advanced: 92, Proficient: 80, Intermediate: 68 };
  const levelPct = levelMap[skill.level] || 75;

  const skillDesc = getText(skill.description, lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`rounded-[28px] p-6 border transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
          : 'bg-white/80 border-white hover:bg-white hover:shadow-xl'
      } backdrop-blur-sm`}
    >
      <div>
        {/* Icon + Title */}
        <div className="flex items-center gap-3.5 mb-3.5">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm flex-shrink-0"
            style={{ backgroundColor: skill.badgeColor + '35', border: `1.5px solid ${skill.badgeColor}60` }}
          >
            <span>{getSkillEmoji(skill.name)}</span>
          </div>
          <div className="min-w-0">
            <h3 className={`font-extrabold text-sm sm:text-base leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {skill.name}
            </h3>
            <span
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-block mt-0.5"
              style={{ backgroundColor: skill.badgeColor + '25', color: skill.badgeColor }}
            >
              {skill.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
          {skillDesc}
        </p>
      </div>

      {/* Progress Bar & Level */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className={`text-xs font-bold ${isDark ? 'text-gray-400' : 'text-[#8A829D]'}`}>
            {skill.level}
          </span>
          <span className="text-xs font-extrabold" style={{ color: skill.badgeColor }}>
            {levelPct}%
          </span>
        </div>
        <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-[#F3E8FF]'}`}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${levelPct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.badgeColor}, ${skill.badgeColor}cc)` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const getSkillEmoji = (name) => {
  const map = {
    'AWS Cloud Security': '☁️',
    'Linux & Hardening': '🐧',
    'Network Defense & Protocols': '🌐',
    'Python for Security': '🐍',
    'Packet Inspection & Forensics': '📡',
    'Web Security & OWASP': '🛡️',
    'Infrastructure as Code (IaC)': '⚙️',
    'Docker & Microservices': '🐳',
  };
  return map[name] || '🔐';
};

export default SkillCard;
