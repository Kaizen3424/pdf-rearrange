import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Convertidor de PDF a JPG: gratuito, cada página como imagen',
    description:
      'Convierta páginas PDF a imágenes JPG gratis, en un solo ZIP. Elija 72, 150 o 300 DPI y la calidad que necesita: renderizado en su dispositivo, nunca cargado.',
  },
  breadcrumb: 'PDF a JPG',
  h1: 'Convierta páginas PDF en imágenes JPG',
  intro:
    'Necesita una página PDF como fotografía: para colocarla en una diapositiva, cargarla en algún lugar que rechace archivos PDF o compartirla en un chat. Elija su resolución, convierta y cada página volverá como JPG dentro de un único ZIP.',
  benefits: [
    {
      title: 'Elige la resolución que necesitas',
      text:
        '72 DPI para ver rápidamente la pantalla, 150 para documentos y correo electrónico, 300 para imprimir. La herramienta te muestra el tamaño exacto de píxel antes de renderizar cualquier cosa, para que no haya sorpresas.',
    },
    {
      title: 'Un ZIP, no veinte descargas',
      text:
        'Cada página se convierte y se empaqueta en un único archivo. Los navegadores bloquean las descargas automáticas repetidas, por lo que un archivo es la opción práctica y la que realmente funciona.',
    },
    {
      title: 'Renderizado donde ya está su archivo',
      text:
        'Su PDF se abre y se dibuja dentro de su navegador. No se envía nada a ninguna parte, lo que importa cuando el documento es un contrato o un historial médico.',
    },
  ],
  howTo: {
    heading: 'Cómo convertir PDF a JPG',
    sub: 'Tres pasos y el PDF nunca abandonará su dispositivo.',
    steps: [
      {
        title: 'Añade tu PDF',
        text:
          'Suelte un archivo en la herramienta de arriba o haga clic para explorar. El recuento de páginas aparece de inmediato para que sepa con qué está trabajando.',
      },
      {
        title: 'Elige resolución y calidad',
        text:
          'Elija 72, 150 o 300 DPI. Para JPG también puede elegir un archivo más pequeño o de máxima calidad; una calidad más alta significa un ZIP más grande, por lo que vale la pena hacer coincidir el lugar donde se utilizará la imagen.',
      },
      {
        title: 'Descarga el ZIP',
        text:
          'Haga clic en Convertir a imágenes. Cada página se procesa y guarda como página-1.jpg, página-2.jpg, etc., se comprime y se guarda en sus descargas.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo convierto una página PDF en una imagen?',
      a:
        'Agregue el PDF arriba, elija una resolución y luego haga clic en Convertir a imágenes. Cada página se representa como JPG y se entrega junta en un archivo ZIP.',
    },
    {
      q: '¿Mi PDF está subido a algún lugar?',
      a:
        'No. El PDF se abre y se representa dentro de la pestaña de su navegador usando el mismo motor que su navegador ya usa para mostrar archivos PDF. No se transmite ninguna copia. Puede comprobarlo con la pestaña Red de herramientas de desarrollador abierta.',
    },
    {
      q: '¿Qué resolución debo elegir?',
      a:
        'Utilice 72 DPI cuando la imagen solo se verá en la pantalla: es pequeña y rápida. Utilice 150 DPI para documentos compartidos por correo electrónico. Utilice 300 DPI cuando se vaya a imprimir la imagen, ya que esa es la resolución de impresión estándar.',
    },
    {
      q: '¿La conversión a JPG reducirá la calidad?',
      a:
        'JPG es un formato con pérdida, por lo que parte de la calidad se cambia por el tamaño del archivo; es por eso que el selector de calidad está ahí. La conversión a un DPI superior conserva más detalles que a uno bajo, y el texto permanece legible a 150 DPI o superior.',
    },
    {
      q: '¿Puedo convertir sólo algunas páginas?',
      a:
        'Esta versión convierte cada página, que es lo que la mayoría de la gente necesita y mantiene el resultado en un archivo predecible. Si solo necesita unas pocas páginas, primero recorte el documento y luego conviértalo.',
    },
  ],
};

export default es;