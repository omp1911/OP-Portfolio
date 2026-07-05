import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, GitMerge, BarChart3 } from 'lucide-react';

const DataPipelineDiagram = () => {
  const nodes = [
    { id: 'source', label: 'Source Systems', icon: Database, x: 50, y: 120 },
    { id: 'ingest', label: 'Ingestion', icon: Server, x: 250, y: 120 },
    { id: 'transform', label: 'Transform', icon: GitMerge, x: 450, y: 120 },
    { id: 'warehouse', label: 'Data Warehouse', icon: BarChart3, x: 650, y: 120 },
  ];

  return (
    <div className="relative w-full h-64 md:h-72" data-testid="data-pipeline-diagram">
      <svg
        viewBox="0 0 750 240"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for the path */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#9d4cdd" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Animated gradient for the data packet */}
          <radialGradient id="packetGlow">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="1" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection paths */}
        <g className="paths">
          {/* Main pipeline path */}
          <path
            d="M 100 120 L 200 120 L 200 120 L 400 120 L 400 120 L 600 120"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 4"
            className="opacity-50"
          />
          
          {/* Animated path segments */}
          <motion.path
            d="M 100 120 L 200 120"
            stroke="#00f2fe"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M 200 120 L 400 120"
            stroke="#9d4cdd"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.path
            d="M 400 120 L 600 120"
            stroke="#00f2fe"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </g>

        {/* Animated data packets */}
        <motion.circle
          r="6"
          fill="#00f2fe"
          filter="url(#glow)"
          initial={{ cx: 100, cy: 120, opacity: 0 }}
          animate={{
            cx: [100, 200, 400, 600],
            cy: [120, 120, 120, 120],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 1,
          }}
        />
        
        <motion.circle
          r="4"
          fill="#9d4cdd"
          filter="url(#glow)"
          initial={{ cx: 100, cy: 120, opacity: 0 }}
          animate={{
            cx: [100, 200, 400, 600],
            cy: [120, 120, 120, 120],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
            repeatDelay: 1,
          }}
        />

        {/* Node backgrounds (neomorphic circles) */}
        {nodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="38"
              fill="none"
              stroke={index % 2 === 0 ? '#00f2fe' : '#9d4cdd'}
              strokeWidth="1"
              opacity="0.2"
            />
            {/* Main circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="32"
              fill="#1a1a2e"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              style={{
                filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5)) drop-shadow(-2px -2px 6px rgba(157,76,221,0.05))',
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Node labels and icons (positioned with CSS for responsiveness) */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const leftPercent = (node.x / 750) * 100;
          const topPercent = (node.y / 240) * 100;
          
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
            >
              <Icon 
                size={18} 
                className={index % 2 === 0 ? 'text-neo-cyan' : 'text-neo-purple'} 
              />
              <span className="mt-10 text-xs font-mono text-neo-secondary whitespace-nowrap">
                {node.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DataPipelineDiagram;
