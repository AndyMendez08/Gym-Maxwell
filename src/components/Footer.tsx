import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="text-red-600 w-8 h-8" />
              <span className="text-3xl font-black tracking-tighter text-white">MAXWELL</span>
            </div>
            <p className="text-neutral-400 font-medium tracking-wide uppercase">
              Entrena. Mejora. Supérate.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Información</h4>
            <div className="text-neutral-400 space-y-2">
              <p>
                <strong className="text-neutral-300">Horario:</strong><br />
                Lunes – Viernes | 6:00 AM – 10:00 PM<br />
                Sábado | 6:00 AM – 8:00 PM<br />
                Domingo | Cerrado
              </p>
              <p className="pt-2">
                <strong className="text-neutral-300">Teléfono:</strong><br />
                (809) 000-0000
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-neutral-400 hover:text-red-500 transition-colors">Inicio</a></li>
              <li><a href="#planes" className="text-neutral-400 hover:text-red-500 transition-colors">Planes</a></li>
              <li><a href="#zumba" className="text-neutral-400 hover:text-red-500 transition-colors">Zumba</a></li>
              <li><a href="#horario" className="text-neutral-400 hover:text-red-500 transition-colors">Horario</a></li>
              <li><a href="#ubicacion" className="text-neutral-400 hover:text-red-500 transition-colors">Ubicación</a></li>
              <li><a href="#contacto" className="text-neutral-400 hover:text-red-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-neutral-900 text-center md:text-left text-neutral-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} MAXWELL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
