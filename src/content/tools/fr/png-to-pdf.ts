import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Convertir PNG en PDF gratuit – en ligne, sans rien envoyer',
    description:
      'Convertissez les images PNG en PDF en ligne gratuitement. Combinez des fichiers PNG en un seul PDF avec une transparence gérée correctement – non',
  },
  breadcrumb: 'PNG à PDF',
  h1: 'Convertir des images PNG en PDF',
  intro:
    'Les PNG sont ce que vous obtenez à partir de captures d’écran, d’exportations de conceptions et de tout ce qui a un arrière-plan transparent. Ajoutez-les ici, conservez l\'ordre souhaité et téléchargez un seul PDF — converti sur votre appareil, jamais téléchargé.',
  benefits: [
    {
      title: 'La transparence est gérée correctement',
      text:
        'Un PNG avec un canal alpha est aplati sur une page blanche et nette au lieu d\'être déposé ou laissé comme un trou transparent, de sorte que les logos et les découpes apparaissent comme ils le faisaient à l\'écran.',
    },
    {
      title: 'Captures d\'écran dans leur forme originale',
      text:
        'Les données PNG sont intégrées dans le PDF sans réencodage, de sorte que le texte net d\'une capture d\'écran reste net. Rien n\'est sous-échantillonné pour rendre le fichier plus petit que nécessaire.',
    },
    {
      title: 'Combinez-les tous',
      text:
        'Ajoutez n\'importe quel nombre de fichiers PNG, faites-les glisser dans l\'ordre et téléchargez un document. Choisissez A4, Letter ou coupez chaque page pour l\'adapter exactement à son image.',
    },
  ],
  howTo: {
    heading: 'Comment convertir PNG en PDF',
    sub: 'Trois étapes, avec la conversion exécutée sur votre propre appareil.',
    steps: [
      {
        title: 'Ajoutez vos images PNG',
        text:
          'Faites glisser un ou plusieurs fichiers PNG sur l\'outil ci-dessus, cliquez pour parcourir ou collez-en un avec Ctrl+V. Les captures d\'écran et les graphiques exportés fonctionnent tous deux.',
      },
      {
        title: 'Choisissez la mise en page',
        text:
          'Choisissez A4 ou Letter pour l\'impression, ou Ajuster à l\'image pour découper chaque page étroitement à l\'image. Choisissez une orientation ou laissez-la suivre chaque image et définissez une marge si vous voulez respirer.',
      },
      {
        title: 'Téléchargez le PDF',
        text:
          'Cliquez sur Télécharger PDF. Le fichier est assemblé sur votre appareil et enregistré dans vos téléchargements – pas de filigrane et rien à télécharger.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment convertir un PNG en PDF ?',
      a:
        'Ajoutez vos images PNG à l\'outil ci-dessus, choisissez une taille de page, puis cliquez sur Télécharger PDF. Tout s\'exécute dans votre navigateur et le résultat est enregistré dans votre dossier de téléchargements.',
    },
    {
      q: 'Qu\'arrive-t-il aux zones transparentes dans un PNG ?',
      a:
        'Ils sont aplatis sur une page blanche. Les pages PDF ne sont pas transparentes, le canal alpha n\'a donc nulle part où aller ; la composition sur du blanc est ce qui préserve l\'apparence de l\'image sur votre écran. Si vous souhaitez que l\'arrière-plan soit d\'une couleur différente, choisissez-la avant la conversion.',
    },
    {
      q: 'La conversion réduira-t-elle la qualité d\'une capture d\'écran ?',
      a:
        'Non. Les données PNG sont intégrées exactement telles qu\'elles sont stockées, sans réencodage, de sorte que le petit texte d\'une capture d\'écran reste lisible. Les images ne sont jamais agrandies non plus : une capture d\'écran de 400 pixels de large reste de 400 pixels de large plutôt que d\'être étirée pour remplir une page A4.',
    },
    {
      q: 'Puis-je mettre plusieurs PNG dans un seul PDF ?',
      a:
        'Oui. Ajoutez-en autant que vous le souhaitez, faites-les glisser dans l\'ordre souhaité et téléchargez un seul PDF contenant tous. Il n\'y a pas de limite sur le nombre d\'images.',
    },
    {
      q: 'Mes PNG sont-ils téléchargés ?',
      a:
        'Non. Le décodage et l\'assemblage PDF se produisent tous deux dans l\'onglet de votre navigateur. Ouvrez l\'onglet Réseau des outils de développement pendant la conversion et vous ne verrez aucune demande transportant vos fichiers.',
    },
  ],
};

export default fr;