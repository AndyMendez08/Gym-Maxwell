import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="bg-neutral-900 border-t border-b border-neutral-800">
      {/* Contact Question */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl">
              Estamos aquí para ayudarte. Llámanos para consultar sobre inscripciones, entrenamientos personalizados o cualquier otra duda.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a 
              href="tel:8090000000"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors text-xl whitespace-nowrap"
            >
              <Phone className="w-6 h-6" />
              (809) 000-0000
            </a>
            
            {/* TODO: Estructura preparada para WhatsApp posterior */}
            {/* <a 
              href="https://wa.me/18090000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-colors text-xl whitespace-nowrap"
            >
              WhatsApp
            </a> */}
          </div>
        </motion.div>
      </div>

      {/* Final Call to Action */}
      <div className="relative py-32 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" 
            alt="Atleta entrenando" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-10 font-light max-w-2xl mx-auto">
            Ven a entrenar con nosotros y comienza a trabajar por tus objetivos. El momento es ahora.
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-black py-5 px-12 rounded uppercase tracking-widest text-lg transition-transform hover:scale-105 active:scale-95"
          >
            Contactarnos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
