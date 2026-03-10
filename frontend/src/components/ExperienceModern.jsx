import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '../data/mockData';

const ProjectShowcase = ({ project }) => {
  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl border border-cyan-500/10">
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink className="text-cyan-400" size={18} />
        <h4 className="text-lg font-semibold text-white">Enterprise Project</h4>
      </div>
      <h5 className="text-cyan-400 font-medium mb-2">{project.name}</h5>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, index, isRecent }) => {
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

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative group">
        {/* Floating card without container */}
        <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-2xl border border-white/[0.05] hover:border-cyan-500/20 transition-all duration-500">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Briefcase className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
                <div className="text-cyan-400 font-medium">{experience.company}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar size={16} />
              <span>{experience.duration}</span>
            </div>
          </div>
          
          <p className="text-gray-400 leading-relaxed mb-6">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/[0.03] text-gray-300 rounded-lg text-sm border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Add project showcase for most recent experience */}
          {isRecent && experience.project && (
            <ProjectShowcase project={experience.project} />
          )}
        </div>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500 -z-10 blur-xl"></div>
      </div>
    </div>
  );
};

const ExperienceModern = () => {
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-500 text-lg">
            My professional journey and impactful contributions
          </p>
        </div>

        {/* Experience Cards - Floating without containers */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
              isRecent={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceModern;
