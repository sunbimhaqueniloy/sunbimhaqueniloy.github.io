import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingPhotoProps {
  src: string;
  alt: string;
}

export function FloatingPhoto({ src, alt }: FloatingPhotoProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 20;
      const y = (e.clientY - rect.top - rect.height / 2) / 20;
      setRotation({ x: -y, y: x });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="relative flex justify-center items-center">
      {/* Glow behind photo */}
      <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full animate-pulse" />
      
      {/* Floating animation + parallax */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        className="relative z-10"
      >
        <img
          src={src}
          alt={alt}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20"
          style={{
            transform: 'perspective(1000px)',
          }}
        />
      </motion.div>
    </div>
  );
}