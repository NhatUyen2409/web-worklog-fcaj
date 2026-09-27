import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, RotateCcw, Palette, Type, Layout, Navigation, SunMoon, Sliders, Check
} from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext';

const PRESET_COLORS = [
  '#CDB4DB', '#E9D5FF', '#A2D2FF', '#BDE0FE',
  '#FFC8DD', '#FFAFCC', '#D8F3E3', '#95D5B2',
  '#5B5566', '#FFF9FB', '#120b1e', '#2D1B4E'
];

const FONTS = [
  'Plus Jakarta Sans',
  'Outfit',
  'Inter',
  'Poppins',
  'Roboto',
];

const WebsiteSettingsDrawer = () => {
  const { settings, updateSetting, resetSettings, isOpen, closeSettings } = useSettings();
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSettings}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        />

        {/* Drawer panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          className="relative w-full max-w-md bg-white dark:bg-[#181024] h-full shadow-2xl flex flex-col z-10 border-l border-[#E9D5FF]/40 dark:border-white/10"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E9D5FF]/40 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#CDB4DB] to-[#A2D2FF] flex items-center justify-center shadow-sm">
                <Sliders className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-[#5B5566] dark:text-white">
                  Website Settings
                </h3>
                <p className="text-[11px] font-medium text-[#9C93B0] dark:text-gray-400">
                  Tùy chỉnh giao diện trực tiếp không cần code
                </p>
              </div>
            </div>
            <button
              onClick={closeSettings}
              className="p-2 rounded-xl text-[#5B5566] dark:text-gray-300 hover:bg-[#F3E8FF] dark:hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content with scroll */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 text-sm">

            {/* 1. APPEARANCE */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#7C3AED] dark:text-[#CDB4DB]">
                <Palette className="w-4 h-4" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Appearance (Màu sắc)</h4>
              </div>

              <div className="space-y-4">
                {/* Primary Color */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Primary Accent</span>
                    <span className="text-xs font-mono font-bold">{settings.primaryColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.primaryColor}
                      onChange={e => updateSetting('primaryColor', e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700 bg-transparent"
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {PRESET_COLORS.slice(0, 6).map(color => (
                        <button
                          key={color}
                          onClick={() => updateSetting('primaryColor', color)}
                          className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Secondary Color */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Secondary Accent</span>
                    <span className="text-xs font-mono font-bold">{settings.secondaryColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.secondaryColor}
                      onChange={e => updateSetting('secondaryColor', e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700 bg-transparent"
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {PRESET_COLORS.slice(2, 8).map(color => (
                        <button
                          key={color}
                          onClick={() => updateSetting('secondaryColor', color)}
                          className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background Color */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Background Color</span>
                    <span className="text-xs font-mono font-bold">{settings.backgroundColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.backgroundColor}
                      onChange={e => updateSetting('backgroundColor', e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700 bg-transparent"
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {['#FFF9FB', '#F8F5FF', '#F0F7FF', '#F4FBF7', '#120b1e'].map(color => (
                        <button
                          key={color}
                          onClick={() => updateSetting('backgroundColor', color)}
                          className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Color */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Text Color</span>
                    <span className="text-xs font-mono font-bold">{settings.textColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.textColor}
                      onChange={e => updateSetting('textColor', e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700 bg-transparent"
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {['#5B5566', '#2D2A32', '#3F3B47', '#1F1D24'].map(color => (
                        <button
                          key={color}
                          onClick={() => updateSetting('textColor', color)}
                          className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. TYPOGRAPHY */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#7C3AED] dark:text-[#CDB4DB]">
                <Type className="w-4 h-4" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Typography (Font chữ)</h4>
              </div>

              <div className="space-y-4">
                {/* Font selector */}
                <div>
                  <label className="block text-xs font-semibold mb-1 text-[#5B5566] dark:text-gray-300">Font Family</label>
                  <select
                    value={settings.fontFamily}
                    onChange={e => updateSetting('fontFamily', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 font-medium outline-none text-xs"
                  >
                    {FONTS.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                {/* Heading size */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#5B5566] dark:text-gray-300">Heading Size</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['normal', 'large', 'xlarge'].map(sz => (
                      <button
                        key={sz}
                        onClick={() => updateSetting('headingSize', sz)}
                        className={`py-1.5 rounded-xl text-xs font-bold border transition-colors capitalize ${
                          settings.headingSize === sz
                            ? 'bg-[#E9D5FF] text-[#7C3AED] border-[#CDB4DB]'
                            : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Body size */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#5B5566] dark:text-gray-300">Body Size</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['small', 'normal', 'large'].map(sz => (
                      <button
                        key={sz}
                        onClick={() => updateSetting('bodySize', sz)}
                        className={`py-1.5 rounded-xl text-xs font-bold border transition-colors capitalize ${
                          settings.bodySize === sz
                            ? 'bg-[#A2D2FF]/40 text-[#0284C7] dark:text-white border-[#A2D2FF]'
                            : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. LAYOUT */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#7C3AED] dark:text-[#CDB4DB]">
                <Layout className="w-4 h-4" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Layout (Bố cục)</h4>
              </div>

              <div className="space-y-4">
                {/* Border Radius */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Corner Radius</span>
                    <span className="text-xs font-bold">{settings.borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="40"
                    step="2"
                    value={settings.borderRadius}
                    onChange={e => updateSetting('borderRadius', Number(e.target.value))}
                    className="w-full accent-[#7C3AED]"
                  />
                </div>

                {/* Card Shadow Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Card Soft Shadow</span>
                  <input
                    type="checkbox"
                    checked={settings.cardShadow}
                    onChange={e => updateSetting('cardShadow', e.target.checked)}
                    className="w-4 h-4 accent-[#7C3AED] rounded"
                  />
                </div>

                {/* Glass Intensity */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Glassmorphism Intensity</span>
                    <span className="text-xs font-bold">{settings.glassIntensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={settings.glassIntensity}
                    onChange={e => updateSetting('glassIntensity', Number(e.target.value))}
                    className="w-full accent-[#7C3AED]"
                  />
                </div>

                {/* Page Width */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-[#5B5566] dark:text-gray-300">Page Container Width</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['normal', 'wide'].map(w => (
                      <button
                        key={w}
                        onClick={() => updateSetting('pageWidth', w)}
                        className={`py-1.5 rounded-xl text-xs font-bold border transition-colors capitalize ${
                          settings.pageWidth === w
                            ? 'bg-[#FFC8DD]/40 text-[#DB2777] dark:text-white border-[#FFC8DD]'
                            : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        {w === 'normal' ? 'Normal (1080px)' : 'Wide (1380px)'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. NAVIGATION */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#7C3AED] dark:text-[#CDB4DB]">
                <Navigation className="w-4 h-4" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Navigation (Thanh điều hướng)</h4>
              </div>

              <div className="space-y-4">
                {/* Navbar Transparency */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Navbar Opacity</span>
                    <span className="text-xs font-bold">{settings.navbarTransparency}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    step="5"
                    value={settings.navbarTransparency}
                    onChange={e => updateSetting('navbarTransparency', Number(e.target.value))}
                    className="w-full accent-[#7C3AED]"
                  />
                </div>

                {/* Sticky Navbar Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#5B5566] dark:text-gray-300">Sticky Navbar</span>
                  <input
                    type="checkbox"
                    checked={settings.stickyNavbar}
                    onChange={e => updateSetting('stickyNavbar', e.target.checked)}
                    className="w-4 h-4 accent-[#7C3AED] rounded"
                  />
                </div>
              </div>
            </div>

            {/* 5. THEME */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#7C3AED] dark:text-[#CDB4DB]">
                <SunMoon className="w-4 h-4" />
                <h4 className="font-bold text-xs uppercase tracking-wider">Theme (Chế độ màu)</h4>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['light', 'dark', 'auto'].map(m => (
                  <button
                    key={m}
                    onClick={() => updateSetting('theme', m)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-colors capitalize flex items-center justify-center gap-1.5 ${
                      settings.theme === m
                        ? 'bg-[#CDB4DB]/40 text-[#7C3AED] dark:text-white border-[#CDB4DB]'
                        : 'bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {settings.theme === m && <Check className="w-3.5 h-3.5" />}
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* 6. RESET BUTTON */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/10">
              <button
                onClick={resetSettings}
                className="w-full py-3 rounded-2xl border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Restore Default Design (Khôi phục thiết kế gốc)
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WebsiteSettingsDrawer;
