import { useState, useEffect } from 'react'

const H_LINES = [14, 26, 38, 50, 62, 74, 86]
const V_LINES = [12, 25, 38, 51, 64, 77, 90]

export default function Grid({ visible }) {
  const [sketched, setSketched] = useState(false)

  useEffect(() => {
    if (!visible) return
    const id = setTimeout(() => setSketched(true), 30)
    return () => clearTimeout(id)
  }, [visible])

  return (
    <div
      className="grid-overlay"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}
      >
        <defs>
          <pattern id="fine-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.018)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect
          width="100%" height="100%"
          fill="url(#fine-grid)"
          style={{ opacity: sketched ? 1 : 0, transition: 'opacity 0.6s ease 0.35s' }}
        />
        {H_LINES.map((y, i) => (
          <line
            key={`h${i}`}
            x1="0%" y1={`${y}%`} x2="100%" y2={`${y}%`}
            pathLength="100"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="0.6"
            strokeDasharray="100"
            strokeDashoffset={sketched ? 0 : 100}
            style={{ transition: `stroke-dashoffset 0.28s ease-out ${i * 22}ms` }}
          />
        ))}
        {V_LINES.map((x, i) => (
          <line
            key={`v${i}`}
            x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%"
            pathLength="100"
            stroke="rgba(255,255,255,0.038)"
            strokeWidth="0.5"
            strokeDasharray="100"
            strokeDashoffset={sketched ? 0 : 100}
            style={{ transition: `stroke-dashoffset 0.28s ease-out ${H_LINES.length * 22 + i * 22}ms` }}
          />
        ))}
      </svg>
    </div>
  )
}
