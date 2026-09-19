import { useCopy } from '../../i18n/LanguageContext'
import Rule from '../ds/Rule'
import Reveal from '../Reveal'

export default function Manifiesto() {
  const t = useCopy().manifiesto
  return (
    <section className="px manifiesto">
      <Reveal>
        <p className="manifiesto__text">
          {t.before}{' '}
          <em className="manifiesto__em">{t.emphasis}</em>
          {t.after}
        </p>
        <div className="manifiesto__sig">
          <Rule width="72px" ornament={false} />
          <span className="manifiesto__sig-label">{t.sig}</span>
        </div>
      </Reveal>
    </section>
  )
}
