import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Dupliquer des pages PDF en ligne — Une copie parfaite',
    description:
      'Dupliquez une page ou une plage entière de votre PDF, sur place ou ailleurs. Rien n\'est envoyé à un serveur, la copie est identique. Sans inscription.',
  },
  breadcrumb: 'Dupliquer des pages PDF',
  h1: 'Dupliquer des pages dans un PDF',
  intro:
    'Répetez une page sans retrouver le fichier d\'origine. Copiez une page ou tout un bloc, puis placez les copies où il le faut — côte à côte, sur la feuille suivante, ou ailleurs selon le document — sans rien télécharger.',
  benefits: [
    {
      title: 'Copiez sur place ou ailleurs',
      text: 'Un double peut rester juste après son original ou être déplacé n\'importe où dans le document. Répètez un en-tête sur chaque page, gardez une copie pour un collègue, doublez une fiche de signature.',
    },
    {
      title: 'Dupliquez un lot entier',
      text: 'Sélectionner plusieurs pages et les dupliquer une seule fois les répète toutes en une action : la copie de chaque page est insérée juste après l\'original, ce qui préserve votre séquence.',
    },
    {
      title: 'Qualité identique à chaque fois',
      text: 'Les copies sont des duplicatas octet par octet de la page source, pas un recalcul : texte, graphiques vectoriels et polices intégrées sont indiscernables de l\'original.',
    },
  ],
  howTo: {
    heading: 'Comment dupliquer des pages PDF',
    sub: 'Copiez une page ou toute une plage en trois étapes.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Les pages apparaissent en vignettes numérotées.',
      },
      {
        title: 'Dupliquez la ou les pages',
        text: 'Cliquez sur le bouton de copie d\'une vignette pour dupliquer cette page, ou sélectionnez plusieurs pages et utilisez la commande de duplication de la barre d\'outils. Chaque copie s\'insère juste après son original.',
      },
      {
        title: 'Placez et téléchargez',
        text: 'Faites glisser les nouvelles copies où vous les voulez, puis cliquez sur Télécharger le PDF. Le document est reconstitué sur votre appareil, toutes copies intactes.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment dupliquer une page dans un PDF ?',
      a: 'Ajoutez votre PDF à l\'outil ci-dessus et cliquez sur le bouton de copie de la vignette de la page à répéter. Le double s\'insère juste après l\'original. Déplacez-le ailleurs s\'il vous le faut à un autre endroit, puis téléchargez.',
    },
    {
      q: 'Peut-on dupliquer plusieurs pages d\'un coup ?',
      a: 'Oui. Cliquez sur la première page, Maj-cliquez sur la dernière pour sélectionner la plage, puis appuyez sur le bouton de duplication de la barre d\'outils. Chaque page sélectionnée est copiée juste après son original, et votre séquence actuelle reste intacte.',
    },
    {
      q: 'À quoi sert de dupliquer une page de PDF ?',
      a: 'Les usages courants : répéter une couverture ou une mention légale en tête d\'un lot fusionné, copier une page de signature ou d\'approbation pour chaque signataire, dupliquer une page de référence pour une annexe, ou conserver l\'original à côté d\'une version expurgée dans le même document.',
    },
    {
      q: 'La duplication change-t-elle la qualité du fichier ?',
      a: 'Non. La copie est un duplicata octet par octet de la page d\'origine et non un recalcul : la page dupliquée est visuellement et textuellement identique à sa source, jusqu\'aux polices intégrées et aux liens.',
    },
  ],
};

export default fr;
