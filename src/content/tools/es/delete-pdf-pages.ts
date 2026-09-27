import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Eliminar páginas de un PDF gratis — Borra y descarga',
    description:
      'Elimina páginas de un PDF online gratis. Selecciona las que quieres quitar y descarga el resto sin perder calidad: nada se sube, sin registro, todo privado.',
  },
  breadcrumb: 'Eliminar páginas PDF',
  h1: 'Eliminar páginas de un PDF',
  intro:
    'Quita las páginas que no necesitas y deja todo lo demás exactamente como estaba. Selecciona páginas sueltas o borra un rango entero de una vez, revisa el resultado en miniaturas antes de darlo por bueno y descarga el documento recortado; tu archivo no sale del navegador.',
  benefits: [
    {
      title: 'Una página o cincuenta',
      text: 'Pasa el cursor por una miniatura para borrarla sola, o selecciona varias y quítalas en un lote. Ctrl+A lo selecciona todo, así que dejar un documento con solo las páginas útiles lleva segundos.',
    },
    {
      title: 'No se pierde nada nunca',
      text: 'Los borrados entran en el historial de deshacer, de modo que un corte demasiado zealous nunca es definitivo. Ctrl+Z recupera las páginas, y un clic restaura el documento entero con su orden original.',
    },
    {
      title: 'Calidad sin cambios',
      text: 'Las páginas que quedan se copian tal cual: fuentes, imágenes, vectores y enlaces no se vuelven a renderizar ni a recomprimir, así que borrar una página no cuesta nada en fidelidad.',
    },
  ],
  howTo: {
    heading: 'Cómo eliminar páginas de un PDF',
    sub: 'Quita las páginas que sobran en tres pasos.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta el archivo sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. Cada página aparece como miniatura y la ves de un vistazo.',
      },
      {
        title: 'Selecciona qué quitar',
        text: 'Haz clic en el icono de papelera de la miniatura de una página para borrar solo esa página. Para quitar varias a la vez, haz clic en la primera y luego Mayús-clic en la última para seleccionar todo el rango y borrarlo como un lote.',
      },
      {
        title: 'Descarga el PDF recortado',
        text: 'Comprueba el orden que queda y haz clic en Descargar PDF. El documento acortado se reconstruye en tu dispositivo y se guarda al momento.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo elimino páginas de un PDF?',
      a: 'Añade tu PDF a la herramienta de arriba, pasa el cursor por una miniatura y haz clic en su botón de eliminar. Para quitar un rango: haz clic en la primera página, Mayús-clic en la última y luego pulsa Supr o usa el botón de borrado por lotes. Descarga el resultado y tendrás el PDF sin esas páginas.',
    },
    {
      q: '¿Puedo eliminar páginas sin subir el archivo?',
      a: 'Sí. El documento se lee y se reescribe por completo dentro de tu navegador, así que nunca se envía a un servidor. Abre las herramientas de desarrollador, vigila la pestaña de red mientras borras y verás cero tráfico de archivos.',
    },
    {
      q: '¿Puedo deshacer el borrado de una página?',
      a: 'Cada acción queda registrada. Pulsa Ctrl+Z (Cmd+Z en Mac) para recuperar las páginas borradas, Ctrl+Shift+Z para rehacer, o usa el botón de deshacer de la barra de herramientas. El botón de restablecer devuelve el documento entero a su orden de páginas original.',
    },
    {
      q: '¿Y si borro demasiadas páginas?',
      a: 'No te preocupes: los borrados se pueden deshacer, así que nada es definitivo hasta que descargas. Si ya has exportado, conserva el archivo original y borra las páginas sobre esa copia.',
    },
  ],
};

export default es;
