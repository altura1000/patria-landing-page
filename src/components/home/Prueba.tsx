import Eyebrow from '../ds/Eyebrow'

/** Social proof. The dashed placeholders are part of the approved design — real reviews/posts to be inserted. */
export default function Prueba() {
  return (
    <section className="prueba">
      <div className="prueba__inner">
        <div className="prueba__head">
          <Eyebrow>Lo que dicen</Eyebrow>
          <h2 className="prueba__title">Nuestros clientes</h2>
        </div>
        <div className="rail">
          {[1, 2].map((n) => (
            <figure key={n} className="review">
              <span className="review__quote">“</span>
              <div className="ph review__body">Reseña real de cliente {n} — a insertar</div>
              <figcaption className="review__by">
                <div className="review__avatar" />
                <span className="review__name">Nombre · fuente</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="insta">
          <div className="insta__label">Desde Instagram</div>
          <div className="insta__grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="ph insta__cell">
                Post real
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
