# Maler Rosenbaum

Responsive Website für den Familienbetrieb Maler Rosenbaum in Eberbach. Weißer Hintergrund, Blattgrün (#365823), dezente Goldakzente (#b28a49) und die roten, gelben und blauen Farben der neuen Bildmarke.

## Lokal starten

Voraussetzung: Node.js 22.12+ oder eine neuere unterstützte LTS-Version.

```sh
npm ci
npm run dev
```

## Produktionsbuild

```sh
npm run build
npm run preview
```

Auslieferbare Dateien entstehen in `dist/`. Die Produktionskonfiguration ist auf die Stammdomain `https://m-rosenbaum.de/` ausgerichtet. Der Build rendert die Seiten als vollständiges HTML vor und prüft die wichtigsten Suchmaschinenangaben automatisch. Mit `npm run check:seo` lässt sich ein bestehender Build erneut prüfen.

Für Netlify legt `netlify.toml` den Build-Befehl `npm run build` und das Veröffentlichungsverzeichnis `dist` fest. Der Build erzeugt die Startseite sowie direkt aufrufbare Seiten unter `/impressum.html` und `/datenschutz.html`. Es ist kein SPA-Redirect erforderlich. Bei einem mit GitHub verbundenen Netlify-Projekt kann ein Push auf den konfigurierten Produktionsbranch automatisch veröffentlichen.

## Inhalte und Quellen

Die vom Auftraggeber am 9. Oktober 2026 bereitgestellte Gestaltungsvorlage bildet die Grundlage für die Farbwelt, den Rosenbaum, den Familienbetrieb und diese fünf Leistungen:

- Wand & Decke: Raumgestaltung, Spachteltechniken, kreative Oberflächen.
- Farbe & Oberflächen: Anstriche, Lackierarbeiten, dekorative Gestaltung innen und außen.
- Fassade: Fassadengestaltung, Schutzanstriche, Werterhalt.
- Bodenbeläge: Vinyl, Designböden, Parkett, Laminat.
- Tapeten: individuelle Designs und professionelle Verarbeitung.

Die Leistungen sind jetzt aus der Vorlage übernommen und keine erfundenen Vorschläge mehr. Preise, Bewertungen und nicht übermittelte Qualifikationen werden nicht ergänzt.

Die Vorlage enthält offensichtliche Muster-Kontaktdaten (Musterstraße 1, 06271 123456). Die Website behält deshalb die zuvor übermittelten Angaben: Itterstraße 5, 69412 Eberbach und 01514 4341412. Am 24. Oktober 2026 hat der Auftraggeber `Info@m-rosenbaum.de`, Netlify als Host und GMX für E-Mail und Domain bestätigt. Die E-Mail-Adresse ist im Kontaktbereich, im Footer und in beiden Rechtstexten als `mailto:`-Link eingebunden. Der vollständige rechtliche Inhabername bleibt offen; der Name aus der Gestaltungsvorlage wird nicht als bestätigt übernommen.

## Noch ergänzen

- Drei echte Baustellenbilder in den markierten Bereichen; Beschreibungen an die jeweiligen Bilder anpassen.
- Öffnungszeiten eintragen.
- Die sichtbar markierten Platzhalter in Impressum und Datenschutzerklärung vervollständigen bzw. nicht zutreffende Angaben entfernen. Eine Übersicht und die geprüften Quellen stehen in `docs/legal-content.md`.
- Insbesondere rechtliche Inhaberangaben, Register-/Berufsangaben, Anbieter-Verträge, Hosting-Einstellungen und Löschfristen bestätigen. Die Rechtstexte sind Entwürfe und keine bestätigte rechtliche Freigabe.
- Die Startseite ist auf Nutzerwunsch seit 25. Oktober 2026 für Suchmaschinen freigegeben. Die unvollständigen Rechtstexte bleiben `noindex, follow`; das ist kein Zugriffsschutz.

## Google Search Console

Sitemap, robots.txt, kanonische URLs, strukturiertes Unternehmen und Logo sowie das Favicon sind vorbereitet. Die noch kontogebundene Bestätigung, das Einreichen der Sitemap und die Indexierungsanfrage sind in `docs/google-search-console.md` beschrieben. Ein echter Google-HTML-Bestätigungscode kann über die Netlify-Buildvariable `GOOGLE_SITE_VERIFICATION` eingebunden werden. Ohne Code wird kein Platzhalter-Tag veröffentlicht.

## Gestaltung und Bilddateien

Beim normalen Scrollen streicht eine dekorative Farbwalze einen hellgrünen Hintergrund hinter „Unsere Leistungen“. Der Anstrich folgt der Scrollposition ohne Klick, Regler oder Eingriff in das Scrollverhalten. Ein passiver Scroll-Listener bündelt Änderungen über requestAnimationFrame; es gibt keine Dauerschleife. Bei reduzierter Bewegung sowie ohne JavaScript bleibt der fertige Farbstreifen statisch sichtbar. Die bisherigen interaktiven Farbwahl-Bedienelemente wurden entfernt. Der Anker `#farbprobe` führt weiterhin zum Walzeneffekt.

- `src/App.jsx`: Inhalte, Leistungen, Navigation, Bildplatzhalter, Kontakt.
- `src/contact.js`: gemeinsame Kontaktdaten für Startseite, Footer und Rechtstexte.
- `src/LegalPage.jsx`: Impressum und Datenschutzerklärung mit sichtbaren Platzhaltern.
- `impressum.html`, `datenschutz.html`: direkt verlinkbare Einstiegsseiten mit eigenen Seitentiteln.
- `src/App.css`: responsive Gestaltung.
- `src/ScrollPaint.jsx`, `src/ScrollPaint.css`: scrollabhängiger Walzeneffekt im Leistungskopf.
- `public/roller-stroke.svg`: Farbstreifen mit ausgefransten Kanten, feiner Körnung und ungleichmäßigem Farbauftrag. Die Fläche wird ohne Verzerrung der Struktur aufgedeckt und vertikal an der Mitte der Überschrift ausgerichtet.
- `src/index.css`: globale Stile und Farbvariablen.
- `scripts/prepare-search.mjs`: statische HTML-Ausgabe, strukturierte Daten und optionaler Google-Bestätigungstag.
- `scripts/check-seo.mjs`: Build-Prüfung für Indexierbarkeit, Sitemap, kanonische URLs, Inhalt und Favicon.
- `public/robots.txt`, `public/sitemap.xml`: Zugriffshinweise für Suchmaschinen und Sitemap.
- `public/rosenbaum-logo.png` und `public/rosenbaum-symbol.png`: neue Bildmarke nach der Vorlage vom 15. Oktober, ohne die separaten Initialen MR. Mit dem integrierten Imagegen-Werkzeug nachgebildet.
- `docs/brand-asset.md`: Herkunft und vollständiger Generierungsauftrag.
- `public/favicon.png`, `public/favicon.ico`, `public/favicon-32.png`, `public/apple-touch-icon.png`: Bildmarke in passenden Icon-Größen.

Das frühere Beispiel-Wohnraumbild ist nicht mehr in die Seite eingebunden. Keine extern geladenen Schriften, kein Tracking im Seitencode, kein Kontaktformular und keine eingebettete Karte. Google Maps öffnet sich nur beim Anklicken des Routenlinks. Zusätzlich im Netlify-Dashboard aktivierte Dienste sind davon unabhängig und noch zu prüfen.
