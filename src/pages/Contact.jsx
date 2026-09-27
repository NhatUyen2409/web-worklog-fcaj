import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Clock, Heart } from 'lucide-react';
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
    whileHover={{ scale: 1.03, x: 4 }}
    whileTap={{ scale: 0.97 }}
    onClick={e => (!href || href === '#') && e.preventDefault()}
    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${
      isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/80 border-white hover:shadow-md'
    }`}
  >
    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
         style={{ backgroundColor: color + '25' }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
    <div>
      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-[#B0AAC0]'}`}>{label}</p>
      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
        {value || <span className="italic opacity-40">[chưa điền — profileData.js]</span>}
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
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="text-center mb-12"
      >
        <h1 className={`text-4xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
          {t.pageTitle}
        </h1>
        <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
          {t.pageSubtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Card with name + availability */}
          <div className={`rounded-3xl p-6 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
            <h2 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>
              {t.contactInfo}
            </h2>
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#E9D5FF]/30">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                   style={{ background: 'linear-gradient(135deg, #E9D5FF, #D6E8FF)' }}>
                👩‍💻
              </div>
              <div>
                <p className={`font-bold ${isDark ? 'text-white' : 'text-[#5B5566]'}`}>{profileData.name}</p>
                <p className="text-xs text-[#CDB4DB] font-medium">{profileData.role}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-[#A2D2FF]" />
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
                    {profileData.location} 🇻🇳
                  </span>
                </div>
              </div>
            </div>
            {/* Availability */}
            <div className={`flex items-start gap-3 p-3 rounded-2xl ${isDark ? 'bg-[#D8F3DC]/10' : 'bg-[#D8F3DC]/40'}`}>
              <Heart className="w-4 h-4 text-[#52B788] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#52B788]">{t.availability}</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-[#7E7791]'}`}>
                  <Clock className="w-3 h-3 inline mr-1" />{t.responseTime}
                </p>
              </div>
            </div>
          </div>

          {/* Social links — values come from profileData.js */}
          <ContactLink
            href={`mailto:${profileData.contacts.email}`}
            icon={Mail} label={t.emailLabel}
            value={profileData.contacts.email} color="#CDB4DB" isDark={isDark}
          />
          <ContactLink
            href={profileData.contacts.github}
            icon={Github} label={t.githubLabel}
            value={profileData.contacts.github?.replace('https://', '') || null}
            color="#A2D2FF" isDark={isDark}
          />
          <ContactLink
            href={profileData.contacts.linkedin}
            icon={Linkedin} label={t.linkedinLabel}
            value={profileData.contacts.linkedin?.replace('https://', '') || null}
            color="#FFC8DD" isDark={isDark}
          />
        </motion.div>

        {/* Right: contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className={`rounded-3xl p-7 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-300' : 'text-[#5B5566]'}`}>
                  {t.nameLabel}
                </label>
                <input type="text" required value={form.name}
                  onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                  placeholder={t.namePlaceholder}
                  className={`w-full px-4 py-3 rounded-2xl text-sm border outline-none transition-all focus:ring-2 focus:ring-[#CDB4DB]/50 ${
                    isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-[#CDB4DB]/50'
                           : 'bg-[#F8F5FF] border-[#E9D5FF] text-[#5B5566] placeholder-[#C5BDD8] focus:border-[#CDB4DB]'
                  }`}
                />
              </div>
              {/* Email */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-300' : 'text-[#5B5566]'}`}>
                  {t.emailLabel}
                </label>
                <input type="email" required value={form.email}
                  onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                  placeholder={t.emailPlaceholder}
                  className={`w-full px-4 py-3 rounded-2xl text-sm border outline-none transition-all focus:ring-2 focus:ring-[#CDB4DB]/50 ${
                    isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-[#CDB4DB]/50'
                           : 'bg-[#F8F5FF] border-[#E9D5FF] text-[#5B5566] placeholder-[#C5BDD8] focus:border-[#CDB4DB]'
                  }`}
                />
              </div>
              {/* Message */}
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-300' : 'text-[#5B5566]'}`}>
                  {t.messageLabel}
                </label>
                <textarea rows={5} required value={form.message}
                  onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                  placeholder={t.msgPlaceholder}
                  className={`w-full px-4 py-3 rounded-2xl text-sm border outline-none resize-none transition-all focus:ring-2 focus:ring-[#CDB4DB]/50 ${
                    isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-[#CDB4DB]/50'
                           : 'bg-[#F8F5FF] border-[#E9D5FF] text-[#5B5566] placeholder-[#C5BDD8] focus:border-[#CDB4DB]'
                  }`}
                />
              </div>
              {/* Submit */}
              <motion.button type="submit"
                whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2"
                style={{
                  background: sent ? 'linear-gradient(135deg,#95D5B2,#52B788)'
                                   : 'linear-gradient(135deg,#CDB4DB,#A2D2FF)',
                  boxShadow: '0 8px 24px -6px #CDB4DB60',
                }}
              >
                {sent ? <>✓ {t.sentSuccess}</> : <><Send className="w-4 h-4" />{t.sendButton}</>}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;
