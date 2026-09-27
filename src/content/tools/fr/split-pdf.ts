import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Diviser un PDF en ligne — Extraire des pages gratuitement',
    description:
      'Divisez un PDF en plusieurs fichiers ou extrayez page par page. 100 % privé : rien n\'est téléchargé, la qualité d\'origine est conservée. Sans inscription.',
  },
  breadcrumb: 'Diviser un PDF',
  h1: 'Diviser un PDF en plusieurs documents',
  intro:
    'Éclatez un PDF en autant de fichiers que nécessaire. Choisissez une plage de pages et récupérez un document, ou sortez chaque page dans son propre fichier en une seule passe. Rien n\'est téléchargé, et les pages obtenues sont des copies octet par octet de vos originaux.',
  benefits: [
    {
      title: 'Par plage ou page par page',
      text: 'Saisissez « 1-5, 12, 20-30 » pour extraire exactement les pages voulues dans un seul fichier, ou isnpez chaque page dans un document distinct. Les deux modes fonctionnent dans le même onglet.',
    },
    {
      title: 'Voyez les pages avant de choisir',
      text: 'Chaque page s\'affiche en vignette réelle avant votre choix, vous n\'inventez donc aucun numéro. Parcourez l\'aperçu en pleine taille pour vérifier que vos bornes tombent au bon endroit.',
    },
    {
      title: 'Sans téléchargement ni limite',
      text: 'Le découpage s\'effectue sur votre appareil : aucun plafond de taille, aucune file d\'attente. Fermez l\'onglet quand vous avez fini et le fichier disparaît de la mémoire — le serveur n\'en a jamais gardé de copie.',
    },
  ],
  howTo: {
    heading: 'Comment diviser un PDF',
    sub: 'Choisissez vos pages, téléchargez. C\'est tout le travail.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Le nombre de pages et les vignettes apparaissent immédiatement.',
      },
      {
        title: 'Choisissez ce que vous voulez séparer',
        text: 'Tapez les plages avec des virgules et des tirets — par exemple 1-4, 9, 15-20 — ou basculez sur « chaque page » pour obtenir un fichier par page. Les plages sont vérifiées au fur et à mesure de la saisie, donc une faute de frappe n\'entraîne pas de pages perdues.',
      },
      {
        title: 'Téléchargez vos fichiers',
        text: 'Chaque document obtenu est reconstitué sur votre appareil puis téléchargé. Diviser ne recompresse jamais rien : la qualité est identique à celle de l\'original.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment diviser un PDF en plusieurs fichiers ?',
      a: 'Ajoutez votre PDF ci-dessus, choisissez une plage comme 1-5 ou « chaque page », puis cliquez sur le bouton de division. Chaque document est généré sur votre appareil et enregistré séparément : vous obtenez un fichier par plage ou par page.',
    },
    {
      q: 'Comment diviser par plage de pages ?',
      a: 'Saisissez les plages avec des virgules et des tirets — par exemple 1-4, 9, 15-20 — et chacune devient un PDF distinct dans l\'ordre où vous les saisissez. Une seule plage comme 1-4 donne un seul fichier de sortie ; séparez-les par des virgules lorsque vous voulez plusieurs fichiers à la fois.',
    },
    {
      q: 'Peut-on diviser un très gros PDF ?',
      a: 'Oui, et il n\'y a pas de limite artificielle puisque rien n\'est téléchargé. Les documents très volumineux ou en très haute résolution consomment davantage de mémoire pendant le traitement : quelques centaines de pages passent sans problème, un scan de mille pages peut sembler lent sur un téléphone ancien.',
    },
    {
      q: 'La division réduit-elle la qualité du PDF ?',
      a: 'Non. Les pages sont copiées octet par octet depuis le fichier d\'origine plutôt que recalculées, si bien que le résultat a exactement la qualité de la source : le texte reste sélectionnable et les graphiques vectoriels restent nets.',
    },
  ],
};

export default fr;
