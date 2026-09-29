import { useRef, useState } from 'react'
import './App.css'

function Icon({ name = 'arrow', size = 22 }) {
  const paths = {
    arrow: 'M4 12h15m-6-6 6 6-6 6',
    phone: 'M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z',
    roller: 'M3 3h14v7H3zM17 6h4v8H11v7M9 17h4v5H9z',
    home: 'm3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7',
    layers: 'm12 3 10 6-10 6L2 9l10-6ZM2 13l10 6 10-6M2 17l10 6 10-6',
    photo: 'M3 4h18v16H3zM3 16l6-6 6 6 3-3 3 3M17 8h.01',
    pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

function Brand() {
  return <a className="brand" href="#start" aria-label="Maler Rosenbaum – Startseite"><span className="brand-icon"><Icon name="roller" size={30} /></span><span>ROSENBAUM<small>MALER IN EBERBACH</small></span></a>
}

function PhotoPlaceholder({ title, description, className = '' }) {
  return <div className={`photo-placeholder ${className}`}><Icon name="photo" size={34} /><span className="label">FOTO-PLATZHALTER</span><strong>{title}</strong><p>{description}</p></div>
}

const services = [
  { icon: 'roller', title: 'Malerarbeiten innen', text: 'Ein frischer Anstrich für Wände und Decken. Für helle Räume, kräftige Akzente oder einen neuen Anfang.' },
  { icon: 'home', title: 'Fassadenanstriche', text: 'Neue Farbe für die Außenseite Ihres Hauses. Passend zum Gebäude und zu Ihren Vorstellungen.' },
  { icon: 'layers', title: 'Tapezierarbeiten', text: 'Von der schlichten Wand bis zur besonderen Struktur. Tapeten geben Ihren Räumen einen eigenen Charakter.' },
]

export default function App() {
  const [menu, setMenu] = useState(false)
  const [legal, setLegal] = useState(null)
  const menuButton = useRef(null)
  const closeMenu = () => setMenu(false)

  return <>
    <a className="skip" href="#inhalt">Zum Inhalt springen</a>
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <button ref={menuButton} className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Schließen ×' : 'Menü ☰'}</button>
        <nav id="navigation" className={menu ? 'open' : ''} aria-label="Hauptnavigation" onKeyDown={event => { if (event.key === 'Escape') { closeMenu(); menuButton.current?.focus() } }}>
          <a href="#ueber-uns" onClick={closeMenu}>Über uns</a>
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#einblicke" onClick={closeMenu}>Einblicke</a>
          <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
          <a className="header-phone" href="tel:+4915144341412" onClick={closeMenu}><Icon name="phone" size={17} />01514 4341412</a>
        </nav>
      </div>
    </header>

    <main id="inhalt">
      <section className="hero" id="start" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">MALER ROSENBAUM · EBERBACH</div>
            <h1 id="hero-title">Frische Farbe.<br />Ein gutes<br /><span>Zuhause.</span></h1>
            <p>Sie haben etwas vor. Eine neue Wandfarbe, ein frisches Wohnzimmer oder einen neuen Anstrich fürs Haus. Sprechen wir darüber.</p>
            <a className="button button-white" href="#leistungen">Unsere Leistungen <Icon /></a>
            <a className="hero-contact" href="#kontakt">Ihr Projekt mit uns besprechen <Icon size={18} /></a>
          </div>
          <figure className="hero-photo">
            <img src={`${import.meta.env.BASE_URL}interior.jpg`} width="1800" height="1350" alt="Beispielbild eines Wohnraums – keine Arbeit von Maler Rosenbaum" fetchPriority="high" />
            <figcaption>BEISPIELBILD · DURCH EIGENES PROJEKTFOTO ERSETZEN</figcaption>
            <div className="photo-caption"><span>NEUE FARBE FÜR IHR ZUHAUSE</span><strong>Hier beginnt<br />Veränderung.</strong></div>
          </figure>
        </div>
        <div className="hero-bottom container"><span><Icon name="pin" size={17} /> Eberbach am Neckar</span><span>Direkt erreichbar. Offen für Ihre Ideen.</span><a href="#ueber-uns">Lernen wir uns kennen <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="section container about" id="ueber-uns" aria-labelledby="about-title">
        <PhotoPlaceholder className="portrait" title="Ein Gesicht zum Handwerk." description="Hier kommt ein echtes Foto von Herrn Rosenbaum bei der Arbeit hin." />
        <div className="about-copy">
          <div className="eyebrow">IHR MALER VOR ORT</div>
          <h2 id="about-title">Handwerk mit<br />einer persönlichen Seite.</h2>
          <p className="lead">Ein Zuhause ist mehr als vier Wände. Hier spielt sich das Leben ab.</p>
          <p>Sie möchten etwas verändern? Bei Maler Rosenbaum in Eberbach beginnt Ihr Vorhaben mit einem Gespräch. Erzählen Sie uns, was Ihnen wichtig ist und wie Sie sich Ihr Zuhause vorstellen.</p>
          <div className="content-placeholder"><span className="label">INHALTS-PLATZHALTER</span><p>Hier folgt die persönliche Vorstellung von Herrn Rosenbaum: sein Weg ins Handwerk, seine Erfahrung und was ihm bei der Arbeit wichtig ist.</p></div>
          <a className="text-link" href="#kontakt">Persönlich Kontakt aufnehmen <Icon size={20} /></a>
        </div>
      </section>

      <section className="services-section" id="leistungen" aria-labelledby="services-title">
        <div className="container section">
          <div className="section-heading"><div><div className="eyebrow">RUND UM WAND UND FASSADE</div><h2 id="services-title">Unsere Leistungen.</h2></div><p>Was möchten Sie verändern?<br />Hier ist Platz für das Angebot des Betriebs.</p></div>
          <p className="placeholder-note"><strong>VORSCHLÄGE · BITTE BESTÄTIGEN</strong> Die folgenden Leistungen sind Platzhalter, bis der Betrieb sein Angebot bestätigt hat.</p>
          <div className="services">{services.map(({ icon, title, text }, index) => <article className="service" key={title}><div className="service-top"><Icon name={icon} size={33} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><a href="#kontakt" aria-label={`${title} anfragen`}>Darüber sprechen <Icon size={20} /></a></article>)}</div>
        </div>
      </section>

      <aside className="callout"><div className="container"><div><span className="eyebrow">SCHON EINE IDEE IM KOPF?</span><h2>Dann machen wir den ersten Schritt.</h2></div><a className="button" href="#kontakt">Projekt besprechen <Icon /></a></div></aside>

      <section className="container section" id="einblicke" aria-labelledby="projects-title">
        <div className="section-heading"><div><div className="eyebrow">EINBLICKE INS HANDWERK</div><h2 id="projects-title">Platz für echte Arbeit.</h2></div><p>Hier zeigen wir künftig Projekte<br />von Maler Rosenbaum.</p></div>
        <div className="projects"><PhotoPlaceholder title="Wohnräume & Innenwände" description="Eigenes Projektfoto und kurze Beschreibung ergänzen." /><PhotoPlaceholder title="Fassaden & Außenbereiche" description="Eigenes Projektfoto und kurze Beschreibung ergänzen." /></div>
        <p className="projects-note">Noch keine Referenzen hinterlegt. Die Felder sind bewusst als Platzhalter gekennzeichnet.</p>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="contact-title"><div className="container contact-grid">
        <div className="contact-copy"><div className="eyebrow">LASSEN SIE UNS REDEN</div><h2 id="contact-title">Was steht<br />bei Ihnen an?</h2><p>Ein Zimmer oder ein ganzes Haus – erzählen Sie uns von Ihrem Vorhaben. Am einfachsten direkt am Telefon.</p><a className="button button-white" href="tel:+4915144341412"><Icon name="phone" size={20} />01514 4341412</a></div>
        <div className="contact-details"><div><span className="label">MALER ROSENBAUM</span><h3>Zu Hause in Eberbach.</h3><address>Itterstraße 5<br />69412 Eberbach</address><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Maler+Rosenbaum+Itterstra%C3%9Fe+5+69412+Eberbach" target="_blank" rel="noreferrer">Route planen <Icon size={18} /></a></div><div className="contact-missing"><span className="label">KONTAKTANGABEN · PLATZHALTER</span><p>E-Mail-Adresse: noch zu ergänzen<br />Öffnungszeiten: noch zu ergänzen</p></div></div>
      </div></section>
    </main>

    <footer className="container footer"><div className="footer-row"><Brand /><span>© {new Date().getFullYear()} Maler Rosenbaum</span><div className="legal-buttons"><button aria-expanded={legal === 'impressum'} aria-controls="legal" onClick={() => setLegal(legal === 'impressum' ? null : 'impressum')}>Impressum</button><button aria-expanded={legal === 'datenschutz'} aria-controls="legal" onClick={() => setLegal(legal === 'datenschutz' ? null : 'datenschutz')}>Datenschutz</button></div></div>
      <div id="legal">{legal && <section className="legal-panel" aria-labelledby="legal-title"><h3 id="legal-title">{legal === 'impressum' ? 'Impressum' : 'Datenschutz'} · Platzhalter</h3>{legal === 'impressum' ? <><p>Maler Rosenbaum · Itterstraße 5 · 69412 Eberbach · Telefon: 01514 4341412</p><p>Noch zu ergänzen: vollständiger Name des Inhabers, E-Mail-Adresse und gegebenenfalls weitere erforderliche Unternehmensangaben. Dieser Bereich ist noch kein vollständiges Impressum.</p></> : <p>Hier muss vor Veröffentlichung eine zur tatsächlichen Website und zum Hosting passende Datenschutzerklärung ergänzt werden. Die Vorlage enthält kein Tracking, kein Kontaktformular und keine eingebettete Karte. Das Beispielbild wird lokal bereitgestellt.</p>}</section>}</div>
      <p className="draft-note">Website-Entwurf · Markierte Inhalte und Fotos vor Veröffentlichung ergänzen oder bestätigen.</p>
    </footer>
  </>
}
