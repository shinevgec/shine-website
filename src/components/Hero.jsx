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
        className="mt-10"
      >
        <div className="max-w-[1480px] mx-auto px-6 grid grid-cols-3 items-center hairline-y text-xs md:text-sm uppercase tracking-wide text-white/50">
          
          {/* Left Column */}
          <div className="flex items-center gap-2 py-6 pr-4 border-r border-white/[0.04]">
            <div className="w-2 h-2 rounded-full border border-accent-green"></div>
            <p className="tracking-wide">BASED IN MOTERA,<br/>AHMEDABAD</p>
          </div>
          
          {/* Center Column */}
          <div className="flex items-center justify-center py-6 border-r border-white/[0.04]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.04] card-fill">
              <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></div>
              <span className="text-sm uppercase tracking-wide text-white/70">Available for work</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-end gap-2 py-6 pl-4">
            <div className="w-3 h-3 rounded-full border border-blue-500 flex items-center justify-center">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <p className="tracking-wide text-right">FULL STACK &<br/>WEB DEVELOPER</p>
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
