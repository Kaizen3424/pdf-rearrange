import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Recortar páginas PDF gratis – recorta los bordes en línea',
    description:
      'Recorta páginas PDF gratis. Recorte el mismo margen de cada página o configure cada borde por separado: se aplica en su navegador, sin cargas ni registro',
  },
  breadcrumb: 'Recortar PDF',
  h1: 'Recorta los bordes de tus páginas PDF',
  intro:
    'Los documentos escaneados llegan con la plataforma del escáner mostrando alrededor de la página y las diapositivas exportadas a PDF a menudo tienen márgenes que nadie pidió. Recorte una cantidad fija de cada borde y el contenido llenará la página nuevamente.',
  benefits: [
    {
      title: 'Un recorte en cada página',
      text:
        'Configure los cuatro márgenes una vez y cada página se recortará de manera idéntica: el comportamiento correcto para un escaneo o una plataforma exportada, donde cada página tiene el mismo problema.',
    },
    {
      title: 'Los bordes se mantienen afilados',
      text:
        'Recortar cambia el cuadro de la página, no el contenido. El texto no se reproduce ni se escala, por lo que el resultado recortado es tan nítido como el original.',
    },
    {
      title: 'Comentarios en vivo en puntos',
      text:
        'Cada borde muestra su propia medida, por lo que un margen de 36 pt y un margen de 12 pt son opciones visiblemente diferentes antes de aplicar algo.',
    },
  ],
  howTo: {
    heading: 'Cómo recortar un PDF',
    sub: 'Tres pasos, aplicados en tu dispositivo.',
    steps: [
      {
        title: 'Añade tu PDF',
        text:
          'Suelte el documento en la herramienta de arriba o haga clic para explorar. Se muestra el tamaño de página actual para que sus márgenes tengan contexto.',
      },
      {
        title: 'Establecer los cuatro márgenes',
        text:
          'Arrastra cada borde para recortar esa cantidad desde arriba, derecha, abajo e izquierda. Valores iguales en los cuatro lados es el caso común de los bordes de escaneo.',
      },
      {
        title: 'Descargue el PDF recortado',
        text:
          'Haga clic en Recortar páginas. La copia recortada se guarda en tus descargas; el archivo original está intacto.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo recorto un PDF?',
      a:
        'Agregue su PDF, establezca cuánto recortar de cada borde y luego haga clic en Recortar páginas. Cada página se recorta por los mismos márgenes y se descarga el resultado.',
    },
    {
      q: '¿El recorte elimina el contenido fuera del cuadro?',
      a:
        'No, y vale la pena saberlo. Recortar cambia qué parte de la página se muestra: el significado estándar y no destructivo de un recorte PDF. Un visor muestra solo el área recortada, pero el contenido subyacente aún existe en el archivo.',
    },
    {
      q: '¿Qué son los puntos?',
      a:
        'Un punto es 1/72 de pulgada, la unidad en la que se miden los tamaños de página PDF. Como guía, 36 pt es media pulgada y 12 pt es un recorte estrecho, aproximadamente el borde de la base de un escáner.',
    },
    {
      q: '¿Puedo recortar solo una página?',
      a:
        'Esta versión recorta cada página con los mismos márgenes, que es lo que necesita un escaneo o una plataforma de diapositivas. Para una sola página, primero divida el documento, recorte esa página y vuelva a fusionarla.',
    },
    {
      q: '¿Está subido mi PDF?',
      a: 'No. El recorte se aplica dentro de la pestaña de su navegador y no se transmite nada.',
    },
  ],
};

export default es;