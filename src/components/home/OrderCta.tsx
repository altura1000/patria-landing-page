import { images } from '../../assets/images'
import { WA_MESSAGES } from '../../config/whatsapp'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

/** Closing "¿Te tentaste?" block. Its id="pedir" is what the floating button watches. */
export default function OrderCta() {
  return (
    <section id="pedir" className="cta">
      <div className="cta__media">
        <img className="cta__img" src={images.frutosRojos} alt="Alfajor de frutos rojos cortado" />
        <div className="cta__scrim" />
      </div>
      <div className="cta__copy">
        <h2 className="cta__title">¿Te tentaste?</h2>
        <p className="cta__text">
          Escribinos por WhatsApp y armamos tu pedido. Contestamos nosotros.
        </p>
      </div>
      <div className="cta__actions">
        <WhatsAppLink message={WA_MESSAGES.order} className="wabtn cream">
          <WhatsAppIcon /> Hacer mi pedido
        </WhatsAppLink>
        <div className="ph cta__placeholder">Número de WhatsApp — a insertar</div>
      </div>
    </section>
  )
}
