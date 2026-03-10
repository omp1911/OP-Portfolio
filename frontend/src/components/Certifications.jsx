import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/mockData';

const CertificationCard = ({ cert, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 flex-shrink-0">
          <Award size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
          <div className="text-gray-400 text-sm mb-1">{cert.issuer}</div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-500 text-xs">{cert.date}</span>
            <button className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs flex items-center gap-1">
              <ExternalLink size={14} />
              Verify
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-600 font-mono">
            ID: {cert.credentialId}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
