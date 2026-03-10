import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/mockData';

const ProjectItem = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`py-20 transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image */}
      <div className="mb-8 overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
          {project.title}
        </span>
      </h3>

      {/* Description */}
      <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-6 max-w-3xl">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="text-gray-400 text-lg"
          >
            {tech}{idx < project.technologies.length - 1 ? ' •' : ''}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsApple = () => {
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
    <section id="projects" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
        </div>

        {/* Projects - No containers */}
        <div>
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsApple;
