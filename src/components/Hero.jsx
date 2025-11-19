function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Compassionate care for your best friend
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Full-service veterinary clinic offering checkups, vaccinations, dental care, surgery, and urgent visits. Open 7 days a week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#appointment" className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Book an appointment</a>
            <a href="#services" className="inline-block px-6 py-3 rounded-lg bg-white text-slate-800 font-semibold border border-slate-200 hover:bg-slate-50">Explore services</a>
          </div>
          <div className="mt-6 text-sm text-slate-600">📍 123 Paws Ave • 🕒 8am–8pm • 📞 (555) 123-4567</div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1644675272883-0c4d582528d8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZXQlMjB3aXRoJTIwZG9nfGVufDB8MHx8fDE3NjM1NzQ4ODB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Vet with dog" className="rounded-2xl shadow-lg border border-slate-200"/>
        </div>
      </div>
    </section>
  )
}

export default Hero