import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import LogoTicker from './components/LogoTicker';
import Portfolio from './components/Portfolio';
import WhoAmI from './components/WhoAmI';
import Vision from './components/Vision';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="min-h-screen relative overflow-hidden">
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
        <Header />
        <Hero />
        <Approach />
        <LogoTicker />
        <Portfolio />
        <WhoAmI />
        <Vision />
        <Stats />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
