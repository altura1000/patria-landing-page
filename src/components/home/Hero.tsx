import { images } from '../../assets/images'
import { useCopy } from '../../i18n/LanguageContext'
import Lines from '../../i18n/Lines'
import TryWhatsAppLink from '../TryWhatsAppLink'
import WhatsAppIcon from '../WhatsAppIcon'

export default function Hero() {
  const t = useCopy().hero
  return (
    <section className="hero">
      <img className="hero__img" src={images.heroBonbon} alt={t.imgAlt} />
      <div className="hero__scrim" />
      <div className="hero__body">
        <h1 className="hero__title">
          <Lines lines={t.title} />
        </h1>
        <div className="hero__tag">{t.tag}</div>
        <TryWhatsAppLink className="wabtn cream hero__cta">
          <WhatsAppIcon size={15} /> {t.cta}
        </TryWhatsAppLink>
      </div>
      <a className="hero__down" href="#sabores" aria-label={t.downLabel}>
        ↓
      </a>
    </section>
  )
}
