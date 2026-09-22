import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay }}
    className="group w-full flex flex-col justify-between"
    data-cursor-text="VIEW"
  >
    <div className={`w-full overflow-hidden rounded-[20px] mb-6 card-fill border border-white/10 hover:border-white/30 transition-all duration-500 relative ${project.aspect}`}>
      <img 
        src={project.img} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Subtle dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Floating WebDev Metrics Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
          {project.metrics}
        </div>
      </div>

      {/* Action Buttons overlay on bottom */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2.5 rounded-full bg-black/80 hover:bg-white text-white hover:text-black border border-white/20 transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="View Source Code"
        >
          <Github size={15} />
          <span className="hidden sm:inline">Code</span>
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="px-3 py-2 rounded-full bg-white text-black hover:bg-white/90 font-semibold transition-colors flex items-center gap-1.5 text-xs font-mono"
          title="Live Demonstration"
        >
          <span>Live Demo</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
    
    <div>
      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tech.map((t) => (
          <span 
            key={t} 
            className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-white/60"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs uppercase text-white/50">
            <span>{project.year}</span>
            <span>•</span>
            <span className="tracking-widest text-accent-green">{project.category}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
        </div>
        
        <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors relative overflow-hidden">
          <ArrowUpRight size={24} className="relative z-10" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const leftColProjects = [
    {
      title: "AI Audio & Lyrics Studio",
      year: "2025",
      category: "FULL STACK WEB APP",
      aspect: "aspect-[16/9] md:aspect-[16/10]",
      img: "/assets/images/project-teenage.avif",
      tech: ["React", "TypeScript", "Tailwind", "Audio Web API"],
      metrics: "Sub-100ms conversion · Waveform sync",
      demoUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "Wearguard Industrial Platform",
      year: "2024",
      category: "NEXT.JS ENTERPRISE WEB",
      aspect: "aspect-[4/5]",
      img: "/assets/images/project-foammate.avif",
      tech: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"],
      metrics: "100/100 Lighthouse · Interactive Hotspots",
      demoUrl: "#",
      githubUrl: "https://github.com"
    }
  ];

  const rightColProjects = [
    {
      title: "Creative Physics & Motion Engine",
      year: "2024",
      category: "CREATIVE FRONTEND",
      aspect: "aspect-[4/3]",
      img: "/assets/images/project-industrial.avif",
      tech: ["React", "Lenis Scroll", "Framer Motion", "Vite"],
      metrics: "60fps Spring Physics · Zero layout shift",
      demoUrl: "#",
      githubUrl: "https://github.com"
    },
    {
      title: "Real-time Telemetry Dashboard",
      year: "2024–25",
      category: "FULL STACK SAAS",
      aspect: "aspect-[4/3]",
      img: "/assets/images/project-materials.avif",
      tech: ["Node.js", "Express", "PostgreSQL", "Prisma"],
      metrics: "Live WebSockets · ACID Transactions",
      demoUrl: "#",
      githubUrl: "https://github.com"
    }
  ];

  const fullWidthProject = {
    title: "Production Web Solutions & Architecture",
    year: "2024–25",
    category: "FULL STACK ARCHITECTURE",
    aspect: "aspect-[16/9] md:aspect-[21/9]",
    img: "/assets/images/project-freelance.avif",
    tech: ["Next.js 14", "React", "PostgreSQL", "Supabase", "Tailwind CSS", "Docker"],
    metrics: "15+ Deployed Web Apps · 99.9% Uptime Record",
    demoUrl: "#",
    githubUrl: "https://github.com"
  };

  return (
    <section id="portfolio" className="hairline-t pt-10 pb-20">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>02</span>
          <span>//PORTFOLIO</span>
          <span>FEATURED BUILDS</span>
        </div>

        {/* Big heading */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter">
            LATEST<br />PORTFOLIO
          </h2>
          <p className="max-w-md text-white/70 font-normal text-base md:text-lg lg:pb-4 leading-relaxed">
            Full-stack web applications and interactive digital products built with strict TypeScript, clean scalable architecture, and fluid 60fps animations.
          </p>
        </div>

        {/* Masonry-style Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12">
            {leftColProjects.map((project, idx) => (
              <ProjectCard key={`left-${idx}`} project={project} delay={0} />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12">
            {rightColProjects.map((project, idx) => (
              <ProjectCard key={`right-${idx}`} project={project} delay={0.2} />
            ))}
          </div>
        </div>

        {/* Full width item */}
        <ProjectCard project={fullWidthProject} delay={0.4} />
      </div>
    </section>
  );
}
