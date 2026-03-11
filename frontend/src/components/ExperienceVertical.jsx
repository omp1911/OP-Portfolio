import React, { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/mockData';

const ExperienceVertical = () => {
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
    <section id="experience" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div
          className={`mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        {/* Dot Indicators - Left Side */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
          {experiences.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                visibleItems.includes(idx) ? 'bg-white h-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Vertical Experiences */}
        <div className="space-y-32">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              ref={el => itemRefs.current[index] = el}
              className={`max-w-4xl mx-auto transform transition-all duration-1000 ease-out ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="text-center py-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                    {experience.role}
                  </span>
                </h3>
                <div className="text-xl md:text-2xl text-gray-300 mb-2">{experience.company}</div>
                <div className="text-base text-gray-400 mb-6">{experience.duration}</div>
                
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  {experience.technologies.map((tech, idx) => (
                    <span key={idx} className="text-gray-300 text-base">
                      {tech}{idx < experience.technologies.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>

                {index === 0 && experience.project && (
                  <div className="mt-8">
                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">ENTERPRISE PROJECT</div>
                    <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">{experience.project.name}</h4>
                    <p className="text-base text-gray-400 leading-relaxed">{experience.project.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceVertical;
