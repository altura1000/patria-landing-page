import { images } from '../../assets/images'
import { useCopy } from '../../i18n/LanguageContext'
import Lines from '../../i18n/Lines'
import Seal from '../ds/Seal'
import Reveal from '../Reveal'

export default function Historia() {
  const t = useCopy().historia
  return (
    <section className="historia">
      <div className="historia__media">
        <img className="historia__img" src={images.clasico} alt={t.imgAlt} />
      </div>
      <div className="historia__panel">
        <div className="historia__seal">
          <Seal size={76} src={images.logoEmblem} rotate={-5} />
        </div>
        <Reveal>
          <h2 className="historia__title">
            <Lines lines={t.title} />
          </h2>
          <p className="historia__p1">{t.p1}</p>
          <p className="historia__p2">{t.p2}</p>
          <div className="historia__sig">{t.sig}</div>
        </Reveal>
      </div>
    </section>
  )
}
