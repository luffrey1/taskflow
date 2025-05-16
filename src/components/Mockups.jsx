import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const mockups = [
  {
    id: 1,
    src: '/taskflow/images/kanban.webp',
    alt: 'Vista del tablero Kanban de TaskFlow',
    title: 'Tablero Kanban intuitivo'
  },
  {
    id: 2,
    src: '/taskflow/images/teamcalendar.webp',
    alt: 'Vista del calendario de TaskFlow',
    title: 'Calendario integrado'
  },
  {
    id: 3,
    src: '/taskflow/images/analytics.webp',
    alt: 'Análisis y reportes de TaskFlow',
    title: 'Reportes detallados'
  },
  {
    id: 4,
    src: '/taskflow/images/taskmanag.webp',
    alt: 'Aplicación móvil de TaskFlow',
    title: 'Aplicación móvil nativa'
  }
];

const MockupCard = ({ mockup, index }) => {
  const [hoverState, setHoverState] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setHoverState({ x, y });
  };
  
  const handleMouseLeave = () => {
    setHoverState({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${hoverState.y * 10}deg) rotateY(${hoverState.x * -10}deg)`,
        transition: 'transform 0.3s ease'
      }}
      className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-0 pb-[66%] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 z-10"
          style={{
            opacity: Math.sqrt(hoverState.x ** 2 + hoverState.y ** 2) * 0.5 + 0.3,
            background: `radial-gradient(circle at ${50 + hoverState.x * 100}% ${50 + hoverState.y * 100}%, rgba(99, 102, 241, 0.3), transparent)`
          }}
        />
        <motion.img 
          src={mockup.src} 
          alt={mockup.alt} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            scale: 1 + Math.sqrt(hoverState.x ** 2 + hoverState.y ** 2) * 0.1,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10"></div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 text-white z-20"
          style={{
            y: 15 * Math.abs(hoverState.y),
            x: 5 * Math.abs(hoverState.x),
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold">{mockup.title}</h3>
          <motion.div 
            className="h-1 w-0 bg-primary-500 mt-2 group-hover:w-1/3"
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Mockups = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section ref={sectionRef} className="section py-20 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-900 dark:to-secondary-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Diseñado para mejorar la productividad
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Descubre todas las vistas y herramientas que TaskFlow pone a tu disposición
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockups.map((mockup, index) => (
            <MockupCard key={mockup.id} mockup={mockup} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a 
            href="#" 
            className="btn btn-primary text-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar una demo personalizada
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Mockups; 