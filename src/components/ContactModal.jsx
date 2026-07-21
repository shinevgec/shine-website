import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 m-auto w-full max-w-lg h-fit max-h-[90vh] overflow-y-auto bg-black border border-white/10 card-fill rounded-3xl p-8 z-[101]"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold uppercase tracking-wide">Let's connect</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase text-white/50 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-lg transition-colors placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-white/50 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-lg transition-colors placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-white/50 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 text-lg transition-colors placeholder:text-white/20 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full mt-4">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
