import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Play } from 'lucide-react';
import { useState } from 'react';

const VideoModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative bg-white dark:bg-secondary-900 w-full max-w-4xl rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 flex justify-end">
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                <X className="w-6 h-6 text-secondary-500" />
              </button>
            </div>
            <div className="aspect-video bg-secondary-800 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-white opacity-80 mx-auto" />
                <p className="text-white mt-4">Video de demostración de TaskFlow</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
                Simplifica la gestión de proyectos
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Descubre cómo TaskFlow puede ayudar a tu equipo a ser más productivo, reducir el estrés y colaborar mejor, con una interfaz intuitiva y herramientas potentes diseñadas para equipos modernos.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="w-full h-full absolute inset-0 rounded-2xl overflow-hidden">
        <img
          src="/taskflow/images/equipo.webp" 
          alt="Equipo de trabajo utilizando TaskFlow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-800/70 to-primary-600/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Empieza a mejorar la productividad de tu equipo hoy mismo
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/80 mb-8"
          >
            Únete a más de 10.000 equipos que ya han transformado su forma de trabajar con TaskFlow
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#" 
              className="btn bg-white text-primary-600 hover:bg-white/90 text-lg px-8 py-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comenzar prueba gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              onClick={openModal}
              className="btn border-2 border-white/80 text-white hover:bg-white/20 text-lg px-8 py-4 group relative overflow-hidden backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Ver demostración
              </span>
              <motion.span 
                className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              ></motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default CTABanner; 