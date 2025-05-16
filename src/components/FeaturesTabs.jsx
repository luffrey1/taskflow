import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, BarChart, Lock } from 'lucide-react';

const tabs = [
  {
    id: 'productivity',
    icon: <Clock className="w-5 h-5" />,
    label: 'Productividad',
    title: 'Aumenta la productividad de tu equipo',
    content: 'TaskFlow utiliza algoritmos de inteligencia artificial para ayudarte a priorizar tareas, sugerir plazos realistas y eliminar los cuellos de botella en tu flujo de trabajo. Nuestras herramientas automáticas de seguimiento del tiempo identifican dónde se invierte el esfuerzo para que puedas optimizar procesos.',
    image: '/taskflow/images/analytics.webp',
    stats: [
      { value: '32%', label: 'Aumento promedio de productividad' },
      { value: '12h', label: 'Horas ahorradas/semana' },
      { value: '68%', label: 'Reducción en reuniones innecesarias' }
    ]
  },
  {
    id: 'collaboration',
    icon: <Users className="w-5 h-5" />,
    label: 'Colaboración',
    title: 'Colaboración fluida en tiempo real',
    content: 'Trabaja con tu equipo simultáneamente en proyectos complejos sin problemas de sincronización. Comentarios en tareas, menciones a compañeros, documentos compartidos y asignación de actividades con un sencillo sistema de arrastrar y soltar. Ideal para equipos presenciales o remotos.',
    image: '/taskflow/images/teamcalendar.webp',
    stats: [
      { value: '100%', label: 'Visibilidad de tareas del equipo' },
      { value: '47%', label: 'Mejora en comunicación interna' },
      { value: '5min', label: 'Tiempo de respuesta promedio' }
    ]
  },
  {
    id: 'analytics',
    icon: <BarChart className="w-5 h-5" />,
    label: 'Análisis',
    title: 'Métricas avanzadas y reportes',
    content: 'Toma decisiones basadas en datos con nuestros completos dashboards analíticos. Visualiza el rendimiento del equipo, la distribución de cargas de trabajo, el cumplimiento de plazos y la evolución de los proyectos a lo largo del tiempo para identificar oportunidades de mejora.',
    image: '/taskflow/images/kanban.webp',
    stats: [
      { value: '87%', label: 'Precisión en estimaciones' },
      { value: '24/7', label: 'Monitoreo de proyectos' },
      { value: '16', label: 'Tipos de reportes personalizables' }
    ]
  },
  {
    id: 'security',
    icon: <Lock className="w-5 h-5" />,
    label: 'Seguridad',
    title: 'Protección avanzada de datos',
    content: 'Mantén tu información segura con cifrado de extremo a extremo, autenticación de múltiples factores y controles de acceso granulares. Cumplimos con GDPR, HIPAA y otras normas de seguridad internacionales para garantizar la privacidad y protección de tus datos en todo momento.',
    image: '/taskflow/images/taskmanag.webp',
    stats: [
      { value: '256bit', label: 'Encriptación de datos' },
      { value: '99.9%', label: 'Tiempo de actividad garantizado' },
      { value: '0', label: 'Incidentes de seguridad reportados' }
    ]
  }
];

const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary-50 dark:from-secondary-950 dark:to-secondary-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Características específicas por caso de uso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 dark:text-secondary-400"
          >
            Explora las funcionalidades de TaskFlow según tus necesidades
          </motion.p>
        </div>

        {/* Tabs navigation */}
        <div className="relative z-10 flex flex-wrap justify-center mb-12">
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
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-primary-500 rounded-full"
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

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Text content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                  {currentTab.title}
                </h3>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
                  {currentTab.content}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {currentTab.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-secondary-500 dark:text-secondary-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-200 dark:border-secondary-700"
              >
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="w-full rounded-xl"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent opacity-60"></div>
                
                {/* Badge */}
                <div className="absolute bottom-5 left-5 bg-white dark:bg-secondary-800 text-primary-600 dark:text-primary-400 py-1 px-3 rounded-full text-sm font-medium shadow-lg">
                  <span className="flex items-center">
                    {currentTab.icon}
                    <span className="ml-2">{currentTab.label}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTabs; 