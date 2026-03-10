import React, { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/mockData';

const ExperienceCard = ({ experience, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className={`relative pl-8 md:pl-12 pb-12 transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full border-4 border-black shadow-lg shadow-blue-400/50 transition-all duration-500"></div>
      
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 to-gray-800"></div>
      )}

      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 ease-out hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg transition-all duration-300 hover:bg-blue-500/20">
            <Briefcase className="text-blue-400" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 hover:text-blue-400">{experience.role}</h3>
            <div className="text-blue-400 font-medium">{experience.company}</div>
            <div className="text-gray-500 text-sm mt-1">{experience.duration}</div>
          </div>
        </div>
        
        <p className="text-gray-400 mb-4 leading-relaxed">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-400/50 hover:bg-gray-700 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've worked with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
