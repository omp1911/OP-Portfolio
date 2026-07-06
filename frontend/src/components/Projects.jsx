import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectCard = ({ project, index }) => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: easing }}
      className="neo-card p-6 sm:p-8 group"
      data-testid={`project-${index}`}
    >
      {/* Result badge */}
      <div className="flex justify-between items-start mb-5">
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#D96C4A]/10 text-[#D96C4A] border border-[#D96C4A]/20">
          {project.result}
        </span>
        <ArrowUpRight 
          size={18} 
          className="text-[#FFFFFF] opacity-40 group-hover:text-[#D96C4A] group-hover:opacity-100 transition-all duration-300" 
        />
      </div>

      <h3 className="font-heading text-lg sm:text-xl font-medium text-[#FFFFFF] mb-3 group-hover:text-[#D96C4A] transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-[#FFFFFF] opacity-70 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span 
            key={tech} 
            className="text-xs font-mono px-2.5 py-1 rounded-full bg-dark-surface-hover text-[#FFFFFF] opacity-60 border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section id="projects" className="section bg-dark-surface/30" data-testid="projects-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="mb-12"
        >
          <p className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4">Projects</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#FFFFFF]">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
