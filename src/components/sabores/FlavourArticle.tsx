import { PRICE_PLACEHOLDER } from '../../config/site'
import { WA_MESSAGES } from '../../config/whatsapp'
import type { Flavour } from '../../data/flavours'
import { localizeFlavour, useCopy, useLanguage } from '../../i18n/LanguageContext'
import FlavourDot from '../ds/FlavourDot'
import Reveal from '../Reveal'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

interface FlavourArticleProps {
  flavour: Flavour
  index: number
}

/** One flavour on /sabores. Items alternate between a full-bleed and an inset composition. */
export default function FlavourArticle({ flavour, index: i }: FlavourArticleProps) {
  const { lang } = useLanguage()
  const t = useCopy().sabores
  // Shown name/description follow the language; the WhatsApp message keeps the Spanish name (business logic unchanged).
  const f = localizeFlavour(flavour, lang)
  const end = i % 2 !== 0
  return (
    <Reveal>
      <article className={end ? 'flavour flavour--end' : 'flavour'}>
        <img className="flavour__img" src={f.image} alt={f.name} />
        <div className="flavour__card">
          <div className="flavour__num">{String(i + 1).padStart(2, '0')}</div>
          <h3 className="flavour__name">{f.name}</h3>
          <p className="flavour__desc">{f.description}</p>
          <div className="flavour__dots">
            {f.dots.map((d) => (
              <FlavourDot key={d} flavour={d} size={9} />
            ))}
          </div>
          <div className="flavour__buy">
            <span className="price" dir="ltr">
              {PRICE_PLACEHOLDER}
            </span>
            <WhatsAppLink message={WA_MESSAGES.flavour(flavour.name)} className="waminor">
              <WhatsAppIcon size={13} /> {t.buy}
            </WhatsAppLink>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
