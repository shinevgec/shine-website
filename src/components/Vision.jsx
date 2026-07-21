export default function Vision() {
  return (
    <section className="hairline-t pt-10 pb-24">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>05</span>
          <span>//VOICE OF SHINE</span>
          <span>SINCE 2005</span>
        </div>

        {/* Giant centered statement */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-tight max-w-6xl mx-auto">
            FREELANCE CREATIVE PROFESSIONAL LOCATED IN AHMEDABAD GUJARAT, HELPING MEMBERS & BUSINESSES ACHIEVE THEIR VISION IN MEDIA AND DESIGN.
          </h2>
        </div>

        {/* Signature Placeholder */}
        <div className="flex justify-center mb-24">
          <div className="w-48 h-16 opacity-50 flex items-center justify-center">
            <span className="font-serif italic text-2xl">Shine Gamit</span>
          </div>
        </div>

        {/* Staggered Gallery */}
        <div className="flex flex-col gap-8 md:gap-16">
          {/* Row 1: 2 side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="md:col-span-1 row-span-1 md:row-span-2 rounded-[20px] overflow-hidden card-fill border border-white/10 group h-64 md:h-auto">
              <img src="/assets/images/vision-1.avif" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-2 row-span-1 rounded-[20px] overflow-hidden card-fill border border-white/10 group h-48 md:h-64">
              <img src="/assets/images/vision-2.avif" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Row 2: 1 centered */}
          <div className="flex justify-center">
            <div className="md:col-span-1 row-span-1 rounded-[20px] overflow-hidden card-fill border border-white/10 group h-48 md:h-64">
              <img src="/assets/images/vision-3.avif" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Row 3: 2 side by side again */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2 row-span-1 rounded-[20px] overflow-hidden card-fill border border-white/10 group h-48 md:h-64">
              <img src="/assets/images/project-freelance.avif" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="md:col-span-1 row-span-1 rounded-[20px] overflow-hidden card-fill border border-white/10 group h-48 md:h-64">
              <img src="/assets/images/project-industrial.avif" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
