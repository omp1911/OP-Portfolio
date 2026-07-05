import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/mockData';
import DataPipelineDiagram from './DataPipelineDiagram';

const About = () => {
  return (
    <section id="about" className="section bg-neo-base" data-testid="about-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          About
        </motion.p>
        
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="neo-card p-8 h-full">
              <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neo-text mb-6">
                Building data infrastructure that <span className="gradient-text">scales</span>.
              </h2>
              <p className="text-neo-secondary leading-relaxed mb-4">
                I&apos;m a Data Engineer with 5+ years designing and shipping production data platforms 
                across GCP and Azure. Currently at EllisDon, contributing to multi-cloud ETL/ELT 
                pipelines that process GBs to TBs of data daily.
              </p>
              <p className="text-neo-secondary leading-relaxed">
                My focus: zero-downtime migrations, real-time streaming with Kafka and Datastream, 
                dimensional modeling, and monitoring that catches issues before they become incidents.
              </p>
            </div>
          </motion.div>

          {/* Right: Data Pipeline Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="neo-card p-8 h-full">
              <p className="section-label mb-4">Data Flow Architecture</p>
              <DataPipelineDiagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
