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

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...techStack, ...techStack, ...techStack];

  return (
    <section id="tech-stack" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative flex items-center">
      <div className="w-full">
        <div
          className={`mb-20 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        {/* Scrolling Lines */}
        <div className="space-y-12 overflow-hidden">
          {/* Line 1 - Left to Right */}
          <div className="relative">
            <div className="flex animate-marquee-right">
              {duplicatedSkills.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-8">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Line 2 - Right to Left */}
          <div className="relative">
            <div className="flex animate-marquee-left">
              {duplicatedSkills.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-8">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-500 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Line 3 - Left to Right */}
          <div className="relative">
            <div className="flex animate-marquee-right">
              {duplicatedSkills.map((tech, idx) => (
                <div key={idx} className="flex-shrink-0 px-8">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white whitespace-nowrap">
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
