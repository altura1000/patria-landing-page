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

/** One block of a legal text: a string is a paragraph, a string[] is a bulleted list. */
type Block = string | string[]

export interface Copy {
  meta: { homeTitle: string; saboresTitle: string; privacyTitle: string }
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
  footer: { eyebrow: string; text: string; follow: string; label: string; privacy: string }
  floating: { label: string; aria: string }
  /** Pre-filled WhatsApp text of every "Quiero probar" / "אני רוצה לטעום" button (see components/TryWhatsAppLink). */
  whatsapp: { tryMessage: string }
  sabores: {
    backLabel: string
    intro: { eyebrow: string; title: Lines; text: string }
    cta: { title: string; text: string; button: string; back: string }
  }
  /** /privacy. */
  privacy: {
    eyebrow: string
    title: string
    updatedLabel: string
    updated: string
    sections: { title: string; body: Block[] }[]
    contact: {
      title: string
      text: string
      whatsapp: string
      /** Pre-filled WhatsApp text of the privacy contact link. */
      whatsappMessage: string
    }
    changes: { title: string; body: Block[] }
    back: string
  }
}

const es: Copy = {
  meta: {
    homeTitle: 'PATRIA · Alfajores argentinos',
    saboresTitle: 'PATRIA · Todos los sabores',
    privacyTitle: 'Política de privacidad | PATRIA',
  },
  ui: { langGroup: 'Idioma', sealAlt: 'PATRIA — Orgullo Argentino', backArrow: '←' },
  hero: {
    imgAlt: 'Alfajor Bon Bon cortado al medio, con el dulce de leche a la vista',
    title: ['Como los', 'de allá.'],
    tag: 'Alfajores argentinos · hechos a mano',
    cta: 'Quiero probar',
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
    instaLabel: 'En sus historias',
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
    privacy: 'Política de privacidad',
  },
  floating: { label: 'Quiero probar', aria: 'Quiero probar, por WhatsApp' },
  whatsapp: { tryMessage: 'Hola PATRIA 🤎 Me tentaron… quiero probar sus alfajores. ¿Me ayudan a elegir?' },
  sabores: {
    backLabel: 'Volver',
    intro: {
      eyebrow: 'La carta completa',
      title: ['Los ocho', 'sabores.'],
      text: 'Todos se cortan igual de generosos. Elegí el tuyo y escribinos.',
    },
    cta: {
      title: '¿No sabés cuál?',
      text: 'Contanos qué te gusta y te armamos la caja.',
      button: 'Hacer mi pedido',
      back: 'Volver al inicio',
    },
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Política de privacidad',
    updatedLabel: 'Última actualización',
    updated: '27 de septiembre de 2026',
    sections: [
      {
        title: 'Introducción',
        body: [
          'En PATRIA hacemos alfajores argentinos a mano y los vendemos por pedido. Esta política explica qué información personal podemos recibir de nuestros clientes y de quienes nos escriben, para qué la usamos, con quién la compartimos y qué derechos tenés sobre ella.',
          'Se aplica a este sitio web y a las consultas y pedidos que gestionamos por WhatsApp e Instagram. PATRIA es responsable de la información personal que se trata según esta política. Para cualquier consulta sobre privacidad, podés escribirnos por WhatsApp (ver «Contacto sobre privacidad» más abajo).',
        ],
      },
      {
        title: 'Información que podemos recopilar',
        body: [
          'Recopilamos solo la información que necesitamos para atender consultas y pedidos. Según cómo te comuniques con nosotros, puede incluir:',
          [
            'Tu nombre.',
            'Tu número de teléfono.',
            'La dirección y la ciudad de entrega.',
            'Los detalles del pedido: sabores, cantidades, fechas y preferencias de entrega.',
            'Los mensajes y las comunicaciones que intercambiamos con vos.',
            'Información sobre tu relación con nosotros como cliente o posible cliente, por ejemplo consultas y pedidos anteriores y notas de seguimiento.',
            'El estado de la entrega y del pago de cada pedido.',
            'Cualquier otra información que decidas compartirnos por WhatsApp, Instagram o a través del sitio.',
          ],
          'Este sitio no tiene formularios ni cuentas de usuario y no te pide datos personales para navegarlo. La información nos llega cuando nos escribís.',
        ],
      },
      {
        title: 'Cómo usamos la información',
        body: [
          'Usamos la información para:',
          [
            'Responder tus consultas.',
            'Procesar, preparar y entregar tus pedidos.',
            'Brindarte atención al cliente.',
            'Gestionar nuestra relación con clientes y posibles clientes.',
            'Mantener un historial de pedidos.',
            'Mejorar nuestros productos, nuestro servicio y este sitio.',
            'Fines operativos y de seguridad, como prevenir errores, fraudes o usos indebidos.',
            'Cumplir con las obligaciones legales que nos correspondan.',
          ],
        ],
      },
      {
        title: 'Pedidos y entregas',
        body: [
          'Para coordinar un pedido necesitamos saber qué querés, a nombre de quién va, a qué dirección y ciudad lo llevamos y un teléfono de contacto. Usamos esos datos para preparar el pedido, acordar el día y la forma de entrega y avisarte si surge algún cambio.',
          'Si la entrega la realiza un tercero (por ejemplo, un servicio de mensajería), le pasamos solo los datos necesarios para entregar: nombre, dirección, ciudad y teléfono.',
          'Este sitio no procesa pagos ni te pide datos de tarjetas. La forma de pago se acuerda directamente con nosotros, y en nuestros registros podemos anotar el estado del pago de cada pedido (por ejemplo, pendiente o pagado).',
        ],
      },
      {
        title: 'Comunicaciones con clientes',
        body: [
          'Cuando nos escribís, guardamos la conversación y los datos que nos compartís para poder responderte, darle seguimiento a tu pedido y atenderte mejor la próxima vez.',
          'Podemos escribirte sobre un pedido en curso para confirmar detalles o resolver algún problema. Solo te enviamos mensajes promocionales si nos diste tu consentimiento, y podés pedirnos que dejemos de hacerlo cuando quieras.',
        ],
      },
      {
        title: 'Comunicaciones por WhatsApp e Instagram',
        body: [
          'Los botones de pedido de este sitio abren WhatsApp con un mensaje ya escrito. El mensaje no se envía hasta que vos lo mandás, y este sitio no recibe ni guarda nada de lo que escribís ahí.',
          'WhatsApp e Instagram son servicios de Meta. Cuando nos escribís por esos canales, la comunicación también está sujeta a los términos y las políticas de privacidad de esos servicios, que tratan la información según sus propias reglas. Te recomendamos revisarlas.',
          'La información que recibimos por esos canales (por ejemplo, tu nombre de perfil, tu número o usuario y el contenido de los mensajes) la usamos solo para los fines que describe esta política.',
        ],
      },
      {
        title: 'Gestión de clientes y almacenamiento',
        body: [
          'Para organizar consultas, clientes y pedidos usamos un sistema interno de gestión de clientes (CRM). Allí registramos datos como tu nombre, teléfono, dirección de entrega, los detalles y el historial de tus pedidos, el estado de la entrega y del pago, y notas sobre nuestras conversaciones.',
          'La información se guarda en servicios en la nube de proveedores externos, y procuramos que solo accedan a ella las personas de PATRIA que la necesitan para su trabajo.',
        ],
      },
      {
        title: 'Proveedores de servicios',
        body: [
          'Para operar trabajamos con proveedores que pueden tratar información personal en nuestro nombre, por ejemplo:',
          [
            'Servicios de mensajería y redes sociales (WhatsApp e Instagram).',
            'Proveedores de alojamiento web e infraestructura en la nube, incluida la base de datos de nuestro sistema de gestión de clientes.',
            'Servicios de entrega o mensajería, cuando corresponda.',
          ],
          'Procuramos trabajar con proveedores que protejan la información y la usen solo para prestarnos su servicio. Algunos pueden almacenar o tratar datos en servidores fuera de Israel.',
        ],
      },
      {
        title: 'Analítica y uso del sitio',
        body: [
          'Actualmente este sitio no usa cookies, herramientas de analítica (como Google Analytics) ni píxeles de seguimiento (como Meta Pixel), y no tiene formularios.',
          'Como en cualquier sitio web, el proveedor que lo aloja puede registrar automáticamente datos técnicos básicos de cada visita, como la dirección IP, el tipo de navegador y la fecha y hora de acceso, para mostrar la página y mantenerla segura.',
          'Si en el futuro incorporamos herramientas de analítica o cookies, vamos a actualizar esta política para informarlo.',
        ],
      },
      {
        title: 'Seguridad de la información',
        body: [
          'Aplicamos medidas técnicas y organizativas razonables para proteger la información personal contra accesos no autorizados, pérdidas o usos indebidos. Sin embargo, ningún sistema ni transmisión por internet es totalmente infalible, por lo que no podemos garantizar una seguridad absoluta.',
          'Si creés que tu información pudo haberse visto comprometida, escribinos lo antes posible.',
        ],
      },
      {
        title: 'Conservación de la información',
        body: [
          'Conservamos la información mientras sea necesaria para los fines que describe esta política: atender tu consulta, gestionar tus pedidos, mantener el historial de clientes y cumplir con nuestras obligaciones legales, contables o fiscales. Cuando ya no la necesitamos, la eliminamos o la anonimizamos dentro de un plazo razonable.',
        ],
      },
      {
        title: 'Cuándo compartimos información',
        body: [
          'No vendemos ni alquilamos tu información personal. Solo la compartimos:',
          [
            'Con los proveedores de servicios mencionados, en la medida necesaria para que nos presten su servicio.',
            'Con quien realice la entrega de tu pedido, cuando corresponda.',
            'Cuando la ley lo exija o una autoridad competente lo solicite válidamente.',
            'Cuando sea necesario para proteger nuestros derechos, los de nuestros clientes o los de terceros.',
            'En cualquier otro caso, solo con tu consentimiento.',
          ],
        ],
      },
      {
        title: 'Tus derechos',
        body: [
          'De acuerdo con la legislación aplicable, incluida la Ley de Protección de la Privacidad de Israel (5741-1981), tenés derecho a:',
          [
            'Solicitar acceso a la información personal que tenemos sobre vos.',
            'Solicitar que corrijamos la información que sea incorrecta, incompleta, poco clara o desactualizada.',
            'Solicitar que dejemos de enviarte comunicaciones promocionales.',
          ],
          'También podés solicitar la eliminación de información cuando corresponda de acuerdo con la legislación aplicable, teniendo en cuenta que podemos necesitar conservar determinada información para cumplir obligaciones legales, contables o fiscales.',
          'Para ejercer estos derechos, escribinos por WhatsApp (ver abajo). Es posible que te pidamos algunos datos para verificar tu identidad antes de responder, y vamos a contestarte dentro de los plazos que establezca la ley.',
        ],
      },
    ],
    contact: {
      title: 'Contacto sobre privacidad',
      text: 'Si tenés preguntas sobre esta política o querés ejercer tus derechos, escribinos por WhatsApp:',
      whatsapp: 'Escribinos por WhatsApp',
      whatsappMessage: 'Hola PATRIA, tengo una consulta sobre privacidad.',
    },
    changes: {
      title: 'Cambios en esta política',
      body: [
        'Podemos actualizar esta política cuando cambie nuestra forma de trabajar o la legislación aplicable. La versión vigente siempre va a estar publicada en esta página, con la fecha de la última actualización arriba. Si los cambios son importantes, vamos a intentar avisarte también por los canales habituales.',
      ],
    },
    back: 'Volver al inicio',
  },
}

