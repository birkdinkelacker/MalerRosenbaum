import { contact, emailHref } from './contact'

function Placeholder({ children }) {
  return <div className="legal-placeholder"><strong>Platzhalter · vor Veröffentlichung ergänzen</strong><p>{children}</p></div>
}

function ContactDetails() {
  return <address className="legal-address">{contact.name}<br />{contact.street}<br />{contact.city}<br />Deutschland<br /><br />Telefon: <a href={contact.phoneHref}>{contact.phone}</a><br />E-Mail: <a href={emailHref}>{contact.email}</a></address>
}

function Imprint() {
  return <>
    <section aria-labelledby="anbieter"><h2 id="anbieter">Angaben gemäß § 5 DDG</h2>
      <ContactDetails />
      <Placeholder>Vollständiger bürgerlicher Name des Inhabers oder eingetragener Firmenname, Rechtsform und gegebenenfalls vertretungsberechtigte Person. Die Anschrift oben als ladungsfähige Geschäftsanschrift bestätigen.</Placeholder>
    </section>
    <section aria-labelledby="register"><h2 id="register">Register und Identifikationsnummern</h2>
      <Placeholder>Falls vorhanden: Registerart, Registergericht und Registernummer sowie Umsatzsteuer-Identifikationsnummer nach § 27a UStG und/oder Wirtschafts-Identifikationsnummer nach § 139c AO eintragen. Nicht zutreffende Angaben entfernen. Die persönliche Steuernummer gehört hier nicht hinein.</Placeholder>
    </section>
    <section aria-labelledby="beruf"><h2 id="beruf">Berufsrechtliche Angaben</h2>
      <Placeholder>Zuständige Handwerkskammer mit Anschrift und Website sowie erforderliche Angaben zur Handwerksrolle bestätigen. Soweit § 5 Abs. 1 Nr. 5 DDG anwendbar ist: gesetzliche Berufsbezeichnung, Verleihungsstaat und berufsrechtliche Regelungen mit Fundstelle ergänzen. Falls eine behördliche Zulassung erforderlich ist, auch die zuständige Aufsichtsbehörde angeben. Keine unbestätigte Meisterbezeichnung verwenden.</Placeholder>
    </section>
    <section aria-labelledby="streitbeilegung"><h2 id="streitbeilegung">Verbraucherstreitbeilegung</h2>
      <Placeholder>Die Erklärung nach § 36 VSBG anhand der tatsächlichen Teilnahmebereitschaft oder -pflicht ergänzen. Bei Teilnahme die zuständige Verbraucherschlichtungsstelle mit Anschrift und Website nennen. Die Ausnahme für Unternehmen mit höchstens zehn Beschäftigten am 31. Dezember des Vorjahres bei § 36 Abs. 1 Nr. 1 VSBG berücksichtigen.</Placeholder>
    </section>
  </>
}

