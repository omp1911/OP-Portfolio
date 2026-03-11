import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/mockData';

const ProjectsScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInSection, setIsInSection] = useState(false);
  const [slideDirection, setSlideDirection] = useState('up');
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInSection(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      if (!containerRef.current || !isInSection) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      
      if (isInView) {
        // Only prevent if not at boundaries
        if ((e.deltaY > 0 && currentIndex < projects.length - 1) ||
            (e.deltaY < 0 && currentIndex > 0)) {
          e.preventDefault();
        }

        // Clear previous timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Increased debounce for smoother transitions
        scrollTimeout.current = setTimeout(() => {
          if (e.deltaY > 0) {
            // Scrolling down - next item comes from bottom
            if (currentIndex < projects.length - 1) {
              setSlideDirection('up');
              setCurrentIndex(prev => prev + 1);
            }
          } else {
            // Scrolling up - previous item comes from top
            if (currentIndex > 0) {
              setSlideDirection('down');
              setCurrentIndex(prev => prev - 1);
            }
          }
        }, 400);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isInSection, currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20" ref={containerRef}>
        {/* Section Title - Fixed */}
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

        {/* Dot Indicators - Only visible when in section */}
        {isInSection && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {projects.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex ? 'bg-white h-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}

        {/* Single Project - Slides in from bottom or top */}
        <div className="max-w-6xl mx-auto">
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
              currentIndex % 2 === 0 ? '' : 'lg:grid-flow-dense'
            } ${
              slideDirection === 'up' 
                ? 'animate-slide-up' 
                : 'animate-slide-down'
            }`}
            key={currentIndex}
          >
            {/* Image with complete blend */}
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
