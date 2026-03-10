import React, { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/mockData';

const ExperienceItem = ({ experience, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Role and Company */}
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
          {experience.role}
        </span>
      </h3>
      <div className="text-2xl md:text-3xl text-gray-400 mb-3">{experience.company}</div>
      <div className="text-lg text-gray-600 mb-8">{experience.duration}</div>
      
      <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8 max-w-3xl">
        {experience.description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mb-8">
        {experience.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="text-gray-400 text-lg"
          >
            {tech}{idx < experience.technologies.length - 1 ? ' •' : ''}
          </span>
        ))}
      </div>

      {/* Project for recent experience */}
      {index === 0 && experience.project && (
        <div className="mt-12 max-w-3xl">
          <div className="text-sm text-gray-600 uppercase tracking-wider mb-3">ENTERPRISE PROJECT</div>
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">{experience.project.name}</h4>
          <p className="text-lg text-gray-500 leading-relaxed">{experience.project.description}</p>
        </div>
      )}
    </div>
  );
};

const ExperienceApple = () => {
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
    <section id="experience" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div
          className={`mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        {/* Experience Items - No containers */}
        <div>
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceApple;
