import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, Bell, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Check if dark mode is enabled on initial load
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
      setShowNotifications(false);
      setShowProfileMenu(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownClick = (e, dropdown) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const handleNotificationsClick = (e) => {
    e.stopPropagation();
    setShowNotifications(!showNotifications);
    setShowProfileMenu(false);
  };
  
  const handleProfileClick = (e) => {
    e.stopPropagation();
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg bg-white/70 dark:bg-secondary-900/80 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center">
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-accent-400">
                TaskFlow
              </span>
            </a>
          </motion.div>

          {/* Desktop menu */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="ml-10 flex items-center space-x-1">
              <a 
                href="#inicio" 
                className="px-3 py-2 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Inicio
              </a>
              
              <div className="relative">
                <button 
                  onClick={(e) => handleDropdownClick(e, 'features')}
                  className="px-3 py-2 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  Funciones
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'features' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="py-1">
                        <a href="#features" className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700">Tablero Kanban</a>
                        <a href="#features" className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700">Calendario integrado</a>
                        <a href="#features" className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700">Análisis y reportes</a>
                        <a href="#features" className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700">Aplicación móvil</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a 
                href="#pricing" 
                className="px-3 py-2 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Precios
              </a>
              
              <div className="relative">
                <button 
                  onClick={(e) => handleDropdownClick(e, 'resources')}
                  className="px-3 py-2 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center"
                >
                  Recursos
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="py-1">
                        <a 
                          href="#resources" 
                          className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700"
                          data-tab="blog"
                        >
                          Blog
                        </a>
                        <a 
                          href="#resources" 
                          className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700"
                          data-tab="guides"
                        >
                          Guías
                        </a>
                        <a 
                          href="#resources" 
                          className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700"
                          data-tab="webinars"
                        >
                          Webinars
                        </a>
                        <a 
                          href="#resources" 
                          className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700"
                          data-tab="support"
                        >
                          Soporte
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a 
                href="#contact" 
                className="px-3 py-2 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-secondary-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Contacto
              </a>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Dark mode toggle */}
            <motion.button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors relative"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-secondary-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Notifications button */}
            <div className="relative hidden md:block">
              <button 
                className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors relative"
                onClick={handleNotificationsClick}
              >
                <Bell className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary-500"></span>
              </button>
              
              <AnimatePresence>
                {showNotifications && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-3 border-b border-secondary-200 dark:border-secondary-700">
                      <h3 className="text-sm font-semibold text-secondary-900 dark:text-white">Notificaciones</h3>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      <div className="p-4 border-b border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-700">
                        <p className="text-sm font-medium text-secondary-900 dark:text-white">Nueva actualización disponible</p>
                        <p className="text-xs text-secondary-500 mt-1">Hace 10 minutos</p>
                      </div>
                      <div className="p-4 border-b border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-700">
                        <p className="text-sm font-medium text-secondary-900 dark:text-white">Julia compartió un tablero contigo</p>
                        <p className="text-xs text-secondary-500 mt-1">Hace 1 hora</p>
                      </div>
                      <div className="p-4 hover:bg-secondary-50 dark:hover:bg-secondary-700">
                        <p className="text-sm font-medium text-secondary-900 dark:text-white">Recordatorio: Reunión de equipo</p>
                        <p className="text-xs text-secondary-500 mt-1">Mañana, 10:00 AM</p>
                      </div>
                    </div>
                    <div className="p-2 border-t border-secondary-200 dark:border-secondary-700">
                      <a href="#" className="block w-full text-center text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline p-2">
                        Ver todas las notificaciones
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile menu */}
            <div className="relative hidden md:block">
              <button 
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                onClick={handleProfileClick}
              >
                <UserCircle className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </button>
              
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-secondary-800 ring-1 ring-black ring-opacity-5 z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700">Mi perfil</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-primary-50 dark:hover:bg-secondary-700">Configuración</a>
                      <div className="border-t border-secondary-200 dark:border-secondary-700 my-1"></div>
                      <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">Cerrar sesión</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.a 
              href="#" 
              className="hidden md:inline-flex btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Probar gratis
            </motion.a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6 text-secondary-600 dark:text-secondary-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 text-secondary-600 dark:text-secondary-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-secondary-900 shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#inicio"
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                Inicio
              </a>
              <a
                href="#features"
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                Funciones
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                Precios
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                Recursos
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md font-medium hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              >
                Contacto
              </a>
              <div className="pt-4 pb-2">
                <a
                  href="#"
                  className="block w-full text-center btn btn-primary"
                >
                  Probar gratis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 