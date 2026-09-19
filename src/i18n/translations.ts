/**
 * All user-facing copy, in one place.
 *
 * `es` is the approved Spanish copy, verbatim. `he` is the Hebrew version.
 * Both must satisfy `Copy`, so a key added to one and forgotten in the other fails typecheck.
 *
 * Hebrew sources, in order of preference:
 *   1. Hebrew already present in the approved design-system kit (_ds/…/_ds_bundle.js):
 *      flavour names + descriptions, גאווה ארגנטינאית, בעבודת יד, ריבת חלב, חלווה, אחד־אחד, וואטסאפ…
 *   2. Faithful translation of the Spanish line, reusing that vocabulary.
 * Nothing here adds prices, delivery terms or claims that the Spanish does not make.
 * Lines that are NOT lifted from the design-system kit are marked `// REVIEW` for a native check.
 */

export type Lang = 'es' | 'he'

/** A headline that is broken over two lines on purpose (rendered with a <br />). */
type Lines = [first: string, second: string]

export interface Copy {
  meta: { homeTitle: string; saboresTitle: string }
  ui: {
    langGroup: string
    /** Alt text of the round PATRIA seal. */
    sealAlt: string
    /** Arrow that points "back" (← in LTR, → in RTL). */
    backArrow: string
  }
  hero: { imgAlt: string; title: Lines; tag: string; cta: string; downLabel: string }
  info: [first: string, second: string][]
  /** Rendered as: before + ' ' + <em>emphasis</em> + after (the space is its own text node, like the approved JSX). */
  manifiesto: { before: string; emphasis: string; after: string; sig: string }
  destacados: {
    eyebrow: string
    title: Lines
    sub: string
    /** Homepage-specific label + blurb per flavour id. */
    highlights: Record<'clasico' | 'bon-bon' | 'halva', { label: string; blurb: string }>
    seeAll: string
  }
  historia: { imgAlt: string; title: Lines; p1: string; p2: string; sig: string }
  artesanal: {
    title: Lines
    altA: string
    altB: string
    points: [title: string, text: string][]
  }
  prueba: {
    eyebrow: string
    title: string
    /** The number is rendered between `before` and `after` as its own text node (same DOM as the approved page). */
    review: { before: string; after: string }
    reviewBy: string
    instaLabel: string
    instaPost: string
  }
  primera: {
    eyebrow: string
    title: string
    sub: string
    favourites: [clasico: string, bonBon: string, halva: string]
    cta: string
  }
  pedido: {
    eyebrow: string
    title: Lines
    steps: [title: string, text: string][]
    note: string
  }
  cta: { imgAlt: string; title: string; text: string; button: string; placeholder: string }
  footer: { eyebrow: string; text: string; follow: string; label: string }
  floating: { label: string; aria: string }
  sabores: {
    backLabel: string
    intro: { eyebrow: string; title: Lines; text: string; note: string }
    buy: string
    cta: { title: string; text: string; button: string; back: string }
  }
}

