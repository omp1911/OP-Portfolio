import React, { useEffect, useRef, useState } from 'react';
import { techStack } from '../data/mockData';

const SkillsMarquee = () => {
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

  const duplicatedSkills = [...techStack, ...techStack, ...techStack];

  return (
    <section id="tech-stack" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative flex items-center">
      <div className="w-full">
        <div
          className={`mb-12 container mx-auto px-6 md:px-12 lg:px-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        <div className="space-y-8 overflow-hidden">
          <div className="relative">
            <div className="flex animate-marquee-right">
              {duplicatedSkills.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-6">
                  <span className="text-xl md:text-2xl font-semibold text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex animate-marquee-left">
              {duplicatedSkills.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-6">
                  <span className="text-xl md:text-2xl font-semibold text-gray-400 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="flex animate-marquee-right">
              {duplicatedSkills.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-6">
                  <span className="text-xl md:text-2xl font-semibold text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
