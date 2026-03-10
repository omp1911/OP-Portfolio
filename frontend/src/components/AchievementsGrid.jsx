import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../data/mockData';

const AchievementItem = ({ cert, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start gap-4">
        <Award className="text-gray-400 mt-1 flex-shrink-0" size={24} />
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{cert.name}</h3>
          <div className="text-base text-gray-500 mb-1">{cert.issuer}</div>
          <div className="text-sm text-gray-600">{cert.date}</div>
        </div>
      </div>
    </div>
  );
};

const AchievementsGrid = () => {
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
    <section id="certifications" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
          {certifications.map((cert, index) => (
            <AchievementItem key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsGrid;
