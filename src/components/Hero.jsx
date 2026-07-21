import { MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-10 md:pt-20">
      <div className="max-w-[1480px] mx-auto px-6">
        <div className="text-center w-full overflow-hidden">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="huge-text"
          >
            SHINE
          </motion.h1>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hairline-y border-t border-b border-white/10 mt-10"
      >
        <div className="max-w-[1480px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="flex items-start gap-3">
            <MapPin className="text-accent-green shrink-0 mt-1" size={24} />
            <div>
              <p className="font-semibold uppercase tracking-wide">BASED IN MOTERA,</p>
              <p className="text-white/50 uppercase tracking-wide">AHMEDABAD</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 card-fill">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
              <span className="text-sm uppercase tracking-wide text-white/70">Available for work</span>
            </div>
          </div>

          <div className="flex items-start gap-3 md:justify-end">
            <CheckCircle2 className="text-accent-blue shrink-0 mt-1" size={24} />
            <div>
              <p className="font-semibold uppercase tracking-wide">PRODUCT DESIGNER &</p>
              <p className="font-semibold uppercase tracking-wide">VISUALIZER</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="max-w-[1480px] mx-auto px-6 py-10"
      >
        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-[20px] overflow-hidden card-fill border border-white/10 relative bg-mesh-texture">
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
            <img src="/assets/images/hero-banner.avif" alt="Hero Banner" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
