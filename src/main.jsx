import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Función para manejar el desplazamiento suave al hacer clic en enlaces de anclaje
document.addEventListener('DOMContentLoaded', () => {
  // Función de utilidad para el desplazamiento suave
  const smoothScroll = (targetId, duration = 400) => { // Reducir duración a 400ms para mayor rapidez
    // Caso especial para el enlace "inicio" (hash vacío o #)
    if (targetId === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Si el targetId incluye un parámetro de pestaña, lo extraemos
    let elementId = targetId;
    if (targetId.includes('?')) {
      elementId = targetId.split('?')[0];
    }
    
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 80; // 80px offset para el navbar
    let startTime = null;
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Función de easing
      const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      
      window.scrollTo(0, startPosition + distance * ease(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
    
    // Si hay un parámetro de pestaña, disparamos un evento personalizado para cambiar a esa pestaña
    if (targetId.includes('?tab=')) {
      const tabName = targetId.split('?tab=')[1];
      // Disparamos un evento personalizado que será capturado por el componente Resources
      // Disparamos el evento inmediatamente, no esperamos a que termine la animación
      const tabChangeEvent = new CustomEvent('tabChange', { 
        detail: { tab: tabName } 
      });
      document.dispatchEvent(tabChangeEvent);
    }
  };
  
  // Adjuntar evento click a todos los enlaces con hash
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!target) return;
    
    const href = target.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    
    // Extraer el id del hash
    const targetId = href.substring(1);
    
    // Detección especial para enlaces de recursos con data-tab
    if (target.hasAttribute('data-tab')) {
      const tabName = target.getAttribute('data-tab');
      const tabChangeEvent = new CustomEvent('tabChange', { 
        detail: { tab: tabName } 
      });
      document.dispatchEvent(tabChangeEvent);
      
      // Actualizar hash para indicar la pestaña, pero sin recargar la página
      if (targetId === 'resources') {
        window.history.replaceState(null, null, `#${targetId}`);
      }
    }
    
    // Si estamos manejando un cambio de pestaña, actualizar URL 
    if (targetId.includes('?')) {
      window.history.pushState(null, null, href);
    }
    
    smoothScroll(targetId);
    
    // Cerrar el menú móvil si está abierto
    const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
    if (mobileMenuButton && window.getComputedStyle(mobileMenuButton).display !== 'none') {
      mobileMenuButton.click();
    }
  });
  
  // También verificamos el hash al cargar la página
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      // Pequeño retraso para asegurar que los componentes estén cargados
      setTimeout(() => {
        smoothScroll(targetId);
      }, 100); // Reducir a 100ms para respuesta más rápida
    }
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
