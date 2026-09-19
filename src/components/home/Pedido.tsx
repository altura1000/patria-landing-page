import { useCopy } from '../../i18n/LanguageContext'
import Lines from '../../i18n/Lines'
import Eyebrow from '../ds/Eyebrow'

export default function Pedido() {
  const t = useCopy().pedido
  return (
    <section className="px pedido">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="pedido__title">
        <Lines lines={t.title} />
      </h2>
      <div className="steps">
        {t.steps.map(([title, text], i) => (
          <div key={i} className="step">
            <span className="step__n">{i + 1}</span>
            <div>
              <div className="step__t">{title}</div>
              <div className="step__d">{text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ph pedido__note">{t.note}</div>
    </section>
  )
}
