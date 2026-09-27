import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Duplicar páginas de un PDF gratis — Copia sin pérdida',
    description:
      'Duplica una página o un rango entero de tu PDF, en su sitio o en otro. Nada se sube a un servidor, la copia es idéntica y no hace falta registrarse.',
  },
  breadcrumb: 'Duplicar páginas PDF',
  h1: 'Duplicar páginas en un PDF',
  intro:
    'Repite una página sin ir a buscar el archivo original. Copia una página o un bloque entero y coloca las copias donde hagan falta: una al lado de la otra, en la hoja siguiente, o donde pida el documento, sin subir nada.',
  benefits: [
    {
      title: 'Copia en su sitio o en otro',
      text: 'El duplicado puede quedarse justo detrás de su original o arrastrarse a cualquier parte del documento. Repite un encabezado en cada página, guarda una copia para un compañero o duplica una hoja de firmas.',
    },
    {
      title: 'Duplica un lote',
      text: 'Seleccionar varias páginas y duplicarlas una sola vez las repite todas en una única acción: la copia de cada página se inserta justo detrás de su original, lo que respeta tu secuencia.',
    },
    {
      title: 'La misma calidad, siempre',
      text: 'Las copias son duplicados byte a byte de la página de origen, no un renderizado nuevo, así que el texto, los gráficos vectoriales y las fuentes incrustadas son indistinguibles del original.',
    },
  ],
  howTo: {
    heading: 'Cómo duplicar páginas de un PDF',
    sub: 'Copia una página o un rango entero en tres pasos.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta el archivo sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. Las páginas aparecen como miniaturas numeradas.',
      },
      {
        title: 'Duplica la página o las páginas',
        text: 'Haz clic en el botón de copiar de una miniatura para duplicar esa página, o selecciona varias y usa el control de duplicar de la barra de herramientas. Cada copia se inserta justo detrás de su original.',
      },
      {
        title: 'Coloca y descarga',
        text: 'Arrastra las nuevas copias donde quieras y haz clic en Descargar PDF. El documento se reconstruye en tu dispositivo con todas las copias intactas.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo duplico una página de un PDF?',
      a: 'Añade tu PDF a la herramienta de arriba y haz clic en el botón de copiar de la miniatura de la página que quieres repetir. El duplicado se inserta justo detrás del original. Arrástralo a otro sitio si lo necesitas en otra posición y descarga.',
    },
    {
      q: '¿Puedo duplicar varias páginas a la vez?',
      a: 'Sí. Haz clic en la primera página, Mayús-clic en la última para seleccionar el rango y pulsa el botón de duplicar de la barra de herramientas. Cada página seleccionada se copia justo detrás de su original, y tu secuencia actual queda intacta.',
    },
    {
      q: '¿Para qué sirve duplicar una página de un PDF?',
      a: 'Los usos más habituales son repetir una portada o un aviso legal al principio de un lote fusionado, copiar una página de firma o aprobación para cada firmante, duplicar una página de referencia para un apéndice, o conservar el original junto a una versión censurada dentro del mismo documento.',
    },
    {
      q: '¿Duplicar una página cambia la calidad del archivo?',
      a: 'No. La copia es un duplicado byte a byte de la página original y no un renderizado nuevo, así que la página duplicada es idéntica a su fuente tanto visual como textualmente, hasta las fuentes incrustadas y los enlaces.',
    },
  ],
};

export default es;
