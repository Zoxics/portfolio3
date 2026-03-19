import PortfolioDiagram from '../diagrams/PortfolioDiagram'
import DiscordDiagram   from '../diagrams/DiscordDiagram'
import DeployDiagram    from '../diagrams/DeployDiagram'
import WearableDiagram  from '../diagrams/WearableDiagram'

const MAP = {
  portfolio: PortfolioDiagram,
  discord:   DiscordDiagram,
  deploy:    DeployDiagram,
  wearable:  WearableDiagram,
}

export default function DiagramRenderer({ type }) {
  const Component = MAP[type]

  if (!Component) {
    return (
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="10" y="10" width="280" height="180"
          fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"
          strokeDasharray="6 4"
        />
        <text
          x="150" y="105"
          textAnchor="middle"
          fill="rgba(255,255,255,0.08)"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
        >
          NO_DIAGRAM
        </text>
      </svg>
    )
  }

  return <Component />
}
