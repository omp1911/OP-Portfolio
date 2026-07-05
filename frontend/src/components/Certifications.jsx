import React from 'react';
import { certifications } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const Certifications = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="certifications" className="section" data-testid="certifications-section" style={{ paddingTop: 0 }}>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label mb-6">Certifications</p>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {certifications.map((c, i) => (
              <li
                key={c.name}
                className={`flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--hairline-strong)] pb-3 reveal reveal-delay-${(i % 4) + 1} ${visible ? 'is-visible' : ''}`}
                data-testid={`certification-${i}`}
              >
                <span className="font-serif text-[17px] tracking-[-0.005em]">{c.name}</span>
                <span className="font-mono text-[11px] text-[var(--muted)] tracking-[0.16em] uppercase whitespace-nowrap">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
