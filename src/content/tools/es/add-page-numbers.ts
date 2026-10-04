import type { ToolContent } from '../types';

const es: ToolContent = {
  meta: {
    title: 'Agregar números de página a un PDF en línea - Gratis',
    description:
      'Agregue números de página a las páginas PDF gratis. Elija el formato, la posición y el número inicial: aplicado en su dispositivo, sin cargas, sin registro',
  },
  breadcrumb: 'Agregar números de página',
  h1: 'Agregue números de página a su PDF',
  intro:
    'Numerar un documento a mano es tedioso y es fácil equivocarse una vez que se mueven las páginas. Agregue los números una vez y permanecerán correctos: establezca un formato como "Página 3 de 12", elija dónde va y descárguelo.',
  benefits: [
    {
      title: 'Un formato que controlas',
      text:
        'Utilice {n} para la página actual y {total} para el recuento de páginas, de modo que "Página {n} de {total}", "{n}/{total}" o simplemente "{n}" funcionen. Los números son texto, no una superposición de imágenes.',
    },
    {
      title: 'Número desde cualquier punto de partida',
      text:
        'Si la página 1 es una portada y el cuerpo debe comenzar en 1 en la segunda hoja, establezca el número inicial y se alineará. Útil al combinar capítulos en un solo documento.',
    },
    {
      title: 'Posiciones que se leen correctamente',
      text:
        'Abajo en el centro para un informe formal, abajo a la derecha para un manual, arriba a la izquierda si coincide con su plantilla existente. Seis anclajes, más un tamaño que puedas adaptar al documento.',
    },
  ],
  howTo: {
    heading: 'Cómo agregar números de página a un PDF',
    sub: 'Tres pasos, en tu propio dispositivo.',
    steps: [
      {
        title: 'Añade tu PDF',
        text:
          'Suelte el documento en la herramienta de arriba o haga clic para explorar. Aparece el recuento de páginas para que sepa el rango que está numerando.',
      },
      {
        title: 'Elige el formato y la posición',
        text:
          'Establezca el formato de los números, dónde se ubican los números, qué tan grandes son y desde qué página comenzar a contar. Se muestra un ejemplo en vivo en el campo de formato.',
      },
      {
        title: 'Descarga el PDF numerado',
        text:
          'Haga clic en Agregar números de página y la copia numerada se guardará en sus descargas. Su archivo original no ha cambiado.',
      },
    ],
  },
  faq: [
    {
      q: '¿Cómo agrego números de página a un PDF?',
      a:
        'Agregue el PDF anterior, elija un formato y una posición, luego haga clic en Agregar números de página. Cada página está numerada y se descarga la copia.',
    },
    {
      q: '¿Puedo empezar a numerar desde un número distinto del 1?',
      a:
        'Sí. Establezca el número inicial y la primera página que cargue obtendrá ese valor. Es la forma sencilla de numerar varios documentos como una secuencia continua.',
    },
    {
      q: '¿Los números de página serán texto seleccionable?',
      a:
        'Sí. Están incrustados como texto real, por lo que se pueden seleccionar y buscar, y no se borran al imprimir.',
    },
    {
      q: '¿Puedo numerar sólo determinadas páginas?',
      a:
        'Esta versión numera cada página. Para numerar de forma selectiva, primero divida el documento y aplique la numeración a las partes que lo necesiten.',
    },
    {
      q: '¿Está subido mi PDF?',
      a:
        'No. La numeración ocurre completamente dentro de la pestaña de su navegador. No se transmite nada, por lo que un informe no publicado permanece inédito.',
    },
  ],
};

export default es;