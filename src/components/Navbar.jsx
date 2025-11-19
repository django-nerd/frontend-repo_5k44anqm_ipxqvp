import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-extrabold text-slate-800">BluePaws Vet</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#appointment" className="hover:text-blue-600">Book</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="md:hidden px-3 py-2 rounded border border-slate-300" onClick={() => setOpen(v=>!v)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-slate-700">
            <a href="#services" onClick={()=>setOpen(false)}>Services</a>
            <a href="#appointment" onClick={()=>setOpen(false)}>Book</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar