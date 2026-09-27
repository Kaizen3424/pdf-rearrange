import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Insertar páginas en un PDF — En blanco o desde otro archivo',
    description:
      'Inserta páginas en un PDF: una hoja en blanco, páginas de otro archivo o el reemplazo de una página. Sin subir nada a un servidor, sin registro ni filigrana.',
  },
  breadcrumb: 'Insertar páginas PDF',
  h1: 'Insertar páginas en un PDF',
  intro:
    'Añade páginas a un documento existente sin reconstruirlo. Inserta una hoja en blanco, trae páginas de otro PDF, colócalas donde toca y descarga un único archivo combinado que nunca ha pasado por un servidor.',
  benefits: [
    {
      title: 'Páginas en blanco o de otro archivo',
      text: 'Inserta una página vacía para notas, una portada o un separador de impresión, o añade páginas de un segundo documento completo. Ambas cosas están a un clic en la barra de herramientas.',
    },
    {
      title: 'Colócalas justo donde toca',
      text: 'Las páginas nuevas caen en la cuadrícula como cualquier otra: arrástralas y las páginas vecinas se apartan para hacerles sitio. Sin tener que reordenar el documento entero a mano.',
    },
    {
      title: 'Reemplaza una página de una pasada',
      text: 'Elimina la página obsoleta y arrastra su sustituta al hueco. Como las páginas se copian en lugar de renderizarse, la nueva conserva exactamente su formato original.',
    },
  ],
  howTo: {
    heading: 'Cómo insertar páginas en un PDF',
    sub: 'Añade y coloca páginas nuevas en tres pasos.',
    steps: [
      {
        title: 'Añade tu documento',
        text: 'Suelta tu PDF sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. Las páginas cargan como una cuadrícula de miniaturas.',
      },
      {
        title: 'Inserta las páginas nuevas',
        text: 'Haz clic en el botón «+» de la barra de herramientas para añadir una página en blanco al final, o usa Añadir PDFs para traer páginas de otro documento. Cada página nueva aparece en la cuadrícula, con un color según su origen.',
      },
      {
        title: 'Coloca y descarga',
        text: 'Arrastra las páginas nuevas al lugar correcto y haz clic en Descargar PDF. El documento combinado se reconstruye en tu dispositivo y se guarda; tu archivo original queda sin cambios.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo inserto una página en blanco en un PDF?',
      a: 'Añade tu PDF a la herramienta de arriba y haz clic en el botón «+» de la barra de herramientas. Se añade una página A4 vacía al final de la cuadrícula: arrástrala donde la quieras y las páginas vecinas se apartarán para hacerle sitio. Descarga para guardar el cambio.',
    },
    {
      q: '¿Cómo añado páginas de otro PDF?',
      a: 'Usa el botón «Añadir PDFs» de la barra de herramientas para elegir un segundo archivo. Todas sus páginas entran en la misma cuadrícula, marcadas con su propio color para que sepas de qué documento salieron. Colócalas y descarga un único PDF combinado.',
    },
    {
      q: '¿Cómo reemplazo una página de un PDF?',
      a: 'Elimina la página que quieres sustituir, añade el PDF que contiene la nueva y arrástrala al hueco. Como cada página se copia byte a byte en lugar de volver a renderizarse, la sustituta conserva exactamente sus fuentes, sus imágenes y su maquetación.',
    },
    {
      q: '¿Puedo insertar páginas sin subir mi documento?',
      a: 'Sí: la inserción ocurre por completo en tu navegador, así que tu archivo nunca se transmite. Abre la pestaña de red en las herramientas de desarrollador de tu navegador mientras trabajas y no verás ninguna solicitud de archivo.',
    },
  ],
};

export default es;
