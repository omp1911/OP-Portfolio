import React from 'react';
import { motion } from 'framer-motion';
import { Database, Workflow, Server, Brain, BarChart3 } from 'lucide-react';

const DataPipelineVisualization = () => {
  const stages = [
    { id: 'extract', label: 'Extract', Icon: Database, isOrange: true },
    { id: 'transform', label: 'Transform', Icon: Workflow, isOrange: false },
    { id: 'load', label: 'Load', Icon: Server, isOrange: true },
    { id: 'aiml', label: 'AI/ML', Icon: Brain, isOrange: false },
    { id: 'analyze', label: 'Analyze', Icon: BarChart3, isOrange: true },
  ];

  return (
    <div className="relative w-full py-8" data-testid="data-pipeline-diagram">
      {/* Flow line SVG - positioned behind icons */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        <defs>
          {/* Gradient for static line */}
          <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D96C4A" stopOpacity="0.15" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="#D96C4A" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        
        {/* Static background line */}
        <line 
          x1="10" y1="35" 
          x2="90" y2="35" 
          stroke="url(#flowLineGrad)" 
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Animated particles layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'radial-gradient(circle, #D96C4A 0%, rgba(217,108,74,0.5) 50%, transparent 70%)',
              boxShadow: '0 0 8px #D96C4A, 0 0 12px rgba(217,108,74,0.5)',
              top: '28%',
              left: '8%',
            }}
            animate={{
              left: ['8%', '92%'],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.1, 0.5, 0.9, 1],
            }}
          />
        ))}
      </div>

      {/* Icons and labels */}
      <div className="relative flex justify-between items-start px-4" style={{ zIndex: 3 }}>
        {stages.map((stage, index) => {
          const IconComponent = stage.Icon;
          
          return (
            <motion.div
              key={stage.id}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#0C0C0E] transition-transform hover:scale-105"
              >
                <IconComponent 
                  size={20} 
                  className={stage.isOrange ? 'text-[#D96C4A]' : 'text-white/70'} 
                />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-white/70 uppercase tracking-wide">
                {stage.label}
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
          className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4"
        >
          About
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easing }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-12"
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
            <p className="text-white/70 leading-relaxed">
              With 5+ years designing and shipping production data platforms across GCP and Azure, 
              I specialize in building pipelines that transform raw chaos into actionable insights.
            </p>
            <p className="text-white/70 leading-relaxed">
              Currently at EllisDon, I contribute to multi-cloud ETL/ELT pipelines processing 
              GBs to TBs of data daily. My focus includes zero-downtime migrations, real-time 
              streaming with Kafka and Datastream, and dimensional modeling.
            </p>
            <p className="text-white/70 leading-relaxed">
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
            <p className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-2">Data Flow</p>
            <p className="text-sm text-white/50 mb-4">How I architect data pipelines</p>
            <DataPipelineVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
