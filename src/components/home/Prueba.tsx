import { useCopy } from '../../i18n/LanguageContext'
import { images } from '../../assets/images'
import Eyebrow from '../ds/Eyebrow'

/** Social proof: real (anonymous) customer message screenshots, then real customer Instagram Stories. */
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
          {[images.message1, images.message2].map((src, i) => (
            <figure key={i} className="review">
              <span className="review__quote">“</span>
              <img className="review__shot" src={src} alt={`${t.title} ${i + 1}`} width={i === 0 ? 333 : 353} height={i === 0 ? 437 : 372} decoding="async" />
            </figure>
          ))}
        </div>
        <div className="insta">
          <div className="insta__label">{t.instaLabel}</div>
          <div className="insta__grid">
            {[images.client1, images.client2, images.client3].map((src, i) => (
              <img key={i} className="insta__story" src={src} alt={`${t.instaLabel} ${i + 1}`} width={540} height={950} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
