import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Cambie el tamaño de página PDF gratis a A4 o Letter en línea',
    description:
      'Cambie el tamaño del papel de las páginas PDF gratis. Mueva contenido a A4, Letter o A5, vertical u horizontal, aplicado en su navegador, nunca cargado.',
  },
  breadcrumb: 'Cambiar tamaño del PDF',
  h1: 'Cambie el tamaño de sus páginas PDF',
  intro:
    'Un documento configurado para Letter que debe imprimirse en A4, o una plataforma horizontal que debe convertirse en vertical. Cambie el papel y la orientación una vez, para cada página, y el contenido se moverá con él.',
  benefits: [
    {
      title: 'Tamaños de papel estándar',
      text:
        'A4, Letter y A5, en cualquier orientación, además de la opción de mantener el tamaño actual y cambiar solo entre vertical y horizontal.',
    },
    {
      title: 'Cada página a la vez',
      text:
        'Los documentos de tamaños mixtos (una página Letter grapada en un informe A4) salen uniformes, lo que suele ser el motivo principal para cambiar el tamaño.',
    },
    {
      title: 'El contenido se mantiene nítido',
      text:
        'Las páginas se mueven a la nueva hoja como vectores, por lo que el texto se mantiene seleccionable y nítido en cualquier tamaño. Nada se convierte en una imagen.',
    },
  ],
  howTo: {
    heading: 'Cómo cambiar el tamaño de las páginas PDF',
    sub: 'Tres pasos, aplicados en tu dispositivo.',
    steps: [
      {
        title: 'Añade tu PDF',
        text:
          'Suelta el documento en la herramienta de arriba. Se muestra el tamaño de página actual para que pueda ver desde qué está cambiando.',
      },
      {
        title: 'Elige el nuevo tamaño',
        text:
          'Elija A4, Letter o A5, o mantenga el tamaño actual. Luego elija vertical u horizontal, o deje la orientación como está, lo que mantiene cada página como ya está. Deje activado "escalar el contenido para que quepa" y su contenido cambiará de tamaño y se centrará en la nueva hoja.',
      },
      {
        title: 'Descargue el PDF redimensionado',
        text:
          'Haga clic en Cambiar tamaño de páginas. La copia redimensionada se guarda en sus descargas y el original permanece intacto.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo cambio el tamaño de página de un PDF?',
      a:
        'Agregue el PDF arriba, elija el tamaño de papel y la orientación que desee y luego haga clic en Cambiar tamaño de páginas. Se cambia el tamaño de cada página y se descarga la copia.',
    },
    {
      q: '¿Mi contenido se ampliará para ajustarse?',
      a:
        'Sí, por defecto. Se cambia el tamaño del contenido para que se ajuste a la nueva página y se centra, manteniendo sus proporciones para que nada se estire. Desactive esa opción y la página cambiará de tamaño mientras el contenido permanece exactamente donde estaba, lo que corta lo que ya no cabe.',
    },
    {
      q: '¿Sobreviven los enlaces al cambio de tamaño?',
      a:
        'Lo hacen cuando cambias el tamaño del cuadro de página solo. Cuando el contenido se escala para ajustarse, cada página se vuelve a dibujar como un único objeto y los enlaces de ese documento no se transfieren. Si el documento tiene enlaces que le interesan, cambie el tamaño con la escala desactivada.',
    },
    {
      q: '¿Cuál es la diferencia entre cambiar el tamaño y recortar?',
      a:
        'Cambiar el tamaño cambia el tamaño del papel sobre el que se asienta la página. Recortar elimina los bordes de la página visible. Hacer una página A4 en lugar de Letter es cambiar el tamaño; cortar un borde de un escaneo es recortar.',
    },
    {
      q: '¿Puedo hacer una sola página en formato horizontal?',
      a:
        'Esta versión aplica un tamaño y orientación a cada página, lo que mantiene el documento uniforme. Para una sola página, divida el documento, cambie el tamaño de esa página y vuelva a fusionarlo.',
    },
    {
      q: '¿Está subido mi PDF?',
      a:
        'No. El cambio de tamaño se aplica dentro de la pestaña de su navegador y no se transmite nada a ningún servidor.',
    },
  ],
};

export default es;