import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useCopy } from '../i18n/LanguageContext'
import type { Copy } from '../i18n/translations'
import Eyebrow from '../components/ds/Eyebrow'
import SaboresBar from '../components/sabores/SaboresBar'
import WhatsAppLink from '../components/WhatsAppLink'

type Block = Copy['privacy']['changes']['body'][number]

/** A paragraph, or a bulleted list when the block is an array. */
function Blocks({ body }: { body: Block[] }) {
  return (
    <>
      {body.map((block, i) =>
        Array.isArray(block) ? (
          <ul key={i} className="privacy__list">
            {block.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{block}</p>
        ),
      )}
    </>
  )
}

const num = (i: number) => String(i + 1).padStart(2, '0')

export default function PrivacyPage() {
  const copy = useCopy()
  const t = copy.privacy
  useDocumentTitle(copy.meta.privacyTitle)
  const contactIndex = t.sections.length
  return (
    <div>
      <SaboresBar />
      <main className="px privacy">
        <header className="privacy__intro">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="privacy__title">{t.title}</h1>
          <p className="privacy__updated">
            {t.updatedLabel}: {t.updated}
          </p>
        </header>
        <div className="privacy__body">
          {t.sections.map((s, i) => (
            <section key={s.title} className="privacy__section">
              <h2 className="privacy__h2">
                <span className="privacy__num" aria-hidden="true">{num(i)}</span>
                {s.title}
              </h2>
              <Blocks body={s.body} />
            </section>
          ))}
          <section className="privacy__section">
            <h2 className="privacy__h2">
              <span className="privacy__num" aria-hidden="true">{num(contactIndex)}</span>
              {t.contact.title}
            </h2>
            <p>{t.contact.text}</p>
            <p>
              <WhatsAppLink message={t.contact.whatsappMessage}>{t.contact.whatsapp}</WhatsAppLink>
            </p>
          </section>
          <section className="privacy__section">
            <h2 className="privacy__h2">
              <span className="privacy__num" aria-hidden="true">{num(contactIndex + 1)}</span>
              {t.changes.title}
            </h2>
            <Blocks body={t.changes.body} />
          </section>
        </div>
        <div className="privacy__foot">
          <Link to="/" className="privacy__back">
            {t.back}
          </Link>
        </div>
      </main>
    </div>
  )
}
