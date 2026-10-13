'use client'

import { useState } from 'react'

function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', message: '' })

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })
      const result = await response.json()

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: result.error || 'Your message could not be sent. Please try again.',
        })
        return
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. Your message has been sent.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send your message right now. Please try again later.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-800">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-800">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-800">
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={5000}
          required
          className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send message'}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`min-h-6 text-sm ${status.type === 'error' ? 'text-red-700' : 'text-green-700'}`}
      >
        {status.message}
      </p>
    </form>
  )
}

export default ContactForm
