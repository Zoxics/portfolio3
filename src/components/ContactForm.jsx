import { useState } from 'react'
import { useEmailJS } from '../hooks/useEmailJS'

const STATUS_MSG = {
  sending: '// TRANSMITTING...',
  success: '// MESSAGE_RECEIVED — ACK',
  error:   '// TRANSMISSION_FAILED — RETRY',
}

export default function ContactForm() {
  const { send, status } = useEmailJS()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return
    await send(form)
    if (status !== 'error') {
      setForm({ name: '', email: '', message: '' })
    }
  }

  const busy = status === 'sending'

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="section-header">
        <span className="section-header__label">// CONTACT</span>
        <div className="section-header__line" />
      </div>

      <div className="contact-inner">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label className="form-field__label" htmlFor="name">
                IDENT
              </label>
              <input
                className="form-field__input"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={busy}
                autoComplete="name"
              />
            </div>

            <div className="form-field">
              <label className="form-field__label" htmlFor="email">
                ADDR
              </label>
              <input
                className="form-field__input"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={busy}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="message">
              PAYLOAD
            </label>
            <textarea
              className="form-field__textarea"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building?"
              required
              disabled={busy}
            />
          </div>

          <div className="form-actions">
            <button
              className="form-submit"
              type="submit"
              disabled={busy || !form.name || !form.email || !form.message}
            >
              TRANSMIT
            </button>

            {status !== 'idle' && (
              <span className={`form-status form-status--${status}`}>
                {STATUS_MSG[status]}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
