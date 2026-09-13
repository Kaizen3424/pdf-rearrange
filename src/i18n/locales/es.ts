import type { SiteDictionary } from './en';

const es = {
  skipToContent: 'Saltar al contenido',
  siteName: 'Rearrange PDF',
  ogImageAlt:
    'Rearrange PDF — herramienta gratuita online para reorganizar, fusionar y eliminar páginas PDF en tu navegador.',
  breadcrumbAriaLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',

  langSwitcher: {
    ariaLabel: 'Cambiar idioma',
  },

  nav: {
    ariaLabel: 'Navegación principal',
    howItWorks: 'Cómo funciona',
    features: 'Funciones',
    privacy: 'Privacidad',
    faq: 'Preguntas frecuentes',
    cta: 'Reorganizar un PDF',
    toggleMenu: 'Abrir menú',
  },

  footer: {
    tagline:
      'La forma que prioriza tu privacidad para reorganizar, rotar y organizar páginas PDF. Todo ocurre en tu navegador — tus archivos nunca se suben.',
    colTool: 'Herramienta',
    colCompany: 'Empresa',
    colLegal: 'Legal',
    colLanguage: 'Idioma',
    rearrangePages: 'Reorganizar páginas PDF',
    howItWorks: 'Cómo funciona',
    guide: 'Guía para organizar PDF',
    faq: 'Preguntas frecuentes',
    about: 'Acerca de',
    contact: 'Contacto',
    privacyPolicy: 'Política de privacidad',
    termsOfService: 'Términos de servicio',
    copyright: (year: number) => `© ${year} rearrangepdf.com. Todos los derechos reservados.`,
    noAds: 'Sin anuncios. Sin rastreadores. Sin subidas.',
  },

  hero: {
    chip: '100% privado — los archivos nunca salen de tu navegador',
    h1: 'Reorganiza páginas PDF directamente en tu navegador.',
    sub: 'Arrastra y suelta para reordenar páginas, rotar, duplicar o eliminar — luego descarga al instante. Gratis, ilimitado y completamente privado.',
    bullets: ['Sin registro', 'Sin límite de páginas', 'Sin marca de agua', 'Sin límite de tamaño'],
  },

  howItWorks: {
    heading: 'Cómo reorganizar páginas PDF',
    sub: 'Tres pasos, cero subidas. Tu archivo se procesa localmente de principio a fin.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta un archivo en cualquier parte de la página, haz clic para explorar, o pega uno directamente. Añade más PDFs cuando quieras — se fusionan en un solo documento.',
      },
      {
        title: 'Organiza tus páginas',
        text: 'Arrastra las miniaturas al orden que prefieras. Rota, duplica, elimina o selecciona varias páginas a la vez — con deshacer completo si cambias de opinión.',
      },
      {
        title: 'Descarga al instante',
        text: 'Tu PDF se reconstruye directamente en tu dispositivo y se descarga en segundos. Sin marca de agua, sin registro, sin esperar en cola.',
      },
    ],
  },

  features: {
    heading: 'Todo lo que necesitas para organizar un PDF',
    sub: 'Las herramientas de reordenación de páginas que la gente ya usa — sin las subidas, los límites, los anuncios ni los registros que tanto disgustan.',
    items: [
      {
        title: 'Privacidad por diseño',
        text: 'Tu PDF se procesa íntegramente dentro de tu navegador. Sin subidas, sin servidores, sin seguimiento — abre la pestaña de red de tu navegador y verifícalo tú mismo.',
      },
      {
        title: 'Sin límites, nunca',
        text: 'Sin topes de páginas, sin techos de tamaño de archivo, sin cuotas diarias. Reordena 10 páginas o 1.000 — el procesamiento local significa que no hay nada que medir.',
      },
      {
        title: 'Resultados instantáneos',
        text: 'No hay ida y vuelta de subida y espera. Las páginas se renderizan y tu nuevo PDF se crea en tu dispositivo, así que incluso los archivos grandes se sienten inmediatos.',
      },
      {
        title: 'Deshaz cualquier cosa',
        text: 'Historial completo con deshacer y rehacer (Ctrl+Z / Ctrl+Shift+Z), selección múltiple y atajos de teclado. Experimenta libremente — nada es permanente hasta que descargas.',
      },
      {
        title: 'También para móvil',
        text: 'Áreas táctiles grandes, mantener pulsado para arrastrar y una barra de acciones cómoda para el pulgar. Reorganizar páginas en el teléfono no debería ser una molestia.',
      },
      {
        title: 'Calidad original preservada',
        text: 'Las páginas se copian byte a byte de tu PDF original. Las fuentes, vectores, imágenes y enlaces se mantienen exactamente como estaban — sin recompresión.',
      },
    ],
  },

  privacySection: {
    h2: 'Tu PDF nunca sale de tu navegador.',
    p1: 'La mayoría de las herramientas PDF online suben tu archivo a un servidor, lo procesan allí y te piden que confíes en su política de eliminación. Nosotros invertimos el modelo: la reorganización de páginas ocurre <strong>íntegramente en tu dispositivo</strong>, usando el mismo motor de renderizado que ya tiene tu navegador.',
    p2: 'Ningún servidor recibe nunca tu documento. No hay nada que filtrar, violar o subpoena. Eso lo hace seguro para contratos, historiales médicos, estados financieros y cualquier otra cosa que no le darías a un desconocido.',
    readPromise: 'Lee nuestra promesa de privacidad',
    tryNow: 'Pruébalo ahora',
    bullets: [
      {
        title: 'Cero subidas',
        text: 'El contenido de tu archivo nunca se transmite a ningún lugar.',
      },
      {
        title: 'Sin cuentas, sin anuncios, sin rastreadores',
        text: 'No necesitamos tu correo y no te seguimos por la web.',
      },
      {
        title: 'Verificable, no solo una promesa',
        text: 'Abre DevTools → Red mientras trabajas. Verás cero solicitudes de archivos.',
      },
    ],
  },

  faq: {
    heading: 'Preguntas frecuentes',
    sub: 'Todo lo que la gente suele querer saber antes de reorganizar su primer PDF.',
    items: [
      {
        q: '¿Cómo reorganizar páginas en un PDF?',
        a: 'Abre la herramienta en la parte superior de esta página y añade tu PDF, luego arrastra cualquier miniatura de página a su nueva posición — las páginas circundantes se desplazan automáticamente para dejar espacio. Rota, duplica o elimina páginas si es necesario, y haz clic en "Descargar PDF" para guardar el archivo reordenado. Todo el proceso lleva menos de un minuto y tu archivo nunca sale de tu dispositivo.',
      },
      {
        q: '¿Cómo reorganizar páginas en un PDF gratis?',
        a: 'Usa una herramienta gratuita basada en navegador como esta: añade tu PDF, arrastra las miniaturas de las páginas al orden que quieras, y descarga el resultado. No hay registro, ni marca de agua, ni límite de páginas ni nivel premium oculto — la herramienta se mantiene gratuita porque todo el procesamiento ocurre en tu propio dispositivo en lugar de en servidores de pago.',
      },
      {
        q: '¿Cómo reorganizar páginas PDF?',
        a: 'La forma más fácil es arrastrar y soltar: tu PDF aparece como una cuadrícula de miniaturas de páginas, y arrastras cada página donde debe estar. Como el editor se ejecuta íntegramente en tu navegador, no hay nada que instalar y no se sube ningún archivo a ningún lugar. Cuando el orden sea el correcto, haz clic en "Descargar PDF" para guardar el nuevo archivo.',
      },
      {
        q: '¿Cómo reorganizar páginas en un PDF en iPhone?',
        a: 'Abre esta página en Safari y toca para añadir tu PDF — desde la app Archivos, Mail o cualquier otra app que comparta PDFs. Mantén pulsada una miniatura de página brevemente para levantarla, arrástrala al lugar correspondiente, luego toca "Descargar PDF" y guarda el resultado en Archivos o compártelo directamente. No se necesita instalar ninguna app, y el mismo flujo funciona en iPad.',
      },
      {
        q: '¿Puedo reorganizar páginas PDF en el móvil?',
        a: 'Sí. El editor está diseñado para táctil: mantén pulsada una miniatura para levantarla, arrástrala a una nueva posición, y usa los botones grandes de rotar, duplicar y eliminar al alcance fácil. Funciona en Safari en iOS y Chrome en Android, y el PDF terminado se guarda directamente en tu teléfono o tableta.',
      },
      {
        q: '¿Cómo reemplazo una página PDF sin perder el formato?',
        a: 'Elimina la página que quieres reemplazar, añade el PDF que contiene la nueva página, y arrástrala a la ranura vacía. Como cada página se copia byte a byte en lugar de volver a renderizarse, las fuentes, imágenes, vectores, enlaces y metadatos se preservan exactamente — nada se recomprime ni se reestiliza.',
      },
      {
        q: '¿Cómo intercambiar, añadir, eliminar y rotar páginas PDF?',
        a: 'Las cuatro acciones están en la barra de herramientas. Intercambia dos páginas arrastrando una miniatura sobre la otra para intercambiar sus posiciones. Añade páginas insertando páginas en blanco o fusionando otro PDF, elimina páginas con la acción de eliminar, y rota páginas en pasos de 90° — individualmente o como lote de selección múltiple.',
      },
      {
        q: '¿Cómo organizar archivos PDF?',
        a: 'Empieza combinando los archivos: añade cada PDF que necesites y se fusionarán en una única cuadrícula de páginas. Luego organiza a nivel de página — agrupa páginas relacionadas, mueve secciones enteras, elimina lo que ya no necesitas, e inserta páginas en blanco como separadores. Cuando todo esté en su lugar correcto, descarga un único PDF ordenado.',
      },
      {
        q: '¿Cómo reorganizar páginas PDF gratis?',
        a: 'Las herramientas PDF gratuitas vienen en dos tipos: editores online que suben tu archivo a sus servidores, y herramientas del lado del cliente como esta que procesan todo localmente. El segundo tipo es genuinamente gratis — sin prueba, sin marca de agua, sin cuota diaria — porque tu propio dispositivo hace el trabajo. Añade un PDF, reordena las miniaturas y descarga sin costo.',
      },
      {
        q: '¿Cómo puedo reorganizar páginas en un documento PDF?',
        a: 'Carga tu documento en el editor, luego arrastra las miniaturas al nuevo orden — o selecciona varias páginas a la vez y muévelas juntas. Cada paso se puede deshacer con Ctrl+Z (Cmd+Z en Mac), y puedes restaurar el orden original con un clic, así que experimentar no tiene riesgo. Solo confirmas cuando descargas.',
      },
      {
        q: '¿Se suben mis archivos a un servidor?',
        a: 'No. Rearrange PDF se ejecuta íntegramente en tu navegador usando JavaScript. Tu PDF se lee, muestra y reconstruye en tu propio dispositivo — ningún contenido de archivo se transmite nunca. Puedes verificarlo tú mismo: abre las herramientas de desarrollador de tu navegador, observa la pestaña Red y reorganiza algunas páginas. No se envía nada.',
      },
      {
        q: '¿Puedo fusionar y reorganizar varios PDFs a la vez?',
        a: 'Sí. Añade tantos PDFs como quieras — arrastra varios archivos a la vez, o usa "Añadir PDFs" mientras editas — y se fusionan en una cuadrícula de páginas, con insignias que muestran de qué archivo proviene cada página. Luego puedes combinar y reorganizar páginas de cada documento como quieras antes de descargar un único PDF.',
      },
      {
        q: '¿Puedo deshacer un error?',
        a: 'Sí. Cada acción — reordenar, rotar, eliminar, duplicar — se registra en el historial. Pulsa Ctrl+Z (o Cmd+Z en Mac) para deshacer, Ctrl+Shift+Z para rehacer, o usa los botones de deshacer en la barra de herramientas. También puedes restaurar el orden original de páginas con un clic.',
      },
      {
        q: '¿Qué pasa con los PDFs protegidos con contraseña?',
        a: 'Los PDFs protegidos con contraseña de propietario (restricciones de edición o impresión) funcionan normalmente. Los PDFs que requieren contraseña para abrirse pueden reorganizarse si introduces la contraseña, pero exportar archivos completamente encriptados localmente aún no es compatible — verás una advertencia clara si esto se aplica a tu archivo.',
      },
    ],
  },

  seoContent: {
    h2: 'Reorganiza páginas PDF online — gratis e ilimitado',
    p1: 'Rearrange PDF es una herramienta online gratuita creada para una sola función: ayudarte a reorganizar páginas PDF de forma rápida, privada y sin fricciones. Ya sea que necesites corregir un escaneo al revés, mover un anexo al final, o poner en orden lógico una exportación caótica, obtienes un editor visual completo con miniaturas de páginas arrastrables — directamente en tu navegador. Nada que instalar, ninguna cuenta que crear, ninguna marca de agua en el resultado. Y como todo se ejecuta localmente en tu dispositivo, puedes reorganizar páginas PDF online gratis, sin las subidas, colas y límites diarios que imponen otras herramientas.',
    p2: 'El editor se comporta como una pequeña aplicación de escritorio. Cada página de tu documento aparece como una miniatura que puedes agarrar y soltar en una nueva posición, mientras las páginas restantes se desplazan automáticamente para dejar espacio. Más allá de reordenar, puedes rotar escaneados sideways, duplicar páginas repetidas, insertar hojas en blanco y seleccionar varias páginas a la vez para acciones por lotes. Un historial de deshacer completo significa que puedes experimentar libremente — nada es definitivo hasta que descargas.',
    h3Merge: 'Fusiona y reorganiza páginas PDF en un solo lugar',
    pMerge: 'Los documentos reales rara vez viven en un solo archivo: el informe es un PDF, el anexo otro, la nueva portada un tercero. Rearrange PDF te permite fusionar y reorganizar páginas PDF sin cambiar de aplicación. Suelta tantos archivos como quieras — todos a la vez, o añadiendo más a mitad de la edición — y cada página aterriza en una cuadrícula, etiquetada con una insignia de color que muestra de qué documento proviene. Desde allí puedes combinar y reorganizar páginas PDF de cada fuente en un único archivo continuo: intercalar capítulos, mover la nueva portada al frente, o insertar material extra en el medio. Un clic produce un PDF fusionado cleanly.',
    h3Delete: 'Eliminar y reorganizar páginas PDF',
    pDelete: 'Limpieza y ordenamiento suelen ir juntos. Cuando eliminas y reorganizas páginas PDF en el mismo paso, evitas exportar dos veces — y reexportar en otro lugar es exactamente donde se cuelan la pérdida de calidad y las marcas de agua. Selecciona cualquier página y elimínala con un clic, o toca varias miniaturas y elimínalas como lote. Las páginas eliminadas permanecen en tu historial de deshacer, así que un corte excesivo nunca es permanente. Combinado con las acciones de duplicar, rotar e insertar en blanco, esto convierte la herramienta en un editor de páginas ligero: recorta lo que no necesitas, ordena lo que queda, exporta una vez.',
    h3Steps: 'Cómo reorganizar páginas PDF en tres pasos',
    pSteps: 'Si te preguntas cómo reorganizar páginas PDF sin leer un manual, el flujo completo son tres movimientos:',
    steps: [
      '<strong>Añade tu PDF.</strong> Arrastra el archivo sobre la herramienta en la parte superior de esta página, haz clic para explorar, o pégalo desde el portapapeles. Añade más archivos si quieres fusionarlos.',
      '<strong>Arrastra las páginas al orden.</strong> Mueve cualquier miniatura a una nueva posición, luego rota, duplica o elimina páginas hasta que la secuencia sea la correcta. La selección múltiple y el deshacer mantienen las ediciones grandes rápidas.',
      '<strong>Descarga al instante.</strong> El PDF reconstruido se genera en tu dispositivo y se guarda inmediatamente — sin marca de agua, sin correo requerido.',
    ],
    pStepsOutro: 'Así de simple es en realidad — la forma más rápida de reorganizar páginas PDF online gratis, sin registros ni subidas. Para un recorrido más detallado, incluyendo invertir el orden de las páginas y reemplazar páginas individuales, consulta la <a href="/how-to-organize-pdf-pages">guía completa para organizar páginas PDF</a>.',
    h3Mobile: 'Reorganiza páginas PDF en iPhone, iPad y Android',
    pMobile: 'El móvil es donde muchas herramientas PDF online fallan: botones diminutos, áreas de arrastre rotas, ventanas emergentes que tapan la cuadrícula de páginas. Este editor está construido para táctil primero, así que entender cómo reorganizar páginas PDF en iPhone o iPad lleva segundos — mantén pulsada una miniatura para levantarla, arrástrala donde corresponde, suelta. Los botones de rotar, duplicar y eliminar son grandes y están al alcance del pulgar, y tocar páginas las selecciona para acciones por lotes. En iOS puedes abrir un PDF desde Archivos o Mail, compartirlo a Safari, reordenarlo y guardar el resultado directamente. El mismo flujo funciona en teléfonos y tabletas Android.',
    h3Best: '¿Cuáles son las mejores formas de reorganizar páginas PDF?',
    pBest: 'Busca las mejores formas de reorganizar páginas PDF y encontrarás tres opciones realistas. Así se comparan para el trabajo diario con documentos:',
    bestList: [
      '<strong>Una herramienta basada en navegador — mejor para la mayoría.</strong> Te permite reorganizar PDF online en segundos: nada que instalar, nada que actualizar, funciona idénticamente en Windows, Mac, Linux y teléfonos. El problema habitual es que tu archivo se sube a un servidor. Esta herramienta elimina ese problema — las páginas se procesan en tu dispositivo, nunca se transmiten.',
      '<strong>Software de escritorio — para edición pesada y repetida.</strong> Editores como Adobe Acrobat ofrecen conjuntos de herramientas PDF profundos, pero requieren suscripción, deben instalarse y mantenerse actualizados, y son excesivos cuando solo necesitas intercambiar las páginas 12 y 13.',
      '<strong>Aplicaciones móviles — convenientes, con reservas.</strong> Las apps dedicadas funcionan sin conexión, pero añaden permisos de almacenamiento, anuncios y políticas de privacidad que leer. Para una corrección puntual, una herramienta de navegador en la que ya confías es la opción más ligera.',
    ],
    pBestOutro: 'Para la mayoría de la gente, la mayor parte del tiempo, la primera opción gana: abre la <a href="/#rearrange">herramienta en la parte superior de esta página</a>, reorganiza PDF gratis de subidas y marcas de agua, y termina en menos de un minuto.',
    h3Why: 'Por qué gratis no significa arriesgado',
    pWhy: 'Las herramientas online gratuitas ganan su reputación honestamente: muchas monetizan extrayendo los documentos que subes, o estampando marcas de agua hasta que pagas. Esta herramienta toma el camino opuesto. Tu PDF se lee, muestra y reescribe íntegramente dentro de tu navegador, así que ninguna copia de tu archivo existe jamás en un servidor — nada que filtrar, nada que vender, nada retenido después de cerrar la pestaña. No tienes que tomarlo por fe: abre las herramientas de desarrollador de tu navegador, observa la pestaña de red mientras trabajas, y verás cero tráfico de archivos. Eso es lo que lo hace seguro para contratos, historiales médicos, estados financieros y cualquier cosa confidencial. Lee la <a href="/privacy">promesa de privacidad</a> completa para más detalles.',
  },

  cta: {
    h2: 'Arregla el orden de tus páginas en segundos.',
    sub: 'Sin subidas. Sin límites. Sin registro. Solo arrastra, suelta y descarga.',
    button: 'Reorganizar un PDF ahora',
  },

  errors: {
    tryAgain: 'Intentar de nuevo',
    backToTool: 'Volver a la herramienta',
    notFound: {
      title: 'Página no encontrada — Rearrange PDF',
      description: 'Esa página no existe. Vuelve atrás para reorganizar tus páginas PDF.',
      heading: 'Esta página tomó el camino wrong.',
      message: 'La página que buscas no existe — pero el orden de las páginas de tu PDF aún puede arreglarse en segundos.',
    },
    serverError: {
      title: 'Algo salió mal — Rearrange PDF',
      description: 'Ocurrió un error inesperado. Recarga para intentar de nuevo, o vuelve a la herramienta.',
      heading: 'Algo se rompió de nuestro lado.',
      message: 'Ocurrió un error inesperado. Recarga para intentar de nuevo, o vuelve a la herramienta — tus archivos nunca salieron de tu navegador.',
    },
  },

  pages: {
    home: {
      meta: {
        title: 'Reorganiza Páginas PDF Online Gratis — Fusionar, Reordenar y Eliminar Páginas | Rearrange PDF',
        description: 'Reorganiza páginas PDF online gratis. Arrastra y suelta para reordenar, fusionar, combinar o eliminar páginas — 100% privado, sin subidas, sin límites, sin registro, sin marca de agua.',
        keywords: [
          'reorganizar pdf',
          'reorganizar páginas pdf',
          'reorganizar páginas pdf gratis',
          'reorganizar páginas pdf online',
          'reorganizar páginas pdf online gratis',
          'reorganizar pdf online',
          'reorganizar pdf gratis',
          'fusionar y reorganizar pdf',
          'combinar y reorganizar pdf',
          'eliminar y reorganizar páginas pdf',
          'cómo reorganizar páginas pdf',
          'cómo reorganizar páginas pdf online gratis',
          'cómo reorganizar páginas pdf en iphone',
          'cuáles son las mejores formas de reorganizar páginas pdf',
        ],
      },
      jsonLd: {
        webApplication: {
          name: 'Rearrange PDF',
          alternateName: 'Reorganizar Páginas PDF',
          description: 'Herramienta online gratuita para reorganizar, reordenar, rotar, duplicar y eliminar páginas PDF íntegramente en tu navegador. Sin subidas, sin límites, sin registro.',
          featureList: [
            'Reordenación de páginas con arrastrar y soltar',
            'Rotar, duplicar y eliminar páginas',
            'Fusionar múltiples PDFs y reordenar el documento combinado',
            'Añadir páginas en blanco',
            'Selección múltiple con acciones por lotes',
            'Historial de deshacer y rehacer',
            'Atajos de teclado',
            'Vista previa de páginas',
            'Procesamiento 100% del lado del cliente — los archivos nunca salen del navegador',
          ],
        },
        howTo: {
          name: 'Cómo reorganizar páginas en un PDF',
          description: 'Reorganiza las páginas de cualquier PDF en tres pasos, íntegramente en tu navegador sin subidas.',
          steps: [
            {
              name: 'Añade tu PDF',
              text: 'Suelta un archivo PDF en la herramienta, haz clic para explorar, o pega uno. Puedes añadir varios PDFs a la vez para fusionarlos.',
            },
            {
              name: 'Organiza tus páginas',
              text: 'Arrastra las miniaturas de las páginas al orden que quieras. Rota, duplica o elimina páginas según sea necesario — todo se puede deshacer.',
            },
            {
              name: 'Descarga al instante',
              text: 'Haz clic en Descargar PDF. Tu archivo reorganizado se reconstruye en tu dispositivo y se guarda sin marca de agua.',
            },
          ],
        },
      },
    },

    howto: {
      meta: {
        title: 'Cómo Organizar Páginas PDF Online Gratis (Sin Subidas) — Guía Paso a Paso',
        description: 'Aprende a reorganizar, reordenar y organizar páginas PDF en cualquier navegador — gratis y sin subidas. Cubre escritorio y móvil, fusionar archivos, invertir orden, reemplazar páginas y más.',
      },
      breadcrumb: 'Cómo organizar páginas PDF',
      h1: 'Cómo organizar páginas PDF online gratis',
      intro: '¿Escaneaste tu documento al revés? ¿El anexo quedó antes de la introducción? Aquí está la forma más rápida de arreglar el orden de páginas de cualquier PDF — sin subirlo al servidor de nadie, sin crear una cuenta, ni chocar con un muro de "prueba gratuita".',
      quickH2: 'La respuesta rápida',
      quickSteps: [
        '<a href="/#rearrange">Abre la herramienta</a> y suelta tu PDF sobre ella.',
        'Arrastra las miniaturas de las páginas al orden que quieras.',
        'Haz clic en <strong>Descargar PDF</strong> — listo, sin marca de agua.',
      ],
      detailedH2: 'Paso a paso: reorganizar páginas en detalle',
      step1H: 'Paso 1 — Añade tu PDF',
      step1P: 'Arrastra el archivo desde tu escritorio o administrador de archivos directamente sobre la tarjeta de subida, o haz clic para explorar. También puedes copiar un PDF y pegarlo con <strong>Ctrl+V</strong> (⌘V en Mac). ¿Quieres combinar documentos primero? Suelta varios PDFs a la vez — sus páginas se fusionan en una única cuadrícula, cada archivo marcado con su propio color, para que luego puedas intercalar páginas de todos ellos.',
      step2H: 'Paso 2 — Arrastra las páginas al orden',
      step2P1: 'Cada página se muestra como una miniatura. Agarra una y arrástrala donde corresponda — las demás hacen espacio mientras mueves. En un teléfono o tableta, mantén pulsada una página brevemente para levantarla, luego arrástrala.',
      step2P2: 'Al pasar el cursor sobre una página aparecen pequeños botones para <strong>rotar</strong> (corregir escaneados al revés), <strong>duplicar</strong>, <strong>previsualizar</strong> a tamaño completo, o <strong>eliminar</strong>. Haz clic en las páginas para seleccionar varias a la vez — o <strong>Ctrl+A</strong> para seleccionar todas — luego rota o elimina todas de una vez desde la barra de herramientas que aparece.',
      step3H: 'Paso 3 — Descarga tu PDF organizado',
      step3P: 'Pulsa <strong>Descargar PDF</strong>. El archivo se reconstruye en tu dispositivo — las páginas originales exactas, solo en el orden que elegiste — y se guarda directamente en tu carpeta de descargas. Sin marca de agua, sin correo requerido, sin cola.',
      tricksH2: 'Trucos útiles que vale la pena conocer',
      tricks: [
        '<strong>Nada es permanente.</strong> Cada acción se puede deshacer con Ctrl+Z, y rehacer con Ctrl+Shift+Z. Experimenta libremente — el botón de un clic "restaurar orden original" lleva todo el documento de vuelta a como empezó.',
        '<strong>Invierte un documento entero</strong> con el botón de orden inverso en la barra de herramientas — útil para escaneados al revés, sin necesidad de arrastrar.',
        '<strong>Reemplaza una página:</strong> elimina la página obsoleta, haz clic en "Añadir PDFs" para traer la nueva, luego arrástrala a su posición.',
        '<strong>Inserta una página en blanco</strong> en cualquier lugar — útil para notas o separadores de impresión — con el botón "+" en la barra de herramientas.',
        '<strong>Conservar solo lo que necesitas:</strong> selecciona las páginas que quieres conservar, invierte nada — simplemente elimina las demás, y descarga el documento recortado.',
        '<strong>Revisa antes de confirmar:</strong> abre cualquier página a tamaño completo con el botón de vista previa y navega por el documento con las teclas de flecha antes de descargar.',
      ],
      mobileH2: 'Reorganizar páginas PDF en el móvil',
      mobileP: 'El editor está diseñado para táctil primero: las miniaturas son grandes, los botones de acción están al alcance del pulgar, y arrastrar funciona con una corta pulsación mantenida. Toca las páginas para seleccionarlas para rotar o eliminar por lotes. En iOS o Android, puedes abrir un PDF desde tu app Archivos o Drive, compartirlo al navegador y reorganizarlo ahí mismo.',
      localH2: 'Por qué importa reorganizar localmente',
      localP: 'La mayoría de los "gratuitos" organizadores PDF suben tu archivo a un servidor de procesamiento, luego prometen eliminarlo después. Eso está bien hasta que no lo está — los contratos, historiales médicos y estados financieros merecen algo mejor. Esta herramienta hace todo el trabajo dentro de la pestaña de tu navegador: tu PDF se lee en memoria, se muestra y se reescribe sin que un solo byte salga de tu dispositivo. No tienes que creerte nada — abre las herramientas de desarrollador de tu navegador, observa la pestaña de red y reorganiza tranquilo.',
      ctaH2: '¿Listo para arreglar el orden de tus páginas?',
      ctaP: 'Gratis, ilimitado, sin registro — y tu archivo nunca sale del navegador.',
      ctaButton: 'Reorganizar un PDF ahora',
      faqOutro: '¿Buscas más respuestas? Consulta las <a href="/#faq">preguntas frecuentes en la página de inicio</a>.',
      jsonLd: {
        howTo: {
          name: 'Cómo organizar páginas PDF online gratis',
          description: 'Una guía paso a paso para reorganizar páginas PDF en tu navegador sin subir el archivo a ningún lugar.',
          steps: [
            {
              name: 'Abre la herramienta y añade tu PDF',
              text: 'Ve a rearrangepdf.com y suelta tu PDF sobre la herramienta, haz clic en "Seleccionar archivo PDF", o pega el archivo con Ctrl+V.',
            },
            {
              name: 'Arrastra las páginas al nuevo orden',
              text: 'Arrastra cualquier miniatura de página a una nueva posición. Usa los botones al pasar el cursor o la barra de herramientas de selección para rotar, duplicar o eliminar páginas.',
            },
            {
              name: 'Descarga el PDF organizado',
              text: 'Haz clic en "Descargar PDF" — el archivo se reconstruye en tu dispositivo y se guarda inmediatamente, sin marca de agua.',
            },
          ],
        },
      },
    },

    about: {
      meta: {
        title: 'Acerca de — Rearrange PDF',
        description: 'Por qué construimos un organizador de páginas PDF que nunca sube tus archivos, cómo funciona internamente, y cómo contactar con nosotros.',
      },
      breadcrumb: 'Acerca de',
      h1: 'Una herramienta, bien hecha.',
      p1: 'Reorganizar las páginas de un PDF es un trabajo pequeño. Escaneaste un contrato al revés, o el resumen de un informe quedó al final, y solo quieres que esté arreglado. Sin embargo, la mayoría de las herramientas para esta tarea simple piden mucho a cambio: tu archivo se sube a un servidor que no conoces, llegas a un límite diario después de dos documentos, y generalmente hay un aviso de actualización esperando.',
      p2: 'Construimos Rearrange PDF porque nada de eso es necesario. Reordenar páginas no necesita un servidor — un navegador moderno tiene todo lo necesario para leer, mostrar y reconstruir un PDF. Así que esto es todo lo que es este sitio: una sola página, una zona de arrastre y una cuadrícula de miniaturas que puedes arrastrar. Sin subidas, sin cuentas, sin anuncios, sin límites.',
      howItWorksH2: 'Cómo funciona',
      howItWorksP: 'Bajo el capó, la herramienta usa dos bibliotecas de código abierto que se ejecutan íntegramente en tu navegador: <strong>PDF.js</strong> renderiza cada página como miniatura, y <strong>pdf-lib</strong> assembla tu nuevo documento copiando las páginas originales — byte a byte, así que el formato, las fuentes y la calidad se preservan exactamente. Cuando haces clic en descargar, el PDF terminado se crea ahí mismo en la pestaña y se entrega al diálogo de guardar de tu navegador.',
      getInTouchH2: 'Ponte en contacto',
      getInTouchP: '¿Encontraste un PDF que no funciona? ¿Tienes una idea para la herramienta? Leemos todo — <a href="/contact">contáctanos</a> en <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a>.',
      ctaH2: 'Pruébalo con tu propio archivo',
      ctaP: 'Es gratis, ilimitado — y nada sale nunca de tu navegador.',
      ctaButton: 'Reorganizar un PDF',
    },

    contact: {
      meta: {
        title: 'Contacto — Rearrange PDF',
        description: 'Ponerse en contacto con el equipo detrás de Rearrange PDF. Reporta un archivo que no funciona, sugiere una función, o haz una pregunta sobre el organizador de páginas PDF basado en navegador.',
      },
      breadcrumb: 'Contacto',
      h1: 'Contáctanos',
      intro: '¿Encontraste un PDF que no abre? ¿Tienes una idea que haría la herramienta mejor? Leemos cada mensaje y realmente apreciamos los comentarios.',
      emailH2: 'Escríbenos',
      emailP: 'La forma más rápida de contactarnos es por correo electrónico. Somos un equipo pequeño, así que por favor permite un par de días para una respuesta.',
      beforeH2: 'Antes de escribir',
      beforeP: 'Algunas notas nos ayudan a ayudarte más rápido:',
      beforeItems: [
        '<strong>Cuéntanos qué archivo se portó mal.</strong> Si un PDF no carga o exporta, describe el tipo de documento (escaneado, formulario, encriptado, muy grande) en lugar de enviar el archivo.',
        '<strong>No podemos ver tus archivos.</strong> La herramienta se ejecuta íntegramente en tu navegador, así que tus PDFs nunca nos llegan. Por favor no envíes documentos sensibles — una descripción es todo lo que necesitamos.',
        '<strong>Incluye tu navegador y dispositivo</strong> (por ejemplo, "Safari en iPhone") si estás reportando un problema — nos ayuda a reproducirlo.',
      ],
      answersH2: 'Quizás encuentres la respuesta justo aquí',
      helpLinks: [
        {
          title: 'Lee las preguntas frecuentes',
          body: 'Respuestas rápidas sobre subidas, tamaño de archivo, calidad de páginas y privacidad.',
        },
        {
          title: 'Abre la guía',
          body: 'Instrucciones paso a paso para reordenar, rotar y eliminar páginas.',
        },
        {
          title: 'Revisa nuestra política de privacidad',
          body: 'Exactamente qué hace la herramienta — y qué no — con tus archivos.',
        },
      ],
      dataH2: 'Sobre tus datos',
      dataP: 'Como no recopilamos datos personales, generalmente no hay nada que podamos buscar en tu nombre — pero si tienes una pregunta de privacidad, estamos felices de responderla. Consulta nuestra <a href="/privacy">política de privacidad</a> y <a href="/terms">términos de servicio</a> para los detalles completos.',
      ctaH2: '¿Necesitas arreglar un PDF ahora mismo?',
      ctaP: 'La herramienta es gratis, ilimitada — y nada sale nunca de tu navegador.',
      ctaButton: 'Reorganizar un PDF',
      jsonLd: {
        contactPage: {
          name: 'Contactar con Rearrange PDF',
          description: 'Datos de contacto de Rearrange PDF, la herramienta basada en navegador para reorganizar y organizar páginas PDF sin subir.',
        },
      },
    },

    privacy: {
      meta: {
        title: 'Política de Privacidad — Rearrange PDF',
        description: 'Nuestra promesa de privacidad: tus PDFs nunca salen de tu navegador, no ejecutamos anuncios ni rastreadores, y no recopilamos datos personales. Lee la política completa.',
      },
      breadcrumb: 'Política de privacidad',
      h1: 'Política de privacidad',
      lastUpdated: 'Última actualización: septiembre de 2026',
      shortH2: 'La versión corta',
      shortItems: [
        'Tus archivos PDF nunca salen de tu dispositivo. Todo el procesamiento ocurre en tu navegador.',
        'No tenemos cuentas de usuario y no recopilamos datos personales.',
        'No ejecutamos anuncios y no incrustamos rastreadores de terceros de ningún tipo.',
        'La única medición que usamos es analítica agregada sin cookies (ver abajo).',
      ],
      sections: [
        {
          title: '1. Cómo funciona la herramienta',
          text: 'Rearrange PDF es una aplicación del lado del cliente. Cuando abres un PDF aquí, el archivo se lee directamente por tu navegador usando las APIs de JavaScript disponibles en esta página. Las miniaturas se renderizan y tu documento editado se reconstruye íntegramente en tu dispositivo. Ningún contenido de archivo se transmite a nosotros ni a ningún tercero — no hay servidor de subida al que enviarlo.',
        },
        {
          title: '2. Lo que nunca recopilamos',
          bullets: [
            'Los contenidos, nombres o metadatos de tus archivos PDF',
            'Cualquier información de cuenta — la herramienta no requiere registro',
            'Cookies de publicidad o seguimiento entre sitios de ningún tipo',
          ],
        },
        {
          title: '3. Lo que se recopila',
          subsections: [
            {
              title: 'Analítica sin cookies',
              text: 'Usamos Cloudflare Web Analytics para entender el uso agregado del sitio (por ejemplo, cuántas personas visitan la herramienta y desde qué país). Este servicio no usa cookies y no identifica visitantes individuales. No te sigue a través de otros sitios web.',
            },
            {
              title: 'Registros estándar del servidor',
              text: 'Como cualquier sitio web, nuestro proveedor de alojamiento (Cloudflare) mantiene registros técnicos de corta duración de las solicitudes realizadas para cargar el sitio en sí — cosas como dirección IP, tipo de navegador y marcas de tiempo. Estos registros nunca incluyen tus documentos (que nunca se suben) y solo existen para mantener el sitio seguro y operativo.',
            },
          ],
        },
        {
          title: '4. Verifícalo tú mismo',
          text: 'No tienes que confiar en esta página. Abre las herramientas de desarrollador de tu navegador (F12), cambia a la pestaña Red y usa la herramienta: sube un PDF, arrastra páginas, descarga el resultado. Verás que ninguna solicitud lleva tu archivo.',
        },
        {
          title: '5. Tus derechos',
          text: 'Como no procesamos datos personales más allá de las estadísticas anónimas agregadas descritas arriba, generalmente no hay datos personales tuyos a los que nosotros podamos acceder, corregir o borrar. Si crees lo contrario y te gustaría contactarnos, ver abajo.',
        },
        {
          title: '6. Cambios a esta política',
          text: 'Si alguna vez cambiamos cómo funciona el sitio de una manera que afecte la privacidad, actualizaremos esta página. La herramienta permanecerá del lado del cliente — ese es el punto completo del sitio.',
        },
        {
          title: '7. Contacto',
          text: '¿Preguntas sobre privacidad? Envía un correo a <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> o visita nuestra <a href="/contact">página de contacto</a>.',
        },
      ],
    },

    terms: {
      meta: {
        title: 'Términos de Servicio — Rearrange PDF',
        description: 'Los términos que aplican cuando usas rearrangepdf.com para reorganizar páginas PDF en tu navegador.',
      },
      breadcrumb: 'Términos de servicio',
      h1: 'Términos de servicio',
      lastUpdated: 'Última actualización: septiembre de 2026',
      sections: [
        {
          title: '1. El servicio',
          text: 'Rearrange PDF (rearrangepdf.com) es una herramienta gratuita basada en navegador que te permite reorganizar, rotar, duplicar, eliminar y organizar las páginas de archivos PDF. Todo el procesamiento ocurre localmente en tu navegador web; tus archivos no se suben a nosotros.',
        },
        {
          title: '2. Aceptación',
          text: 'Al usar el sitio aceptas estos términos. Si no estás de acuerdo, por favor no uses el servicio.',
        },
        {
          title: '3. Tu contenido',
          text: 'Conservas todos los derechos sobre los documentos con los que trabajas. Como los archivos se procesan en tu propio dispositivo, nunca los recibimos, almacenamos ni procesamos. Eres responsable de tener los derechos sobre cualquier documento que abras en la herramienta y de cumplir con la ley aplicable.',
        },
        {
          title: '4. Sin garantía',
          text: 'El servicio se proporciona "tal cual", de forma gratuita, sin garantías de ningún tipo. Trabajamos duro para mantenerlo preciso y confiable — el contenido de las páginas se copia byte a byte de tu archivo original — pero no podemos garantizar disponibilidad ininterrumpida o idoneidad para un propósito particular. Guarda copias de seguridad de documentos importantes.',
        },
        {
          title: '5. Limitación de responsabilidad',
          text: 'En la máxima medida permitida por la ley, no somos responsables de ningún daño que surja del uso o la incapacidad de usar el servicio.',
        },
        {
          title: '6. Cambios',
          text: 'Podemos actualizar el servicio o estos términos en cualquier momento. El uso continuado después de los cambios significa que aceptas los términos actualizados. La versión actual siempre está disponible en esta página.',
        },
        {
          title: '7. Contacto',
          text: '¿Preguntas sobre estos términos? Envía un correo a <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> o visita nuestra <a href="/contact">página de contacto</a>.',
        },
      ],
    },
  },
} satisfies SiteDictionary;

export default es;