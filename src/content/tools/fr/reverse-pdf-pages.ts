import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Inverser l\'ordre des pages d\'un PDF — Privé',
    description:
      'Inversez l\'ordre des pages d\'un PDF en un clic, y compris les scans recto-verso. 100 % privé : rien n\'est téléchargé, aucune perte de qualité, sans inscription.',
  },
  breadcrumb: 'Inverser l\'ordre des pages',
  h1: 'Inverser l\'ordre des pages d\'un PDF',
  intro:
    'Corrigez un document entièrement à l\'envers. Un clic retourne un scan recto-verso : la page 1 arrive en premier, la dernière page reste la dernière — sans aucun glisser-déposer, et votre fichier ne quitte pas le navigateur.',
  benefits: [
    {
      title: 'Un clic pour tout le document',
      text: 'L\'inversion complète tient en un clic, au lieu de faire passer une centaine de vignettes les unes devant les autres. Idéal pour un scan recto-verso sorti dans le mauvais sens, ou pour un fascicule assemblé dans la séquence inverse.',
    },
    {
      title: 'Vérifiez avant de valider',
      text: 'Les vignettes se réordonnent aussitôt : vous confirmez la séquence avant de télécharger. Un clic supplémentaire remet les choses à l\'endroit si besoin, l\'inversion n\'étant qu\'une étape annulable de plus.',
    },
    {
      title: 'Qualité inchangée',
      text: 'Seule la séquence des pages change. Chaque page est copiée exactement comme elle était : texte, images, graphiques vectoriels et liens sont identiques au fichier d\'origine.',
    },
  ],
  howTo: {
    heading: 'Comment inverser l\'ordre des pages d\'un PDF',
    sub: 'Trois étapes pour réparer un document recto-verso.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Les pages apparaissent en vignettes, dans leur ordre actuel — le mauvais.',
      },
      {
        title: 'Inversez l\'ordre',
        text: 'Cliquez sur le bouton d\'inversion de la barre d\'outils. Chaque page change de position instantanément : la dernière devient la première, la première devient la dernière, et tout ce qui se trouve entre les deux se retourne en conséquence.',
      },
      {
        title: 'Téléchargez le PDF corrigé',
        text: 'Vérifiez la nouvelle séquence dans la grille, puis cliquez sur Télécharger le PDF. Le document réordonné est reconstitué sur votre appareil et enregistré aussitôt.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment inverser l\'ordre des pages d\'un PDF ?',
      a: 'Ajoutez votre PDF à l\'outil ci-dessus et cliquez sur le bouton d\'inversion de la barre d\'outils. Tout le document se retourne en une étape : dernière page d\'abord, première page à la fin. Téléchargez le résultat et le fichier est enregistré dans l\'ordre corrigé.',
    },
    {
      q: 'Pourquoi mon PDF scanné est-il recto-verso ?',
      a: 'Les chargeurs automatiques des scanners et des copieurs empilent souvent les pages face visible vers le haut : le scanner les lit alors à partir de la dernière feuille. Le résultat paraît normal dans l\'aperçu de l\'application de numérisation, mais s\'imprime à l\'envers. Inverser l\'ordre des pages est le correctif standard, et cela tient ici en un clic.',
    },
    {
      q: 'Peut-on inverser l\'ordre des pages sans envoyer le fichier ?',
      a: 'Oui. La réorganisation se fait entièrement dans l\'onglet de votre navigateur : aucune copie de votre document n\'est envoyée nulle part. Surveillez l\'onglet Réseau de vos outils de développement pendant que vous travaillez si vous voulez le vérifier vous-même.',
    },
    {
      q: 'Faut-il déplacer chaque page pour corriger un scan inversé ?',
      a: 'Non — c\'est justement l\'intérêt du bouton d\'inversion. Un scan de 300 pages se répare en un clic au lieu de 299 glissements distincts. Si seules quelques pages sont mal placées plutôt que tout le document, déplacez plutôt ces vignettes-là.',
    },
  ],
};

export default fr;
