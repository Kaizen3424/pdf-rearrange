import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Firme un PDF en línea gratis: coloque su firma rápidamente',
    description:
      'Firme archivos PDF gratis: agregue la imagen de su firma a cualquier página, colóquela donde pertenece y descárguela. Aplicado en tu navegador',
  },
  breadcrumb: 'Firmar PDF',
  h1: 'Firma tu PDF en el navegador',
  intro:
    'Ya tienes tu firma, la que utilizas en entregas y formularios. Agréguelo como imagen a las páginas que necesitan firmar, colóquelo donde está la línea de firma y descárguelo. El documento nunca sale de su dispositivo, que es el objetivo de una firma.',
  benefits: [
    {
      title: 'Usa la firma que ya tienes',
      text:
        'Escanee o fotografíe su firma una vez, guárdela como PNG y reutilícela. Un fondo transparente funciona mejor: cualquier cosa rectangular llega con su propia caja blanca.',
    },
    {
      title: 'Colocado donde el documento lo espera.',
      text:
        'Siete posiciones de anclaje más una vista previa en vivo, para que la firma aterrice en la línea de la firma en lugar de flotar en algún lugar cerca de ella.',
    },
    {
      title: 'El documento permanece privado.',
      text:
        'Un contrato firmado es un documento terminado. Se abre, sella y se guarda dentro de la pestaña de su navegador; ningún servidor recibe una copia, antes o después de firmar.',
    },
  ],
  howTo: {
    heading: 'Cómo firmar un PDF',
    sub: 'Tres pasos y no se carga nada.',
    steps: [
      {
        title: 'Añade el PDF que necesitas para firmar',
        text:
          'Suéltelo en la herramienta de arriba o haga clic para navegar. Se pueden firmar varios archivos en una sola pasada.',
      },
      {
        title: 'Añade tu imagen de firma',
        text:
          'Seleccione el PNG o JPG de su firma. Un PNG transparente conserva sólo la tinta; una fotografía en papel blanco mostrará su fondo, por lo que un escaneo sin el fondo se verá mejor.',
      },
      {
        title: 'Posicionar y descargar',
        text:
          'Elija dónde se ubica la firma (la parte inferior derecha es el lugar habitual) y luego haga clic en Agregar firma. La copia firmada se descarga y el original permanece intacto.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo firmo un PDF?',
      a:
        'Agregue PDF, seleccione una imagen de su firma, elija su posición y haga clic en Agregar firma. El documento firmado se guarda en sus descargas.',
    },
    {
      q: '¿Es esta una firma legalmente válida?',
      a:
        'Eso depende de su jurisdicción y de lo que acepte el destinatario, no de la herramienta. Esto coloca una imagen de su firma en el documento; no aplica firma digital criptográfica. Muchos flujos de trabajo aceptan una imagen y los que requieren firma criptográfica lo dirán.',
    },
    {
      q: '¿Qué tipo de imagen de firma funciona mejor?',
      a:
        'Un PNG con fondo transparente. La herramienta también acepta JPG, pero una foto de una firma en papel llevará consigo su fondo blanco, por lo que obtendrá un cuadro blanco alrededor de la tinta.',
    },
    {
      q: '¿Puedo firmar sólo una página de un documento largo?',
      a:
        'Esta versión estampa cada página, lo que se adapta a un acuerdo completo. Para firmar una sola página, primero divida el documento, firme esa página y vuelva a fusionar las partes.',
    },
    {
      q: '¿Mi documento firmado está subido a algún lugar?',
      a:
        'No. La firma se realiza dentro de la pestaña de su navegador y no se transmite ninguna copia del documento, firmada o no, a ningún servidor.',
    },
  ],
};

export default es;