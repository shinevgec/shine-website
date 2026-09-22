import { motion } from 'framer-motion';

export default function Approach() {
  const steps = [
    {
      title: "Systems Architecture & Schema Planning",
      desc: "Before writing code, I engineer the foundation. I map user flows, architect relational database schemas in PostgreSQL, define strict REST/GraphQL API contracts, and choose the optimal rendering model (SSR, SSG, or client-side). No technical debt or guesswork—just resilient data structures built to scale.",
      dots: 1
    },
    {
      title: "Full-Stack Development & Reactive UI",
      desc: "This is where architecture turns into high-performance web applications. I craft type-safe components with TypeScript, implement responsive atomic design with Tailwind CSS, and build robust backend microservices in Node.js. Every interaction is fluid, state is predictable, and every API call is optimized for sub-100ms response times.",
      dots: 2
    },
    {
      title: "Performance Auditing, CI/CD & Deployment",
      desc: "Code is only ready when it's bulletproof. I optimize bundle sizes, enforce WCAG AA accessibility, achieve 99+ Core Web Vitals scores, and configure automated GitHub Actions for testing and linting. Deployed to edge networks like Vercel and Dockerized cloud infrastructure with zero downtime.",
      dots: 3
    }
  ];

  return (
    <section id="approach" className="hairline-t pt-10 pb-20">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>01</span>
          <span>//ENGINEERING APPROACH</span>
          <span>THREE PHASES</span>
        </div>

        {/* Big heading */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] max-w-4xl tracking-tight">
            I'M SHINE GAMIT BASED IN AHMEDABAD, GUJARAT.
          </h2>
          <p className="text-white/50 text-lg lg:pt-4 lowercase tracking-wide italic font-mono">
            engineering high-performance digital products
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
                <p className="text-white/70 leading-relaxed font-normal">
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
