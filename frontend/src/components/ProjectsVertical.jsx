import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/mockData';

const ProjectsVertical = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

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

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
        </div>

        {/* Dot Indicators - Right Side */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                visibleItems.includes(idx) ? 'bg-white h-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Vertical Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => itemRefs.current[index] = el}
              className={`max-w-6xl mx-auto transform transition-all duration-1000 ease-out ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>
                {/* Image with blend effect */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="relative max-w-md mx-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-2xl"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                      }}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h3>

                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">TECHNOLOGIES USED</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-gray-300 text-sm border border-white/10 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsVertical;
