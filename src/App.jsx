import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mockups from './components/Mockups';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeaturesTabs from './components/FeaturesTabs';

// Import CSS
import './index.css';

function App() {
  // Easter egg - Konami code: up, up, down, down, left, right, left, right, b, a
  const [easterEggActive, setEasterEggActive] = useState(false);

  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    const keyHandler = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setEasterEggActive(true);
          setTimeout(() => setEasterEggActive(false), 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-white dark:bg-secondary-950 text-secondary-900 dark:text-white ${easterEggActive ? 'easter-egg-active' : ''}`}>
      {easterEggActive && (
        <div className="fixed inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-20 pointer-events-none z-50"></div>
      )}
      <Navbar />
      <Hero />
      <Mockups />
      <Features />
      <FeaturesTabs />
      <Pricing />
      <Testimonials />
      <Resources />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
