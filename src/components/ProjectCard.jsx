import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Tag, Github, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { getText } from '../utils/text';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].projects;

  const isCompleted = project.status === 'Completed';

  const title = getText(project.title, lang);
  const subtitle = getText(project.subtitle, lang);
  const shortDesc = getText(project.shortDescription, lang);
  const longDesc = getText(project.longDescription, lang);
  const imageCaption = getText(project.imageCaption, lang);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={`rounded-[28px] border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-white/80 border-white shadow-lg hover:shadow-2xl'
      } backdrop-blur-sm`}
    >
      <div>
        {/* ── Banner Header / Visual ── */}
        <div
          className="relative h-48 flex items-center justify-center overflow-hidden p-6"
          style={{
            background: `linear-gradient(135deg, ${project.badgeColor}35, ${project.badgeColor}15)`,
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2.5 text-center px-4 relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                style={{ backgroundColor: project.badgeColor + '40', border: `1.5px solid ${project.badgeColor}` }}
              >
                <ShieldCheck className="w-8 h-8" style={{ color: project.badgeColor }} />
              </div>
              <p className={`text-xs font-semibold max-w-[280px] leading-tight ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                {imageCaption || title}
              </p>
            </div>
          )}

          {/* Floating gradient circles */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-40 pointer-events-none"
            style={{ backgroundColor: project.badgeColor }}
          />

          {/* Status badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
              isCompleted ? 'bg-[#D8F3DC] text-[#2D6A4F]' : 'bg-[#FFF3D6] text-[#92682C]'
            }`}>
              {isCompleted ? `✓ ${t.statusCompleted}` : `⏳ ${t.statusProgress}`}
            </span>
          </div>

          {/* Project Code */}
          {project.code && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold shadow-sm ${
                isDark ? 'bg-black/50 text-gray-200' : 'bg-white/80 text-[#7C3AED]'
              }`}>
                {project.code}
              </span>
            </div>
          )}
        </div>

        {/* ── Card Body ── */}
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ backgroundColor: project.badgeColor + '25', color: project.badgeColor }}
            >
              {project.category}
            </span>
            <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
              {project.timeline}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className={`text-xl font-extrabold mt-1 mb-1 leading-snug ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
            {title}
          </h3>
          <p className={`text-xs font-medium mb-3.5 ${isDark ? 'text-gray-400' : 'text-[#8A829D]'}`}>
            {subtitle}
          </p>

          {/* Short description */}
          <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
            {shortDesc}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className={`text-xs px-2.5 py-1 rounded-xl font-medium flex items-center gap-1 ${
                    isDark ? 'bg-white/10 text-gray-200' : 'bg-[#F3E8FF] text-[#7C3AED]'
                  }`}
                >
                  <Tag className="w-2.5 h-2.5" />{tech}
                </span>
              ))}
            </div>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-5">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-2.5 text-center transition-colors ${
                    isDark ? 'bg-white/5' : 'bg-[#F8F5FF]'
                  }`}
                >
                  <p className="text-sm font-extrabold text-[#7C3AED] dark:text-[#CDB4DB]">
                    {m.value}
                  </p>
                  <p className={`text-[11px] mt-0.5 leading-tight font-medium ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>
                    {getText(m.label, lang)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Expandable Details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-4"
              >
                <div className={`pt-4 border-t space-y-4 ${isDark ? 'border-white/10' : 'border-[#E9D5FF]/40'}`}>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                    {longDesc}
                  </p>

                  {/* Highlights / Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="space-y-2">
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-[#5B5566]'}`}>
                        {t.keyHighlights}
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.map((f, i) => (
                          <li key={i} className={`text-xs sm:text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
                            <span className="text-[#CDB4DB] font-bold mt-0.5">•</span>
                            <span>{getText(f, lang)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* GitHub Repo Button */}
                  {project.githubUrl && (
                    <div className="pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          isDark
                            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                            : 'bg-white border-[#E9D5FF] text-[#5B5566] hover:bg-[#F3E8FF]'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        {t.githubLink}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Card Footer Action ── */}
      <div className="p-6 pt-0">
        <motion.button
          onClick={() => setExpanded(e => !e)}
          whileTap={{ scale: 0.97 }}
          className={`w-full py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
            isDark ? 'bg-white/10 text-gray-200 hover:bg-white/20' : 'bg-[#F3E8FF] text-[#7C3AED] hover:bg-[#E9D5FF]'
          }`}
        >
          {expanded ? t.readLess : t.readMore}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
