'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Dock from '../Dock/Dock';
import { FiHome, FiUser, FiFolder, FiMail, FiSun, FiMoon } from 'react-icons/fi';

const DockNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    {
      icon: <FiHome size={18} className={`${pathname === '/' ? 'text-brand-purple' : 'text-gray-700 dark:text-gray-200'}`} />,
      label: 'Home',
      onClick: () => router.push('/'),
    },
    {
      icon: <FiUser size={18} className={`${pathname === '/about' ? 'text-brand-purple' : 'text-gray-700 dark:text-gray-200'}`} />,
      label: 'About',
      onClick: () => router.push('/about'),
    },
    {
      icon: <FiFolder size={18} className={`${pathname === '/projects' ? 'text-brand-purple' : 'text-gray-700 dark:text-gray-200'}`} />,
      label: 'Projects',
      onClick: () => router.push('/projects'),
    },
    {
      icon: <FiMail size={18} className={`${pathname === '/contact' ? 'text-brand-purple' : 'text-gray-700 dark:text-gray-200'}`} />,
      label: 'Contact',
      onClick: () => router.push('/contact'),
    },
    {
      icon: mounted && theme === 'dark' ? 
        <FiSun size={18} className="text-gray-700 dark:text-gray-200" /> : 
        <FiMoon size={18} className="text-gray-700 dark:text-gray-200" />,
      label: mounted && theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    },
  ];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 dark:bg-black/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-lg rounded-2xl px-4 py-2">
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-[50px] h-[50px] bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
        items={navItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="bg-white/90 dark:bg-black/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 shadow-lg"
      />
    </div>
  );
};

export default DockNav;
