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
    <header
      className="home-header"
      style={{
        background: solid
          ? 'rgba(247,241,230,.95)'
          : 'linear-gradient(to bottom,rgba(20,10,4,.5),rgba(20,10,4,0))',
        borderBlockEnd: solid ? '1px solid var(--border-hairline)' : '1px solid transparent',
      }}
    >
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
        <LangSwitch
          lang={lang}
          onChange={setLang}
          style={{
            borderColor: solid ? 'var(--border-hairline)' : 'rgba(247,241,230,.4)',
            background: solid ? 'transparent' : 'rgba(20,10,4,.25)',
          }}
        />
      </div>
    </header>
  )
}
