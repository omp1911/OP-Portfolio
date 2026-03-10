import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Wrench, Palette } from 'lucide-react';
import { techStack } from '../data/mockData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Frontend':
      return <Code2 size={20} />;
    case 'Backend':
      return <Code2 size={20} />;
    case 'Database':
      return <Database size={20} />;
    case 'Cloud':
      return <Cloud size={20} />;
    case 'DevOps':
      return <Wrench size={20} />;
    case 'Design':
      return <Palette size={20} />;
    default:
      return <Code2 size={20} />;
  }
};

const TechCard = ({ tech, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`p-6 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-xl border border-white/[0.05] hover:border-cyan-500/20 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 transition-all duration-300">
          {getCategoryIcon(tech.category)}
        </div>
        <h3 className="text-base font-semibold text-white">{tech.name}</h3>
        <span className="text-xs text-gray-600 uppercase tracking-wider">{tech.category}</span>
      </div>
    </div>
  );
};

const TechStack = () => {
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
    <section id="tech-stack" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-500 text-lg">
            Technologies and tools I use to build exceptional products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
