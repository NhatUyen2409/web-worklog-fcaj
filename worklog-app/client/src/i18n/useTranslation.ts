import { useAppStore } from '@/store'
import { translations, Language } from './translations'

export function useTranslation() {
  const { language, setLanguage } = useAppStore()
  const t = translations[language] || translations.vi

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi')
  }

  return { t, language, setLanguage, toggleLanguage }
}

export type { Language }
