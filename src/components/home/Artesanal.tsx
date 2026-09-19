import { images } from '../../assets/images'
import { useCopy } from '../../i18n/LanguageContext'
import Lines from '../../i18n/Lines'
import Reveal from '../Reveal'

export default function Artesanal() {
  const t = useCopy().artesanal
  return (
    <section className="arte">
      <div className="px arte__title">
        <Reveal>
          <h2 className="arte__h2">
            <Lines lines={t.title} />
          </h2>
        </Reveal>
      </div>
      <div className="arte__gallery">
        <img className="arte__img-a" src={images.malbec} alt={t.altA} />
        <img className="arte__img-b" src={images.proteina} alt={t.altB} />
      </div>
      <div className="px arte__points">
        {t.points.map(([title, text], i) => (
          <div key={i} className="arte__point">
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
