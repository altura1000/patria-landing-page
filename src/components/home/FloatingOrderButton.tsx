import { useEffect, useState } from 'react'
import { heroHeight } from '../../hooks/useHeroHeight'
import { useCopy } from '../../i18n/LanguageContext'
import TryWhatsAppLink from '../TryWhatsAppLink'
import WhatsAppIcon from '../WhatsAppIcon'

interface FloatingOrderButtonProps {
  /** Show from the top of the page instead of after the hero (pages that have no hero). */
  fromTop?: boolean
  /** id of the closing CTA; the button hides once it is in view. */
  endId?: string
}

/** Floating PEDIR button: appears once the hero is scrolled past, hides once the closing CTA is in view. */
export default function FloatingOrderButton({ fromTop = false, endId = 'pedir' }: FloatingOrderButtonProps) {
  const t = useCopy().floating
  const [show, setShow] = useState(false)
  useEffect(() => {
    const update = () => {
      const cta = document.getElementById(endId)
      const near = cta ? cta.getBoundingClientRect().top < window.innerHeight - 60 : false
      // 680px hero → 860px, the approved threshold.
      setShow((fromTop || window.scrollY > heroHeight() + 180) && !near)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [fromTop, endId])
  return (
    <TryWhatsAppLink
      className="float-order"
      aria-label={t.aria}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'none' : 'translateY(10px)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <WhatsAppIcon size={15} /> {t.label}
    </TryWhatsAppLink>
  )
}
