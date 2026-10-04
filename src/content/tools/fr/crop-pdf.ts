import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Rogner les pages PDF gratuitement – couper les bords',
    description:
      'Recadrez les pages PDF gratuitement. Coupez la même marge sur chaque page ou définissez chaque bord séparément - appliqué dans votre navigateur, non',
  },
  breadcrumb: 'Recadrer PDF',
  h1: 'Recadrez les bords de vos pages PDF',
  intro:
    'Les documents numérisés arrivent avec le plateau du scanner visible autour de la page, et les diapositives exportées vers PDF comportent souvent des marges que personne n\'a demandées. Coupez une quantité fixe de chaque bord et le contenu remplit à nouveau la page.',
  benefits: [
    {
      title: 'Un recadrage sur chaque page',
      text:
        'Définissez les quatre marges une fois et chaque page est recadrée de manière identique – le bon comportement pour une numérisation ou un jeu exporté, où chaque page présente le même problème.',
    },
    {
      title: 'Les bords restent nets',
      text:
        'Le recadrage modifie la zone de page, pas le contenu. Le texte n\'est ni restitué ni mis à l\'échelle, le résultat recadré est donc aussi net que l\'original.',
    },
    {
      title: 'Commentaires en direct en points',
      text:
        'Chaque bord affiche sa propre mesure, donc une marge de 36 pts et une marge de 12 pts sont des choix visiblement différents avant que quoi que ce soit ne soit appliqué.',
    },
  ],
  howTo: {
    heading: 'Comment recadrer un PDF',
    sub: 'Trois étapes, appliquées sur votre appareil.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text:
          'Déposez le document sur l\'outil ci-dessus ou cliquez pour parcourir. La taille actuelle de la page est affichée afin que vos marges aient un contexte.',
      },
      {
        title: 'Définir les quatre marges',
        text:
          'Faites glisser chaque bord pour couper ce montant depuis le haut, la droite, le bas et la gauche. Des valeurs égales sur les quatre côtés sont le cas courant pour les bordures de numérisation.',
      },
      {
        title: 'Téléchargez le PDF recadré',
        text:
          'Cliquez sur Recadrer les pages. La copie recadrée est enregistrée dans vos téléchargements ; le fichier original est intact.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment recadrer un PDF ?',
      a:
        'Ajoutez votre PDF, définissez la quantité à couper sur chaque bord, puis cliquez sur Recadrer les pages. Chaque page est recadrée avec les mêmes marges et le résultat est téléchargé.',
    },
    {
      q: 'Le recadrage supprime-t-il le contenu en dehors de la boîte ?',
      a:
        'Non, et cela vaut la peine de le savoir. Le recadrage modifie la partie de la page affichée – la signification standard et non destructive d’un recadrage PDF. Une visionneuse affiche uniquement la zone recadrée, mais le contenu sous-jacent existe toujours dans le fichier.',
    },
    {
      q: 'Que sont les points ?',
      a:
        'Un point équivaut à 1/72 de pouce, l\'unité dans laquelle les tailles de page PDF sont mesurées. À titre indicatif, 36 pt correspond à un demi-pouce et 12 pt correspond à une bordure étroite – à peu près la bordure d\'un lit de scanner.',
    },
    {
      q: 'Puis-je recadrer une seule page ?',
      a:
        'Cette version recadre chaque page avec les mêmes marges, ce dont a besoin une numérisation ou un diaporama. Pour une seule page, divisez d’abord le document, recadrez cette page et fusionnez-la.',
    },
    {
      q: 'Mon PDF est-il téléchargé ?',
      a: 'Non. Le recadrage est appliqué dans l’onglet de votre navigateur et rien n’est transmis.',
    },
  ],
};

export default fr;