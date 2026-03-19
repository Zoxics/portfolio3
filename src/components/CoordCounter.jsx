import { useState, useEffect } from 'react'

function rand99() {
  return Math.floor(Math.random() * 99).toString().padStart(2, '0')
}

function randomCoord() {
  return `[${rand99()}, ${rand99()}]`
}

export default function CoordCounter({ cycling, locked, finalValue, className = '', style = {} }) {
  const [display, setDisplay] = useState(randomCoord())

  useEffect(() => {
    if (locked) { setDisplay(finalValue); return }
    if (!cycling) return
    const id = setInterval(() => setDisplay(randomCoord()), 75)
    return () => clearInterval(id)
  }, [cycling, locked, finalValue])

  return (
    <span
      className={`coord-corner ${className}`}
      style={style}
      aria-hidden="true"
    >
      {display}
    </span>
  )
}
