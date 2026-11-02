import { contact, emailHref } from './contact'
import './SprayPage.css'

const advantages = [
  ['Zeitersparnis', 'Effizienter maschineller Materialauftrag, insbesondere bei größeren Wand- und Deckenflächen.'],
  ['Professionelle Spritztechnik', 'Leistungsfähige Maschinentechnik nutzen, ohne selbst in eine entsprechende Anlage investieren zu müssen.'],
  ['Know-how und Erfahrung', 'Praktische Erfahrung im Umgang mit moderner Spritztechnik.'],
  ['Flexible Unterstützung', 'Projektbezogener Einsatz direkt auf Ihrer Baustelle.'],
  ['Klare Aufgabenteilung', 'Wir übernehmen den maschinellen Auftrag – Sie die anschließende Oberflächenbearbeitung.'],
]

export default function SprayPage() {
  return <main id="inhalt" className="container spray-page">
    <a className="text-link spray-back" href={`${import.meta.env.BASE_URL}#leistungen`}>← Zu unseren Leistungen</a>
    <div className="spray-hero">
      <div>
        <div className="eyebrow">FÜR FACHBETRIEBE</div>
        <h1>Spritztechnik<br /><span>für Unternehmen</span></h1>
        <p className="spray-tagline">Professionelle Technik. Erfahrung. Effiziente Zusammenarbeit.</p>
        <a className="button" href="#einsatz-anfragen">Jetzt Einsatz anfragen <span aria-hidden="true">→</span></a>
      </div>
      <div className="photo-placeholder accent-blue spray-photo" data-nosnippet="">
        <span className="placeholder-label">FOTO-PLATZHALTER</span>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 4h18v16H3zM3 16l6-6 6 6 3-3 3 3M17 8h.01" /></svg>
        <strong>Unsere Graco-Spritztechnik im Einsatz</strong>
        <p>Hier folgt ein echtes Foto von unserer Baustelle.</p>
      </div>
    </div>

    <section className="spray-intro" aria-labelledby="spray-division">
      <h2 id="spray-division">Wir bringen die Technik – Sie übernehmen die Fertigstellung.</h2>
      <div><p>Mit unserer leistungsfähigen Graco-Spritztechnik bieten wir Fachbetrieben einen flexiblen Service für den maschinellen Auftrag gebrauchsfertiger Spachtelmassen auf Innenwänden und Decken.</p>
        <p>Wir kommen mit unserer Maschine direkt auf Ihre Baustelle und übernehmen den vereinbarten maschinellen Materialauftrag. Das anschließende Abziehen, Glätten und die weitere Oberflächenbearbeitung übernimmt Ihr Betrieb.</p></div>
    </section>

    <section className="spray-benefits" aria-labelledby="spray-benefits-title">
      <h2 id="spray-benefits-title">Ihre Vorteile</h2>
      <ul>{advantages.map(([title, text]) => <li key={title}><span className="spray-check" aria-hidden="true">✓</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ul>
    </section>

    <section className="spray-intro" aria-labelledby="spray-site-title">
      <h2 id="spray-site-title">Unser Service – Ihre Baustelle</h2>
      <p>Unser Angebot richtet sich insbesondere an Malerbetriebe, Trockenbauunternehmen und weitere Fachbetriebe. Ob größere Wandflächen, Decken oder umfangreiche Innenraumprojekte: Wir unterstützen Sie dort, wo maschineller Materialauftrag Ihre Arbeitsabläufe erleichtern kann.</p>
    </section>

    <section className="spray-contact" id="einsatz-anfragen" aria-labelledby="spray-contact-title">
      <h2 id="spray-contact-title">Gemeinsam effizient arbeiten</h2>
      <p>Sie haben die Baustelle – wir haben die Technik und das Know-how.</p>
      <p>Sprechen Sie uns an. Wir stimmen den Einsatz individuell mit Ihnen ab und erstellen Ihnen gerne ein Angebot.</p>
      <div className="spray-contact-actions"><a className="button" href={`${emailHref}?subject=${encodeURIComponent('Einsatzanfrage Spritztechnik')}`}>Jetzt Einsatz anfragen <span aria-hidden="true">→</span></a><a className="text-link" href={contact.phoneHref}>{contact.phone}</a></div>
    </section>
    <p className="spray-draft" data-nosnippet="">Entwurf zur Abstimmung · Veröffentlichung nach Klärung der handwerksrechtlichen Einordnung des Maschinenservices.</p>
  </main>
}
