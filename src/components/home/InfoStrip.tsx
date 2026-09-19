/** Each message is split into two lines (shown stacked on mobile, inline from 640px up). */
const ITEMS: [string, string][] = [
  ['Hechos', 'a mano'],
  ['Pedidos en', 'Tel Aviv'],
  ['Entrega', 'hasta 48h'],
]

export default function InfoStrip() {
  return (
    <div className="info-strip">
      {ITEMS.map(([first, second]) => (
        <span key={first} className="info-strip__item">
          <span>{first}</span> <span>{second}</span>
        </span>
      ))}
    </div>
  )
}
