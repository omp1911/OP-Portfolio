import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/mockData';

const ProjectsScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

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
    const handleWheel = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      
      if (isInView) {
        e.preventDefault();
        
        if (e.deltaY > 0) {
          setCurrentIndex(prev => {
            if (prev < projects.length - 1) {
              return prev + 1;
            }
            return prev;
          });
        } else {
          setCurrentIndex(prev => {
            if (prev > 0) {
              return prev - 1;
            }
            return prev;
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20" ref={containerRef}>
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

        {/* Single Project - Replaces on Scroll */}
        <div className="max-w-6xl mx-auto" key={currentIndex}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            currentIndex % 2 === 0 ? '' : 'lg:grid-flow-dense'
          }`}>
            {/* Image with complete blend - both fade opacity and radial gradient */}
            <div className={`${currentIndex % 2 === 0 ? '' : 'lg:col-start-2'}`}>
              <div className="relative max-w-md mx-auto">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-auto rounded-2xl"
                  style={{
                    opacity: 0.7,
                    maskImage: 'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)'
                  }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className={`${currentIndex % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                  {currentProject.title}
                </span>
              </h3>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                {currentProject.description}
              </p>

              <div className="mt-6">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">TECHNOLOGIES USED</div>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, idx) => (
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
      </div>
    </section>
  );
};

export default ProjectsScroll;
