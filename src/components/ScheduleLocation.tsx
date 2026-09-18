import { motion } from 'motion/react';
import { Clock, MapPin, ExternalLink } from 'lucide-react';

export default function ScheduleLocation() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Horario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="horario"
          >
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
          </motion.div>

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="ubicacion"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-600/10 p-4 rounded-xl">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Encuéntranos</h2>
            </div>
            
            <div className="w-16 h-1 bg-red-600 mb-8"></div>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-2 overflow-hidden flex flex-col h-full">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative bg-neutral-800">
                {/* Embed Google Map or a placeholder representation */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.20253457585!2d-69.9329712!3d18.4716496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzE3LjkiTiA2OcKwNTUnNTguNyJX!5e0!3m2!1sen!2sdo!4v1611111111111!5m2!1sen!2sdo" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  title="Ubicación MAXWELL"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-luminosity"
                ></iframe>
                {/* Overlay map link to ensure mobile users can tap easily to open maps */}
                <a 
                  href="https://maps.app.goo.gl/uyeSFy5YWNAQEJtEA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Abrir Google Maps"
                ></a>
              </div>
              
              <div className="p-6">
                <p className="text-neutral-300 mb-6">
                  Visítanos en nuestras instalaciones. Equipamiento moderno, amplio espacio y excelente ubicación.
                </p>
                <a 
                  href="https://maps.app.goo.gl/uyeSFy5YWNAQEJtEA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-colors uppercase tracking-wide"
                >
                  <MapPin className="w-5 h-5" />
                  Ver en Google Maps
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
