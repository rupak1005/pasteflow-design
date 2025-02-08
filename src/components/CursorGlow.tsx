
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
    >
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/30 blur-[100px] animate-pulse" />
    </motion.div>
  );
};
