import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WhoAmI() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center start"] 
  });

  // As the image scrolls up, squeeze the text uniformly so it hides behind the photo
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.2]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  return (
    <section className="hairline-t pt-10 pb-24">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>03</span>
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
            I'M A PRODUCT DESIGNER & VISUALIZER.
          </h3>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-3xl">
            I design products that look good, feel intuitive, and work seamlessly. My approach is smart, intentional, and focused on solving real problems. I push tools and workflows to their limits to turn ideas into polished, functional experiences — unconventional when needed, but always built to make sense.
          </p>
          <a href="#" className="bg-white text-black font-bold uppercase tracking-wide px-8 py-3 rounded-full hover:scale-105 transition-transform mt-4">
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
