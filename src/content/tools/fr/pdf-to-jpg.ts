import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Convertir PDF en JPG gratuit – chaque page en une image',
    description:
      'Convertissez gratuitement les pages PDF en images JPG, dans un seul ZIP. Choisissez 72, 150 ou 300 DPI et la qualité dont vous avez besoin — rendu sur votre',
  },
  breadcrumb: 'PDF à JPG',
  h1: 'Convertir les pages PDF en images JPG',
  intro:
    'Vous avez besoin d\'une page PDF sous forme de photo - pour insérer une diapositive, la télécharger dans un endroit qui rejette les PDF ou la partager dans une discussion. Choisissez votre résolution, convertissez-la et chaque page revient sous la forme d\'un JPG dans un seul ZIP.',
  benefits: [
    {
      title: 'Choisissez la résolution dont vous avez besoin',
      text:
        '72 DPI pour un aperçu rapide à l\'écran, 150 pour les documents et les e-mails, 300 pour l\'impression. L\'outil vous montre la taille exacte des pixels avant de rendre quoi que ce soit, il n\'y a donc pas de surprises.',
    },
    {
      title: 'Un ZIP, pas vingt téléchargements',
      text:
        'Chaque page est convertie et regroupée dans une seule archive. Les navigateurs bloquent les téléchargements automatiques répétés, donc un seul fichier est à la fois l’option pratique et celle qui fonctionne réellement.',
    },
    {
      title: 'Rendu là où se trouve déjà votre fichier',
      text:
        'Votre PDF est ouvert et dessiné dans votre navigateur. Rien n\'est envoyé nulle part, ce qui compte lorsqu\'il s\'agit d\'un contrat ou d\'un dossier médical.',
    },
  ],
  howTo: {
    heading: 'Comment convertir PDF en JPG',
    sub: 'Trois étapes, et le PDF ne quitte jamais votre appareil.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text:
          'Déposez un fichier sur l\'outil ci-dessus ou cliquez pour parcourir. Le nombre de pages apparaît immédiatement afin que vous sachiez avec quoi vous travaillez.',
      },
      {
        title: 'Choisissez la résolution et la qualité',
        text:
          'Choisissez 72, 150 ou 300 DPI. Pour JPG, vous pouvez également choisir un fichier plus petit ou une qualité maximale : une qualité supérieure signifie un ZIP plus grand, il vaut donc la peine de faire correspondre l\'endroit où l\'image sera utilisée.',
      },
      {
        title: 'Téléchargez le ZIP',
        text:
          'Cliquez sur Convertir en images. Chaque page est rendue et enregistrée sous les formats page-1.jpg, page-2.jpg et ainsi de suite, compressée et enregistrée dans vos téléchargements.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment convertir une page PDF en image ?',
      a:
        'Ajoutez le PDF ci-dessus, choisissez une résolution, puis cliquez sur Convertir en images. Chaque page est rendue sous forme de JPG et livrée ensemble dans une seule archive ZIP.',
    },
    {
      q: 'Mon PDF est-il téléchargé quelque part ?',
      a:
        'Non. Le PDF est ouvert et rendu dans l\'onglet de votre navigateur en utilisant le même moteur que votre navigateur utilise déjà pour afficher les PDF. Aucune copie n\'est transmise. Vous pouvez vérifier avec vos outils de développement que l\'onglet Réseau est ouvert.',
    },
    {
      q: 'Quelle résolution dois-je choisir ?',
      a:
        'Utilisez 72 DPI lorsque l\'image sera uniquement visualisée à l\'écran — elle est petite et rapide. Utilisez 150 DPI pour les documents partagés par e-mail. Utilisez 300 DPI lorsque l\'image doit être imprimée, car il s\'agit de la résolution d\'impression standard.',
    },
    {
      q: 'La conversion vers JPG réduira-t-elle la qualité ?',
      a:
        'JPG est un format avec perte, donc une certaine qualité est échangée contre la taille du fichier — c\'est pourquoi le sélecteur de qualité est là. La conversion à un niveau DPI plus élevé préserve plus de détails qu\'un niveau faible, et le texte reste lisible à 150 DPI ou plus.',
    },
    {
      q: 'Puis-je convertir seulement certaines pages ?',
      a:
        'Cette version convertit chaque page, ce dont la plupart des gens ont besoin, et conserve la sortie dans une archive prévisible. Si vous n\'avez besoin que de quelques pages, recadrez d\'abord le document, puis convertissez-le.',
    },
  ],
};

export default fr;