import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Invertir el orden de páginas de un PDF — Gratis y privado',
    description:
      'Invierte el orden de las páginas de un PDF con un solo clic, incluso escaneos al revés. Sin subidas, sin registro y sin perder calidad en el resultado.',
  },
  breadcrumb: 'Invertir páginas PDF',
  h1: 'Invertir el orden de las páginas de un PDF',
  intro:
    'Arregla un documento que está del revés entero. Un clic le da la vuelta a un escaneo al revés: la página 1 queda primera y la última se queda al final, sin arrastrar nada y con tu archivo siempre dentro del navegador.',
  benefits: [
    {
      title: 'Un clic para todo el documento',
      text: 'La inversión completa cabe en un clic en lugar de hacer pasar cien miniaturas unas por otras. Ideal para escaneos a doble cara que salieron al revés o para un cuadernillo ensamblado en la secuencia equivocada.',
    },
    {
      title: 'Previsualiza antes de dar el visto bueno',
      text: 'Las miniaturas se reordenan al instante, así que confirmas la secuencia antes de descargar. Si no es lo que querías, un clic más lo revierte: la inversión es un paso más que se puede deshacer.',
    },
    {
      title: 'Calidad sin cambios',
      text: 'Solo cambia la secuencia de las páginas. Cada una se copia tal como estaba, de modo que el texto, las imágenes, los gráficos vectoriales y los enlaces son idénticos a los del archivo original.',
    },
  ],
  howTo: {
    heading: 'Cómo invertir las páginas de un PDF',
    sub: 'Tres pasos para arreglar un documento al revés.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta el archivo sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. Las páginas aparecen en miniaturas, en su orden actual: el equivocado.',
      },
      {
        title: 'Invierte el orden',
        text: 'Haz clic en el botón de invertir de la barra de herramientas. Cada página cambia de posición al instante: la última pasa a ser la primera, la primera pasa a ser la última, y todo lo intermedio se refleja en consecuencia.',
      },
      {
        title: 'Descarga el PDF corregido',
        text: 'Revisa la nueva secuencia en la cuadrícula y haz clic en Descargar PDF. El documento reordenado se reconstruye en tu dispositivo y se guarda al momento.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo invierto el orden de las páginas de un PDF?',
      a: 'Añade tu PDF a la herramienta de arriba y haz clic en el botón de invertir de la barra de herramientas. Todo el documento se da la vuelta en un paso: última página primero, primera página al final. Descarga el resultado y el archivo quedará guardado en el orden corregido.',
    },
    {
      q: '¿Por qué mi PDF escaneado sale al revés?',
      a: 'Los alimentadores automáticos de escáneres y copiadoras suelen apilar las páginas con la cara vista hacia arriba, así que el escáner las lee empezando por la última hoja. El resultado parece normal en la vista previa de la app de escaneo, pero se imprime invertido. Invertir el orden de las páginas es la solución estándar, y aquí se hace con un clic.',
    },
    {
      q: '¿Puedo invertir las páginas sin subir el archivo?',
      a: 'Sí. La reordenación ocurre por completo dentro de la pestaña de tu navegador, así que ninguna copia de tu documento se envía a ninguna parte. Vigila la pestaña de red de tus herramientas de desarrollador mientras trabajas si quieres comprobarlo tú mismo.',
    },
    {
      q: '¿Tengo que arrastrar cada página para arreglar un escaneo invertido?',
      a: 'No, para eso está el botón de invertir. Un escaneo de 300 páginas se arregla con un clic en lugar de 299 arrastres distintos. Si lo que está mal colocado son solo unas pocas páginas y no el documento entero, mueve esas miniaturas.',
    },
  ],
};

export default es;
