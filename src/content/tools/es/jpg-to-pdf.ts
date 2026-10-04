import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Convertidor de JPG a PDF: gratuito, en línea, sin cargas',
    description:
      'Convierta imágenes JPG a PDF en línea gratis. Combine uno o varios archivos JPEG en un solo PDF que permanece en su dispositivo: sin cargar ni registrarse',
  },
  breadcrumb: 'JPG a PDF',
  h1: 'Convertir imágenes JPG a PDF',
  intro:
    'Las fotografías, escaneos y capturas de pantalla suelen llegar en formato JPG y la mayoría de la gente los necesita en un solo PDF. Agregue sus imágenes, establezca el tamaño de la página y descárguelas: la conversión se realiza dentro de su navegador, por lo que sus imágenes nunca se envían a un servidor.',
  benefits: [
    {
      title: 'Tus fotos se quedan quietas',
      text:
        'Las imágenes se leen, colocan y escriben en un PDF completamente dentro de la pestaña de su navegador. No se carga nada, por lo que las fotografías personales y los documentos escaneados nunca se transmiten a ninguna parte.',
    },
    {
      title: 'Sin recompresión',
      text:
        'Los bytes JPEG se incrustan palabra por palabra en lugar de decodificarse y volverse a codificar. Una foto que se veía nítida en su galería se ve idéntica en el PDF, sin artefactos de compresión de segunda generación.',
    },
    {
      title: 'Un PDF de muchas imágenes.',
      text:
        'Agregue tantos JPG como desee, arrástrelos al orden que desee y obtenga un único documento ordenado, con A4, Letter o páginas recortadas para que se ajusten exactamente a cada imagen.',
    },
  ],
  howTo: {
    heading: 'Cómo convertir JPG a PDF',
    sub: 'Tres pasos y tus imágenes nunca saldrán del dispositivo.',
    steps: [
      {
        title: 'Añade tus imágenes JPG',
        text:
          'Arrastre uno o varios archivos JPG a la herramienta de arriba o haga clic para explorar. También puedes pegar una imagen con Ctrl+V y agregar más en cualquier momento sin comenzar de nuevo.',
      },
      {
        title: 'Establecer la configuración de la página',
        text:
          'Elija A4, Letter o Ajustar a imagen para recortar cada página hasta su imagen. Elija retrato, paisaje o deje que la orientación siga la imagen y agregue un margen si desea un espacio en blanco a su alrededor.',
      },
      {
        title: 'Descarga el PDF',
        text:
          'Haga clic en Descargar PDF. Su documento se crea en su dispositivo y se guarda en sus descargas, sin marca de agua ni pasos de carga que esperar.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo convierto un JPG en un PDF?',
      a:
        'Abra la herramienta de arriba, agregue su imagen JPG, elija un tamaño de página y luego haga clic en Descargar PDF. La conversión se ejecuta en su navegador y el archivo terminado se guarda directamente en sus descargas.',
    },
    {
      q: '¿Mis imágenes están cargadas en algún lugar?',
      a:
        'No. Cada imagen se decodifica, se coloca y se escribe en el PDF dentro de la pestaña de su propio navegador, por lo que nunca se envía ninguna copia de sus fotos a un servidor. Puede confirmarlo usted mismo: abra las herramientas de desarrollo de su navegador, mire la pestaña Red y convierta una imagen. No se transmite nada.',
    },
    {
      q: '¿La conversión de JPG a PDF reducirá la calidad de la imagen?',
      a:
        'No. Los datos JPEG están incrustados en el PDF exactamente como aparecen en su archivo, en lugar de ser decodificados y recodificados. Esto evita una segunda generación de artefactos de compresión, que es lo que normalmente hace que las fotos convertidas parezcan suaves.',
    },
    {
      q: '¿Puedo combinar varios JPG en un solo PDF?',
      a:
        'Sí. Agregue tantas imágenes como desee, arrástrelas en el orden que desee y descargue un documento que las contenga todas. No hay límite en el número de imágenes.',
    },
    {
      q: '¿Qué tamaño de página debo elegir?',
      a:
        'Elija A4 o Letter para imprimir, lo que le da a cada imagen una página estándar completa. Elija Ajustar a imagen cuando desee que la página se recorte ajustadamente a cada imagen sin espacios en blanco alrededor, lo que resulta útil para un álbum de fotos o un cómic.',
    },
  ],
};

export default es;