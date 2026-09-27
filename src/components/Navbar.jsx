import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].nav;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: t.home },
    { to: '/about', label: t.about },
    { to: '/team', label: t.team },
    { to: '/workshop', label: t.workshop },
    { to: '/worklog', label: t.worklog },
    { to: '/projects', label: t.projects },
    { to: '/certificates', label: t.certificates },
    { to: '/contact', label: t.contact },
  ];

  const glassClass = scrolled
    ? isDark
      ? 'bg-[#120b1e]/90 backdrop-blur-xl shadow-lg border-b border-white/10'
      : 'bg-white/85 backdrop-blur-xl shadow-sm border-b border-[#E9D5FF]/50'
    : isDark
      ? 'bg-[#120b1e]/60 backdrop-blur-md border-b border-transparent'
      : 'bg-white/50 backdrop-blur-md border-b border-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${glassClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className={`font-extrabold text-sm sm:text-base tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              Nhật Uyên <span className="text-[#7C3AED] dark:text-[#CDB4DB] font-semibold text-xs px-2 py-0.5 rounded-full bg-[#E9D5FF]/40 ml-1">FCAJ</span>
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#CDB4DB]/40 to-[#A2D2FF]/40 text-[#7C3AED] dark:text-white shadow-sm'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-[#6A6377] hover:text-[#7C3AED] hover:bg-[#F3E8FF]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-200 ${
                isDark ? 'text-gray-200 hover:bg-white/10' : 'text-[#5B5566] hover:bg-[#F3E8FF]'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden border-t overflow-hidden ${
              isDark ? 'bg-[#120b1e]/98 border-white/10' : 'bg-white/98 border-[#E9D5FF]/50'
            } backdrop-blur-2xl`}
          >
            <div className="px-5 py-4 space-y-1.5">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#CDB4DB]/30 to-[#A2D2FF]/30 text-[#7C3AED] dark:text-white shadow-sm'
                        : isDark
                          ? 'text-gray-300 hover:bg-white/10'
                          : 'text-[#6A6377] hover:bg-[#F3E8FF]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
