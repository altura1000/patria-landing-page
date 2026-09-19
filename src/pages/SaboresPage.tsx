import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { WA_MESSAGES } from '../config/whatsapp'
import { FLAVOURS } from '../data/flavours'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useCopy } from '../i18n/LanguageContext'
import Lines from '../i18n/Lines'
import Eyebrow from '../components/ds/Eyebrow'
import Seal from '../components/ds/Seal'
import FlavourArticle from '../components/sabores/FlavourArticle'
import SaboresBar from '../components/sabores/SaboresBar'
import WhatsAppIcon from '../components/WhatsAppIcon'
import WhatsAppLink from '../components/WhatsAppLink'

export default function SaboresPage() {
  const copy = useCopy()
  const t = copy.sabores
  useDocumentTitle(copy.meta.saboresTitle)
  return (
    <div>
      <SaboresBar />
      <div className="px sab-intro">
        <div>
          <Eyebrow>{t.intro.eyebrow}</Eyebrow>
          <h1 className="sab-intro__h1">
            <Lines lines={t.intro.title} />
          </h1>
        </div>
        <div>
          <p className="sab-intro__p">{t.intro.text}</p>
          <div className="ph sab-intro__note">{t.intro.note}</div>
        </div>
      </div>
      {FLAVOURS.map((f, i) => (
        <FlavourArticle key={f.id} flavour={f} index={i} />
      ))}
      <div className="sab-cta">
        <Seal size={64} src={images.logoEmblem} rotate={-5} />
        <h2 className="sab-cta__title">{t.cta.title}</h2>
        <p className="sab-cta__text">{t.cta.text}</p>
        {/* Plain `wabtn` + inline cream colors, as in the approved Sabores page (which had no .cream rule / shadow). */}
        <WhatsAppLink
          message={WA_MESSAGES.assortedBox}
          className="wabtn sab-cta__btn"
          style={{
            background: 'var(--cream-50)',
            color: 'var(--choc-800)',
            borderColor: 'var(--cream-50)',
          }}
        >
          <WhatsAppIcon /> {t.cta.button}
        </WhatsAppLink>
        <Link to="/" className="sab-cta__back">
          {t.cta.back}
        </Link>
      </div>
    </div>
  )
}
