# Maler Rosenbaum

Responsive Website für den Familienbetrieb Maler Rosenbaum in Eberbach. Weißer Hintergrund, Rot (#e3222a), Gelb (#f5c91b) und Blau (#0874c2) als gezielte Akzente.

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

Auslieferbare Dateien entstehen in `dist/`. GitHub enthält den Quellcode; ein Upload allein aktiviert kein öffentliches Hosting. Für einen Unterpfad: `npm run build -- --base=/MalerRosenbaum/`.

## Inhalte und Quellen

Die vom Auftraggeber am 9. Oktober 2026 bereitgestellte Gestaltungsvorlage bildet die Grundlage für die Farbwelt, den Rosenbaum, den Familienbetrieb und diese fünf Leistungen:

- Wand & Decke: Raumgestaltung, Spachteltechniken, kreative Oberflächen.
- Farbe & Oberflächen: Anstriche, Lackierarbeiten, dekorative Gestaltung innen und außen.
- Fassade: Fassadengestaltung, Schutzanstriche, Werterhalt.
- Bodenbeläge: Vinyl, Designböden, Parkett, Laminat.
- Tapeten: individuelle Designs und professionelle Verarbeitung.

Die Leistungen sind jetzt aus der Vorlage übernommen und keine erfundenen Vorschläge mehr. Preise, Bewertungen und nicht übermittelte Qualifikationen werden nicht ergänzt.

Die Vorlage enthält offensichtliche Muster-Kontaktdaten (Musterstraße 1, 06271 123456). Die Website behält deshalb die zuvor übermittelten Angaben: Itterstraße 5, 69412 Eberbach und 01514 4341412. Die E-Mail-Adresse und Domain aus dem Entwurf sind nicht als bestätigte, aktive Kontakte eingebunden. Der Vorname Maximilian wird im Impressums-Platzhalter als zu bestätigen gekennzeichnet.

## Noch ergänzen

- Drei echte Baustellenbilder in den markierten Bereichen; Beschreibungen an die jeweiligen Bilder anpassen.
- E-Mail-Adresse und Öffnungszeiten bestätigen und eintragen.
- Kontaktdaten, Inhaberangaben, Impressum und Datenschutzerklärung vor Veröffentlichung vervollständigen bzw. bestätigen.
- Nach Freigabe den `noindex, nofollow`-Metatag aus `index.html` entfernen.

## Gestaltung und Bilddateien

- `src/App.jsx`: Inhalte, Leistungen, Navigation, Bildplatzhalter, Kontakt.
- `src/App.css`: responsive Gestaltung.
- `src/index.css`: globale Stile und Farbvariablen.
- `public/rosenbaum-tree.png`: transparentes Baum-Motiv, mit dem integrierten Imagegen-Werkzeug anhand der Kundenvorlage nachgebildet. Keine pixelidentische Originaldatei.
- `docs/brand-asset.md`: Herkunft und vollständiger Generierungsauftrag.
- `public/favicon.svg`: einfaches Farbsymbol.

Das frühere Beispiel-Wohnraumbild ist nicht mehr in die Seite eingebunden. Keine extern geladenen Schriften, kein Tracking, kein Kontaktformular und keine eingebettete Karte. Google Maps öffnet sich nur beim Anklicken des Routenlinks.
