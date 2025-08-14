'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type RaysOrigin = 'top-center' | 'center' | 'bottom-center';

interface LightRaysProps {
  origin?: RaysOrigin;
  intensity?: number;
  color?: string;
  className?: string;
}

const LightRays = ({
  origin = 'top-center',
  intensity = 0.3,
  color = '#6E00FF',
  className = '',
}: LightRaysProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate particles on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(generatedParticles);
  }, []);

  const getOriginPosition = () => {
    switch (origin) {
      case 'top-center':
        return { x: '50%', y: '0%' };
      case 'center':
        return { x: '50%', y: '50%' };
      case 'bottom-center':
        return { x: '50%', y: '100%' };
      default:
        return { x: '50%', y: '0%' };
    }
  };

  const originPos = getOriginPosition();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? intensity : 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: `radial-gradient(ellipse at ${originPos.x} ${originPos.y}, ${color}20 0%, transparent 70%)`,
      }}
    >
      {/* Animated light rays using CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
            style={{
              left: `${12.5 + i * 12.5}%`,
              height: '100vh',
              transformOrigin: `${originPos.x} ${originPos.y}`,
            }}
            initial={{ 
              opacity: 0,
              scaleY: 0,
              rotate: `${i * 45}deg`
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scaleY: [0, 1, 0],
              rotate: `${i * 45}deg`
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Floating particles - only render after client-side hydration */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            y: 0
          }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 4 + (particle.id % 3),
            delay: particle.id * 0.1,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Gradient overlay for better integration */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.02) 50%, transparent 100%)`
        }}
      />
    </motion.div>
  );
};

export default LightRays;
