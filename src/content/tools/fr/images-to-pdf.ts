import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Images vers PDF — Combinez les fichiers JPG et PNG',
    description:
      'Combinez JPG, PNG et d’autres images en une seule PDF, dans n’importe quel ordre, entièrement dans votre navigateur. Pas de téléchargements, pas d\'inscription',
  },
  breadcrumb: 'Images vers PDF',
  h1: 'Combinez plusieurs images en une seule PDF',
  intro:
    'Une pile mélangée de reçus, de captures d’écran et de photos, voulant tous ne constituer qu’un seul document. Ajoutez chaque image, faites-les glisser dans l\'ordre dont vous avez besoin et téléchargez un seul PDF – assemblé sur votre appareil, sans rien télécharger.',
  benefits: [
    {
      title: 'Mélangez les formats librement',
      text:
        'Les images JPG et PNG peuvent être combinées dans le même document, de sorte qu\'un reçu photographié et une capture d\'écran numérique peuvent se retrouver dans un seul fichier sans rien convertir au préalable.',
    },
    {
      title: 'Faites glisser vers le bon ordre',
      text:
        'Chaque image est une page que vous pouvez déplacer. Faites-les glisser dans l\'ordre ou déplacez-les avec les boutons fléchés - utile lorsque l\'ordre est important et que la saisie des noms de fichiers dans une liste ne l\'est pas.',
    },
    {
      title: 'Mise en page par document',
      text:
        'Imprimez sur A4 ou Letter, ou coupez chaque page pour l\'adapter exactement à son image. Ajoutez une marge lorsque vous souhaitez un espace blanc cohérent et laissez l\'orientation suivre l\'image ou forcez-la dans un sens ou dans l\'autre.',
    },
  ],
  howTo: {
    heading: 'Comment combiner des images dans un PDF',
    sub: 'Trois étapes, sans téléchargement à aucun moment.',
    steps: [
      {
        title: 'Ajoutez vos images',
        text:
          'Déposez autant de fichiers JPG ou PNG que vous le souhaitez, ou cliquez pour parcourir. Vous pouvez également coller des images avec Ctrl+V et en ajouter d\'autres plus tard sans perdre ce que vous avez déjà chargé.',
      },
      {
        title: 'Commandez-les et configurez les pages',
        text:
          'Faites glisser les images dans la séquence souhaitée. Choisissez ensuite A4, Letter ou Ajuster à l\'image, choisissez une orientation et décidez si vous souhaitez une marge.',
      },
      {
        title: 'Téléchargez-en un PDF',
        text:
          'Cliquez sur Télécharger PDF et votre document combiné est enregistré dans vos téléchargements – reconstruit sur votre appareil, sans filigrane ajouté.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment combiner plusieurs images en une seule PDF ?',
      a:
        'Ajoutez toutes les images à l\'outil ci-dessus, faites-les glisser dans l\'ordre souhaité, puis cliquez sur Télécharger PDF. Vous obtenez un PDF contenant chaque image sur une page distincte.',
    },
    {
      q: 'Quels formats d\'images sont pris en charge ?',
      a:
        'JPG et PNG, y compris les PNG avec un fond transparent. Les images transparentes sont placées sur une page blanche et nette, puisque les pages PDF elles-mêmes ne sont pas transparentes.',
    },
    {
      q: 'Y a-t-il une limite au nombre d’images que je peux ajouter ?',
      a:
        'Pas de limite sur le nombre d\'images. Étant donné que rien n’est téléchargé, il n’y a pas de quota à atteindre côté serveur ; la limite pratique est la quantité de mémoire disponible sur votre appareil.',
    },
    {
      q: 'L’ordre des images est-il important ?',
      a:
        'Oui, et vous le contrôlez. Chaque image devient une page dans l\'ordre indiqué et vous pouvez la faire glisser pour la réorganiser ou utiliser les boutons fléchés. Téléchargez le fichier, changez d\'avis et commandez à nouveau : rien n\'est verrouillé.',
    },
    {
      q: 'Est-ce vraiment gratuit sans inscription ?',
      a:
        'Oui. Il n\'y a pas de compte, pas d\'essai et pas de filigrane. L\'outil est gratuit car votre appareil fait le travail plutôt qu\'un serveur payant.',
    },
  ],
};

export default fr;