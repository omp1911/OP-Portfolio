import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mockData';
import { Button } from './ui/button';

const getSocialIcon = (iconName) => {
  switch (iconName) {
    case 'github':
      return <Github size={20} />;
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'twitter':
      return <Twitter size={20} />;
    case 'mail':
      return <Mail size={20} />;
    default:
      return null;
  }
};

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 flex items-center relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Contact Info */}
          <div
            className={`flex flex-wrap justify-center gap-8 mb-12 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-cyan-400">
              <Mail className="text-cyan-400" size={20} />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors duration-300">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="text-cyan-400" size={20} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-4 mb-16 transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {socialLinks.map((social, index) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                className="border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 text-gray-400 transition-all duration-300 bg-white/[0.02] hover:bg-cyan-500/10"
                onClick={() => window.open(social.url, '_blank')}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {getSocialIcon(social.icon)}
              </Button>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`border-t border-white/5 pt-8 transform transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-gray-700 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Built with React & FastAPI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
