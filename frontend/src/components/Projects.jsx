import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="neo-card p-6 md:p-8 group hover:-translate-y-1 transition-all duration-300"
      data-testid={`project-${index}`}
    >
      {/* Result badge */}
      <div className="flex justify-between items-start mb-4">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-neo-cyan/10 text-neo-cyan border border-neo-cyan/20"
        >
          {project.result}
        </motion.span>
        <ExternalLink 
          size={16} 
          className="text-neo-muted group-hover:text-neo-cyan transition-colors" 
        />
      </div>

      <h3 className="font-heading text-xl font-medium text-neo-text mb-3 group-hover:text-neo-cyan transition-colors">
        {project.title}
      </h3>

      <p className="text-neo-secondary text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span 
            key={tech} 
            className="text-xs font-mono px-2 py-1 rounded bg-neo-surface text-neo-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-neo-surface/30" data-testid="projects-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Projects</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-neo-text">
            Things I&apos;ve <span className="gradient-text">built</span>
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
