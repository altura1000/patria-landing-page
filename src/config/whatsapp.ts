/**
 * WhatsApp ordering configuration — the ONE place to edit.
 *
 * Every WhatsApp button builds its link through `whatsappUrl()` below. The "Quiero probar" /
 * "אני רוצה לטעום" buttons go through components/TryWhatsAppLink, whose per-language message is
 * `whatsapp.tryMessage` in i18n/translations.ts.
 */

/**
 * PATRIA's WhatsApp number, international format, digits only (no "+", spaces or dashes).
 * Never shown to visitors; it is only used to build the wa.me link.
 */
export const WHATSAPP_PHONE = '972553197848'

export const whatsappUrl = (text: string): string =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`

/** Pre-filled messages for the remaining order buttons (Spanish, as in the approved design). */
export const WA_MESSAGES = {
  order: '¡Hola PATRIA! Quiero hacer un pedido.',
  assortedBox: '¡Hola PATRIA! Quiero armar una caja surtida.',
  flavour: (name: string): string =>
    `¡Hola PATRIA! Quiero pedir ${name}. ¿Me pasan disponibilidad?`,
} as const
