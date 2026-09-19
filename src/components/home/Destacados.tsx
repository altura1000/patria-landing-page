import { Link } from 'react-router-dom'
import { PRICE_PLACEHOLDER } from '../../config/site'
import { getFlavour } from '../../data/flavours'
import Eyebrow from '../ds/Eyebrow'
import Reveal from '../Reveal'

/** The three homepage highlights: flavour id, short label and homepage-specific blurb. */
const HIGHLIGHTS = [
  {
    id: 'clasico',
    label: 'El Clásico',
    blurb: 'Dulce de leche espeso entre dos tapas de chocolate negro, cubierto entero.',
  },
  {
    id: 'bon-bon',
    label: 'Bon Bon',
    blurb: 'Tapas claras de maicena, dulce bien cargado, baño de chocolate con leche.',
  },
  {
    id: 'halva',
    label: 'Halva',
    blurb: 'Hilos de halva y sésamo tostado sobre el dulce, en chocolate blanco.',
  },
]

export default function Destacados() {
  const [main, ...others] = HIGHLIGHTS.map((h) => ({ ...h, flavour: getFlavour(h.id) }))
  return (
    <section id="sabores" className="dest">
      <div className="dest__inner">
        <div className="dest__head">
          <Eyebrow>Nuestros sabores</Eyebrow>
          <h2 className="dest__title">
            Tres para
            <br />
            empezar.
          </h2>
          <p className="dest__sub">Los que más nos piden. Hay cinco más esperando en la carta.</p>
        </div>
        <Reveal className="dest__row-reveal">
          <div className="dest__row">
            <div className="dest__main">
              <div className="dest__media">
                <img src={main.flavour.image} alt={main.flavour.name} />
                <div className="dest__tab">
                  <span>{main.label}</span>
                </div>
              </div>
              <p className="dest__lead">{main.blurb}</p>
            </div>
            <div className="dest__pair">
              {others.map(({ id, label, blurb, flavour }) => (
                <figure key={id} className="dest__fig">
                  <img src={flavour.image} alt={flavour.name} />
                  <figcaption>
                    <div className="dest__fig-name">{label}</div>
                    <div className="dest__fig-text">{blurb}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="dest__foot">
          <Link to="/sabores" className="waminor" style={{ borderColor: 'var(--choc-700)' }}>
            Ver todos los sabores →
          </Link>
          <span className="price" dir="ltr" style={{ fontSize: '17px' }}>
            {PRICE_PLACEHOLDER}
          </span>
        </div>
      </div>
    </section>
  )
}
