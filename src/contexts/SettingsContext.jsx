import { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_SETTINGS = {
  // Appearance
  primaryColor: '#CDB4DB',
  secondaryColor: '#A2D2FF',
  backgroundColor: '#FFF9FB',
  textColor: '#5B5566',
  
  // Typography
  fontFamily: 'Plus Jakarta Sans',
  headingSize: 'normal', // 'normal' | 'large' | 'xlarge'
  bodySize: 'normal',    // 'small' | 'normal' | 'large'
  
  // Layout
  borderRadius: 28,      // 12 to 40
  cardShadow: true,
  glassIntensity: 80,    // 20 to 100
  pageWidth: 'normal',   // 'normal' (max-w-5xl) | 'wide' (max-w-7xl)
  
  // Navigation
  navbarTransparency: 85,// 30 to 100
  stickyNavbar: true,
  
  // Theme
  theme: 'light',        // 'light' | 'dark' | 'auto'
};

const SettingsContext = createContext(null);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('fcaj_website_settings');
      if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {
      console.error('Failed to load settings:', e);
    }
    return DEFAULT_SETTINGS;
  });

  const [isOpen, setIsOpen] = useState(false);

  // Apply settings to DOM whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('fcaj_website_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }

    const root = document.documentElement;

    // Theme resolution
    let effectiveTheme = settings.theme;
    if (settings.theme === 'auto') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply CSS variables
    root.style.setProperty('--color-primary', settings.primaryColor);
    root.style.setProperty('--color-secondary', settings.secondaryColor);
    root.style.setProperty('--color-bg-custom', effectiveTheme === 'dark' ? '#120b1e' : settings.backgroundColor);
    root.style.setProperty('--color-text-custom', effectiveTheme === 'dark' ? '#f3f0fb' : settings.textColor);
    root.style.setProperty('--app-font-family', `"${settings.fontFamily}", sans-serif`);
    root.style.setProperty('--card-radius', `${settings.borderRadius}px`);
    root.style.setProperty('--card-shadow', settings.cardShadow ? '0 10px 30px -10px rgba(205, 180, 219, 0.25)' : 'none');
    root.style.setProperty('--glass-blur', `${Math.round(settings.glassIntensity * 0.2)}px`);
    root.style.setProperty('--glass-opacity', (settings.glassIntensity / 100).toFixed(2));
    root.style.setProperty('--nav-opacity', (settings.navbarTransparency / 100).toFixed(2));
    root.style.setProperty('--page-max-width', settings.pageWidth === 'wide' ? '1380px' : '1080px');

    // Font scales
    const headingScales = { normal: '1', large: '1.15', xlarge: '1.3' };
    const bodyScales = { small: '0.9', normal: '1', large: '1.12' };
    root.style.setProperty('--heading-scale', headingScales[settings.headingSize] || '1');
    root.style.setProperty('--body-scale', bodyScales[settings.bodySize] || '1');

  }, [settings]);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSetting,
        resetSettings,
        isOpen,
        openSettings: () => setIsOpen(true),
        closeSettings: () => setIsOpen(false),
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
};
