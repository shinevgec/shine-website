import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over an element that requests custom text
      const textTarget = e.target.closest('[data-cursor-text]');
      
      if (textTarget) {
        setIsHovering(true);
        setHoverText(textTarget.getAttribute('data-cursor-text'));
      }
      // Check if hovering over clickable elements
      else if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden
        ${hoverText ? 'bg-white text-black font-bold text-[10px] uppercase tracking-widest' : 'bg-white mix-blend-difference'}`}
      animate={{
        x: mousePosition.x - (hoverText ? 36 : 12),
        y: mousePosition.y - (hoverText ? 16 : 12),
        scale: hoverText ? 1 : (isHovering ? 2.5 : 1),
        width: hoverText ? 72 : 24,
        height: hoverText ? 32 : 24,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {hoverText ? (
        <span className="leading-none mt-[2px]">{hoverText}</span>
      ) : (
        <div className={`w-1 h-1 bg-white rounded-full ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
      )}
    </motion.div>
  );
}
