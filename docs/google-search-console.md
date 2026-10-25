# Google Search Console und Logo

Stand: 25. Oktober 2026. Öffentliche Hauptadresse: **https://m-rosenbaum.de/**.

## Technisch eingerichtet

- Die Startseite erlaubt die Indexierung. Die weiterhin unvollständigen Rechtstexte bleiben mit `noindex, follow` aus den Suchergebnissen ausgeschlossen und stehen deshalb nicht in der Sitemap.
- `https://m-rosenbaum.de/robots.txt` erlaubt das Crawling der Website einschließlich Bildern, CSS und JavaScript und nennt die Sitemap.
- `https://m-rosenbaum.de/sitemap.xml` enthält die kanonische Startseite. Die Abschnitte der Einzelseite sind keine separaten URLs. Es werden keine künstlichen Aktualisierungsdaten gesetzt.
- Jede HTML-Seite hat eine absolute kanonische URL. Netlify leitet die www-Adresse, die bekannte Standarddomain `deluxe-faun-bca022.netlify.app` und `/index.html` dauerhaft zur Hauptadresse weiter.
- Der Build liefert die vollständigen Seiteninhalte direkt im HTML aus. React übernimmt danach die Menüinteraktion; zum Lesen von Inhalt und Rechtstexten ist kein JavaScript erforderlich.
- Die Startseite enthält `WebSite`- und `HousePainter`-Daten mit Name, Anschrift, Telefonnummer, E-Mail und Logo. Unbekannte Öffnungszeiten, Preise, Bewertungen und Inhaberangaben werden nicht erfunden.
- Das vorhandene, quadratische **96 × 96 PNG-Favicon** ist unter der stabilen Adresse `https://m-rosenbaum.de/favicon.png` im HTML verknüpft. Es zeigt die Bildmarke ohne MR. Die komplette Wort-/Bildmarke ist zusätzlich als strukturiertes `logo` und als Vorschaubild hinterlegt.
- Die markierten Foto-/Öffnungszeiten-Platzhalter und der Entwurfshinweis sind mit `data-nosnippet` vom Suchergebnistext ausgenommen; sie bleiben auf der Website sichtbar.
- Netlify-Deploy-Previews und Branch-Deploys erhalten bei ihrem Build `noindex, nofollow` und eine sperrende robots.txt. Produktion bleibt indexierbar.

`npm run build` erstellt und prüft diese Dateien automatisch. `npm run check:seo` prüft einen vorhandenen Build erneut.

## Einrichtung im Google-Konto

Im für die Bearbeitung verfügbaren Browser war kein Google-Konto angemeldet. Eine bestehende Search-Console-Bestätigung konnte daher nicht geprüft werden. Ohne einen echten Google-Bestätigungscode wird kein erfundener Verifizierungs-Tag ausgegeben.

### Einfacher Weg ohne DNS-Änderung: URL-Präfix

1. [Google Search Console](https://search.google.com/search-console/) im vorgesehenen Google-Konto öffnen.
2. Falls noch nicht vorhanden, die Property vom Typ **URL-Präfix** für genau `https://m-rosenbaum.de/` hinzufügen.
3. Bei **HTML-Tag** die komplette Zeile `<meta name="google-site-verification" content="…" />` kopieren und zur Integration bereitstellen. Alternativ den echten Wert aus `content` in Netlify als Build-Umgebungsvariable `GOOGLE_SITE_VERIFICATION` eintragen und neu deployen. Das ist ein öffentlicher Bestätigungscode, kein Passwort. `.env.example` dokumentiert die Variable; eine lokale `.env` wird nicht automatisch zu Netlify übertragen.
4. Nach dem Deployment prüfen, dass der echte Tag im ausgelieferten Quelltext der Startseite steht. Dann im eigenen Google-Konto **Bestätigen** wählen. Den Tag auch danach beibehalten.
5. Unter **Sitemaps** `sitemap.xml` einreichen. Die vollständige Adresse ist `https://m-rosenbaum.de/sitemap.xml`.
6. Unter **URL-Prüfung** `https://m-rosenbaum.de/` testen, **Live-URL testen** auswählen und anschließend **Indexierung beantragen**. Die Prüfung muss Crawling und Indexierung erlauben; als kanonische Adresse ist die Hauptadresse hinterlegt.

### Alternative für alle Domainvarianten: Domain-Property

Die Property `m-rosenbaum.de` ohne Protokoll wird per DNS bestätigt. Die öffentlich ermittelten Nameserver sind `ns1.gmxnet.de` bis `ns4.gmxnet.de`, daher wird ein neuer Google-TXT-Eintrag im zugehörigen GMX-Domainkonto verwaltet. Den von Google ausgegebenen `google-site-verification=…`-Wert als **zusätzlichen TXT-Eintrag** für die Stammdomain einfügen. Bestehende MX-, SPF-, DKIM-, DMARC- und Website-Einträge nicht ersetzen. Danach die DNS-Verbreitung abwarten und in der Search Console bestätigen. Auch hier den Bestätigungseintrag dauerhaft beibehalten.

Für das Favicon genügt die bestätigte URL-Präfix-Property der Hauptadresse. Die zusätzliche Domain-Property ist keine Voraussetzung für die Logoanzeige.

## Was Google daraus macht

Das kleine Symbol neben einem normalen Suchtreffer ist das **Favicon**. Strukturierte Unternehmensdaten beschreiben zusätzlich das eigentliche Unternehmenslogo. Ein Google-Unternehmensprofil und bezahlte Google-Anzeigen werden separat verwaltet und sind damit nicht automatisch geändert.

Google entscheidet über Indexierung, Suchergebnistext und Logoanzeige. Selbst eine technisch korrekte Einrichtung garantiert keine Darstellung. Nach erneutem Crawling kann die Verarbeitung mehrere Tage bis Wochen dauern. Wiederholtes Ändern der Favicon-URL hilft dabei nicht.

Die Platzhalter in den Rechtstexten müssen weiterhin ausgefüllt und geprüft werden. Eine Suchmaschinenfreigabe ist keine rechtliche Freigabe der Inhalte.

## Offizielle Quellen

- [Google: Favicon in Suchergebnissen](https://developers.google.com/search/docs/appearance/favicon-in-search)
- [Google: Inhaberschaft bestätigen](https://support.google.com/webmasters/answer/9008080?hl=de)
- [Google: Sitemap erstellen und einreichen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: Unternehmens- und Logodaten](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google: lokale Unternehmen](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: Websitenamen](https://developers.google.com/search/docs/appearance/site-names)
