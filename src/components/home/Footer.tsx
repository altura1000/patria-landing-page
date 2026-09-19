import { images } from '../../assets/images'
import { INSTAGRAM_URL } from '../../config/site'
import Eyebrow from '../ds/Eyebrow'
import Seal from '../ds/Seal'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="px footer__ig">
        <Eyebrow tone="blue">Instagram</Eyebrow>
        <p className="footer__ig-text">Cada tanda nueva, primero la mostramos ahí.</p>
        <a className="footer__ig-link" href={INSTAGRAM_URL}>
          Seguinos
        </a>
      </div>
      <div className="footer__bar">
        <Seal size={38} src={images.logoSeal} rotate={0} shadow={false} />
        <span className="footer__bar-label">PATRIA · Orgullo argentino</span>
      </div>
    </footer>
  )
}
