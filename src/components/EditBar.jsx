import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Edit3, Check, X, Download, Upload, RotateCcw, Save, ShieldAlert, CheckCircle2
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';

const EditBar = () => {
  const {
    isEditMode,
    startEdit,
    saveData,
    cancelEdit,
    autoSave,
    setAutoSave,
    exportJSON,
    importJSON,
    resetData,
    savedNotification,
  } = useData();

  const { lang } = useLanguage();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        importJSON(content);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {savedNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[110] bg-white dark:bg-[#1a1025] border border-[#CDB4DB] shadow-2xl px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold text-[#5B5566] dark:text-white"
          >
            <CheckCircle2 className="w-4 h-4 text-[#52B788]" />
            <span>{savedNotification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Edit Controls Toolbar (Visible when isEditMode is active) */}
      <AnimatePresence>
        {isEditMode && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 dark:bg-[#1a1025]/95 backdrop-blur-xl border border-[#CDB4DB] shadow-2xl rounded-full px-5 py-3 flex items-center gap-3 text-xs"
          >
            <div className="flex items-center gap-1.5 text-[#7C3AED] dark:text-[#CDB4DB] font-bold mr-2 border-r pr-3 border-gray-200 dark:border-white/10">
              <Edit3 className="w-4 h-4 animate-pulse" />
              <span>{lang === 'vi' ? 'Đang Chỉnh Sửa' : 'Editing Mode'}</span>
            </div>

            {/* Auto-save toggle */}
            <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-[#5B5566] dark:text-gray-300 pr-2 border-r border-gray-200 dark:border-white/10">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={e => setAutoSave(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#7C3AED] rounded"
              />
              <span>Auto Save</span>
            </label>

            {/* Export JSON */}
            <button
              onClick={exportJSON}
              title={lang === 'vi' ? 'Xuất tệp JSON' : 'Export JSON file'}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-[#F3E8FF] dark:hover:bg-white/10 transition-colors flex items-center gap-1 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {/* Import JSON */}
            <button
              onClick={() => fileInputRef.current?.click()}
              title={lang === 'vi' ? 'Nhập tệp JSON' : 'Import JSON file'}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-[#F3E8FF] dark:hover:bg-white/10 transition-colors flex items-center gap-1 font-semibold"
            >
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Import</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />

            {/* Reset to defaults */}
            <button
              onClick={resetData}
              title={lang === 'vi' ? 'Khôi phục nội dung gốc' : 'Reset to default content'}
              className="p-2 rounded-xl text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-colors flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            {/* Cancel Button */}
            <button
              onClick={cancelEdit}
              className="px-3.5 py-1.5 rounded-full font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center gap-1 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Hủy' : 'Cancel'}</span>
            </button>

            {/* Save Button */}
            <button
              onClick={saveData}
              className="px-5 py-1.5 rounded-full font-bold text-white bg-gradient-to-r from-[#CDB4DB] to-[#A2D2FF] hover:opacity-90 shadow-md flex items-center gap-1.5 transition-transform hover:scale-105"
            >
              <Check className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Lưu' : 'Save'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EditBar;
