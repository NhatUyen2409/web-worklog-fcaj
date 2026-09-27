import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Workshop from './pages/Workshop';
import Worklog from './pages/Worklog';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

// Scroll to top automatically upon navigation
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
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Inner app that has access to theme context
const AppInner = () => {
  const { isDark } = useTheme();
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
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-[#120b1e] text-gray-100' : 'bg-[#FFF9FB] text-[#5B5566]'
      }`}
    >
      <ScrollToTopOnRoute />

      {/* ── Scroll Progress Bar at very top ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CDB4DB] via-[#A2D2FF] to-[#FFC8DD] z-[999] origin-left"
        style={{ scaleX }}
      />

      {/* Subtle pastel ambient gradient backdrop */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 50% -10%, #2D1B4E25 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 50% -10%, #E9D5FF30 0%, transparent 70%)',
        }}
      />

      <Navbar />

      <div className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/workshop" element={<PageWrapper><Workshop /></PageWrapper>} />
            <Route path="/worklog" element={<PageWrapper><Worklog /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/certificates" element={<PageWrapper><Certificates /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>

      {/* Floating Back-to-Top Action */}
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

      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
