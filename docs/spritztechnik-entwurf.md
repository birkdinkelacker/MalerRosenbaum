# Spritztechnik für Unternehmen – lokaler Entwurf

Stand: 2. November 2026. Quelle: vom Nutzer bereitgestellte Datei `M-ROSENBAUM_Spritztechnik_Webdesigner.pdf`, beide Seiten.

## Veröffentlichungsstatus

Der Auftrag fordert ausdrücklich: „Neue Rubrik zunächst als Entwurf vorbereiten; Veröffentlichung erst nach Klärung der handwerksrechtlichen Einordnung des Maschinenservices.“

Deshalb nur lokaler Branch `codex/spritztechnik-entwurf`, kein Push und kein Netlify-Deployment. Nicht nach `main` übernehmen oder deployen, bevor diese Voraussetzung geklärt und die Veröffentlichung freigegeben ist. `noindex` ist lediglich ein zusätzlicher Suchmaschinenhinweis und kein Zugriffsschutz.

## Umsetzung

- Sechste Kachel nach den fünf unveränderten Leistungstexten; blaues Trennelement und schwarzes Linien-Icon einer Spritzpistole.
- Sechs Kacheln in drei Spalten auf Desktop, bestehende mobile Umbrüche bleiben erhalten.
- „Mehr erfahren“ öffnet `/spritztechnik.html`.
- Unterseite enthält sämtliche gelieferten Texte einschließlich der klaren Aufteilung von Materialauftrag und anschließender Oberflächenbearbeitung.
- Logo, Navigation, Footer und andere Seitentexte bleiben bestehen.
- Echtes Einsatzfoto nicht mitgeliefert: deutlich beschrifteter Foto-Platzhalter, kein künstliches Referenzfoto.
- „Jetzt Einsatz anfragen“ führt zur E-Mail an info@m-rosenbaum.de mit Betreff „Einsatzanfrage Spritztechnik“. Kein Kontaktformular oder neuer externer Dienst.
- Eigener HTML-Einstieg, statisches Vorrendern, `noindex, nofollow`; nicht in der Sitemap.

## Lokale Vorschau

`npm run build` und anschließend `npm run preview -- --host 127.0.0.1 --port 4174`.
Startseite unter `/`, Unterseite unter `/spritztechnik.html`.

## Vor späterer Veröffentlichung

Handwerksrechtliche Einordnung klären und Freigabe einholen; echtes freigegebenes Einsatzfoto ergänzen, sofern verfügbar. Erst anschließend Entwurfshinweis entfernen, Indexierung/Canonical/Sitemap bewusst festlegen und die Änderungen in den Produktionsbranch übernehmen.
