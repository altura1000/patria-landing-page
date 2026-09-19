import Eyebrow from '../ds/Eyebrow'

const STEPS: [title: string, text: string][] = [
  ['Elegí tus sabores', 'Media docena surtida o todos del mismo. Vos decidís.'],
  ['Escribinos por WhatsApp', 'Mandás el pedido en un mensaje; te confirmamos disponibilidad.'],
  ['Coordinamos la entrega', 'Acordamos día y forma antes de que pagues nada.'],
]

export default function Pedido() {
  return (
    <section className="px pedido">
      <Eyebrow>Cómo se pide</Eyebrow>
      <h2 className="pedido__title">
        Tres mensajes
        <br />y listo.
      </h2>
      <div className="steps">
        {STEPS.map(([title, text], i) => (
          <div key={title} className="step">
            <span className="step__n">{i + 1}</span>
            <div>
              <div className="step__t">{title}</div>
              <div className="step__d">{text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="ph pedido__note">Zonas de entrega · mínimo · tiempos · precios — a confirmar</div>
    </section>
  )
}
