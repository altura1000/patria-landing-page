import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'he'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * Holds the ES/HE selection for the whole app.
 *
 * Spanish is the only language with content. As in the approved design, the ES/HE
 * control is visual only for now — choosing HE highlights the button but does not
 * swap copy or flip direction. Hebrew translations / RTL are a later step.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
