import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can you help me visualize my product idea from scratch?",
      a: "Yes! I can take your initial concepts or rough sketches and turn them into polished 3D models and high-quality renders. We'll work closely to ensure the final visual perfectly represents your vision."
    },
    {
      q: "What tools do you use for design and rendering?",
      a: "I primarily use industry-standard software like Blender, Cinema 4D, SolidWorks, and Figma, depending on the specific needs of the project. I'm always exploring new tools to push creative boundaries."
    },
    {
      q: "How involved can I be during the design process?",
      a: "As involved as you'd like to be! I value collaborative workflows and ensure regular check-ins and feedback loops so that the final output aligns perfectly with your expectations."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary significantly based on complexity. A simple product render might take a few days, while a full conceptual design and animation suite could take a few weeks. I always provide a clear timeline upfront."
    },
    {
      q: "Can you help with investor or pitch deck visuals?",
      a: "Absolutely. I specialize in creating striking, high-fidelity imagery that communicates the value and functionality of your product, making it ideal for presentations and pitch decks."
    },
    {
      q: "What if I need changes after the final delivery?",
      a: "I include a set number of revision rounds in my initial scope to ensure you are completely satisfied. If additional changes are needed later, I'm happy to accommodate them on a mutually agreed basis."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="hairline-t pt-10 pb-24">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>012</span>
          <span>//FAQ</span>
          <span>CONCERNS</span>
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
                        <p className="text-white/60 md:text-lg leading-relaxed pl-12 md:pl-[4.5rem] max-w-3xl">
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
