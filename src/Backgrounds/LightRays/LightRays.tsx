'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export type RaysOrigin =
  | "top-center"
  | "top-left"
  | "top-right"
  | "right"
  | "left"
  | "bottom-center"
  | "bottom-right"
  | "bottom-left";

interface LightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

const LightRays: React.FC<LightRaysProps> = ({
  raysColor = "#00ffff",
  followMouse = true,
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  // Get static origin position (always top-center)
  const getOriginPosition = () => {
    return { x: '50%', y: '0%' };
  };

  // Get target position (mouse or screen center)
  const getTargetPosition = () => {
    if (followMouse) {
      return { x: mousePosition.x, y: mousePosition.y };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  };

  useEffect(() => {
    // Calculate angle between origin and target
    const calculateAngle = () => {
      const originPos = getOriginPosition();
      const targetPos = getTargetPosition();
      
      // Convert percentage to pixels for calculation
      const originX = window.innerWidth * 0.5;
      const originY = 0;
      
      const deltaX = targetPos.x - originX;
      const deltaY = targetPos.y - originY;
      
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // Limit angle to create focused beam
      angle = Math.max(-30, Math.min(30, angle));
      
      return angle;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (followMouse) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setAngle(calculateAngle());
      }
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [followMouse, mousePosition]);

  const originPos = getOriginPosition();

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    >
      {/* Main spotlight effect - always from top-center */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${originPos.x} ${originPos.y}, ${raysColor}60 0%, ${raysColor}40 8%, ${raysColor}20 15%, transparent 40%)`,
          filter: 'blur(0.5px)',
        }}
      />

      {/* Spiky light rays that create the "duri-duri" effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '0%',
              height: '100vh',
              width: '1px',
              background: `linear-gradient(to bottom, ${raysColor}90 0%, ${raysColor}70 5%, ${raysColor}50 10%, ${raysColor}30 20%, transparent 50%)`,
              transformOrigin: 'center top',
              filter: 'blur(0.2px)',
            }}
            initial={{ 
              opacity: 0,
              scaleY: 0,
              rotate: `${angle + (i * 24)}deg`
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scaleY: [0, 1, 0],
              rotate: `${angle + (i * 24)}deg`
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.3,
              ease: 'easeInOut'
            }}
          />
        ))}
        
        {/* Irregular rays for more realistic "duri-duri" effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`irregular-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '0%',
              height: `${60 + Math.random() * 40}%`,
              width: '0.5px',
              background: `linear-gradient(to bottom, ${raysColor}80 0%, ${raysColor}60 8%, ${raysColor}40 15%, transparent 30%)`,
              transformOrigin: 'center top',
              filter: 'blur(0.1px)',
            }}
            initial={{ 
              opacity: 0,
              scaleY: 0,
              rotate: `${angle + (i * 45) + (Math.random() * 20 - 10)}deg`
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0],
              rotate: `${angle + (i * 45) + (Math.random() * 20 - 10)}deg`
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.15 + Math.random() * 0.5,
              repeat: Infinity,
              repeatDelay: 0.5 + Math.random(),
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Additional glow effect - follows cursor direction */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at ${originPos.x} ${originPos.y}, ${raysColor}50 0%, ${raysColor}30 10%, ${raysColor}15 20%, transparent 45%)`,
          filter: 'blur(1px)',
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center top',
        }}
      />

      {/* Light particles for atmosphere */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: raysColor,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Subtle caustics effect - follows cursor direction */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at ${originPos.x} ${originPos.y}, ${raysColor}30 0%, transparent 40%)`,
          filter: 'blur(2px)',
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center top',
        }}
      />
    </div>
  );
};

export default LightRays;
