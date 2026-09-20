import type { AnchorHTMLAttributes } from 'react'
import { useCopy } from '../i18n/LanguageContext'
import WhatsAppLink from './WhatsAppLink'

/**
 * The "QUIERO PROBAR" / "אני רוצה לטעום" WhatsApp link. The pre-filled message follows the language
 * currently selected on the site (copy.whatsapp.tryMessage), so switching language updates it at once.
 * Every CTA with this action goes through here; the number lives in config/whatsapp.ts.
 */
export default function TryWhatsAppLink(props: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  const { tryMessage } = useCopy().whatsapp
  return <WhatsAppLink message={tryMessage} {...props} />
}
