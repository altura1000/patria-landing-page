import { useEffect, useState } from 'react'
import { WA_MESSAGES } from '../../config/whatsapp'
import { heroHeight } from '../../hooks/useHeroHeight'
import WhatsAppIcon from '../WhatsAppIcon'
import WhatsAppLink from '../WhatsAppLink'

/** Floating PEDIR button: appears once the hero is scrolled past, hides once the closing CTA is in view. */
export default function FloatingOrderButton() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const update = () => {
      const cta = document.getElementById('pedir')
      const near = cta ? cta.getBoundingClientRect().top < window.innerHeight - 60 : false
      // 680px hero → 860px, the approved threshold.
      setShow(window.scrollY > heroHeight() + 180 && !near)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <WhatsAppLink
      message={WA_MESSAGES.order}
      className="float-order"
      aria-label="Quiero probar, por WhatsApp"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'none' : 'translateY(10px)',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      <WhatsAppIcon size={15} /> Quiero probar
    </WhatsAppLink>
  )
}
