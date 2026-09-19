import type { AnchorHTMLAttributes } from 'react'
import { whatsappUrl } from '../config/whatsapp'

interface WhatsAppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Pre-filled message; see WA_MESSAGES in config/whatsapp.ts. */
  message: string
}

/** An <a> that opens WhatsApp with `message`. The number lives in config/whatsapp.ts. */
export default function WhatsAppLink({ message, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a href={whatsappUrl(message)} {...rest}>
      {children}
    </a>
  )
}
