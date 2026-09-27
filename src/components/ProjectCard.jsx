import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Tag, ImageOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].projects;

  const isCompleted = project.status === 'Completed';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-lg hover:shadow-xl'
      }`}
    >
      {/* ── Image / placeholder ── */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.badgeColor}28, ${project.badgeColor}10)` }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center px-4">
            <ImageOff className="w-10 h-10 opacity-25" style={{ color: project.badgeColor }} />
            <p className={`text-xs max-w-[200px] leading-tight ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}>
              {/* ← Add your image to /public/projects/ and set the path in projectsData.js */}
              {project.imageCaption || '[Thêm ảnh vào /public/projects/ và cập nhật projectsData.js]'}
            </p>
          </div>
        )}
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
            isCompleted ? 'bg-[#D8F3DC] text-[#2D6A4F]' : 'bg-[#FFF3D6] text-[#92682C]'
          }`}>
            {isCompleted ? `✓ ${t.statusCompleted}` : `⏳ ${t.statusProgress}`}
          </span>
        </div>
        {/* Code tag */}
        {project.code && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-0.5 rounded-lg text-xs font-mono ${
              isDark ? 'bg-black/40 text-gray-400' : 'bg-white/70 text-[#9C93B0]'
            }`}>{project.code}</span>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="p-6">
        {/* Category */}
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ backgroundColor: project.badgeColor + '25', color: project.badgeColor }}
        >
          {project.category || '[Danh mục]'}
        </span>

        <h3 className={`text-lg font-bold mt-2 mb-0.5 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {project.title || '[Tên dự án]'}
        </h3>
        <p className={`text-xs mb-3 ${isDark ? 'text-gray-500' : 'text-[#C5BDD8]'}`}>
          {project.subtitle || '[Mô tả ngắn 1 dòng]'}
        </p>
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {project.shortDescription || '[Điền mô tả ngắn vào projectsData.js]'}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map(tech => (
              <span key={tech}
                className={`text-xs px-2.5 py-1 rounded-xl font-medium flex items-center gap-1 ${
                  isDark ? 'bg-white/10 text-gray-300' : 'bg-[#F3E8FF] text-[#7C3AED]'
                }`}
              >
                <Tag className="w-2.5 h-2.5" />{tech}
              </span>
            ))}
          </div>
        ) : (
          <p className={`text-xs italic mb-4 ${isDark ? 'text-gray-600' : 'text-[#C5BDD8]'}`}>
            [Thêm công nghệ vào projectsData.js]
          </p>
        )}

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {project.metrics.map(({ label, value }) => (
              <div key={label} className={`rounded-2xl p-2.5 text-center ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
                <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{value}</p>
                <p className={`text-xs mt-0.5 leading-tight ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Read More / Collapse */}
        <motion.button
          onClick={() => setExpanded(e => !e)}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            isDark ? 'bg-white/10 text-gray-300 hover:bg-white/20' : 'bg-[#F3E8FF] text-[#7C3AED] hover:bg-[#E9D5FF]'
          }`}
        >
          {expanded ? t.readLess : t.readMore}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.button>

        {/* Expanded detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                  {project.longDescription || '[Điền mô tả chi tiết vào projectsData.js → longDescription]'}
                </p>
                {project.features && project.features.length > 0 && (
                  <ul className="space-y-1.5">
                    {project.features.map((f, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                        <span className="text-[#CDB4DB] mt-0.5">•</span>{f}
                      </li>
                    ))}
                  </ul>
                )}
                {project.timeline && (
                  <div className={`text-xs px-3 py-2 rounded-xl ${isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'}`}>
                    <span className={isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}>{t.timeline}: </span>
                    <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>{project.timeline}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
