import { useEffect, useId, useRef, useState } from 'react'
import { emailHref } from './contact'
import './PaintPreview.css'

const colors = [
  { name: 'Waldgrün', hex: '#637653', mood: 'Natürlich & ruhig' },
  { name: 'Sand', hex: '#c5ad85', mood: 'Hell & wohnlich' },
  { name: 'Terrakotta', hex: '#b96b51', mood: 'Warm & lebendig' },
  { name: 'Neckarblau', hex: '#52788f', mood: 'Klar & entspannt' },
]

export default function PaintPreview() {
  const [selected, setSelected] = useState(0)
  const [coverage, setCoverage] = useState(45)
  const [painting, setPainting] = useState(false)
  const frame = useRef(null)
  const id = useId()
  const color = colors[selected]

  function stopPainting() {
    cancelAnimationFrame(frame.current)
    frame.current = null
    setPainting(false)
  }

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    function respectPreference() {
      if (preference.matches && frame.current !== null) {
        cancelAnimationFrame(frame.current)
        frame.current = null
        setPainting(false)
        setCoverage(100)
      }
    }
    preference.addEventListener('change', respectPreference)
    return () => {
      cancelAnimationFrame(frame.current)
      preference.removeEventListener('change', respectPreference)
    }
  }, [])

  function paint() {
    stopPainting()
    if (painting) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCoverage(100)
      return
    }
    setCoverage(0)
    setPainting(true)
    let start
    function tick(time) {
      start ??= time
      const elapsed = Math.min((time - start) / 2200, 1)
      setCoverage((1 - Math.cos(elapsed * Math.PI)) * 50)
      if (elapsed < 1) frame.current = requestAnimationFrame(tick)
      else {
        frame.current = null
        setPainting(false)
      }
    }
    frame.current = requestAnimationFrame(tick)
  }

  const inquiry = `${emailHref}?subject=${encodeURIComponent(`Farbberatung: ${color.name}`)}&body=${encodeURIComponent(`Guten Tag Familie Rosenbaum,\n\nmir gefällt die Farbstudie „${color.name}“ auf Ihrer Webseite. Ich möchte gerne einen passenden Farbton für mein Projekt mit Ihnen besprechen.\n\nMein Vorhaben:\n\nMeine Kontaktdaten:\n`)}`

  return <section className="paint-section container section" id="farbprobe" aria-labelledby={`${id}-title`}>
    <div className="paint-copy">
      <div className="eyebrow">EIN FARBTON. EINE ANDERE WIRKUNG.</div>
      <h2 id={`${id}-title`}>Farbe ausprobieren</h2>
      <p>Wie verändert Farbe einen Raum? Wählen Sie einen Ton und lassen Sie die Walze arbeiten.</p>
      <fieldset className="paint-palette">
        <legend>Ihr Farbton</legend>
        <div className="paint-swatches">{colors.map((option, index) => <button
          key={option.name} type="button" aria-pressed={selected === index}
          onClick={() => { stopPainting(); setSelected(index) }}
          style={{ '--swatch': option.hex }}
        ><span className="paint-swatch" aria-hidden="true">{selected === index ? '✓' : ''}</span><span>{option.name}</span></button>)}</div>
      </fieldset>
      <div className="paint-selection"><strong>{color.name}</strong><span>{color.mood}</span></div>
      <div className="paint-actions">
        <button type="button" className="button paint-start" onClick={paint}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="14" height="7" rx="2" /><path d="M17 6h4v8H11v7" /></svg>
          {painting ? 'Anstrich stoppen' : coverage === 100 ? 'Noch einmal streichen' : 'Wand streichen'}
        </button>
        <button className="paint-reset" type="button" onClick={() => { stopPainting(); setCoverage(0) }}>Zurücksetzen</button>
      </div>
      <a className="text-link paint-inquiry" href={inquiry}>Diesen Farbton besprechen <span aria-hidden="true">↗</span></a>
    </div>

    <div className="paint-preview">
      <div className="paint-room" aria-hidden="true">
        <span className="paint-room-label">IHRE FARBPROBE</span>
        <svg viewBox="0 0 720 440" fill="none">
          <defs>
            <linearGradient id={`${id}-light`} x1="720" y1="0" x2="0" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" stopOpacity=".25" /><stop offset="1" stopColor="#000" stopOpacity=".08" /></linearGradient>
            <linearGradient id={`${id}-floor`} x1="0" y1="310" x2="0" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="#c6af91" /><stop offset="1" stopColor="#e2cfb4" /></linearGradient>
          </defs>
          <path fill="#eae7df" d="M0 0h720v310H0z" />
          <path fill={color.hex} d={`M0 0h${720 * coverage / 100}v310H0z`} />
          <path fill={`url(#${id}-light)`} d="M0 0h720v310H0z" />
          <path fill={`url(#${id}-floor)`} d="M0 310h720v130H0z" />
          <path stroke="#aa8f6d" strokeOpacity=".3" d="m100 310-65 130m215-130-30 130m180-130 10 130m140-130 50 130M0 365h720M0 414h720" />
          <path fill="#faf8f2" d="M0 300h720v12H0z" /><path stroke="#655c4a" strokeOpacity=".15" d="M0 313h720" />
          <path fill="#fff" fillOpacity=".14" d="M540 35h145v235H430z" />
          <rect x="492" y="66" width="116" height="152" rx="1" fill="#202820" fillOpacity=".1" transform="rotate(3 492 66)" />
          <rect x="486" y="59" width="116" height="152" fill="#b2976f" />
          <rect x="493" y="66" width="102" height="138" fill="#f6f2e8" />
          <path fill="#a1aa8b" d="M512 185v-58a32 32 0 0 1 64 0v58z" /><circle cx="553" cy="106" r="14" fill="#d1b77c" /><path stroke="#f6f2e8" strokeWidth="2" d="m528 185 26-66m-17 44-13-24m21 3 18-5" />
          <ellipse cx="360" cy="390" rx="245" ry="24" fill="#eee7d7" />
          <ellipse cx="355" cy="368" rx="191" ry="15" fill="#60513b" fillOpacity=".12" />
          <path stroke="#796044" strokeWidth="10" d="m213 329-7 41m276-41 7 41" />
          <rect x="186" y="245" width="326" height="88" rx="18" fill="#e6dfd1" />
          <rect x="185" y="294" width="328" height="48" rx="12" fill="#d9d0bf" />
          <rect x="170" y="272" width="36" height="70" rx="14" fill="#eee7dc" /><rect x="493" y="272" width="36" height="70" rx="14" fill="#eee7dc" />
          <rect x="221" y="260" width="65" height="51" rx="9" fill="#9eaa8c" transform="rotate(-9 221 260)" /><rect x="408" y="258" width="67" height="51" rx="9" fill="#b79a72" transform="rotate(8 408 258)" />
          <path stroke="#536442" strokeWidth="4" d="M625 314V204m0 64-26-29m26 11 24-31" />
          <path fill="#6d7f55" d="M625 230c-28-5-38-22-31-38 24 5 34 19 31 38Zm0 34c9-28 24-39 41-32-3 23-18 34-41 32Zm-1-47c-13-23-9-44 7-51 14 19 12 37-7 51Z" />
          <path fill="#b58263" d="m602 297 5 48h36l5-48z" /><path fill="#c29273" d="M600 294h50v10h-50z" />
          {coverage > 0 && coverage < 100 && <g transform={`translate(${Math.max(24, Math.min(696, coverage * 7.2))} 100)`}>
            <path stroke="#f8f7f1" strokeWidth="5" strokeLinecap="round" d="M0 78v18h-26v26" />
            <path stroke="#3c4039" strokeWidth="13" strokeLinecap="round" d="M-26 121v39" />
            <rect x="-13" y="-36" width="26" height="116" rx="9" fill="#000" fillOpacity=".15" transform="translate(5 3)" />
            <rect x="-14" y="-38" width="28" height="116" rx="9" fill="#fff" />
            <rect x="-10" y="-34" width="20" height="108" rx="6" fill={color.hex} />
            <path stroke="#fff" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" d="M-5-27v94" />
          </g>}
        </svg>
      </div>
      <div className="paint-slider-panel">
        <div className="paint-slider-heading"><label htmlFor={`${id}-coverage`}>Walze bewegen</label><output htmlFor={`${id}-coverage`} aria-live="off">{Math.round(coverage)} % gestrichen</output></div>
        <input id={`${id}-coverage`} type="range" min="0" max="100" step="1" value={Math.round(coverage)} aria-valuetext={`${Math.round(coverage)} Prozent der Wand in ${color.name}`} onChange={event => { stopPainting(); setCoverage(Number(event.target.value)) }} />
        <div className="paint-slider-ends"><span>Vorher</span><span>Nachher</span></div>
      </div>
      <p className="paint-disclaimer">Illustration · Die Farbdarstellung am Bildschirm kann abweichen.</p>
    </div>
  </section>
}
