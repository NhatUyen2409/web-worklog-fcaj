import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.05 }}
      className={`p-2 rounded-xl transition-colors duration-200 ${
        isDark
          ? 'bg-white/10 text-yellow-300 hover:bg-white/20'
          : 'bg-[#F3E8FF] text-[#7C3AED] hover:bg-[#E9D5FF]'
      }`}
      aria-label="Toggle dark/light mode"
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
