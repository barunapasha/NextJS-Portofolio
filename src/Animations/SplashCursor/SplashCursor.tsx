'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashCursorProps {
  color?: string;
  size?: number;
  trailLength?: number;
  className?: string;
}

const SplashCursor = ({
  color = '#6E00FF',
  size = 8,
  trailLength = 5,
  className = '',
}: SplashCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Only add event listeners on desktop
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timeoutId);
    };
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted || typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {/* Main cursor dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: mousePosition.x - size / 2,
          top: mousePosition.y - size / 2,
          width: size,
          height: size,
          backgroundColor: color,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? (isMoving ? 1 : 0.3) : 0,
          scale: isMoving ? 1.5 : 1,
        }}
        transition={{
          duration: 0.1,
          ease: 'easeOut',
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: mousePosition.x - (size * 2) / 2,
          top: mousePosition.y - (size * 2) / 2,
          width: size * 2,
          height: size * 2,
          backgroundColor: `${color}30`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? (isMoving ? 0.6 : 0.2) : 0,
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      />

      {/* Hover effect for interactive elements */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: mousePosition.x - (size * 4) / 2,
          top: mousePosition.y - (size * 4) / 2,
          width: size * 4,
          height: size * 4,
          backgroundColor: `${color}10`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? (isMoving ? 0.4 : 0.1) : 0,
          scale: isMoving ? 1.8 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      />

      {/* Trail particles */}
      {[...Array(trailLength)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: mousePosition.x - (size * 0.5) / 2,
            top: mousePosition.y - (size * 0.5) / 2,
            width: size * 0.5,
            height: size * 0.5,
            backgroundColor: color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isVisible ? (isMoving ? 0.3 : 0) : 0,
            scale: isMoving ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            delay: i * 0.05,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default SplashCursor;
