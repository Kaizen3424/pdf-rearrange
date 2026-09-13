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
    body: 'Tu PDF reorganizado se ha descargado en tu dispositivo. Nada se subió — todo ocurrió right en tu navegador.',
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
} satisfies ToolStrings;

export default es;