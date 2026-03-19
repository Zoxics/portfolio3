// Browser wireframe of the portfolio site itself
const BLINK = { animation: 'blink 1s step-end infinite' }
const PULSE = { animation: 'node-pulse 3s ease-in-out infinite' }

export default function PortfolioDiagram() {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'JetBrains Mono, monospace' }}>

      {/* ── Browser outer frame ── */}
      <rect x="10" y="6" width="280" height="188" fill="none" stroke="#e8521a" strokeWidth="0.8"/>

      {/* ── Chrome bar ── */}
      <rect x="10" y="6" width="280" height="16" fill="#0e0e0e" stroke="none"/>
      <line x1="10" y1="22" x2="290" y2="22" stroke="#252520" strokeWidth="0.5"/>
      {/* Traffic lights */}
      <circle cx="22" cy="14" r="3.5" fill="#e8521a" opacity="0.5"/>
      <circle cx="33" cy="14" r="3.5" fill="#e8521a" opacity="0.2"/>
      <circle cx="44" cy="14" r="3.5" fill="#e8521a" opacity="0.2"/>
      {/* URL bar */}
      <rect x="58" y="9" width="170" height="10" fill="none" stroke="#252520" strokeWidth="0.5"/>
      <text x="65" y="17" fill="#2e2e28" fontSize="5.5">jack-nargi.dev</text>
      {/* Corner dots */}
      <rect x="10" y="6" width="2" height="2" fill="#e8521a"/>
      <rect x="288" y="6" width="2" height="2" fill="#e8521a"/>
      <rect x="10" y="192" width="2" height="2" fill="#e8521a"/>
      <rect x="288" y="192" width="2" height="2" fill="#e8521a"/>

      {/* ── Nav bar ── */}
      <rect x="10" y="22" width="280" height="10" fill="#0a0a0a" stroke="none"/>
      <line x1="10" y1="32" x2="290" y2="32" stroke="#1e1e18" strokeWidth="0.4"/>
      <text x="16" y="30" fill="#e8521a" fontSize="5.5" fontWeight="700">[JN]</text>
      <text x="58" y="30"  fill="#303028" fontSize="5">PROJECTS</text>
      <text x="94" y="30"  fill="#303028" fontSize="5">CONTACT</text>
      <text x="130" y="30" fill="#303028" fontSize="5">GITHUB</text>
      <text x="164" y="30" fill="#303028" fontSize="5">RESUME</text>
      <text x="245" y="30" fill="#2e2e28" fontSize="5">OPTIMAL</text>

      {/* ── Hero section ── */}
      <rect x="10" y="32" width="280" height="38" fill="rgba(232,82,26,0.015)" stroke="none"/>
      <line x1="10" y1="70" x2="290" y2="70" stroke="#1e1e18" strokeWidth="0.4"/>
      {/* Name block */}
      <rect x="18" y="38" width="72" height="7" fill="#e8521a" opacity="0.55" style={PULSE}/>
      <rect x="18" y="48" width="48" height="4" fill="#252520"/>
      {/* Desc lines */}
      <rect x="18" y="55" width="110" height="2.5" fill="#1e1e18"/>
      <rect x="18" y="59.5" width="100" height="2.5" fill="#1e1e18"/>
      <rect x="18" y="64" width="88" height="2.5" fill="#1e1e18"/>
      {/* Cursor */}
      <rect x="91" y="38" width="3.5" height="7" fill="#e8521a" style={BLINK}/>
      {/* Meta items */}
      <rect x="150" y="40" width="28" height="2" fill="#282820"/>
      <rect x="150" y="44" width="36" height="2" fill="#1e1e18"/>
      <rect x="196" y="40" width="28" height="2" fill="#282820"/>
      <rect x="196" y="44" width="22" height="2" fill="#2d5a38" opacity="0.8"/>
      <rect x="242" y="40" width="28" height="2" fill="#282820"/>
      <rect x="242" y="44" width="34" height="2" fill="#1e1e18"/>

      {/* ── Section label ── */}
      <text x="18" y="79" fill="#2a2a22" fontSize="5" letterSpacing="1">// PROJECTS</text>
      <line x1="68" y1="76" x2="290" y2="76" stroke="#1e1e18" strokeWidth="0.4"/>

      {/* ── Card grid (2×2) ── */}
      {/* Card 1 */}
      <rect x="10" y="82" width="137" height="44" fill="#0c0c0c" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="14" y="86" width="54" height="36" fill="#080808" stroke="#1a1a16" strokeWidth="0.3"/>
      {/* Mini diagram inside card 1 */}
      <line x1="22" y1="100" x2="40" y2="100" stroke="#2a1808" strokeWidth="0.5" strokeDasharray="2 3"/>
      <rect x="38" y="97" width="8" height="6" fill="none" stroke="#e8521a" strokeWidth="0.4" opacity="0.5"/>
      <line x1="40" y1="104" x2="60" y2="116" stroke="#2a1808" strokeWidth="0.5"/>
      <rect x="14" y="86" width="2" height="2" fill="#e8521a" opacity="0.4"/>
      {/* Card 1 text */}
      <rect x="74" y="87" width="66" height="3.5" fill="#252520"/>
      <rect x="74" y="93" width="52" height="2.5" fill="#1a1a16"/>
      <rect x="74" y="97.5" width="58" height="2.5" fill="#1a1a16"/>
      <rect x="74" y="105" width="42" height="2" fill="#181816"/>
      <rect x="74" y="109" width="56" height="2" fill="#181816"/>
      <rect x="74" y="113" width="38" height="2" fill="#181816"/>
      <rect x="74" y="119" width="50" height="2" fill="#1a1a16"/>

      {/* Card 2 */}
      <rect x="153" y="82" width="137" height="44" fill="#0c0c0c" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="157" y="86" width="54" height="36" fill="#080808" stroke="#1a1a16" strokeWidth="0.3"/>
      {/* Mini diagram inside card 2 */}
      <rect x="162" y="91" width="10" height="7" fill="none" stroke="#2a2a20" strokeWidth="0.4"/>
      <line x1="172" y1="94" x2="180" y2="94" stroke="#2a1808" strokeWidth="0.5" strokeDasharray="2 2"/>
      <rect x="180" y="91" width="10" height="7" fill="none" stroke="#303028" strokeWidth="0.4"/>
      <line x1="184" y1="98" x2="184" y2="108" stroke="#2a1808" strokeWidth="0.5"/>
      <rect x="179" y="108" width="10" height="7" fill="none" stroke="#2a2a20" strokeWidth="0.3"/>
      <rect x="157" y="86" width="2" height="2" fill="#e8521a" opacity="0.3"/>
      {/* Card 2 text */}
      <rect x="217" y="87" width="66" height="3.5" fill="#252520"/>
      <rect x="217" y="93" width="52" height="2.5" fill="#1a1a16"/>
      <rect x="217" y="97.5" width="58" height="2.5" fill="#1a1a16"/>
      <rect x="217" y="105" width="42" height="2" fill="#181816"/>
      <rect x="217" y="109" width="56" height="2" fill="#181816"/>
      <rect x="217" y="113" width="38" height="2" fill="#181816"/>
      <rect x="217" y="119" width="50" height="2" fill="#1a1a16"/>

      {/* Divider between rows */}
      <line x1="10" y1="126" x2="290" y2="126" stroke="#1e1e18" strokeWidth="0.4"/>

      {/* Card 3 */}
      <rect x="10" y="127" width="137" height="44" fill="#0c0c0c" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="14" y="131" width="54" height="36" fill="#080808" stroke="#1a1a16" strokeWidth="0.3"/>
      <rect x="14" y="131" width="2" height="2" fill="#e8521a" opacity="0.25"/>
      <rect x="217" y="131" width="66" height="3.5" fill="#252520" style={{ display: 'none' }}/>

      {/* Card 4 */}
      <rect x="153" y="127" width="137" height="44" fill="#0c0c0c" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="157" y="131" width="54" height="36" fill="#080808" stroke="#1a1a16" strokeWidth="0.3"/>
      <rect x="157" y="131" width="2" height="2" fill="#e8521a" opacity="0.2"/>

      {/* ── Contact section ── */}
      <line x1="10" y1="172" x2="290" y2="172" stroke="#1e1e18" strokeWidth="0.4"/>
      <rect x="10" y="172" width="280" height="20" fill="#080808" stroke="none"/>
      <rect x="18" y="176" width="55" height="6" fill="none" stroke="#252520" strokeWidth="0.4"/>
      <rect x="80" y="176" width="55" height="6" fill="none" stroke="#252520" strokeWidth="0.4"/>
      <rect x="142" y="176" width="55" height="6" fill="none" stroke="#e8521a" strokeWidth="0.4" opacity="0.4"/>
      <text x="155" y="181" fill="#3a2010" fontSize="4.5">TRANSMIT</text>

      {/* Scan label */}
      <text x="14" y="196" fill="#2a2a22" fontSize="6">SIG: SELF_RENDER_v1</text>
    </svg>
  )
}
