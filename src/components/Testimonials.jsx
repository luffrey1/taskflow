import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "TaskFlow ha revolucionado la forma en que gestionamos nuestros proyectos. La interfaz intuitiva y las funciones avanzadas nos han permitido aumentar nuestra productividad en un 30%.",
    name: "Ana Rodríguez",
    position: "Directora de Proyectos, TechSolutions",
    avatar: "/taskflow/images/mujergerente30.avif",
    rating: 5
  },
  {
    id: 2,
    content: "Desde que implementamos TaskFlow, nuestro equipo ha mejorado enormemente la comunicación y coordinación. Las actualizaciones en tiempo real y el sistema de comentarios son excelentes.",
    name: "Miguel Sánchez",
    position: "CTO, Innovatech",
    avatar: "/taskflow/images/hombre30.avif",
    rating: 5
  },
  {
    id: 3,
    content: "Como startup con equipos remotos, TaskFlow nos ha ayudado a mantener a todos alineados. La aplicación móvil es increíblemente útil para mantenernos actualizados en movimiento.",
    name: "Laura González",
    position: "Fundadora, RemoteWorks",
    avatar: "/taskflow/images/mujerlatina35.avif",
    rating: 4
  }
];

const Testimonials = () => {
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
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Miles de equipos ya han mejorado su productividad con TaskFlow
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg p-8 border border-secondary-100 dark:border-secondary-800 h-full flex flex-col"
            >
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-secondary-300'}`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-secondary-600 dark:text-secondary-300 mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-secondary-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-500 dark:text-secondary-400">
            Más de 500 reseñas con una valoración media de 4.8/5
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 