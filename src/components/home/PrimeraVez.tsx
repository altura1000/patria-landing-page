import { WA_MESSAGES } from '../../config/whatsapp'
import Eyebrow from '../ds/Eyebrow'
import FlavourDot, { type FlavourKey } from '../ds/FlavourDot'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

const FAVOURITES: [label: string, dot: FlavourKey][] = [
  ['Clásico', 'chocolate'],
  ['Bon Bon', 'dulce'],
  ['Halva', 'halva'],
]

export default function PrimeraVez() {
  return (
    <section className="px primera">
      <div>
        <Eyebrow>Para empezar</Eyebrow>
        <h2 className="primera__title">¿Primera vez?</h2>
        <p className="primera__sub">Empezá por nuestros tres favoritos y después seguís explorando.</p>
      </div>
      <div>
        <div className="primera__list">
          {FAVOURITES.map(([label, dot]) => (
            <span key={label} className="primera__item">
              <FlavourDot flavour={dot} size={9} />
              {label}
            </span>
          ))}
        </div>
        <WhatsAppLink message={WA_MESSAGES.firstTime} className="wabtn primera__cta">
          <WhatsAppIcon /> Quiero probarlos
        </WhatsAppLink>
      </div>
    </section>
  )
}
