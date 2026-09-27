/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode (controlled by ThemeContext adding 'dark' to <html>)
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#FFF9FB',
          secondary: '#F8F5FF',
          purple: '#CDB4DB',
          blue: '#A2D2FF',
          babyblue: '#BDE0FE',
          pink: '#FFC8DD',
          rose: '#FFAFCC',
          text: '#5B5566',
          muted: '#7E7791',
          mint: '#D8F3E3',
          peach: '#FFE5D9',
          lavender: '#E9D5FF',
        },
        dark: {
          bg: '#120b1e',
          surface: '#1d1130',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
      },
      boxShadow: {
        'pastel-soft': '0 10px 30px -10px rgba(205, 180, 219, 0.25)',
        'pastel-card': '0 8px 32px 0 rgba(205, 180, 219, 0.15)',
        'pastel-hover': '0 16px 40px -10px rgba(162, 210, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(175, 150, 195, 0.12)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
