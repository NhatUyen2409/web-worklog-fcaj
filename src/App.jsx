import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

// Inner app that has access to theme context
const AppInner = () => {
  const { isDark } = useTheme();
  const location = useLocation();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-[#120b1e] text-gray-100' : 'bg-[#FFF9FB] text-[#5B5566]'
      }`}
    >
      {/* Subtle pastel gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 50% -10%, #2D1B4E18 0%, transparent 60%)'
            : 'radial-gradient(ellipse 80% 60% at 50% -10%, #E9D5FF25 0%, transparent 60%)',
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
