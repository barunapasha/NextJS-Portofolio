'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import DarkVeil from '@/Backgrounds/DarkVeil/DarkVeil';
import useMobileDetection from '@/hooks/useMobileDetection';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { isMobile, isLowPerformance } = useMobileDetection();

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/barunapasha',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07-4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/barunapasha',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/barunapasha/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6285717623720',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.458l-6.167 1.679zm6.489-4.941c.326.192.66.37.999.529.073.036.147.074.22.112 1.579.84 3.34 1.287 5.166 1.286 5.457 0 9.898-4.442 9.9-9.899-.002-5.456-4.443-9.897-9.899-9.897-5.455 0-9.898 4.441-9.898 9.896 0 2.046.602 4.028 1.734 5.727l.217.324-1.133 4.137 4.224-1.119z"/>
        </svg>
      ),
    },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
  ];

  // Mobile-optimized settings
  const mobileSettings = {
    hueShift: 0,
    noiseIntensity: 0.05,
    scanlineIntensity: 0.4,
    speed: 1.5,
    scanlineFrequency: 1.0,
    warpAmount: 1.0,
    resolutionScale: 0.8,
  };

  // Desktop settings
  const desktopSettings = {
    hueShift: 0,
    noiseIntensity: 0.1,
    scanlineIntensity: 0.8,
    speed: 3.0,
    scanlineFrequency: 2.0,
    warpAmount: 2.35,
    resolutionScale: 1.25,
  };

  const settings = isMobile ? mobileSettings : desktopSettings;

  return (
    <footer className="relative z-40 bg-white/95 dark:bg-black/0 border-t border-gray-200 dark:border-blue-800">
      {/* DarkVeil Background for Footer in Dark Mode */}
      {mounted && resolvedTheme === 'dark' && !isLowPerformance && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
          <DarkVeil 
            hueShift={settings.hueShift}
            noiseIntensity={settings.noiseIntensity}
            scanlineIntensity={settings.scanlineIntensity}
            speed={settings.speed}
            scanlineFrequency={settings.scanlineFrequency}
            warpAmount={settings.warpAmount}
            resolutionScale={settings.resolutionScale}
          />
        </div>
      )}
      
      {/* Fallback background for low-performance devices */}
      {mounted && resolvedTheme === 'dark' && isLowPerformance && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none dark-mobile-fallback" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60"></div>
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">
          <nav className="flex items-center space-x-6 lg:space-x-8 mb-6 md:mb-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-gray-700 dark:text-white hover:text-brand-purple transition-colors text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
                        <div className="flex items-center space-x-4 text-gray-700 dark:text-white">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/30 dark:bg-black/20 backdrop-blur-sm border border-gray-200/50 dark:border-blue-800/30 rounded-xl hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 bg-white/0 dark:bg-black/0"
        >
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">Interested in working together?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-purple/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </Link>
            <a
              href="https://github.com/barunapasha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/90 dark:bg-black/30 backdrop-blur-sm border-2 border-gray-200 dark:border-blue-800/50 text-gray-700 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-black/50 transition-all duration-300 hover:-translate-y-1"
            >
              Visit My Github
            </a>
          </div>
        </motion.div>
        
        <div className="text-center text-gray-500 dark:text-blue-400 pt-8 border-t border-gray-200 dark:border-blue-800">
          <p className="text-lg mb-2">&copy; 2025 All Rights Reserved.</p>
          <p className="text-lg">Made by Baruna Pasha.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
