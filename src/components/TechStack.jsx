import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, Cloud, Cpu, Layers, Sparkles } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & State' },
    { id: 'devops', label: 'DevOps & Tooling' },
  ];

  const technologies = [
    // Frontend
    {
      name: "React.js & Next.js",
      category: "frontend",
      level: "Production Core",
      desc: "SSR, SSG, App Router, Server Components & fluid client interactivity.",
      icon: Code2,
      tag: "Core Framework",
      featured: true,
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: "Strict Typing",
      desc: "Zero-runtime bugs, type-safe API contracts, and robust enterprise scalability.",
      icon: Cpu,
      tag: "Type Safety",
      featured: true,
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Design Systems",
      desc: "Modern atomic styling, fluid responsive utilities, and custom design tokens.",
      icon: Layers,
      tag: "Styling",
    },
    {
      name: "Framer Motion",
      category: "frontend",
      level: "Micro-Interactions",
      desc: "60fps hardware-accelerated scroll scrubbing, spring physics, and page transitions.",
      icon: Sparkles,
      tag: "Motion",
    },

    // Backend
    {
      name: "Node.js & Express",
      category: "backend",
      level: "API Services",
      desc: "Asynchronous microservices, middleware routing, and secure JWT authentication.",
      icon: Server,
      tag: "Runtime",
      featured: true,
    },
    {
      name: "REST & GraphQL APIs",
      category: "backend",
      level: "Contract First",
      desc: "Predictable API design, optimized query batching, and high-throughput payload delivery.",
      icon: Code2,
      tag: "Data Flow",
    },
    {
      name: "WebSockets & Realtime",
      category: "backend",
      level: "Low Latency",
      desc: "Bi-directional event streaming, live dashboard synchronization, and realtime chat.",
      icon: Cpu,
      tag: "Streaming",
    },

    // Database & State
    {
      name: "PostgreSQL & Prisma",
      category: "database",
      level: "Relational DB",
      desc: "Relational data modeling, ACID transactions, index optimization, and type-safe migrations.",
      icon: Database,
      tag: "Relational",
      featured: true,
    },
    {
      name: "Supabase & Firebase",
      category: "database",
      level: "BaaS & Auth",
      desc: "Row Level Security (RLS), realtime subscriptions, and managed OAuth workflows.",
      icon: Database,
      tag: "Cloud DB",
    },
    {
      name: "Redis & Caching",
      category: "database",
      level: "Sub-millisecond",
      desc: "In-memory caching, rate-limiting, and session distribution under load.",
      icon: Server,
      tag: "Caching",
    },

    // DevOps
    {
      name: "Docker & Containerization",
      category: "devops",
      level: "Reproducible Builds",
      desc: "Multi-stage Docker builds, isolated environments, and seamless cloud orchestration.",
      icon: Cloud,
      tag: "Containers",
      featured: true,
    },
    {
      name: "Git & GitHub Actions",
      category: "devops",
      level: "Automated CI/CD",
      desc: "Automated testing, linting pipelines, branch protection, and zero-downtime deploys.",
      icon: Layers,
      tag: "CI/CD",
    },
    {
      name: "Vercel & Cloudflare Edge",
      category: "devops",
      level: "Global CDN",
      desc: "Edge functions, global asset distribution, and sub-100ms cold-start response times.",
      icon: Cloud,
      tag: "Edge Cloud",
    },
  ];

  const filtered = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="hairline-t pt-10 pb-20 relative">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>03</span>
          <span>//TECH STACK</span>
          <span>ENGINEERING SUITE</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold uppercase leading-[0.9] tracking-tighter">
              CORE TECH &<br />ARCHITECTURE
            </h2>
          </div>
          <p className="max-w-md text-white/70 text-base md:text-lg leading-relaxed font-normal">
            A production-ready engineering stack built for extreme speed, type safety, and clean scalable architecture from database to UI.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'card-fill border border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-fill border border-white/10 hover:border-white/30 rounded-[20px] p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-white/[0.06] relative overflow-hidden"
                >
                  {/* Subtle top glow highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/50 group-hover:text-accent-green group-hover:border-accent-green/30 transition-colors">
                        {tech.tag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-white">
                      {tech.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-normal">
                      {tech.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-white/40 uppercase tracking-wider">STATUS</span>
                    <span className="flex items-center gap-1.5 text-accent-green">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
                      {tech.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
