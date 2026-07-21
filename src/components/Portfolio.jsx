import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay }}
    className="group !cursor-none w-full"
    data-cursor-text="VIEW"
  >
    <div className={`w-full overflow-hidden rounded-[20px] mb-6 card-fill border border-white/10 relative ${project.aspect}`}>
      <img 
        src={project.img} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
    </div>
    
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase text-white/50">{project.year}</span>
        <h3 className="text-2xl md:text-3xl font-bold uppercase">{project.title}</h3>
        <span className="text-xs uppercase text-white/50 tracking-widest">{project.category}</span>
      </div>
      
      <div className="w-12 h-12 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors relative overflow-hidden">
        <ArrowUpRight size={24} className="relative z-10" />
      </div>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const leftColProjects = [
    {
      title: "Teenage Engineering",
      year: "2025",
      category: "COLLEGE",
      aspect: "aspect-[16/9] md:aspect-[16/10]",
      img: "/assets/images/project-teenage.avif"
    },
    {
      title: "FOAMMATE",
      year: "2024",
      category: "COLLEGE",
      aspect: "aspect-[4/5]",
      img: "/assets/images/project-foammate.avif"
    }
  ];

  const rightColProjects = [
    {
      title: "Industrial Project",
      year: "2022",
      category: "INTERNSHIP",
      aspect: "aspect-[4/3]",
      img: "/assets/images/project-industrial.avif"
    },
    {
      title: "Materials",
      year: "2024–25",
      category: "COLLEGE",
      aspect: "aspect-[4/3]",
      img: "/assets/images/project-materials.avif"
    }
  ];

  const fullWidthProject = {
    title: "Previous work",
    year: "2024",
    category: "FREELANCE",
    aspect: "aspect-[16/9] md:aspect-[21/9]",
    img: "/assets/images/project-freelance.avif"
  };

  return (
    <section className="hairline-t pt-10 pb-20">
      <div className="max-w-[1480px] mx-auto px-6">
        {/* Meta row */}
        <div className="flex justify-between items-center mb-16 section-label">
          <span>02</span>
          <span>//PORTFOLIO</span>
          <span>2013 - 2025</span>
        </div>

        {/* Big heading */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter">
            LATEST<br />PORTFOLIO
          </h2>
          <p className="max-w-xs text-white/70 font-medium text-lg lg:pb-4">
            My creative spirit comes alive in the digital realm. With nimble fingers flying across the device.
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
