import { motion } from 'framer-motion';
import { Users, Hash, UserCheck, BookOpen, Star, Sparkles, Plus, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { useData } from '../contexts/DataContext';
import { translations } from '../data/translations';
import { getText } from '../utils/text';

const Team = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { settings } = useSettings();
  const { data, isEditMode, updateTeam, updateTeamMember } = useData();
  const t = translations[lang].team;
  const team = data.team;

  const infoRows = [
    {
      icon: Users,
      label: t.infoLabels.groupName,
      value: team.groupName,
      key: 'groupName',
      accent: settings.primaryColor,
    },
    {
      icon: Hash,
      label: t.infoLabels.groupId,
      value: team.groupId,
      key: 'groupId',
      accent: settings.secondaryColor,
    },
    {
      icon: Star,
      label: t.infoLabels.mentor,
      value: team.mentor,
      key: 'mentor',
      accent: '#FFC8DD',
    },
    {
      icon: BookOpen,
      label: t.infoLabels.supervisor,
      value: team.supervisor,
      key: 'supervisor',
      accent: '#95D5B2',
    },
    {
      icon: UserCheck,
      label: t.infoLabels.myRole || 'My Role',
      value: getText(team.myRole, lang),
      key: 'myRole',
      accent: settings.primaryColor,
      isBilingual: true,
    },
    {
      icon: Sparkles,
      label: t.infoLabels.track || 'Track',
      value: team.program,
      key: 'program',
      accent: settings.secondaryColor,
    },
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
          {team.groupId}
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
          <div
            className="h-8 w-1.5 rounded-full"
            style={{ background: `linear-gradient(to bottom, ${settings.primaryColor}, ${settings.secondaryColor})` }}
          />
          {isEditMode ? (
            <input
              type="text"
              value={team.groupName}
              onChange={e => updateTeam({ groupName: e.target.value })}
              className="text-2xl font-extrabold bg-transparent border-b border-[#7C3AED] outline-none"
            />
          ) : (
            <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {team.groupName}
            </h2>
          )}
          <span className="text-xs px-3 py-1 rounded-full bg-[#CDB4DB]/20 text-[#7C3AED] dark:text-[#CDB4DB] font-bold">
            FCAJ 2026
          </span>
        </div>

        {/* Editable info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infoRows.map(row => (
            <div
              key={row.label}
              className={`flex items-start gap-3.5 p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: row.accent + '30' }}
              >
                <row.icon className="w-5 h-5" style={{ color: row.accent }} />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{row.label}</p>
                {isEditMode ? (
                  <input
                    type="text"
                    value={row.value}
                    onChange={e => {
                      if (row.isBilingual && typeof team[row.key] === 'object') {
                        updateTeam({
                          [row.key]: { ...team[row.key], [lang]: e.target.value },
                        });
                      } else {
                        updateTeam({ [row.key]: e.target.value });
                      }
                    }}
                    className="w-full text-xs font-bold bg-transparent border-b border-gray-400 outline-none mt-1"
                  />
                ) : (
                  <p className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                    {row.value}
                  </p>
                )}
              </div>
            </div>
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
          <div className="h-8 w-1.5 rounded-full" style={{ backgroundColor: settings.secondaryColor }} />
          <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {t.membersTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.members.map((member, i) => {
            const avatarColors = [settings.primaryColor, settings.secondaryColor, '#FFC8DD', '#95D5B2'];
            const color = avatarColors[i % avatarColors.length];
            const memberRole = getText(member.role, lang);
            const memberBio = getText(member.bio, lang);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={!isEditMode ? { y: -6, scale: 1.02 } : {}}
                className={`rounded-[28px] border p-6 text-center relative transition-all duration-300 flex flex-col justify-between ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-white/20'
                    : 'bg-white/80 border-white shadow-md hover:shadow-2xl'
                } backdrop-blur-sm`}
              >
                {member.isMe && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                    ★ Lead
                  </div>
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
                      {isEditMode ? (
                        <input
                          type="text"
                          value={member.avatar || '👩‍💻'}
                          onChange={e => updateTeamMember(i, { avatar: e.target.value })}
                          className="w-12 text-center text-3xl bg-transparent outline-none"
                        />
                      ) : (
                        member.avatar
                      )}
                    </div>
                  </div>

                  {/* Name */}
                  {isEditMode ? (
                    <input
                      type="text"
                      value={member.name}
                      onChange={e => updateTeamMember(i, { name: e.target.value })}
                      placeholder="Tên thành viên"
                      className="w-full font-extrabold text-base text-center bg-transparent border-b border-gray-400 outline-none mb-1"
                    />
                  ) : (
                    <h3 className={`font-extrabold text-base mb-1 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                      {member.name}
                    </h3>
                  )}

                  {/* Role */}
                  {isEditMode ? (
                    <input
                      type="text"
                      value={memberRole}
                      onChange={e => {
                        const val = e.target.value;
                        updateTeamMember(i, {
                          role: typeof member.role === 'object' ? { ...member.role, [lang]: val } : val,
                        });
                      }}
                      placeholder="Vai trò"
                      className="w-full text-xs font-bold text-center bg-transparent border-b border-gray-400 outline-none mb-2"
                      style={{ color }}
                    />
                  ) : (
                    <p className="text-xs font-bold mb-2.5" style={{ color }}>
                      {memberRole}
                    </p>
                  )}

                  {/* University */}
                  {isEditMode ? (
                    <input
                      type="text"
                      value={member.university}
                      onChange={e => updateTeamMember(i, { university: e.target.value })}
                      placeholder="Trường đại học"
                      className="w-full text-[11px] font-medium text-center bg-transparent border-b border-gray-400 outline-none mb-3"
                    />
                  ) : (
                    <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
                      🎓 {member.university}
                    </p>
                  )}

                  {/* Bio */}
                  {isEditMode ? (
                    <textarea
                      rows={3}
                      value={memberBio}
                      onChange={e => {
                        const val = e.target.value;
                        updateTeamMember(i, {
                          bio: typeof member.bio === 'object' ? { ...member.bio, [lang]: val } : val,
                        });
                      }}
                      placeholder="Mô tả nhiệm vụ"
                      className={`w-full p-2 text-xs rounded-xl border outline-none ${
                        isDark ? 'bg-white/5 border-white/20 text-white' : 'bg-white border-[#E9D5FF] text-[#5B5566]'
                      }`}
                    />
                  ) : (
                    memberBio && (
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                        {memberBio}
                      </p>
                    )
                  )}
                </div>

                {/* Bottom accent indicator */}
                <div
                  className="mt-4 h-1 rounded-full opacity-60 w-16 mx-auto"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Quote */}
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
          {isEditMode ? (
            <textarea
              rows={2}
              value={getText(team.quote, lang)}
              onChange={e => {
                const val = e.target.value;
                updateTeam({
                  quote: typeof team.quote === 'object' ? { ...team.quote, [lang]: val } : val,
                });
              }}
              className="w-full text-center text-sm font-bold bg-transparent border-b border-gray-400 outline-none"
            />
          ) : (
            <p className={`text-base sm:text-lg font-bold italic leading-relaxed ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
              {getText(team.quote, lang)}
            </p>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default Team;