function Privacy() {
  return <>
    <p>Diese Datenschutzerklärung erläutert die Verarbeitung personenbezogener Daten beim Besuch unserer Website und bei der Kontaktaufnahme mit uns.</p>
    <section aria-labelledby="verantwortlicher"><h2 id="verantwortlicher">1. Verantwortlicher und Kontakt</h2>
      <ContactDetails />
      <Placeholder>Vollständigen Namen bzw. rechtsverbindliche Firmenbezeichnung des Verantwortlichen und gegebenenfalls dessen gesetzlichen Vertreter ergänzen; identisch zum Impressum. Falls ein Datenschutzbeauftragter benannt ist, dessen Kontaktdaten ergänzen, andernfalls diesen Hinweis entfernen.</Placeholder>
    </section>
    <section aria-labelledby="hosting"><h2 id="hosting">2. Bereitstellung der Website durch Netlify</h2>
      <p>Unsere Website wird über Netlify bereitgestellt. Anbieter ist Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA. Beim Aufruf werden technische Verbindungsdaten verarbeitet, damit die angeforderten Seiten und Dateien an Ihren Browser ausgeliefert werden können.</p>
      <p>Dazu gehören insbesondere Ihre IP-Adresse, Zeitpunkt und Ziel des Abrufs sowie technische Angaben des Browsers. Abhängig von der Hosting-Konfiguration können weitere Zugriffs- und Fehlerdaten protokolliert werden. Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung, der Fehlerbehebung und der Abwehr von Missbrauch. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist der sichere Betrieb unseres Internetauftritts.</p>
      <p>Empfänger sind Netlify und die für die Bereitstellung eingesetzten Dienstleister. Dabei kann eine Verarbeitung in den USA und weiteren Ländern außerhalb des Europäischen Wirtschaftsraums stattfinden. Informationen zum Anbieter und seinen Dienstleistern finden Sie im <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Datenschutzhinweis von Netlify</a> und im <a href="https://www.netlify.com/trust-center/" target="_blank" rel="noreferrer">Netlify Trust Center</a>.</p>
      <Placeholder>Den für dieses Projekt geltenden Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO prüfen und bestätigen. Tatsächlich erfasste Protokolldaten, Löschfristen und genutzte Netlify-Funktionen (z. B. Analytics, Observability, Sicherheitsdienste oder Log-Weiterleitungen) konkret ergänzen. Datenübermittlung: anwendbare Grundlage nach Art. 44 ff. DSGVO, Empfängerländer und ggf. Garantien samt Bezugsquelle bestätigen, z. B. einen gültigen Angemessenheitsbeschluss mit passender DPF-Zertifizierung oder vereinbarte EU-Standardvertragsklauseln. Ein Vertragsabschluss oder eine Zertifizierung wird hier nicht als geprüft behauptet.</Placeholder>
    </section>
    <section aria-labelledby="kontakt-datenschutz"><h2 id="kontakt-datenschutz">3. Kontakt per E-Mail oder Telefon</h2>
      <p>Wenn Sie uns unter <a href={emailHref}>{contact.email}</a> schreiben oder anrufen, verarbeiten wir Ihre Kontaktdaten und die von Ihnen mitgeteilten Angaben, um Ihre Anfrage zu beantworten und gegebenenfalls ein Angebot oder einen Auftrag vorzubereiten. Bei E-Mails gehören dazu auch Betreff, Nachricht, Anhänge sowie Versand- und Empfangsdaten.</p>
      <p>Bei Anfragen zu einem Vertrag oder vorvertraglichen Maßnahmen ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Andere Anfragen bearbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse besteht darin, Anliegen verlässlich zu beantworten. Soweit gesetzliche Aufbewahrungspflichten bestehen, gilt zusätzlich Art. 6 Abs. 1 lit. c DSGVO.</p>
      <p>Unser E-Mail-Postfach wird bei GMX betrieben. GMX ist ein Angebot der 1&1 Mail &amp; Media GmbH, Zweigniederlassung Karlsruhe, Brauerstraße 48, 76135 Karlsruhe, Deutschland. Der Anbieter verarbeitet die für Empfang, Speicherung und Versand erforderlichen E-Mail-Daten. Weitere Angaben finden Sie in den <a href="https://agb-server.gmx.net/datenschutz" target="_blank" rel="noreferrer">Datenschutzhinweisen von GMX</a>.</p>
      <p>Die Kontaktaufnahme ist freiwillig. Ohne eine Rückkontaktmöglichkeit und die für Ihr Anliegen nötigen Informationen können wir Ihre Anfrage unter Umständen nicht beantworten. Der E-Mail-Link öffnet Ihr eigenes E-Mail-Programm; auf dieser Website gibt es kein Kontaktformular.</p>
      <Placeholder>Den konkreten GMX-Tarif und Vertragspartner, die datenschutzrechtliche Rollenverteilung und einen ggf. erforderlichen Auftragsverarbeitungsvertrag bestätigen. Löschfristen für Anfragen, Postfach und Sicherungskopien sowie etwaige weitere Empfänger oder Drittlandübermittlungen mit Grundlage und Garantien ergänzen. Auch zusätzliche Postfachfunktionen, Weiterleitungen und externe Archivierung berücksichtigen, falls genutzt.</Placeholder>
    </section>
    <section aria-labelledby="domain"><h2 id="domain">4. Domainverwaltung und DNS</h2>
      <p>Die Domain wird über GMX verwaltet. Das Hosting der Website erfolgt über Netlify. Für das Auflösen einer Domain in eine Serveradresse werden DNS-Dienste benötigt; diese können technische Anfragedaten verarbeiten. Die Domainregistrierung allein bedeutet nicht, dass GMX die Inhalte dieser Website ausliefert.</p>
      <Placeholder>Vertragspartner des Domainpakets und den tatsächlich verwendeten DNS-Anbieter anhand der Nameserver prüfen. Soweit dort personenbezogene Besucherdaten verarbeitet werden: Datenarten, Zweck, berechtigtes Interesse bzw. andere Rechtsgrundlage, Empfänger, Speicherfrist und ggf. Drittlandübermittlung ergänzen. Die zuständige Registrierungsstelle verarbeitet daneben Daten des Domaininhabers; diese nicht mit Besucherdaten gleichsetzen.</Placeholder>
    </section>
    <section aria-labelledby="cookies"><h2 id="cookies">5. Cookies, Analyse und externe Inhalte</h2>
      <p>Im Seitencode werden keine Analyse- oder Werbedienste eingebunden und keine Cookies, Local-Storage- oder Session-Storage-Einträge zur Wiedererkennung gesetzt. Bilder werden über unsere Website geladen; die Schrift verwendet die auf Ihrem Gerät verfügbaren Systemschriften. Es werden keine externen Schriftanbieter, Videos oder Karten eingebettet.</p>
      <p>Der Link „Route planen“ öffnet Google Maps erst nach Ihrem Klick. Sie verlassen damit unsere Website. Die weitere Datenverarbeitung richtet sich nach den <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzhinweisen von Google</a>. Das gilt entsprechend für andere externe Links; deren Inhalte werden nicht automatisch in diese Seite geladen.</p>
      <Placeholder>Die produktive Netlify-Konfiguration auf zusätzlich aktivierte Analysen, Skripte und Sicherheits-Cookies prüfen. Falls solche Dienste verwendet werden, diesen Abschnitt um die tatsächlichen Verarbeitungen ergänzen und erforderliche Einwilligungen vor dem Laden einholen. Der Stand des Seitencodes allein bestätigt keine Hosting-Einstellungen.</Placeholder>
    </section>
    <section aria-labelledby="speicherung"><h2 id="speicherung">6. Speicherdauer</h2>
      <p>Wir speichern personenbezogene Daten nur so lange, wie sie für den jeweiligen Zweck benötigt werden. Erledigte Anfragen werden gelöscht, sobald keine gesetzlichen Aufbewahrungspflichten oder sonstigen rechtlichen Gründe mehr entgegenstehen. Unterlagen, die gesetzlichen Aufbewahrungspflichten unterliegen, werden für die jeweilige gesetzliche Frist aufbewahrt und anschließend gelöscht.</p>
      <Placeholder>Das tatsächliche Löschkonzept ergänzen: konkrete Fristen bzw. nachvollziehbare Kriterien für Kontaktanfragen, Geschäftsunterlagen und Sicherungskopien. Die gesonderten Fristen für Hosting- und DNS-Protokolle sowie das E-Mail-Postfach in den Abschnitten oben eintragen. Keine pauschale Frist ohne Abgleich mit den Verträgen und betrieblichen Abläufen übernehmen.</Placeholder>
    </section>
    <section aria-labelledby="rechte"><h2 id="rechte">7. Ihre Rechte</h2>
      <p>Unter den gesetzlichen Voraussetzungen haben Sie folgende Rechte:</p>
      <ul><li>Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO),</li><li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO),</li><li>Löschung und Einschränkung der Verarbeitung (Art. 17 und 18 DSGVO),</li><li>Datenübertragbarkeit bei einer auf Einwilligung oder Vertrag beruhenden automatisierten Verarbeitung (Art. 20 DSGVO),</li><li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO); die Rechtmäßigkeit der vorherigen Verarbeitung bleibt unberührt.</li></ul>
      <p><strong>Widerspruchsrecht:</strong> Gegen eine Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO können Sie aus Gründen Ihrer besonderen Situation Widerspruch einlegen (Art. 21 DSGVO). Wir verarbeiten die betreffenden Daten dann nicht weiter, außer wir können vorrangige zwingende schutzwürdige Gründe nachweisen oder benötigen sie für Rechtsansprüche. Gegen Direktwerbung können Sie jederzeit ohne Begründung widersprechen.</p>
      <p>Für die Ausübung Ihrer Rechte erreichen Sie uns unter <a href={emailHref}>{contact.email}</a> oder über die oben genannte Anschrift. Die Website nutzt keine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO.</p>
    </section>
    <section aria-labelledby="beschwerde"><h2 id="beschwerde">8. Beschwerderecht</h2>
      <p>Sie können sich gemäß Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren, insbesondere am Ort Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des vermuteten Verstoßes. Für Unternehmen mit Sitz in Baden-Württemberg ist grundsätzlich der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg zuständig.</p>
      <p>Heilbronner Straße 35, 70191 Stuttgart.<br /><a href="https://www.baden-wuerttemberg.datenschutz.de/beschwerde/" target="_blank" rel="noreferrer">Beschwerde und Kontakt zur Aufsichtsbehörde</a></p>
    </section>
  </>
}

