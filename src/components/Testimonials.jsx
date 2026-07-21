export default function Testimonials() {
  const testimonials = [
    {
      name: "Kavi Ranjan",
      role: "Product Designer",
      text: "Shine is incredibly skilled with creative software especially when it comes to 3D rendering and cinematography, which he's genuinely passionate about. He's power packed with strong communication skills and is collaborative. His jolly nature keeps the energy high on every project."
    },
    {
      name: "Samuel Jagdish",
      role: "VFX Artist, Digital Designer",
      text: "Shine is a gem, super talented, creative, and just a blast to work with. His ideas are sharp, execution is smoother than butter, and I've learned a ton from him. 10/10, the guy's got that 'how the heck does he do it?' vibe."
    },
    {
      name: "Blesson Varghese",
      role: "Managing Director, Astec",
      text: "Shine expertly transformed complex machinery into impactful visuals. His creativity, attention to detail, and understanding of design and marketing needs impressed us. We look forward to his continued growth."
    },
    {
      name: "(unnamed)",
      role: "Communication Designer",
      text: "As a communication designer, I collaborated closely with Shine and was impressed by his ability to visualize complex concepts with clarity and creativity. His attention to detail, technical skill, and strong design sense made our work seamless and enjoyable."
    },
    {
      name: "Sai Guru",
      role: "Product Designer",
      text: "Shine brings an unstoppable spark to every space he walks into. His spirit of exploration, openness to new ideas, and contagious enthusiasm make every collaboration feel like something bigger than just work."
    },
    {
      name: "Gauraang Kalantre",
      role: "Industrial Designer",
      text: "Shine is really fun to work with, is always open for experimentation and has crazy skillsets on a plethora of digital softwares. You gotta love the kind of energy the dude brings to the table."
    }
  ];

  // Divide testimonials for the two rows
  const row1 = [...testimonials].slice(0, 4);
  const row2 = [...testimonials].slice(2, 6);

  const renderCard = (t, idx) => (
    <div key={idx} className="w-[400px] flex-shrink-0 mx-4 border border-white/10 rounded-[20px] p-8 card-fill flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
          <img src={`https://placehold.co/100x100/111111/555555?text=${t.name.charAt(0)}`} alt={t.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-lg">{t.name}</h4>
          <p className="text-xs uppercase text-white/50">{t.role}</p>
        </div>
      </div>
      <div className="bg-black/40 p-5 rounded-xl border border-white/5 flex-grow">
        <p className="text-white/80 leading-relaxed text-sm md:text-base">
          "{t.text}"
        </p>
      </div>
    </div>
  );

  return (
    <section className="hairline-t pt-10 pb-24 overflow-hidden relative">
      <div className="max-w-[1480px] mx-auto px-6 mb-16">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>011</span>
          <span>//TESTIMONIAL</span>
          <span>VOICES</span>
        </div>

        {/* Centered heading */}
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold uppercase leading-[0.9] tracking-tighter">
            TRUSTED BY<br />CREATIVES
          </h2>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="relative w-full flex flex-col gap-8">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Scrolls left */}
        <div className="flex w-fit animate-marquee pause-on-hover">
          <div className="flex items-stretch">
            {row1.map(renderCard)}
            {row1.map(renderCard)} {/* Duplicate for seamless scroll */}
          </div>
        </div>

        {/* Row 2 - Scrolls right */}
        <div className="flex w-fit animate-marquee-reverse pause-on-hover">
          <div className="flex items-stretch">
            {row2.map(renderCard)}
            {row2.map(renderCard)} {/* Duplicate for seamless scroll */}
          </div>
        </div>
      </div>
    </section>
  );
}
