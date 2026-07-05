import React from 'react';
import { experiences } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const ExperienceItem = ({ exp, index }) => {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} border-b border-zinc-200 pb-12 last:border-0`}
      data-testid={`experience-${index}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-6">
        <div>
          <h3 className="text-xl font-heading font-semibold">
            {exp.role}
          </h3>
          <p className="text-zinc-600">{exp.company}</p>
        </div>
        <p className="font-mono text-sm text-zinc-500">{exp.duration}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {exp.highlights.map((item, i) => (
          <li key={i} className="text-zinc-600 pl-4 border-l-2 border-zinc-200">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.stack.map((tech) => (
          <span key={tech} className="badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="section" data-testid="experience-section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-12`}>
          <p className="section-label">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceItem exp={exp} index={i} key={exp.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
