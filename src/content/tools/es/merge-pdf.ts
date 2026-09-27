import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Fusionar PDF online gratis — Combina sin subir archivos',
    description:
      'Fusiona varios PDF en un solo documento, en el orden que quieras. 100 % privado: nada se sube, todo ocurre en tu navegador. Sin registro ni marca de agua.',
  },
  breadcrumb: 'Fusionar PDF',
  h1: 'Fusionar archivos PDF en un solo documento',
  intro:
    'Junta tantos PDF como quieras en un único archivo, exactamente en el orden que te conviene. Suéltalos todos de golpe o añade más mientras trabajas, arrastra las páginas a su sitio y descarga un documento bien ordenado sin enviar nada a un servidor.',
  benefits: [
    {
      title: 'Fusiona en el orden correcto',
      text: 'Carga primero todos los archivos y luego coloca las páginas en la secuencia que necesites. Entrelaza capítulos de documentos distintos, pon una portada al principio o deja un apéndice al final: el orden es completamente tuyo.',
    },
    {
      title: 'Sin pérdida, byte a byte',
      text: 'Cada página se copia tal cual del archivo original en lugar de volver a renderizarse, así que las fuentes, los gráficos vectoriales, las imágenes y los enlaces salen exactamente como entraron.',
    },
    {
      title: 'Sin subidas, nunca',
      text: 'La fusión ocurre dentro de la pestaña de tu navegador. Tus documentos nunca se transmiten, así que contratos, facturas e historiales médicos se quedan en tu dispositivo.',
    },
  ],
  howTo: {
    heading: 'Cómo fusionar archivos PDF',
    sub: 'Tres pasos, y todo ocurre en tu propio dispositivo.',
    steps: [
      {
        title: 'Añade tus PDF',
        text: 'Arrastra uno o varios archivos PDF sobre la herramienta de arriba, o haz clic para explorar tu ordenador. También puedes pegar un archivo con Ctrl+V. Todas las páginas de todos los archivos caen en una sola cuadrícula, con un color según su origen.',
      },
      {
        title: 'Define el orden',
        text: 'Arrastra las miniaturas de página para ordenarlas como quieras. Las páginas de archivos distintos se entrelazan libremente, así que puedes unir el capítulo 1 de un documento con el capítulo 2 de otro.',
      },
      {
        title: 'Descarga el resultado',
        text: 'Haz clic en Descargar PDF. El documento fusionado se reconstruye en tu dispositivo y se guarda directamente en tus descargas: sin marca de agua y sin esperas en cola.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo fusiono archivos PDF gratis?',
      a: 'Abre la herramienta de arriba, añade dos o más PDF, arrastra las miniaturas al orden que quieras y haz clic en Descargar PDF. Sin registro, sin marca de agua y sin cuota diaria: la herramienta es gratuita porque el trabajo lo hace tu propio dispositivo en lugar de un servidor de pago.',
    },
    {
      q: '¿Puedo fusionar PDF sin subir los archivos a un servidor?',
      a: 'Sí, y es la única forma en que funciona esta herramienta. Tus archivos se leen, combinan y reescriben por completo dentro del navegador, así que ninguna copia de tu documento llega a un servidor. Puedes comprobarlo: abre las herramientas de desarrollador de tu navegador, vigila la pestaña de red y fusiona unos cuantos archivos. No se transmite nada.',
    },
    {
      q: '¿Hay un límite de cuántos PDF puedo fusionar?',
      a: 'No. Ni el número de archivos ni el de páginas tiene tope, porque nada se sube y no hay ningún servidor contando tu uso. El único límite real es la memoria de tu dispositivo: un documento muy grande consumirá más RAM mientras se monta.',
    },
    {
      q: '¿La fusión reduce la calidad de mi PDF?',
      a: 'No. Las páginas se copian byte a byte de los originales en vez de volver a renderizarse o recomprimirse, así que el texto sigue nítido, los vectores siguen siendo vectores y las fuentes y los enlaces se conservan exactamente.',
    },
  ],
};

export default es;
