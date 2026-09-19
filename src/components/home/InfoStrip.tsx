const ITEMS = ['Hechos a mano', 'Pedidos en Tel Aviv', 'Entrega hasta 48h']

export default function InfoStrip() {
  return (
    <div className="info-strip">
      {ITEMS.map((t) => (
        <span key={t} className="info-strip__item">
          {t}
        </span>
      ))}
    </div>
  )
}
