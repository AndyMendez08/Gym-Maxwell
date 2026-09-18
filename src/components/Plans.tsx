import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Plan Básico',
      price: 'RD$1,000',
      period: '/mes',
      description: 'Acceso al gimnasio para entrenar a tu ritmo.',
      features: ['Acceso al gimnasio', 'Uso de máquinas y pesas'],
      buttonText: 'Elegir plan',
      highlight: false,
    },
    {
      name: 'Plan Premium',
      price: 'RD$1,400',
      period: '/mes',
      description: 'La mejor experiencia con guía personalizada.',
      features: ['Acceso al gimnasio', 'Entrenador personal', 'Rutinas personalizadas'],
      buttonText: 'Elegir plan',
      highlight: true,
    },
    {
      name: 'Pago por Día',
      price: 'RD$100',
      period: '/día',
      description: 'Una opción flexible si no puedes pagar una inscripción mensual.',
      features: ['Acceso completo por un día', 'Ideal para visitantes', 'Sin compromisos'],
      buttonText: 'Contactar',
      highlight: false,
    }
  ];

  return (
    <section id="planes" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Elige tu plan</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Opciones adaptadas a tus necesidades para que comiences a lograr tus metas sin excusas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.highlight 
                  ? 'bg-neutral-900 border-2 border-red-600 shadow-2xl shadow-red-900/20 md:-translate-y-4' 
                  : 'bg-neutral-900/50 border border-neutral-800'
              } p-8 flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-b-lg">
                  Recomendado
                </div>
              )}
              
              <div className="mb-8 mt-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-neutral-500 font-medium">{plan.period}</span>
                </div>
                <p className="text-neutral-400 mt-4 h-12">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-red-600/20 p-1 rounded-full mt-0.5">
                      <Check className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contacto"
                className={`w-full text-center py-4 rounded font-bold uppercase tracking-wide transition-colors ${
                  plan.highlight 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
