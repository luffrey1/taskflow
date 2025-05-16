import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Check,
  AlertCircle
} from 'lucide-react';

// Componente reutilizable para los campos del formulario
const FormField = ({ label, name, type = 'text', placeholder, value, onChange, error, required = false }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? 'border-red-400 dark:border-red-500' : 'border-secondary-200 dark:border-secondary-700'
        } bg-white dark:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 backdrop-blur-md ${
          error ? 'focus:border-red-400' : 'focus:border-accent-500'
        }`}
        required={required}
      />
      {error && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
          <AlertCircle size={18} />
        </div>
      )}
    </div>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulación de envío
      setFormStatus('loading');
      
      setTimeout(() => {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      }, 1500);
    }
  };

  // Variantes para las animaciones de los elementos de contacto
  const contactItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  // Datos de contacto
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'info@taskflow.com',
      link: 'mailto:info@taskflow.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Teléfono',
      value: '+34 91 555 44 33',
      link: 'tel:+34915554433'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Dirección',
      value: 'Calle Principal 123, Madrid, España',
      link: 'https://maps.google.com/?q=Madrid,España'
    }
  ];

  // Formas decorativas para el fondo
  const decorativeShapes = [
    { color: 'bg-accent-500/20', size: 'w-64 h-64', top: '-top-12', left: '-left-12', blur: 'blur-3xl' },
    { color: 'bg-primary-500/20', size: 'w-72 h-72', bottom: '-bottom-20', right: '-right-20', blur: 'blur-3xl' },
    { color: 'bg-secondary-500/10', size: 'w-96 h-96', top: 'top-1/2', left: 'left-1/3', blur: 'blur-3xl' }
  ];

  // Social media
  const socialMedia = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Fondos decorativos */}
      {decorativeShapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.color} ${shape.size} ${shape.top} ${shape.left} ${shape.right} ${shape.bottom} ${shape.blur} rounded-full pointer-events-none opacity-70`}
        ></div>
      ))}

      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-950 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Estamos para ayudarte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Información de contacto */}
          <div className="space-y-10">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={contactItemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-accent-500 bg-opacity-10 rounded-lg p-3 text-accent-600 dark:text-accent-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-secondary-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                Síguenos en redes sociales
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:text-accent-500 dark:hover:text-accent-400 p-3 rounded-full shadow-sm border border-secondary-100 dark:border-secondary-700 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-100 dark:border-secondary-700 shadow-xl"
            >
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                Horario de atención
              </h3>
              <ul className="space-y-3 text-secondary-600 dark:text-secondary-400">
                <li className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">Cerrado</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-100 dark:border-secondary-700 shadow-xl relative overflow-hidden"
          >
            {/* Formas decorativas para el formulario */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
              Envíanos un mensaje
            </h3>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-800/30 rounded-full text-green-600 dark:text-green-400 mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-green-700 dark:text-green-500">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-1"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <FormField
                      label="Nombre"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />
                  </div>
                  
                  <FormField
                    label="Asunto"
                    name="subject"
                    placeholder="¿Sobre qué quieres hablar?"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-400 dark:border-red-500' : 'border-secondary-200 dark:border-secondary-700'
                        } bg-white dark:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 backdrop-blur-md ${
                          errors.message ? 'focus:border-red-400' : 'focus:border-accent-500'
                        }`}
                        required
                      ></textarea>
                      {errors.message && (
                        <div className="absolute right-3 top-6 text-red-500">
                          <AlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg shadow-accent-500/20 flex items-center justify-center transition-all duration-200"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                  
                  <p className="text-center text-xs text-secondary-500 dark:text-secondary-400 mt-4">
                    Al enviar este formulario, aceptas nuestra <a href="#" className="text-accent-500 hover:underline">política de privacidad</a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 