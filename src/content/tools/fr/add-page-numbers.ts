import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Ajouter des numéros de page à un PDF en ligne — Gratuit',
    description:
      'Ajoutez gratuitement des numéros de page aux pages PDF. Choisissez le format, la position et le numéro de départ — appliqués sur votre appareil, non',
  },
  breadcrumb: 'Ajouter des numéros de page',
  h1: 'Ajoutez des numéros de page à votre PDF',
  intro:
    'Numéroter un document à la main est fastidieux et il est facile de se tromper une fois les pages déplacées. Ajoutez les chiffres une fois et ils restent corrects : définissez un format tel que "Page 3 sur 12", choisissez où ils vont et téléchargez.',
  benefits: [
    {
      title: 'Un format que vous contrôlez',
      text:
        'Utilisez {n} pour la page actuelle et {total} pour le nombre de pages, donc "Page {n} sur {total}", "{n} / {total}" ou simplement "{n}" fonctionnent tous. Les chiffres sont du texte, pas une superposition d\'images.',
    },
    {
      title: 'Numéro à partir de n\'importe quel point de départ',
      text:
        'Si la page 1 est une couverture et que le corps doit commencer à 1 sur la deuxième feuille, définissez le numéro de départ et il s\'aligne. Utile pour combiner des chapitres en un seul document.',
    },
    {
      title: 'Des postes qui se lisent correctement',
      text:
        'En bas au centre pour un rapport formel, en bas à droite pour un manuel, en haut à gauche si cela correspond à votre modèle existant. Six ancres, plus une taille que vous pouvez adapter au document.',
    },
  ],
  howTo: {
    heading: 'Comment ajouter des numéros de page à un PDF',
    sub: 'Trois étapes, sur votre propre appareil.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text:
          'Déposez le document sur l\'outil ci-dessus ou cliquez pour parcourir. Le nombre de pages apparaît afin que vous connaissiez la plage que vous numérotez.',
      },
      {
        title: 'Choisissez le format et la position',
        text:
          'Définissez le format des nombres, l\'emplacement des nombres, leur taille et la page à partir de laquelle commencer à compter. Un exemple en direct est affiché dans le champ de format.',
      },
      {
        title: 'Téléchargez le PDF numéroté',
        text:
          'Cliquez sur Ajouter des numéros de page et la copie numérotée est enregistrée dans vos téléchargements. Votre fichier d\'origine est inchangé.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment ajouter des numéros de page à un PDF ?',
      a:
        'Ajoutez le PDF ci-dessus, choisissez un format et une position, puis cliquez sur Ajouter des numéros de page. Chaque page est numérotée et la copie est téléchargée.',
    },
    {
      q: 'Puis-je commencer à numéroter à partir d’un nombre autre que 1 ?',
      a:
        'Oui. Définissez le numéro de départ et la première page que vous téléchargez obtient cette valeur. C\'est un moyen simple de numéroter plusieurs documents en une seule séquence continue.',
    },
    {
      q: 'Les numéros de page seront-ils du texte sélectionnable ?',
      a:
        'Oui. Ils sont intégrés sous forme de texte réel, ce qui permet de les sélectionner et de les rechercher, et ils ne sont pas flous une fois imprimés.',
    },
    {
      q: 'Puis-je numéroter seulement certaines pages ?',
      a:
        'Cette version numérote chaque page. Pour numéroter de manière sélective, divisez d\'abord le document et appliquez la numérotation aux parties qui en ont besoin.',
    },
    {
      q: 'Mon PDF est-il téléchargé ?',
      a:
        'Non. La numérotation s\'effectue entièrement dans l\'onglet de votre navigateur. Rien n\'est transmis, donc un rapport non publié reste inédit.',
    },
  ],
};

export default fr;