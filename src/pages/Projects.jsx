import { motion } from 'framer-motion';
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Edit hint */}
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.5 }}
        className={`text-center text-xs mt-10 ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}
      >
        ✏️ Điền thông tin dự án tại <code className="font-mono">src/data/projectsData.js</code>
      </motion.p>
    </main>
  );
};

export default Projects;
