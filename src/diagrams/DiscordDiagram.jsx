// Discord chat interface schematic
const F = (d = 0) => ({ animation: `crawl 1.1s linear ${d}ms infinite` })
const APPEAR = (d) => ({ animation: `float-up 0.4s ease-out ${d}ms both` })

export default function DiscordDiagram() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}>

      {/* ── App window frame ── */}
      <rect x="8" y="8" width="284" height="184" fill="none" stroke="#e8521a" strokeWidth="0.8"/>
      <rect x="8" y="8" width="2" height="2" fill="#e8521a"/>
      <rect x="290" y="8" width="2" height="2" fill="#e8521a"/>
      <rect x="8" y="190" width="2" height="2" fill="#e8521a"/>
      <rect x="290" y="190" width="2" height="2" fill="#e8521a"/>

      {/* ── Server sidebar (far left) ── */}
      <rect x="8" y="8" width="28" height="184" fill="#060606" stroke="none"/>
      <line x1="36" y1="8" x2="36" y2="192" stroke="#1e1e18" strokeWidth="0.5"/>
      {/* Server icons (hexagon-ish circles) */}
      {[26, 50, 74, 98].map((y, i) => (
        <g key={i}>
          <rect x="15" y={y} width="14" height="14" rx="7" fill="none" stroke="#252520" strokeWidth="0.6"/>
          {i === 0 && <rect x="15" y={y} width="14" height="14" rx="7" fill="none" stroke="#e8521a" strokeWidth="0.6" opacity="0.6"/>}
          {i === 0 && <text x="22" y={y + 10} textAnchor="middle" fill="#e8521a" fontSize="5" opacity="0.7">JN</text>}
        </g>
      ))}
      {/* Add server button */}
      <text x="22" y="128" textAnchor="middle" fill="#303028" fontSize="10">+</text>

      {/* ── Channel sidebar ── */}
      <rect x="36" y="8" width="68" height="184" fill="#080808" stroke="none"/>
      <line x1="104" y1="8" x2="104" y2="192" stroke="#1e1e18" strokeWidth="0.5"/>
      {/* Server name */}
      <rect x="36" y="8" width="68" height="18" fill="#060606" stroke="none"/>
      <line x1="36" y1="26" x2="104" y2="26" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="42" y="20" fill="#484840" fontSize="5.5" fontWeight="700">MY SERVER</text>
      {/* Category */}
      <text x="40" y="36" fill="#2a2a22" fontSize="5" letterSpacing="0.5">▾ TEXT</text>
      {/* Channels */}
      {['general', 'logs', 'alerts', 'dev'].map((ch, i) => (
        <g key={ch}>
          <rect x="36" y={41 + i * 13} width="68" height="12"
            fill={i === 0 ? 'rgba(255,255,255,0.03)' : 'none'} stroke="none"/>
          <text x="42" y={50 + i * 13}
            fill={i === 0 ? '#7a7a68' : '#383830'} fontSize="5.5">
            # {ch}
          </text>
        </g>
      ))}
      {/* Voice */}
      <text x="40" y="100" fill="#2a2a22" fontSize="5" letterSpacing="0.5">▾ VOICE</text>
      <text x="42" y="113" fill="#303028" fontSize="5.5">🔈 general</text>

      {/* ── Main chat area ── */}
      <rect x="104" y="8" width="186" height="184" fill="#0a0a0a" stroke="none"/>

      {/* Chat header */}
      <rect x="104" y="8" width="186" height="18" fill="#080808" stroke="none"/>
      <line x1="104" y1="26" x2="290" y2="26" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="112" y="20" fill="#484840" fontSize="5.5"># general</text>
      <text x="252" y="20" fill="#252520" fontSize="5">⚙ 🔍</text>

      {/* Messages */}
      {/* User message */}
      <g style={APPEAR(0)}>
        <circle cx="116" cy="46" r="5" fill="none" stroke="#252520" strokeWidth="0.5"/>
        <text x="116" y="49" textAnchor="middle" fill="#484840" fontSize="5">U</text>
        <text x="126" y="44" fill="#686858" fontSize="5.5" fontWeight="500">user_01</text>
        <text x="175" y="44" fill="#2a2a22" fontSize="4.5">today 12:01</text>
        <rect x="126" y="47" width="80" height="8" rx="1" fill="none" stroke="#1e1e18" strokeWidth="0.4"/>
        <text x="130" y="53" fill="#484840" fontSize="4.5">!ping</text>
      </g>

      {/* Bot response */}
      <g style={APPEAR(600)}>
        <circle cx="116" cy="72" r="5" fill="rgba(232,82,26,0.1)" stroke="#e8521a" strokeWidth="0.5" opacity="0.6"/>
        <text x="116" y="75" textAnchor="middle" fill="#e8521a" fontSize="5" opacity="0.7">B</text>
        <text x="126" y="70" fill="#e8521a" fontSize="5.5" fontWeight="500" opacity="0.7">BOT</text>
        <rect x="138" y="69" width="22" height="5" rx="1" fill="#1a0c04" stroke="#e8521a" strokeWidth="0.3" opacity="0.5"/>
        <text x="140" y="73" fill="#e8521a" fontSize="3.5" opacity="0.6">APP</text>
        <text x="168" y="70" fill="#2a2a22" fontSize="4.5">today 12:01</text>
        <rect x="126" y="73" width="110" height="8" rx="1" fill="rgba(232,82,26,0.04)" stroke="#e8521a" strokeWidth="0.3" opacity="0.5"/>
        <text x="130" y="79" fill="#7a6a60" fontSize="4.5">Pong! Latency: 42ms</text>
      </g>

      {/* User message 2 */}
      <g style={APPEAR(300)}>
        <circle cx="116" cy="98" r="5" fill="none" stroke="#252520" strokeWidth="0.5"/>
        <text x="116" y="101" textAnchor="middle" fill="#484840" fontSize="5">U</text>
        <text x="126" y="96" fill="#686858" fontSize="5.5" fontWeight="500">user_01</text>
        <text x="175" y="96" fill="#2a2a22" fontSize="4.5">today 12:04</text>
        <rect x="126" y="99" width="100" height="8" rx="1" fill="none" stroke="#1e1e18" strokeWidth="0.4"/>
        <text x="130" y="105" fill="#484840" fontSize="4.5">!ask what is entropy</text>
      </g>

      {/* Bot LLM response */}
      <g style={APPEAR(900)}>
        <circle cx="116" cy="124" r="5" fill="rgba(232,82,26,0.1)" stroke="#e8521a" strokeWidth="0.5" opacity="0.6"/>
        <text x="116" y="127" textAnchor="middle" fill="#e8521a" fontSize="5" opacity="0.7">B</text>
        <text x="126" y="122" fill="#e8521a" fontSize="5.5" opacity="0.7">BOT</text>
        <text x="168" y="122" fill="#2a2a22" fontSize="4.5">today 12:04</text>
        <rect x="126" y="125" width="148" height="20" rx="1" fill="rgba(232,82,26,0.03)" stroke="#e8521a" strokeWidth="0.3" opacity="0.4"/>
        <text x="130" y="131" fill="#686858" fontSize="4.5">Entropy is a measure of</text>
        <text x="130" y="137" fill="#686858" fontSize="4.5">disorder in a system...</text>
        <text x="130" y="143" fill="#484840" fontSize="4">via Ollama · llama3</text>
      </g>

      {/* Typing indicator */}
      <g style={{ animation: 'node-pulse 1.5s ease-in-out infinite' }}>
        <circle cx="116" cy="162" r="5" fill="rgba(232,82,26,0.08)" stroke="#e8521a" strokeWidth="0.4" opacity="0.4"/>
        <text x="116" y="165" textAnchor="middle" fill="#e8521a" fontSize="5" opacity="0.5">B</text>
        <text x="126" y="165" fill="#3a3a30" fontSize="5">BOT is typing</text>
        <circle cx="165" cy="163" r="1.5" fill="#484840"/>
        <circle cx="170" cy="163" r="1.5" fill="#484840"/>
        <circle cx="175" cy="163" r="1.5" fill="#484840"/>
      </g>

      {/* Input bar */}
      <rect x="104" y="178" width="186" height="14" fill="#060606" stroke="none"/>
      <line x1="104" y1="178" x2="290" y2="178" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="110" y="181" width="150" height="8" rx="1" fill="none" stroke="#252520" strokeWidth="0.4"/>
      <text x="115" y="187" fill="#252520" fontSize="5">Message #general</text>
      <text x="270" y="187" fill="#303028" fontSize="5">↵</text>

      {/* Sig */}
      <text x="10" y="196" fill="#ffffff" opacity="0" fontSize="1">.</text>
    </svg>
  )
}
