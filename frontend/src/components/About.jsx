import React from 'react';
import { principles, personalInfo } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const { ref, visible } = useScrollReveal();
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal();

  return (
    <section id="about" className="section" data-testid="about-section">
      <div className="rail">About · 01</div>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl`}>
          <p className="section-label mb-6">About</p>
          <h2
            className="display text-[42px] md:text-[64px]"
            data-testid="about-heading"
          >
            I solve the data problem, not just the symptom.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Notebook = skeuo accent #1 */}
          <div
            className={`md:col-span-7 reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}
            data-testid="about-notebook"
          >
            <div className="notebook">
              <div className="notebook-heading">— hi, I&apos;m Om.</div>
              <div className="notebook-body relative z-10">
                <p>
                  I&apos;m a Data Engineer with <strong>{personalInfo.years} years</strong> designing and shipping
                  production data platforms across <strong>GCP</strong> and <strong>Azure</strong>. At{' '}
                  <strong>EllisDon</strong> I contribute to multi-cloud ETL/ELT pipelines that
                  push GBs to TBs of data every day into BigQuery and Synapse — for
                  finance, operations and analytics teams that need answers now, not tomorrow.
                </p>
                <p>
                  My focus is the boring stuff that actually makes teams fast: zero-downtime
                  migrations, real-time streaming and CDC with Kafka and Datastream, dimensional
                  modeling that survives audits, and monitoring that catches issues before Slack does.
                </p>
                <p>
                  I&apos;m certified on Azure Data Fundamentals and Palantir Foundry (Data Engineer
                  Professional). Recently I&apos;ve been building ELT pipelines in Microsoft Fabric for
                  Dynamics 365, and reducing manual invoice reconciliation with PySpark on Palantir.
                </p>
              </div>
            </div>
          </div>

          {/* Principle cards */}
          <div
            ref={cardsRef}
            className={`md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5 self-start`}
            data-testid="principles-grid"
          >
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`principle-card reveal reveal-delay-${(i % 4) + 1} ${cardsVisible ? 'is-visible' : ''}`}
                data-testid={`principle-${i}`}
              >
                <div className="principle-num">0{i + 1}</div>
                <h3 className="font-serif text-[19px] leading-[1.25] tracking-[-0.01em] mb-2">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-[1.65] text-[var(--ink-2)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
