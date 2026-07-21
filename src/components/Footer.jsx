import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hairline-t pt-20 pb-8 overflow-hidden">
      <div className="w-full text-center px-4 mb-20">
        <h2 className="text-[15vw] font-bold uppercase leading-[0.75] tracking-tighter text-white/5 select-none">
          SHINE
        </h2>
      </div>

      <div className="max-w-[1480px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="text-white/50 hover:text-white transition-colors font-mono tracking-wider">
          @shine_gamit_designs
        </a>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase text-sm tracking-widest font-bold"
        >
          Back To Top
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center ml-2">
            <ArrowUp size={14} />
          </div>
        </button>
      </div>
    </footer>
  );
}
