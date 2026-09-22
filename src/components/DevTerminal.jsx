import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';

export default function DevTerminal({ isOpen, onClose, onToggleWireframe, isWireframeActive, onOpenContact }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Shine Developer Shell [Version 2.4.0-release]' },
    { type: 'system', text: 'Type "help" to see available commands or "wireframe" to inspect layout.' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim();
      if (!trimmed) return;

      const newHistory = [...history, { type: 'user', text: `shine@portfolio:~$ ${trimmed}` }];
      setCommandHistory(prev => [...prev, trimmed]);
      setHistoryIndex(-1);

      const cmd = trimmed.toLowerCase();

      switch (cmd) {
        case 'help':
          newHistory.push({
            type: 'output',
            text: `Available Commands:
  • stack      - View full production tech stack & architecture
  • projects   - View flagship web applications & live demos
  • wireframe  - Toggle real-time developer wireframe mode (${isWireframeActive ? 'CURRENT: ON' : 'CURRENT: OFF'})
  • contact    - Launch the direct collaboration modal
  • bio        - Read developer credentials & background
  • clear      - Clear terminal screen
  • exit       - Close developer console`
          });
          break;

        case 'stack':
          newHistory.push({
            type: 'output',
            text: `[CORE TECH STACK]
Frontend:  Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
Backend:   Node.js, Express, REST APIs, GraphQL, WebSockets
Database:  PostgreSQL, Prisma ORM, Supabase, Redis
DevOps:    Docker, GitHub Actions CI/CD, Vercel Edge, Jest
Standards: 100/100 Lighthouse, WCAG AA Accessibility, Responsive Mobile-First`
          });
          break;

        case 'projects':
          newHistory.push({
            type: 'output',
            text: `[FEATURED BUILDS]
1. AI Audio & Lyrics Studio    [React + Vite + Audio API]  -> Full-stack real-time converter
2. Wearguard Industrial Web    [Next.js + TypeScript]     -> High-performance engineering portal
3. UI Physics Engine & Motion  [React + Framer Motion]    -> 60fps micro-interaction library
4. Cloud Analytics Dashboard   [PostgreSQL + Recharts]    -> Sub-second aggregation queries`
          });
          break;

        case 'wireframe':
          onToggleWireframe();
          newHistory.push({
            type: 'output',
            text: `[SYSTEM] Developer Wireframe Mode: ${!isWireframeActive ? 'ACTIVATED (All layouts outlined in cyan)' : 'DEACTIVATED'}`
          });
          break;

        case 'contact':
          newHistory.push({
            type: 'output',
            text: '[SYSTEM] Launching direct contact modal...'
          });
          setTimeout(() => {
            onClose();
            onOpenContact();
          }, 600);
          break;

        case 'bio':
          newHistory.push({
            type: 'output',
            text: `Shine Gamit — Full Stack & Web Developer based in Ahmedabad, India.
Obsessed with clean modular code, extreme performance, and fluid micro-interactions.
Building digital tools that feel intuitive, load instantly, and solve tangible problems.`
          });
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case 'exit':
        case 'quit':
        case 'close':
          onClose();
          break;

        default:
          newHistory.push({
            type: 'error',
            text: `Command not found: "${trimmed}". Type "help" for a list of commands.`
          });
      }

      setHistory(newHistory);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full max-w-3xl bg-[#09090b] border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-sm max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header */}
            <div className="bg-[#18181b] px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity"
                  title="Close"
                />
                <button
                  onClick={() => setHistory([])}
                  className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity"
                  title="Clear"
                />
                <button
                  onClick={onToggleWireframe}
                  className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity"
                  title="Toggle Wireframe"
                />
                <span className="ml-3 text-xs text-white/50 flex items-center gap-2">
                  <TerminalIcon size={14} className="text-accent-green" />
                  shine@developer-shell: ~
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/30 hidden sm:inline">esc or ctrl+k to exit</span>
                <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              className="p-5 flex-1 overflow-y-auto space-y-3 bg-[#0a0a0c] text-white/80 min-h-[320px] max-h-[480px]"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === 'system' && (
                    <p className="text-white/40 text-xs italic">{item.text}</p>
                  )}
                  {item.type === 'user' && (
                    <p className="text-accent-green font-semibold">{item.text}</p>
                  )}
                  {item.type === 'output' && (
                    <div className="text-white/90 pl-3 border-l-2 border-white/20 py-1 bg-white/[0.02] rounded-r">
                      {item.text}
                    </div>
                  )}
                  {item.type === 'error' && (
                    <p className="text-red-400 pl-3 border-l-2 border-red-500 py-0.5">{item.text}</p>
                  )}
                </div>
              ))}

              {/* Active Prompt Line */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-accent-green font-semibold select-none">shine@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm caret-accent-green p-0"
                  autoFocus
                  spellCheck={false}
                />
              </div>

              <div ref={bottomRef} />
            </div>

            {/* Footer quick action buttons */}
            <div className="bg-[#121214] px-4 py-2.5 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-white/40 uppercase tracking-widest text-[10px] mr-1">Quick Run:</span>
              {['help', 'stack', 'projects', 'wireframe', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setInput(cmd);
                    setTimeout(() => {
                      const fakeEvent = { key: 'Enter', preventDefault: () => {} };
                      // trigger command directly
                      const inputEl = inputRef.current;
                      if (inputEl) {
                        inputEl.value = cmd;
                        handleCommand({ key: 'Enter' });
                      }
                    }, 50);
                  }}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors text-xs font-mono"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
