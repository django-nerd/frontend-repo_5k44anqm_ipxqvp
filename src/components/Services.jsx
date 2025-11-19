function Services() {
  const items = [
    { title: 'Wellness Exams', desc: 'Annual checkups, preventive care, nutrition guidance.' },
    { title: 'Vaccinations', desc: 'Core and lifestyle vaccines tailored to your pet.' },
    { title: 'Diagnostics', desc: 'In-house lab, x-ray, ultrasound for quick answers.' },
    { title: 'Dental Care', desc: 'Cleanings, extractions, and oral health plans.' },
    { title: 'Surgery', desc: 'Spay/neuter, soft tissue, orthopedic with modern anesthesia.' },
    { title: 'Urgent Care', desc: 'Same-day visits for injuries, illness, or concerns.' },
  ]
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Our Services</h2>
        <p className="mt-2 text-slate-600 text-center">Everything your pet needs under one roof</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition bg-slate-50">
              <div className="text-2xl">🐶</div>
              <h3 className="mt-3 font-semibold text-slate-900">{i.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services