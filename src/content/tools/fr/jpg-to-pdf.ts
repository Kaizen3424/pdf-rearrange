import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Convertissez des images JPG en PDF gratuitement en ligne',
    description:
      'Convertissez les images JPG en PDF en ligne gratuitement. Combinez un ou plusieurs fichiers JPEG en un seul PDF qui reste sur votre appareil',
  },
  breadcrumb: 'JPG à PDF',
  h1: 'Convertir des images JPG en PDF',
  intro:
    'Les photographies, les numérisations et les captures d\'écran arrivent généralement sous forme de JPG, et la plupart des gens en ont besoin dans un seul PDF. Ajoutez vos images, définissez la taille de la page et téléchargez : la conversion s\'effectue dans votre navigateur, de sorte que vos images ne sont jamais envoyées à un serveur.',
  benefits: [
    {
      title: 'Vos photos restent en place',
      text:
        'Les images sont lues, placées et écrites dans un PDF entièrement dans l\'onglet de votre navigateur. Rien n\'est téléchargé, donc les photos personnelles et les documents numérisés ne sont jamais transmis nulle part.',
    },
    {
      title: 'Pas de recompression',
      text:
        'Les octets JPEG sont intégrés textuellement plutôt que décodés et réencodés. Une photo qui semblait nette dans votre galerie est identique dans le PDF, sans artefacts de compression de deuxième génération.',
    },
    {
      title: 'Un PDF parmi plusieurs images',
      text:
        'Ajoutez autant de JPG que vous le souhaitez, faites-les glisser dans l\'ordre souhaité et obtenez un seul document bien rangé - avec A4, Letter ou des pages découpées pour s\'adapter exactement à chaque image.',
    },
  ],
  howTo: {
    heading: 'Comment convertir JPG en PDF',
    sub: 'Trois étapes, et vos images ne quittent jamais l\'appareil.',
    steps: [
      {
        title: 'Ajoutez vos images JPG',
        text:
          'Faites glisser un ou plusieurs fichiers JPG sur l\'outil ci-dessus, ou cliquez pour parcourir. Vous pouvez également coller une image avec Ctrl+V et en ajouter d\'autres à tout moment sans recommencer.',
      },
      {
        title: 'Définir la mise en page',
        text:
          'Choisissez A4, Letter ou Ajuster à l\'image pour découper chaque page jusqu\'à son image. Choisissez portrait, paysage ou laissez l\'orientation suivre l\'image et ajoutez une marge si vous souhaitez un espace blanc autour de celle-ci.',
      },
      {
        title: 'Téléchargez le PDF',
        text:
          'Cliquez sur Télécharger PDF. Votre document est créé sur votre appareil et enregistré dans vos téléchargements – sans filigrane ni étape de téléchargement à attendre.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment convertir un JPG en PDF ?',
      a:
        'Ouvrez l\'outil ci-dessus, ajoutez votre image JPG, choisissez une taille de page, puis cliquez sur Télécharger PDF. La conversion s\'exécute dans votre navigateur et le fichier terminé est enregistré directement dans vos téléchargements.',
    },
    {
      q: 'Mes images sont-elles téléchargées n\'importe où ?',
      a:
        'Non. Chaque image est décodée, placée et écrite dans le PDF dans votre propre onglet de navigateur, donc aucune copie de vos photos n\'est jamais envoyée à un serveur. Vous pouvez le confirmer vous-même : ouvrez les outils de développement de votre navigateur, regardez l\'onglet Réseau et convertissez une image. Rien n\'est transmis.',
    },
    {
      q: 'La conversion de JPG en PDF réduira-t-elle la qualité de l’image ?',
      a:
        'Non. Les données JPEG sont intégrées dans le PDF exactement telles qu\'elles apparaissent dans votre fichier, plutôt que d\'être décodées et réencodées. Cela évite une deuxième génération d’artefacts de compression, ce qui donne généralement un aspect doux aux photos converties.',
    },
    {
      q: 'Puis-je combiner plusieurs JPG en un seul PDF ?',
      a:
        'Oui. Ajoutez autant d\'images que vous le souhaitez, faites-les glisser dans l\'ordre souhaité et téléchargez un document les contenant toutes. Il n’y a pas de limite au nombre d’images.',
    },
    {
      q: 'Quelle taille de page dois-je choisir ?',
      a:
        'Choisissez A4 ou Letter pour l\'impression, ce qui donne à chaque image une page standard complète. Choisissez Ajuster à l\'image lorsque vous souhaitez que la page soit bien ajustée à chaque image, sans espace vide environnant, ce qui est utile pour un album photo ou une bande dessinée.',
    },
  ],
};

export default fr;