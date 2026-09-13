import type { SiteDictionary } from './en';

const fr = {
  skipToContent: "Aller au contenu",
  siteName: "Rearrange PDF",
  ogImageAlt:
    "Rearrange PDF — outil en ligne gratuit pour réorganiser, fusionner et supprimer des pages PDF directement dans votre navigateur.",
  breadcrumbAriaLabel: "Fil d'Ariane",
  breadcrumbHome: "Accueil",

  langSwitcher: {
    ariaLabel: "Changer de langue",
  },

  nav: {
    ariaLabel: "Navigation principale",
    howItWorks: "Fonctionnement",
    features: "Fonctionnalités",
    privacy: "Confidentialité",
    faq: "FAQ",
    cta: "Réorganiser un PDF",
    toggleMenu: "Ouvrir le menu",
  },

  footer: {
    tagline:
      "La solution qui place la confidentialité en premier pour réorganiser, faire pivoter et organiser vos pages PDF. Tout se passe dans votre navigateur — vos fichiers ne sont jamais téléchargés.",
    colTool: "Outil",
    colCompany: "Entreprise",
    colLegal: "Mentions légales",
    colLanguage: "Langue",
    rearrangePages: "Réorganiser les pages PDF",
    howItWorks: "Fonctionnement",
    guide: "Guide pour organiser PDF",
    faq: "FAQ",
    about: "À propos",
    contact: "Contact",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    copyright: (year: number) => `© ${year} rearrangepdf.com. Tous droits réservés.`,
    noAds: "Pas de pub. Pas de traceurs. Pas de téléchargement.",
  },

  hero: {
    chip: "100 % privé — les fichiers ne quittent jamais votre navigateur",
    h1: "Réorganisez vos pages PDF, directement dans votre navigateur.",
    sub: "Glissez-déposez pour réordonner les pages, les faire pivoter, les dupliquer ou les supprimer — puis téléchargez instantanément. Gratuit, illimité et entièrement privé.",
    bullets: ["Sans inscription", "Sans limite de pages", "Sans filigrane", "Sans limite de taille"],
  },

  howItWorks: {
    heading: "Comment réorganiser les pages d'un PDF",
    sub: "Trois étapes, zéro téléchargement. Votre fichier est traité localement du début à la fin.",
    steps: [
      {
        title: "Ajoutez votre PDF",
        text: "Déposez un fichier n'importe où sur la page, cliquez pour parcourir, ou collez-en un. Ajoutez d'autres PDF à tout moment — ils fusionnent en un seul document.",
      },
      {
        title: "Organisez vos pages",
        text: "Faites glisser les vignettes dans l'ordre de votre choix. Faites pivoter, dupliquez, supprimez, ou sélectionnez plusieurs pages à la fois — avec une annulation complète si vous changez d'avis.",
      },
      {
        title: "Téléchargez instantanément",
        text: "Votre PDF est reconstitué directement sur votre appareil et se télécharge en quelques secondes. Pas de filigrane, pas d'inscription, pas de file d'attente.",
      },
    ],
  },

  features: {
    heading: "Tout ce dont vous avez besoin pour organiser un PDF",
    sub: "Les outils de réorganisation de pages que les gens adorent déjà — sans les téléchargements, les limites, les pubs ou les inscriptions qu'ils reprochent.",
    items: [
      {
        title: "Conçu pour la confidentialité",
        text: "Votre PDF est traité entièrement dans votre navigateur. Aucun téléchargement, aucun serveur, aucun pistage — ouvrez l'onglet réseau de votre navigateur et vérifiez vous-même.",
      },
      {
        title: "Aucune limite, jamais",
        text: "Pas de plafond de pages, pas de limite de taille de fichier, pas de quota quotidien. Réorganisez 10 pages ou 1 000 — le traitement local signifie qu'il n'y a rien à mesurer.",
      },
      {
        title: "Résultats instantanés",
        text: "Il n'y a pas d'aller-retour de téléchargement et d'attente. Les pages s'affichent et votre nouveau PDF est créé sur votre appareil, si bien que même les gros fichiers semblent immédiats.",
      },
      {
        title: "Annulez n'importe quelle action",
        text: "Historique complet avec annulation et rétablissement (Ctrl+Z / Ctrl+Shift+Z), sélection multiple et raccourcis clavier. Expérimentez librement — rien n'est permanent tant que vous n'avez pas téléchargé.",
      },
      {
        title: "Conçu aussi pour le mobile",
        text: "Grandes zones tactiles, appui long pour faire glisser, et barre d'actions pratique pour le pouce. Réorganiser des pages sur un téléphone ne devrait pas être une corvée.",
      },
      {
        title: "Qualité originale préservée",
        text: "Les pages sont copiées octet par octet depuis votre PDF d'origine. Polices, vecteurs, images et liens restent exactement tels qu'ils étaient — aucune recompression.",
      },
    ],
  },

  privacySection: {
    h2: "Votre PDF ne quitte jamais votre navigateur.",
    p1: "La plupart des outils PDF en ligne téléchargent votre fichier sur un serveur, le traitent là-bas, et vous demandez de faire confiance à leur politique de suppression. Nous avons inversé le modèle : la réorganisation des pages se fait <strong>entièrement sur votre appareil</strong>, avec le même moteur de rendu que votre navigateur utilise déjà.",
    p2: "Aucun serveur ne reçoit jamais votre document. Il n'y a rien à fuir, pirater ou assigner. Cela le rend sûr pour les contrats, dossiers médicaux, relevés bancaires et tout ce que vous ne confieriez pas à un inconnu.",
    readPromise: "Lire notre promesse de confidentialité",
    tryNow: "Essayez maintenant",
    bullets: [
      {
        title: "Zéro téléchargement",
        text: "Le contenu de votre fichier n'est jamais transmis nulle part.",
      },
      {
        title: "Pas de compte, pas de pub, pas de traceurs",
        text: "Nous n'avons pas besoin de votre e-mail, et nous ne vous suivons pas sur le web.",
      },
      {
        title: "Vérifiable, pas seulement une promesse",
        text: "Ouvrez DevTools → Réseau pendant que vous travaillez. Vous verrez zéro requête de fichier.",
      },
    ],
  },

  faq: {
    heading: "Foire aux questions",
    sub: "Tout ce que les gens veulent généralement savoir avant de réorganiser leur premier PDF.",
    items: [
      {
        q: "Comment réorganiser les pages d'un PDF ?",
        a: "Ouvrez l'outil en haut de cette page et ajoutez votre PDF, puis faites glisser n'importe quelle vignette vers sa nouvelle position — les pages environnantes se décalent automatiquement pour laisser place. Faites pivoter, dupliquez ou supprimez les pages si nécessaire, et cliquez sur Télécharger le PDF pour enregistrer le fichier réorganisé. L'ensemble du processus prend moins d'une minute et votre fichier ne quitte jamais votre appareil.",
      },
      {
        q: "Comment réorganiser les pages d'un PDF gratuitement ?",
        a: "Utilisez un outil gratuit basé sur le navigateur comme celui-ci : ajoutez votre PDF, faites glisser les vignettes dans l'ordre souhaité, et téléchargez le résultat. Pas d'inscription, pas de filigrane, pas de limite de pages et pas de niveau premium caché — l'outil reste gratuit car tout le traitement se fait sur votre propre appareil au lieu de serveurs payants.",
      },
      {
        q: "Comment réorganiser les pages d'un PDF ?",
        a: "Le moyen le plus simple est le glisser-déposer : votre PDF apparaît sous forme de grille de vignettes, et vous faites glisser chaque page à sa place. Comme l'éditeur fonctionne entièrement dans votre navigateur, il n'y a rien à installer et aucun fichier n'est téléchargé nulle part. Quand l'ordre vous convient, cliquez sur Télécharger le PDF pour enregistrer le nouveau fichier.",
      },
      {
        q: "Comment réorganiser les pages d'un PDF sur iPhone ?",
        a: "Ouvrez cette page dans Safari et touchez pour ajouter votre PDF — depuis l'app Fichiers, Mail ou toute autre application qui partage des PDF. Appuyez longuement sur une vignette pour la soulever, faites-la glisser à sa place, puis touchez Télécharger le PDF et enregistrez le résultat dans Fichiers ou partagez-le directement. Aucune installation d'app requise, et le même processus fonctionne sur iPad.",
      },
      {
        q: "Puis-je réorganiser les pages d'un PDF sur mobile ?",
        a: "Oui. L'éditeur est conçu pour le tactile : appuyez longuement sur une vignette pour la soulever, faites-la glisser vers un nouvel emplacement, et utilisez les grands boutons de rotation, de duplication et de suppression à portée de pouce. Cela fonctionne dans Safari sur iOS et Chrome sur Android, et le PDF terminé s'enregistre directement sur votre téléphone ou tablette.",
      },
      {
        q: "Comment remplacer une page PDF sans perdre la mise en forme ?",
        a: "Supprimez la page à remplacer, ajoutez le PDF contenant la nouvelle page, et faites-la glisser dans l'emplacement vide. Comme chaque page est copiée octet par octet plutôt que re-rendue, les polices, images, vecteurs, liens et métadonnées sont préservés exactement — rien n'est recompressé ou restylé.",
      },
      {
        q: "Comment échanger, ajouter, supprimer et faire pivoter des pages PDF ?",
        a: "Les quatre actions se trouvent dans la barre d'outils. Échangez deux pages en faisant glisser une vignette sur l'autre pour échanger leurs positions. Ajoutez des pages en insérant des pages blanches ou en fusionnant un autre PDF, supprimez des pages avec l'action de suppression, et faites pivoter les pages par étapes de 90° — individuellement ou par lot multi-sélection.",
      },
      {
        q: "Comment organiser des fichiers PDF ?",
        a: "Commencez par combiner les fichiers : ajoutez chaque PDF dont vous avez besoin et ils fusionnent en une seule grille de pages. Organisez ensuite au niveau de la page — regroupez les pages apparentées, déplacez des sections entières, supprimez ce dont vous n'avez plus besoin, et insérez des pages blanches comme séparateurs. Quand tout est à la bonne place, téléchargez un seul PDF bien rangé.",
      },
      {
        q: "Comment réorganiser les pages d'un PDF gratuitement ?",
        a: "Les outils PDF gratuits existent en deux types : les éditeurs en ligne qui téléchargent votre fichier sur leurs serveurs, et les outils côté client comme celui-ci qui traitent tout localement. Le second type est véritablement gratuit — pas d'essai, pas de filigrane, pas de quota quotidien — car c'est votre propre appareil qui fait le travail. Ajoutez un PDF, réorganisez les vignettes, et téléchargez sans frais.",
      },
      {
        q: "Comment puis-je réorganiser les pages d'un document PDF ?",
        a: "Chargez votre document dans l'éditeur, puis faites glisser les vignettes dans le nouvel ordre — ou sélectionnez plusieurs pages à la fois et déplacez-les ensemble. Chaque étape est annulable avec Ctrl+Z (Cmd+Z sur Mac), et vous pouvez restaurer l'ordre original en un clic, donc expérimenter est sans risque. Vous ne vous engagez qu'au téléchargement.",
      },
      {
        q: "Mes fichiers sont-ils téléchargés vers un serveur ?",
        a: "Non. Rearrange PDF fonctionne entièrement dans votre navigateur avec JavaScript. Votre PDF est lu, affiché et reconstitué sur votre propre appareil — aucun contenu de fichier n'est jamais transmis. Vous pouvez le vérifier vous-même : ouvrez les outils de développement de votre navigateur, surveillez l'onglet Réseau, et réorganisez quelques pages. Rien n'est envoyé.",
      },
      {
        q: "Puis-je fusionner et réorganiser plusieurs PDF à la fois ?",
        a: "Oui. Ajoutez autant de PDF que vous le souhaitez — déposez plusieurs fichiers à la fois, ou utilisez Ajouter des PDF pendant l'édition — et ils fusionnent en une grille de pages, avec des badges indiquant de quel fichier provient chaque page. Vous pouvez ensuite combiner et réorganiser les pages de chaque document comme vous le souhaitez avant de télécharger un seul PDF.",
      },
      {
        q: "Puis-je annuler une erreur ?",
        a: "Oui. Chaque action — réorganiser, faire pivoter, supprimer, dupliquer — est enregistrée dans l'historique. Appuyez sur Ctrl+Z (ou Cmd+Z sur Mac) pour annuler, Ctrl+Shift+Z pour rétablir, ou utilisez les boutons d'annulation dans la barre d'outils. Vous pouvez également restaurer l'ordre original des pages en un clic.",
      },
      {
        q: "Qu'en est-il des PDF protégés par mot de passe ?",
        a: "Les PDF protégés par un mot de passe propriétaire (restrictions de modification ou d'impression) fonctionnent normalement. Les PDF nécessitant un mot de passe pour s'ouvrir peuvent être réorganisés si vous entrez le mot de passe, mais l'exportation de fichiers entièrement chiffrés localement n'est pas encore prise en charge — vous verrez un avertissement clair si cela s'applique à votre fichier.",
      },
    ],
  },

  seoContent: {
    h2: "Réorganisez les pages PDF en ligne — gratuit et illimité",
    p1: "Rearrange PDF est un outil en ligne gratuit conçu pour une seule tâche : vous aider à réorganiser les pages PDF rapidement, en privé et sans friction. Que vous ayez besoin de corriger un scan à l'envers, de déplacer une annexe à la fin, ou de mettre de l'ordre dans un export chaotique, vous disposez d'un éditeur visuel complet avec des vignettes de pages en glisser-déposer — directement dans votre navigateur. Rien à installer, pas de compte à créer, pas de filigrane sur le résultat. Et comme tout s'exécute localement sur votre appareil, vous pouvez réorganiser les pages PDF en ligne gratuitement, sans les téléchargements, les files d'attente et les limites quotidiennes qu'imposent les autres outils.",
    p2: "L'éditeur se comporte comme une petite application de bureau. Chaque page de votre document apparaît sous forme de vignette que vous pouvez saisir et déposer à une nouvelle position, tandis que les autres pages se décalent automatiquement pour laisser place. Au-delà de la réorganisation, vous pouvez faire pivoter les scans de travers, dupliquer les pages qui se répètent, insérer des feuilles blanches et sélectionner plusieurs pages à la fois pour des actions par lot. Un historique d'annulation complet vous permet d'expérimenter librement — rien n'est définitif tant que vous n'avez pas téléchargé.",
    h3Merge: "Fusionnez et réorganisez les pages PDF en un seul endroit",
    pMerge: "Les vrais documents vivent rarement dans un seul fichier : le rapport est un PDF, l'annexe un autre, la nouvelle page de couverture un troisième. Rearrange PDF vous permet de fusionner et réorganiser les pages PDF sans basculer entre les applications. Déposez autant de fichiers que vous le souhaitez — tous à la fois, ou en ajoutant d'autres en cours de route — et chaque page apparaît dans une grille, étiquetée avec un badge coloré indiquant de quel document elle provient. De là, vous pouvez combiner et réorganiser les pages PDF de chaque source en un seul fichier continu : entrelacer les chapitres, déplacer la nouvelle couverture au début, ou glisser du matériel supplémentaire au milieu. Un clic produit un seul PDF proprement fusionné.",
    h3Delete: "Supprimez et réorganisez les pages PDF",
    pDelete: "Le nettoyage et l'organisation vont généralement de pair. Quand vous supprimez et réorganisez les pages PDF en une seule passe, vous évitez d'exporter deux fois — et la réexportation ailleurs est exactement là où la perte de qualité et les filigranes s'infiltrent. Sélectionnez n'importe quelle page et supprimez-la en un clic, ou touchez plusieurs vignettes et supprimez-les par lot. Les pages supprimées restent dans votre historique d'annulation, donc une coupe trop zélée n'est jamais permanente. Combiné aux actions de duplication, rotation et insertion de page blanche, cela fait de l'outil un éditeur de pages léger : supprimez ce dont vous n'avez pas besoin, organisez ce qui reste, exportez une seule fois.",
    h3Steps: "Comment réorganiser les pages PDF en trois étapes",
    pSteps: "Si vous vous demandez comment réorganiser les pages PDF sans lire un manuel, le flux de travail entier se fait en trois mouvements :",
    steps: [
      "<strong>Ajoutez votre PDF.</strong> Déposez le fichier sur l'outil en haut de cette page, cliquez pour parcourir, ou collez-le depuis le presse-papiers. Ajoutez d'autres fichiers si vous souhaitez les fusionner.",
      "<strong>Faites glisser les pages dans l'ordre.</strong> Déplacez n'importe quelle vignette vers une nouvelle position, puis faites pivoter, dupliquez ou supprimez les pages jusqu'à ce que la séquence soit correcte. La sélection multiple et l'annulation gardent les grandes éditions rapides.",
      "<strong>Téléchargez instantanément.</strong> Le PDF reconstitué est généré sur votre appareil et enregistré immédiatement — pas de filigrane, pas d'e-mail requis.",
    ],
    pStepsOutro: "C'est vraiment tout ce qu'il y a à faire — le moyen le plus rapide de réorganiser les pages PDF en ligne gratuitement, sans inscription ni téléchargement. Pour un guide plus approfondi, y compris l'inversion de l'ordre des pages et le remplacement de pages individuelles, consultez le <a href=\"/how-to-organize-pdf-pages\">guide complet pour organiser les pages PDF</a>.",
    h3Mobile: "Réorganisez les pages PDF sur iPhone, iPad et Android",
    pMobile: "Le mobile est là où beaucoup d'outils PDF en ligne échouent : boutons minuscules, zones de dépôt étroites, pop-ups étouffant la grille de pages. Cet éditeur est conçu pour le tactile, donc comprendre comment réorganiser les pages PDF sur iPhone ou iPad prend quelques secondes — appuyez longuement sur une vignette pour la soulever, faites-la glisser à sa place, relâchez. Les boutons de rotation, de duplication et de suppression sont grands et à portée du pouce, et taper sur les pages les sélectionne pour des actions par lot. Sur iOS, vous pouvez ouvrir un PDF depuis Fichiers ou Mail, le partager vers Safari, le réorganiser, et enregistrer le résultat directement. Le même flux fonctionne sur les téléphones et tablettes Android.",
    h3Best: "Quelles sont les meilleures façons de réorganiser les pages PDF ?",
    pBest: "Recherchez les meilleures façons de réorganiser les pages PDF et vous trouverez trois options réalistes. Voici comment elles se comparent pour le travail documentaire quotidien :",
    bestList: [
      "<strong>Un outil basé sur le navigateur — le mieux pour la plupart des gens.</strong> Il vous permet de réorganiser le PDF en ligne en quelques secondes : rien à installer, rien à mettre à jour, fonctionne de manière identique sur Windows, Mac, Linux et téléphones. L'inconvénient habituel est que votre fichier est téléchargé vers un serveur. Cet outil supprime cet inconvénient — les pages sont traitées sur votre appareil, jamais transmises.",
      "<strong>Logiciel de bureau — pour l'édition lourde et répétée.</strong> Les éditeurs comme Adobe Acrobat proposent des boîtes à outils PDF profondes, mais ils coûtent un abonnement, doivent être installés et maintenus à jour, et sont disproportionnés quand vous avez juste besoin d'échanger les pages 12 et 13.",
      "<strong>Apps mobiles — pratiques, avec des réserves.</strong> Les apps dédiées fonctionnent hors ligne, mais elles ajoutent des permissions de stockage, des pubs et des politiques de confidentialité à lire. Pour une correction ponctuelle, un outil de navigateur auquel vous faites déjà confiance est l'option la plus légère.",
    ],
    pBestOutro: "Pour la plupart des gens, la plupart du temps, la première option l'emporte : ouvrez l'<a href=\"/#rearrange\">outil en haut de cette page</a>, réorganisez le PDF sans téléchargements ni filigranes, et terminez en moins d'une minute.",
    h3Why: "Pourquoi gratuit ne signifie pas risqué",
    pWhy: "Les outils PDF en ligne gratuits méritent leur réputation honnêtement : beaucoup monétisent en extrayant les documents que vous téléchargez, ou en apposant des filigranes jusqu'à ce que vous payiez. Cet outil emprunte la route opposée. Votre PDF est lu, affiché et réécrit entièrement dans votre navigateur, donc aucune copie de votre fichier n'existe jamais sur un serveur — rien à fuir, rien à vendre, rien conservé après la fermeture de l'onglet. Vous n'avez pas à le croire sur parole : ouvrez les outils de développement de votre navigateur, surveillez l'onglet réseau pendant que vous travaillez, et vous verrez zéro trafic de fichiers. C'est ce qui le rend sûr pour les contrats, dossiers médicaux, relevés bancaires et tout ce qui est confidentiel. Lisez la <a href=\"/privacy\">promesse de confidentialité</a> complète pour les détails.",
  },

  cta: {
    h2: "Corrigez l'ordre de vos pages en quelques secondes.",
    sub: "Pas de téléchargement. Pas de limite. Pas d'inscription. Juste glisser, déposer et télécharger.",
    button: "Réorganiser un PDF maintenant",
  },

  errors: {
    tryAgain: "Réessayer",
    backToTool: "Retour à l'outil",
    notFound: {
      title: "Page introuvable — Rearrange PDF",
      description: "Cette page n'existe pas. Retournez réorganiser vos pages PDF.",
      heading: "Cette page a mal tourné.",
      message: "La page que vous recherchez n'existe pas — mais l'ordre des pages de votre PDF peut toujours être corrigé en quelques secondes.",
    },
    serverError: {
      title: "Une erreur s'est produite — Rearrange PDF",
      description: "Une erreur inattendue s'est produite. Rechargez pour réessayer, ou retournez à l'outil.",
      heading: "Quelque chose a rompu de notre côté.",
      message: "Une erreur inattendue s'est produite. Rechargez pour réessayer, ou retournez à l'outil — vos fichiers n'ont jamais quitté votre navigateur.",
    },
  },

  pages: {
    home: {
      meta: {
        title: "Réorganisez les Pages PDF en Ligne Gratuitement — Fusionnez, Réordonnez et Supprimez des Pages | Rearrange PDF",
        description: "Réorganisez les pages PDF en ligne gratuitement. Glissez-déposez pour réordonner, fusionner, combiner ou supprimer des pages — 100 % privé, pas de téléchargement, pas de limite, pas d'inscription, pas de filigrane.",
        keywords: [
          "réorganiser pdf",
          "réorganiser pages pdf",
          "réorganiser pdf gratuitement",
          "réorganiser pdf en ligne",
          "réorganiser pdf en ligne gratuitement",
          "réorganiser pdf gratuit",
          "fusionner et réorganiser pdf",
          "combiner et réorganiser pdf",
          "supprimer et réorganiser pages pdf",
          "comment réorganiser les pages d'un pdf",
          "comment réorganiser les pages d'un pdf en ligne gratuitement",
          "comment réorganiser les pages d'un pdf sur iphone",
          "quelles sont les meilleures façons de réorganiser les pages d'un pdf",
          "changer l'ordre des pages d'un pdf",
        ],
      },
      jsonLd: {
        webApplication: {
          name: "Rearrange PDF",
          alternateName: "Réorganiser les Pages PDF",
          description: "Outil en ligne gratuit pour réorganiser, réordonner, faire pivoter, dupliquer et supprimer des pages PDF entièrement dans votre navigateur. Pas de téléchargement, pas de limite, pas d'inscription.",
          featureList: [
            "Réorganisation de pages par glisser-déposer",
            "Rotation, duplication et suppression de pages",
            "Fusion de plusieurs PDF et réorganisation du document combiné",
            "Ajout de pages blanches",
            "Sélection multiple avec actions par lot",
            "Historique d'annulation et de rétablissement",
            "Raccourcis clavier",
            "Aperçu des pages",
            "Traitement 100 % côté client — les fichiers ne quittent jamais le navigateur",
          ],
        },
        howTo: {
          name: "Comment réorganiser les pages d'un PDF",
          description: "Réorganisez les pages de n'importe quel PDF en trois étapes, entièrement dans votre navigateur sans téléchargement.",
          steps: [
            {
              name: "Ajoutez votre PDF",
              text: "Déposez un fichier PDF sur l'outil, cliquez pour parcourir, ou collez-en un. Vous pouvez ajouter plusieurs PDF à la fois pour les fusionner.",
            },
            {
              name: "Organisez vos pages",
              text: "Faites glisser les vignettes de pages dans l'ordre souhaité. Faites pivoter, dupliquez ou supprimez les pages selon les besoins — tout peut être annulé.",
            },
            {
              name: "Téléchargez instantanément",
              text: "Cliquez sur Télécharger le PDF. Votre fichier réorganisé est reconstruit sur votre appareil et enregistré sans filigrane.",
            },
          ],
        },
      },
    },

    howto: {
      meta: {
        title: "Comment Organiser les Pages PDF en Ligne Gratuitement (Sans Téléchargement) — Guide Étape par Étape",
        description: "Apprenez à réorganiser, réordonner et organiser les pages PDF dans n'importe quel navigateur — gratuitement et sans téléchargement. Couvre le bureau et le mobile, la fusion de fichiers, l'inversion de l'ordre, le remplacement de pages et plus encore.",
      },
      breadcrumb: "Comment organiser les pages PDF",
      h1: "Comment organiser les pages PDF en ligne gratuitement",
      intro: "Vous avez scanné votre document à l'envers ? L'annexe se trouve avant l'introduction ? Voici le moyen le plus rapide de corriger l'ordre des pages de n'importe quel PDF — sans le télécharger sur le serveur de personne, sans créer de compte, et sans tomber sur un mur d'« essai gratuit ».",
      quickH2: "La réponse rapide",
      quickSteps: [
        '<a href="/#rearrange">Ouvrez l\'outil</a> et déposez votre PDF dessus.',
        "Faites glisser les vignettes de pages dans l'ordre souhaité.",
        "Cliquez sur <strong>Télécharger le PDF</strong> — terminé, pas de filigrane.",
      ],
      detailedH2: "Étape par étape : réorganiser les pages en détail",
      step1H: "Étape 1 — Ajoutez votre PDF",
      step1P: "Faites glisser le fichier depuis votre bureau ou gestionnaire de fichiers directement sur la carte de téléchargement, ou cliquez dessus pour parcourir. Vous pouvez également copier un PDF et le coller avec <strong>Ctrl+V</strong> (⌘V sur Mac). Vous voulez d'abord combiner des documents ? Déposez plusieurs PDF à la fois — leurs pages fusionnent en une seule grille, chaque fichier marqué de sa propre couleur, afin que vous puissiez ensuite entrelacer les pages de tous.",
      step2H: "Étape 2 — Faites glisser les pages dans l'ordre",
      step2P1: "Chaque page s'affiche sous forme de vignette. Saisissez-en une et faites-la glisser où elle doit aller — les autres s'écartent au passage. Sur un téléphone ou une tablette, appuyez brièvement sur une page pour la soulever, puis faites-la glisser.",
      step2P2: "Survoler une page révèle de petits boutons pour <strong> faire pivoter </strong> (corriger les scans de travers), <strong>dupliquer</strong>, <strong>aperçu</strong> en taille réelle, ou <strong>supprimer</strong>. Cliquez sur les pages pour en sélectionner plusieurs à la fois — ou <strong>Ctrl+A</strong> pour tout sélectionner — puis faites-les pivoter ou supprimez-les en un seul lot depuis la barre d'outils qui apparaît.",
      step3H: "Étape 3 — Téléchargez votre PDF organisé",
      step3P: "Cliquez sur <strong>Télécharger le PDF</strong>. Le fichier est reconstruit sur votre appareil — les pages originales exactes, juste dans l'ordre choisi — et enregistré directement dans votre dossier de téléchargements. Pas de filigrane, pas d'e-mail requis, pas de file d'attente.",
      tricksH2: "Astuces utiles à connaître",
      tricks: [
        "<strong>Rien n'est permanent.</strong> Chaque action est annulable avec Ctrl+Z, restaurable avec Ctrl+Shift+Z. Expérimentez librement — le bouton « restaurer l'ordre original » en un clic remet tout le document dans son état de départ.",
        "<strong>Inversez un document entier</strong> avec le bouton d'inversion d'ordre dans la barre d'outils — pratique pour les scans faits à l'envers, aucun glisser-déposer requis.",
        "<strong>Remplacez une page :</strong> supprimez la page obsolète, cliquez sur « Ajouter des PDF » pour importer le remplacement, puis faites-la glisser à sa position.",
        "<strong>Insérez une page blanche</strong> n'importe où — utile pour des notes ou des séparateurs d'impression — avec le bouton « + » dans la barre d'outils.",
        "<strong>Ne gardez que ce dont vous avez besoin :</strong> sélectionnez les pages que vous voulez garder, inversez rien — supprimez simplement le reste, et téléchargez le document découpé.",
        "<strong>Vérifiez avant de vous engager :</strong> ouvrez n'importe quelle page en taille réelle avec le bouton d'aperçu et feuilletez le document avec les touches fléchées avant de télécharger.",
      ],
      mobileH2: "Réorganiser les pages PDF sur mobile",
      mobileP: "L'éditeur est conçu pour le tactile : les vignettes sont grandes, les boutons d'action sont à portée du pouce, et le glisser-déposer fonctionne avec un appui long. Touchez les pages pour les sélectionner en vue d'une rotation ou suppression par lot. Sur iOS ou Android, vous pouvez ouvrir un PDF depuis votre app Fichiers ou Drive, le partager vers le navigateur, et le réorganiser sur place.",
      localH2: "Pourquoi la réorganisation en local compte",
      localP: "La plupart des organisateurs PDF « gratuits » téléchargent votre fichier vers un serveur de traitement, puis promettent de le supprimer plus tard. C'est bien jusqu'à ce que ça ne le soit plus — les contrats, dossiers médicaux et relevés bancaires méritent mieux. Cet outil fait tout le travail à l'intérieur de l'onglet de votre navigateur : votre PDF est lu en mémoire, affiché, et réécrit sans qu'un seul octet ne quitte votre appareil. Vous n'avez pas à nous croire sur parole — ouvrez les outils de développement de votre navigateur, surveillez l'onglet réseau, et réorganisez à votre guise.",
      ctaH2: "Prêt à corriger l'ordre de vos pages ?",
      ctaP: "Gratuit, illimité, sans inscription — et votre fichier ne quitte jamais le navigateur.",
      ctaButton: "Réorganiser un PDF maintenant",
      faqOutro: "Vous cherchez d'autres réponses ? Consultez la <a href=\"/#faq\">FAQ complète sur la page d'accueil</a>.",
      jsonLd: {
        howTo: {
          name: "Comment organiser les pages PDF en ligne gratuitement",
          description: "Un guide étape par étape pour réorganiser les pages PDF dans votre navigateur sans télécharger le fichier nulle part.",
          steps: [
            {
              name: "Ouvrez l'outil et ajoutez votre PDF",
              text: "Allez sur rearrangepdf.com et déposez votre PDF sur l'outil, cliquez sur « Sélectionner un fichier PDF », ou collez le fichier avec Ctrl+V.",
            },
            {
              name: "Faites glisser les pages dans le nouvel ordre",
              text: "Faites glisser n'importe quelle vignette de page vers une nouvelle position. Utilisez les boutons au survol ou la barre d'outils de sélection pour faire pivoter, dupliquer ou supprimer les pages.",
            },
            {
              name: "Téléchargez le PDF organisé",
              text: "Cliquez sur « Télécharger le PDF » — le fichier est reconstruit sur votre appareil et enregistré immédiatement, sans filigrane.",
            },
          ],
        },
      },
    },

    about: {
      meta: {
        title: "À propos — Rearrange PDF",
        description: "Pourquoi nous avons créé un organisateur de pages PDF qui ne télécharge jamais vos fichiers, comment il fonctionne en coulisses, et comment nous contacter.",
      },
      breadcrumb: "À propos",
      h1: "Un outil, bien fait.",
      p1: "Réorganiser les pages d'un PDF est une petite tâche. Vous avez scanné un contrat à l'envers, ou le résumé d'un rapport s'est retrouvé à la fin, et vous voulez juste que ce soit corrigé. Pourtant, la plupart des outils pour cette tâche simple demandent beaucoup en retour : votre fichier est téléchargé vers un serveur que vous ne connaissez pas, vous atteignez une limite quotidienne après deux documents, et il y a généralement une invitation de mise à niveau qui attend.",
      p2: "Nous avons créé Rearrange PDF parce qu'aucune de ces choses n'est nécessaire. La réorganisation de pages n'a pas besoin d'un serveur — un navigateur moderne dispose de tout ce qu'il faut pour lire, afficher et reconstruire un PDF. Donc tout ce que ce site propose, c'est : une seule page, une zone de dépôt, et une grille de vignettes que vous pouvez faire glisser. Pas de téléchargements, pas de comptes, pas de pubs, pas de limites.",
      howItWorksH2: "Comment ça marche",
      howItWorksP: "Sous le capot, l'outil utilise deux bibliothèques open source qui s'exécutent entièrement dans votre navigateur : <strong>PDF.js</strong> rend chaque page sous forme de vignette, et <strong>pdf-lib</strong> assemble votre nouveau document en copiant les pages originales — octet par octet, donc la mise en forme, les polices et la qualité sont préservées exactement. Quand vous cliquez sur télécharger, le PDF terminé est créé directement dans l'onglet et remis à la boîte de dialogue d'enregistrement de votre navigateur.",
      getInTouchH2: "Contactez-nous",
      getInTouchP: "Vous avez trouvé un PDF qui ne fonctionne pas ? Vous avez une idée pour l'outil ? Nous lisons tout — <a href=\"/contact\">contactez-nous</a> à <a href=\"mailto:kaizen3242@gmail.com\">kaizen3242@gmail.com</a>.",
      ctaH2: "Essayez avec votre propre fichier",
      ctaP: "C'est gratuit, illimité — et rien ne quitte jamais votre navigateur.",
      ctaButton: "Réorganiser un PDF",
    },

    contact: {
      meta: {
        title: "Contact — Rearrange PDF",
        description: "Contactez l'équipe derrière Rearrange PDF. Signalez un fichier qui ne fonctionne pas, suggérer une fonctionnalité, ou posez une question sur l'outil de réorganisation de pages PDF basé sur le navigateur.",
      },
      breadcrumb: "Contact",
      h1: "Contactez-nous",
      intro: "Vous avez trouvé un PDF qui ne s'ouvre pas ? Vous avez une idée qui améliorerait l'outil ? Nous lisons chaque message et apprécions vraiment les retours.",
      emailH2: "Envoyez-nous un e-mail",
      emailP: "Le moyen le plus rapide de nous atteindre est par e-mail. Nous sommes une petite équipe, donc veuillez prévoir quelques jours pour une réponse.",
      beforeH2: "Avant d'écrire",
      beforeP: "Quelques précisions nous aident à vous aider plus rapidement :",
      beforeItems: [
        "<strong>Dites-nous quel fichier a posé problème.</strong> Si un PDF ne se charge pas ou ne s'exporte pas, décrivez le type de document (scanné, formulaire, chiffré, très volumineux) plutôt que d'envoyer le fichier.",
        "<strong>Nous ne pouvons pas voir vos fichiers.</strong> L'outil s'exécute entièrement dans votre navigateur, donc vos PDF ne nous atteignent jamais. Veuillez ne pas envoyer de documents sensibles — une description suffit.",
        "<strong>Incluez votre navigateur et votre appareil</strong> (par exemple, « Safari sur iPhone ») si vous signalez un problème — cela nous aide à le reproduire.",
      ],
      answersH2: "Vous pourriez trouver la réponse ici même",
      helpLinks: [
        {
          title: "Lisez la FAQ",
          body: "Réponses rapides sur les téléchargements, la taille des fichiers, la qualité des pages et la confidentialité.",
        },
        {
          title: "Ouvrez le guide",
          body: "Instructions étape par étape pour réorganiser, faire pivoter et supprimer des pages.",
        },
        {
          title: "Consultez notre politique de confidentialité",
          body: "Exactement ce que l'outil fait — et ne fait pas — avec vos fichiers.",
        },
      ],
      dataH2: "Concernant vos données",
      dataP: "Comme nous ne collectons pas de données personnelles, il n'y a généralement rien pour nous de rechercher en votre nom — mais si vous avez une question sur la confidentialité, nous sommes heureux d'y répondre. Consultez notre <a href=\"/privacy\">politique de confidentialité</a> et nos <a href=\"/terms\">conditions d'utilisation</a> pour tous les détails.",
      ctaH2: "Besoin de corriger un PDF maintenant ?",
      ctaP: "L'outil est gratuit, illimité — et rien ne quitte jamais votre navigateur.",
      ctaButton: "Réorganiser un PDF",
      jsonLd: {
        contactPage: {
          name: "Contact Rearrange PDF",
          description: "Coordonnées de Rearrange PDF, l'outil basé sur le navigateur pour réorganiser et organiser les pages PDF sans téléchargement.",
        },
      },
    },

    privacy: {
      meta: {
        title: "Politique de Confidentialité — Rearrange PDF",
        description: "Notre promesse de confidentialité : vos PDF ne quittent jamais votre navigateur, nous ne diffusons pas de pubs et n'utilisons pas de traceurs, et nous ne collectons pas de données personnelles. Lisez la politique complète.",
      },
      breadcrumb: "Politique de confidentialité",
      h1: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : septembre 2026",
      shortH2: "La version courte",
      shortItems: [
        "Vos fichiers PDF ne quittent jamais votre appareil. Tout le traitement se fait dans votre navigateur.",
        "Nous n'avons pas de compte utilisateur et ne collectons aucune donnée personnelle.",
        "Nous ne diffusons pas de pubs et n'intégrons aucun tracker tiers.",
        "La seule mesure que nous utilisons est analytique agrégée sans cookie (voir ci-dessous).",
      ],
      sections: [
        {
          title: "1. Comment fonctionne l'outil",
          text: "Rearrange PDF est une application côté client. Quand vous ouvrez un PDF ici, le fichier est lu directement par votre navigateur en utilisant les API JavaScript disponibles sur cette page. Les vignettes sont rendues et votre document modifié est reconstruit entièrement sur votre appareil. Aucun contenu de fichier n'est transmis à nous ni à aucun tiers — il n'y a pas de serveur de téléchargement pour l'envoyer.",
        },
        {
          title: "2. Ce que nous ne collectons jamais",
          bullets: [
            "Le contenu, les noms ou les métadonnées de vos fichiers PDF",
            "Toute information de compte — l'outil ne nécessite pas d'inscription",
            "Les cookies publicitaires ou de pistage inter-sites de quelque nature que ce soit",
          ],
        },
        {
          title: "3. Ce qui est collecté",
          subsections: [
            {
              title: "Analytique sans cookie",
              text: "Nous utilisons Cloudflare Web Analytics pour comprendre l'utilisation agrégée du site (par exemple, combien de personnes visitent l'outil et depuis quel pays). Ce service n'utilise pas de cookies et n'identifie pas les visiteurs individuels. Il ne vous suit pas sur d'autres sites web.",
            },
            {
              title: "Journaux serveur standard",
              text: "Comme tout site web, notre hébergeur (Cloudflare) conserve des journaux techniques de courte durée des requêtes effectuées pour charger le site lui-même — des éléments comme l'adresse IP, le type de navigateur et les horodatages. Ces journaux ne contiennent jamais vos documents (qui ne sont jamais téléchargés) et existent uniquement pour maintenir le site sécurisé et opérationnel.",
            },
          ],
        },
        {
          title: "4. Vérifiez vous-même",
          text: "Vous n'avez pas à faire confiance à cette page. Ouvrez les outils de développement de votre navigateur (F12), basculez vers l'onglet Réseau, et utilisez l'outil : téléchargez un PDF, faites glisser les pages, téléchargez le résultat. Vous verrez qu'aucune requête ne transporte votre fichier.",
        },
        {
          title: "5. Vos droits",
          text: "Parce que nous ne traitons pas de données personnelles au-delà des statistiques anonymes agrégées décrites ci-dessus, il n'y a généralement pas de données personnelles vous concernant auxquelles nous pourrions accéder, corriger ou effacer. Si vous pensez le contraire et souhaitez nous contacter, voir ci-dessous.",
        },
        {
          title: "6. Modifications de cette politique",
          text: "Si nous modifions un jour le fonctionnement du site d'une manière qui affecte la confidentialité, nous mettrons à jour cette page. L'outil restera côté client — c'est tout l'intérêt du site.",
        },
        {
          title: "7. Contact",
          text: 'Questions sur la confidentialité ? Envoyer un e-mail à <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> ou consultez notre <a href="/contact">page de contact</a>.',
        },
      ],
    },

    terms: {
      meta: {
        title: "Conditions d'Utilisation — Rearrange PDF",
        description: "Les conditions qui s'appliquent lorsque vous utilisez rearrangepdf.com pour réorganiser les pages PDF dans votre navigateur.",
      },
      breadcrumb: "Conditions d'utilisation",
      h1: "Conditions d'utilisation",
      lastUpdated: "Dernière mise à jour : septembre 2026",
      sections: [
        {
          title: "1. Le service",
          text: "Rearrange PDF (rearrangepdf.com) est un outil gratuit basé sur le navigateur qui vous permet de réorganiser, faire pivoter, dupliquer, supprimer et organiser les pages de fichiers PDF. Tout le traitement a lieu localement dans votre navigateur web ; vos fichiers ne sont pas téléchargés vers nous.",
        },
        {
          title: "2. Acceptation",
          text: "En utilisant le site, vous acceptez ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le service.",
        },
        {
          title: "3. Votre contenu",
          text: "Vous conservez tous les droits sur les documents sur lesquels vous travaillez. Comme les fichiers sont traités sur votre propre appareil, nous ne les recevons, ne les stockons ni ne les traitons jamais. Vous êtes responsable de détenir les droits sur tout document que vous ouvrez dans l'outil et de respecter la loi applicable.",
        },
        {
          title: "4. Aucune garantie",
          text: "Le service est fourni « tel quel », gratuitement, sans garanties d'aucune sorte. Nous travaillons dur pour le garder précis et fiable — le contenu des pages est copié octet par octet depuis votre fichier original — mais nous ne pouvons pas garantir une disponibilité continue ou une adéquation à un usage particulier. Conservez des sauvegardes de vos documents importants.",
        },
        {
          title: "5. Limitation de responsabilité",
          text: "Dans la mesure maximale permise par la loi, nous ne sommes pas responsables des dommages résultant de l'utilisation ou de l'incapacité d'utiliser le service.",
        },
        {
          title: "6. Modifications",
          text: "Nous pouvons mettre à jour le service ou ces conditions à tout moment. L'utilisation continue après les modifications signifie que vous acceptez les conditions mises à jour. La version actuelle est toujours disponible sur cette page.",
        },
        {
          title: "7. Contact",
          text: 'Questions sur ces conditions ? Envoyer un e-mail à <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> ou consultez notre <a href="/contact">page de contact</a>.',
        },
      ],
    },
  },
} satisfies SiteDictionary;

export default fr;
