import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
            Entrena más fuerte.<br />
            <span className="text-red-600">Sé más fuerte.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-lg leading-relaxed">
            Tu espacio para entrenar, mejorar y alcanzar tus objetivos. Equipamiento de primer nivel y el mejor ambiente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#planes"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 transition-colors uppercase tracking-wide"
            >
              Ver planes
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#ubicacion"
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-4 px-8 rounded flex items-center justify-center transition-colors uppercase tracking-wide"
            >
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
