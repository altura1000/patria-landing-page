import { images } from '../../assets/images'
import Seal from '../ds/Seal'
import Reveal from '../Reveal'

export default function Historia() {
  return (
    <section className="historia">
      <div className="historia__media">
        <img
          className="historia__img"
          src={images.clasico}
          alt="El Clásico de Siempre sobre la tabla"
        />
      </div>
      <div className="historia__panel">
        <div className="historia__seal">
          <Seal size={76} src={images.logoEmblem} rotate={-5} />
        </div>
        <Reveal>
          <h2 className="historia__title">
            Nos trajimos
            <br />
            la receta de casa.
          </h2>
          <p className="historia__p1">
            Acá faltaba el alfajor de verdad, así que lo hacemos nosotros: en tandas chicas, con el
            dulce de leche que corresponde, como se hace allá.
          </p>
          <p className="historia__p2">
            Cada uno se rellena, se baña y se envuelve a mano. El sticker también lo ponemos uno por
            uno.
          </p>
          <div className="historia__sig">Familia PATRIA · Israel</div>
        </Reveal>
      </div>
    </section>
  )
}
