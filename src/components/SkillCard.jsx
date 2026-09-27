import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// SkillCard with icon, name, level bar, and category badge
const SkillCard = ({ skill, index }) => {
  const { isDark } = useTheme();

  const levelMap = { Advanced: 90, Proficient: 75, Intermediate: 60 };
  const levelPct = levelMap[skill.level] || 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`rounded-3xl p-5 border transition-all duration-300 ${
        isDark
          ? 'bg-white/5 border-white/10 hover:bg-white/10'
          : 'bg-white/70 border-white hover:bg-white hover:shadow-xl'
      } backdrop-blur-sm`}
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-sm"
          style={{ backgroundColor: skill.badgeColor + '40', border: `1.5px solid ${skill.badgeColor}` }}
        >
          <span>{getSkillEmoji(skill.name)}</span>
        </div>
        <div>
          <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {skill.name}
          </h3>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: skill.badgeColor + '30', color: skill.badgeColor }}
          >
            {skill.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
        {skill.description}
      </p>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
            {skill.level}
          </span>
          <span className="text-xs font-bold" style={{ color: skill.badgeColor }}>
            {levelPct}%
          </span>
        </div>
        <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-[#F3E8FF]'}`}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${levelPct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.badgeColor}, ${skill.badgeColor}99)` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const getSkillEmoji = (name) => {
  const map = {
    AWS: '☁️', Linux: '🐧', Python: '🐍', Java: '☕',
    Networking: '🌐', 'Burp Suite': '🕷️', Wireshark: '📡', Metasploit: '🔓',
  };
  return map[name] || '🔧';
};

export default SkillCard;
