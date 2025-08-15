import { useState, useEffect } from 'react';

interface MobileDetectionResult {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  isLowPerformance: boolean;
}

export const useMobileDetection = (): MobileDetectionResult => {
  const [mobileInfo, setMobileInfo] = useState<MobileDetectionResult>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenWidth: 0,
    screenHeight: 0,
    isLowPerformance: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Detect mobile devices
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // Detect tablets specifically
      const isTabletDevice = /ipad|android(?=.*\b(?!.*mobile))/i.test(userAgent) || 
                            (screenWidth >= 768 && screenWidth <= 1024);
      
      // Determine device type based on screen size and user agent
      const isMobile = isMobileDevice || screenWidth <= 768;
      const isTablet = isTabletDevice || (screenWidth > 768 && screenWidth <= 1024);
      const isDesktop = !isMobile && !isTablet;

      // Detect low performance devices
      const isLowPerformance = detectLowPerformanceDevice();

      setMobileInfo({
        isMobile,
        isTablet,
        isDesktop,
        screenWidth,
        screenHeight,
        isLowPerformance,
      });
    };

    const detectLowPerformanceDevice = (): boolean => {
      // Check for low-end devices based on various factors
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Detect older Android versions
      const isOldAndroid = /android [1-6]\./i.test(userAgent);
      
      // Detect low-end devices by checking for specific keywords
      const isLowEndDevice = /galaxy a|galaxy j|redmi|huawei y|honor play/i.test(userAgent);
      
      // Check for limited memory (if available)
      const hasLimitedMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      
      // Check for slow CPU (if available)
      const hasSlowCPU = (navigator as any).hardwareConcurrency && (navigator as any).hardwareConcurrency < 4;
      
      return isOldAndroid || isLowEndDevice || hasLimitedMemory || hasSlowCPU;
    };

    // Initial check
    checkDevice();

    // Add event listeners
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  return mobileInfo;
};

export default useMobileDetection;
