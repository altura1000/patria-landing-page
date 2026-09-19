import type { CSSProperties } from 'react'
import type { Lang } from '../../i18n/LanguageContext'

const OPTIONS: { id: Lang; label: string }[] = [
  { id: 'es', label: 'ES' },
  { id: 'he', label: 'עב' },
]

interface LangSwitchProps {
  lang?: Lang
  onChange?: (lang: Lang) => void
  style?: CSSProperties
}

export default function LangSwitch({ lang = 'es', onChange = () => {}, style }: LangSwitchProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {OPTIONS.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={lang === o.id}
          onClick={() => onChange(o.id)}
          style={{
            padding: '7px 14px',
            border: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-label)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '.08em',
            background: lang === o.id ? 'var(--celeste-700)' : 'transparent',
            color: lang === o.id ? 'var(--cream-50)' : 'var(--text-muted)',
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
