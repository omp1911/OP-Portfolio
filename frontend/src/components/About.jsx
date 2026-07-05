import React from 'react';
import { personalInfo, education, certifications } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section" data-testid="about-section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label">About</p>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-6">
                Building data infrastructure that scales.
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                I'm a Data Engineer with 5+ years designing and shipping production data platforms 
                across GCP and Azure. Currently at EllisDon, contributing to multi-cloud ETL/ELT 
                pipelines that process GBs to TBs of data daily.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                My focus: zero-downtime migrations, real-time streaming with Kafka and Datastream, 
                dimensional modeling, and monitoring that catches issues before they become incidents.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-4">
                  Education
                </h3>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-zinc-200 pl-4">
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm text-zinc-600">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-4">
                  Certifications
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, i) => (
                    <p key={i} className="text-sm text-zinc-600">{cert}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
