export default function Stats() {
  const stats = [
    { value: "10+", label: "Projects done" },
    { value: "3+", label: "Years of experience" },
    { value: "3+", label: "Recognitions" },
    { value: "29%", label: "Happy clients" },
  ];

  return (
    <section className="hairline-t pt-10 pb-20">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>06</span>
          <span>//STATS</span>
          <span>FUN FACTS</span>
        </div>

        {/* Stats Panel */}
        <div className="w-full rounded-[20px] border border-white/20 card-fill relative overflow-hidden py-16 px-8 md:py-24 md:px-16">
          {/* Background pattern mask if needed */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
                <span className="text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-4">
                  {stat.value}
                </span>
                <span className="text-sm uppercase tracking-widest text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
