import { Link } from 'react-router-dom'
import LangSwitch from '../ds/LangSwitch'
import { useCopy, useLanguage } from '../../i18n/LanguageContext'

/** Top bar of /sabores: back arrow to the homepage, wordmark, ES/HE control. */
export default function SaboresBar() {
  const { lang, setLang } = useLanguage()
  const { ui, sabores } = useCopy()
  return (
    <header className="sab-bar">
      <Link to="/" aria-label={sabores.backLabel} className="sab-bar__back">
        {ui.backArrow}
      </Link>
      <span className="sab-bar__word">PATRIA</span>
      <div style={{ marginInlineStart: 'auto' }}>
        <LangSwitch lang={lang} onChange={setLang} />
      </div>
    </header>
  )
}
