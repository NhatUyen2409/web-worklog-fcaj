import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { getText } from '../utils/text';

const TeamCard = ({ member, index }) => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();

  const avatarColors = ['#CDB4DB', '#A2D2FF', '#FFC8DD', '#D8F3DC'];
  const color = avatarColors[index % avatarColors.length];

  const role = getText(member.role, lang);
  const bio = getText(member.bio, lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`rounded-[28px] border p-6 text-center relative transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
          : 'bg-white/80 border-white shadow-md hover:shadow-2xl'
      } backdrop-blur-sm`}
    >
      {/* "Me" badge */}
      {member.isMe && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="absolute top-4 right-4 bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md"
        >
          ★ Lead
        </motion.div>
      )}

      <div>
        {/* Avatar */}
        <div className="relative inline-block mb-4 mt-2">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg border-4 ${
              member.isMe ? 'border-[#CDB4DB]' : isDark ? 'border-white/20' : 'border-white'
            }`}
            style={{ backgroundColor: color + '35' }}
          >
            {member.avatar}
          </div>
          {/* Online status indicator */}
          <div
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white dark:border-[#120b1e]"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Member Name & Role */}
        <h3 className={`font-extrabold text-base mb-1 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {member.name}
        </h3>
        <p className="text-xs font-bold mb-2.5" style={{ color }}>
          {role}
        </p>

        {/* University */}
        <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
          🎓 {member.university}
        </p>

        {/* Short Bio */}
        {bio && (
          <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
            {bio}
          </p>
        )}
      </div>

      {/* Bottom accent gradient bar */}
      <div
        className="mt-4 h-1 rounded-full opacity-60 w-16 mx-auto"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default TeamCard;
