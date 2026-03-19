import Grid          from './components/Grid'
import StatusBar      from './components/StatusBar'
import CoordCounter   from './components/CoordCounter'
import Hero           from './components/Hero'
import ProjectsGrid   from './components/ProjectsGrid'
import ContactForm    from './components/ContactForm'
import { useBootSequence } from './hooks/useBootSequence'
import { useScrollY }      from './hooks/useScrollY'

function Footer() {
  return (
    <footer className="footer">
      <span>JACK_NARGI // {new Date().getFullYear()}</span>
      <span>BUILD_ENV: REACT + VITE</span>
    </footer>
  )
}

export default function App() {
  const boot    = useBootSequence()
  const scrollY = useScrollY()

  // Fade coords out after 80px scroll so they don't collide with content
  const coordOpacity = Math.max(0, 1 - scrollY / 80)

  return (
    <div className="app">
      <Grid visible={boot.gridVisible} />

      <CoordCounter
        cycling={boot.coordsCycling}
        locked={boot.coordsLocked}
        finalValue="[42, 60]"
        className="coord-corner--tl"
        style={{ opacity: coordOpacity }}
      />
      <CoordCounter
        cycling={boot.coordsCycling}
        locked={boot.coordsLocked}
        finalValue="[10, 86]"
        className="coord-corner--tr"
        style={{ opacity: coordOpacity }}
      />
      <CoordCounter
        cycling={boot.coordsCycling}
        locked={boot.coordsLocked}
        finalValue="[42, 60]"
        className="coord-corner--bl"
        style={{ opacity: coordOpacity }}
      />
      <CoordCounter
        cycling={boot.coordsCycling}
        locked={boot.coordsLocked}
        finalValue="[10, 88]"
        className="coord-corner--br"
        style={{ opacity: coordOpacity }}
      />

      <StatusBar visible={boot.statusVisible} done={boot.done} />

      <main className="main-content">
        <Hero visible={boot.heroVisible} />
        <ProjectsGrid
          cardsActive={boot.cardsActive}
          cardDelay={boot.cardDelay}
        />
        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}
