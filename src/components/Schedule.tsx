import React from 'react';
import { Clock } from 'lucide-react';

export function Schedule() {
  return (
    <div id="horario" className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-red-600/10 p-4 rounded-xl">
          <Clock className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Horario</h2>
      </div>
      <div className="w-16 h-1 bg-red-600 mb-8"></div>
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
            <span className="text-xl font-bold text-white uppercase tracking-wide">Lunes – Viernes</span>
            <span className="text-lg text-red-500 font-medium">6:00 AM – 10:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
            <span className="text-xl font-bold text-white uppercase tracking-wide">Sábado</span>
            <span className="text-lg text-red-500 font-medium">6:00 AM – 8:00 PM</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-xl font-bold text-white uppercase tracking-wide">Domingo</span>
            <span className="text-lg text-neutral-500 font-medium bg-neutral-950 px-3 py-1 rounded">Cerrado</span>
          </div>
        </div>
        <p className="text-neutral-400 mt-8">
          Nuestras instalaciones están disponibles durante un amplio horario para que puedas entrenar sin que el tiempo sea una excusa.
        </p>
      </div>
    </div>
  );
}