const he: Copy = {
  meta: {
    homeTitle: 'PATRIA · אלפחורס ארגנטינאי', // REVIEW
    saboresTitle: 'PATRIA · כל הטעמים', // REVIEW
    privacyTitle: 'מדיניות פרטיות | PATRIA',
  },
  ui: { langGroup: 'שפה', sealAlt: 'PATRIA — גאווה ארגנטינאית', backArrow: '→' },
  hero: {
    imgAlt: 'אלפחור בון בון חתוך לשניים, עם ריבת החלב לעין', // REVIEW
    // "Como los de allá" — literal: "like the ones from Argentina".  // REVIEW (headline)
    title: ['כמו אלה', 'שבארגנטינה.'],
    tag: 'אלפחורס ארגנטינאי · בעבודת יד', // from the design-system kit ("אלפחורס ארגנטינאי, בעבודת יד")
    cta: 'אני רוצה לטעום', // REVIEW
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
    instaLabel: 'מהסטוריז שלכם', // REVIEW
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
    privacy: 'מדיניות פרטיות',
  },
  floating: { label: 'אני רוצה לטעום', aria: 'אני רוצה לטעום, בוואטסאפ' }, // REVIEW
  whatsapp: { tryMessage: 'היי PATRIA 🤎 עשיתם לי חשק… אני רוצה לטעום 😋 תעזרו לי לבחור?' },
  sabores: {
    backLabel: 'חזרה', // from the kit ("חזרה")
    intro: {
      eyebrow: 'התפריט המלא', // REVIEW
      title: ['שמונה', 'טעמים.'], // REVIEW
      text: 'כולם נחתכים באותה נדיבות. בחרו את הטעם שלכם וכתבו לנו.', // REVIEW
    },
    cta: {
      title: 'לא בטוחים איזה לבחור?', // REVIEW
      text: 'ספרו לנו מה אתם אוהבים ונרכיב לכם קופסה.', // REVIEW
      button: 'לבצע הזמנה', // REVIEW
      back: 'חזרה לדף הבית', // REVIEW
    },
  },
  // REVIEW (whole section): translated from the Spanish policy; have a native speaker / legal advisor check it.
  privacy: {
    eyebrow: 'מידע משפטי',
    title: 'מדיניות פרטיות',
    updatedLabel: 'עודכן לאחרונה',
    updated: '27 בספטמבר 2026',
    sections: [
      {
        title: 'מבוא',
        body: [
          'ב־PATRIA אנחנו מכינים אלפחורס ארגנטינאי בעבודת יד ומוכרים אותם בהזמנה. מדיניות זו מסבירה איזה מידע אישי אנחנו עשויים לקבל מלקוחות וממי שפונה אלינו, למה אנחנו משתמשים בו, עם מי אנחנו משתפים אותו ואילו זכויות יש לכם לגביו.',
          'המדיניות חלה על אתר זה ועל הפניות וההזמנות שאנחנו מנהלים בוואטסאפ ובאינסטגרם. PATRIA אחראית למידע האישי המעובד לפי מדיניות זו. בכל שאלה בנושא פרטיות אפשר לכתוב לנו בוואטסאפ (ראו "יצירת קשר בנושא פרטיות" בהמשך).',
        ],
      },
      {
        title: 'מידע שאנחנו עשויים לאסוף',
        body: [
          'אנחנו אוספים רק את המידע שנחוץ לנו כדי לטפל בפניות ובהזמנות. בהתאם לאופן שבו אתם פונים אלינו, הוא עשוי לכלול:',
          [
            'שם.',
            'מספר טלפון.',
            'כתובת ועיר למשלוח.',
            'פרטי ההזמנה: טעמים, כמויות, תאריכים והעדפות משלוח.',
            'הודעות ותכתובות שלכם איתנו.',
            'מידע על הקשר שלכם איתנו כלקוחות או כמתעניינים, למשל פניות והזמנות קודמות והערות מעקב.',
            'סטטוס המשלוח והתשלום של כל הזמנה.',
            'כל מידע אחר שתבחרו לשתף איתנו בוואטסאפ, באינסטגרם או דרך האתר.',
          ],
          'באתר אין טפסים ואין חשבונות משתמש, ולא מתבקשים בו פרטים אישיים כדי לגלוש. המידע מגיע אלינו כשאתם כותבים לנו.',
        ],
      },
      {
        title: 'איך אנחנו משתמשים במידע',
        body: [
          'אנחנו משתמשים במידע כדי:',
          [
            'להשיב לפניות שלכם.',
            'לעבד, להכין ולמסור את ההזמנות שלכם.',
            'לתת לכם שירות לקוחות.',
            'לנהל את הקשר עם לקוחות ועם מתעניינים.',
            'לשמור היסטוריית הזמנות.',
            'לשפר את המוצרים, את השירות ואת האתר.',
            'למטרות תפעוליות ואבטחתיות, כמו מניעת טעויות, הונאות או שימוש לרעה.',
            'לעמוד בחובות החוקיות החלות עלינו.',
          ],
        ],
      },
      {
        title: 'הזמנות ומשלוחים',
        body: [
          'כדי לתאם הזמנה אנחנו צריכים לדעת מה תרצו להזמין, על שם מי ההזמנה, לאיזו כתובת ועיר לשלוח ומספר טלפון ליצירת קשר. אנחנו משתמשים בפרטים האלה כדי להכין את ההזמנה, לתאם את יום המשלוח ואת אופן המסירה ולעדכן אתכם אם משהו משתנה.',
          'אם המשלוח מתבצע על ידי גורם חיצוני (למשל שירות שליחויות), נעביר לו רק את הפרטים הדרושים למסירה: שם, כתובת, עיר וטלפון.',
          'האתר אינו מעבד תשלומים ואינו מבקש פרטי כרטיס אשראי. אופן התשלום מתואם ישירות איתנו, וברישומים שלנו אנחנו עשויים לציין את סטטוס התשלום של כל הזמנה (למשל ממתין או שולם).',
        ],
      },
      {
        title: 'תקשורת עם לקוחות',
        body: [
          'כשאתם כותבים לנו, אנחנו שומרים את השיחה ואת הפרטים ששיתפתם כדי שנוכל להשיב לכם, לעקוב אחרי ההזמנה ולתת לכם שירות טוב יותר בפעם הבאה.',
          'אנחנו עשויים לפנות אליכם בנוגע להזמנה פעילה, כדי לאשר פרטים או לפתור בעיה. הודעות פרסומיות נשלח רק אם הסכמתם לכך, ותוכלו לבקש מאיתנו להפסיק בכל עת.',
        ],
      },
      {
        title: 'תקשורת בוואטסאפ ובאינסטגרם',
        body: [
          'כפתורי ההזמנה באתר פותחים את וואטסאפ עם הודעה כתובה מראש. ההודעה לא נשלחת עד שאתם שולחים אותה, והאתר עצמו אינו מקבל או שומר דבר ממה שאתם כותבים שם.',
          'וואטסאפ ואינסטגרם הם שירותים של חברת Meta. כשאתם כותבים לנו בערוצים האלה, התקשורת כפופה גם לתנאי השימוש ולמדיניות הפרטיות של אותם שירותים, שמטפלים במידע לפי הכללים שלהם. מומלץ לעיין בהם.',
          'במידע שמגיע אלינו בערוצים האלה (למשל שם הפרופיל, מספר הטלפון או שם המשתמש ותוכן ההודעות) אנחנו משתמשים רק למטרות המתוארות במדיניות זו.',
        ],
      },
      {
        title: 'ניהול לקוחות ואחסון מידע',
        body: [
          'כדי לנהל פניות, לקוחות והזמנות אנחנו משתמשים במערכת פנימית לניהול קשרי לקוחות (CRM). במערכת נרשמים פרטים כמו שם, טלפון, כתובת למשלוח, פרטי ההזמנות וההיסטוריה שלהן, סטטוס המשלוח והתשלום והערות על השיחות שלנו.',
          'המידע מאוחסן בשירותי ענן של ספקים חיצוניים, ואנחנו משתדלים שרק אנשי PATRIA שזקוקים לו לצורך עבודתם יוכלו לגשת אליו.',
        ],
      },
      {
        title: 'ספקי שירות וגורמים חיצוניים',
        body: [
          'כדי לפעול אנחנו עובדים עם ספקים שעשויים לעבד מידע אישי בשמנו, למשל:',
          [
            'שירותי הודעות ורשתות חברתיות (וואטסאפ ואינסטגרם).',
            'ספקי אחסון אתרים ותשתיות ענן, כולל מסד הנתונים של מערכת ניהול הלקוחות שלנו.',
            'שירותי משלוחים או שליחויות, כשרלוונטי.',
          ],
          'אנחנו משתדלים לעבוד עם ספקים שמגנים על המידע ומשתמשים בו רק כדי לספק לנו את השירות. חלק מהם עשויים לאחסן או לעבד מידע בשרתים מחוץ לישראל.',
        ],
      },
      {
        title: 'אנליטיקה ושימוש באתר',
        body: [
          'נכון להיום האתר אינו משתמש בעוגיות (cookies), בכלי אנליטיקה (כמו Google Analytics) או בפיקסלי מעקב (כמו Meta Pixel), ואין בו טפסים.',
          'כמו בכל אתר, ספק האחסון עשוי לתעד באופן אוטומטי נתונים טכניים בסיסיים על כל ביקור, כמו כתובת IP, סוג הדפדפן ומועד הגישה, כדי להציג את הדף ולשמור על אבטחתו.',
          'אם נוסיף בעתיד כלי אנליטיקה או עוגיות, נעדכן את המדיניות הזו בהתאם.',
        ],
      },
      {
        title: 'אבטחת מידע',
        body: [
          'אנחנו נוקטים אמצעים טכניים וארגוניים סבירים כדי להגן על מידע אישי מפני גישה לא מורשית, אובדן או שימוש לרעה. עם זאת, אף מערכת ואף העברת מידע באינטרנט אינן חסינות לחלוטין, ולכן איננו יכולים להבטיח אבטחה מוחלטת.',
          'אם אתם חושבים שהמידע שלכם נחשף, כתבו לנו בהקדם האפשרי.',
        ],
      },
      {
        title: 'שמירת מידע',
        body: [
          'אנחנו שומרים את המידע כל עוד הוא נחוץ למטרות המתוארות במדיניות זו: טיפול בפנייה, ניהול ההזמנות, שמירת היסטוריית לקוחות ועמידה בחובות חוקיות, חשבונאיות ומיסויות. כשהמידע כבר אינו נחוץ, אנחנו מוחקים אותו או הופכים אותו לאנונימי בתוך זמן סביר.',
        ],
      },
      {
        title: 'שיתוף מידע',
        body: [
          'אנחנו לא מוכרים ולא משכירים את המידע האישי שלכם. אנחנו משתפים אותו רק:',
          [
            'עם ספקי השירות שצוינו למעלה, במידה הנדרשת כדי שיספקו לנו את שירותיהם.',
            'עם מי שמבצע את משלוח ההזמנה, כשרלוונטי.',
            'כשהחוק מחייב זאת או כשרשות מוסמכת מבקשת זאת כדין.',
            'כשהדבר נחוץ כדי להגן על הזכויות שלנו, של הלקוחות שלנו או של אחרים.',
            'בכל מקרה אחר — רק בהסכמתכם.',
          ],
        ],
      },
      {
        title: 'הזכויות שלכם',
        body: [
          'בהתאם לדין החל, ובכלל זה חוק הגנת הפרטיות, התשמ"א–1981, אתם זכאים:',
          [
            'לבקש לעיין במידע האישי שאנחנו מחזיקים עליכם.',
            'לבקש שנתקן מידע שאינו נכון, שאינו שלם, שאינו ברור או שאינו מעודכן.',
            'לבקש שנפסיק לשלוח לכם דברי פרסומת.',
          ],
          'ניתן גם לבקש מחיקה של מידע במקרים שבהם הדבר מתאים לפי הדין החל, בהתחשב בכך שייתכן שנצטרך לשמור מידע מסוים כדי לעמוד בחובות חוקיות, חשבונאיות או מיסויות.',
          'כדי לממש את הזכויות האלה, כתבו לנו בוואטסאפ (ראו בהמשך). ייתכן שנבקש כמה פרטים כדי לאמת את זהותכם לפני שנשיב, ונשיב לכם בתוך המועדים הקבועים בחוק.',
        ],
      },
    ],
    contact: {
      title: 'יצירת קשר בנושא פרטיות',
      text: 'אם יש לכם שאלות על המדיניות או שאתם רוצים לממש את זכויותיכם, כתבו לנו בוואטסאפ:',
      whatsapp: 'כתבו לנו בוואטסאפ',
      whatsappMessage: 'היי PATRIA, יש לי שאלה בנושא פרטיות.',
    },
    changes: {
      title: 'שינויים במדיניות',
      body: [
        'אנחנו עשויים לעדכן את המדיניות כשדרך העבודה שלנו או הדין החל משתנים. הגרסה העדכנית תפורסם תמיד בדף הזה, עם תאריך העדכון האחרון בראשו. כשמדובר בשינויים מהותיים, נשתדל לעדכן אתכם גם בערוצים הרגילים.',
      ],
    },
    back: 'חזרה לדף הבית',
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
