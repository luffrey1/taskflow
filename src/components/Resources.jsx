import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MoreHorizontal, 
  BookOpen, 
  FileText, 
  Play, 
  HelpCircle, 
  ExternalLink,
  Clock,
  ArrowRight,
  Tag
} from 'lucide-react';

const resourcesData = {
  blog: [
    {
      id: 1,
      title: "5 estrategias para aumentar la productividad de tu equipo remoto",
      excerpt: "Descubre las mejores prácticas probadas para mantener a tu equipo remoto comprometido, productivo y colaborativo en tiempos de trabajo a distancia.",
      imageUrl: "/taskflow/images/analytics.webp",
      category: "Productividad",
      date: "8 May, 2023",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Cómo implementar una metodología ágil sin caer en el caos",
      excerpt: "Una guía paso a paso para transformar tu equipo tradicional a un enfoque ágil sin perder el control ni la predictibilidad de los proyectos.",
      imageUrl: "/taskflow/images/teamcalendar.webp",
      category: "Metodologías",
      date: "22 Abr, 2023",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "Automatización de flujos de trabajo: por dónde empezar",
      excerpt: "Aprende a identificar las tareas repetitivas que están consumiendo el tiempo de tu equipo y cómo automatizarlas eficazmente con TaskFlow.",
      imageUrl: "/taskflow/images/taskmanag.webp",
      category: "Automatización",
      date: "3 Mar, 2023",
      readTime: "6 min"
    }
  ],
  guides: [
    {
      id: 1,
      title: "Guía completa de Kanban",
      excerpt: "Todo lo que necesitas saber sobre la metodología Kanban y cómo implementarla efectivamente en tu equipo usando TaskFlow.",
      icon: "🔄",
      downloadUrl: "#",
      pages: 28
    },
    {
      id: 2,
      title: "Manual de onboarding para nuevos miembros",
      excerpt: "Integra nuevos miembros a tu equipo sin fricciones con esta guía detallada de onboarding usando TaskFlow.",
      icon: "👋",
      downloadUrl: "#",
      pages: 15
    },
    {
      id: 3,
      title: "Plantillas para reportes semanales",
      excerpt: "Colección de plantillas para reportes de progreso semanales que puedes personalizar según las necesidades de tu equipo.",
      icon: "📊",
      downloadUrl: "#",
      pages: 10
    }
  ],
  webinars: [
    {
      id: 1,
      title: "Masterclass: Gestión visual de proyectos",
      date: "15 Jun, 2023 • 14:00 CEST",
      thumbnail: "/taskflow/images/kanban.webp",
      duration: "45 min",
      registerUrl: "#"
    },
    {
      id: 2,
      title: "Caso de estudio: Cómo Acme Corp redujo sus plazos en un 40%",
      date: "28 Jun, 2023 • 11:00 CEST",
      thumbnail: "/taskflow/images/teamcalendar.webp",
      duration: "60 min",
      registerUrl: "#"
    },
    {
      id: 3,
      title: "Panel de expertos: El futuro del trabajo colaborativo",
      date: "10 Jul, 2023 • 16:00 CEST",
      thumbnail: "/taskflow/images/analytics.webp",
      duration: "90 min",
      registerUrl: "#"
    }
  ],
  support: {
    sections: [
      {
        title: "Centro de ayuda",
        description: "Explora nuestra base de conocimiento con artículos detallados, tutoriales y preguntas frecuentes.",
        icon: <BookOpen className="w-10 h-10" />,
        cta: "Visitar centro de ayuda",
        link: "#"
      },
      {
        title: "Documentación técnica",
        description: "Guías técnicas y referencias de API para desarrolladores que integran TaskFlow.",
        icon: <FileText className="w-10 h-10" />,
        cta: "Ver documentación",
        link: "#"
      },
      {
        title: "Videotutoriales",
        description: "Aprende visualmente con nuestros tutoriales en vídeo paso a paso para todas las funcionalidades.",
        icon: <Play className="w-10 h-10" />,
        cta: "Ver tutoriales",
        link: "#"
      },
      {
        title: "Soporte personalizado",
        description: "¿Necesitas ayuda específica? Nuestro equipo de soporte está listo para asistirte 24/7.",
        icon: <HelpCircle className="w-10 h-10" />,
        cta: "Contactar soporte",
        link: "#contact"
      }
    ],
    faq: [
      {
        question: "¿Cómo puedo invitar a nuevos miembros a mi equipo?",
        answer: "Desde el panel de administración, ve a 'Miembros del equipo' y haz clic en 'Invitar'. Introduce los correos electrónicos y selecciona los permisos adecuados."
      },
      {
        question: "¿Puedo exportar mis datos a otras plataformas?",
        answer: "Sí, TaskFlow permite exportar todos tus datos en formatos como CSV, JSON y Excel. Ve a Configuración > Datos > Exportar para acceder a estas opciones."
      },
      {
        question: "¿Qué nivel de seguridad ofrece TaskFlow?",
        answer: "TaskFlow utiliza cifrado de nivel bancario, autenticación de múltiples factores y cumple con GDPR, HIPAA y otras normativas de protección de datos internacionales."
      }
    ]
  }
};

const ResourceTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'blog', label: 'Blog', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'guides', label: 'Guías', icon: <FileText className="w-4 h-4" /> },
    { id: 'webinars', label: 'Webinars', icon: <Play className="w-4 h-4" /> },
    { id: 'support', label: 'Soporte', icon: <HelpCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="flex justify-center mb-12 resources-tabs">
      <div className="bg-white dark:bg-secondary-800 rounded-full p-1.5 shadow-lg inline-flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'text-white'
                : 'text-secondary-700 dark:text-secondary-300 hover:text-secondary-900 dark:hover:text-white'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeResourceTab"
                className="absolute inset-0 bg-accent-500 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Blog card component
const BlogCard = ({ post }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg border border-secondary-100 dark:border-secondary-700 h-full flex flex-col transform-gpu hover:shadow-xl transition-all duration-300"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
      />
      <div className="absolute top-4 left-4">
        <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6 flex-grow">
      <div className="flex items-center text-xs text-secondary-500 dark:text-secondary-400 mb-3">
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {post.date}
        </span>
        <span className="mx-2">•</span>
        <span>{post.readTime} lectura</span>
      </div>
      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 leading-tight">
        {post.title}
      </h3>
      <p className="text-secondary-600 dark:text-secondary-400 line-clamp-3 mb-4">
        {post.excerpt}
      </p>
    </div>
    <div className="px-6 pb-6 mt-auto">
      <a 
        href="#" 
        className="text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 font-medium flex items-center text-sm"
      >
        Leer artículo
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </motion.div>
);

// Guide card component
const GuideCard = ({ guide }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg border border-secondary-100 dark:border-secondary-700 h-full flex flex-col p-6 transform-gpu hover:shadow-xl transition-all duration-300"
  >
    <div className="mb-4 text-4xl">{guide.icon}</div>
    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 leading-tight">
      {guide.title}
    </h3>
    <p className="text-secondary-600 dark:text-secondary-400 mb-6">
      {guide.excerpt}
    </p>
    <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-6">
      <FileText className="w-4 h-4 mr-2" /> {guide.pages} páginas
    </div>
    <div className="mt-auto">
      <a 
        href={guide.downloadUrl}
        className="btn btn-accent w-full flex items-center justify-center"
      >
        Descargar PDF
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  </motion.div>
);

// Webinar card component
const WebinarCard = ({ webinar }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg border border-secondary-100 dark:border-secondary-700 h-full flex flex-col transform-gpu hover:shadow-xl transition-all duration-300"
  >
    <div className="relative h-40 overflow-hidden">
      <img 
        src={webinar.thumbnail} 
        alt={webinar.title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
      <div className="absolute bottom-3 left-3 flex items-center text-white text-xs font-medium">
        <Play className="w-4 h-4 mr-1.5 text-accent-500" />
        {webinar.duration}
      </div>
    </div>
    <div className="p-6 flex-grow">
      <div className="mb-3 px-3 py-1.5 bg-secondary-100 dark:bg-secondary-700/50 text-secondary-700 dark:text-secondary-300 text-xs rounded-full inline-block">
        {webinar.date}
      </div>
      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6 leading-tight">
        {webinar.title}
      </h3>
    </div>
    <div className="px-6 pb-6 mt-auto">
      <a 
        href={webinar.registerUrl}
        className="btn btn-accent w-full flex items-center justify-center"
      >
        Registrarse
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  </motion.div>
);

// Support section component
const SupportSection = ({ data }) => (
  <div className="space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.sections.map((section, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden shadow-lg border border-secondary-100 dark:border-secondary-700 p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="text-accent-500 mb-4">{section.icon}</div>
          <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
            {section.title}
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-6">
            {section.description}
          </p>
          <a 
            href={section.link}
            className="text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 font-medium flex items-center"
          >
            {section.cta}
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      ))}
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
        Preguntas frecuentes
      </h3>
      <div className="max-w-3xl mx-auto">
        {data.faq.map((item, index) => (
          <FaqItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </div>
);

// FAQ item with accordion functionality
const FaqItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-4 border border-secondary-200 dark:border-secondary-700 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex justify-between items-center text-left bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700/50 transition-colors"
      >
        <span className="font-medium text-secondary-900 dark:text-white">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-secondary-500"
        >
          <MoreHorizontal className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-secondary-50 dark:bg-secondary-800/50 text-secondary-600 dark:text-secondary-300">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Resources = () => {
  const [activeTab, setActiveTab] = useState('blog');
  
  // Detectar tab en la URL al cargar y al cambiar el hash
  useEffect(() => {
    const setTabFromHash = () => {
      const hash = window.location.hash;
      if (hash.includes('?tab=')) {
        const tabParam = hash.split('?tab=')[1];
        const validTabs = ['blog', 'guides', 'webinars', 'support'];
        if (validTabs.includes(tabParam)) {
          setActiveTab(tabParam);
        }
      }
    };
    
    // Ejecutar al montar el componente
    setTabFromHash();
    
    // Ejecutar cuando cambie el hash
    window.addEventListener('hashchange', setTabFromHash);
    
    // Escuchar el evento personalizado de cambio de pestaña
    const handleTabChangeEvent = (e) => {
      const { tab } = e.detail;
      const validTabs = ['blog', 'guides', 'webinars', 'support'];
      if (validTabs.includes(tab)) {
        setActiveTab(tab);
        
        // Asegurar que el sistema de pestañas esté visible
        setTimeout(() => {
          const tabsElement = document.querySelector('.resources-tabs');
          if (tabsElement) {
            tabsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 100);
      }
    };
    
    document.addEventListener('tabChange', handleTabChangeEvent);
    
    return () => {
      window.removeEventListener('hashchange', setTabFromHash);
      document.removeEventListener('tabChange', handleTabChangeEvent);
    };
  }, []);
  
  // Actualizar el hash cuando cambia la pestaña activa
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    
    // Actualizar la URL sin recargar la página
    const baseHash = '#resources';
    const newHash = `${baseHash}?tab=${tabId}`;
    
    // Si ya estamos en #resources, solo cambiamos el parámetro
    if (window.location.hash.startsWith(baseHash)) {
      window.history.replaceState(null, null, newHash);
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-secondary-50 to-white dark:from-secondary-950 dark:to-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Recursos para potenciar tu productividad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Explora nuestro contenido educativo, guías y herramientas para sacar el máximo provecho a TaskFlow
          </motion.p>
        </div>

        <ResourceTabs activeTab={activeTab} setActiveTab={handleTabChange} />

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === 'blog' && (
              <motion.div
                key="blog"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {resourcesData.blog.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-accent"
                  >
                    Ver todos los artículos
                  </motion.a>
                </div>
              </motion.div>
            )}

            {activeTab === 'guides' && (
              <motion.div
                key="guides"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {resourcesData.guides.map(guide => (
                    <GuideCard key={guide.id} guide={guide} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-accent"
                  >
                    Explorar biblioteca de guías
                  </motion.a>
                </div>
              </motion.div>
            )}

            {activeTab === 'webinars' && (
              <motion.div
                key="webinars"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {resourcesData.webinars.map(webinar => (
                    <WebinarCard key={webinar.id} webinar={webinar} />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-accent"
                  >
                    Ver todos los webinars
                  </motion.a>
                </div>
              </motion.div>
            )}

            {activeTab === 'support' && (
              <motion.div
                key="support"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SupportSection data={resourcesData.support} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Resources; 