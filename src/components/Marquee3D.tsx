import { useEffect, useRef } from 'react'
import './Marquee3D.less'

const rows = [
  { text: 'AXEL PRIBADI · DATA SCIENTIST · AI ENGINEER · DATA ENGINEER · ', rtl: false, speed: 28 },
  { text: 'PYTHON · PYTORCH · LANGRAPH · AGENTS · RAG · TYPESCRIPT · DOCKER · ', rtl: true, speed: 20 },
  { text: 'AXEL PRIBADI · RESEARCHER · CREATOR · SYSTEMS · PRODUCTS · ', rtl: false, speed: 24 },
  { text: 'MACHINE LEARNING · COMPUTER VISION · NLP · PIPELINES · QDRANT · ', rtl: true, speed: 32 },
  { text: 'AXEL PRIBADI · DATA SCIENTIST · AI ENGINEER · BUILDER · ', rtl: false, speed: 36 },
  { text: 'AXEL PRIBADI · DATA SCIENTIST · AI ENGINEER · DATA ENGINEER · ', rtl: false, speed: 28 },
  { text: 'PYTHON · PYTORCH · LANGRAPH · AGENTS · RAG · TYPESCRIPT · DOCKER · ', rtl: true, speed: 20 },
  { text: 'AXEL PRIBADI · RESEARCHER · CREATOR · SYSTEMS · PRODUCTS · ', rtl: false, speed: 24 },
]

export default function Marquee3D() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRefs = useRef<(HTMLDivElement | null)[]>([])
  const stateRef = useRef({ tilt: 35, vel: 0, lastY: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    stateRef.current.lastY = window.scrollY

    const loop = () => {
      const s = stateRef.current
      const scrollY = window.scrollY
      const rawVel = scrollY - s.lastY
      s.lastY = scrollY

      // Smooth velocity with decay
      s.vel += (rawVel - s.vel) * 0.12

      // Target tilt: 35deg when section enters from below → 8deg as it leaves top
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
      const targetTilt = 35 - progress * 27

      // Lerp tilt smoothly
      s.tilt += (targetTilt - s.tilt) * 0.06

      // Speed scale: abs velocity boosts marquee speed
      const speedScale = 1 + Math.abs(s.vel) * 0.05

      section.style.setProperty('--tilt', `${s.tilt.toFixed(2)}deg`)

      trackRefs.current.forEach((el, i) => {
        if (el) el.style.animationDuration = `${(rows[i].speed / speedScale).toFixed(2)}s`
      })

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section ref={sectionRef} id="marquee" className="marquee-3d">
      <div className="marquee-3d__stage">
        {rows.map((row, i) => (
          <div key={i} className="marquee-3d__row">
            <div
              ref={el => { trackRefs.current[i] = el }}
              className="marquee-3d__track"
              style={{
                animationDuration: `${row.speed}s`,
                animationDirection: row.rtl ? 'reverse' : 'normal',
              } as React.CSSProperties}
            >
              <span>{row.text.repeat(6)}</span>
              <span aria-hidden="true">{row.text.repeat(6)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
