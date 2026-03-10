import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mockData';
import { Button } from './ui/button';

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-700 ease-out hover:transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-56 bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-40' : 'opacity-60'
        }`}></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 hover:text-blue-400">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-400/50 hover:bg-gray-700 transition-all duration-300 cursor-default"
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
            className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
            onClick={() => window.open(project.link, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105"
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
    <section id="projects" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
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
