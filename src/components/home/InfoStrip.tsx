import { useCopy } from '../../i18n/LanguageContext'

/** Each message is split into two lines (shown stacked on mobile, inline from 640px up). */
export default function InfoStrip() {
  const items = useCopy().info
  return (
    <div className="info-strip">
      {items.map(([first, second]) => (
        <span key={first} className="info-strip__item">
          <span>{first}</span> <span>{second}</span>
        </span>
      ))}
    </div>
  )
}
