# Rosenbaum – aktualisierte Bildmarke

Stand: 16. Oktober 2026. Referenz: vom Nutzer bereitgestelltes Foto `WhatsApp Image 2026-10-15 at 17.20.29.jpeg`.

Die neuen Bilddateien wurden mit dem integrierten Imagegen-Werkzeug erstellt. Die getrennten Initialen „MR“ wurden entfernt; das große R als Teil der Baum-/Pinselillustration bleibt. Die Illustration ist eine Nachbildung, keine Original-Vektordatei.

## Eingebundene Dateien

- `public/rosenbaum-logo.png`: vollständiges Logo auf Weiß, 960 × 640 Pixel, im Seitenkopf des Inhalts.
- `public/rosenbaum-symbol.png`: quadratische Bildmarke, 128 × 128 Pixel, in Navigation und Fußzeile.
- `public/favicon.png`: Bildmarke als 96 × 96 PNG für Browser und Suchmaschinen.
- `public/favicon-32.png` und `public/favicon.ico`: 32 × 32 Pixel für Browser.
- `public/apple-touch-icon.png`: 180 × 180 Pixel.
- `assets/brand-source/`: hochauflösende generierte Ausgaben.

Das Skript `scripts/export-brand-assets.ps1` exportiert nur die Größen und Dateiformate aus den Bildquellen. Es zeichnet die Bildmarke nicht neu.

## Farbwelt

Weiß bleibt der Seitenhintergrund. Blattgrün (#365823) für Buttons und Hervorhebungen, Gold (#b28a49) für feine Akzente, dunkle neutrale Schrift. Rot, Gelb und Blau aus dem Pinselstrich bleiben in den Farbleisten bestehen.

## Favicon und Google

Die Startseite verlinkt quadratische PNG-/ICO-Dateien direkt im HTML. Die Entwurfssperre `noindex, nofollow` bleibt bis zur inhaltlichen Freigabe bestehen. Ein Favicon kann erst nach öffentlicher Veröffentlichung und erneuter Verarbeitung einer indexierbaren Website in der Google-Suche erscheinen; die Anzeige ist nicht garantiert. [Google-Dokumentation](https://developers.google.com/search/docs/appearance/favicon-in-search).

## Imagegen-Prompts

### Vollständiges Logo – erster Durchgang

Use case: precise-object-edit. Input image 1 is the exact customer logo edit target, shown inside a phone screenshot. Reproduce ONLY the complete central business logo cleanly at high resolution on a genuinely transparent background, removing all black screenshot margins, phone controls and UI. Preserve the original detailed painterly logo identity: large black serif capital R with thin warm gold edging; a realistic warm brown tree trunk following its left stem; predominantly deep green leaves with a few red, golden-yellow and blue leaves at the top; a paintbrush emerging toward the upper right from the diagonal leg of the R, with flowing red/yellow/blue paint ribbons sweeping to the lower right. Below the illustration retain the bold elegant black serif word ROSENBAUM, then the thin red, yellow and blue horizontal bars, then exactly FARBE • QUALITÄT • WERTE, then exactly EBERBACH. IMPORTANT CHANGE: completely remove the separate initials MR above the word ROSENBAUM and remove the two small horizontal rules that flanked those initials. Close that empty gap so the illustration sits naturally above ROSENBAUM. Keep the single large decorative R in the illustration because that belongs to the tree/brush symbol. Do not add an M anywhere. Preserve composition and brand details as faithfully as possible, not a new logo concept. Typography must be legible and spelled exactly, especially ROSENBAUM and QUALITÄT. Output a single standalone complete logo, tight but uncropped framing, small transparent safety margin, no mockup, no added text, no shadows outside the logo, no white rectangle.

### Vollständiges Logo – gezielte Hintergrundkorrektur (final)

Use case: precise-object-edit. Image 1 is the generated logo to correct. Image 2 is the customer's original logo reference. Make one targeted correction to image 1: REMOVE every colored background glow, halo and blurred shadow. Replace the surrounding background and all empty spaces between objects with completely flat pure white #FFFFFF, suitable for a white website. There must be NO colored haze or gradient behind the tree, letter, brush, paint, name, subtitle or colored bars. Preserve the sharp actual artwork, its black serif R with gold edging, green tree leaves with a few red/yellow/blue leaves, brown trunk and red/yellow/blue paintbrush sweep. Preserve the full name ROSENBAUM and the exact lines FARBE • QUALITÄT • WERTE and EBERBACH. Preserve the removal of the separate MR initials; never reintroduce MR or M. Do not change the single large R in the illustration. Match the white background and clean logo treatment in reference image 2, with no phone screenshot UI. Make the entire logo fully visible with comfortable white margins on ALL sides including below EBERBACH. Crisp high resolution final full logo image. No watermark, no added elements.

### Bildmarke für Kopfzeile und Favicon

Use case: background-extraction / precise-object-edit. Input image 1 is the exact customer brand reference inside a phone screenshot. Create a square transparent PNG containing ONLY the upper illustrated symbol from the central logo: the large black serif R with narrow warm gold edging, with a warm brown realistic tree trunk along its left stem, natural deep green leaves on upper left and a few red, golden-yellow and blue leaves along the top, a single paintbrush emerging upward right and flowing red/yellow/blue paint ribbons forming the R's sweeping lower right leg. Preserve this particular reference symbol and its arrangement faithfully. Exclude ALL text beneath it: no MR, no ROSENBAUM, no FARBE QUALITÄT WERTE, no EBERBACH, no underline or horizontal rules. The sole large R is part of the picture and must remain; do not add an M. Remove all phone UI, black margins and the white screenshot background. This is the compact symbol version of the same logo, for the website header and favicon: bold clear silhouette, crisp edges, maintain illustration detail, square canvas, symbol fills about 90 percent of the canvas, small equal safety margin, no clipping, fully transparent surrounding background. No alternate variants or mockup.
