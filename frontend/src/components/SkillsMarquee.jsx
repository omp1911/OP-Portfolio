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

  const grouped = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    if (!acc[tech.category].find(t => t.name === tech.name)) {
      acc[tech.category].push(tech);
    }
    return acc;
  }, {});

  const categories = Object.values(grouped);

  const durations = ['32s', '26s', '38s', '30s', '34s'];

  return (
    <section id="tech-stack" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative">
      <div className="w-full">

        {/* ── Skills Header — untouched from original ── */}
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

        {/* ── Marquee rows ── */}
        <div className="flex flex-col">
          {categories.map((skills, catIdx) => {
            const toLeft = catIdx % 2 === 0;
            const bright = catIdx % 2 === 0;
            const duration = durations[catIdx % durations.length];
            const repeated = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills];

            return (
              <div key={catIdx} className="relative overflow-hidden py-3.5 group">

                {/* Edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

                <div
                  className="flex w-max items-center group-hover:[animation-play-state:paused]"
                  style={{
                    animation: `${toLeft ? 'scrollLeft' : 'scrollRight'} ${duration} linear infinite`,
                  }}
                >
                  {repeated.map((tech, idx) => (
                    <span key={idx} className="inline-flex items-center">
                      <span
                        className={`px-7 text-[15px] font-medium cursor-default transition-colors duration-200 ${bright
                          ? 'text-gray-300 hover:text-blue-500'
                          : 'text-gray-600 hover:text-gray-300'
                          }`}
                      >
                        {tech.name}
                      </span>
                      <span
                        className={`w-[3px] h-[3px] rounded-full flex-shrink-0 ${bright ? 'bg-gray-700' : 'bg-gray-800'
                          }`}
                      />
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default SkillsMarquee;