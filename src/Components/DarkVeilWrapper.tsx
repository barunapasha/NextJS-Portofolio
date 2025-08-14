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
        hueShift={0}
        noiseIntensity={0.1}
        scanlineIntensity={0.8}
        speed={3.0}
        scanlineFrequency={2.0}
        warpAmount={2.35}
        resolutionScale={1.25}
      />
    </div>
  );
};

export default DarkVeilWrapper;
