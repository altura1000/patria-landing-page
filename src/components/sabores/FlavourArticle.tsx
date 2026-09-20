import type { Flavour } from '../../data/flavours'
import { localizeFlavour, useLanguage } from '../../i18n/LanguageContext'
import Reveal from '../Reveal'

interface FlavourArticleProps {
  flavour: Flavour
  index: number
}

/** One flavour on /sabores. Items alternate between a full-bleed and an inset composition. */
export default function FlavourArticle({ flavour, index: i }: FlavourArticleProps) {
  const { lang } = useLanguage()
  // Shown name/description follow the language.
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
        </div>
      </article>
    </Reveal>
  )
}
