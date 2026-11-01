import { contact, emailHref } from './contact'

function Placeholder({ children }) {
  return <div className="legal-placeholder" data-nosnippet=""><strong>Noch zu ergänzende Angabe</strong><p>{children}</p></div>
}

function ContactDetails() {
  return <address className="legal-address">{contact.legalName}<br />Inhaber: {contact.owner}<br />{contact.street}<br />{contact.city}<br />Deutschland<br /><br />Telefon: <a href={contact.phoneHref}>{contact.phone}</a><br />E-Mail: <a href={emailHref}>{contact.email}</a></address>
}

function Imprint() {
  return <>
    <section aria-labelledby="anbieter"><h2 id="anbieter">Angaben gemäß § 5 DDG</h2><ContactDetails /></section>
    <section aria-labelledby="identifikation"><h2 id="identifikation">Wirtschafts-Identifikationsnummer</h2>
      <p>Wirtschafts-Identifikationsnummer gemäß § 139c AO: <strong>{contact.businessId}</strong></p>
    </section>
    <section aria-labelledby="weitere-angaben"><h2 id="weitere-angaben">Weitere Unternehmensangaben</h2>
      <Placeholder>Eine gegebenenfalls zusätzlich vorhandene Umsatzsteuer-Identifikationsnummer und etwaige Registerangaben sind noch zu bestätigen. Angaben zur zuständigen Handwerkskammer sowie gegebenenfalls erforderliche berufsrechtliche Angaben sind noch zu ergänzen.</Placeholder>
      <Placeholder>Eine gegebenenfalls erforderliche Erklärung zur Teilnahme an Verbraucherstreitbeilegungsverfahren nach § 36 VSBG ist noch anhand der betrieblichen Verhältnisse zu ergänzen.</Placeholder>
    </section>
  </>
}

