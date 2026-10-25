# Kontakt und Rechtstexte

Stand der Bearbeitung und Quellenprüfung: 24. Oktober 2026.

## Umgesetzt

Die vom Auftraggeber bestätigte Adresse `Info@m-rosenbaum.de` ist über `src/contact.js` zentral hinterlegt. Kontaktbereich, Footer, Impressum und Datenschutzerklärung verwenden dieselbe Adresse. Die Links öffnen das E-Mail-Programm; es wurde kein Formular oder Versanddienst ergänzt.

Impressum und Datenschutzerklärung sind separate Seiten mit eigenem Titel, normalem Footer-Link und Rückweg zur Startseite. Die Seiten funktionieren ohne Router-Fallback und werden mit Vite als eigene HTML-Einstiege gebaut. `netlify.toml` setzt Build-Befehl und Ausgabeverzeichnis. Aktualisierung vom 25. Oktober 2026: Auf Nutzerwunsch ist die Startseite für Suchmaschinen freigegeben. Die Rechtstexte bleiben wegen ihrer offenen Angaben mit `noindex, follow` von den Suchergebnissen ausgeschlossen.

## Verwendete Angaben

- Vom Nutzer bestätigt: E-Mail `Info@m-rosenbaum.de`, Website-Hosting bei Netlify, Domain und Postfach bei GMX.
- Aus dem bisherigen Projekt übernommen: Itterstraße 5, 69412 Eberbach; Telefon 01514 4341412. Die ladungsfähige Geschäftsanschrift bleibt im Impressum zur Bestätigung markiert.
- Im Quellcode geprüft: lokal ausgelieferte Bilder, Systemschriften, kein Formular, keine eingebettete Karte, keine Analyse-Skripte und keine selbst gesetzten Cookies oder Web-Storage-Einträge. Google Maps ist nur ein externer Link.
- Nicht geprüft: Netlify-/GMX-Kundenkonten, abgeschlossene Verträge, Tarif, serverseitige Auswertung, DNS-Nameserver, produktive Domain, Anbieter-Konfiguration oder betriebliche Löschpraxis. Dazu werden keine Tatsachen erfunden.

## Sichtbar markierte offene Angaben

1. Vollständige rechtliche Anbieteridentität, Rechtsform und ggf. Vertretung; identisch in beiden Texten.
2. Ggf. Registergericht/-nummer sowie USt-IdNr. und/oder Wirtschafts-Identifikationsnummer. Nicht zutreffende Angaben entfernen; keine persönliche Steuernummer veröffentlichen.
3. Handwerkskammer, erforderliche Berufsangaben und ggf. Aufsichtsbehörde; keine unbestätigte Qualifikation.
4. Tatsächliche Bereitschaft oder Verpflichtung zur Verbraucherstreitbeilegung und ggf. zuständige Stelle.
5. Ggf. Kontaktdaten eines benannten Datenschutzbeauftragten.
6. Für Netlify: Auftragsverarbeitungsvertrag, konkrete Logdaten und Löschfristen, aktivierte Funktionen, Empfänger und Grundlage für Drittlandübermittlungen. Keine pauschale Behauptung eines abgeschlossenen AVV oder ausschließlich europäischer Verarbeitung.
7. Für GMX: tatsächlicher Tarif/Vertragspartner und Rolle, ggf. AVV, Postfachfunktionen, Weiterleitungen, weitere Empfänger, Aufbewahrung und Drittlandübermittlungen. Die Datenschutzhinweise des allgemeinen GMX-Portals werden nicht als vollständige Beschreibung dieses individuellen Vertrags ausgegeben.
8. Domain und DNS: tatsächlichen DNS-Anbieter anhand der Nameserver ermitteln. Domainregistrierung, Website-Hosting und Besucherdatenverarbeitung auseinanderhalten.
9. Produktionskonfiguration auf zusätzlich aktivierte Analysen, Skripte und Cookies prüfen. Vor deren Einsatz ggf. Einwilligung und angepasste Hinweise vorsehen.
10. Betriebliches Löschkonzept für Anfragen, Geschäftsunterlagen, Postfach und Sicherungen.

Der Nutzer hat ausdrücklich Entwürfe mit Platzhaltern angefordert. Die markierten Angaben sind deshalb bewusst offen. Sie müssen vor der endgültigen Freigabe ausgefüllt oder entfernt und die Texte passend zum tatsächlichen Betrieb rechtlich geprüft werden.

## Primärquellen

- [§ 5 DDG – Anbieterinformationen](https://www.gesetze-im-internet.de/ddg/__5.html): Identität, Kontakt, Register und bedingte Berufs-/Identifikationsangaben.
- [DSGVO – amtlicher Verordnungstext](https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679): insbesondere Art. 6, 7, 13, 15–22, 28, 44 ff. und 77.
- [§ 36 VSBG](https://www.gesetze-im-internet.de/vsbg/__36.html): Information zur Verbraucherstreitbeilegung einschließlich Ausnahme für kleine Unternehmen.
- [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html): Speicherung/Zugriff auf Endgeräte und Ausnahmen. Kein vorsorglicher Cookie-Banner ohne entsprechende Verarbeitung eingebaut.
- [Netlify Privacy Statement](https://www.netlify.com/privacy/): aktuelle Anbieteranschrift 101 2nd Street, San Francisco, CA 94105. Hinweise zu eigener Verantwortlichkeit und zum getrennten DPA für Auftragsverarbeitung beachten.
- [Netlify Trust Center](https://www.netlify.com/trust-center/): Nachweise, DPA und Unterauftragnehmer. Der individuelle Vertrag und die Übermittlungsgrundlage bleiben zu bestätigen.
- [Netlify Log-Dokumentation](https://docs.netlify.com/manage/monitoring/logs/): verschiedene Protokollarten; Fristen einzelner Funktionen nicht pauschal auf alle Besucherprotokolle übertragen.
- [GMX-Impressum](https://www.gmx.net/impressum/) und [GMX-Datenschutzhinweise](https://agb-server.gmx.net/datenschutz): Anbieter und Rahmen der Postfachverarbeitung.
- [LfDI Baden-Württemberg – Kontakt](https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/) und [Beschwerde](https://www.baden-wuerttemberg.datenschutz.de/beschwerde/): aktuelle Anschrift Heilbronner Straße 35, 70191 Stuttgart. Ältere Treffer nennen noch die vorherige Anschrift.

Die Quellen dienen der Dokumentation der Erstellung. Sie bestätigen keine individuelle Rechtssicherheit und ersetzen nicht die noch ausstehenden Betriebs- und Vertragsangaben.
