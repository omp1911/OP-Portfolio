import React from 'react';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const HeroPipeline = () => {
  return (
    <div className="pipeline-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="pulse-dot" />
          <span className="eyebrow" style={{ letterSpacing: '0.14em' }}>
            pipelines · production
          </span>
        </div>
        <span className="font-mono text-[11px] text-[var(--muted)]">GCP · Azure</span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="pipeline-node active">Ingest</div>
        <div className="pipeline-arrow" />
        <div className="pipeline-node">Transform</div>
        <div className="pipeline-arrow" />
        <div className="pipeline-node">Model</div>
        <div className="pipeline-arrow" />
        <div className="pipeline-node">Serve</div>
      </div>

      <div className="pipeline-log">
        <div><span className="muted">$</span> airflow dags trigger daily_finance_elt</div>
        <div><span className="ok">✓</span> 42 tasks succeeded · 0 failed</div>
        <div><span className="muted">→</span> BigQuery <span className="accent">fact_finance_v2</span> — 2.3 GB written</div>
        <div><span className="muted">→</span> lineage graph updated · SLA held</div>
        <div className="mt-2 muted">// self-managed Kafka → Datastream · zero-downtime cutover</div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="top" className="section pt-32 md:pt-40" ref={ref} data-testid="hero-section">
      <div className="container-wide grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7 space-y-8">
          <div className={`reveal ${visible ? 'is-visible' : ''}`}>
            <p className="eyebrow">{personalInfo.eyebrow}</p>
          </div>

          <h1
            className={`display text-[36px] sm:text-[54px] md:text-[76px] lg:text-[88px] reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}
            data-testid="hero-headline"
          >
            I build data pipelines that
            <span style={{ color: 'var(--accent)' }}> scale from GBs to TBs</span>.
          </h1>

          <p
            className={`text-[17px] md:text-[18.5px] leading-[1.7] max-w-[640px] text-[var(--ink-2)] reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}
            data-testid="hero-subhead"
          >
            {personalInfo.subhead}
          </p>

          <div
            className={`flex flex-wrap gap-3 reveal reveal-delay-3 ${visible ? 'is-visible' : ''}`}
            data-testid="hero-ctas"
          >
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
              data-testid="cta-view-projects"
            >
              View Projects <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-ghost"
              data-testid="cta-contact"
            >
              <Mail size={16} /> Contact
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-testid="cta-resume"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div
            className={`pt-4 flex items-center gap-6 text-[13px] text-[var(--muted)] font-mono reveal reveal-delay-4 ${visible ? 'is-visible' : ''}`}
          >
            <span>Ontario, Canada</span>
            <span>·</span>
            <a href={`mailto:${personalInfo.email}`} className="underline-fx">{personalInfo.email}</a>
          </div>
        </div>

        <div className={`hidden md:block md:col-span-5 reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
          <HeroPipeline />
        </div>
      </div>
    </section>
  );
};

export default Hero;
