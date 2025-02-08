
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Particle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/5"
    style={{
      width: Math.random() * 4 + 2 + 'px',
      height: Math.random() * 4 + 2 + 'px',
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, Math.random() * 20 - 10, 0],
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
  const [particles, setParticles] = useState<number[]>([]);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    setParticles(Array.from({ length: 50 }, (_, i) => i));

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
        {particles.map((i) => (
          <Particle
            key={i}
            delay={i * 0.1}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
