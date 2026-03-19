import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  ?? 'YOUR_PUBLIC_KEY'

export function useEmailJS() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function send({ name, email, message }) {
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        PUBLIC_KEY
      )
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('[EmailJS]', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return { send, status }
}
