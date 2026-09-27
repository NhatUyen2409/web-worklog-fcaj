import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Clock, Heart, ArrowUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../data/translations';
import { profileData } from '../data/profileData';

// ── Single contact link row ───────────────────────────────────
const ContactLink = ({ href, icon: Icon, label, value, color, isDark }) => (
  <motion.a
    href={href || '#'}
    target={href && href !== '#' ? '_blank' : '_self'}
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02, x: 4 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center gap-4 p-5 rounded-[24px] border transition-all duration-200 ${
      isDark ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10' : 'bg-white/80 border-white hover:shadow-lg'
    } backdrop-blur-sm`}
  >
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
      style={{ backgroundColor: color + '25', border: `1.5px solid ${color}50` }}
    >
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div className="min-w-0 flex-1">
      <p className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-[#9C93B0]'}`}>{label}</p>
      <p className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
        {value}
      </p>
    </div>
  </motion.a>
);

// ── Contact Page ──────────────────────────────────────────────
const Contact = () => {
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const t = translations[lang].contact;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border shadow-sm"
          style={{
            background: isDark ? 'rgba(205, 180, 219, 0.15)' : '#F3E8FF',
            borderColor: '#CDB4DB60',
            color: isDark ? '#E9D5FF' : '#7C3AED',
          }}
        >
          <Mail className="w-3.5 h-3.5" />
          Direct Channel
        </span>
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto font-normal ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Availability Card */}
          <div className={`rounded-[28px] p-7 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
            <h2 className={`font-extrabold text-xl mb-5 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {t.contactInfo}
            </h2>
            {/* Avatar + Identity */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E9D5FF]/40">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md border-2"
                style={{
                  background: 'linear-gradient(135deg, #E9D5FF, #D6E8FF)',
                  borderColor: '#CDB4DB',
                }}
              >
                👩‍💻
              </div>
              <div>
                <p className={`font-extrabold text-lg ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{profileData.name}</p>
                <p className="text-xs text-[#7C3AED] dark:text-[#CDB4DB] font-bold">{profileData.role}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#A2D2FF]" />
                  <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-[#7E7791]'}`}>
                    {profileData.location} 🇻🇳
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className={`flex items-start gap-3.5 p-4 rounded-2xl ${isDark ? 'bg-[#D8F3DC]/10' : 'bg-[#D8F3DC]/50'}`}>
              <Heart className="w-5 h-5 text-[#2D6A4F] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-extrabold text-[#2D6A4F]">{t.availability}</p>
                <p className={`text-xs mt-1 font-medium ${isDark ? 'text-gray-300' : 'text-[#52796F]'}`}>
                  <Clock className="w-3 h-3 inline mr-1" />{t.responseTime}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <ContactLink
            href={`mailto:${profileData.contacts.email}`}
            icon={Mail}
            label={t.emailLabel}
            value={profileData.contacts.email}
            color="#CDB4DB"
            isDark={isDark}
          />
          <ContactLink
            href={profileData.contacts.github}
            icon={Github}
            label={t.githubLabel}
            value={profileData.contacts.github.replace('https://', '')}
            color="#A2D2FF"
            isDark={isDark}
          />
          <ContactLink
            href={profileData.contacts.linkedin}
            icon={Linkedin}
            label={t.linkedinLabel}
            value={profileData.contacts.linkedin.replace('https://', '')}
            color="#FFC8DD"
            isDark={isDark}
          />
        </motion.div>

        {/* Right: Interactive Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`rounded-[28px] p-8 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-md'} backdrop-blur-md`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                  placeholder={t.namePlaceholder}
                  className={`w-full px-4 py-3.5 rounded-2xl text-sm border outline-none transition-all focus:ring-2 focus:ring-[#CDB4DB]/50 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#CDB4DB]'
                      : 'bg-[#F8F5FF] border-[#E9D5FF] text-[#5B5566] placeholder-[#B0AAC0] focus:border-[#CDB4DB]'
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                  placeholder={t.emailPlaceholder}
                  className={`w-full px-4 py-3.5 rounded-2xl text-sm border outline-none transition-all focus:ring-2 focus:ring-[#CDB4DB]/50 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#CDB4DB]'
                      : 'bg-[#F8F5FF] border-[#E9D5FF] text-[#5B5566] placeholder-[#B0AAC0] focus:border-[#CDB4DB]'
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label className={`block text-xs font-bold mb-2 ${isDark ? 'text-gray-200' : 'text-[#5B5566]'}`}>
                  {t.messageLabel}
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                  placeholder={t.msgPlaceholder}
                  className={`w-full px-4 py-3.5 rounded-2xl text-sm border outline-none resize-none transition-all focus:ring-2 focus:ring-[#CDB4DB]/50 ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#CDB4DB]'
                      : 'bg-[#F8F5FF] border-[#E9D5FF] text-[#5B5566] placeholder-[#B0AAC0] focus:border-[#CDB4DB]'
                  }`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl font-extrabold text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, #52B788, #2D6A4F)'
                    : 'linear-gradient(135deg, #CDB4DB, #A2D2FF)',
                  boxShadow: '0 8px 24px -6px #CDB4DB80',
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    {t.sentSuccess}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.sendButton}
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <div className="flex justify-center pt-6">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold border shadow-sm transition-all ${
            isDark
              ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              : 'bg-white border-[#E9D5FF] text-[#5B5566] hover:bg-[#F3E8FF]'
          }`}
        >
          <ArrowUp className="w-4 h-4 text-[#7C3AED] dark:text-[#CDB4DB]" />
          {translations[lang].common.backToTop}
        </motion.button>
      </div>
    </main>
  );
};

export default Contact;
