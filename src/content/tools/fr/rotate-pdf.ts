import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Faire pivoter un PDF en ligne — 90°, 180°, 270° gratis',
    description:
      'Faites pivoter les pages d\'un PDF de 90, 180 ou 270°, une par une ou en lot. 100 % privé : aucune transmission, aucune perte de qualité, sans inscription.',
  },
  breadcrumb: 'Faire pivoter un PDF',
  h1: 'Faire pivoter les pages d\'un PDF',
  intro:
    'Remettez à l\'endroit un document de travers ou à l\'envers. Faites pivoter une page ou appliquez la même rotation à des dizaines de pages d\'un coup, contrôlez au fil de l\'eau, puis téléchargez le fichier corrigé — sans rien envoyer nulle part.',
  benefits: [
    {
      title: 'Une page ou tout un lot',
      text: 'Faites pivoter une page avec le bouton de sa vignette, ou sélectionnez-en plusieurs et retournez-les d\'un geste. Réparer un scan de travers de 200 pages demande un clic par direction, pas 200 clics.',
    },
    {
      title: 'L\'angle exact qu\'il vous faut',
      text: 'Les rotations se font par pas de 90° — à gauche, à droite, ou à l\'envers complet — et se combinent quand chaque page a besoin d\'un traitement différent. Rien n\'est recalculé : le résultat est identique au pixel près, seule l\'orientation change.',
    },
    {
      title: 'Réversible par conception',
      text: 'La rotation rejoint l\'historique d\'annulation : un clic de travers s\'efface d\'un Ctrl+Z. Faites tourner et tourner autant que vous voulez, la page ne change qu\'au téléchargement.',
    },
  ],
  howTo: {
    heading: 'Comment faire pivoter un PDF',
    sub: 'Corrigez un document entier en trois étapes.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Les vignettes s\'affichent et vous voyez tout de suite quelles pages sont de travers.',
      },
      {
        title: 'Faites pivoter les pages',
        text: 'Cliquez sur le bouton de rotation d\'une vignette pour tourner cette page de 90° dans le sens des aiguilles d\'une montre. Pour plusieurs pages, sélectionnez-les et utilisez la barre d\'outils afin de les retourner ensemble. Continuez jusqu\'à ce que tout soit droit.',
      },
      {
        title: 'Téléchargez le PDF redressé',
        text: 'Cliquez sur Télécharger le PDF. Le document corrigé est reconstitué sur votre appareil avec le même texte, les mêmes images et la même mise en forme — seule l\'orientation des pages a changé.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment faire pivoter les pages d\'un PDF ?',
      a: 'Ajoutez votre PDF ci-dessus, puis cliquez sur le bouton de rotation d\'une vignette pour la tourner de 90° dans le sens horaire. Un nouveau clic ajoute 90° ; avec plusieurs pages sélectionnées, la commande de rotation de la barre d\'outils les retourne toutes d\'un coup. Téléchargez quand le document entier vous paraît correct.',
    },
    {
      q: 'Pourquoi mon PDF scanné est-il de travers ?',
      a: 'Les scanners à plat et les téléphones captent la page dans l\'orientation où elle était posée, et les PDF ne possèdent pas de métadonnée d\'orientation fiable. Voilà pourquoi un scan peut sembler correct chez vous et penché chez quelqu\'un d\'autre. Corriger les pages ici réécrit le fichier lui-même, qui s\'affichera alors correctement partout.',
    },
    {
      q: 'Peut-on faire pivoter un PDF sans l\'envoyer à un serveur ?',
      a: 'Oui : la rotation est appliquée entièrement dans votre navigateur. Votre fichier n\'est jamais transmis, ce que vous pouvez confirmer en surveillant l\'onglet Réseau dans les outils de développement de votre navigateur pendant que vous travaillez.',
    },
    {
      q: 'Faire pivoter dégrade-t-il la qualité d\'un PDF ?',
      a: 'Non. La rotation change uniquement la façon dont la page est affichée, pas son contenu. Le texte reste sélectionnable, les liens fonctionnent et les images ne sont pas recompressées : le fichier tourné est aussi net que l\'original.',
    },
  ],
};

export default fr;
