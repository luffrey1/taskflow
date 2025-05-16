import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: '¿Qué es TaskFlow y cómo puede ayudar a mi equipo?',
    answer: 'TaskFlow es una herramienta de gestión de tareas diseñada para equipos que quieren mejorar su productividad. Permite organizar proyectos, asignar tareas, colaborar en tiempo real y hacer seguimiento del progreso de manera visual e intuitiva.'
  },
  {
    question: '¿Necesito instalar algún software para usar TaskFlow?',
    answer: 'No, TaskFlow es una aplicación 100% basada en la nube. Solo necesitas un navegador web moderno y conexión a internet. También ofrecemos aplicaciones nativas para iOS y Android que puedes descargar desde las tiendas oficiales.'
  },
  {
    question: '¿Cuántos usuarios puedo tener en mi cuenta?',
    answer: 'Depende del plan que elijas. El plan gratuito permite 1 usuario, el plan Profesional hasta 10 usuarios, y el plan Empresarial ofrece usuarios ilimitados. Todos los planes permiten invitar a colaboradores externos con acceso limitado sin coste adicional.'
  },
  {
    question: '¿Puedo integrar TaskFlow con otras herramientas que ya utilizo?',
    answer: 'Sí, TaskFlow se integra con numerosas herramientas populares como Slack, Google Workspace, Microsoft Office, Zoom, GitHub, Trello, Asana, y muchas más. Las integraciones disponibles varían según el plan elegido.'
  },
  {
    question: '¿Mis datos están seguros en TaskFlow?',
    answer: 'Absolutamente. Utilizamos cifrado de extremo a extremo, servidores seguros con certificación ISO 27001, y cumplimos con el RGPD y otras normativas de privacidad globales. Además, realizamos copias de seguridad diarias y ofrecemos autenticación de dos factores para todas las cuentas.'
  },
  {
    question: '¿Puedo cambiar de plan o cancelar en cualquier momento?',
    answer: 'Sí, puedes actualizar, degradar o cancelar tu suscripción en cualquier momento. Si cancelas, podrás seguir usando TaskFlow hasta el final del período de facturación. No hay períodos mínimos de compromiso ni penalizaciones por cancelación.'
  }
];

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <section className="section py-20 bg-white dark:bg-secondary-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Preguntas frecuentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Respuestas a las preguntas más comunes sobre TaskFlow
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto divide-y divide-secondary-200 dark:divide-secondary-800"
        >
          {faqItems.map((item, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full justify-between items-start text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-secondary-900 dark:text-white">
                  {item.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <ChevronDown 
                    className={`w-5 h-5 text-secondary-500 transition-transform duration-300 ${
                      openIndices.includes(index) ? 'transform rotate-180' : ''
                    }`} 
                  />
                </span>
              </button>
              <AnimatePresence>
                {openIndices.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-secondary-600 dark:text-secondary-400">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
            ¿Tienes más preguntas?
          </p>
          <a href="#contact" className="btn btn-primary">
            Contacta con nosotros
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 