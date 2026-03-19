import { useState, useEffect } from 'react'

// Phases:
// 0 → nothing
// 1 → grid lines fade in
// 2 → coord counters start cycling
// 3 → coords lock + status bar appears
// 4 → hero fades in
// 5 → cards start scanning in
// 6 → done

export function useBootSequence() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 350),
      setTimeout(() => setPhase(3), 850),
      setTimeout(() => setPhase(4), 1050),
      setTimeout(() => setPhase(5), 1300),
      setTimeout(() => setPhase(6), 1300 + 4 * 220 + 600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return {
    gridVisible:   phase >= 1,
    coordsCycling: phase >= 2 && phase < 3,
    coordsLocked:  phase >= 3,
    statusVisible: phase >= 3,
    heroVisible:   phase >= 4,
    cardsActive:   phase >= 5,
    done:          phase >= 6,
    cardDelay: (i) => i * 220, // ms stagger per card
  }
}
