import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Rotar páginas de un PDF gratis — Gíralas 90, 180 o 270°',
    description:
      'Rota páginas de PDF de 90, 180 o 270°, una a una o en bloque. 100 % privado: nada se sube, sin registro, sin marca de agua y sin pérdida de calidad.',
  },
  breadcrumb: 'Rotar PDF',
  h1: 'Rotar páginas de un PDF',
  intro:
    'Pon derecho un documento escaneado de lado o del revés. Rota una sola página o aplica la misma corrección a docenas a la vez, comprueba el resultado sobre la marcha y descarga el archivo arreglado sin subir absolutamente nada.',
  benefits: [
    {
      title: 'Una página o un lote entero',
      text: 'Rota páginas sueltas con el botón de cada miniatura, o selecciona muchas y gíralas de una vez. Arreglar un escaneo de 200 páginas de lado requiere un clic por dirección, no doscientos.',
    },
    {
      title: 'El ángulo exacto que necesitas',
      text: 'Las rotaciones van en pasos de 90° —izquierda, derecha o del revés— y se combinan cuando cada página necesita una corrección distinta. Nada se vuelve a renderizar, así que el resultado es idéntico píxel a píxel aparte de la orientación.',
    },
    {
      title: 'Reversible por diseño',
      text: 'La rotación entra en el historial de deshacer, así que un clic de más se deshace con Ctrl+Z. Gira y contragira tanto como quieras; la página solo cambia cuando descargas.',
    },
  ],
  howTo: {
    heading: 'Cómo rotar un PDF',
    sub: 'Corrige un documento entero en tres pasos.',
    steps: [
      {
        title: 'Añade tu PDF',
        text: 'Suelta el archivo sobre la herramienta de arriba, haz clic para explorar, o pégalo con Ctrl+V. Las miniaturas se muestran y ves enseguida qué páginas están de lado.',
      },
      {
        title: 'Rota las páginas',
        text: 'Haz clic en el botón de rotación de una miniatura para girar esa página 90° en sentido horario, o selecciona varias páginas y usa la barra de herramientas para girarlas juntas. Sigue hasta que todas queden derechas.',
      },
      {
        title: 'Descarga el PDF-enderezado',
        text: 'Haz clic en Descargar PDF. El documento corregido se reconstruye en tu dispositivo con el mismo texto, las mismas imágenes y el mismo formato; solo ha cambiado la orientación de las páginas.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo roto las páginas de un PDF?',
      a: 'Añade tu PDF arriba y haz clic en el botón de rotación de cualquier miniatura para girarla 90° en sentido horario. Otro clic suma otros 90°, o usa el control de rotación de la barra de herramientas tras seleccionar varias páginas para girarlas todas juntas. Descarga cuando el documento se vea bien.',
    },
    {
      q: '¿Por qué mi PDF escaneado sale de lado?',
      a: 'Los escáneres de superficie plana y las cámaras del móvil capturan la página en la orientación en la que estaba apoyada, y los PDF no tienen metadatos de orientación fiables. Por eso un escaneo puede verse bien en tu equipo y torcido en el de otra persona. Corregir las páginas aquí reescribe el archivo en sí, así que se mostrará bien en todas partes.',
    },
    {
      q: '¿Puedo rotar un PDF sin subirlo?',
      a: 'Sí: la rotación se aplica por completo en tu navegador. Tu archivo nunca se transmite a un servidor, algo que puedes confirmar vigilando la pestaña de red en las herramientas de desarrollador de tu navegador mientras trabajas.',
    },
    {
      q: '¿Rotar un PDF baja su calidad?',
      a: 'No. La rotación cambia solo cómo se muestra la página, no su contenido. El texto sigue siendo seleccionable, los enlaces siguen funcionando y las imágenes no se recomprimen, así que el archivo rotado es igual de nítido que el original.',
    },
  ],
};

export default es;
