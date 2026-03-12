import React, { useEffect, useRef, useState } from 'react';
import { techStack } from '../data/mockData';

const SkillsMarquee = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Group skills by category, deduplicate by name
  const grouped = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    if (!acc[tech.category].find(t => t.name === tech.name)) {
      acc[tech.category].push(tech);
    }
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <section id="tech-stack" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative">
      <div className="w-full">
        {/* Section Title */}
        <div
          className={`mb-16 container mx-auto px-6 md:px-12 lg:px-20 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Skills
            </span>
            <div className="h-1 w-16 bg-blue-500 mt-4 rounded-full"></div>
          </h2>
        </div>

        {/* One marquee row per category */}
        <div className="space-y-10">
          {categories.map((category, catIdx) => {
            const skills = grouped[category];
            const repeated = [...skills, ...skills, ...skills, ...skills];
            const direction = catIdx % 2 === 0 ? 'animate-marquee-right' : 'animate-marquee-left';
            // Odd rows bright, even rows dimmer for layered gradient effect
            const textColor = catIdx % 2 === 0 ? 'text-white' : 'text-gray-500';
            const dotColor = catIdx % 2 === 0 ? 'text-gray-500' : 'text-gray-700';

            return (
              <div key={category} className="overflow-hidden">
                <div className={`flex ${direction}`}>
                  {repeated.map((tech, idx) => (
                    <div
                      key={`${tech.name}-${idx}`}
                      className="flex-shrink-0 flex items-center"
                    >
                      {/* Equal px-6 padding on both sides of text, dot sits between */}
                      <span className={`text-xl md:text-2xl font-semibold ${textColor} whitespace-nowrap px-6`}>
                        {tech.name}
                      </span>
                      <span className={`${dotColor} text-xl select-none`}>•</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;