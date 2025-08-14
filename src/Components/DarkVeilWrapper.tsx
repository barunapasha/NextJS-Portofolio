'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import DarkVeil from '@/Backgrounds/DarkVeil/DarkVeil';

const DarkVeilWrapper = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

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

  console.log('DarkVeilWrapper - Rendering DarkVeil in dark mode');

  return (
    <div className="fixed inset-0 z-5 pointer-events-none select-none" aria-hidden="true">
      <DarkVeil 
        hueShift={240}
        noiseIntensity={0.25}
        scanlineIntensity={0.6}
        speed={2.5}
        scanlineFrequency={1.5}
        warpAmount={0.35}
        resolutionScale={1}
      />
    </div>
  );
};

export default DarkVeilWrapper;
