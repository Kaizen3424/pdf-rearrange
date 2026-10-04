import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Convierta PDF a PNG en línea gratis y sin pérdidas',
    description:
      'Convierta páginas PDF a imágenes PNG gratis en un solo ZIP. Fondo transparente y sin pérdidas opcional, renderizado en su dispositivo: sin cargas ni registro.',
  },
  breadcrumb: 'PDF a PNG',
  h1: 'Convierta páginas PDF en imágenes PNG',
  intro:
    'PNG mantiene cada píxel exactamente como se representa, lo que lo convierte en la opción correcta cuando la imagen se va a editar, componer o no debe mostrar artefactos de compresión. Convierta cualquier PDF y elimine cada página como PNG.',
  benefits: [
    {
      title: 'Sin pérdidas, siempre',
      text:
        'PNG comprime sin descartar información, por lo que los bordes del texto se mantienen nítidos y los colores planos permanecen planos. Nada se suaviza como lo hace JPG.',
    },
    {
      title: 'Fondo transparente si lo necesitas',
      text:
        'Las páginas PDF normalmente pintan un fondo opaco, pero puedes exportarlas con transparencia, algo útil cuando las imágenes se van a superponer sobre otra cosa.',
    },
    {
      title: 'Todas las páginas en un archivo',
      text:
        'Convierta un documento largo de una sola vez. Cada página se convierte en página-1.png, página-2.png y así sucesivamente, empaquetadas en un solo ZIP.',
    },
  ],
  howTo: {
    heading: 'Cómo convertir PDF a PNG',
    sub: 'Tres pasos, con el PDF renderizado localmente.',
    steps: [
      {
        title: 'Añade tu PDF',
        text:
          'Suelte un archivo en la herramienta de arriba o haga clic para explorar. Verá el recuento de páginas tan pronto como se haya leído.',
      },
      {
        title: 'Elige una resolución',
        text:
          '72, 150 o 300 DPI. Los archivos PNG son más grandes que JPG porque no se descarta nada, por lo que una resolución más baja es una forma razonable de mantener el archivo manejable.',
      },
      {
        title: 'Descarga el ZIP',
        text:
          'Haga clic en Convertir a imágenes y sus páginas PNG llegarán juntas en un solo archivo.',
      },
    ],
  },
  faq: [
    {
      q: '¿Debo utilizar PNG o JPG?',
      a:
        'Utilice PNG cuando la imagen vaya a editarse, superponerse o necesite mantenerse nítida: no tiene pérdidas. Utilice JPG cuando esté compartiendo o cargando archivos y el tamaño del archivo importa más que la fidelidad perfecta. Convertir la misma página en ambos sentidos es una forma rápida de ver la diferencia.',
    },
    {
      q: '¿Cómo convierto un PDF a PNG?',
      a:
        'Agregue su PDF arriba, elija una resolución y luego haga clic en Convertir a imágenes. Cada página se representa como PNG y se entrega en un ZIP.',
    },
    {
      q: '¿Está subido el PDF?',
      a:
        'No. La renderización ocurre dentro de la pestaña de su navegador. No se transmite nada a ningún servidor, lo cual puede confirmar en la pestaña Red de sus herramientas de desarrollador.',
    },
    {
      q: '¿Por qué los archivos PNG son tan grandes?',
      a:
        'Porque PNG mantiene todos los detalles en lugar de aproximarlos, y una resolución alta significa muchos píxeles. Pasar de 300 DPI a 150 DPI reduce el recuento de píxeles aproximadamente cuatro veces sin perder el método.',
    },
    {
      q: '¿Puedo obtener un fondo transparente?',
      a:
        'Sí, en la configuración de fondo, elija Transparente. Tenga en cuenta que una página PDF generalmente dibuja su propio fondo blanco, por lo que solo verá transparencia cuando la página realmente deja el fondo sin pintar.',
    },
  ],
};

export default es;