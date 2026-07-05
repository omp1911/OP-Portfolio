import React from 'react';
import { education } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const Education = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="education" className="section" data-testid="education-section">
      <div className="rail">Education · 06</div>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mb-14`}>
          <p className="section-label mb-6">Education</p>
          <h2 className="display text-[42px] md:text-[64px]">Foundations.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {education.map((e, i) => (
            <div
              key={e.institution}
              className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''} border-t border-[var(--hairline-strong)] pt-6`}
              data-testid={`education-${i}`}
            >
              <h3 className="font-serif text-[26px] tracking-[-0.01em]">{e.institution}</h3>
              <p className="mt-1 text-[15px] text-[var(--ink-2)]">{e.degree}</p>
              <p className="mt-1 eyebrow" style={{ letterSpacing: '0.18em' }}>{e.field} · {e.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
