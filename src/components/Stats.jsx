import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function StatCounter({ target, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
      <span ref={ref} className="text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-4 flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span className="text-accent-green">{suffix}</span>
      </span>
      <span className="text-sm uppercase tracking-widest text-white/50">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: 99, suffix: "+", label: "Lighthouse Performance" },
    { value: 50, suffix: "k+", label: "Lines of Type-Safe Code" },
    { value: 15, suffix: "+", label: "Production Web Apps" },
    { value: 100, suffix: "%", label: "Responsive & Accessible" },
  ];

  return (
    <section className="hairline-t pt-10 pb-20">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>06</span>
          <span>//ENGINEERING METRICS</span>
          <span>BENCHMARKS</span>
        </div>

        {/* Stats Panel */}
        <div className="w-full rounded-[20px] border border-white/20 card-fill relative overflow-hidden py-16 px-8 md:py-24 md:px-16">
          {/* Background pattern mask */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/[0.04]">
            {stats.map((stat, idx) => (
              <StatCounter 
                key={idx} 
                target={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
