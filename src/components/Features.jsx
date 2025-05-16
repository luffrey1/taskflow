import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Trello, 
  Users, 
  Clock, 
  Zap, 
  Globe, 
  Lock, 
  BarChart, 
  Smartphone 
} from 'lucide-react';

const featuresList = [
  {
    icon: <Trello />,
    title: 'Kanban inteligente',
    description: 'Organiza tus tareas con un tablero visual que se adapta a tu forma de trabajar y optimiza tu flujo de trabajo.',
    color: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
  },
  {
    icon: <Users />,
    title: 'Colaboración en tiempo real',
    description: 'Trabaja con tu equipo simultáneamente, asigna tareas y mantén a todos sincronizados sin esfuerzo.',
    color: 'bg-secondary-100 dark:bg-secondary-800/50 text-secondary-700 dark:text-secondary-300'
  },
  {
    icon: <Clock />,
    title: 'Recordatorios automáticos',
    description: 'Nunca olvides una tarea importante con recordatorios inteligentes que se adaptan a tus hábitos de trabajo.',
    color: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300'
  },
  {
    icon: <Zap />,
    title: 'Automatizaciones personalizadas',
    description: 'Automatiza procesos repetitivos y ahorra tiempo con flujos de trabajo que se ejecutan solos.',
    color: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
  },
  {
    icon: <Globe />,
    title: 'Acceso desde cualquier lugar',
    description: 'Accede a tus tareas desde cualquier dispositivo y ubicación, siempre sincronizado en tiempo real.',
    color: 'bg-secondary-100 dark:bg-secondary-800/50 text-secondary-700 dark:text-secondary-300'
  },
  {
    icon: <Lock />,
    title: 'Seguridad avanzada',
    description: 'Tus datos están seguros con cifrado de extremo a extremo y control total sobre los permisos de acceso.',
    color: 'bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300'
  },
  {
    icon: <BarChart />,
    title: 'Análisis y reportes',
    description: 'Obtén insights valiosos sobre la productividad de tu equipo y el progreso de los proyectos.',
    color: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
  },
  {
    icon: <Smartphone />,
    title: 'Aplicación móvil completa',
    description: 'Lleva tus tareas en el bolsillo con nuestra app móvil con todas las funcionalidades de la versión web.',
    color: 'bg-secondary-100 dark:bg-secondary-800/50 text-secondary-700 dark:text-secondary-300'
  }
];

const FeatureItem = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-secondary-100 dark:border-secondary-800"
    >
      <motion.div 
        className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-6`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="w-7 h-7">{feature.icon}</span>
      </motion.div>
      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-secondary-600 dark:text-secondary-400">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="features" 
      className="section bg-white dark:bg-secondary-950 py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100 dark:bg-primary-800/30 rounded-full -translate-y-1/4 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-primary-200 dark:bg-primary-700/20 rounded-full translate-y-1/4 -translate-x-1/4 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-primary-300/50 dark:bg-primary-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 border-8 border-primary-200 dark:border-primary-700/30" 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-8 border-primary-300 dark:border-primary-600/30 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-3/4 right-1/3 w-20 h-20 bg-primary-100 dark:bg-primary-800/20"
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Características diseñadas para impulsar tu productividad
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Descubre cómo TaskFlow transforma la forma en que gestionas tus tareas y proyectos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 