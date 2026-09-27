import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Dividir PDF online gratis — Extrae páginas o divídelo todo',
    description:
      'Divide un PDF online gratis: extrae un rango de páginas o separa cada una en su propio archivo. Sin subidas, sin registro y con la calidad intacta.',
  },
  breadcrumb: 'Dividir PDF',
  h1: 'Dividir un PDF en varios documentos',
  intro:
    'Rompe un PDF en tantos archivos como necesites. Elige un rango de páginas y recupera un documento, o separa cada página en su propio archivo de una sola vez. Nada se sube, y las páginas resultantes son copias byte a byte de tus originales.',
  benefits: [
    {
      title: 'Por rango o página por página',
      text: 'Escribe «1-5, 12, 20-30» para extraer exactamente las páginas que quieres en un solo archivo, o separa cada página en un documento distinto. Los dos modos funcionan en la misma pestaña.',
    },
    {
      title: 'Mira las páginas antes de decidir',
      text: 'Cada página se muestra como miniatura real antes de que elijas, así que no adivinas números. Recorre la vista previa a tamaño completo para comprobar que los límites caen donde deben.',
    },
    {
      title: 'Sin subidas y sin límites',
      text: 'La división ocurre en tu dispositivo: sin techo de tamaño de archivo y sin cola. Cierra la pestaña cuando termines y el archivo desaparece de la memoria; el servidor nunca guardó una copia.',
    },
  ],
  howTo: {
    heading: 'Cómo dividir un PDF',
    sub: 'Elige las páginas y descarga. Eso es todo el trabajo.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta el archivo sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. El número de páginas y las miniaturas aparecen al instante.',
      },
      {
        title: 'Elige qué quieres separar',
        text: 'Escribe rangos con comas y guiones — por ejemplo 1-4, 9, 15-20 — o cambia a «cada página» para obtener un archivo por página. Los rangos se validan mientras escribes, así que una errata no descarta páginas en silencio.',
      },
      {
        title: 'Descarga tus archivos',
        text: 'Cada documento resultante se reconstruye en tu dispositivo y se descarga. Dividir nunca recomprime nada, así que la calidad es idéntica a la del original.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo divido un PDF en varios archivos?',
      a: 'Añade tu PDF arriba, elige un rango como 1-5 o la opción «cada página», y haz clic en el botón de división. Cada documento se genera en tu dispositivo y se guarda por separado, así que obtienes un archivo por rango o por página.',
    },
    {
      q: '¿Cómo divido por rango de páginas?',
      a: 'Escribe los rangos con comas y guiones — por ejemplo 1-4, 9, 15-20 — y cada uno se convierte en un PDF aparte en el orden en que los escribas. Un solo rango como 1-4 te da un único archivo de salida; separa varios con comas cuando quieras varios archivos a la vez.',
    },
    {
      q: '¿Puedo dividir un PDF muy grande?',
      a: 'Sí, y no hay un límite artificial porque nada se sube. Los documentos muy grandes o de alta resolución consumen más memoria del dispositivo mientras se procesan: unos cientos de páginas van bien, y un escaneo de mil páginas puede ir lento en un móvil antiguo.',
    },
    {
      q: '¿Dividir reduce la calidad del PDF?',
      a: 'No. Las páginas se copian byte a byte del archivo original en lugar de volver a renderizarse, así que el resultado tiene exactamente la calidad de la fuente: el texto sigue siendo seleccionable y los gráficos vectoriales siguen nítidos.',
    },
  ],
};

export default es;
