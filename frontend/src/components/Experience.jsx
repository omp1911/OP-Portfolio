import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/mockData';

const ExperienceItem = ({ exp, index }) => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: easing }}
      className="relative pl-8 pb-12 last:pb-0"
      data-testid={`experience-${index}`}
    >
      {/* Timeline dot */}
      <div className="timeline-dot top-1.5" />
      
      {/* Content card - NO hover effect */}
      <div className="neo-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-5">
          <div>
            <h3 className="font-heading text-xl font-medium text-[#FFFFFF] mb-1">
              {exp.role}
            </h3>
            <p className="text-[#D96C4A] text-sm font-medium">{exp.company}</p>
          </div>
          <p className="text-xs text-[#FFFFFF] opacity-50 font-mono whitespace-nowrap">{exp.duration}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.highlights.map((item, i) => (
            <li 
              key={i} 
              className="text-[#FFFFFF] opacity-80 text-sm leading-relaxed pl-4 border-l border-[#D96C4A]/30"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span key={tech} className="skill-pill text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section id="experience" className="section bg-dark-surface/30" data-testid="experience-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="mb-12"
        >
          <p className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4">Experience</p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#FFFFFF]">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />
          
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceItem exp={exp} index={i} key={exp.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
