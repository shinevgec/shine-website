import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import LogoTicker from './components/LogoTicker';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import WhoAmI from './components/WhoAmI';
import Vision from './components/Vision';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import DevTerminal from './components/DevTerminal';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isWireframeActive, setIsWireframeActive] = useState(false);

  // Global Ctrl+K / Cmd+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className={`min-h-screen relative overflow-hidden ${isWireframeActive ? 'dev-wireframe' : ''}`}>
        {/* Red Curtain Load Animation - Top Half */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          className="fixed top-0 left-0 w-full h-1/2 bg-[#FF4530] z-[-1]"
        />
        {/* Red Curtain Load Animation - Bottom Half */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: "100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          className="fixed bottom-0 left-0 w-full h-1/2 bg-[#FF4530] z-[-1]"
        />

        <CustomCursor />
        
        <Header onOpenTerminal={() => setIsTerminalOpen(true)} />
        <Hero />
        <Approach />
        <LogoTicker />
        <Portfolio />
        <TechStack />
        <WhoAmI />
        <Vision />
        <Stats />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <Footer />

        {/* Interactive Developer Terminal Modal */}
        <DevTerminal 
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          onToggleWireframe={() => setIsWireframeActive(prev => !prev)}
          isWireframeActive={isWireframeActive}
          onOpenContact={handleOpenContact}
        />
      </div>
    </ReactLenis>
  );
}

export default App;
