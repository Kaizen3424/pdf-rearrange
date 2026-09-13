import type { SiteDictionary } from './en';

const de = {
  skipToContent: 'Zum Inhalt springen',
  siteName: 'Rearrange PDF',
  ogImageAlt:
    'Rearrange PDF — kostenloses Online-Tool zum Neuanordnen, Zusammenführen und Löschen von PDF-Seiten in Ihrem Browser.',
  breadcrumbAriaLabel: 'Brotkrumenleiste',
  breadcrumbHome: 'Startseite',

  langSwitcher: {
    ariaLabel: 'Sprache ändern',
  },

  nav: {
    ariaLabel: 'Hauptnavigation',
    howItWorks: 'So funktioniert es',
    features: 'Funktionen',
    privacy: 'Datenschutz',
    faq: 'FAQ',
    cta: 'PDF neu anordnen',
    toggleMenu: 'Menü öffnen/schließen',
  },

  footer: {
    tagline:
      'Datenschutz zuerst: PDF-Seiten neu anordnen, drehen und organisieren. Alles passiert in Ihrem Browser — Ihre Dateien werden nie hochgeladen.',
    colTool: 'Tool',
    colCompany: 'Unternehmen',
    colLegal: 'Rechtliches',
    colLanguage: 'Sprache',
    rearrangePages: 'PDF-Seiten neu anordnen',
    howItWorks: 'So funktioniert es',
    guide: 'PDFs organisieren',
    faq: 'FAQ',
    about: 'Über uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    copyright: (year: number) => `© ${year} rearrangepdf.com. Alle Rechte vorbehalten.`,
    noAds: 'Keine Werbung. Keine Tracker. Keine Uploads.',
  },

  hero: {
    chip: '100 % privat — Dateien verlassen niemals Ihren Browser',
    h1: 'PDF-Seiten direkt in Ihrem Browser neu anordnen.',
    sub: 'Ziehen und ablegen, um Seiten zu sortieren, drehen, duplizieren oder löschen — dann sofort herunterladen. Kostenlos, unbegrenzt und vollständig privat.',
    bullets: ['Keine Anmeldung', 'Keine Seitenlimits', 'Kein Wasserzeichen', 'Keine Dateigrößenbegrenzung'],
  },

  howItWorks: {
    heading: 'PDF-Seiten neu anordnen in drei Schritten',
    sub: 'Alles lokal, null Uploads. Ihre Datei wird von Anfang bis Ende lokal verarbeitet.',
    steps: [
      {
        title: 'PDF hinzufügen',
        text: 'Datei per Drag & Drop ablegen, zum Durchsuchen klicken oder einfügen. Weitere PDFs jederzeit hinzufügen — sie werden zu einem Dokument zusammengeführt.',
      },
      {
        title: 'Seiten anordnen',
        text: 'Miniaturansichten in beliebige Reihenfolge ziehen. Drehen, duplizieren, löschen oder mehrere Seiten gleichzeitig auswählen — mit vollständigem Rückgängig, falls Sie es sich anders überlegen.',
      },
      {
        title: 'Sofort herunterladen',
        text: 'Ihre PDF wird direkt auf Ihrem Gerät neu erstellt und in Sekunden heruntergeladen. Kein Wasserzeichen, keine Anmeldung, kein Warten in der Warteschlange.',
      },
    ],
  },

  features: {
    heading: 'Alles, was Sie brauchen, um eine PDF zu organisieren',
    sub: 'Die Seiten-Sortierwerkzeuge, die Benutzer bereits mögen — ohne die Uploads, Limits, Werbung oder Anmeldungen, die sie kritisieren.',
    items: [
      {
        title: 'Von Grund auf privat',
        text: 'Ihre PDF wird vollständig in Ihrem Browser verarbeitet. Keine Uploads, keine Server, kein Tracking — öffnen Sie den Netzwerk-Tab Ihres Browsers und überzeugen Sie sich selbst.',
      },
      {
        title: 'Ohne Limits, immer',
        text: 'Keine Seitenobergrenzen, keine Dateigrößenlimits, keine täglichen Kontingente. 10 oder 1.000 Seiten neu sortieren — lokale Verarbeitung bedeutet, es gibt nichts zu messen.',
      },
      {
        title: 'Sofortige Ergebnisse',
        text: 'Kein Upload-und-Warte-Hin-und-Her. Seiten werden gerendert und Ihre neue PDF auf Ihrem Gerät erstellt, sodurch auch große Dateien sofort wirken.',
      },
      {
        title: 'Alles rückgängig machen',
        text: 'Vollständiger Verlauf mit Rückgängig und Wiederholen (Strg+Z / Strg+Umschalt+Z), Mehrfachauswahl und Tastenkombinationen. Experimentieren Sie frei — nichts ist endgültig, bis Sie herunterladen.',
      },
      {
        title: 'Auch für Mobilgeräte gemacht',
        text: 'Große Tippflächen, Langzeitdrücken zum Ziehen und eine handfreundliche Aktionsleiste. Seiten auf dem Telefon neu anzuordnen, sollte keine lästige Pflicht sein.',
      },
      {
        title: 'Originalqualität erhalten',
        text: 'Seiten werden Byte für Byte aus Ihrer Original-PDF kopiert. Schriften, Vektoren, Bilder und Links bleiben genau wie sie waren — keine Neubelichtung.',
      },
    ],
  },

  privacySection: {
    h2: 'Ihre PDF verlässt niemals Ihren Browser.',
    p1: 'Die meisten Online-PDF-Tools laden Ihre Datei auf einen Server, verarbeiten sie dort und bitten Sie, deren Löschrichtlinie zu vertrauen. Wir haben das Modell umgedreht: das Neuanordnen von Seiten passiert <strong>ausschließlich auf Ihrem Gerät</strong>, mit derselben Rendering-Engine, die Ihr Browser bereits hat.',
    p2: 'Kein Server erhält je Ihr Dokument. Es gibt nichts zu leaken, zu kompromittieren oder vorzuladen. Das macht es sicher für Verträge, Krankenakten, Finanzberichte und alles andere, was Sie nicht einem Fremden anvertrauen würden.',
    readPromise: 'Lesen Sie unser Datenschutzversprechen',
    tryNow: 'Jetzt ausprobieren',
    bullets: [
      {
        title: 'Null Uploads',
        text: 'Ihre Dateiinhalte werden nirgendwo übertragen.',
      },
      {
        title: 'Keine Konten, keine Werbung, keine Tracker',
        text: 'Wir brauchen weder Ihre E-Mail noch verfolgen wir Sie durch das Web.',
      },
      {
        title: 'Überprüfbar, nicht nur ein Versprechen',
        text: 'Öffnen Sie DevTools → Netzwerk, während Sie arbeiten. Sie sehen null Dateianfragen.',
      },
    ],
  },

  faq: {
    heading: 'Häufig gestellte Fragen',
    sub: 'Alles, was Menschen normalerweise wissen möchten, bevor sie ihre erste PDF neu anordnen.',
    items: [
      {
        q: 'Wie kann ich Seiten in einer PDF neu anordnen?',
        a: 'Öffnen Sie das Tool oben auf dieser Seite und fügen Sie Ihre PDF hinzu, dann ziehen Sie eine Miniaturansicht an ihre neue Position — die umgebenden Seiten verschieben sich automatisch, um Platz zu schaffen. Drehen, duplizieren oder löschen Sie Seiten bei Bedarf und klicken Sie auf „PDF herunterladen", um die neu sortierte Datei zu speichern. Der gesamte Prozess dauert weniger als eine Minute und Ihre Datei verlässt niemals Ihr Gerät.',
      },
      {
        q: 'Wie kann ich Seiten in einer PDF kostenlos neu anordnen?',
        a: 'Verwenden Sie ein kostenloses, browserbasiertes Tool wie dieses: Fügen Sie Ihre PDF hinzu, ziehen Sie die Miniaturansichten in die gewünschte Reihenfolge und laden Sie das Ergebnis herunter. Es gibt keine Anmeldung, kein Wasserzeichen, kein Seitenlimit und keine versteckte Premium-Stufe — das Tool bleibt kostenlos, weil die gesamte Verarbeitung auf Ihrem eigenen Gerät stattfindet, anstatt auf bezahlten Servern.',
      },
      {
        q: 'Wie ordne ich PDF-Seiten neu an?',
        a: 'Der einfachste Weg ist Drag-and-Drop: Ihre PDF erscheint als Raster von Miniaturansichten, und Sie ziehen jede Seite dorthin, wo sie hingehört. Da der Editor vollständig in Ihrem Browser läuft, gibt es nichts zu installieren und keine Datei wird irgendwo hochgeladen. Wenn die Reihenfolge stimmt, klicken Sie auf „PDF herunterladen", um die neue Datei zu speichern.',
      },
      {
        q: 'Wie kann ich Seiten in einer PDF auf dem iPhone neu anordnen?',
        a: 'Öffnen Sie diese Seite in Safari und tippen Sie, um Ihre PDF hinzuzufügen — aus der Dateien-App, Mail oder einer anderen App, die PDFs teilt. Halten Sie eine Miniaturansicht kurz gedrückt, um sie anzuheben, ziehen Sie sie an die gewünschte Stelle und tippen Sie dann auf „PDF herunterladen" und speichern Sie das Ergebnis zurück in Dateien oder teilen Sie es direkt. Keine App-Installation erforderlich, und derselbe Ablauf funktioniert auf dem iPad.',
      },
      {
        q: 'Kann ich PDF-Seiten auf dem Handy neu anordnen?',
        a: 'Ja. Der Editor ist Touch-first aufgebaut: Halten Sie eine Miniaturansicht gedrückt, um sie anzuheben, ziehen Sie sie an eine neue Stelle und nutzen Sie die großen Dreh-, Duplizier- und Löschen-Schaltflächen in Reichweite. Es funktioniert in Safari unter iOS und Chrome unter Android, und die fertige PDF wird direkt auf Ihrem Telefon oder Tablet gespeichert.',
      },
      {
        q: 'Wie ersetze ich eine PDF-Seite, ohne die Formatierung zu verlieren?',
        a: 'Löschen Sie die Seite, die Sie ersetzen möchten, fügen Sie die PDF hinzu, die die neue Seite enthält, und ziehen Sie sie in den leeren Slot. Da jede Seite Byte für Byte kopiert statt neu gerendert wird, bleiben Schriften, Bilder, Vektoren, Links und Metadaten genau erhalten — nichts wird neu komprimiert oder umgestaltet.',
      },
      {
        q: 'Wie tausche, füge, entferne und drehe ich PDF-Seiten?',
        a: 'Alle vier Aktionen befinden sich in der Werkzeugleiste. Tauschen Sie zwei Seiten, indem Sie eine Miniaturansicht auf die andere ziehen, um ihre Positionen zu tauschen. Fügen Sie Seiten hinzu, indem Sie leere einfügen oder eine andere PDF zusammenführen, entfernen Sie Seiten mit der Löschen-Aktion und drehen Sie Seiten in 90°-Schritten — einzeln oder als Mehrfachauswahl.',
      },
      {
        q: 'Wie organisiere ich PDF-Dateien?',
        a: 'Beginnen Sie mit dem Kombinieren der Dateien: Fügen Sie jede benötigte PDF hinzu und sie werden zu einem einzelnen Seitennetz zusammengeführt. Organisieren Sie dann auf Seitenebene — gruppieren Sie verwandte Seiten, verschieben Sie ganze Abschnitte, löschen Sie, was Sie nicht mehr benötigen, und fügen Sie leere Seiten als Trenner ein. Wenn alles an der richtigen Stelle sitzt, laden Sie eine saubere PDF herunter.',
      },
      {
        q: 'Wie ordne ich PDF-Seiten kostenlos neu an?',
        a: 'Kostenlose PDF-Tools gibt es in zwei Arten: Online-Editoren, die Ihre Datei auf ihre Server hochladen, und clientseitige Tools wie dieses, die alles lokal verarbeiten. Die zweite Art ist wirklich kostenlos — keine Testversion, kein Wasserzeichen, kein tägliches Kontingent — weil Ihr eigenes Gerät die Arbeit erledigt. Fügen Sie eine PDF hinzu, ordnen Sie die Miniaturansichten neu und laden Sie kostenlos herunter.',
      },
      {
        q: 'Wie kann ich Seiten in einem PDF-Dokument neu anordnen?',
        a: 'Laden Sie Ihr Dokument in den Editor und ziehen Sie dann Miniaturansichten in die neue Reihenfolge — oder wählen Sie mehrere Seiten gleichzeitig aus und verschieben Sie sie gemeinsam. Jeder Schritt ist mit Strg+Z (Cmd+Z auf Mac) rückgängig machbar, und Sie können die ursprüngliche Reihenfolge mit einem Klick wiederherstellen, sodass Experimentieren risikofrei ist. Sie bestätigen erst, wenn Sie herunterladen.',
      },
      {
        q: 'Werden meine Dateien auf einen Server hochgeladen?',
        a: 'Nein. Rearrange PDF läuft vollständig in Ihrem Browser mit JavaScript. Ihre PDF wird auf Ihrem eigenen Gerät gelesen, angezeigt und neu erstellt — kein Dateiinhalt wird jemals übertragen. Sie können dies selbst überprüfen: Öffnen Sie die Entwicklertools Ihres Browsers, beobachten Sie den Netzwerk-Tab und ordnen Sie einige Seiten neu. Es wird nichts gesendet.',
      },
      {
        q: 'Kann ich mehrere PDFs gleichzeitig zusammenführen und neu anordnen?',
        a: 'Ja. Fügen Sie beliebig viele PDFs hinzu — ziehen Sie mehrere Dateien auf einmal herein oder verwenden Sie „PDFs hinzufügen" während der Bearbeitung — und sie werden zu einem Seitennetz zusammengeführt, mit Badges, die zeigen, aus welcher Datei jede Seite stammt. Sie können dann Seiten aus jedem Dokument nach Belieben kombinieren und neu anordnen, bevor Sie eine einzelne PDF herunterladen.',
      },
      {
        q: 'Kann ich einen Fehler rückgängig machen?',
        a: 'Ja. Jede Aktion — neu anordnen, drehen, löschen, duplizieren — wird im Verlauf aufgezeichnet. Drücken Sie Strg+Z (oder Cmd+Z auf Mac), um rückgängig zu machen, Strg+Umschalt+Z zum Wiederholen, oder nutzen Sie die Rückgängig-Schaltflächen in der Werkzeugleiste. Sie können die ursprüngliche Seitenreihenfolge auch mit einem Klick wiederherstellen.',
      },
      {
        q: 'Was ist mit passwortgeschützten PDFs?',
        a: 'PDFs, die mit einem Besitzerpasswort geschützt sind (Einschränkungen bei Bearbeitung oder Druck), funktionieren normal. PDFs, die ein Passwort zum Öffnen erfordern, können neu angeordnet werden, wenn Sie das Passwort eingeben, aber das Exportieren vollständig verschlüsselter Dateien lokal wird noch nicht unterstützt — Sie erhalten eine klare Warnung, wenn das für Ihre Datei zutrifft.',
      },
    ],
  },

  seoContent: {
    h2: 'PDF-Seiten online neu anordnen — kostenlos und unbegrenzt',
    p1: 'Rearrange PDF ist ein kostenloses Online-Tool für eine Aufgabe: Ihnen zu helfen, PDF-Seiten schnell, privat und ohne Reibung neu anzuordnen. Ob Sie einen verkehrt herum gescannten Vertrag korrigieren, einen Anhang ans Ende verschieben oder einen chaotischen Export in eine sinnvolle Reihenfolge bringen müssen — Sie erhalten einen vollständigen visuellen Editor mit Drag-and-Drop-Seitenminiaturansichten — direkt in Ihrem Browser. Nichts zu installieren, kein Konto zu erstellen, kein Wasserzeichen auf der Ausgabe. Und weil alles lokal auf Ihrem Gerät läuft, können Sie PDF-Seiten online neu anordnen, ohne von den Uploads, Warteschlangen und täglichen Limits anderer Tools belastet zu werden.',
    p2: 'Der Editor verhält sich wie eine kleine Desktop-Anwendung. Jede Seite Ihres Dokuments erscheint als Miniaturansicht, die Sie greifen und an eine neue Position ziehen können, während die verbleibenden Seiten automatisch Platz machen. Neben dem Neuordnen können Sie seitliche Scans drehen, sich wiederholende Seiten duplizieren, leere Blätter einfügen und mehrere Seiten gleichzeitig für Stapelaktionen auswählen. Ein vollständiger Rückgängig-Verlauf bedeutet, dass Sie frei experimentieren können — nichts ist endgültig, bis Sie herunterladen.',
    h3Merge: 'PDF-Seiten an einem Ort zusammenführen und neu anordnen',
    pMerge: 'Echte Dokumente leben selten in einer einzigen Datei: Der Bericht ist eine PDF, der Anhang eine andere, die neue Titelseite eine dritte. Rearrange PDF ermöglicht es Ihnen, PDF-Seiten zu zusammenführen und neu anzuordnen, ohne zwischen Apps zu wechseln. Laden Sie beliebig viele Dateien auf einmal hoch — oder fügen Sie mitten in der Bearbeitung weitere hinzu — und jede Seite landet in einem Raster, versehen mit einem farbigen Badge, das zeigt, aus welchem Dokument sie stammt. Von dort aus können Sie Seiten aus jeder Quelle zu einer einzigen zusammenhängenden Datei kombinieren und neu anordnen: Kapitel durchweben, die neue Titelseite nach vorne bringen oder zusätzliches Material in die Mitte einfügen. Ein Klick erzeugt eine sauber zusammengeführte PDF.',
    h3Delete: 'PDF-Seiten löschen und neu anordnen',
    pDelete: 'Bereinigung und Sortierung gehen normalerweise Hand in Hand. Wenn Sie PDF-Seiten im selben Durchgang löschen und neu anordnen, vermeiden Sie doppeltes Exportieren — und genau beim erneuten Exportieren elsewhere schleichen sich Qualitätsverlust und Wasserzeichen ein. Wählen Sie eine beliebige Seite und entfernen Sie sie mit einem Klick, oder tippen Sie auf mehrere Miniaturansichten und löschen Sie sie als Stapel. Gelöschte Seiten bleiben in Ihrem Rückgängig-Verlauf, sodass ein übermäßiges Löschen nie dauerhaft ist. In Kombination mit Duplizieren, Drehen und Leer-seite-einfügen macht dies das Tool zu einem leichtgewichtigen Seiten-Editor: Entfernen Sie, was Sie nicht benötigen, ordnen Sie, was übrig bleibt, exportieren Sie einmal.',
    h3Steps: 'PDF-Seiten in drei Schritten neu anordnen',
    pSteps: 'Wenn Sie sich fragen, wie Sie PDF-Seiten neu anordnen, ohne ein Handbuch zu lesen, ist der gesamte Arbeitsablauf drei Schritte:',
    steps: [
      '<strong>Fügen Sie Ihre PDF hinzu.</strong> Ziehen Sie die Datei auf das Tool oben auf dieser Seite, klicken Sie zum Durchsuchen oder fügen Sie sie aus der Zwischenablage ein. Fügen Sie weitere Dateien hinzu, wenn Sie sie zusammenführen möchten.',
      '<strong>Seiten in die richtige Reihenfolge bringen.</strong> Verschieben Sie eine Miniaturansicht an eine neue Position, dann drehen, duplizieren oder löschen Sie Seiten, bis die Sequenz stimmt. Mehrfachauswahl und Rückgängig machen große Bearbeitungen schnell.',
      '<strong>Sofort herunterladen.</strong> Die neu erstellte PDF wird auf Ihrem Gerät generiert und sofort gespeichert — kein Wasserzeichen, keine E-Mail erforderlich.',
    ],
    pStepsOutro: 'Das ist wirklich alles — der schnellste Weg, PDF-Seiten online kostenlos neu anzuordnen, ohne Anmeldung und Uploads. Eine ausführlichere Anleitung, einschließlich Umkehren der Seitenreihenfolge und Ersetzen einzelner Seiten, finden Sie im <a href="/how-to-organize-pdf-pages">vollständigen Leitfaden zum Organisieren von PDF-Seiten</a>.',
    h3Mobile: 'PDF-Seiten auf iPhone, iPad und Android neu anordnen',
    pMobile: 'Mobil ist dort, wo viele Online-PDF-Tools versagen: winzige Schaltflächen, defekte Drag-Ziele, Pop-ups, die das Seitennetz ersticken. Dieser Editor ist Touch-first aufgebaut, daher dauert das Neuanordnen von PDF-Seiten auf dem iPhone oder iPad nur Sekunden — halten Sie eine Miniaturansicht gedrückt, um sie anzuheben, ziehen Sie sie dorthin, wo sie hingehört, los. Die Schaltflächen zum Drehen, Duplizieren und Löschen sind groß und in Reichweite der Daumen, und durch Antippen von Seiten werden diese für Stapelaktionen ausgewählt. Unter iOS können Sie eine PDF aus Dateien oder Mail öffnen, sie an Safari weitergeben, neu anordnen und das Ergebnis direkt speichern. Derselbe Ablauf funktioniert auf Android-Telefonen und -Tablets.',
    h3Best: 'Was sind die besten Möglichkeiten, PDF-Seiten neu anzuordnen?',
    pBest: 'Suchen Sie nach den besten Möglichkeiten, PDF-Seiten neu anzuordnen, und Sie finden drei realistische Optionen. So schneiden sie für die täglichen Dokumentenarbeiten ab:',
    bestList: [
      '<strong>Ein browserbasiertes Tool — am besten für die meisten Menschen.</strong> Es ermöglicht Ihnen, PDF online in Sekunden neu anzuordnen: nichts zu installieren, nichts zu aktualisieren, funktioniert identisch auf Windows, Mac, Linux und Handys. Der übliche Nachteil ist, dass Ihre Datei auf einen Server hochgeladen wird. Dieses Tool entfernt diesen Nachteil — Seiten werden auf Ihrem Gerät verarbeitet, niemals übertragen.',
      '<strong>Desktop-Software — für schwere, wiederholte Bearbeitung.</strong> Editoren wie Adobe Acrobat bieten tiefgreifende PDF-Toolkits, aber sie kosten ein Abonnement, müssen installiert und aktuell gehalten werden und sind überdimensioniert, wenn Sie nur Seiten 12 und 13 tauschen müssen.',
      '<strong>Mobile Apps — bequem, mit Einschränkungen.</strong> Dedizierte Apps funktionieren offline, fügen aber Speicherberechtigungen, Werbung und Datenschutzrichtlinien zum Lesen hinzu. Für eine einmalige Korrektur ist ein Browser-Tool, dem Sie bereits vertrauen, die leichtere Option.',
    ],
    pBestOutro: 'Für die meisten Menschen, most of the time, gewinnt die erste Option: Öffnen Sie das <a href="/#rearrange">Tool oben auf dieser Seite</a>, ordnen Sie PDF kostenlos ohne Uploads und Wasserzeichen neu und sind in einer Minute fertig.',
    h3Why: 'Warum kostenlos nicht gleich riskant bedeutet',
    pWhy: 'Kostenlose Online-Tools verdienen ihren Ruf ehrlich: Viele monetarisieren, indem sie die Dokumente, die Sie hochladen, abbauen, oder indem sie Wasserzeichen stampfen, bis Sie bezahlen. Dieses Tool nimmt den umgekehrten Weg. Ihre PDF wird vollständig in Ihrem Browser gelesen, angezeigt und umgeschrieben, sodass keine Kopie Ihrer Datei jemals auf einem Server existiert — nichts zu leaken, nichts zu verkaufen, nichts, das nach dem Schließen des Tabs aufbewahrt wird. Sie müssen das nicht auf Treu und Glauben akzeptieren: Öffnen Sie die Entwicklertools Ihres Browsers, beobachten Sie den Netzwerk-Tab während Sie arbeiten, und Sie werden null Datenverkehr sehen. Das ist es, was es sicher für Verträge, Krankenakten, Finanzberichte und alles Vertrauliche macht. Lesen Sie die vollständige <a href="/privacy">Datenschutzgarantie</a> für Details.',
  },

  cta: {
    h2: 'Ihre Seitenordnung in Sekunden korrigieren.',
    sub: 'Keine Uploads. Keine Limits. Keine Anmeldung. Einfach ziehen, ablegen und herunterladen.',
    button: 'PDF jetzt neu anordnen',
  },

  errors: {
    tryAgain: 'Erneut versuchen',
    backToTool: 'Zurück zum Tool',
    notFound: {
      title: 'Seite nicht gefunden — Rearrange PDF',
      description: 'Diese Seite existiert nicht. Gehen Sie zurück, um Ihre PDF-Seiten neu anzuordnen.',
      heading: 'Diese Seite hat sich verirrt.',
      message: 'Die gesuchte Seite existiert nicht — aber die Seitenordnung Ihrer PDF kann trotzdem in Sekunden korrigiert werden.',
    },
    serverError: {
      title: 'Etwas ist schiefgelaufen — Rearrange PDF',
      description: 'Ein unerwarteter Fehler ist aufgetreten. Laden Sie neu, um es erneut zu versuchen, oder gehen Sie zurück zum Tool.',
      heading: 'Auf unserer Seite ist etwas kaputtgegangen.',
      message: 'Ein unerwarteter Fehler ist aufgetreten. Laden Sie neu, um es erneut zu versuchen, oder gehen Sie zurück zum Tool — Ihre Dateien haben Ihren Browser nie verlassen.',
    },
  },

  pages: {
    home: {
      meta: {
        title: 'PDF-Seiten online kostenlos neu anordnen — Seiten zusammenführen, sortieren & löschen | Rearrange PDF',
        description: 'PDF-Seiten online kostenlos neu anordnen. Ziehen und ablegen zum Sortieren, Zusammenführen, Kombinieren oder Löschen von Seiten — 100 % privat, keine Uploads, keine Limits, keine Anmeldung, kein Wasserzeichen.',
        keywords: [
          'pdf seiten neu anordnen',
          'pdf seiten sortieren',
          'pdf seiten neu anordnen kostenlos',
          'pdf seiten online neu anordnen',
          'pdf seiten online sortieren kostenlos',
          'pdf neu anordnen online',
          'pdf kostenlos neu anordnen',
          'pdf zusammenführen und neu anordnen',
          'pdf kombinieren und sortieren',
          'pdf seiten löschen und neu anordnen',
          'wie kann ich pdf seiten neu anordnen',
          'wie ordne ich pdf seiten online kostenlos an',
          'wie ordne ich pdf seiten auf dem iphone an',
          'beste möglichkeiten pdf seiten neu anzuordnen',
        ],
      },
      jsonLd: {
        webApplication: {
          name: 'Rearrange PDF',
          alternateName: 'PDF-Seiten neu anordnen',
          description: 'Kostenloses Online-Tool zum Neuanordnen, Sortieren, Drehen, Duplizieren und Löschen von PDF-Seiten vollständig in Ihrem Browser. Keine Uploads, keine Limits, keine Anmeldung.',
          featureList: [
            'Drag-and-Drop-Seitenneuanordnung',
            'Seiten drehen, duplizieren und löschen',
            'Mehrere PDFs zusammenführen und das kombinierte Dokument neu anordnen',
            'Leere Seiten hinzufügen',
            'Mehrfachauswahl mit Stapelaktionen',
            'Rückgängig- und Wiederholen-Verlauf',
            'Tastenkombinationen',
            'Seitenvorschau',
            '100 % clientseitige Verarbeitung — Dateien verlassen niemals den Browser',
          ],
        },
        howTo: {
          name: 'Wie man Seiten in einer PDF neu anordnet',
          description: 'Ordnen Sie die Seiten einer beliebigen PDF in drei Schritten neu, vollständig in Ihrem Browser ohne Uploads.',
          steps: [
            {
              name: 'PDF hinzufügen',
              text: 'PDF-Datei auf das Tool ziehen, zum Durchsuchen klicken oder einfügen. Sie können mehrere PDFs auf einmal hinzufügen, um sie zusammenzuführen.',
            },
            {
              name: 'Seiten anordnen',
              text: 'Seitenminiaturansichten in die gewünschte Reihenfolge ziehen. Seiten bei Bedarf drehen, duplizieren oder löschen — alles kann rückgängig gemacht werden.',
            },
            {
              name: 'Sofort herunterladen',
              text: 'Auf PDF herunterladen klicken. Ihre neu angeordnete Datei wird auf Ihrem Gerät erstellt und ohne Wasserzeichen gespeichert.',
            },
          ],
        },
      },
    },

    howto: {
      meta: {
        title: 'PDF-Seiten online kostenlos organisieren (ohne Uploads) — Schritt-für-Schritt-Anleitung',
        description: 'Erfahren Sie, wie Sie PDF-Seiten in jedem Browser neu anordnen, sortieren und organisieren können — kostenlos und ohne Uploads. Deckt Desktop und Mobilgeräte, Dateien zusammenführen, Reihenfolge umkehren, Seiten ersetzen und mehr ab.',
      },
      breadcrumb: 'PDF-Seiten organisieren',
      h1: 'PDF-Seiten online kostenlos organisieren',
      intro: 'Ihr Dokument verkehrt herum gescannt? Anhang vor der Einleitung? Hier ist der schnellste Weg, die Seitenordnung einer beliebigen PDF zu korrigieren — ohne sie auf jemandes Server hochzuladen, ein Konto zu erstellen oder eine „Kostenlose Testversion"-Wand zu treffen.',
      quickH2: 'Die schnelle Antwort',
      quickSteps: [
        '<a href="/#rearrange">Öffnen Sie das Tool</a> und legen Sie Ihre PDF darauf ab.',
        'Ziehen Sie die Seitenminiaturansichten in die gewünschte Reihenfolge.',
        'Klicken Sie auf <strong>PDF herunterladen</strong> — fertig, kein Wasserzeichen.',
      ],
      detailedH2: 'Schritt für Schritt: Seiten im Detail neu anordnen',
      step1H: 'Schritt 1 — PDF hinzufügen',
      step1P: 'Ziehen Sie die Datei von Ihrem Desktop oder Dateimanager direkt auf die Upload-Karte, oder klicken Sie darauf zum Durchsuchen. Sie können auch eine PDF kopieren und mit <strong>Strg+V</strong> (⌘V auf Mac) einfügen. Möchten Sie zuerst Dokumente kombinieren? Legen Sie mehrere PDFs auf einmal ab — ihre Seiten werden zu einem einzigen Raster zusammengeführt, jede Datei mit ihrer eigenen Farbe markiert, sodass Sie dann Seiten aus allen von ihnen durchweben können.',
      step2H: 'Schritt 2 — Seiten in die richtige Reihenfolge bringen',
      step2P1: 'Jede Seite wird als Miniaturansicht angezeigt. Greifen Sie eine und ziehen Sie sie dorthin, wo sie hingehört — die anderen machen Platz, während Sie ziehen. Auf einem Telefon oder Tablet halten Sie eine Seite kurz gedrückt, um sie anzuheben, und ziehen Sie sie dann.',
      step2P2: 'Über einer Seite erscheinen kleine Schaltflächen zum <strong>Drehen</strong> (seitliche Scans korrigieren), <strong>Duplizieren</strong>, <strong>Vollbildvorschau</strong> oder <strong>Löschen</strong>. Klicken Sie auf Seiten, um mehrere gleichzeitig auszuwählen — oder <strong>Strg+A</strong>, um alle auszuwählen — und drehen oder löschen Sie sie dann in einem Stapel aus der darauf erscheinenden Werkzeugleiste.',
      step3H: 'Schritt 3 — Ihre organisierte PDF herunterladen',
      step3P: 'Klicken Sie auf <strong>PDF herunterladen</strong>. Die Datei wird auf Ihrem Gerät neu erstellt — die genauen Originalseiten, nur in Ihrer gewählten Reihenfolge — und direkt in Ihren Download-Ordner gespeichert. Kein Wasserzeichen, keine E-Mail erforderlich, keine Warteschlange.',
      tricksH2: 'Nützliche Tricks, die Sie kennen sollten',
      tricks: [
        '<strong>Nichts ist endgültig.</strong> Jede Aktion ist mit Strg+Z rückgängig und mit Strg+Umschalt+Z wiederholbar. Experimentieren Sie frei — die One-Click-„Originalreihenfolge wiederherstellen"-Schaltfläche bringt das gesamte Dokument zurück in seinen Ausgangszustand.',
        '<strong>Ein ganzes Dokument umkehren</strong> mit der Umkehrschaltfläche in der Werkzeugleiste — praktisch für verkehrt herum gescannte Dokumente, kein Ziehen erforderlich.',
        '<strong>Eine Seite ersetzen:</strong> Löschen Sie die veraltete Seite, klicken Sie auf „PDFs hinzufügen", um die Ersatzseite einzubringen, und ziehen Sie sie dann an die richtige Position.',
        '<strong>Eine leere Seite einfügen</strong> — nützlich für Notizen oder Drucktrennseiten — mit der „+"-Schaltfläche in der Werkzeugleiste.',
        '<strong>Nur behalten, was Sie brauchen:</strong> Wählen Sie die Seiten aus, die Sie behalten möchten, kehren Sie die Auswahl nicht um — löschen Sie einfach die anderen und laden Sie das bereinigte Dokument herunter.',
        '<strong>Vor dem Bestätigen prüfen:</strong> Öffnen Sie eine beliebige Seite im Vollbildmodus mit der Vorschauschaltfläche und blättern Sie mit den Pfeiltasten durch das Dokument, bevor Sie herunterladen.',
      ],
      mobileH2: 'PDF-Seiten auf dem Handy neu anordnen',
      mobileP: 'Der Editor ist Touch-first konzipiert: Miniaturansichten sind groß, Aktionsschaltflächen befinden sich in Reichweite der Daumen und Ziehen funktioniert mit kurzem Drücken und Halten. Tippen Sie auf Seiten, um sie für Stapeldrehung oder -löschung auszuwählen. Auf iOS oder Android können Sie eine PDF aus Ihrer Dateien- oder Drive-App öffnen, sie an den Browser weitergeben und direkt dort neu anordnen.',
      localH2: 'Warum lokales Neuanordnen wichtig ist',
      localP: 'Die meisten „kostenlosen" PDF-Organisatoren laden Ihre Datei auf einen Verarbeitungsserver hoch und versprechen dann, sie später zu löschen. Das ist in Ordnung, bis es das nicht mehr ist — Verträge, Krankenakten und Finanzberichte verdienen etwas Besseres. Dieses Tool erledigt die gesamte Arbeit innerhalb Ihrer Browser-Registerkarte: Ihre PDF wird in den Speicher gelesen, angezeigt und wieder ausgegeben, ohne dass ein einziges Byte Ihr Gerät verlässt. Sie müssen uns nicht einfach glauben — öffnen Sie die Entwicklertools Ihres Browsers, beobachten Sie den Netzwerk-Tab und ordnen Sie nach Herzenslust um.',
      ctaH2: 'Bereit, Ihre Seitenordnung zu korrigieren?',
      ctaP: 'Kostenlos, unbegrenzt, keine Anmeldung — und Ihre Datei verlässt niemals den Browser.',
      ctaButton: 'PDF jetzt neu anordnen',
      faqOutro: 'Suchen Sie nach weiteren Antworten? Siehe das vollständige <a href="/#faq">FAQ auf der Startseite</a>.',
      jsonLd: {
        howTo: {
          name: 'PDF-Seiten online kostenlos organisieren',
          description: 'Eine Schritt-für-Schritt-Anleitung zum Neuanordnen von PDF-Seiten in Ihrem Browser, ohne die Datei irgendwo hochzuladen.',
          steps: [
            {
              name: 'Tool öffnen und PDF hinzufügen',
              text: 'Gehen Sie zu rearrangepdf.com und legen Sie Ihre PDF auf das Tool, klicken Sie auf „PDF-Datei auswählen" oder fügen Sie die Datei mit Strg+V ein.',
            },
            {
              name: 'Seiten in die neue Reihenfolge ziehen',
              text: 'Ziehen Sie eine beliebige Seitenminiaturansicht an eine neue Position. Verwenden Sie die Hover-Schaltflächen oder die Auswahlwerkzeugleiste zum Drehen, Duplizieren oder Löschen von Seiten.',
            },
            {
              name: 'Die organisierte PDF herunterladen',
              text: 'Klicken Sie auf „PDF herunterladen" — die Datei wird auf Ihrem Gerät neu erstellt und sofort ohne Wasserzeichen gespeichert.',
            },
          ],
        },
      },
    },

    about: {
      meta: {
        title: 'Über uns — Rearrange PDF',
        description: 'Warum wir ein PDF-Seiten-Organisations-Tool gebaut haben, das Ihre Dateien niemals hochlädt, wie es unter der Haube funktioniert und wie Sie Kontakt aufnehmen können.',
      },
      breadcrumb: 'Über uns',
      h1: 'Ein Tool, richtig gemacht.',
      p1: 'Die Seiten einer PDF neu anzuordnen ist eine kleine Aufgabe. Sie haben einen Vertrag verkehrt herum gescannt, oder die Zusammenfassung eines Berichts landete am Ende, und Sie möchten es einfach korrigiert haben. Doch die meisten Tools für diese einfache Aufgabe verlangen viel dafür: Ihre Datei wird auf einen Server hochgeladen, von dem Sie nichts wissen, nach zwei Dokumenten erreichen Sie ein Tageslimit, und normalerweise wartet ein Upgrade-Prompt.',
      p2: 'Wir haben Rearrange PDF gebaut, weil nichts davon nötig ist. Seiten-Neuanordnung braucht keinen Server — ein moderner Browser hat alles, was nötig ist, um eine PDF zu lesen, anzuzeigen und neu zu erstellen. Also ist diese Website genau das: eine einzelne Seite, eine Drop-Zone und ein Raster von Miniaturansichten, die Sie herumziehen können. Keine Uploads, keine Konten, keine Werbung, keine Limits.',
      howItWorksH2: 'So funktioniert es',
      howItWorksP: 'Unter der Haube verwendet das Tool zwei Open-Source-Bibliotheken, die vollständig in Ihrem Browser laufen: <strong>PDF.js</strong> rendert jede Seite als Miniaturansicht und <strong>pdf-lib</strong> assembliert Ihr neues Dokument durch Kopieren der Originalseiten — Byte für Byte, sodass Formatierung, Schriften und Qualität genau erhalten bleiben. Wenn Sie auf Herunterladen klicken, wird die fertige PDF direkt in der Registerkarte erstellt und an den Speicherdialog Ihres Browsers übergeben.',
      getInTouchH2: 'Kontakt aufnehmen',
      getInTouchP: 'Eine PDF gefunden, die nicht funktioniert? Haben Sie eine Idee für das Tool? Wir lesen alles — <a href="/contact">kontaktieren Sie uns</a> unter <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a>.',
      ctaH2: 'Probieren Sie es mit Ihrer eigenen Datei',
      ctaP: 'Es ist kostenlos, unbegrenzt — und nichts verlässt jemals Ihren Browser.',
      ctaButton: 'PDF neu anordnen',
    },

    contact: {
      meta: {
        title: 'Kontakt — Rearrange PDF',
        description: 'Kontaktieren Sie das Team hinter Rearrange PDF. Melden Sie eine Datei, die nicht funktioniert, schlagen Sie eine Funktion vor oder stellen Sie eine Frage zum browserbasierten PDF-Seiten-Organizer.',
      },
      breadcrumb: 'Kontakt',
      h1: 'Kontaktieren Sie uns',
      intro: 'Eine PDF gefunden, die sich nicht öffnen lässt? Haben Sie eine Idee, die das Tool verbessern würde? Wir lesen jede Nachricht und schätzen das Feedback wirklich.',
      emailH2: 'Schreiben Sie uns eine E-Mail',
      emailP: 'Der schnellste Weg, uns zu erreichen, ist per E-Mail. Wir sind ein kleines Team, bitten Sie daher um ein paar Tage Geduld für eine Antwort.',
      beforeH2: 'Bevor Sie schreiben',
      beforeP: 'Ein paar Hinweise helfen uns, Ihnen schneller zu helfen:',
      beforeItems: [
        '<strong>Sagen Sie uns, welche Datei Probleme gemacht hat.</strong> Wenn eine PDF nicht lädt oder exportiert, beschreiben Sie den Dokumenttyp (Scan, Formular, verschlüsselt, sehr groß), anstatt die Datei zu senden.',
        '<strong>Wir können Ihre Dateien nicht sehen.</strong> Das Tool läuft vollständig in Ihrem Browser, also erreichen uns Ihre PDFs nie. Bitte senden Sie keine sensiblen Dokumente per E-Mail — eine Beschreibung ist alles, was wir brauchen.',
        '<strong>Fügen Sie Ihren Browser und Ihr Gerät hinzu</strong> (zum Beispiel „Safari auf iPhone"), wenn Sie ein Problem melden — es hilft uns, es zu reproduzieren.',
      ],
      answersH2: 'Hier finden Sie vielleicht sofort eine Antwort',
      helpLinks: [
        {
          title: 'Lesen Sie die FAQ',
          body: 'Schnelle Antworten über Uploads, Dateigröße, Seitenqualität und Datenschutz.',
        },
        {
          title: 'Öffnen Sie den Leitfaden',
          body: 'Schritt-für-Schritt-Anleitungen zum Neuordnen, Drehen und Löschen von Seiten.',
        },
        {
          title: 'Lesen Sie unsere Datenschutzerklärung',
          body: 'Genau das, was das Tool tut — und was nicht — mit Ihren Dateien.',
        },
      ],
      dataH2: 'Über Ihre Daten',
      dataP: 'Da wir keine personenbezogenen Daten erheben, gibt es normalerweise nichts, worüber wir Sie informieren können — aber wenn Sie eine Datenschutzfrage haben, beantworten wir sie gerne. Lesen Sie unsere <a href="/privacy">Datenschutzerklärung</a> und <a href="/terms">Nutzungsbedingungen</a> für alle Details.',
      ctaH2: 'Müssen Sie jetzt eine PDF korrigieren?',
      ctaP: 'Das Tool ist kostenlos, unbegrenzt — und nichts verlässt jemals Ihren Browser.',
      ctaButton: 'PDF neu anordnen',
      jsonLd: {
        contactPage: {
          name: 'Rearrange PDF kontaktieren',
          description: 'Kontaktdaten für Rearrange PDF, das browserbasierte Tool zum Neuanordnen und Organisieren von PDF-Seiten ohne Upload.',
        },
      },
    },

    privacy: {
      meta: {
        title: 'Datenschutzerklärung — Rearrange PDF',
        description: 'Unser Datenschutzversprechen: Ihre PDFs verlassen niemals Ihren Browser, wir schalten keine Werbung und keine Tracker und erheben keine personenbezogenen Daten. Lesen Sie die vollständige Richtlinie.',
      },
      breadcrumb: 'Datenschutzerklärung',
      h1: 'Datenschutzerklärung',
      lastUpdated: 'Zuletzt aktualisiert: September 2026',
      shortH2: 'Die Kurzfassung',
      shortItems: [
        'Ihre PDF-Dateien verlassen niemals Ihr Gerät. Die gesamte Verarbeitung findet in Ihrem Browser statt.',
        'Wir haben keine Benutzerkonten und erheben keine personenbezogenen Daten.',
        'Wir schalten keine Werbung und betten keine Tracker von Drittanbietern ein.',
        'Die einzige Messung, die wir verwenden, ist cookielose, aggregierte Analytik (siehe unten).',
      ],
      sections: [
        {
          title: '1. Wie das Tool funktioniert',
          text: 'Rearrange PDF ist eine clientseitige Anwendung. Wenn Sie hier eine PDF öffnen, wird die Datei direkt von Ihrem Browser mit den JavaScript-APIs gelesen, die auf dieser Seite verfügbar sind. Miniaturansichten werden gerendert und Ihr bearbeitetes Dokument wird vollständig auf Ihrem Gerät neu erstellt. Kein Dateiinhalt wird an uns oder eine dritte Partei übertragen — es gibt keinen Upload-Server, an den es gesendet werden könnte.',
        },
        {
          title: '2. Was wir niemals erheben',
          bullets: [
            'Die Inhalte, Namen oder Metadaten Ihrer PDF-Dateien',
            'Irgendwelche Kontoinformationen — das Tool erfordert keine Anmeldung',
            'Werbungs- oder seitenübergreifende Tracking-Cookies jeglicher Art',
          ],
        },
        {
          title: '3. Was erhoben wird',
          subsections: [
            {
              title: 'Cookielose Analytik',
              text: 'Wir verwenden Cloudflare Web Analytics, um die aggregierte Nutzung der Website zu verstehen (zum Beispiel, wie viele Personen das Tool besuchen und aus welchem Land). Dieser Dienst verwendet keine Cookies und identifiziert keine einzelnen Besucher. Er verfolgt Sie nicht über andere Websites hinweg.',
            },
            {
              title: 'Standard-Serverprotokolle',
              text: 'Wie jede Website führt unser Hosting-Anbieter (Cloudflare) kurzlebige technische Protokolle über Anfragen zum Laden der Website selbst — Dinge wie IP-Adresse, Browsertyp und Zeitstempel. Diese Protokolle enthalten niemals Ihre Dokumente (die niemals hochgeladen werden) und existieren nur, um die Website sicher und betriebsbereit zu halten.',
            },
          ],
        },
        {
          title: '4. Überprüfen Sie es selbst',
          text: 'Sie müssen dieser Seite nicht vertrauen. Öffnen Sie die Entwicklertools Ihres Browsers (F12), wechseln Sie zum Netzwerk-Tab und nutzen Sie das Tool: Laden Sie eine PDF hoch, ziehen Sie Seiten herum, laden Sie das Ergebnis herunter. Sie werden sehen, dass keine Anfrage Ihre Datei trägt.',
        },
        {
          title: '5. Ihre Rechte',
          text: 'Da wir keine personenbezogenen Daten über die oben beschriebenen anonymen, aggregierten Statistiken hinaus verarbeiten, gibt es im Allgemeinen keine personenbezogenen Daten von Ihnen, auf die wir zugreifen, die wir korrigieren oder löschen könnten. Wenn Sie glauben, dass dies nicht der Fall ist, und uns kontaktieren möchten, sehen Sie unten.',
        },
        {
          title: '6. Änderungen dieser Richtlinie',
          text: 'Wenn wir jemals ändern, wie die Website auf eine Weise funktioniert, die den Datenschutz betrifft, werden wir diese Seite aktualisieren. Das Tool wird clientseitig bleiben — das ist der ganze Sinn der Website.',
        },
        {
          title: '7. Kontakt',
          text: 'Fragen zum Datenschutz? E-Mail an <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> oder besuchen Sie unsere <a href="/contact">Kontaktseite</a>.',
        },
      ],
    },

    terms: {
      meta: {
        title: 'Nutzungsbedingungen — Rearrange PDF',
        description: 'Die Bedingungen, die gelten, wenn Sie rearrangepdf.com nutzen, um PDF-Seiten in Ihrem Browser neu anzuordnen.',
      },
      breadcrumb: 'Nutzungsbedingungen',
      h1: 'Nutzungsbedingungen',
      lastUpdated: 'Zuletzt aktualisiert: September 2026',
      sections: [
        {
          title: '1. Der Service',
          text: 'Rearrange PDF (rearrangepdf.com) ist ein kostenloses, browserbasiertes Tool, mit dem Sie die Seiten von PDF-Dateien neu anordnen, drehen, duplizieren, löschen und organisieren können. Die gesamte Verarbeitung findet lokal in Ihrem Webbrowser statt; Ihre Dateien werden nicht zu uns hochgeladen.',
        },
        {
          title: '2. Annahme',
          text: 'Durch die Nutzung der Website stimmen Sie diesen Bedingungen zu. Wenn Sie nicht zustimmen, nutzen Sie den Service bitte nicht.',
        },
        {
          title: '3. Ihre Inhalte',
          text: 'Sie behalten alle Rechte an den Dokumenten, an denen Sie arbeiten. Da Dateien auf Ihrem eigenen Gerät verarbeitet werden, empfangen, speichern oder verarbeiten wir sie niemals. Sie sind dafür verantwortlich, die Rechte an jedem Dokument zu haben, das Sie im Tool öffnen, und anwendbares Recht einzuhalten.',
        },
        {
          title: '4. Keine Garantie',
          text: 'Der Service wird „wie er ist" kostenlos und ohne Gewährleistungen jeglicher Art bereitgestellt. Wir arbeiten hart daran, ihn genau und zuverlässig zu halten — Seiteninhalte werden Byte für Byte aus Ihrer Originaldatei kopiert — aber wir können eine ununterbrochene Verfügbarkeit oder Eignung für einen bestimmten Zweck nicht garantieren. Erstellen Sie Backups wichtiger Dokumente.',
        },
        {
          title: '5. Haftungsbeschränkung',
          text: 'Im größtmöglichen gesetzlich zulässigen Umfang haften wir nicht für Schäden, die aus der Nutzung oder Unfähigkeit zur Nutzung des Service entstehen.',
        },
        {
          title: '6. Änderungen',
          text: 'Wir können den Service oder diese Bedingungen jederzeit aktualisieren. Fortgesetzte Nutzung nach Änderungen bedeutet, dass Sie die aktualisierten Bedingungen akzeptieren. Die aktuelle Version ist immer auf dieser Seite verfügbar.',
        },
        {
          title: '7. Kontakt',
          text: 'Fragen zu diesen Bedingungen? E-Mail an <a href="mailto:kaizen3242@gmail.com">kaizen3242@gmail.com</a> oder besuchen Sie unsere <a href="/contact">Kontaktseite</a>.',
        },
      ],
    },
  },
} satisfies SiteDictionary;

export default de;