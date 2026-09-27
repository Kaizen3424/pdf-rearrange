import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Insérer une page blanche dans un PDF — Gratuit, en ligne',
    description:
      'Insérez une page blanche n\'importe où dans un PDF : notes, séparateur ou impression recto-verso. Sans envoi de fichier, sans filigrane ni inscription.',
  },
  breadcrumb: 'Insérer une page blanche',
  h1: 'Insérer une page blanche dans un PDF',
  intro:
    'Ajoutez une feuille vide exactement là où il vous en faut une. Que ce soit pour noter, pour séparer deux chapitres ou pour ménager de l\'espace afin d\'imprimer en recto-verso, la page blanche tient en un clic et ne quitte jamais votre navigateur.',
  benefits: [
    {
      title: 'N\'importe quelle position, pas seulement à la fin',
      text: 'Les nouvelles pages blanches entrent dans la grille comme des pages ordinaires : faites-les glisser où il vous les faut. Glissez-en une entre deux chapitres, en couverture au début, ou en feuillet de notes à la fin.',
    },
    {
      title: 'Réglez l\'impression recto-verso',
      text: 'Lorsqu\'un document s\'imprime au verso sur une page blanche, ajouter une seule page vide est le correctif habituel : le nombre de pages s\'équilibre et chaque feuille porte du contenu sur ses deux faces.',
    },
    {
      title: 'Illimité et annulable',
      text: 'Ajoutez autant de feuilles blanches que nécessaire, retirez-les aussi vite. Chaque insertion est une étape d\'annulation unique : expérimenter ne vous coûte rien.',
    },
  ],
  howTo: {
    heading: 'Comment insérer une page blanche dans un PDF',
    sub: 'Ajoutez une feuille vide en trois étapes.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Les pages se chargent dans une grille de vignettes.',
      },
      {
        title: 'Ajoutez la page blanche',
        text: 'Cliquez sur le bouton « + » de la barre d\'outils. Une page A4 vide s\'ajoute à la fin de la grille, prête à être déplacée.',
      },
      {
        title: 'Placez et téléchargez',
        text: 'Faites glisser la page blanche où vous la voulez, puis cliquez sur Télécharger le PDF. Le document complété par votre nouvelle feuille est reconstitué sur votre appareil et enregistré.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment ajouter une page blanche à un PDF ?',
      a: 'Ajoutez votre PDF à l\'outil ci-dessus et cliquez sur le bouton « + » de la barre d\'outils. Une page A4 blanche s\'ajoute à la fin : faites-la glisser à l\'endroit voulu, puis cliquez sur Télécharger le PDF pour enregistrer le document avec la nouvelle feuille.',
    },
    {
      q: 'Pourquoi aurais-je besoin d\'une page blanche ?',
      a: 'La raison la plus courante est l\'impression en recto-verso : si un document se termine sur une page impaire, la feuille suivante s\'imprime blanche au recto, et une page vide ajoutée à la fin fait imprimer toutes les feuilles des deux côtés. On ajoute aussi des pages blanches comme intercalaires de chapitre, couvertures, ou espace pour des notes manuscrites.',
    },
    {
      q: 'Puis-je insérer une page blanche sans envoyer mon PDF ?',
      a: 'Oui. La page est ajoutée et le document reconstruit entièrement dans votre navigateur : rien n\'est transmis. Surveillez l\'onglet Réseau dans les outils de développement de votre navigateur pendant que vous travaillez pour le vérifier vous-même.',
    },
    {
      q: 'Peut-on changer la taille de la page blanche ?',
      a: 'Les pages blanches sont ajoutées au format A4. S\'il vous faut un autre format de papier, faites pivoter la page pour changer son orientation, ou ajustez le format de page après l\'insertion.',
    },
  ],
};

export default fr;
