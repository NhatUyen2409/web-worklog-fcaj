import { motion } from 'framer-motion';
import { GraduationCap, Target, Briefcase, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { profileData } from '../data/profileData';
import SkillCard from '../components/SkillCard';

// Animation variant for sections
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionTitle = ({ title, accent = '#CDB4DB', isDark }) => (
  <div className="flex items-center gap-3.5 mb-6">
    <div className="h-8 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
    <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{title}</h2>
  </div>
);

const About = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].about;

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* Page Header */}
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
          {profileData.program}
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto font-normal ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Biography */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={`rounded-[28px] p-8 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
            <SectionTitle title={t.biography.title} accent="#CDB4DB" isDark={isDark} />
            <div className="flex flex-col sm:flex-row gap-7 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div
                  className="w-28 h-28 rounded-3xl flex items-center justify-center text-5xl shadow-xl border-4"
                  style={{
                    background: 'linear-gradient(135deg, #E9D5FF, #D6E8FF)',
                    borderColor: '#CDB4DB80',
                  }}
                >
                  👩‍💻
                </div>
              </div>
              <div className="flex-1">
                <h3 className={`font-extrabold text-xl mb-1 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                  {profileData.name}
                </h3>
                <p className="text-sm font-bold text-[#7C3AED] dark:text-[#CDB4DB] mb-3.5">
                  {t.education.degree} · {profileData.university}
                </p>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                  {t.biography.text}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education & Internship */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionTitle title={t.education.title} accent="#A2D2FF" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* University card */}
            <div className={`rounded-[28px] p-7 border flex flex-col justify-between ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#A2D2FF]/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#0284C7] dark:text-[#A2D2FF]" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                      {t.education.degree}
                    </h3>
                    <p className="text-[#0284C7] dark:text-[#A2D2FF] text-xs font-bold mt-0.5">
                      {t.education.institution}
                    </p>
                  </div>
                </div>
                <p className={`text-xs font-bold mb-3 flex items-center gap-1.5 ${isDark ? 'text-gray-400' : 'text-[#8A829D]'}`}>
                  <span>📅</span> {t.education.duration}
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                  {t.education.focus}
                </p>
              </div>
            </div>

            {/* Internship card */}
            <div className={`rounded-[28px] p-7 border flex flex-col justify-between ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#CDB4DB]/30 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-[#7C3AED] dark:text-[#CDB4DB]" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                      {t.education.internship.role}
                    </h3>
                    <p className="text-[#7C3AED] dark:text-[#CDB4DB] text-xs font-bold mt-0.5">
                      {t.education.internship.company}
                    </p>
                  </div>
                </div>
                <p className={`text-xs font-bold mb-3 flex items-center gap-1.5 ${isDark ? 'text-gray-400' : 'text-[#8A829D]'}`}>
                  <span>📅</span> {t.education.internship.duration}
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                  {t.education.internship.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Career Objective */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className={`rounded-[28px] p-8 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
            <SectionTitle title={t.careerObjective.title} accent="#FFC8DD" isDark={isDark} />
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FFC8DD]/35 flex items-center justify-center">
                <Target className="w-7 h-7 text-[#DB2777] dark:text-[#FFAFCC]" />
              </div>
              <p className={`text-sm leading-relaxed font-normal ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                {t.careerObjective.text}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interests & Soft Skills */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Interests */}
          <div className={`rounded-[28px] p-7 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
            <SectionTitle title={t.interests.title} accent="#95D5B2" isDark={isDark} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {t.interests.items.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-colors ${
                    isDark ? 'bg-white/5 hover:bg-white/10 text-gray-200' : 'bg-[#F8F5FF] hover:bg-[#F0EBFF] text-[#5B5566]'
                  }`}
                >
                  <span className="text-base">{icon}</span>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`rounded-[28px] p-7 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
            <SectionTitle title={t.softSkills.title} accent="#FFC8DD" isDark={isDark} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {t.softSkills.items.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-colors ${
                    isDark ? 'bg-white/5 hover:bg-white/10 text-gray-200' : 'bg-[#FFF0F5] hover:bg-[#FFE4ED] text-[#5B5566]'
                  }`}
                >
                  <span className="text-base">{icon}</span>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionTitle title={t.skills.title} accent="#CDB4DB" isDark={isDark} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {profileData.skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
