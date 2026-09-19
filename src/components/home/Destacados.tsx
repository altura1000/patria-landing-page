import { Link } from 'react-router-dom'
import { PRICE_PLACEHOLDER } from '../../config/site'
import { getFlavour } from '../../data/flavours'
import { localizeFlavour, useCopy, useLanguage } from '../../i18n/LanguageContext'
import Lines from '../../i18n/Lines'
import Eyebrow from '../ds/Eyebrow'
import Reveal from '../Reveal'

/** The three homepage highlights, in display order (label + blurb come from i18n/translations.ts). */
const HIGHLIGHT_IDS = ['clasico', 'bon-bon', 'halva'] as const

export default function Destacados() {
  const { lang } = useLanguage()
  const t = useCopy().destacados
  const [main, ...others] = HIGHLIGHT_IDS.map((id) => ({
    id,
    ...t.highlights[id],
    flavour: localizeFlavour(getFlavour(id), lang),
  }))
  return (
    <section id="sabores" className="dest">
      <div className="dest__inner">
        <div className="dest__head">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="dest__title">
            <Lines lines={t.title} />
          </h2>
          <p className="dest__sub">{t.sub}</p>
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
            {t.seeAll}
          </Link>
          <span className="price" dir="ltr" style={{ fontSize: '17px' }}>
            {PRICE_PLACEHOLDER}
          </span>
        </div>
      </div>
    </section>
  )
}