const es: Copy = {
  meta: { homeTitle: 'PATRIA · Alfajores argentinos', saboresTitle: 'PATRIA · Todos los sabores' },
  ui: { langGroup: 'Idioma', sealAlt: 'PATRIA — Orgullo Argentino', backArrow: '←' },
  hero: {
    imgAlt: 'Alfajor Bon Bon cortado al medio, con el dulce de leche a la vista',
    title: ['Como los', 'de allá.'],
    tag: 'Alfajores argentinos · hechos a mano',
    cta: 'Pedir alfajores',
    downLabel: 'Ver los sabores',
  },
  info: [
    ['Hechos', 'a mano'],
    ['Pedidos en', 'Tel Aviv'],
    ['Entrega', 'hasta 48h'],
  ],
  manifiesto: {
    before: 'Tapas gruesas, dulce de leche',
    emphasis: 'de verdad',
    after: ' y una cobertura que cruje cuando la mordés.',
    sig: 'Orgullo argentino',
  },
  destacados: {
    eyebrow: 'Nuestros sabores',
    title: ['Tres para', 'empezar.'],
    sub: 'Los que más nos piden. Hay cinco más esperando en la carta.',
    highlights: {
      clasico: {
        label: 'El Clásico',
        blurb: 'Dulce de leche espeso entre dos tapas de chocolate negro, cubierto entero.',
      },
      'bon-bon': {
        label: 'Bon Bon',
        blurb: 'Tapas claras de maicena, dulce bien cargado, baño de chocolate con leche.',
      },
      halva: {
        label: 'Halva',
        blurb: 'Hilos de halva y sésamo tostado sobre el dulce, en chocolate blanco.',
      },
    },
    seeAll: 'Ver todos los sabores →',
  },
  historia: {
    imgAlt: 'El Clásico de Siempre sobre la tabla',
    title: ['Nos trajimos', 'la receta de casa.'],
    p1: 'Acá faltaba el alfajor de verdad, así que lo hacemos nosotros: en tandas chicas, con el dulce de leche que corresponde, como se hace allá.',
    p2: 'Cada uno se rellena, se baña y se envuelve a mano. El sticker también lo ponemos uno por uno.',
    sig: 'Familia PATRIA · Israel',
  },
  artesanal: {
    title: ['El relleno se ve', 'cuando lo cortás.'],
    altA: 'Malbec cortado, con la reducción de vino a la vista',
    altB: 'Proteína cortado sobre la tabla',
    points: [
      ['Tandas chicas', 'Se amasa y se baña por lotes, no en serie.'],
      ['Relleno generoso', 'Capa gruesa de dulce; no se estira con nada.'],
      ['Envuelto a mano', 'Papel encerado y sticker PATRIA, uno por uno.'],
    ],
  },
  prueba: {
    eyebrow: 'Lo que dicen',
    title: 'Nuestros clientes',
    review: { before: 'Reseña real de cliente ', after: ' — a insertar' },
    reviewBy: 'Nombre · fuente',
    instaLabel: 'Desde Instagram',
    instaPost: 'Post real',
  },
  primera: {
    eyebrow: 'Para empezar',
    title: '¿Primera vez?',
    sub: 'Empezá por nuestros tres favoritos y después seguís explorando.',
    favourites: ['Clásico', 'Bon Bon', 'Halva'],
    cta: 'Quiero probarlos',
  },
  pedido: {
    eyebrow: 'Cómo se pide',
    title: ['Tres mensajes', 'y listo.'],
    steps: [
      ['Elegí tus sabores', 'Media docena surtida o todos del mismo. Vos decidís.'],
      ['Escribinos por WhatsApp', 'Mandás el pedido en un mensaje; te confirmamos disponibilidad.'],
      ['Coordinamos la entrega', 'Acordamos día y forma antes de que pagues nada.'],
    ],
    note: 'Zonas de entrega · mínimo · tiempos · precios — a confirmar',
  },
  cta: {
    imgAlt: 'Alfajor de frutos rojos cortado',
    title: '¿Te tentaste?',
    text: 'Escribinos por WhatsApp y armamos tu pedido. Contestamos nosotros.',
    button: 'Hacer mi pedido',
    placeholder: 'Número de WhatsApp — a insertar',
  },
  footer: {
    eyebrow: 'Instagram',
    text: 'Cada tanda nueva, primero la mostramos ahí.',
    follow: 'Seguinos',
    label: 'PATRIA · Orgullo argentino',
  },
  floating: { label: 'Quiero probar', aria: 'Quiero probar, por WhatsApp' },
  sabores: {
    backLabel: 'Volver',
    intro: {
      eyebrow: 'La carta completa',
      title: ['Los ocho', 'sabores.'],
      text: 'Todos se cortan igual de generosos. Elegí el tuyo y escribinos.',
      note: 'Precios por unidad y por caja — a confirmar',
    },
    buy: 'Pedir este',
    cta: {
      title: '¿No sabés cuál?',
      text: 'Contanos qué te gusta y te armamos la caja.',
      button: 'Hacer mi pedido',
      back: 'Volver al inicio',
    },
  },
}

