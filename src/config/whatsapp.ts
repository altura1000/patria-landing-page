/**
 * WhatsApp ordering configuration — the ONE place to edit.
 *
 * Every "Pedir…" / "Hacer mi pedido" / "Quiero probarlos" button and the floating
 * PEDIR button build their link through `whatsappUrl()` below.
 */

/**
 * PATRIA's WhatsApp number, international format, digits only (no "+", spaces or dashes).
 * Example for an Israeli mobile: '972501234567'.
 *
 * TODO: insert the real PATRIA number. While it is empty the links open
 * `https://wa.me/?text=…` (WhatsApp with the message pre-filled, no recipient) —
 * exactly what the approved HTML did.
 */
export const WHATSAPP_PHONE = ''

export const whatsappUrl = (text: string): string =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`

/** Pre-filled order messages (Spanish, as in the approved design). */
export const WA_MESSAGES = {
  heroOrder: '¡Hola PATRIA! Quiero pedir alfajores.',
  firstTime: '¡Hola PATRIA! Es mi primera vez. Quiero probar el Clásico, el Bon Bon y el de Halva.',
  order: '¡Hola PATRIA! Quiero hacer un pedido.',
  assortedBox: '¡Hola PATRIA! Quiero armar una caja surtida.',
  flavour: (name: string): string =>
    `¡Hola PATRIA! Quiero pedir ${name}. ¿Me pasan disponibilidad?`,
} as const
