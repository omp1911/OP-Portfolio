import React from 'react';
import { projects } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const PolaroidScene = ({ tech }) => {
  const nodes = ['Source', 'Pipeline', 'Warehouse'];
  return (
    <div className="polaroid-scene">
      <span className="node">
        <span className="dot" /> {tech[0] || nodes[0]}
      </span>
      <div className="flex items-center">
        <span className="line" />
        <span className="node center">{tech[1] || nodes[1]}</span>
        <span className="line" />
      </div>
      <span className="node right">
        <span className="dot" /> {tech[tech.length - 1] || nodes[2]}
      </span>
    </div>
  );
};

const Polaroid = ({ project, index }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''}`}
      data-testid={`project-${index}`}
    >
      <div
        className="polaroid"
        style={{ transform: `rotate(${project.tilt}deg)` }}
      >
        <div className="polaroid-photo">
          <PolaroidScene tech={project.tech} />
        </div>
        <div className="polaroid-caption">
          <div className="title">{project.title}</div>
          <div className="metric">{project.metric}</div>
          <p className="mt-3 text-[13px] leading-[1.6] text-[var(--ink-2)]">{project.caption}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[10.5px] tracking-[0.08em] text-[var(--muted)]">
                {t}
              </span>
            )).reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={`sep-${i}`} className="text-[var(--muted)]">·</span>, curr], [])}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="projects" className="section" data-testid="projects-section">
      <div className="rail">Projects · 03</div>
      <div className="container-wide">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mb-16`}>
          <p className="section-label mb-6">Featured Projects</p>
          <h2 className="display text-[42px] md:text-[64px]">
            Things I&apos;ve built in production.
          </h2>
          <p className="mt-6 text-[16px] text-[var(--ink-2)] max-w-[620px]">
            A few pipelines, migrations and platform pieces I&apos;ve shipped — each one boring on
            purpose, because reliable is more useful than clever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-14">
          {projects.map((p, i) => (
            <Polaroid project={p} index={i} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
