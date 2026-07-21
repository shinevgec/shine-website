import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ContactModal from './ContactModal';

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="contact-section" className="hairline-t pt-24 pb-20">
      <div className="max-w-[1480px] mx-auto px-6 text-center">
        {/* Giant Centered Heading */}
        <h2 className="text-[12vw] font-bold uppercase leading-[0.8] tracking-tighter mb-12">
          LET'S WORK<br />TOGETHER
        </h2>

        {/* Call to Action Button */}
        <div className="mb-24 flex justify-center">
          <button onClick={() => setIsModalOpen(true)} className="btn-primary text-xl px-10 py-5 inline-flex items-center gap-3 group">
            CONTACT NOW
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
          </button>
        </div>

        {/* Triple Row Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-6 mb-24 max-w-5xl mx-auto">
          <div className="md:text-right">
            <span className="section-label block">BASED IN MOTERA, INDIA</span>
          </div>
          
          <div className="flex justify-center">
            <div className="w-32 h-40 md:w-40 md:h-52 rounded-[20px] overflow-hidden card-fill border border-white/10">
              <img 
                src="/assets/images/portrait.avif" 
                alt="Portrait detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:text-left">
            <span className="section-label block">INDUSTRIAL DESIGNER</span>
          </div>
        </div>

        {/* Centered Statement */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-xl md:text-3xl font-bold uppercase leading-relaxed tracking-wide text-white/80">
            BASED IN INDIA, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY PASSION FOR MINIMALIST AESTHETICS, AND INTUITIVE DESIGN IS EVIDENT IN MY WORK.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <a href="#" className="flex items-center gap-2 group hover:text-white/80 transition-colors">
            <ArrowUpRight size={18} className="text-white/50 group-hover:text-white transition-colors" />
            <span className="uppercase text-sm tracking-widest font-semibold border-b border-transparent group-hover:border-white transition-colors pb-1">Instagram</span>
          </a>
          <a href="#" className="flex items-center gap-2 group hover:text-white/80 transition-colors">
            <ArrowUpRight size={18} className="text-white/50 group-hover:text-white transition-colors" />
            <span className="uppercase text-sm tracking-widest font-semibold border-b border-transparent group-hover:border-white transition-colors pb-1">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
