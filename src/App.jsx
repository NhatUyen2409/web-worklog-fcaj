import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { SettingsProvider, useSettings } from './contexts/SettingsContext';
import { DataProvider } from './contexts/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EditBar from './components/EditBar';
import WebsiteSettingsDrawer from './components/WebsiteSettingsDrawer';
import Home from './pages/Home';
import Team from './pages/Team';
import Workshop from './pages/Workshop';
import Worklog from './pages/Worklog';
import Projects from './pages/Projects';

// Reset scroll position on route change
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Inner app
const AppInner = () => {
  const { isDark } = useTheme();
  const { settings } = useSettings();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerStyle = {
    fontFamily: `var(--app-font-family, '"Plus Jakarta Sans", sans-serif')`,
  };

  return (
    <div
      style={containerStyle}
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-[#120b1e] text-gray-100' : 'bg-[#FFF9FB] text-[#5B5566]'
      }`}
    >
      <ScrollToTopOnRoute />

      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[999] origin-left"
        style={{
          scaleX,
          background: `linear-gradient(to right, ${settings.primaryColor}, ${settings.secondaryColor}, #FFC8DD)`,
        }}
      />

      {/* Ambient gradient background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: isDark
            ? `radial-gradient(ellipse 80% 60% at 50% -10%, ${settings.primaryColor}15 0%, transparent 70%)`
            : `radial-gradient(ellipse 80% 60% at 50% -10%, ${settings.primaryColor}25 0%, transparent 70%)`,
        }}
      />

      <Navbar />

      {/* Main Pages Container (Only 5 Pages) */}
      <div className="flex-1 relative z-10 w-full" style={{ maxWidth: 'var(--page-max-width, 1080px)', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/workshop" element={<PageWrapper><Workshop /></PageWrapper>} />
            <Route path="/worklog" element={<PageWrapper><Worklog /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>

      {/* Floating Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-xl border transition-colors ${
              isDark
                ? 'bg-[#1a1025]/90 border-white/20 text-[#E9D5FF] hover:bg-[#251736]'
                : 'bg-white/90 border-[#E9D5FF] text-[#7C3AED] hover:bg-[#F8F2FF]'
            } backdrop-blur-md`}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Edit Mode Toolbar */}
      <EditBar />

      {/* Website Settings Drawer */}
      <WebsiteSettingsDrawer />

      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <SettingsProvider>
      <ThemeProvider>
        <LanguageProvider>
          <DataProvider>
            <AppInner />
          </DataProvider>
        </LanguageProvider>
      </ThemeProvider>
    </SettingsProvider>
  </BrowserRouter>
);

export default App;
