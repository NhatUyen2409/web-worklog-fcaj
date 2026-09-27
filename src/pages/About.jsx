import { motion } from 'framer-motion';
import { GraduationCap, Target, Briefcase } from 'lucide-react';
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
  <div className="flex items-center gap-3 mb-6">
    <div className="h-8 w-1 rounded-full" style={{ backgroundColor: accent }} />
    <h2 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{title}</h2>
  </div>
);

const About = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].about;

  return (
    <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className={`text-4xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
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
          <div className={`rounded-3xl p-7 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
            <SectionTitle title={t.biography.title} accent="#CDB4DB" isDark={isDark} />
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-lg border-4"
                  style={{
                    background: 'linear-gradient(135deg, #E9D5FF, #D6E8FF)',
                    borderColor: '#CDB4DB60',
                  }}
                >
                  👩‍💻
                </div>
              </div>
              <div>
                <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                  {profileData.name}
                </h3>
                <p className="text-sm font-medium text-[#CDB4DB] mb-3">{profileData.role}</p>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                  {t.biography.text}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionTitle title={t.education.title} accent="#A2D2FF" isDark={isDark} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* University card */}
            <div className={`rounded-3xl p-6 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#A2D2FF]/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#A2D2FF]" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                    {t.education.degree}
                  </h3>
                  <p className="text-[#A2D2FF] text-xs font-medium">{t.education.institution}</p>
                </div>
              </div>
              <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
                📅 {t.education.duration}
              </p>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
                {t.education.focus}
              </p>
            </div>

            {/* Internship card */}
            <div className={`rounded-3xl p-6 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#CDB4DB]/30 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-[#CDB4DB]" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                    {t.education.internship.role}
                  </h3>
                  <p className="text-[#CDB4DB] text-xs font-medium">{t.education.internship.company}</p>
                </div>
              </div>
              <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
                📅 {t.education.internship.duration}
              </p>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
                {t.education.internship.description}
              </p>
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
          <div className={`rounded-3xl p-7 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
            <SectionTitle title={t.careerObjective.title} accent="#FFC8DD" isDark={isDark} />
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FFC8DD]/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#FFC8DD]" />
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                {t.careerObjective.text}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interests + Soft Skills */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Interests */}
          <div className={`rounded-3xl p-6 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
            <SectionTitle title={t.interests.title} accent="#95D5B2" isDark={isDark} />
            <div className="grid grid-cols-2 gap-2">
              {t.interests.items.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-[#F8F5FF] hover:bg-[#F0EBFF] text-[#5B5566]'
                  }`}
                >
                  <span>{icon}</span>
                  <span className="text-xs">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`rounded-3xl p-6 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
            <SectionTitle title={t.softSkills.title} accent="#FFC8DD" isDark={isDark} />
            <div className="grid grid-cols-2 gap-2">
              {t.softSkills.items.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-[#FFF0F5] hover:bg-[#FFE4ED] text-[#5B5566]'
                  }`}
                >
                  <span>{icon}</span>
                  <span className="text-xs">{label}</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
