import { images } from '../../assets/images'
import { WA_MESSAGES } from '../../config/whatsapp'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src={images.heroBonbon}
        alt="Alfajor Bon Bon cortado al medio, con el dulce de leche a la vista"
      />
      <div className="hero__scrim" />
      <div className="hero__body">
        <h1 className="hero__title">
          Como los
          <br />
          de allá.
        </h1>
        <div className="hero__tag">Alfajores argentinos · hechos a mano</div>
        <WhatsAppLink message={WA_MESSAGES.heroOrder} className="wabtn cream hero__cta">
          <WhatsAppIcon size={15} /> Pedir alfajores
        </WhatsAppLink>
      </div>
      <a className="hero__down" href="#sabores" aria-label="Ver los sabores">
        ↓
      </a>
    </section>
  )
}
