import React from 'react';
import { projects } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const ProjectCard = ({ project, index }) => {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} border border-zinc-200 p-6`}
      data-testid={`project-${index}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-heading font-semibold pr-4">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
          {project.result}
        </span>
      </div>

      <p className="text-zinc-600 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="projects" className="section" data-testid="projects-section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-12`}>
          <p className="section-label">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Things I've built
          </h2>
        </div>

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