const he: Copy = {
  meta: { homeTitle: 'PATRIA · אלפחורס ארגנטינאי', saboresTitle: 'PATRIA · כל הטעמים' }, // REVIEW
  ui: { langGroup: 'שפה', sealAlt: 'PATRIA — גאווה ארגנטינאית', backArrow: '→' },
  hero: {
    imgAlt: 'אלפחור בון בון חתוך לשניים, עם ריבת החלב לעין', // REVIEW
    // "Como los de allá" — literal: "like the ones from Argentina".  // REVIEW (headline)
    title: ['כמו אלה', 'שבארגנטינה.'],
    tag: 'אלפחורס ארגנטינאי · בעבודת יד', // from the design-system kit ("אלפחורס ארגנטינאי, בעבודת יד")
    cta: 'להזמין אלפחורס', // REVIEW
    downLabel: 'לצפייה בטעמים', // REVIEW
  },
  info: [
    ['בעבודת', 'יד'],
    ['הזמנות', 'בתל אביב'], // REVIEW
    ['משלוח', 'עד 48 שעות'], // REVIEW
  ],
  manifiesto: {
    // Modelled on the kit's Hebrew sub-headline: "עוגיות עבות, ריבת חלב אמיתית וציפוי שוקולד שנשבר."  // REVIEW
    before: 'עוגיות עבות, ריבת חלב',
    emphasis: 'אמיתית',
    after: ' וציפוי שנשבר כשנוגסים בו.',
    sig: 'גאווה ארגנטינאית', // from the kit
  },
  destacados: {
    eyebrow: 'הטעמים שלנו', // REVIEW
    title: ['שלושה', 'להתחלה.'], // REVIEW
    sub: 'אלה שמבקשים מאיתנו הכי הרבה. עוד חמישה מחכים בתפריט.', // REVIEW
    highlights: {
      clasico: {
        label: 'הקלאסי', // from the kit
        blurb: 'ריבת חלב סמיכה בין שתי עוגיות שוקולד מריר, בציפוי מלא.', // REVIEW
      },
      'bon-bon': {
        label: 'בון בון', // from the kit
        blurb: 'עוגיות קורנפלור בהירות, ריבת חלב בשפע וציפוי שוקולד חלב.', // REVIEW ("maicena")
      },
      halva: {
        label: 'חלווה', // REVIEW (kit has the full name "ריבת חלב וחלווה")
        blurb: 'חוטי חלווה ושומשום קלוי מעל ריבת החלב, בשוקולד לבן.', // REVIEW
      },
    },
    seeAll: 'לכל הטעמים ←', // "לכל הטעמים" from the kit
  },
  historia: {
    imgAlt: 'הקלאסי על הקרש', // REVIEW
    title: ['הבאנו איתנו', 'את המתכון מהבית.'], // REVIEW
    p1: 'כאן היה חסר אלפחור אמיתי, אז אנחנו מכינים אותו בעצמנו: בכמויות קטנות, עם ריבת החלב הנכונה, כמו שעושים שם.', // REVIEW
    p2: 'כל אחד ממולא, מצופה ועטוף ביד. גם את הסטיקר אנחנו מדביקים אחד־אחד.', // REVIEW ("אחד־אחד" from the kit)
    sig: 'משפחת PATRIA · ישראל', // REVIEW
  },
  artesanal: {
    title: ['המילוי נראה', 'ברגע שחותכים.'], // REVIEW
    altA: 'מלבק חתוך, עם רדוקציית היין לעין', // REVIEW
    altB: 'חלבון חתוך על הקרש', // REVIEW
    points: [
      ['כמויות קטנות', 'לשים ומצפים לפי אצוות, לא בייצור סדרתי.'], // REVIEW
      ['מילוי נדיב', 'שכבה עבה של ריבת חלב, בלי להאריך אותה עם שום דבר.'], // REVIEW
      ['עטוף ביד', 'נייר שעווה וסטיקר PATRIA, אחד־אחד.'], // REVIEW
    ],
  },
  prueba: {
    eyebrow: 'מה אומרים', // REVIEW
    title: 'הלקוחות שלנו', // REVIEW
    review: { before: 'ביקורת אמיתית של לקוח ', after: ' — להוספה' }, // placeholder
    reviewBy: 'שם · מקור', // placeholder
    instaLabel: 'מאינסטגרם', // REVIEW
    instaPost: 'פוסט אמיתי', // placeholder
  },
  primera: {
    eyebrow: 'להתחלה', // REVIEW
    title: 'פעם ראשונה?', // REVIEW
    sub: 'תתחילו משלושת האהובים עלינו, ואחר כך תמשיכו לגלות עוד.', // REVIEW ("תתחילו" register from the kit)
    favourites: ['קלאסי', 'בון בון', 'חלווה'], // REVIEW
    cta: 'אני רוצה לטעום', // REVIEW
  },
  pedido: {
    eyebrow: 'איך מזמינים', // REVIEW
    title: ['שלוש הודעות', 'וזהו.'], // REVIEW
    steps: [
      ['בחרו את הטעמים', 'חצי תריסר מעורב או הכול מאותו טעם. אתם מחליטים.'], // REVIEW
      ['כתבו לנו בוואטסאפ', 'שולחים את ההזמנה בהודעה אחת, ואנחנו מאשרים זמינות.'], // REVIEW
      ['מתאמים משלוח', 'קובעים יום ואופן לפני שאתם משלמים משהו.'], // REVIEW
    ],
    note: 'אזורי משלוח · מינימום · זמנים · מחירים — לאישור', // placeholder
  },
  cta: {
    imgAlt: 'אלפחור פירות יער חתוך', // REVIEW
    title: 'התחשק לכם?', // REVIEW
    text: 'כתבו לנו בוואטסאפ ונרכיב את ההזמנה שלכם. אנחנו עונים בעצמנו.', // REVIEW
    button: 'לבצע הזמנה', // REVIEW
    placeholder: 'מספר וואטסאפ — להוספה', // placeholder
  },
  footer: {
    eyebrow: 'אינסטגרם',
    text: 'כל אצווה חדשה מוצגת שם קודם.', // REVIEW
    follow: 'עקבו אחרינו', // REVIEW
    label: 'PATRIA · גאווה ארגנטינאית', // from the kit
  },
  floating: { label: 'אני רוצה לטעום', aria: 'אני רוצה לטעום, בוואטסאפ' }, // REVIEW
  sabores: {
    backLabel: 'חזרה', // from the kit ("חזרה")
    intro: {
      eyebrow: 'התפריט המלא', // REVIEW
      title: ['שמונה', 'טעמים.'], // REVIEW
      text: 'כולם נחתכים באותה נדיבות. בחרו את הטעם שלכם וכתבו לנו.', // REVIEW
      note: 'מחירים ליחידה ולקופסה — לאישור', // placeholder
    },
    buy: 'להזמין את זה', // REVIEW
    cta: {
      title: 'לא בטוחים איזה לבחור?', // REVIEW
      text: 'ספרו לנו מה אתם אוהבים ונרכיב לכם קופסה.', // REVIEW
      button: 'לבצע הזמנה', // REVIEW
      back: 'חזרה לדף הבית', // REVIEW
    },
  },
}

