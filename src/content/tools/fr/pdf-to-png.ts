import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Convertir PDF en PNG en ligne gratuitement — Sans perte',
    description:
      'Convertissez gratuitement les pages PDF en images PNG en un seul ZIP. Arrière-plan transparent et sans perte en option, rendu sur votre appareil',
  },
  breadcrumb: 'PDF à PNG',
  h1: 'Convertir les pages PDF en images PNG',
  intro:
    'PNG conserve chaque pixel exactement tel que rendu, ce qui en fait le bon choix lorsque l\'image doit être modifiée, composée ou ne doit pas présenter d\'artefacts de compression. Convertissez n\'importe quel PDF et supprimez chaque page en tant que PNG.',
  benefits: [
    {
      title: 'Sans perte, à chaque fois',
      text:
        'PNG se compresse sans supprimer les informations, de sorte que les bords du texte restent nets et les couleurs plates restent plates. Rien n’est lissé comme le fait JPG.',
    },
    {
      title: 'Fond transparent si vous en avez besoin',
      text:
        'Les pages PDF peignent normalement un arrière-plan opaque, mais vous pouvez exporter avec transparence à la place, ce qui est utile lorsque les images doivent être superposées sur autre chose.',
    },
    {
      title: 'Toutes les pages dans une seule archive',
      text:
        'Convertissez un long document en une seule fois. Chaque page devient page-1.png, page-2.png et ainsi de suite, regroupées dans un seul ZIP.',
    },
  ],
  howTo: {
    heading: 'Comment convertir PDF en PNG',
    sub: 'Trois étapes, avec le PDF rendu localement.',
    steps: [
      {
        title: 'Ajoutez votre PDF',
        text:
          'Déposez un fichier sur l’outil ci-dessus ou cliquez pour parcourir. Vous verrez le nombre de pages dès qu\'il aura été lu.',
      },
      {
        title: 'Choisissez une résolution',
        text:
          '72, 150 ou 300 DPI. Les fichiers PNG sont plus volumineux que les fichiers JPG car rien n\'est supprimé. Une résolution inférieure est donc un moyen raisonnable de garder l\'archive gérable.',
      },
      {
        title: 'Téléchargez le ZIP',
        text:
          'Cliquez sur Convertir en images et vos pages PNG arrivent ensemble dans une seule archive.',
      },
    ],
  },
  faq: [
    {
      q: 'Dois-je utiliser PNG ou JPG ?',
      a:
        'Utilisez PNG lorsque l’image doit être modifiée, superposée ou doit rester nette – elle est sans perte. Utilisez JPG lorsque vous partagez ou téléchargez et que la taille du fichier compte plus que la fidélité parfaite. Convertir la même page dans les deux sens est un moyen rapide de voir la différence.',
    },
    {
      q: 'Comment convertir un PDF en PNG ?',
      a:
        'Ajoutez votre PDF ci-dessus, choisissez une résolution, puis cliquez sur Convertir en images. Chaque page est rendue sous la forme d\'un PNG et livrée dans un ZIP.',
    },
    {
      q: 'Le PDF est-il téléchargé ?',
      a:
        'Non. Le rendu s\'effectue dans l\'onglet de votre navigateur. Rien n\'est transmis à aucun serveur, ce que vous pouvez confirmer dans l\'onglet Réseau de vos outils de développement.',
    },
    {
      q: 'Pourquoi les fichiers PNG sont-ils si volumineux ?',
      a:
        'Parce que PNG conserve tous les détails plutôt que de s\'en rapprocher, et une haute résolution signifie beaucoup de pixels. Passer de 300 DPI à 150 DPI réduit le nombre de pixels d\'environ quatre fois sans perte de méthode.',
    },
    {
      q: 'Puis-je obtenir un fond transparent ?',
      a:
        'Oui — dans le paramètre d\'arrière-plan, choisissez Transparent. Notez qu\'une page PDF dessine généralement son propre arrière-plan blanc, vous ne verrez donc la transparence que là où la page laisse véritablement l\'arrière-plan non peint.',
    },
  ],
};

export default fr;