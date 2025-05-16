import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section id="inicio" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-secondary-900 dark:to-secondary-950 -z-10"
        style={{ y, opacity }}
      ></motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary-900 dark:text-white"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Organiza tu trabajo.
              </motion.span> <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-primary-600 dark:text-primary-400 inline-block"
              >
                Gana tiempo.
              </motion.span> <br />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block"
              >
                Vive mejor.
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto lg:mx-0"
            >
              TaskFlow simplifica la gestión de tareas en equipo, aumenta la productividad y reduce el estrés con herramientas potentes y una interfaz intuitiva.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a 
                href="#" 
                className="btn btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Empieza gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#features" 
                className="btn btn-secondary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descubre más
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-sm text-secondary-500 dark:text-secondary-400"
            >
              <p>No necesitas tarjeta de crédito • 14 días de prueba completa</p>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 -left-4 w-72 h-72 bg-accent-300 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-20 dark:opacity-10"
                animate={{ 
                  x: [0, 10, 0], 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-8 right-4 w-72 h-72 bg-primary-300 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10"
                animate={{ 
                  x: [0, -10, 0], 
                  y: [0, 10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10, 
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 w-72 h-72 bg-primary-400 dark:bg-accent-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10"
                animate={{ 
                  x: [0, 10, 0], 
                  y: [0, 10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 9, 
                  ease: "easeInOut"
                }}
              ></motion.div>
            
              {/* Dashboard mockup */}
              <div className="relative">
                <motion.img
                  src="/taskflow/images/hero.webp"
                  alt="TaskFlow Dashboard"
                  className="rounded-xl shadow-2xl w-full"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                />
                {/* Floating UI elements */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-5 -right-5 bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-4 w-32"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    <div className="text-xs font-bold text-secondary-900 dark:text-white">Progreso</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold text-secondary-900 dark:text-white">78%</div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -bottom-5 -left-5 bg-white dark:bg-secondary-800 rounded-lg shadow-lg p-4 w-36"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                >
                  <div className="text-xs font-bold text-secondary-900 dark:text-white">Tareas completadas</div>
                  <div className="mt-1 text-xl font-bold text-secondary-900 dark:text-white">24/31</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 