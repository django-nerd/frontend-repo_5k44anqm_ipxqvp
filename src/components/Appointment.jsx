import { useState } from 'react'

function Appointment() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [form, setForm] = useState({
    owner_name: '',
    owner_email: '',
    owner_phone: '',
    pet_name: '',
    pet_species: 'Dog',
    reason: '',
    preferred_date: '',
    preferred_time: ''
  })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to book')
      setResult({ ok: true, id: data.id })
      setForm({ owner_name: '', owner_email: '', owner_phone: '', pet_name: '', pet_species: 'Dog', reason: '', preferred_date: '', preferred_time: '' })
    } catch (err) {
      setResult({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="appointment" className="py-16 bg-gradient-to-tr from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Book an appointment</h2>
          <p className="mt-2 text-slate-600">Tell us about your pet and your preferred time. We’ll confirm shortly.</p>
          <ul className="mt-6 space-y-2 text-slate-700 text-sm">
            <li>• Open 7 days a week</li>
            <li>• Same-day urgent visits available</li>
            <li>• Free parking on site</li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="input" placeholder="Your name" value={form.owner_name} onChange={e=>setForm({...form, owner_name:e.target.value})} required />
            <input className="input" type="email" placeholder="Email" value={form.owner_email} onChange={e=>setForm({...form, owner_email:e.target.value})} required />
          </div>
          <input className="input" placeholder="Phone" value={form.owner_phone} onChange={e=>setForm({...form, owner_phone:e.target.value})} required />
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="input" placeholder="Pet name" value={form.pet_name} onChange={e=>setForm({...form, pet_name:e.target.value})} required />
            <select className="input" value={form.pet_species} onChange={e=>setForm({...form, pet_species:e.target.value})}>
              <option>Dog</option>
              <option>Cat</option>
              <option>Rabbit</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </div>
          <textarea className="input" rows={3} placeholder="Reason for visit" value={form.reason} onChange={e=>setForm({...form, reason:e.target.value})} />
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="input" type="date" value={form.preferred_date} onChange={e=>setForm({...form, preferred_date:e.target.value})} required />
            <input className="input" type="time" value={form.preferred_time} onChange={e=>setForm({...form, preferred_time:e.target.value})} required />
          </div>
          <button disabled={loading} className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Booking…' : 'Book now'}
          </button>
          {result && (
            <div className={`p-3 rounded-lg text-sm ${result.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {result.ok ? `Request received. Reference: ${result.id}` : result.error}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Appointment