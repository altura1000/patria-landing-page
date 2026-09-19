import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from 'react'
import { COPY, FLAVOUR_HE, type Copy, type Lang } from './translations'
import type { Flavour } from '../data/flavours'

export type { Lang }

/** Writing direction of each language; applied to <html dir>. */
const DIRECTION: Record<Lang, 'ltr' | 'rtl'> = { es: 'ltr', he: 'rtl' }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * Holds the ES/HE selection for the whole app and mirrors it onto <html lang dir>.
 *
 * Spanish (the default) is `lang="es" dir="ltr"`, exactly what index.html ships.
 * Hebrew is `lang="he" dir="rtl"`: the page mirrors through CSS logical properties, plus the
 * `[dir="rtl"]` overrides in styles/rtl.css. All copy comes from i18n/translations.ts via useCopy().
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  // Layout effect: <html dir> flips before the browser paints the new copy, so there is no
  // frame with Hebrew text laid out left-to-right.
  useLayoutEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = DIRECTION[lang]
  }, [lang])
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}

/** The copy dictionary for the active language. */
export function useCopy(): Copy {
  return COPY[useLanguage().lang]
}

/** A flavour with its display name/description in `lang` (id, image, dots unchanged). */
export function localizeFlavour(flavour: Flavour, lang: Lang): Flavour {
  return lang === 'he' && FLAVOUR_HE[flavour.id] ? { ...flavour, ...FLAVOUR_HE[flavour.id] } : flavour
}
