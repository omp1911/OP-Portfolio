import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Workflow, BarChart3 } from 'lucide-react';

const DataPipelineVisualization = () => {
  const easing = [0.16, 1, 0.3, 1];
  
  const stages = [
    { id: 'extract', label: 'Extract', icon: Database, description: 'Source Systems' },
    { id: 'transform', label: 'Transform', icon: Workflow, description: 'Clean & Process' },
    { id: 'load', label: 'Load', icon: Server, description: 'Data Warehouse' },
    { id: 'analyze', label: 'Analyze', icon: BarChart3, description: 'Insights' },
  ];

  return (
    <div className="w-full py-8" data-testid="data-pipeline-diagram">
      {/* Pipeline stages */}
      <div className="flex items-center justify-between relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-accent-orange/20 via-accent-beige/30 to-accent-orange/20 -translate-y-1/2" />
        
        {/* Animated flow */}
        <motion.div
          className="absolute top-1/2 left-0 h-px w-1/4 bg-gradient-to-r from-transparent via-accent-orange to-transparent -translate-y-1/2"
          animate={{ x: ['0%', '300%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: easing }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Node */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-dark-surface border border-white/10 flex items-center justify-center shadow-neo mb-3">
                <Icon size={24} className="text-accent-beige" />
              </div>
              
              {/* Label */}
              <span className="text-xs sm:text-sm font-medium text-dark-text mb-1">
                {stage.label}
              </span>
              <span className="text-[10px] sm:text-xs text-dark-muted text-center max-w-[80px]">
                {stage.description}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="section bg-dark-base" data-testid="about-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="section-label"
        >
          About
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easing }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-dark-text mb-12"
        >
          Building data infrastructure that scales
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easing }}
            className="space-y-6"
          >
            <p className="text-dark-secondary leading-relaxed">
              With 5+ years designing and shipping production data platforms across GCP and Azure, 
              I specialize in building pipelines that transform raw chaos into actionable insights.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              Currently at EllisDon, I contribute to multi-cloud ETL/ELT pipelines processing 
              GBs to TBs of data daily. My focus includes zero-downtime migrations, real-time 
              streaming with Kafka and Datastream, and dimensional modeling.
            </p>
            <p className="text-dark-secondary leading-relaxed">
              I believe in monitoring that catches issues before they become incidents, 
              and infrastructure that scales without sacrificing reliability.
            </p>
          </motion.div>

          {/* Right: Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="neo-card p-6 sm:p-8"
          >
            <p className="section-label mb-2">Data Flow</p>
            <p className="text-sm text-dark-muted mb-6">How I architect data pipelines</p>
            <DataPipelineVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
