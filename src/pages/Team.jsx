import { motion } from 'framer-motion';
import { Users, Hash, UserCheck, BookOpen, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { teamData } from '../data/teamData';
import TeamCard from '../components/TeamCard';

const InfoRow = ({ icon: Icon, label, value, accent, isDark }) => (
  <div className={`flex items-start gap-3 p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
         style={{ backgroundColor: accent + '30' }}>
      <Icon className="w-4 h-4" style={{ color: accent }} />
    </div>
    <div>
      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{label}</p>
      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
        {value || <span className="italic opacity-50">[chưa điền]</span>}
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
    { icon: UserCheck, label: t.infoLabels.role,       value: teamData.myRole,     accent: '#CDB4DB' },
    { icon: Hash,      label: t.infoLabels.program,    value: teamData.program,    accent: '#A2D2FF' },
  ];

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

      {/* Group Info */}
      <motion.section
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className={`rounded-3xl p-7 border mb-10 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="h-7 w-1 rounded-full bg-gradient-to-b from-[#CDB4DB] to-[#A2D2FF]" />
          <h2 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {teamData.groupName || '[Tên nhóm]'}
          </h2>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#CDB4DB]/20 text-[#CDB4DB] font-semibold">
            FCAJ 2026
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {infoRows.map(row => (
            <InfoRow key={row.label} {...row} isDark={isDark} />
          ))}
        </div>
      </motion.section>

      {/* Members */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-7 w-1 rounded-full bg-[#A2D2FF]" />
          <h2 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {t.membersTitle}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamData.members.map((member, i) => (
            <TeamCard key={member.name + i} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Team quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <div className={`inline-block px-8 py-5 rounded-3xl border ${
          isDark ? 'bg-white/5 border-white/10' : 'bg-gradient-to-r from-[#F3E8FF] to-[#E8F4FF] border-[#E9D5FF]/60'
        }`}>
          <p className={`text-base font-semibold ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
            {teamData.quote || '"[Điền khẩu hiệu nhóm vào teamData.js → quote]"'}
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default Team;