export const COPY: Record<Lang, Copy> = { es, he }

/**
 * Hebrew flavour names/descriptions — taken verbatim from the approved design-system kit.
 * (Spanish lives in data/flavours.ts, the approved source.)
 */
export const FLAVOUR_HE: Record<string, { name: string; description: string }> = {
  clasico: { name: 'הקלאסי', description: 'ריבת חלב בין שתי שכבות קקאו, בציפוי שוקולד מריר מלא.' },
  'bon-bon': { name: 'בון בון', description: 'עוגיות רכות, ריבת חלב סמיכה ושוקולד חלב.' },
  halva: { name: 'ריבת חלב וחלווה', description: 'חלווה ושומשום עם ריבת חלב, בציפוי שוקולד לבן.' },
  'frutos-rojos': { name: 'פירות יער', description: 'קומפוט פירות יער וריבת חלב בין עוגיות קקאו.' },
  malbec: { name: 'מלבק', description: 'רדוקציית מלבק מבריקה בתוך שוקולד מריר.' },
  alfadubai: { name: 'אלפאדובאי', description: 'פיסטוק וקדאיף פריך מתחת לשוקולד מריר.' },
  blanut: { name: 'בלהנאט', description: 'אגוזי מלך וקרם, בציפוי שוקולד לבן עם אגוזים.' },
  proteina: { name: 'חלבון', description: 'אותו טעם, יותר חלבון. שוקולד מריר וניבס קקאו.' },
}
