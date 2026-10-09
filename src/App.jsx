import { useRef, useState } from 'react'
import './App.css'

const treeImage = `${import.meta.env.BASE_URL}rosenbaum-tree.png`

function Icon({ name = 'arrow', size = 22 }) {
  const paths = {
    arrow: 'M4 12h15m-6-6 6 6-6 6',
    phone: 'M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z',
    roller: 'M3 3h14v7H3zM17 6h4v8H11v7M9 17h4v5H9z',
    room: 'm3 6 9-4 9 4v12l-9 4-9-4V6Zm9-4v12m-9 4 9-4 9 4',
    home: 'm3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7',
    layers: 'm12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5',
    wallpaper: 'M7 3h11a3 3 0 0 1 0 6h-2M7 3a3 3 0 0 0-3 3v12h12V6a3 3 0 0 1 2-3M4 18a3 3 0 0 1 0 6h12v-6',
    photo: 'M3 4h18v16H3zM3 16l6-6 6 6 3-3 3 3M17 8h.01',
    pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
    check: 'm5 12 4 4L19 6',
    heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

function ColorLine({ className = '' }) {
  return <span className={`color-line ${className}`} aria-hidden="true"><i /><i /><i /></span>
}

function Brand() {
  return <a className="brand" href="#start" aria-label="MR Rosenbaum – Startseite"><img src={treeImage} alt="" width="62" height="62" /><span className="brand-type"><span><b>MR</b> ROSENBAUM</span><small>RAUM · WAND · FASSADE · BODEN</small><ColorLine /></span></a>
}

function PhotoPlaceholder({ title, description = 'Hier folgt ein echtes Baustellenfoto.', className = '' }) {
  return <div className={`photo-placeholder ${className}`}><span className="placeholder-label">FOTO-PLATZHALTER</span><Icon name="photo" size={36} /><strong>{title}</strong><p>{description}</p></div>
}

const services = [
  { icon: 'room', title: 'Wand & Decke', text: 'Raumgestaltung, Spachteltechniken und kreative Oberflächen – individuell für Ihre Räume.', color: 'red' },
  { icon: 'roller', title: 'Farbe & Oberflächen', text: 'Anstriche, Lackierarbeiten und dekorative Gestaltung für Innenräume und Außenbereiche.', color: 'yellow' },
  { icon: 'home', title: 'Fassade', text: 'Fassadengestaltung und Schutzanstriche für den Werterhalt Ihres Gebäudes.', color: 'blue' },
  { icon: 'layers', title: 'Bodenbeläge', text: 'Vinyl, Designböden, Parkett und Laminat – die passende Grundlage für Ihr Zuhause.', color: 'red' },
  { icon: 'wallpaper', title: 'Tapeten', text: 'Moderne Tapeten, individuelle Designs und professionelle Verarbeitung.', color: 'yellow' },
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
          <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
          <a href="#ueber-uns" onClick={closeMenu}>Familienbetrieb</a>
          <a href="#einblicke" onClick={closeMenu}>Einblicke</a>
          <a className="nav-contact" href="#kontakt" onClick={closeMenu}>Kontakt aufnehmen <Icon size={18} /></a>
        </nav>
      </div>
    </header>

    <main id="inhalt">
      <section className="hero container" id="start" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dash" /> IHR MALER & FAMILIENBETRIEB IN EBERBACH</div>
          <h1 id="hero-title">Lebensräume<br />gestalten.<br /><span>Werte erhalten.</span></h1>
          <p>Von der ersten Farbidee bis zum fertigen Raum.<br className="desktop-break" /> Wir bringen Farbe und Handwerk in Ihr Zuhause.</p>
          <div className="hero-actions"><a className="button" href="#kontakt">Ihr Projekt besprechen <Icon size={20} /></a><a className="text-link" href="#leistungen">Leistungen entdecken <span aria-hidden="true">↓</span></a></div>
          <div className="hero-note"><Icon name="pin" size={17} /> Eberbach am Neckar <span>Für Privat- und Gewerbekunden</span></div>
        </div>
        <figure className="hero-brand"><img src={treeImage} alt="Der Rosenbaum: silberner Baum mit Pinsel und Spachtel sowie roten, gelben und blauen Blättern" width="1322" height="1190" fetchPriority="high" /><figcaption><span className="hero-wordmark"><b>MR</b> ROSENBAUM</span><span>RAUM · WAND · FASSADE · BODEN</span><ColorLine /><span className="family-signature">Familienbetrieb <Icon name="heart" size={22} /></span></figcaption></figure>
      </section>

      <section className="services-section container section" id="leistungen" aria-labelledby="services-title">
        <div className="section-heading"><div><div className="eyebrow">UNSER HANDWERK</div><h2 id="services-title">Alles für Ihre Räume.</h2></div><p>Fünf Bereiche. Viele Möglichkeiten.</p></div>
        <div className="services">{services.map(({ icon, title, text, color }) => <article className={`service accent-${color}`} key={title}><div className="service-icon"><Icon name={icon} size={29} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="family-section container section" id="ueber-uns" aria-labelledby="about-title">
        <div className="family-intro"><div className="eyebrow">PERSÖNLICH. VON ANFANG AN.</div><h2 id="about-title">Handwerk mit Herz.<br /><span>Ein Familienbetrieb.</span></h2><ColorLine /></div>
        <div className="family-copy"><p>Wir sind Maler Rosenbaum aus Eberbach. Als Familienbetrieb nehmen wir Ihr Zuhause persönlich – mit einem offenen Ohr für Ihre Wünsche und Freude an guter Arbeit.</p><ul className="family-values"><li><Icon name="check" size={18} /> Persönliche Beratung</li><li><Icon name="check" size={18} /> Saubere, zuverlässige Ausführung</li><li><Icon name="check" size={18} /> Hochwertige Materialien</li></ul><a className="text-link" href="#kontakt">Lernen wir uns kennen <Icon size={18} /></a></div>
      </section>

      <section className="container section projects-section" id="einblicke" aria-labelledby="projects-title">
        <div className="section-heading"><div><div className="eyebrow">EINBLICKE IN UNSERE ARBEIT</div><h2 id="projects-title">Hier wird Neues entstehen.</h2></div><p>Platz für unsere nächsten Baustellenbilder.</p></div>
        <div className="projects"><PhotoPlaceholder title="Räume & Oberflächen" className="accent-red" /><PhotoPlaceholder title="Fassaden & Außenbereiche" className="accent-yellow" /><PhotoPlaceholder title="Böden & Details" className="accent-blue" /></div>
      </section>

      <section className="contact container section" id="kontakt" aria-labelledby="contact-title">
        <div className="contact-copy"><div className="eyebrow">IHR PROJEKT BEGINNT MIT EINEM GESPRÄCH</div><h2 id="contact-title">Was dürfen wir<br />für Sie gestalten?</h2><p>Erzählen Sie uns von Ihrer Idee.<br />Wir freuen uns darauf, Sie kennenzulernen.</p><a className="button" href="tel:+4915144341412"><Icon name="phone" size={19} />01514 4341412</a></div>
        <div className="contact-details"><div><span className="label">MALER ROSENBAUM · FAMILIENBETRIEB</span><address>Itterstraße 5<br />69412 Eberbach</address><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Maler+Rosenbaum+Itterstra%C3%9Fe+5+69412+Eberbach" target="_blank" rel="noreferrer">Route planen <Icon size={17} /></a></div><div className="contact-missing"><span className="placeholder-label">NOCH ZU ERGÄNZEN</span><p>E-Mail-Adresse & Öffnungszeiten</p></div></div>
      </section>
    </main>

    <footer className="footer"><div className="container"><ColorLine className="footer-color-line" /><div className="footer-row"><Brand /><span>© {new Date().getFullYear()} Maler Rosenbaum</span><div className="legal-buttons"><button aria-expanded={legal === 'impressum'} aria-controls="legal" onClick={() => setLegal(legal === 'impressum' ? null : 'impressum')}>Impressum</button><button aria-expanded={legal === 'datenschutz'} aria-controls="legal" onClick={() => setLegal(legal === 'datenschutz' ? null : 'datenschutz')}>Datenschutz</button></div></div>
      <div id="legal">{legal && <section className="legal-panel" aria-labelledby="legal-title"><h3 id="legal-title">{legal === 'impressum' ? 'Impressum' : 'Datenschutz'} · Platzhalter</h3>{legal === 'impressum' ? <><p>Maler Rosenbaum · Itterstraße 5 · 69412 Eberbach · Telefon: 01514 4341412</p><p>Inhaber laut Gestaltungsvorlage: Maximilian Rosenbaum – vor Veröffentlichung bestätigen. E-Mail-Adresse und gegebenenfalls weitere erforderliche Unternehmensangaben ergänzen. Dieser Bereich ist noch kein vollständiges Impressum.</p></> : <p>Hier muss vor Veröffentlichung eine zur tatsächlichen Website und zum Hosting passende Datenschutzerklärung ergänzt werden. Die Vorlage enthält kein Tracking, kein Kontaktformular und keine eingebettete Karte. Bilder und Schriften werden lokal bereitgestellt.</p>}</section>}</div>
      <p className="draft-note">Website-Entwurf · Baustellenfotos und offene Angaben folgen.</p>
    </div></footer>
  </>
}
