import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const TeamCard = ({ member, index }) => {
  const { isDark } = useTheme();

  const avatarColors = ['#CDB4DB', '#A2D2FF', '#FFC8DD', '#D8F3DC'];
  const color = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`rounded-3xl border p-6 text-center relative transition-all duration-300 ${
        isDark
          ? 'bg-white/5 border-white/10 hover:bg-white/10'
          : 'bg-white/80 border-white shadow-md hover:shadow-xl'
      } backdrop-blur-sm`}
    >
      {/* "Me" badge */}
      {member.isMe && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="absolute top-3 right-3 bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md"
        >
          ★ Me
        </motion.div>
      )}

      {/* Avatar */}
      <div className="relative inline-block mb-4">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg border-4 ${
            member.isMe ? 'border-[#CDB4DB]' : isDark ? 'border-white/20' : 'border-white'
          }`}
          style={{ backgroundColor: color + '30' }}
        >
          {member.avatar}
        </div>
        {/* Online dot */}
        <div
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Info */}
      <h3 className={`font-bold text-base mb-1 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
        {member.name}
      </h3>
      <p className="text-sm font-medium mb-2" style={{ color }}>
        {member.role}
      </p>
      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>
        🎓 {member.university}
      </p>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-60"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default TeamCard;
