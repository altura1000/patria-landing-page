import type { CSSProperties } from 'react'
import { useCopy, type Lang } from '../../i18n/LanguageContext'

const OPTIONS: { id: Lang; label: string; name: string }[] = [
  { id: 'es', label: 'ES', name: 'Español' },
  { id: 'he', label: 'עב', name: 'עברית' },
]

interface LangSwitchProps {
  lang?: Lang
  onChange?: (lang: Lang) => void
  style?: CSSProperties
}

/**
 * Look lives in styles/global.css (.lang-switch); the home header refines it on mobile.
 * `dir="ltr"` keeps the order ES · עב in both languages, so the buttons never swap places under the finger.
 */
export default function LangSwitch({ lang = 'es', onChange = () => {}, style }: LangSwitchProps) {
  const { ui } = useCopy()
  return (
    <div className="lang-switch" role="group" aria-label={ui.langGroup} dir="ltr" style={style}>
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          className="lang-switch__btn"
          aria-pressed={lang === o.id}
          aria-label={o.name}
          lang={o.id}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
