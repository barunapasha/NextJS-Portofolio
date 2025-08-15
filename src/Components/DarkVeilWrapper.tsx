'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import DarkVeil from '@/Backgrounds/DarkVeil/DarkVeil';
import useMobileDetection from '@/hooks/useMobileDetection';

const DarkVeilWrapper = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { isMobile, isLowPerformance } = useMobileDetection();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log('DarkVeilWrapper - Theme changed:', resolvedTheme);
  }, [resolvedTheme]);

  // Prevent hydration mismatch
  if (!mounted) {
    console.log('DarkVeilWrapper - Not mounted yet');
    return null;
  }

  // Only show in dark mode
  if (resolvedTheme !== 'dark') {
    console.log('DarkVeilWrapper - Not dark mode, not rendering');
    return null;
  }

  console.log('DarkVeilWrapper - Rendering DarkVeil in dark mode, Mobile:', isMobile, 'Low Performance:', isLowPerformance);

  // For low-performance devices, use CSS fallback instead of WebGL
  if (isLowPerformance) {
    return (
      <div className="fixed inset-0 z-5 pointer-events-none select-none dark-mobile-fallback" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(110,0,255,0.1),transparent_50%)]"></div>
      </div>
    );
  }

  // Mobile-optimized settings
  const mobileSettings = {
    hueShift: 0,
    noiseIntensity: 0.05, // Reduced from 0.1
    scanlineIntensity: 0.4, // Reduced from 0.8
    speed: 1.5, // Reduced from 3.0
    scanlineFrequency: 1.0, // Reduced from 2.0
    warpAmount: 1.0, // Reduced from 2.35
    resolutionScale: 0.8, // Reduced from 1.25
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
    <div className="fixed inset-0 z-5 pointer-events-none select-none" aria-hidden="true">
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
  );
};

export default DarkVeilWrapper;
