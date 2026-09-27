import { NavLink } from 'react-router-dom';
import { Github, Mail, Linkedin, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang];

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/team', label: t.nav.team },
    { to: '/workshop', label: t.nav.workshop },
    { to: '/worklog', label: t.nav.worklog },
    { to: '/projects', label: t.nav.projects },
    { to: '/certificates', label: t.nav.certificates },
    { to: '/contact', label: t.nav.contact },
  ];

  const socialLinks = [
    {
      href: 'mailto:uyenpn.fcaj@gmail.com',
      icon: Mail,
      label: 'Email',
      color: '#CDB4DB',
    },
    {
      href: 'https://github.com/nhatuyen-sec',
      icon: Github,
      label: 'GitHub',
      color: '#A2D2FF',
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
      isDark ? 'bg-[#120b1e] border-white/10' : 'bg-white/80 border-[#E9D5FF]/40'
    }`}>
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CDB4DB] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center shadow-md">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
                Phan Nhật Uyên
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
              Information Assurance Student · FPT University<br />
              AWS First Cloud AI Journey 2026
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-4">
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

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={`text-sm py-1 transition-colors duration-200 hover:text-[#9C5FD6] ${
                    isDark ? 'text-gray-400' : 'text-[#7E7791]'
                  }`}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Program Info */}
          <div>
            <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {t.common.program}
            </h4>
            <div className="space-y-2">
              {[
                { label: t.common.university, value: 'FPT University' },
                { label: t.common.major, value: 'Information Assurance' },
                { label: t.common.program, value: 'FCAJ 2026' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{label}</p>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-[#5B5566]'}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${
          isDark ? 'border-white/10' : 'border-[#E9D5FF]/50'
        }`}>
          <p className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>
            {t.footer.copyright.replace('❤️', '')}
            <Heart className="w-3 h-3 text-[#FFC8DD] fill-[#FFC8DD]" />
            {lang === 'vi' ? 'cho FCAJ 2026.' : 'for FCAJ 2026.'}
          </p>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
