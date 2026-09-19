import { useCopy } from '../../i18n/LanguageContext'
import Eyebrow from '../ds/Eyebrow'

/** Social proof. The dashed placeholders are part of the approved design — real reviews/posts to be inserted. */
export default function Prueba() {
  const t = useCopy().prueba
  return (
    <section className="prueba">
      <div className="prueba__inner">
        <div className="prueba__head">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="prueba__title">{t.title}</h2>
        </div>
        <div className="rail">
          {[1, 2].map((n) => (
            <figure key={n} className="review">
              <span className="review__quote">“</span>
              <div className="ph review__body">
                {t.review.before}
                {n}
                {t.review.after}
              </div>
              <figcaption className="review__by">
                <div className="review__avatar" />
                <span className="review__name">{t.reviewBy}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="insta">
          <div className="insta__label">{t.instaLabel}</div>
          <div className="insta__grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="ph insta__cell">
                {t.instaPost}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
