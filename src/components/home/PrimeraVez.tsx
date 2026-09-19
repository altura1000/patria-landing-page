import { WA_MESSAGES } from '../../config/whatsapp'
import { useCopy } from '../../i18n/LanguageContext'
import Eyebrow from '../ds/Eyebrow'
import FlavourDot, { type FlavourKey } from '../ds/FlavourDot'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

/** Dot colour per favourite, in the same order as `primera.favourites` in i18n/translations.ts. */
const FAVOURITE_DOTS: FlavourKey[] = ['chocolate', 'dulce', 'halva']

export default function PrimeraVez() {
  const t = useCopy().primera
  return (
    <section className="px primera">
      <div>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="primera__title">{t.title}</h2>
        <p className="primera__sub">{t.sub}</p>
      </div>
      <div>
        <div className="primera__list">
          {t.favourites.map((label, i) => (
            <span key={i} className="primera__item">
              <FlavourDot flavour={FAVOURITE_DOTS[i]} size={9} />
              {label}
            </span>
          ))}
        </div>
        <WhatsAppLink message={WA_MESSAGES.firstTime} className="wabtn primera__cta">
          <WhatsAppIcon /> {t.cta}
        </WhatsAppLink>
      </div>
    </section>
  )
}
