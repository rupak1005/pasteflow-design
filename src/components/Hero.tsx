
import { useState } from 'react';
import { Copy, Link, Clock, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [code, setCode] = useState('');

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <FloatingCode />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Share Code <span className="text-primary">Beautifully</span>
        </motion.h1>
        
        <motion.div 
          className="glass p-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 bg-surface border border-white/10 rounded-lg p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Paste your code here..."
          />
          <div className="flex justify-end mt-4">
            <button className="btn-primary flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Create Paste
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FeatureCard 
            icon={Link}
            title="Instant Sharing"
            description="Share your code snippets with a single click"
          />
          <FeatureCard 
            icon={Palette}
            title="Syntax Highlighting"
            description="Support for all major programming languages"
          />
          <FeatureCard 
            icon={Clock}
            title="Expiration Control"
            description="Set custom expiration times for your pastes"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: any, 
  title: string, 
  description: string 
}) => (
  <motion.div 
    className="card p-6"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const FloatingCode = () => {
  const codeSnippets = [
    'function hello() {',
    'const app = express();',
    'import React from "react";',
    'SELECT * FROM users;',
    'print("Hello, World!")',
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="text-2xl font-mono opacity-20"
          animate={{
            y: [-20, 20],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            },
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
};
