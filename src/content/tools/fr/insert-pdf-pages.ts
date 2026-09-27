import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Insérer des pages dans un PDF — Blances ou depuis un fichier',
    description:
      'Insérez des pages dans un PDF : page blanche, pages venues d\'un autre fichier ou remplacement d\'une page. Sans envoi, sans inscription ni filigrane.',
  },
  breadcrumb: 'Insérer des pages PDF',
  h1: 'Insérer des pages dans un PDF',
  intro:
    'Ajoutez des pages à un document existant sans le reconstruire. Insérez une feuille blanche, importez des pages depuis un autre PDF, puis placez le tout — vous téléchargerez ensuite un seul fichier combiné, qui n\'a jamais touché un serveur.',
  benefits: [
    {
      title: 'Pages blanches ou pages venues d\'un fichier',
      text: 'Insérez une page vide pour des notes, une couverture ou un intercalaire d\'impression — ou ajoutez des pages provenant d\'un second document. Les deux se font en un clic depuis la barre d\'outils.',
    },
    {
      title: 'Exactement là où il les faut',
      text: 'Les nouvelles pages arrivent dans la grille comme les autres : faites-les glisser et les pages voisines s\'écartent pour leur faire une place. Inutile de réordonner tout le document à la main.',
    },
    {
      title: 'Remplacez une page en une passe',
      text: 'Supprimez la page obsolète et faites glisser son remplaçante dans le vide. Comme les pages sont copiées et non recalculées, la nouvelle page conserve exactement sa mise en forme d\'origine.',
    },
  ],
  howTo: {
    heading: 'Comment insérer des pages dans un PDF',
    sub: 'Ajoutez et placez de nouvelles pages en trois étapes.',
    steps: [
      {
        title: 'Ajoutez votre document',
        text: 'Déposez votre PDF sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Les pages se chargent sous forme de grille de vignettes.',
      },
      {
        title: 'Insérez les nouvelles pages',
        text: 'Cliquez sur le bouton « + » de la barre d\'outils pour ajouter une page blanche à la fin, ou utilisez Ajouter des PDF pour importer des pages d\'un autre document. Chaque nouvelle page apparaît dans la grille, colorée selon sa source.',
      },
      {
        title: 'Placez et téléchargez',
        text: 'Faites glisser les nouvelles pages à leur place, puis cliquez sur Télécharger le PDF. Le document combiné est reconstitué sur votre appareil et enregistré — votre fichier d\'origine reste inchangé.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment insérer une page blanche dans un PDF ?',
      a: 'Ajoutez votre PDF à l\'outil ci-dessus et cliquez sur le bouton « + » de la barre d\'outils. Une page A4 vide s\'ajoute à la fin de la grille : faites-la glisser où vous la voulez, les pages voisines s\'écartent pour lui laisser une place. Téléchargez pour enregistrer la modification.',
    },
    {
      q: 'Comment ajouter des pages venant d\'un autre PDF ?',
      a: 'Utilisez le bouton « Ajouter des PDF » de la barre d\'outils pour choisir un second fichier. Toutes ses pages rejoignent la même grille, marquées d\'une couleur propre pour que vous sachiez d\'où elles viennent. Placez-les, puis téléchargez un seul PDF combiné.',
    },
    {
      q: 'Comment remplacer une page dans un PDF ?',
      a: 'Supprimez la page que vous remplacez, ajoutez le PDF qui contient la nouvelle, puis faites-la glisser dans l\'emplacement libéré. Comme chaque page est copiée octet par octet plutôt que recalculée, la remplaçante conserve ses polices, ses images et sa mise en page exactement.',
    },
    {
      q: 'Puis-je insérer des pages sans envoyer mon document ?',
      a: 'Oui : l\'insertion se fait entièrement dans votre navigateur, votre fichier n\'est donc jamais transmis. Ouvrez l\'onglet Réseau dans les outils de développement de votre navigateur pendant que vous travaillez et vous ne verrez aucune requête de fichier.',
    },
  ],
};

export default fr;
