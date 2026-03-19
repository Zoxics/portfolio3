// Physical machine topology: Laptop → Server → Target PC
const F = (d = 0, dur = '1s') => ({ animation: `crawl ${dur} linear ${d}ms infinite` })
const PULSE = { animation: 'node-pulse 2.5s ease-in-out infinite' }

export default function DeployDiagram() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}>

      {/* ══════════ LAPTOP (left) ══════════ */}
      {/* Screen */}
      <rect x="12" y="28" width="68" height="46" rx="1" fill="#080808" stroke="#e8521a" strokeWidth="0.8"/>
      {/* Screen content (WPF dashboard) */}
      <rect x="15" y="31" width="62" height="40" fill="#060606" stroke="none"/>
      {/* Dashboard UI mock */}
      <rect x="17" y="33" width="58" height="5" fill="#0e0e0e" stroke="none"/>
      <text x="20" y="37" fill="#e8521a" fontSize="4" opacity="0.7">[WPF_DASHBOARD]</text>
      <line x1="15" y1="38" x2="77" y2="38" stroke="#1a1a16" strokeWidth="0.3"/>
      {/* Metric rows */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="18" y={40 + i * 7} width="30" height="4" fill="#0a0a0a" stroke="#1e1e18" strokeWidth="0.3"/>
          <rect x="50" y={40 + i * 7} width={[18, 24, 14, 20][i]} height="4" fill={i === 0 ? 'rgba(232,82,26,0.25)' : '#1a1a18'} stroke="none"/>
        </g>
      ))}
      {/* Screen active indicator */}
      <circle cx="73" cy="50" r="2" fill="#e8521a" opacity="0.6" style={PULSE}/>
      {/* Laptop base/keyboard */}
      <rect x="8" y="74" width="76" height="6" rx="1" fill="#0e0e0e" stroke="#e8521a" strokeWidth="0.6"/>
      {/* Keyboard rows */}
      {[0,1].map(i => (
        <g key={i}>
          {[0,1,2,3,4,5,6,7].map(j => (
            <rect key={j} x={12 + j * 8} y={76 + i * 2.5} width="6" height="1.5" rx="0.3" fill="none" stroke="#252520" strokeWidth="0.3"/>
          ))}
        </g>
      ))}
      {/* Touchpad */}
      <rect x="30" y="78" width="16" height="2" fill="none" stroke="#1e1e18" strokeWidth="0.3"/>
      {/* Label */}
      <text x="46" y="92" textAnchor="middle" fill="#484840" fontSize="5.5" letterSpacing="0.5">WPF CLIENT</text>

      {/* ══════════ SERVER RACK (center) ══════════ */}
      <rect x="113" y="22" width="74" height="80" rx="1" fill="#080808" stroke="#e8521a" strokeWidth="0.8" style={PULSE}/>
      {/* Rack units */}
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <g key={i}>
          <rect x="116" y={25 + i * 8.5} width="68" height="7.5" fill="#060606" stroke="#1a1a16" strokeWidth="0.3"/>
          {/* Status LED */}
          <circle cx="120" cy={28.5 + i * 8.5} r="1.2"
            fill={i < 3 ? '#e8521a' : '#252520'}
            opacity={i < 3 ? 0.7 : 1}
            style={i === 0 ? PULSE : {}}
          />
          {/* Port dots */}
          {[0,1,2,3].map(p => (
            <rect key={p} x={130 + p * 12} y={26.5 + i * 8.5} width="8" height="4.5" rx="0.5"
              fill="none" stroke={i < 2 ? '#2a1808' : '#1a1a16'} strokeWidth="0.3"/>
          ))}
        </g>
      ))}
      {/* REST API label on active unit */}
      <text x="150" y="31" textAnchor="middle" fill="#e8521a" fontSize="4.5" opacity="0.6">REST_API</text>
      <text x="150" y="38" textAnchor="middle" fill="#3a3a30" fontSize="4">Kestrel :5000</text>
      {/* Label */}
      <text x="150" y="115" textAnchor="middle" fill="#484840" fontSize="5.5" letterSpacing="0.5">SERVER RACK</text>

      {/* ══════════ TARGET PC (right) ══════════ */}
      {/* Tower */}
      <rect x="216" y="28" width="36" height="60" rx="1" fill="#080808" stroke="#2a2a22" strokeWidth="0.6"/>
      {/* Power button */}
      <circle cx="234" cy="36" r="4" fill="none" stroke="#252520" strokeWidth="0.5"/>
      <circle cx="234" cy="36" r="1.5" fill="#252520"/>
      {/* Drive bays */}
      {[0,1,2].map(i => (
        <rect key={i} x="220" y={44 + i * 9} width="28" height="7" rx="0.5"
          fill="#060606" stroke="#1e1e18" strokeWidth="0.3"/>
      ))}
      {/* Front ports */}
      <rect x="220" y="79" width="5" height="5" fill="none" stroke="#252520" strokeWidth="0.3"/>
      <rect x="227" y="79" width="5" height="5" fill="none" stroke="#252520" strokeWidth="0.3"/>
      {/* Monitor */}
      <rect x="210" y="14" width="50" height="32" rx="1" fill="#060606" stroke="#2a2a22" strokeWidth="0.5"/>
      {/* Monitor screen */}
      <rect x="213" y="17" width="44" height="26" fill="#050505" stroke="none"/>
      {/* Windows logo hint */}
      <text x="235" y="32" textAnchor="middle" fill="#252520" fontSize="8">⊞</text>
      {/* Monitor stand */}
      <rect x="230" y="46" width="10" height="2" fill="#1e1e18" stroke="none"/>
      {/* Label */}
      <text x="234" y="104" textAnchor="middle" fill="#484840" fontSize="5.5" letterSpacing="0.5">WIN TARGET</text>

      {/* ══════════ NETWORK CABLES ══════════ */}
      {/* Laptop → Server (forward CMD) */}
      <line x1="84" y1="58" x2="113" y2="58" stroke="#1e1e18" strokeWidth="0.5"/>
      <line x1="84" y1="58" x2="113" y2="58" stroke="#e8521a" strokeWidth="0.8"
        strokeDasharray="4 6" style={F(0)}/>
      <text x="98" y="55" textAnchor="middle" fill="#2a1808" fontSize="4">CMD</text>
      {/* Server → Laptop (return STATUS) */}
      <line x1="113" y1="66" x2="84" y2="66" stroke="#1e1e18" strokeWidth="0.5"/>
      <line x1="113" y1="66" x2="84" y2="66" stroke="#e8521a" strokeWidth="0.5"
        strokeDasharray="3 7" style={F(400)}/>
      <text x="98" y="74" textAnchor="middle" fill="#2a1808" fontSize="4">STATUS</text>

      {/* Server → Target (forward CMD) */}
      <line x1="187" y1="58" x2="216" y2="58" stroke="#1e1e18" strokeWidth="0.5"/>
      <line x1="187" y1="58" x2="216" y2="58" stroke="#e8521a" strokeWidth="0.8"
        strokeDasharray="4 6" style={F(150)}/>
      <text x="201" y="55" textAnchor="middle" fill="#2a1808" fontSize="4">EXEC</text>
      {/* Target → Server (return) */}
      <line x1="216" y1="66" x2="187" y2="66" stroke="#1e1e18" strokeWidth="0.5"/>
      <line x1="216" y1="66" x2="187" y2="66" stroke="#e8521a" strokeWidth="0.5"
        strokeDasharray="3 7" style={F(550)}/>
      <text x="201" y="74" textAnchor="middle" fill="#2a1808" fontSize="4">ACK</text>

      {/* ══════════ Bottom status ══════════ */}
      <line x1="8" y1="122" x2="292" y2="122" stroke="#1a1a16" strokeWidth="0.3"/>
      <text x="12"  y="132" fill="#e8521a" fontSize="5" opacity="0.6" style={PULSE}>● CONNECTED</text>
      <text x="90"  y="132" fill="#2a2a22" fontSize="5">LATENCY: 4ms</text>
      <text x="180" y="132" fill="#2a2a22" fontSize="5">UPTIME: 99.2%</text>

      <text x="12" y="196" fill="#2a2a22" fontSize="6">SIG: DEPLOY_TOPOLOGY_v3</text>
    </svg>
  )
}
