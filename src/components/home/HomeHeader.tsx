import { useEffect, useState } from 'react'
import { images } from '../../assets/images'
import { heroHeight } from '../../hooks/useHeroHeight'
import LangSwitch from '../ds/LangSwitch'
import { useLanguage } from '../../i18n/LanguageContext'

/** Fixed header: transparent over the hero, turns solid cream once the hero is (almost) scrolled past. */
export default function HomeHeader() {
  const { lang, setLang } = useLanguage()
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    // 680px hero → 520px, the approved threshold.
    const onScroll = () => setSolid(window.scrollY > heroHeight() - 160)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const ink = solid ? 'var(--celeste-700)' : 'var(--cream-50)'
  return (
    // Transparent/solid colours live in styles/home.css (.home-header / .home-header--solid).
    <header className={solid ? 'home-header home-header--solid' : 'home-header'}>
      <img
        className="home-header__logo"
        src={images.logoEmblem}
        alt=""
        width="30"
        height="30"
        style={{ opacity: solid ? 1 : 0.96 }}
      />
      <span className="home-header__word" style={{ color: ink }}>
        PATRIA
      </span>
      <div style={{ marginInlineStart: 'auto' }}>
        <LangSwitch lang={lang} onChange={setLang} />
      </div>
    </header>
  )
}
