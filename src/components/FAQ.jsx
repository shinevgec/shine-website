import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is your primary tech stack for building web applications?",
      a: "I build primarily with React/Next.js 14 and TypeScript on the frontend paired with Node.js/Express or serverless edge functions on the backend. For persistent storage, I rely on PostgreSQL with Prisma ORM or Supabase, styled cleanly with Tailwind CSS and animated using Framer Motion."
    },
    {
      q: "Do you engineer full-stack systems end-to-end or solely frontend?",
      a: "Full stack end-to-end. I handle relational database schema design, REST/GraphQL API creation, secure authentication (JWT/OAuth), state management, and cloud deployment, while also delivering pixel-perfect, highly responsive user interfaces."
    },
    {
      q: "How do you ensure web performance and strong SEO scores?",
      a: "I optimize every build for 95+ Core Web Vitals scores by leveraging server-side rendering (SSR), dynamic code splitting, modern image optimization (AVIF/WebP), edge caching, and semantic HTML5 for high SEO crawlability."
    },
    {
      q: "Can you collaborate with existing engineering teams and codebases?",
      a: "Yes, seamlessly. I follow strict Git branch workflows, maintain comprehensive typing, write modular self-documenting code, and integrate easily into CI/CD pipelines via GitHub Actions and Docker."
    },
    {
      q: "How do you achieve fluid 60fps animations without slowing down page load?",
      a: "I rely on hardware-accelerated CSS transforms and lightweight motion drivers like Framer Motion and Lenis. Heavy layout recalcs are avoided during scrolling, and computational loads are debounced so memory consumption remains minimal."
    },
    {
      q: "What does your typical project timeline and milestone delivery look like?",
      a: "Timelines depend on scope—a high-converting landing page or web application frontend takes 1 to 2 weeks, while a full-scale full-stack SaaS typically takes 3 to 6 weeks. I deliver in structured weekly sprints with live staging links so you can test real progress at every step."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="hairline-t pt-10 pb-24">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>08</span>
          <span>//ENGINEERING FAQ</span>
          <span>SYSTEMS & TIMELINES</span>
        </div>

        {/* Centered heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold uppercase leading-[0.9] tracking-tighter">
            FREQUENTLY<br />ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-white/10 overflow-hidden cursor-pointer group"
                onClick={() => toggleAccordion(index)}
              >
                <div className="py-8 md:py-10 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-white/40 text-sm font-mono tracking-widest">
                      0{index + 1}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-medium transition-colors ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                      {faq.q}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <Plus 
                      size={32} 
                      className={`text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : ''}`}
                    />
                  </div>
                </div>
                
                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10">
                        <p className="text-white/60 md:text-lg leading-relaxed pl-12 md:pl-[4.5rem] max-w-3xl font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
