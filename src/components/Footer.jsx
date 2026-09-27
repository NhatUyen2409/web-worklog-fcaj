import { NavLink } from 'react-router-dom';
import { Github, Mail, Linkedin, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { useData } from '../contexts/DataContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { settings } = useSettings();
  const { data } = useData();
  const t = translations[lang];

  // ONLY 5 pages
  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/team', label: t.nav.team },
    { to: '/workshop', label: t.nav.workshop },
    { to: '/worklog', label: t.nav.worklog },
    { to: '/projects', label: t.nav.projects },
  ];

  const socialLinks = [
    {
      href: 'mailto:nhatuyen.sec@gmail.com',
      icon: Mail,
      label: 'Email',
      color: settings.primaryColor,
    },
    {
      href: 'https://github.com/NhatUyen2409',
      icon: Github,
      label: 'GitHub',
      color: settings.secondaryColor,
    },
    {
      href: 'https://linkedin.com/in/nhatuyen-phan',
      icon: Linkedin,
      label: 'LinkedIn',
      color: '#FFC8DD',
    },
  ];

  return (
    <footer className={`relative mt-auto border-t transition-colors duration-300 ${
      isDark ? 'bg-[#120b1e]/90 border-white/10' : 'bg-white/80 border-[#E9D5FF]/50'
    } backdrop-blur-md`}>
      {/* Decorative top gradient rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: `linear-gradient(to right, transparent, ${settings.primaryColor}, transparent)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand & Introduction */}
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})`
                }}
              >
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className={`font-extrabold text-base ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                {data.home.name}
              </span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#6A6377]'}`}>
              {t.footer.tagline}
            </p>
            {/* Social Icons */}
            <div className="flex gap-2.5 mt-5">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${
                    isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-[#F3E8FF] hover:bg-[#E9D5FF]'
                  }`}
                  style={{ color }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (5 pages only) */}
          <div>
            <h4 className={`font-bold text-xs uppercase tracking-wider mb-4 ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
              {t.footer.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={`text-xs sm:text-sm py-1 font-medium transition-colors duration-200 hover:text-[#7C3AED] ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-[#7E7791]'
                  }`}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Academic Info */}
          <div>
            <h4 className={`font-bold text-xs uppercase tracking-wider mb-4 ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
              {t.footer.academicInfo}
            </h4>
            <div className="space-y-2.5">
              {[
                { label: t.common.university, value: data.home.university },
                { label: t.common.major, value: data.home.major },
                { label: t.common.program, value: data.home.program },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className={`text-[11px] font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{label}</p>
                  <p className={`text-xs sm:text-sm font-bold ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isDark ? 'border-white/10' : 'border-[#E9D5FF]/50'
        }`}>
          <p className={`text-xs flex items-center gap-1.5 font-medium ${isDark ? 'text-gray-400' : 'text-[#8A829D]'}`}>
            {t.footer.copyright.replace('❤️', '')}
            <Heart className="w-3.5 h-3.5 text-[#FFC8DD] fill-[#FFC8DD]" />
            <span>{data.home.name}</span>
          </p>
          <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#8A829D]'}`}>
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
