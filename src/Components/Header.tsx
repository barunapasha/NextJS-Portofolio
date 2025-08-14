'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Background Blob */}
        <motion.div
          className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Navigation Content */}
        <div className="container mx-auto px-8 py-6 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-wider dark:text-white hover:scale-105 transition-transform"
            >
              Baruna.
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link transition-colors ${
                    pathname === item.href
                      ? 'text-gray-900 dark:text-white font-bold'
                      : 'text-gray-500 dark:text-gray-400'
                  } hover:text-brand-purple dark:hover:text-brand-purple`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="glass-icon"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <FiSun className="w-5 h-5 text-gray-200" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden glass-icon"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    className="w-5 h-0.5 bg-gray-900 dark:bg-white block mb-1"
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-5 h-0.5 bg-gray-900 dark:bg-white block mb-1"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-5 h-0.5 bg-gray-900 dark:bg-white block"
                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          initial={{ opacity: 0, pointerEvents: 'none' }}
          animate={isOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.3 }}
          onClick={closeMenu}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-2xl"
            initial={{ x: '100%' }}
            animate={isOpen ? { x: 0 } : { x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 glass-icon"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="text-2xl font-bold tracking-wider dark:text-white mb-12">
                Baruna.
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <div className="space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`block text-2xl font-semibold transition-colors ${
                        pathname === item.href
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-500 dark:text-gray-400'
                      } hover:text-brand-purple`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Connect
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/barunapasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07-4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/barunapasha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/barunapasha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/6285717623720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-icon"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.458l-6.167 1.679zm6.489-4.941c.326.192.66.37.999.529.073.036.147.074.22.112 1.579.84 3.34 1.287 5.166 1.286 5.457 0 9.898-4.442 9.9-9.899-.002-5.456-4.443-9.897-9.899-9.897-5.455 0-9.898 4.441-9.898 9.896 0 2.046.602 4.028 1.734 5.727l.217.324-1.133 4.137 4.224-1.119z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Ready to work together?</p>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="btn-primary text-white font-bold py-3 px-6 rounded-lg inline-block"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
