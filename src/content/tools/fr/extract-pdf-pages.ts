import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Extraire des pages d\'un PDF — Gardez l\'essentiel',
    description:
      'Extrait les pages utiles d\'un PDF et téléchargez un document neuf, sans filigrane. 100 % privé : le fichier n\'est jamais transmis, la qualité reste intacte.',
  },
  breadcrumb: 'Extraire des pages PDF',
  h1: 'Extraire des pages d\'un PDF',
  intro:
    'Ne gardez que les pages qui comptent et obtenez un document neuf, bien propre. Cochez les pages voulues — ou toute une plage — et l\'outil construit un PDF qui contient exactement celles-là, dans l\'ordre de votre choix, sans envoyer votre fichier nulle part.',
  benefits: [
    {
      title: 'Cochez au lieu de recopier des numéros',
      text: 'Sélectionnez les pages directement sur les vignettes plutôt que de saisir des numéros en espérant ne pas vous tromper de plage. Maj-cliquez pour attraper un bloc entier, Ctrl+A pour tout reprendre à zéro.',
    },
    {
      title: 'Réorganisez pendant l\'extraction',
      text: 'Les pages sélectionnées se font glisser dans un autre ordre avant l\'export : vous pouvez sortir trois pages d\'un rapport et les classer dans la séquence qui vous convient vraiment.',
    },
    {
      title: 'Copies octet par octet',
      text: 'Les pages extraites sont copiées directement depuis le fichier source, jamais recalculées. Polices, graphiques vectoriels, images et liens sont préservés à l\'identique, sans la moindre recompression.',
    },
  ],
  howTo: {
    heading: 'Comment extraire des pages d\'un PDF',
    sub: 'Sélectionnez les pages voulues et téléchargez le nouveau document.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Toutes les pages apparaissent en vignettes avec leur numéro.',
      },
      {
        title: 'Sélectionnez les pages à garder',
        text: 'Cliquez sur chaque page que vous voulez extraire. Cliquez sur la première puis Maj-cliquez sur la dernière pour prendre toute une plage, ou servez-vous de Ctrl+A pour tout sélectionner avant de décocher ce dont vous n\'avez pas besoin.',
      },
      {
        title: 'Téléchargez le PDF extrait',
        text: 'Le nouveau document est assemblé sur votre appareil à partir des seules pages sélectionnées, puis téléchargé. Le fichier d\'origine n\'est jamais modifié.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment extraire certaines pages d\'un PDF ?',
      a: 'Ajoutez votre PDF ci-dessus, puis cliquez sur les pages à conserver dans la grille de vignettes. Cliquez sur la première page et Maj-cliquez sur la dernière pour sélectionner une plage, ou proceedez page par page. Cliquez sur Télécharger le PDF et vous obtenez un document qui ne contient que ces pages, dans l\'ordre affiché.',
    },
    {
      q: 'Quelle différence entre extraire et supprimer des pages ?',
      a: 'Le document obtenu a la même taille dans les deux cas. L\'extraction produit un nouveau PDF à partir des pages conservées, ce qui laisse votre fichier d\'origine intact sur votre disque. La suppression enlève des pages dans l\'éditeur et écrase le résultat au téléchargement. Utilisez l\'extraction pour préserver l\'original, la suppression quand vous travaillez de toute façon sur une copie.',
    },
    {
      q: 'Peut-on extraire des pages sans envoyer le PDF ?',
      a: 'Oui. Le document est lu et reconstruit entièrement dans votre navigateur, donc aucune copie n\'est transmise. Surveillez l\'onglet Réseau dans les outils de développement de votre navigateur pendant que vous travaillez : rien n\'est envoyé.',
    },
    {
      q: 'Puis-je réordonner les pages que j\'extrais ?',
      a: 'Oui. Une fois sélectionnées, les pages se déplacent dans n\'importe quel ordre avant le téléchargement. Vous pouvez ainsi sortir quelques pages d\'un long rapport et les classer comme vous l\'entendez, au lieu de subir l\'ordre dans lequel elles apparaissaient.',
    },
  ],
};

export default fr;
