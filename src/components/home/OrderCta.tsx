import { images } from '../../assets/images'
import { WA_MESSAGES } from '../../config/whatsapp'
import { useCopy } from '../../i18n/LanguageContext'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

/** Closing "¿Te tentaste?" block. Its id="pedir" is what the floating button watches. */
export default function OrderCta() {
  const t = useCopy().cta
  return (
    <section id="pedir" className="cta">
      <div className="cta__media">
        <img className="cta__img" src={images.frutosRojos} alt={t.imgAlt} />
        <div className="cta__scrim" />
      </div>
      <div className="cta__copy">
        <h2 className="cta__title">{t.title}</h2>
        <p className="cta__text">{t.text}</p>
      </div>
      <div className="cta__actions">
        <WhatsAppLink message={WA_MESSAGES.order} className="wabtn cream">
          <WhatsAppIcon /> {t.button}
        </WhatsAppLink>
        <div className="ph cta__placeholder">{t.placeholder}</div>
      </div>
    </section>
  )
}
