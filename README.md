# Maler Rosenbaum

Schlichte, responsive Website für Maler Rosenbaum in Eberbach. Kräftiges Petrolblau, klare Typografie und eine persönliche, bodenständige Ansprache.

## Aufbau

An der Struktur von https://sead-gartenpflege.de/ orientiert: Einstieg, persönliche Vorstellung, Leistungen, Kontaktaufruf, Projekteinblicke und Kontakt. Die Umsetzung ist eigenständig; Texte und Fotos der Referenz wurden nicht übernommen.

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

Die auslieferbaren Dateien entstehen in `dist/`. Der GitHub-Upload allein veröffentlicht noch keine öffentlich erreichbare Website. Für einen Unterpfad kann Vite beispielsweise mit `npm run build -- --base=/MalerRosenbaum/` gebaut werden.

## Noch offene Inhalte

- Leistungsangebot: Die drei Beschreibungen sind ausdrücklich als unbestätigte Vorschläge gekennzeichnet.
- Persönliche Vorstellung: Werdegang, Erfahrung und Besonderheiten des Betriebs ergänzen.
- Porträt: echtes und freigegebenes Foto von Herrn Rosenbaum ergänzen.
- Projekte: eigene Fotos und zugehörige Beschreibungen ergänzen.
- Kontakt: E-Mail-Adresse und Öffnungszeiten ergänzen.
- Adresse und Telefonnummer aus dem bereitgestellten Screenshot vor Veröffentlichung bestätigen.
- Impressum und Datenschutzerklärung sind markierte Platzhalter und müssen vervollständigt werden.
- Nach inhaltlicher Freigabe den `noindex, nofollow`-Metatag in `index.html` entfernen.

Es werden keine Bewertungen, Qualifikationen, Preise oder Berufserfahrungen erfunden. Die Information, dass der Inhaber Familienvater ist, prägt die freundliche Gestaltung, wird aber nicht als private biografische Angabe veröffentlicht.

## Dateien

- `src/App.jsx`: Inhalte, wiederverwendbare Platzhalter, Navigation und Kontakt.
- `src/App.css`: Layout und responsive Darstellung.
- `src/index.css`: Farbvariablen und globale Basisstile.
- `public/favicon.svg`: vorläufiges Symbol in der Seitenfarbe.
- `public/interior.jpg`: lokal bereitgestelltes Beispielbild, ausdrücklich keine Referenzarbeit des Betriebs.

Bildquelle: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85

Keine extern geladenen Schriften, kein Tracking und kein Kontaktformular. Google Maps wird erst über den Routenlink geöffnet. Telefonnummern öffnen die Telefonfunktion des Geräts.
