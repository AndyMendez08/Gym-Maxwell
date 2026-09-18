import React from 'react';

export function Zumba() {
  return (
    <section id="zumba" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-red-600/10 z-10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1470&auto=format&fit=crop" 
                alt="Clase de Zumba" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-right-8 duration-1000 fill-mode-both delay-200">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Clases de Zumba</h2>
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Combina diversión y ejercicio cardiovascular al ritmo de la música. Nuestras clases de Zumba están diseñadas para quemar calorías, tonificar tu cuerpo y llenarte de energía positiva. ¡Ven y baila con nosotros!
            </p>
            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl inline-block w-full max-w-md">
              <h3 className="text-red-500 font-bold uppercase tracking-widest mb-4">Horarios de Zumba</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-neutral-800 pb-2">
                  <span className="text-white font-medium text-lg">Lunes</span>
                  <span className="text-neutral-400">7:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-neutral-800 pb-2">
                  <span className="text-white font-medium text-lg">Miércoles</span>
                  <span className="text-neutral-400">7:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-white font-medium text-lg">Viernes</span>
                  <span className="text-neutral-400">7:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <a 
                href="#contacto" 
                className="inline-block bg-white hover:bg-neutral-200 text-neutral-950 font-bold py-3 px-8 rounded uppercase tracking-wide transition-colors"
              >
                Inscribirme ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
