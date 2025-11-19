import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Appointment from './components/Appointment'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <Appointment />
      <Contact />
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} BluePaws Vet Clinic. All rights reserved.</p>
          <a href="/test" className="hover:text-blue-600">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App