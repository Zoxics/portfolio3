import { useState, useEffect } from 'react'

export default function ScanlineReveal({ children, active, delay = 0, className = '' }) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!active) return
    const id = setTimeout(() => setRevealed(true), delay)
    return () => clearTimeout(id)
  }, [active, delay])

  return (
    <div className={`scanline-reveal ${revealed ? 'is-revealed' : ''} ${className}`}>
      {children}
    </div>
  )
}
