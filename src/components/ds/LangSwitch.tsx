import type { CSSProperties } from 'react'
import type { Lang } from '../../i18n/LanguageContext'

const OPTIONS: { id: Lang; label: string; name: string }[] = [
  { id: 'es', label: 'ES', name: 'Español' },
  { id: 'he', label: 'עב', name: 'עברית' },
]

interface LangSwitchProps {
  lang?: Lang
  onChange?: (lang: Lang) => void
  style?: CSSProperties
}

/** Look lives in styles/global.css (.lang-switch); the home header refines it on mobile. */
export default function LangSwitch({ lang = 'es', onChange = () => {}, style }: LangSwitchProps) {
  return (
    <div className="lang-switch" role="group" aria-label="Idioma" style={style}>
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
