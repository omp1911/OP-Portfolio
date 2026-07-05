import React from 'react';
import { experiences } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const ExperienceCard = ({ exp, index }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`relative reveal ${visible ? 'is-visible' : ''}`}
      data-testid={`experience-${index}`}
    >
      <span className="timeline-node" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
        <div>
          <h3 className="font-serif text-[26px] md:text-[30px] leading-tight tracking-[-0.01em]">
            {exp.role} · <span style={{ color: 'var(--accent)' }}>{exp.company}</span>
          </h3>
          <p className="eyebrow mt-1">{exp.location}</p>
        </div>
        <p className="font-mono text-[12px] text-[var(--muted)] tracking-[0.14em]">
          {exp.duration}
        </p>
      </div>
      <ul className="space-y-2.5 mt-4 text-[15.5px] leading-[1.7] text-[var(--ink-2)]">
        {exp.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[var(--accent)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-5">
        {exp.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="experience" className="section" data-testid="experience-section">
      <div className="rail">Experience · 02</div>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mb-16`}>
          <p className="section-label mb-6">Experience</p>
          <h2 className="display text-[42px] md:text-[64px]">Impact over responsibilities.</h2>
        </div>

        <div className="timeline space-y-16">
          {experiences.map((exp, i) => (
            <ExperienceCard exp={exp} index={i} key={exp.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
