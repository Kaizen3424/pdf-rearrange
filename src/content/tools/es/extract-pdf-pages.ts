import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Extraer páginas de un PDF gratis — Conserva lo importante',
    description:
      'Extrae las páginas que necesitas de un PDF y descarga un documento nuevo, sin marca de agua. Nada se sube, no hay registro y la calidad no cambia.',
  },
  breadcrumb: 'Extraer páginas PDF',
  h1: 'Extraer páginas de un PDF',
  intro:
    'Quédate solo con las páginas que importan y obtén un documento nuevo y limpio. Marca las que quieras —o un rango entero— y la herramienta construye un PDF que contiene exactamente esas páginas, en el orden que elijas, sin subir tu archivo a ninguna parte.',
  benefits: [
    {
      title: 'Marca en vez de teclear números',
      text: 'Selecciona las páginas directamente sobre las miniaturas en lugar de escribir números y confiar en que el rango sea el correcto. Mayús-clic para coger un bloque entero, Ctrl+A para empezar de nuevo.',
    },
    {
      title: 'Reordena mientras extraes',
      text: 'Las páginas seleccionadas se pueden arrastrar a otro orden antes de exportar, así que puedes sacar tres páginas de un informe y archivarlas en la secuencia que de verdad quieres.',
    },
    {
      title: 'Copias byte a byte',
      text: 'Las páginas extraídas se copian directamente del archivo de origen, no se vuelven a renderizar. Fuentes, gráficos vectoriales, imágenes y enlaces se conservan exactamente, sin ninguna recompresión.',
    },
  ],
  howTo: {
    heading: 'Cómo extraer páginas de un PDF',
    sub: 'Selecciona las páginas que quieres y descarga el documento nuevo.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta el archivo sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. Todas las páginas aparecen en miniaturas con su número.',
      },
      {
        title: 'Selecciona las páginas que quieres conservar',
        text: 'Haz clic en cada página que quieras extraer. Haz clic en la primera y Mayús-clic en la última para coger un rango entero, o usa Ctrl+A para seleccionarlas todas y luego deseleccionar lo que no necesites.',
      },
      {
        title: 'Descarga el PDF extraído',
        text: 'El documento nuevo se monta en tu dispositivo con solo las páginas que elegiste y luego se descarga. El archivo original no se modifica nunca.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo extraigo páginas concretas de un PDF?',
      a: 'Añade tu PDF arriba y haz clic en las páginas que quieres conservar en la cuadrícula de miniaturas. Haz clic en la primera y Mayús-clic en la última para seleccionar un rango, o selecciona página a página. Pulsa Descargar PDF y obtendrás un documento que contiene solo esas páginas, en el orden mostrado.',
    },
    {
      q: '¿Cuál es la diferencia entre extraer y eliminar páginas?',
      a: 'El documento resultante es igual de grande en ambos casos. La extracción crea un PDF nuevo a partir de las páginas que conservas, y deja tu archivo original intacto en el disco. La eliminación quita páginas dentro del editor y sobrescribe el resultado al descargar. Usa la extracción para preservar el original; la eliminación cuando trabajas sobre una copia igualmente.',
    },
    {
      q: '¿Puedo extraer páginas sin subir el PDF?',
      a: 'Sí. El documento se lee y se reconstruye por completo dentro de tu navegador, así que no se transmite ninguna copia. Vigila la pestaña de red en las herramientas de desarrollador de tu navegador mientras trabajas y verás que no se envía nada.',
    },
    {
      q: '¿Puedo reordenar las páginas que extraigo?',
      a: 'Sí. Una vez seleccionadas, las páginas se arrastran a cualquier secuencia antes de descargar, así que puedes sacar unas pocas páginas de un informe largo y ordenarlas como te convenga en lugar del orden en que aparecían.',
    },
  ],
};

export default es;
