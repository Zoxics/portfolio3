// Glasses side-profile with optical path
const F = (d = 0, dur = '1.4s') => ({ animation: `crawl ${dur} linear ${d}ms infinite` })
const PULSE = { animation: 'node-pulse 2s ease-in-out infinite' }

export default function WearableDiagram() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}>

      {/* ══════════ GLASSES FRAME (side profile) ══════════ */}
      {/* Temple arm (horizontal bar extending right) */}
      <line x1="210" y1="90" x2="285" y2="90" stroke="#e8521a" strokeWidth="1.5" strokeLinecap="square"/>
      {/* Ear piece curve */}
      <path d="M 285 90 Q 290 90 290 96 L 290 106" fill="none" stroke="#e8521a" strokeWidth="1.2"/>
      {/* Frame front (vertical piece connecting nose bridge to temple) */}
      <line x1="210" y1="68" x2="210" y2="104" stroke="#e8521a" strokeWidth="1.5" strokeLinecap="square"/>
      {/* Nose bridge hint */}
      <path d="M 210 98 Q 205 100 200 98" fill="none" stroke="#e8521a" strokeWidth="0.8"/>

      {/* ══════════ LENS ══════════ */}
      {/* Lens rectangle (main optical element) */}
      <rect x="130" y="68" width="80" height="36" rx="2" fill="rgba(232,82,26,0.04)" stroke="#e8521a" strokeWidth="1"/>
      {/* Lens grid (optical coating lines) */}
      {[0,1,2,3,4].map(i => (
        <line key={`lg${i}`} x1="130" y1={72 + i * 7} x2="210" y2={72 + i * 7}
          stroke="rgba(232,82,26,0.08)" strokeWidth="0.4"/>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`lv${i}`} x1={134 + i * 10} y1="68" x2={134 + i * 10} y2="104"
          stroke="rgba(232,82,26,0.06)" strokeWidth="0.3"/>
      ))}
      {/* Lens label */}
      <text x="170" y="89" textAnchor="middle" fill="#e8521a" fontSize="5.5" opacity="0.5">WAVEGUIDE</text>
      <text x="170" y="97" textAnchor="middle" fill="#e8521a" fontSize="4.5" opacity="0.35">DIFFRACTIVE</text>
      {/* Lens corner markers */}
      <rect x="130" y="68" width="3" height="3" fill="#e8521a" opacity="0.6"/>
      <rect x="207" y="68" width="3" height="3" fill="#e8521a" opacity="0.6"/>
      <rect x="130" y="101" width="3" height="3" fill="#e8521a" opacity="0.6"/>
      <rect x="207" y="101" width="3" height="3" fill="#e8521a" opacity="0.6"/>

      {/* ══════════ INTERNAL HARDWARE MODULE ══════════ */}
      {/* Mounted on temple arm interior */}
      <rect x="212" y="75" width="52" height="26" rx="1" fill="#060606" stroke="#2a2a22" strokeWidth="0.5"/>
      {/* CPU chip */}
      <rect x="218" y="79" width="14" height="14" fill="#080808" stroke="#e8521a" strokeWidth="0.5" opacity="0.6"/>
      {/* CPU pins */}
      {[0,1,2].map(i => (
        <g key={i}>
          <line x1={220+i*4} y1="79" x2={220+i*4} y2="77" stroke="#2a1808" strokeWidth="0.5"/>
          <line x1={220+i*4} y1="93" x2={220+i*4} y2="95" stroke="#2a1808" strokeWidth="0.5"/>
        </g>
      ))}
      <text x="225" y="89" textAnchor="middle" fill="#e8521a" fontSize="4" opacity="0.6" style={PULSE}>CPU</text>
      {/* Projector element */}
      <rect x="238" y="80" width="10" height="8" fill="#0a0a08" stroke="#303028" strokeWidth="0.4"/>
      <text x="243" y="86" textAnchor="middle" fill="#484840" fontSize="3.5">PROJ</text>
      {/* Battery indicator */}
      <rect x="252" y="80" width="8" height="5" fill="none" stroke="#252520" strokeWidth="0.4"/>
      <rect x="260" y="81.5" width="2" height="2" fill="#252520"/>
      <rect x="253" y="81" width={5} height="3" fill="#2a1808"/>
      {/* EMG pads on temple */}
      <circle cx="238" cy="90" r="3" fill="none" stroke="#e8521a" strokeWidth="0.5" opacity="0.4"/>
      <circle cx="252" cy="90" r="3" fill="none" stroke="#e8521a" strokeWidth="0.5" opacity="0.4"/>
      <text x="245" y="99" textAnchor="middle" fill="#2a2a22" fontSize="4">EMG PADS</text>

      {/* ══════════ LIGHT PATH (projector → waveguide → eye) ══════════ */}
      {/* Projector beam entering lens */}
      <line x1="238" y1="84" x2="212" y2="84" stroke="#0e0e0e" strokeWidth="1.5"/>
      <line x1="238" y1="84" x2="212" y2="84" stroke="#e8521a" strokeWidth="1"
        strokeDasharray="4 5" style={F(0)}/>
      {/* Through lens — horizontal orange beam */}
      <line x1="130" y1="84" x2="100" y2="84" stroke="#0e0e0e" strokeWidth="1.5"/>
      <line x1="210" y1="84" x2="100" y2="84" stroke="#e8521a" strokeWidth="1.2"
        strokeDasharray="4 5" style={F(200)}/>
      {/* Glow on the beam path inside lens */}
      <line x1="132" y1="84" x2="208" y2="84"
        stroke="rgba(232,82,26,0.12)" strokeWidth="4"/>

      {/* ══════════ EYE (left) ══════════ */}
      {/* Eye outline */}
      <ellipse cx="74" cy="84" rx="22" ry="14" fill="#060606" stroke="#2a2a22" strokeWidth="0.6"/>
      {/* Iris */}
      <circle cx="74" cy="84" r="9" fill="#060606" stroke="#252520" strokeWidth="0.5"/>
      {/* Pupil */}
      <circle cx="74" cy="84" r="4" fill="#080808" stroke="#303028" strokeWidth="0.4"/>
      {/* AR overlay on retina */}
      <circle cx="74" cy="84" r="4" fill="rgba(232,82,26,0.08)" stroke="none" style={PULSE}/>
      {/* Light hitting eye */}
      <line x1="96" y1="84" x2="84" y2="84" stroke="#0e0e0e" strokeWidth="1.5"/>
      <line x1="100" y1="84" x2="84" y2="84" stroke="#e8521a" strokeWidth="0.8"
        strokeDasharray="3 5" style={F(500)}/>
      {/* Eyelid lines */}
      <path d="M 52 84 Q 74 72 96 84" fill="none" stroke="#252520" strokeWidth="0.4"/>
      <path d="M 52 84 Q 74 96 96 84" fill="none" stroke="#252520" strokeWidth="0.4"/>

      {/* ══════════ LABELS ══════════ */}
      {/* Sensor labels (top) */}
      <line x1="170" y1="64" x2="170" y2="56" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="170" y="54" textAnchor="middle" fill="#2a2a22" fontSize="4.5">LENS</text>

      <line x1="225" y1="75" x2="225" y2="66" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="225" y="64" textAnchor="middle" fill="#2a2a22" fontSize="4.5">PROC</text>

      <line x1="74" y1="70" x2="74" y2="62" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="74" y="60" textAnchor="middle" fill="#2a2a22" fontSize="4.5">EYE</text>

      {/* Bottom labels */}
      <text x="74"  y="108" textAnchor="middle" fill="#252520" fontSize="4">RETINA</text>
      <text x="170" y="112" textAnchor="middle" fill="#252520" fontSize="4">DIFFRACTIVE OPTICS</text>
      <text x="260" y="108" textAnchor="middle" fill="#252520" fontSize="4">ARM</text>

      {/* Audio path (bone conduction — below frame) */}
      <line x1="260" y1="106" x2="260" y2="120" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="250" y="120" width="20" height="8" rx="1" fill="#060606" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="260" y="127" textAnchor="middle" fill="#252520" fontSize="4">BONE AUD</text>
      {/* Audio wave hint */}
      <path d="M 244 124 Q 246 120 248 124 Q 250 128 252 124" fill="none" stroke="#252520" strokeWidth="0.4"/>

      {/* Signal status */}
      <text x="12" y="158" fill="#e8521a" fontSize="5" opacity="0.5" style={PULSE}>● AR_SIGNAL: LOCKED</text>
      <text x="12" y="168" fill="#2a2a22" fontSize="5">REFRESH: 90Hz   FOV: 40°</text>
      <text x="12" y="178" fill="#2a2a22" fontSize="5">INPUT: EMG_SUBVOCAL</text>

      <text x="12" y="196" fill="#2a2a22" fontSize="6">SIG: OPTICS_PATH_v1</text>
    </svg>
  )
}
