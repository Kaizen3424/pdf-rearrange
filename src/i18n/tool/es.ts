import type { ToolStrings } from './en';

const es = {
  dropZone: {
    reading: 'Leyendo tu PDF…',
    processingLocally: 'Procesando localmente — nada se sube.',
    heading: 'Suelta tu PDF aquí',
    or: 'o',
    selectFile: 'Seleccionar archivo PDF',
    hint: 'Añade varios archivos para fusionarlos · pega con Ctrl+V · tamaño y páginas ilimitados',
    privacy: 'Tu archivo nunca sale de este navegador',
  },
  toolbar: {
    noFile: 'Sin archivo',
    files: (n: number) => `${n} archivo${n === 1 ? '' : 's'}`,
    pages: (n: number) => `${n} página${n === 1 ? '' : 's'}`,
    undo: 'Deshacer (Ctrl+Z)',
    redo: 'Rehacer (Ctrl+Shift+Z)',
    reverse: 'Invertir orden de páginas',
    resetLabel: 'Restaurar orden original',
    reset: 'Restablecer',
    thumbnailSize: 'Tamaño de miniatura',
    zoomSm: 'Miniaturas pequeñas',
    zoomMd: 'Miniaturas medianas',
    zoomLg: 'Miniaturas grandes',
    addPdfs: 'Añadir PDFs',
    addBlank: 'Añadir una página en blanco',
    confirm: '¿Confirmar?',
    startNew: 'Empezar nuevo',
    building: 'Construyendo…',
    download: 'Descargar PDF',
  },
  pageCard: {
    blankPage: 'página en blanco',
    sourcePage: (name: string, n: number) => `${name}, página original ${n}`,
    rotated: (deg: number) => `, rotada ${deg} grados`,
    pageOf: (pos: number, total: number) => `Página ${pos} de ${total}`,
    renderFailed: 'No se pudo renderizar esta página',
    loadingThumbnail: 'Cargando miniatura de página',
    blank: 'en blanco',
    sourceTitle: (name: string, n: number) => `${name} — página original ${n}`,
    rotatedTitle: (deg: number) => `Rotada ${deg}°`,
    preview: 'Vista previa de página',
    rotate: 'Rotar en sentido horario',
    duplicate: 'Duplicar página',
    delete: 'Eliminar página',
  },
  pageGrid: {
    dragStart: (n: number) =>
      `Página ${n} levantada. Usa las teclas de flecha para moverla, Espacio para soltar, Escape para cancelar.`,
    dragOver: (n: number) => `La página ahora está sobre la posición ${n}.`,
    dragOut: 'La página ya no está sobre un objetivo de soltar.',
    dragEnd: (n: number) => `Movida a la posición ${n}.`,
    dragCancel: 'Movimiento cancelado.',
  },
  preview: {
    dialogLabel: (pos: number, total: number) => `Vista previa de página, página ${pos} de ${total}`,
    headerBlank: (pos: number, total: number) => `Página ${pos} de ${total} — página en blanco`,
    headerFile: (pos: number, total: number, name: string) =>
      `Página ${pos} de ${total} — ${name}`,
    close: 'Cerrar vista previa',
    prev: 'Página anterior',
    next: 'Página siguiente',
    alt: (pos: number) => `Vista previa de la página ${pos}`,
  },
  password: {
    dialogLabel: 'Se requiere contraseña del PDF',
    heading: 'Contraseña requerida',
    thisPdf: 'Este PDF',
    bodySuffix: 'está protegido. Introduce su contraseña para abrirlo en tu dispositivo.',
    retry: 'Esa contraseña no funcionó — inténtalo de nuevo.',
    placeholder: 'Contraseña del PDF',
    cancel: 'Cancelar',
    unlock: 'Desbloquear',
  },
  success: {
    heading: 'Tu PDF está listo',
    body: 'Tu PDF reorganizado se ha descargado en tu dispositivo. Nada se subió — todo ocurrió directamente en tu navegador.',
    pages: (n: number) => `${n} página${n === 1 ? '' : 's'}`,
    building: 'Construyendo…',
    downloadAgain: 'Descargar de nuevo',
    startNew: 'Empezar nuevo',
    backToEditing: 'Volver a editar',
  },
  rating: {
    label: 'Califica esta herramienta de 1 a 5 estrellas',
    star: (n: number) => `${n} estrella${n > 1 ? 's' : ''}`,
    announced: (value: number) =>
      `Calificaste ${value} de 5 estrellas. ¡Gracias por tus comentarios!`,
    thanks: '¡Gracias por tus comentarios!',
    prompt: '¿Cómo nos fue?',
  },
  batch: {
    label: 'Acciones para páginas seleccionadas',
    selected: (n: number) => `${n} página${n === 1 ? '' : 's'} seleccionada${n === 1 ? '' : 's'}`,
    rotate: 'Rotar',
    duplicate: 'Duplicar',
    delete: 'Eliminar',
    all: 'Todas',
    clear: 'Limpiar',
  },
  toasts: {
    dismiss: 'Descartar notificación',
  },
  tool: {
    pagesReady: (n: number) => `${n} página${n === 1 ? '' : 's'} lista${n === 1 ? '' : 's'} para reorganizar.`,
    filesSkippedPdf: (n: number) =>
      `${n} archivo${n > 1 ? 's fueron' : ' fue'} omitido${n > 1 ? 's' : ''} — solo se admiten archivos PDF.`,
    readFailed: (name: string) => `No se pudo leer ${name}.`,
    openFailed: (name: string) =>
      `No se pudo abrir ${name} — puede estar dañado o no ser un PDF válido.`,
    readingFile: (name: string) => `Leyendo ${name}…`,
    readingFileOf: (name: string, i: number, total: number) =>
      `Leyendo ${name} (${i} de ${total})…`,
    filesSkippedPassword: (n: number) =>
      `${n} archivo${n > 1 ? 's fueron' : ' fue'} omitido${n > 1 ? 's' : ''} — la contraseña no fue introducida.`,
    encryptedInfo:
      'Este PDF está encriptado. Puedes reorganizarlo aquí, pero los archivos encriptados no se pueden reconstruir para descargar — el botón de descarga explicará cómo arreglar eso.',
    allSelected: 'Todas las páginas seleccionadas.',
    rotated: (n: number) => `${n} página${n === 1 ? '' : 's'} rotada${n === 1 ? '' : 's'}.`,
    duplicated: (n: number) => `${n} página${n === 1 ? '' : 's'} duplicada${n === 1 ? '' : 's'}.`,
    deleted: (n: number) => `${n} página${n === 1 ? '' : 's'} eliminada${n === 1 ? '' : 's'}.`,
    reversed: 'Orden de páginas invertido.',
    restored: 'Orden original de páginas restaurado.',
    blankAdded: 'Página en blanco añadida al final — arrástrala a cualquier lugar.',
    blankDocName: 'Página en blanco',
    noPagesLeft: 'No quedan páginas',
    noPagesHint: 'Deshaz la eliminación, añade más PDFs, o empieza nuevo.',
    undo: 'Deshacer',
    addPdfs: 'Añadir PDFs',
    dropOverlay: 'Suelta PDFs para añadir sus páginas',
    encryptedTitle: 'Este PDF está encriptado, así que no se puede descargar.',
    encryptedBody1:
      'Puedes reorganizar, rotar y previsualizar las páginas, pero un archivo encriptado no se puede reconstruir en tu dispositivo. Primero elimina su contraseña (ábrelo y usa ',
    encryptedStrong: 'Imprimir → Guardar como PDF',
    encryptedBody2:
      ', o la opción "eliminar seguridad" de tu app de PDF), luego añade la copia desbloqueada aquí.',
    encryptedDownloadToast:
      'Este archivo está encriptado, así que no se puede reconstruir localmente. Elimina su contraseña (ábrelo, elige Imprimir → Guardar como PDF, o usa la opción "eliminar seguridad" de tu app de PDF), luego añade la copia aquí y descarga.',
    exportFailed:
      'Este PDF no pudo ser reconstruido en tu dispositivo. Puede usar encriptación o una estructura que no podemos copiar. Prueba con un PDF sin contraseña, o exportalo de nuevo desde tu app de PDF primero.',
    downloaded: (name: string) => `Descargado ${name}.`,
    undone: 'Deshecho.',
    redone: 'Rehecho.',
  },
  shared: {
    memoryNote:
      'Nada se sube, así que no hay límite de tamaño — pero tampoco hay cola: un documento muy grande o de alta resolución consume más memoria de tu dispositivo mientras se reconstruye. Unos cientos de páginas van bien, y un escaneo de mil páginas puede ir lento en un móvil antiguo.',
    byteForByte:
      'Las páginas se copian directamente de tu archivo original, nunca se vuelven a renderizar ni a recomprimir, así que la calidad es idéntica a la del original.',
    selectAllPages: 'Seleccionar todas las páginas',
    clearSelection: 'Limpiar la selección',
    selectedCount: (n: number) => `${n} página${n === 1 ? '' : 's'} seleccionada${n === 1 ? '' : 's'}`,
    nothingSelected: 'Ninguna página seleccionada.',
  },
  split: {
    modeLabel: 'Modo de división',
    modeRange: 'Por rango de páginas',
    modeEvery: 'Cada página',
    rangeLabel: 'Rangos de páginas',
    rangePlaceholder: '1-4, 9, 15-20',
    rangeHelp: 'Un archivo por rango, en el orden en que los escribas.',
    rangeAppend: 'Haz clic en una página abajo para añadirla a los rangos.',
    orderLocked:
      'Los números de página siguen siempre el orden de tu documento original — dividir nunca cambia tu archivo.',
    pageControlsDisabled:
      'Rotar, duplicar y eliminar pertenecen al editor y aquí no hacen nada — dividir nunca cambia tu archivo. Usa la herramienta "Extraer páginas de un PDF" para cambiar qué páginas se incluyen.',
    errorEmpty: 'Introduce al menos un rango de páginas o cambia a "Cada página".',
    errorZero: 'Los números de página empiezan en 1.',
    errorSyntax: (part: string) =>
      `${part} no es un número de página. Usa números separados por comas y guiones — por ejemplo 1-4, 9, 15-20.`,
    errorUnfinished: (part: string) => `A ${part} le falta un número de página.`,
    errorTrailing:
      'Quita la coma sobrante o termina el último rango con un número de página.',
    errorReversed: (part: string) =>
      `${part} va al revés. Escríbelo al otro orden, como 3-7.`,
    errorOutOfBounds: (max: number) =>
      `Ese rango pasa de la última página. Este documento tiene ${max} página${max === 1 ? '' : 's'}.`,
    planLabel: 'Archivos que se crearán',
    planEmpty: 'Introduce un rango para ver los archivos que obtendrás.',
    planItem: (part: number, label: string, pages: number) =>
      `${label} — ${pages} página${pages === 1 ? '' : 's'}`,
    planCount: (n: number) => `Se crearán ${n} archivo${n === 1 ? '' : 's'}`,
    action: 'Dividir y descargar',
    working: 'Dividiendo…',
    progress: (done: number, total: number) =>
      `${done} de ${total} archivo${total === 1 ? '' : 's'} creado${total === 1 ? '' : 's'}.`,
    confirmTitle: (n: number) =>
      `Esto creará ${n} archivo${n === 1 ? '' : 's'} separado${n === 1 ? '' : 's'}.`,
    confirmBody:
      'Tu navegador puede pedir permiso para descargar varios archivos a la vez, y crearlos lleva un momento. ¿Continúas?',
    confirmAction: (n: number) => `Descargar ${n} archivo${n === 1 ? '' : 's'}`,
    cancel: 'Cancelar',
    resultsHeading: (n: number) => `${n} archivo${n === 1 ? '' : 's'} creado${n === 1 ? '' : 's'}`,
    resultsHeadingNone: 'No se creó nada',
    resultsBody:
      'Cada documento se reconstruyó en tu dispositivo y se guardó por separado. Nada se subió, y ninguna página se volvió a renderizar — la calidad es idéntica a la de tu original.',
    resultsFailed: (n: number) =>
      `${n} archivo${n === 1 ? '' : 's'} no se pudo${n === 1 ? '' : 's'} crear`,
    resultPending: 'No creado',
    partialFailure: (done: number, failed: number) =>
      `${done} archivo${done === 1 ? '' : 's'} creado${done === 1 ? '' : 's'}, ${failed} fallaron. El resto ya está en tus descargas.`,
    allFailed: 'No se pudo crear ningún archivo. Tu archivo original no se ha modificado.',
    exportFailedOne: (name: string) => `No se pudo crear ${name}.`,
  },
  extract: {
    keepLabel: 'Páginas a conservar',
    keepHelp:
      'Haz clic en una página para conservarla. Haz clic en la primera y Mayús-clic en la última para tomar un rango entero, o selecciona todas las páginas y luego deselecciona lo que no necesites.',
    orderLabel: 'Orden de las páginas extraídas',
    orderHelp:
      'Arrastra una página aquí para cambiar el orden en que aparecerá en el nuevo documento. Tu archivo original nunca se modifica.',
    orderEmpty: 'Todavía no hay páginas seleccionadas — haz clic en una página arriba para conservarla.',
    orderInTray:
      'Para cambiar el orden de las páginas extraídas, arrástralas en la lista de abajo.',
    orderMoved: (from: number, to: number) =>
      `Movida de la posición ${from} a la posición ${to} del nuevo documento.`,
    moveUp: 'Mover esta página antes en el nuevo documento',
    moveDown: 'Mover esta página después en el nuevo documento',
    remove: 'Dejar esta página fuera del nuevo documento',
    pickerLabel: 'Seleccionar páginas por número',
    pickerHint:
      'Todas las páginas como objetivo táctil, para el teclado y las pantallas pequeñas.',
    pickerPage: (n: number, total: number) => `Página ${n} de ${total}`,
    pickerOn: (n: number) => `Página ${n}, conservada`,
    pickerOff: (n: number) => `Página ${n}, no conservada`,
    deselectMeansLeaveOut:
      'Esta herramienta nunca elimina páginas de tu archivo — la página simplemente se deja fuera del nuevo documento.',
    action: 'Descargar el PDF extraído',
    zeroSelected: 'Selecciona al menos una página para extraer.',
    resultsHeading: (n: number) => `${n} página${n === 1 ? '' : 's'} extraída${n === 1 ? '' : 's'}`,
    resultsBody:
      'El nuevo documento se reconstruyó en tu dispositivo con las páginas que seleccionaste, en el orden mostrado. Tu archivo original no se modificó.',
  },
} satisfies ToolStrings;

export default es;