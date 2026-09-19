import { images } from '../../assets/images'
import { INSTAGRAM_URL } from '../../config/site'
import { useCopy } from '../../i18n/LanguageContext'
import Eyebrow from '../ds/Eyebrow'
import Seal from '../ds/Seal'

export default function Footer() {
  const t = useCopy().footer
  return (
    <footer className="footer">
      <div className="px footer__ig">
        <Eyebrow tone="blue">{t.eyebrow}</Eyebrow>
        <p className="footer__ig-text">{t.text}</p>
        <a className="footer__ig-link" href={INSTAGRAM_URL}>
          {t.follow}
        </a>
      </div>
      <div className="footer__bar">
        <Seal size={38} src={images.logoSeal} rotate={0} shadow={false} />
        <span className="footer__bar-label">{t.label}</span>
      </div>
    </footer>
  )
}
