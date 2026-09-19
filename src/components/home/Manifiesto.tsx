import Rule from '../ds/Rule'
import Reveal from '../Reveal'

export default function Manifiesto() {
  return (
    <section className="px manifiesto">
      <Reveal>
        <p className="manifiesto__text">
          Tapas gruesas, dulce de leche{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--dulce-600)' }}>de verdad</em> y una
          cobertura que cruje cuando la mordés.
        </p>
        <div className="manifiesto__sig">
          <Rule width="72px" ornament={false} />
          <span className="manifiesto__sig-label">Orgullo argentino</span>
        </div>
      </Reveal>
    </section>
  )
}
