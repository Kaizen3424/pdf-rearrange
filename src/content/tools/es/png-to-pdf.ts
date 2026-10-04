import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Convertidor de PNG a PDF: gratis, en línea, sin cargar nada',
    description:
      'Convierta imágenes PNG a PDF en línea gratis. Combine archivos PNG en un PDF con la transparencia manejada correctamente: sin cargas ni registros',
  },
  breadcrumb: 'PNG a PDF',
  h1: 'Convertir imágenes PNG a PDF',
  intro:
    'Los PNG son lo que se obtiene de capturas de pantalla, exportaciones de diseños y cualquier cosa con un fondo transparente. Agréguelos aquí, mantenga el orden que desee y descargue un único PDF, convertido en su dispositivo, nunca cargado.',
  benefits: [
    {
      title: 'La transparencia se maneja adecuadamente',
      text:
        'Un PNG con un canal alfa se aplana sobre una página blanca y limpia en lugar de dejarlo caer o dejarlo como un agujero transparente, de modo que los logotipos y recortes aparecen con el mismo aspecto que en la pantalla.',
    },
    {
      title: 'Capturas de pantalla en su forma original.',
      text:
        'Los datos PNG están integrados en el PDF sin volver a codificarlos, por lo que el texto nítido en una captura de pantalla se mantiene nítido. No se reduce la resolución de nada para que el archivo sea más pequeño de lo necesario.',
    },
    {
      title: 'combinarlos todos',
      text:
        'Agregue cualquier cantidad de archivos PNG, arrástrelos en secuencia y descargue un documento. Elija A4, Letter o recorte cada página para que se ajuste exactamente a su imagen.',
    },
  ],
  howTo: {
    heading: 'Cómo convertir PNG a PDF',
    sub: 'Tres pasos, con la conversión ejecutándose en su propio dispositivo.',
    steps: [
      {
        title: 'Añade tus imágenes PNG',
        text:
          'Arrastre uno o varios archivos PNG a la herramienta de arriba, haga clic para explorar o pegue uno con Ctrl+V. Tanto las capturas de pantalla como los gráficos exportados funcionan.',
      },
      {
        title: 'Elija la configuración de la página',
        text:
          'Elija A4 o Letter para imprimir, o Ajustar a imagen para recortar cada página según la imagen. Elige una orientación o deja que siga cada imagen y establece un margen si quieres un respiro.',
      },
      {
        title: 'Descarga el PDF',
        text:
          'Haga clic en Descargar PDF. El archivo se ensambla en su dispositivo y se guarda en sus descargas, sin marca de agua y sin nada que cargar.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo convierto un PNG en un PDF?',
      a:
        'Agregue sus imágenes PNG a la herramienta de arriba, elija un tamaño de página y luego haga clic en Descargar PDF. Todo se ejecuta en su navegador y el resultado se guarda en su carpeta de descargas.',
    },
    {
      q: '¿Qué sucede con las áreas transparentes en un PNG?',
      a:
        'Están aplanados en una página blanca. Las páginas PDF no son transparentes, por lo que el canal alfa no tiene adónde ir; La composición en blanco es lo que preserva el aspecto de la imagen en la pantalla. Si necesita que el fondo sea de un color diferente, selecciónelo antes de realizar la conversión.',
    },
    {
      q: '¿La conversión reducirá la calidad de una captura de pantalla?',
      a:
        'No. Los datos PNG se incrustan exactamente como se almacenaron, sin volver a codificarlos, por lo que el texto pequeño en una captura de pantalla sigue siendo legible. Las imágenes tampoco se amplían nunca: una captura de pantalla de 400 píxeles de ancho permanece en 400 píxeles de ancho en lugar de ampliarse para llenar una página A4.',
    },
    {
      q: '¿Puedo poner varios PNG en un PDF?',
      a:
        'Sí. Agregue tantos como desee, arrástrelos en el orden que desee y descargue un único PDF que los contenga todos. No hay límite en el número de imágenes.',
    },
    {
      q: '¿Están cargados mis PNG?',
      a:
        'No. La decodificación y el ensamblaje de PDF se realizan dentro de la pestaña de su navegador. Abra la pestaña Red de herramientas de desarrollador mientras realiza la conversión y no verá ninguna solicitud que transporte sus archivos.',
    },
  ],
};

export default es;