import { motion } from 'framer-motion';
import { Users, Hash, UserCheck, BookOpen, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { teamData } from '../data/teamData';
import TeamCard from '../components/TeamCard';
import { getText } from '../utils/text';

const InfoRow = ({ icon: Icon, label, value, accent, isDark }) => (
  <div className={`flex items-start gap-3.5 p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: accent + '30' }}
    >
      <Icon className="w-5 h-5" style={{ color: accent }} />
    </div>
    <div>
      <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{label}</p>
      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
        {value}
      </p>
    </div>
  </div>
);

const Team = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].team;

  const infoRows = [
    { icon: Users,     label: t.infoLabels.groupName,  value: teamData.groupName,  accent: '#CDB4DB' },
    { icon: Hash,      label: t.infoLabels.groupId,    value: teamData.groupId,    accent: '#A2D2FF' },
    { icon: Star,      label: t.infoLabels.mentor,     value: teamData.mentor,     accent: '#FFC8DD' },
    { icon: BookOpen,  label: t.infoLabels.supervisor, value: teamData.supervisor, accent: '#95D5B2' },
    { icon: UserCheck, label: t.infoLabels.role,       value: getText(teamData.myRole, lang), accent: '#CDB4DB' },
    { icon: Sparkles,  label: t.infoLabels.program,    value: teamData.program,    accent: '#A2D2FF' },
  ];

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span
          className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3 inline-block"
          style={{
            backgroundColor: isDark ? 'rgba(205, 180, 219, 0.15)' : '#F3E8FF',
            color: isDark ? '#E9D5FF' : '#7C3AED',
          }}
        >
          {teamData.groupId}
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* Group Info Card */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`rounded-[28px] p-8 border mb-12 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#CDB4DB] to-[#A2D2FF]" />
          <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {teamData.groupName}
          </h2>
          <span className="text-xs px-3 py-1 rounded-full bg-[#CDB4DB]/20 text-[#7C3AED] dark:text-[#CDB4DB] font-bold">
            FCAJ 2026
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoRows.map(row => (
            <InfoRow key={row.label} {...row} isDark={isDark} />
          ))}
        </div>
      </motion.section>

      {/* Members Section */}
      <section className="mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-8 w-1.5 rounded-full bg-[#A2D2FF]" />
          <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {t.membersTitle}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.members.map((member, i) => (
            <TeamCard key={member.name + i} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Team Quote Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <div className={`inline-block px-10 py-7 rounded-[28px] border max-w-3xl ${
          isDark
            ? 'bg-white/5 border-white/10 shadow-lg'
            : 'bg-gradient-to-r from-[#F8F2FF] to-[#EDF6FF] border-[#E9D5FF]/60 shadow-md'
        } backdrop-blur-md`}>
          <p className={`text-base sm:text-lg font-bold italic leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
            {getText(teamData.quote, lang)}
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default Team;
