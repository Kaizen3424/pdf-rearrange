import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Supprimer des pages PDF en ligne — Gratuit, sans envoi',
    description:
      'Supprimez des pages d\'un PDF en ligne, gratuitement. Sélectionnez celles à enlever, téléchargez le reste — sans rien transmettre à un serveur.',
  },
  breadcrumb: 'Supprimer des pages PDF',
  h1: 'Supprimer des pages d\'un PDF',
  intro:
    'Retirez les pages dont vous n\'avez pas besoin et laissez tout le reste exactement tel quel. Sélectionnez une page ou supprimez toute une plage d\'un coup, vérifiez le résultat en vignettes avant de valider, et téléchargez le document allégé — votre fichier ne quitte jamais le navigateur.',
  benefits: [
    {
      title: 'Une page ou cinquante',
      text: 'Survolez une vignette pour la supprimer seule, ou sélectionnez plusieurs pages et retirez-les par lot. Ctrl+A tout sélectionne : ramener un document aux seules pages utiles prend quelques secondes.',
    },
    {
      title: 'Rien n\'est jamais perdu',
      text: 'Les suppressions rejoignent l\'historique d\'annulation, donc une coupure trop zélée n\'est jamais définitive. Ctrl+Z ramène les pages, et un clic restaure le document entier dans son ordre d\'origine.',
    },
    {
      title: 'Qualité inchangée',
      text: 'Les pages qui survivent sont copiées telles qu\'elles : polices, images, vecteurs et liens ne sont ni recalculés ni recompressés. Supprimer une page ne coûte donc rien en fidélité.',
    },
  ],
  howTo: {
    heading: 'Comment supprimer des pages d\'un PDF',
    sub: 'Retirez les pages indésirables en trois étapes.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text: 'Déposez le fichier sur l\'outil ci-dessus, cliquez pour parcourir, ou collez-le avec Ctrl+V. Chaque page apparaît en vignette, visible d\'un coup d\'œil.',
      },
      {
        title: 'Sélectionnez ce qui doit partir',
        text: 'Cliquez sur l\'icône de la corbeille sur la vignette d\'une page pour supprimer cette page seule. Pour en retirer plusieurs, cliquez sur la première puis Maj-cliquez sur la dernière : toute la plage est sélectionnée et part en un lot.',
      },
      {
        title: 'Téléchargez le PDF allégé',
        text: 'Vérifiez l\'ordre restant, puis cliquez sur Télécharger le PDF. Le document raccourci est reconstitué sur votre appareil et enregistré aussitôt.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment supprimer des pages d\'un PDF ?',
      a: 'Ajoutez votre PDF à l\'outil ci-dessus, survolez une vignette de page et cliquez sur son bouton de suppression. Pour retirer une plage : cliquez sur la première page, Maj-cliquez sur la dernière, puis appuyez sur Suppr ou utilisez le bouton de suppression par lot. Téléchargez le résultat et votre PDF est débarrassé de ces pages.',
    },
    {
      q: 'Peut-on supprimer des pages PDF sans envoyer le fichier ?',
      a: 'Oui. Le document est lu et réécrit entièrement dans votre navigateur, il n\'est donc jamais transmis à un serveur. Ouvrez les outils de développement, surveillez l\'onglet Réseau pendant vos suppressions, et vous ne verrez aucun trafic de fichier.',
    },
    {
      q: 'Peut-on annuler la suppression d\'une page ?',
      a: 'Chaque action est enregistrée. Ctrl+Z (Cmd+Z sur Mac) ramène les pages supprimées, Ctrl+Shift+Z rétablit, et le bouton d\'annulation de la barre d\'outils fait de même. Le bouton de réinitialisation restaure le document entier dans son ordre de pages d\'origine.',
    },
    {
      q: 'Et si je supprime trop de pages ?',
      a: 'Ne vous inquiétez pas : les suppressions sont annulables, rien n\'est définitif avant le téléchargement. Si vous avez déjà exporté, conservez le fichier d\'origine et supprimez les pages depuis cette copie.',
    },
  ],
};

export default fr;
