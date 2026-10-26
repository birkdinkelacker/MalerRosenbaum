import { useEffect, useRef } from 'react'
import './ScrollPaint.css'

export default function ScrollPaint({ children }) {
  const surface = useRef(null)

  useEffect(() => {
    const element = surface.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = null

    function update() {
      frame = null
      const viewport = window.innerHeight
      const top = element.getBoundingClientRect().top
      // One pass follows the section from the bottom into the middle of the screen.
      const progress = preference.matches ? 1 : Math.max(0, Math.min(1, (viewport * .85 - top) / (viewport * .5)))
      element.style.setProperty('--paint-progress', progress)
      element.style.setProperty('--roller-opacity', preference.matches ? 0 : Math.min(1, (1 - progress) * 12))
    }

    function schedule() {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    preference.addEventListener('change', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      preference.removeEventListener('change', schedule)
    }
  }, [])

  return <div className="scroll-paint" ref={surface} id="farbprobe">
    <div className="scroll-paint-decoration" aria-hidden="true">
      <div className="scroll-paint-coat" />
      <svg className="scroll-paint-roller" viewBox="0 0 100 190" preserveAspectRatio="none" fill="none">
        <path d="M66 126v15H24v22" stroke="#525b4d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M66 126v15H24v22" stroke="#c8cec3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="155" width="16" height="31" rx="6" fill="#365823" />
        <path d="M21 162v15" stroke="#fff" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round" />
        <rect x="55" y="8" width="30" height="124" rx="8" fill="#293d23" fillOpacity=".1" />
        <rect x="50" y="5" width="30" height="124" rx="8" fill="#d5ddcc" />
        <rect x="54" y="7" width="23" height="120" rx="6" fill="#71855d" />
        <path d="M59 14v106" stroke="#dce5d3" strokeWidth="4" strokeLinecap="round" />
        <path d="M73 14v106" stroke="#365823" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
    <div className="section-heading scroll-paint-content">{children}</div>
  </div>
}
