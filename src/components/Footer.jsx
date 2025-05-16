import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Producto',
      links: [
        { name: 'Características', href: '#features' },
        { name: 'Precios', href: '#pricing' },
        { name: 'Integraciones', href: '#' },
        { name: 'Hoja de ruta', href: '#' },
        { name: 'Novedades', href: '#' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Documentación', href: '#' },
        { name: 'Guías', href: '#' },
        { name: 'Tutoriales', href: '#' },
        { name: 'Webinars', href: '#' },
        { name: 'Blog', href: '#' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre nosotros', href: '#' },
        { name: 'Clientes', href: '#' },
        { name: 'Empleo', href: '#' },
        { name: 'Prensa', href: '#' },
        { name: 'Contacto', href: '#contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos de servicio', href: '#' },
        { name: 'Política de privacidad', href: '#' },
        { name: 'Política de cookies', href: '#' },
        { name: 'Seguridad', href: '#' },
        { name: 'Accesibilidad', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-white dark:bg-secondary-950 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and info */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400">
                TaskFlow
              </span>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Simplifica la gestión de tareas y mejora la productividad de tu equipo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  aria-label={link.label}
                  className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-bold text-secondary-900 dark:text-white mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-secondary-400 dark:text-secondary-300 tracking-wider uppercase mb-4">
              Recursos
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#resources" 
                  className="text-base text-secondary-500 dark:text-secondary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  data-tab="blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#resources" 
                  className="text-base text-secondary-500 dark:text-secondary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  data-tab="guides"
                >
                  Guías y tutoriales
                </a>
              </li>
              <li>
                <a 
                  href="#resources" 
                  className="text-base text-secondary-500 dark:text-secondary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  data-tab="webinars"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a 
                  href="#resources" 
                  className="text-base text-secondary-500 dark:text-secondary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  data-tab="support"
                >
                  Centro de ayuda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-200 dark:border-secondary-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-600 dark:text-secondary-400 text-sm">
            &copy; {currentYear} TaskFlow. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <select 
              className="bg-white dark:bg-secondary-900 border border-secondary-300 dark:border-secondary-700 rounded-md text-secondary-600 dark:text-secondary-400 text-sm px-3 py-1"
              defaultValue="es"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.div 
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <a 
          href="#inicio" 
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer; 