import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Changer la taille de la page PDF en ligne gratuitement',
    description:
      'Modifiez gratuitement le format du papier des pages PDF. Déplacez le contenu vers A4, Letter ou A5, portrait ou paysage — appliqué dans votre navigateur',
  },
  breadcrumb: 'Redimensionner PDF',
  h1: 'Redimensionnez vos pages PDF',
  intro:
    'Un document configuré pour Letter qui doit être imprimé sur A4, ou une présentation paysage qui doit devenir portrait. Changez le papier et l\'orientation une fois, pour chaque page, et le contenu bouge avec lui.',
  benefits: [
    {
      title: 'Formats de papier standards',
      text:
        'A4, Letter et A5, dans les deux orientations, plus la possibilité de conserver la taille actuelle et de basculer uniquement entre portrait et paysage.',
    },
    {
      title: 'Chaque page à la fois',
      text:
        'Les documents de tailles mixtes (une page Letter agrafée dans un rapport A4) sont uniformes, ce qui est généralement la raison du redimensionnement en premier lieu.',
    },
    {
      title: 'Le contenu reste net',
      text:
        'Les pages sont déplacées vers la nouvelle feuille en tant que vecteurs, de sorte que votre texte reste sélectionnable et net quelle que soit sa taille. Rien n\'est transformé en image.',
    },
  ],
  howTo: {
    heading: 'Comment redimensionner les pages PDF',
    sub: 'Trois étapes, appliquées sur votre appareil.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text:
          'Déposez le document sur l\'outil ci-dessus. La taille actuelle de la page est affichée afin que vous puissiez voir ce que vous modifiez.',
      },
      {
        title: 'Choisissez la nouvelle taille',
        text:
          'Choisissez A4, Letter ou A5, ou conservez la taille actuelle. Choisissez ensuite le portrait ou le paysage – ou laissez l\'orientation telle qu\'elle est, ce qui permet à chaque page de rester orientée comme elle le fait déjà. Laissez « Ajuster le contenu à l\'échelle » activé et votre contenu est redimensionné et centré sur la nouvelle feuille.',
      },
      {
        title: 'Téléchargez le PDF redimensionné',
        text:
          'Cliquez sur Redimensionner les pages. La copie redimensionnée est enregistrée dans vos téléchargements et votre original reste intact.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment modifier la taille de la page d\'un PDF ?',
      a:
        'Ajoutez le PDF ci-dessus, choisissez le format de papier et l\'orientation souhaitée, puis cliquez sur Redimensionner les pages. Chaque page est redimensionnée et la copie est téléchargée.',
    },
    {
      q: 'Mon contenu sera-t-il adapté pour s\'adapter ?',
      a:
        'Oui, par défaut. Le contenu est redimensionné pour s\'adapter à la nouvelle page et centré, en gardant ses proportions afin que rien ne soit étiré. Désactivez cette option et la page change de taille tandis que le contenu reste exactement là où il était, ce qui coupe tout ce qui ne rentre plus.',
    },
    {
      q: 'Les liens survivent-ils au redimensionnement ?',
      a:
        'C’est le cas lorsque vous redimensionnez uniquement la zone de page. Lorsque le contenu est adapté, chaque page est redessinée comme un objet unique et les liens de ce document ne sont pas conservés. Si le document contient des liens qui vous intéressent, redimensionnez-le en désactivant la mise à l\'échelle.',
    },
    {
      q: 'Quelle est la différence entre le redimensionnement et le recadrage ?',
      a:
        'Le redimensionnement modifie la taille du papier sur lequel la page est placée. Le recadrage supprime les bords de la page visible. Faire une page A4 au lieu de Letter revient à redimensionner ; couper une bordure sur une numérisation est un recadrage.',
    },
    {
      q: 'Puis-je créer un seul paysage de page ?',
      a:
        'Cette version applique une taille et une orientation uniques à chaque page, ce qui permet de conserver l\'uniformité du document. Pour une seule page, divisez le document, redimensionnez cette page et fusionnez-la.',
    },
    {
      q: 'Mon PDF est-il téléchargé ?',
      a:
        'Non. Le redimensionnement est appliqué dans l’onglet de votre navigateur et rien n’est transmis à aucun serveur.',
    },
  ],
};

export default fr;