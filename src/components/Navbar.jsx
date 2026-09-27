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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      ? 'bg-[#1a1025]/80 backdrop-blur-xl shadow-lg border-b border-white/10'
      : 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-[#E9D5FF]/40'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${glassClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className={`font-bold text-sm tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              Nhật Uyên <span className="text-[#CDB4DB] font-light">FCAJ</span>
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
                  `px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E9D5FF] text-[#7C3AED]'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-[#5B5566] hover:text-[#7C3AED] hover:bg-[#F3E8FF]'
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
                isDark ? 'text-gray-300 hover:bg-white/10' : 'text-[#5B5566] hover:bg-[#F3E8FF]'
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
            transition={{ duration: 0.2 }}
            className={`lg:hidden border-t overflow-hidden ${
              isDark ? 'bg-[#1a1025]/95 border-white/10' : 'bg-white/95 border-[#E9D5FF]/40'
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#E9D5FF] text-[#7C3AED]'
                        : isDark
                          ? 'text-gray-300 hover:bg-white/10'
                          : 'text-[#5B5566] hover:bg-[#F3E8FF]'
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
