import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].projects;

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border shadow-sm"
          style={{
            background: isDark ? 'rgba(205, 180, 219, 0.15)' : '#F3E8FF',
            borderColor: '#CDB4DB60',
            color: isDark ? '#E9D5FF' : '#7C3AED',
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Selected Engineering Works
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto font-normal ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
