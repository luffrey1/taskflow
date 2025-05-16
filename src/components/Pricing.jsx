import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    id: 'free',
    name: 'Gratuito',
    description: 'Ideal para uso personal o equipos pequeños.',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      { text: 'Hasta 10 tareas', included: true },
      { text: 'Hasta 3 proyectos', included: true },
      { text: 'Vista Kanban básica', included: true },
      { text: '1 usuario', included: true },
      { text: 'Aplicación móvil', included: true },
      { text: 'Notificaciones básicas', included: true },
      { text: 'Colaboración en tiempo real', included: false },
      { text: 'Integración con otras herramientas', included: false },
      { text: 'Tableros avanzados', included: false },
      { text: 'Soporte prioritario', included: false },
    ],
    cta: 'Comenzar gratis',
    popular: false,
    bgClass: 'bg-white dark:bg-secondary-900',
    buttonClass: 'btn-secondary'
  },
  {
    id: 'pro',
    name: 'Profesional',
    description: 'Perfecto para equipos medianos y profesionales.',
    priceMonthly: 12,
    priceYearly: 120,
    features: [
      { text: 'Tareas ilimitadas', included: true },
      { text: 'Hasta 50 proyectos', included: true },
      { text: 'Vistas Kanban, Lista y Calendario', included: true },
      { text: 'Hasta 10 usuarios', included: true },
      { text: 'Aplicación móvil premium', included: true },
      { text: 'Notificaciones avanzadas', included: true },
      { text: 'Colaboración en tiempo real', included: true },
      { text: 'Integraciones básicas', included: true },
      { text: 'Tableros avanzados', included: false },
      { text: 'Soporte prioritario', included: false },
    ],
    cta: 'Comenzar prueba gratuita',
    popular: true,
    bgClass: 'bg-primary-50 dark:bg-primary-900/20',
    buttonClass: 'btn-primary'
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    description: 'Para empresas con necesidades complejas.',
    priceMonthly: 29,
    priceYearly: 290,
    features: [
      { text: 'Tareas ilimitadas', included: true },
      { text: 'Proyectos ilimitados', included: true },
      { text: 'Todas las vistas disponibles', included: true },
      { text: 'Usuarios ilimitados', included: true },
      { text: 'Aplicación móvil premium', included: true },
      { text: 'Notificaciones avanzadas', included: true },
      { text: 'Colaboración en tiempo real', included: true },
      { text: 'Todas las integraciones', included: true },
      { text: 'Tableros avanzados personalizables', included: true },
      { text: 'Soporte prioritario 24/7', included: true },
    ],
    cta: 'Contactar con ventas',
    popular: false,
    bgClass: 'bg-white dark:bg-secondary-900',
    buttonClass: 'btn-secondary'
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="pricing" className="section py-20 bg-secondary-50 dark:bg-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-100 via-accent-200 to-accent-300 dark:from-accent-900/40 dark:via-accent-800/30 dark:to-accent-700/20"></div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/6 right-1/6 w-64 h-64 rounded-full border-8 border-accent-200 dark:border-accent-700/40 opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/12 w-40 h-40 rounded-full border-4 border-accent-300 dark:border-accent-600/40 opacity-70"></div>
          
          <div className="absolute top-1/3 left-1/5 w-20 h-40 border-4 border-accent-300 dark:border-accent-600/40 rotate-12 opacity-60"></div>
          <div className="absolute bottom-1/5 right-1/4 w-32 h-32 bg-accent-200/30 dark:bg-accent-700/20 rotate-45 opacity-50"></div>
          
          <div className="absolute top-2/3 right-1/3 w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-accent-300/40 dark:border-b-accent-500/30 border-r-[50px] border-r-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Precios transparentes para todos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Escoge el plan que mejor se adapte a tus necesidades
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 inline-flex items-center bg-white dark:bg-secondary-800 p-1 rounded-lg"
          >
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !annual ? 'bg-primary-500 text-white' : 'text-secondary-600 dark:text-secondary-400'
              }`}
              onClick={() => setAnnual(false)}
            >
              Mensual
            </button>
            <button 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                annual ? 'bg-primary-500 text-white' : 'text-secondary-600 dark:text-secondary-400'
              }`}
              onClick={() => setAnnual(true)}
            >
              Anual <span className="text-xs font-semibold ml-1">-20%</span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative rounded-2xl shadow-lg ${plan.bgClass} overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Más popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-secondary-900 dark:text-white">
                    €{annual ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  {plan.priceMonthly > 0 && (
                    <span className="text-secondary-500 dark:text-secondary-400 ml-2">
                      /{annual ? 'año' : 'mes'}
                    </span>
                  )}
                </div>
                <a 
                  href="#" 
                  className={`btn ${plan.buttonClass} w-full justify-center mb-8`}
                >
                  {plan.cta}
                </a>

                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-secondary-400 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-secondary-700 dark:text-secondary-300' : 'text-secondary-500 dark:text-secondary-500'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">
            ¿Necesitas un plan personalizado para tu empresa?
          </p>
          <a href="#contact" className="font-medium text-primary-600 dark:text-primary-400 hover:underline">
            Contacta con nuestro equipo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 