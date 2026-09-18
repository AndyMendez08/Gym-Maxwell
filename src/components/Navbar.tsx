import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2 group">
          <Dumbbell className="text-red-600 w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-black tracking-tighter text-white">MAXWELL</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Inicio', 'Planes', 'Zumba', 'Horario', 'Ubicación', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-neutral-300 hover:text-red-500 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-bold transition-colors uppercase text-sm tracking-wider"
          >
            Únete hoy
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 absolute w-full top-full left-0 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {['Inicio', 'Planes', 'Zumba', 'Horario', 'Ubicación', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-red-500 font-medium text-lg py-2 border-b border-neutral-800/50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