export default function LegalPage({ page }) {
  const isImprint = page === 'impressum'
  return <main id="inhalt" className="container legal-page">
    <a className="text-link legal-back" href={`${import.meta.env.BASE_URL}#start`}>← Zur Startseite</a>
    <div className="eyebrow">RECHTLICHE INFORMATIONEN</div>
    <h1>{isImprint ? 'Impressum' : <>Datenschutz&shy;erklärung</>}</h1>
    <p className="legal-date">Stand: 24. Oktober 2026</p>
    <aside className="legal-draft" aria-label="Hinweis zum Entwurf"><strong>Entwurf mit offenen Angaben</strong><p>Die markierten Platzhalter müssen vor der endgültigen Veröffentlichung ergänzt oder, falls nicht zutreffend, entfernt werden. Die Angaben sind mit dem Betrieb und den tatsächlich eingesetzten Diensten abzugleichen. Dieser Entwurf ersetzt keine rechtliche Prüfung.</p></aside>
    {isImprint ? <Imprint /> : <Privacy />}
    <div className="legal-bottom"><a className="text-link" href={`${import.meta.env.BASE_URL}${isImprint ? 'datenschutz' : 'impressum'}.html`}>{isImprint ? 'Zur Datenschutzerklärung' : 'Zum Impressum'} →</a></div>
  </main>
}
