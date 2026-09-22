import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function WhoAmI() {
  const imageRef = useRef(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center start"]
  });

  // As the image scrolls up, squeeze the text uniformly so it hides behind the photo
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.2]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);

  const banterText = "hehe   ashish   isnt   it  cool  , I   MADE IT IN  JUST   2    Hours   hahah     framer     to    hard coded website";
  const words = banterText.split(" ");

  return (
    <section className="hairline-t pt-10 pb-24 relative">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>04</span>
          <span>//WHO AM I</span>
          <span>SINCE 2005</span>
        </div>

        {/* Container to restrict sticky behavior so it doesn't overlap the paragraph */}
        <div className="relative">
          {/* Giant Centered Heading */}
          <motion.div
            className="text-center sticky top-32 z-0 pointer-events-none origin-center"
            style={{ scale, opacity }}
          >
            <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter">
              MORE ABOUT<br />SHINE©
            </h2>
          </motion.div>

          {/* Large portrait image */}
          <div ref={imageRef} className="flex justify-center relative z-10 mt-32 md:mt-48">
            <div className="w-full max-w-[500px] h-[600px] md:h-[720px] rounded-[20px] overflow-hidden card-fill border border-white/10">
              <img
                src="/assets/images/portrait.avif"
                alt="Shine Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Subheading & Paragraph */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mt-16">
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest">
            I'M A FULL STACK & WEB DEVELOPER.
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-3xl">
            I build modern web applications that look good, feel intuitive, and perform seamlessly. My approach is smart, intentional, and focused on solving real problems. I push modern web technologies and frameworks to their limits to turn ideas into polished, functional experiences — clean code, responsive design, and always built to scale.
          </p>
          <button
            onClick={() => setShowEasterEgg(true)}
            className="bg-white text-black font-bold uppercase tracking-wide px-8 py-3 rounded-full hover:scale-105 transition-transform mt-4"
          >
            DOWNLOAD RESUME
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 cursor-pointer"
            onClick={() => setShowEasterEgg(false)}
          >
            <div className="max-w-5xl flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0, rotate: -20 + Math.random() * 40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    type: "spring",
                    bounce: 0.5
                  }}
                  className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase text-[#FF4530] tracking-tighter"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: words.length * 0.15 + 0.5 }}
              className="absolute bottom-10 text-white/40 text-xs md:text-sm uppercase tracking-widest font-mono"
            >
              (Click anywhere to return)
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
