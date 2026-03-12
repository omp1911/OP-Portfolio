import React, { useEffect, useRef, useState } from 'react';
import { techStack } from '../data/mockData';

const categoryLabels = {
  'DE': 'Data Engineering',
  'Administration': 'Administration',
  'Cloud/DevOps': 'Cloud & DevOps',
  'Languages/Analytics': 'Languages & Analytics',
  'Database': 'Database',
};

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
    // avoid duplicate names within same category
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
            // Duplicate enough times so marquee never shows a gap
            const repeated = [...skills, ...skills, ...skills, ...skills];
            const direction = catIdx % 2 === 0 ? 'animate-marquee-right' : 'animate-marquee-left';

            return (
              <div key={category} className="relative">
                {/* Category label */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-3">
                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    {categoryLabels[category] || category}
                  </span>
                </div>

                {/* Scrolling row */}
                <div className="overflow-hidden">
                  <div className={`flex ${direction}`}>
                    {repeated.map((tech, idx) => (
                      <div
                        key={`${tech.name}-${idx}`}
                        className="flex-shrink-0 px-6 flex items-center gap-3"
                      >
                        <span className="text-xl md:text-2xl font-semibold text-white whitespace-nowrap">
                          {tech.name}
                        </span>
                        <span className="text-gray-700 text-xl select-none">•</span>
                      </div>
                    ))}
                  </div>
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