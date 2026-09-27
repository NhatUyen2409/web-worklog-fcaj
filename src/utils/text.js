// ============================================================
// TEXT HELPER — Safe resolution of bilingual strings
// ============================================================

export const getText = (val, lang = 'vi') => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    return val[lang] || val.vi || val.en || Object.values(val)[0] || '';
  }
  return String(val);
};

export default getText;
