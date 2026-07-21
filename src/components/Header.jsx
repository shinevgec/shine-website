import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const handleContactClick = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const MagneticButton = ({ children, onClick }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="btn-outline text-sm py-2 px-5 relative"
      >
        {children}
      </motion.button>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1480px] mx-auto px-6 grid grid-cols-3 items-center hairline-b">
        
        {/* Left Column */}
        <div className="flex items-center gap-4 py-4 border-r border-white/[0.04]">
          <span className="section-label">LOCAL/</span>
          <span className="font-mono text-sm tracking-wider">{formatTime(time)}</span>
        </div>
        
        {/* Center Column - Hamburger icon */}
        <div className="flex justify-center py-4 border-r border-white/[0.04]">
          <div className="grid grid-cols-2 gap-1 opacity-50">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-end py-4">
          <MagneticButton onClick={handleContactClick}>
            CONTACT NOW
          </MagneticButton>
        </div>

      </div>
    </header>
  );
}
