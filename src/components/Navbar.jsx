import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Settings, Edit3, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { useData } from '../contexts/DataContext';
import { translations } from '../data/translations';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const { settings, openSettings } = useSettings();
  const { isEditMode, startEdit, saveData } = useData();
  const t = translations[lang].nav;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location]);

  // Keep ONLY these 5 pages: Home, Team, Workshop, Worklog, Projects
  const navLinks = [
    { to: '/', label: t.home },
    { to: '/team', label: t.team },
    { to: '/workshop', label: t.workshop },
    { to: '/worklog', label: t.worklog },
    { to: '/projects', label: t.projects },
  ];

  const stickyClass = settings.stickyNavbar ? 'fixed top-0 left-0 right-0 z-50' : 'relative z-50';

  const glassStyle = {
    backgroundColor: scrolled
      ? isDark
        ? `rgba(18, 11, 30, ${settings.navbarTransparency / 100})`
        : `rgba(255, 255, 255, ${settings.navbarTransparency / 100})`
      : isDark
      ? `rgba(18, 11, 30, ${Math.max(0.3, settings.navbarTransparency / 160)})`
      : `rgba(255, 255, 255, ${Math.max(0.3, settings.navbarTransparency / 160)})`,
    backdropFilter: `blur(${Math.round(settings.glassIntensity * 0.2)}px)`,
    WebkitBackdropFilter: `blur(${Math.round(settings.glassIntensity * 0.2)}px)`,
  };

  return (
    <nav
      className={`${stickyClass} transition-all duration-300 border-b ${
        scrolled
          ? isDark
            ? 'border-white/10 shadow-lg'
            : 'border-[#E9D5FF]/50 shadow-sm'
          : 'border-transparent'
      }`}
      style={glassStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200"
              style={{
                background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})`
              }}
            >
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className={`font-extrabold text-sm sm:text-base tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              Nhật Uyên <span className="text-xs px-2 py-0.5 rounded-full font-semibold ml-1" style={{ backgroundColor: `${settings.primaryColor}30`, color: settings.primaryColor }}>FCAJ</span>
            </span>
          </NavLink>

          {/* Desktop Nav Links (Only 5 allowed pages) */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'shadow-sm text-white'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-[#6A6377] hover:text-[#7C3AED] hover:bg-[#F3E8FF]'
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})` }
                    : {}
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Edit Mode Toggle Button */}
            <button
              onClick={() => (isEditMode ? saveData() : startEdit())}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                isEditMode
                  ? 'bg-amber-400 text-amber-950 ring-2 ring-amber-300 animate-pulse'
                  : isDark
                  ? 'bg-white/10 text-gray-200 hover:bg-white/20'
                  : 'bg-[#F3E8FF] text-[#7C3AED] hover:bg-[#E9D5FF]'
              }`}
              title={isEditMode ? 'Lưu chỉnh sửa / Save changes' : 'Chỉnh sửa trực tiếp / Enable live edit'}
            >
              {isEditMode ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{lang === 'vi' ? 'Lưu' : 'Save'}</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{lang === 'vi' ? 'Chỉnh sửa' : 'Edit'}</span>
                </>
              )}
            </button>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Settings Gear Button (Opens Website Settings Drawer) */}
            <button
              onClick={openSettings}
              className={`p-2 rounded-xl transition-all duration-200 hover:rotate-45 ${
                isDark ? 'text-gray-300 hover:bg-white/10' : 'text-[#5B5566] hover:bg-[#F3E8FF]'
              }`}
              title="Website Settings (Cài đặt giao diện)"
              aria-label="Website Settings"
            >
              <Settings className="w-5 h-5 text-[#7C3AED] dark:text-[#CDB4DB]" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${
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
            className={`md:hidden border-t overflow-hidden ${
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
                        ? 'text-white shadow-sm'
                        : isDark
                          ? 'text-gray-300 hover:bg-white/10'
                          : 'text-[#6A6377] hover:bg-[#F3E8FF]'
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? { background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})` }
                      : {}
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
