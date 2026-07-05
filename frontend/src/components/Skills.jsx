import React from 'react';
import { skills } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const SkillBucket = ({ bucket, index }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 5) + 1} ${visible ? 'is-visible' : ''}`}
      data-testid={`skill-bucket-${index}`}
    >
      <div className="flex items-baseline gap-3 mb-5">
        <span className="font-mono text-[11px] text-[var(--muted)] tracking-[0.22em] uppercase">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-serif text-[22px] tracking-[-0.01em]">{bucket.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {bucket.items.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="skills" className="section" data-testid="skills-section">
      <div className="rail">Skills · 04</div>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mb-16`}>
          <p className="section-label mb-6">Toolkit</p>
          <h2 className="display text-[42px] md:text-[64px]">
            A toolkit built around <span style={{ color: 'var(--accent)' }}>data at scale</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {skills.map((b, i) => (
            <SkillBucket bucket={b} index={i} key={b.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
