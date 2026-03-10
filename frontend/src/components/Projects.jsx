import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mockData';
import { Button } from './ui/button';

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-56 bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
            onClick={() => window.open(project.link, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-400 hover:bg-gray-800"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github size={16} className="mr-2" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
