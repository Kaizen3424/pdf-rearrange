import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Ajouter un filigrane au PDF – gratuit, en ligne, privé',
    description:
      'Ajoutez gratuitement un filigrane de texte aux pages PDF. Définissez le texte, la taille, l\'angle et l\'opacité, et répétez-le sur chaque page.',
  },
  breadcrumb: 'Filigrane PDF',
  h1: 'Ajouter un filigrane aux pages PDF',
  intro:
    'Diagonale CONFIDENTIEL sur chaque page, ou une note discrète dans le coin. Définissez le texte et son apparence, puis téléchargez-le. Le filigrane est dessiné sur vos pages existantes, de sorte que le texte, les liens et les images situés en dessous restent intacts.',
  benefits: [
    {
      title: 'Dessiné sur l\'original, pas sur une image',
      text:
        'Vos pages restent de vraies pages. Le texte est toujours sélectionnable et les liens fonctionnent toujours après l\'apparition du filigrane – à l\'opposé de ce qui se produit lorsqu\'un outil aplatit votre document en une image.',
    },
    {
      title: 'Une fois sur la page ou en mosaïque sur la page',
      text:
        'Une seule ligne diagonale passant par le milieu se lit clairement. Pour un brouillon de document, placez-le en mosaïque afin que le marquage ne puisse pas être rogné sur une capture d\'écran.',
    },
    {
      title: 'Contrôle fin, valeurs par défaut raisonnables',
      text:
        'Le texte, la taille, l\'angle, la couleur et l\'opacité sont tous réglables, et cela commence avec une faible opacité afin que le filigrane soit visible sans cacher ce qui se trouve en dessous.',
    },
  ],
  howTo: {
    heading: 'Comment filigraner un PDF',
    sub: 'Trois étapes, appliquées entièrement sur votre appareil.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text:
          'Déposez le document sur l\'outil ci-dessus ou cliquez pour parcourir. Plusieurs fichiers peuvent être filigranés ensemble.',
      },
      {
        title: 'Définir l\'apparence du filigrane',
        text:
          'Tapez votre texte, puis ajustez la taille, la rotation et l\'opacité. Laissez la répétition activée pour un filigrane en mosaïque sur toute la page ou désactivez-la pour une seule marque centrée.',
      },
      {
        title: 'Téléchargez le PDF estampillé',
        text:
          'Cliquez sur Ajouter un filigrane. Une copie avec le filigrane appliqué est enregistrée dans vos téléchargements – votre fichier original reste intact.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment ajouter un filigrane à un PDF ?',
      a:
        'Ajoutez votre PDF ci-dessus, tapez le texte souhaité, ajustez l\'opacité et l\'angle, puis cliquez sur Ajouter un filigrane. La copie tamponnée est téléchargée et votre original est laissé seul.',
    },
    {
      q: 'Le filigrane endommage-t-il le document ?',
      a:
        'Non. Le filigrane est ajouté sous forme de calque sur chaque page, de sorte que le texte, les images et les liens originaux sont préservés en dessous. Votre fichier source n\'est jamais modifié.',
    },
    {
      q: 'Quelle opacité dois-je utiliser ?',
      a:
        'Entre 10 % et 25 % est la fourchette habituelle – clairement lisible mais n’obscurcissant pas le contenu. Allez plus haut uniquement pour un brouillon de marquage dont le point est qu\'il ne peut pas être ignoré.',
    },
    {
      q: 'Puis-je filigraner une seule page ?',
      a:
        'Cette version applique le filigrane à chaque page, ce que signifie normalement un filigrane. Pour marquer une seule page, divisez d\'abord le document et filigranez la page dont vous avez besoin.',
    },
    {
      q: 'Mon PDF est-il téléchargé ?',
      a:
        'Non. Le document est lu et tamponné dans l’onglet de votre navigateur, donc aucune copie n’est jamais transmise. Cela est important pour exactement le type de fichier que les personnes filigranent : contrats, rapports, brouillons internes.',
    },
  ],
};

export default fr;