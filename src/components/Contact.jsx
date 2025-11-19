import { useState } from 'react'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setResult({ ok: true })
      setForm({ name: '', email: '', subject: 'General Inquiry', message: '' })
    } catch (err) {
      setResult({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-600">Questions about your pet’s health or our services? We’re here to help.</p>
          <div className="mt-6 text-slate-700 text-sm space-y-1">
            <p>📞 (555) 123-4567</p>
            <p>✉️ hello@bluepawsvet.com</p>
            <p>📍 123 Paws Ave, Petville</p>
            <p>🕒 Open daily 8:00–20:00</p>
          </div>
        </div>
        <form onSubmit={submit} className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input className="input" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          </div>
          <select className="input" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})}>
            <option>General Inquiry</option>
            <option>Appointment Question</option>
            <option>Prescription Refill</option>
            <option>Feedback</option>
          </select>
          <textarea className="input" rows={4} placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button disabled={loading} className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Sending…' : 'Send message'}
          </button>
          {result && (
            <div className={`p-3 rounded-lg text-sm ${result.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {result.ok ? 'Thanks! We will get back to you shortly.' : result.error}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact