import { useState, useEffect } from 'react'

function randomHex(len = 8) {
  return Array.from({ length: len }, () =>
    Math.floor(Math.random() * 16).toString(16).toUpperCase()
  ).join('')
}

export default function DataFlicker({ active }) {
  const [val, setVal] = useState('00000000')

  useEffect(() => {
    if (!active) return
    const id = setInterval(() => setVal(randomHex()), 140)
    return () => clearInterval(id)
  }, [active])

  if (!active) return null

  return (
    <span className="data-flicker" aria-hidden="true">
      {val}
    </span>
  )
}
