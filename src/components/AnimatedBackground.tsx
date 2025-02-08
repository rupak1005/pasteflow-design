
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Particle = ({ delay = 0, x, y }: { delay?: number; x: number; y: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/5"
    initial={{ x, y }}
    style={{
      width: Math.random() * 4 + 2 + 'px',
      height: Math.random() * 4 + 2 + 'px',
    }}
    animate={{
      y: [y, y - 30, y],
      x: [x, x + Math.random() * 20 - 10, x],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      delay: delay,
    }}
  />
);

export const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      const offset = window.scrollY * 0.3;
      setScrollOffset(offset);
      document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 animated-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            delay={particle.id * 0.1}
            x={particle.x}
            y={particle.y}
          />
        ))}
      </div>
    </div>
  );
};
