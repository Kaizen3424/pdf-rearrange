import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Signez un PDF en ligne gratuitement — Placez votre signature',
    description:
      'Signez des PDF gratuitement : ajoutez votre image de signature à n\'importe quelle page, positionnez-la à sa place et téléchargez-la. Appliqué dans votre',
  },
  breadcrumb: 'Signer un PDF',
  h1: 'Signez votre PDF dans le navigateur',
  intro:
    'Vous avez déjà votre signature, celle que vous utilisez sur les livraisons et les formulaires. Ajoutez-le sous forme d\'image aux pages qui doivent être signées, placez-le là où se trouve la ligne de signature et téléchargez-le. Le document ne quitte jamais votre appareil, c’est tout l’intérêt d’une signature.',
  benefits: [
    {
      title: 'Utilisez la signature que vous avez déjà',
      text:
        'Scannez ou photographiez votre signature une fois, enregistrez-la sous PNG et réutilisez-la. Un fond transparent fonctionne mieux : tout ce qui est rectangulaire est livré avec sa propre boîte blanche.',
    },
    {
      title: 'Placé là où le document l\'attend',
      text:
        'Sept positions d\'ancrage plus un aperçu en direct, de sorte que la signature atterrit sur la ligne de signature plutôt que de flotter quelque part à proximité.',
    },
    {
      title: 'Le document reste privé',
      text:
        'Un contrat signé est un document terminé. Il est ouvert, tamponné et enregistré dans l’onglet de votre navigateur — aucun serveur n’en reçoit jamais de copie, avant ou après la signature.',
    },
  ],
  howTo: {
    heading: 'Comment signer un PDF',
    sub: 'Trois étapes, et rien n\'est téléchargé.',
    steps: [
      {
        title: 'Ajoutez le PDF que vous devez signer',
        text:
          'Déposez-le sur l\'outil ci-dessus ou cliquez pour parcourir. Plusieurs fichiers peuvent être signés en un seul passage.',
      },
      {
        title: 'Ajoutez votre image de signature',
        text:
          'Sélectionnez le PNG ou JPG de votre signature. Un PNG transparent ne conserve que l\'encre ; une photo sur papier blanc montrera son arrière-plan, donc une numérisation avec l\'arrière-plan supprimé sera meilleure.',
      },
      {
        title: 'Positionner et télécharger',
        text:
          'Choisissez l\'emplacement de la signature (en bas à droite se trouve l\'endroit habituel), puis cliquez sur Ajouter une signature. La copie signée est téléchargée et votre original est intact.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment signer un PDF ?',
      a:
        'Ajoutez le PDF, sélectionnez une image de votre signature, choisissez sa position et cliquez sur Ajouter une signature. Le document signé est enregistré dans vos téléchargements.',
    },
    {
      q: 'Est-ce une signature juridiquement valable ?',
      a:
        'Cela dépend de votre juridiction et de ce que le destinataire accepte, et non de l\'outil. Cela place une image de votre signature sur le document ; il n\'applique pas de signature numérique cryptographique. De nombreux flux de travail acceptent une image, et ceux qui nécessitent une signature cryptographique le diront.',
    },
    {
      q: 'Quel type d’image de signature fonctionne le mieux ?',
      a:
        'Un PNG avec un fond transparent. L\'outil accepte également JPG, mais une photo d\'une signature sur papier portera avec elle son fond blanc, vous obtenez donc un cadre blanc autour de l\'encre.',
    },
    {
      q: 'Puis-je signer une seule page d’un long document ?',
      a:
        'Cette version tamponne chaque page, ce qui correspond à un accord complet. Pour signer une seule page, divisez d’abord le document, signez cette page et fusionnez à nouveau les parties.',
    },
    {
      q: 'Mon document signé est-il téléchargé quelque part ?',
      a:
        'La signature s\'effectue dans l\'onglet de votre navigateur et aucune copie du document, signée ou non, n\'est transmise à un serveur.',
    },
  ],
};

export default fr;