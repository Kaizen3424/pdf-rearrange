import type { ToolContent } from '../types';

const fr: ToolContent = {
  meta: {
    title: 'Fusionner PDF en ligne gratuit — Combinez vos fichiers',
    description:
      'Fusionnez plusieurs PDF dans l\'ordre voulu. 100 % privé : aucun téléchargement, tout reste dans votre navigateur. Sans inscription ni filigrane.',
  },
  breadcrumb: 'Fusionner des PDF',
  h1: 'Fusionner des fichiers PDF en un seul document',
  intro:
    'Réunissez autant de PDF que vous voulez dans un seul fichier, exactement dans l\'ordre qui vous convient. Déposez-les tous d\'un coup ou ajoutez-en au fil du travail, puis faites glisser les pages à leur place et téléchargez un document bien rangé — sans rien envoyer à un serveur.',
  benefits: [
    {
      title: 'Fusionnez dans l\'ordre voulu',
      text: 'Chargez d\'abord tous les fichiers, puis placez les pages dans la séquence voulue. Entrelacez les chapitres de documents différents, mettez une couverture en tête, ajoutez une annexe à la fin : l\'ordre vous appartient entièrement.',
    },
    {
      title: 'Sans perte, octet par octet',
      text: 'Chaque page est copiée telle quelle depuis votre fichier d\'origine plutôt que recalculée. Polices, graphiques vectoriels, images et liens ressortent donc exactement comme ils sont entrés.',
    },
    {
      title: 'Aucun téléchargement, jamais',
      text: 'La fusion se joue dans l\'onglet de votre navigateur. Vos documents ne sont jamais transmis, si bien que contrats, factures et dossiers médicaux restent sur votre appareil.',
    },
  ],
  howTo: {
    heading: 'Comment fusionner des fichiers PDF',
    sub: 'Trois étapes, et tout se passe sur votre propre appareil.',
    steps: [
      {
        title: 'Ajoutez vos PDF',
        text: 'Déposez un ou plusieurs fichiers PDF sur l\'outil ci-dessus, ou cliquez pour parcourir votre ordinateur. Vous pouvez aussi coller un fichier avec Ctrl+V. Toutes les pages de tous les fichiers arrivent dans une seule grille, colorées selon leur origine.',
      },
      {
        title: 'Définissez l\'ordre',
        text: 'Faites glisser les vignettes pour les arranger à votre guise. Les pages issues de fichiers différents s\'entrelacent librement : rien n\'empêche de réunir le chapitre 1 d\'un document avec le chapitre 2 d\'un autre.',
      },
      {
        title: 'Téléchargez le résultat',
        text: 'Cliquez sur Télécharger le PDF. Le document fusionné est reconstitué sur votre appareil et enregistré directement dans vos téléchargements — pas de filigrane, pas de file d\'attente.',
      },
    ],
  },
  faq: [
    {
      q: 'Comment fusionner des PDF gratuitement ?',
      a: 'Ouvrez l\'outil ci-dessus, ajoutez au moins deux PDF, faites glisser les vignettes dans l\'ordre souhaité, puis cliquez sur Télécharger le PDF. Pas d\'inscription, pas de filigrane, pas de quota quotidien : l\'outil est gratuit parce que c\'est votre appareil qui fait le travail, pas un serveur payant.',
    },
    {
      q: 'Peut-on fusionner des PDF sans les envoyer à un serveur ?',
      a: 'Oui, et c\'est la seule façon dont cet outil fonctionne. Vos fichiers sont lus, combinés et réécrits entièrement dans votre navigateur : aucune copie de votre document n\'atteint un serveur. Vous pouvez le vérifier vous-même — ouvrez les outils de développement de votre navigateur, surveillez l\'onglet Réseau et fusionnez quelques fichiers. Rien n\'est transmis.',
    },
    {
      q: 'Y a-t-il une limite au nombre de PDF que je peux fusionner ?',
      a: 'Non. Ni le nombre de fichiers ni celui des pages n\'est plafonné, puisque rien n\'est téléchargé et qu\'aucun serveur ne compte votre utilisation. La seule vraie limite, c\'est la mémoire de votre appareil : un document très volumineux consommera davantage de RAM pendant l\'assemblage.',
    },
    {
      q: 'La fusion dégrade-t-elle la qualité de mon PDF ?',
      a: 'Non. Les pages sont copiées octet par octet depuis les originaux au lieu d\'être recalculées ou recompressées. Le texte reste net, les vecteurs restent vecteurs, et les polices comme les liens sont préservés à l\'identique.',
    },
  ],
};

export default fr;
