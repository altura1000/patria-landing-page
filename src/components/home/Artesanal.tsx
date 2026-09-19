import { images } from '../../assets/images'
import Reveal from '../Reveal'

const POINTS: [title: string, text: string][] = [
  ['Tandas chicas', 'Se amasa y se baña por lotes, no en serie.'],
  ['Relleno generoso', 'Capa gruesa de dulce; no se estira con nada.'],
  ['Envuelto a mano', 'Papel encerado y sticker PATRIA, uno por uno.'],
]

export default function Artesanal() {
  return (
    <section className="arte">
      <div className="px arte__title">
        <Reveal>
          <h2 className="arte__h2">
            El relleno se ve
            <br />
            cuando lo cortás.
          </h2>
        </Reveal>
      </div>
      <div className="arte__gallery">
        <img
          className="arte__img-a"
          src={images.malbec}
          alt="Malbec cortado, con la reducción de vino a la vista"
        />
        <img
          className="arte__img-b"
          src={images.proteina}
          alt="Proteína cortado sobre la tabla"
        />
      </div>
      <div className="px arte__points">
        {POINTS.map(([title, text], i) => (
          <div key={title} className="arte__point">
            <span className="arte__num">0{i + 1}</span>
            <div>
              <div className="arte__pt-title">{title}</div>
              <div className="arte__pt-text">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