function Privacy() {
  return <>
    <p>Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten beim Besuch unserer Website und bei einer Kontaktaufnahme verarbeitet werden. Die Website verwendet kein Tracking, keine Analyse- oder Werbedienste und kein Kontaktformular.</p>
    <section aria-labelledby="verantwortlicher"><h2 id="verantwortlicher">1. Verantwortlicher</h2><ContactDetails /></section>
    <section aria-labelledby="allgemeines"><h2 id="allgemeines">2. Allgemeines zur Datenverarbeitung</h2>
      <p>Wir verarbeiten personenbezogene Daten, soweit dies für die Bereitstellung und Sicherheit dieser Website, die Bearbeitung von Anfragen oder die Erfüllung gesetzlicher Pflichten erforderlich ist. Je nach Zweck erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen). Die jeweils maßgeblichen Zwecke und Rechtsgrundlagen sind nachfolgend beschrieben.</p>
      <p>Die Verbindung zur Website ist durch HTTPS verschlüsselt. Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet durch diese Website nicht statt.</p>
    </section>
    <section aria-labelledby="hosting"><h2 id="hosting">3. Website-Aufruf und Hosting bei Netlify</h2>
      <p>Unsere Website wird bei Netlify gehostet. Anbieter ist Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA. Netlify liefert die Seiten und Dateien über seine technische Infrastruktur aus.</p>
      <p>Beim Aufruf werden insbesondere die IP-Adresse, Datum und Uhrzeit, die angeforderte Seite oder Datei sowie technische Angaben zu Browser und Verbindung verarbeitet. Zur Fehlerbehebung und zur Abwehr von Missbrauch können technische Zugriffs- und Fehlerprotokolle anfallen. Diese Verarbeitung ist auch ohne Tracking erforderlich, um die Website sicher und zuverlässig bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse besteht im funktionsfähigen und sicheren Betrieb der Website.</p>
      <p>Netlify verarbeitet Hostingdaten als technischer Dienstleister. Netlify stellt dafür einen Vertrag zur Auftragsverarbeitung (Data Processing Agreement, DPA) bereit, der nach Angaben des Anbieters in seine Vertragsbedingungen einbezogen ist. Informationen hierzu finden Sie unter <a href="https://www.netlify.com/gdpr-ccpa/" target="_blank" rel="noreferrer">Netlify – Datenschutz und Auftragsverarbeitung</a>.</p>
      <p>Technische Daten werden für die Auslieferung der Inhalte sowie, soweit erforderlich, zur Untersuchung von Störungen oder Sicherheitsvorfällen verarbeitet. Für Protokolle gelten die Speicher- und Löschregeln des Hostingdienstes. Es erfolgt keine Auswertung des Besucherverhaltens durch uns zu Analyse- oder Werbezwecken.</p>
      <Placeholder>Die für dieses Netlify-Projekt geltende konkrete Speicherfrist der technischen Zugriffs- und Sicherheitsprotokolle ist noch zu bestätigen.</Placeholder>
    </section>
    <section aria-labelledby="kontakt-datenschutz"><h2 id="kontakt-datenschutz">4. Kontaktaufnahme per E-Mail oder Telefon</h2>
      <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben, insbesondere Name, Kontaktdaten und Inhalt der Anfrage. Bei E-Mails gehören hierzu auch Betreff, Anhänge sowie Versand- und Empfangsdaten. Die Verarbeitung dient dazu, Ihr Anliegen zu bearbeiten und gegebenenfalls ein Angebot oder einen Auftrag vorzubereiten.</p>
      <p>Bei vertraglichen oder vorvertraglichen Anfragen ist Art. 6 Abs. 1 lit. b DSGVO die Rechtsgrundlage. Sonstige Anfragen bearbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist die Beantwortung Ihres Anliegens. Für gesetzliche Aufbewahrungspflichten gilt Art. 6 Abs. 1 lit. c DSGVO.</p>
      <p>Unser E-Mail-Postfach und unsere Domain werden über GMX betrieben bzw. verwaltet. GMX ist ein Angebot der 1&amp;1 Mail &amp; Media GmbH, Elgendorfer Straße 57, 56410 Montabaur, mit der Zweigniederlassung Karlsruhe, Brauerstraße 48, 76135 Karlsruhe, Deutschland. Der E-Mail-Anbieter verarbeitet die zum Empfang, zur Speicherung, zur Sicherheit und zum Versand von Nachrichten erforderlichen Daten. Näheres erläutern die <a href="https://agb-server.gmx.net/datenschutz" target="_blank" rel="noreferrer">Datenschutzhinweise von GMX</a>. Das Hosting der Website erfolgt unabhängig davon bei Netlify.</p>
      <p>Die Kontaktaufnahme ist freiwillig. Ohne die für Ihr Anliegen erforderlichen Angaben können wir Ihre Anfrage unter Umständen nicht beantworten. Der E-Mail-Link öffnet Ihr eigenes E-Mail-Programm; es gibt kein Kontaktformular auf unserer Website.</p>
      <p>Kontaktanfragen werden gelöscht, sobald das Anliegen abschließend bearbeitet ist und die Daten nicht mehr für die Vertragsabwicklung, gesetzliche Aufbewahrungspflichten oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden. Aufbewahrungspflichtige Geschäftsunterlagen werden bis zum Ablauf der jeweiligen gesetzlichen Frist gespeichert.</p>
    </section>
    <section aria-labelledby="cookies"><h2 id="cookies">5. Cookies, Tracking und externe Inhalte</h2>
      <p>Diese Website setzt keine Analyse- oder Werbedienste, Tracking-Pixel oder vergleichbare Verfahren zur Nachverfolgung von Besuchern ein. Es werden durch die Website keine Cookies oder Einträge in Local Storage bzw. Session Storage gesetzt. Die Scroll-Animation verarbeitet lediglich die aktuelle Scrollposition im Browser; diese wird weder gespeichert noch an einen Server übermittelt.</p>
      <p>Bilder und die für die Website erforderlichen Dateien werden über unser Hosting ausgeliefert. Es werden Systemschriften verwendet. Externe Schriftarten, Karten, Videos, Social-Media-Inhalte oder Captchas sind nicht eingebettet.</p>
      <p>„Route planen“ ist ein externer Link zu Google Maps. Erst wenn Sie diesen Link öffnen, verlassen Sie unsere Website und rufen den Dienst von Google auf. Die weitere Verarbeitung richtet sich nach den <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">Datenschutzhinweisen von Google</a>. Auch die übrigen externen Links laden die verlinkten Seiten erst nach dem Öffnen.</p>
    </section>
    <section aria-labelledby="empfaenger"><h2 id="empfaenger">6. Empfänger und Übermittlungen in Drittländer</h2>
      <p>Empfänger personenbezogener Daten sind insbesondere die oben genannten Hosting- und Kommunikationsdienstleister sowie deren für die Leistungserbringung eingesetzte Unterauftragnehmer. Eine Weitergabe erfolgt, soweit sie für die genannten Zwecke erforderlich ist oder eine gesetzliche Verpflichtung besteht.</p>
      <p>Bei Netlify kann eine Verarbeitung in den USA und weiteren Ländern außerhalb des Europäischen Wirtschaftsraums stattfinden. Netlifys DPA sieht für erfasste Übermittlungen in die USA das EU-U.S. Data Privacy Framework vor; soweit dessen Voraussetzungen nicht vorliegen, sieht es EU-Standardvertragsklauseln vor. Die Übermittlungsregeln und Garantien sind in Abschnitt 14 des <a href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank" rel="noreferrer">Netlify-DPA</a> beschrieben. Weitere Informationen zu Unterauftragnehmern und Schutzmaßnahmen stehen im <a href="https://www.netlify.com/trust-center/" target="_blank" rel="noreferrer">Netlify Trust Center</a>.</p>
      <p>Sie können sich über die oben angegebenen Kontaktdaten an uns wenden, um weitere Informationen zu den für Ihre Daten geltenden Garantien zu erhalten.</p>
    </section>
    <section aria-labelledby="rechte"><h2 id="rechte">7. Ihre Rechte</h2>
      <p>Unter den gesetzlichen Voraussetzungen haben Sie folgende Rechte:</p>
      <ul><li>Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO),</li><li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO),</li><li>Löschung (Art. 17 DSGVO),</li><li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li><li>Datenübertragbarkeit bei einer auf Einwilligung oder Vertrag beruhenden automatisierten Verarbeitung (Art. 20 DSGVO).</li></ul>
      <p><strong>Widerspruchsrecht:</strong> Bei Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO können Sie aus Gründen Ihrer besonderen Situation Widerspruch einlegen (Art. 21 DSGVO). Die Verarbeitung wird dann eingestellt, sofern keine zwingenden schutzwürdigen Gründe überwiegen oder die Verarbeitung für Rechtsansprüche erforderlich ist. Gegen eine Verarbeitung für Direktwerbung können Sie jederzeit ohne Angabe von Gründen widersprechen.</p>
      <p>Eine gegebenenfalls erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt. Zur Ausübung Ihrer Rechte erreichen Sie uns unter <a href={emailHref}>{contact.email}</a> oder über die oben angegebene Anschrift.</p>
      <p>Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, insbesondere am Ort Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des vermuteten Verstoßes. Sie können sich unter anderem an den <a href="https://www.baden-wuerttemberg.datenschutz.de/beschwerde/" target="_blank" rel="noreferrer">Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg</a> wenden.</p>
    </section>
    <section aria-labelledby="aktualisierung"><h2 id="aktualisierung">8. Aktualisierung</h2>
      <p>Wir passen diese Datenschutzerklärung an, wenn sich die Datenverarbeitung auf unserer Website oder die rechtlichen Anforderungen ändern.</p>
    </section>
  </>
}

export default function LegalPage({ page }) {
  const isImprint = page === 'impressum'
  return <main id="inhalt" className="container legal-page">
    <a className="text-link legal-back" href={`${import.meta.env.BASE_URL}#start`}>← Zur Startseite</a>
    <div className="eyebrow">RECHTLICHE INFORMATIONEN</div>
    <h1>{isImprint ? 'Impressum' : <>Datenschutz&shy;erklärung</>}</h1>
    <p className="legal-date">Stand: 1. November 2026</p>
    {isImprint ? <Imprint /> : <Privacy />}
    <div className="legal-bottom"><a className="text-link" href={`${import.meta.env.BASE_URL}${isImprint ? 'datenschutz' : 'impressum'}.html`}>{isImprint ? 'Zur Datenschutzerklärung' : 'Zum Impressum'} →</a></div>
  </main>
}
