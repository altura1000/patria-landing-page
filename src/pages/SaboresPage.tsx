import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { WA_MESSAGES } from '../config/whatsapp'
import { FLAVOURS } from '../data/flavours'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Eyebrow from '../components/ds/Eyebrow'
import Seal from '../components/ds/Seal'
import FlavourArticle from '../components/sabores/FlavourArticle'
import SaboresBar from '../components/sabores/SaboresBar'
import WhatsAppIcon from '../components/WhatsAppIcon'
import WhatsAppLink from '../components/WhatsAppLink'

export default function SaboresPage() {
  useDocumentTitle('PATRIA · Todos los sabores')
  return (
    <div>
      <SaboresBar />
      <div className="px sab-intro">
        <div>
          <Eyebrow>La carta completa</Eyebrow>
          <h1 className="sab-intro__h1">
            Los ocho
            <br />
            sabores.
          </h1>
        </div>
        <div>
          <p className="sab-intro__p">
            Todos se cortan igual de generosos. Elegí el tuyo y escribinos.
          </p>
          <div className="ph sab-intro__note">Precios por unidad y por caja — a confirmar</div>
        </div>
      </div>
      {FLAVOURS.map((f, i) => (
        <FlavourArticle key={f.id} flavour={f} index={i} />
      ))}
      <div className="sab-cta">
        <Seal size={64} src={images.logoEmblem} rotate={-5} />
        <h2 className="sab-cta__title">¿No sabés cuál?</h2>
        <p className="sab-cta__text">Contanos qué te gusta y te armamos la caja.</p>
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
          <WhatsAppIcon /> Hacer mi pedido
        </WhatsAppLink>
        <Link to="/" className="sab-cta__back">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
