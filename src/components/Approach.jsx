import { motion } from 'framer-motion';

export default function Approach() {
  const steps = [
    {
      title: "Discover and Analysis",
      desc: "When approaching a design challenge, I begin by asking, 'Why should anyone care?' I focus on understanding the users—their needs, behaviors, and frustrations. Through in-depth research, testing, and analysis, I break down the problem until the real opportunities for improvement are clear. My process is rooted in structured design thinking, ensuring that every solution is practical, purposeful, and meaningful—without guesswork or unnecessary complexity.",
      dots: 1
    },
    {
      title: "Design and Implement",
      desc: "This is where research transforms into tangible solutions. I sketch, model, refine, and rigorously test concepts to ensure they deliver real value—not just visual appeal. Every design must work flawlessly, feel intuitive, and integrate seamlessly into the user's experience. I pay close attention to every detail—form, materials, usability—because even the smallest flaw can impact how people connect with a product.",
      dots: 2
    },
    {
      title: "Refine and Render",
      desc: "This is where I elevate the design and bring it to life. I meticulously refine every detail, ensuring the final outcome feels polished, high-end, and visually striking. Whether it's a premium render, a functional prototype, or a cinematic visual, I work until the result is clean, sharp, and compelling. The goal is simple: to create work that doesn't just exist—it commands attention.",
      dots: 3
    }
  ];

  return (
    <section className="hairline-t pt-10 pb-20">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>01</span>
          <span>//APPROACH</span>
          <span>THREE PHASES</span>
        </div>

        {/* Big heading */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] max-w-4xl tracking-tight">
            I'M SHINE GAMIT BASED IN AHMEDABAD, GUJARAT.
          </h2>
          <p className="text-white/50 text-lg lg:pt-4 lowercase tracking-wide italic">
            i enjoy making things cool
          </p>
        </div>

        {/* Three phases */}
        <div className="flex flex-col gap-12 border-t border-white/10 pt-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pb-12 border-b border-white/10 last:border-0 last:pb-0"
            >
              
              <div className="md:col-span-3 flex items-center gap-2">
                <span className="section-label mr-4">0{index + 1}</span>
                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((d) => (
                    <div 
                      key={d} 
                      className={`w-2 h-2 rounded-full ${d <= step.dots ? 'bg-white' : 'bg-white/20'}`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <h3 className="text-2xl md:text-3xl font-bold uppercase">{step.title}</h3>
                <p className="text-white/70 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
