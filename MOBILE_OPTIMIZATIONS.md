# Mobile Dark Mode Optimizations

This document outlines the mobile-specific optimizations implemented to improve the dark mode experience on mobile devices.

## Overview

The dark mode implementation uses a complex WebGL-based background effect (`DarkVeil`) that can be performance-intensive on mobile devices. This optimization package provides mobile-friendly alternatives and performance improvements.

## Implemented Optimizations

### 1. Mobile Device Detection

**File**: `src/hooks/useMobileDetection.ts`

- Detects mobile devices using user agent and screen size
- Identifies low-performance devices based on:
  - Older Android versions
  - Low-end device keywords
  - Limited memory (< 4GB)
  - Slow CPU (< 4 cores)
- Provides device type classification (mobile, tablet, desktop)

### 2. Performance-Optimized Settings

**Files**: 
- `src/Components/DarkVeilWrapper.tsx`
- `src/Components/Footer.tsx`

#### Mobile Settings (Reduced Performance Impact)
```javascript
const mobileSettings = {
  hueShift: 0,
  noiseIntensity: 0.05,        // Reduced from 0.1
  scanlineIntensity: 0.4,      // Reduced from 0.8
  speed: 1.5,                  // Reduced from 3.0
  scanlineFrequency: 1.0,      // Reduced from 2.0
  warpAmount: 1.0,             // Reduced from 2.35
  resolutionScale: 0.8,        // Reduced from 1.25
};
```

### 3. WebGL Performance Improvements

**File**: `src/Backgrounds/DarkVeil/DarkVeil.tsx`

- Reduced device pixel ratio (DPR) for mobile devices
- Frame rate limiting on mobile (~60fps max)
- Lower resolution scaling for mobile devices
- WebGL support detection with fallback

### 4. CSS Fallback for Low-Performance Devices

**File**: `src/app/globals.css`

- CSS-based dark mode background for devices that can't handle WebGL
- Mobile-specific backdrop blur optimizations
- Reduced animation durations for better performance
- High-performance mobile dark mode fallback class

### 5. Animation Optimizations

**File**: `src/app/page.tsx`

- Reduced animation durations on mobile devices
- Shorter typing animation speeds
- Reduced floating animation intensity
- Staggered animation delays optimized for mobile

## Usage

### Using the Mobile Detection Hook

```typescript
import useMobileDetection from '@/hooks/useMobileDetection';

const MyComponent = () => {
  const { isMobile, isLowPerformance, isTablet, isDesktop } = useMobileDetection();
  
  // Use device-specific optimizations
  if (isLowPerformance) {
    // Use CSS fallback instead of WebGL
  }
  
  return (
    <div className={isMobile ? 'mobile-optimized' : 'desktop-optimized'}>
      {/* Component content */}
    </div>
  );
};
```

### CSS Classes for Mobile Optimization

```css
/* Mobile-optimized dark mode components */
.mobile-dark-card {
  @apply bg-black/60 backdrop-blur-sm border border-blue-800/50;
}

.mobile-dark-overlay {
  @apply bg-black/40 backdrop-blur-sm;
}

/* Performance optimizations for mobile */
@media (max-width: 768px) {
  .mobile-optimized {
    will-change: auto;
    transform: translateZ(0);
  }
}
```

## Performance Benefits

1. **Reduced GPU Usage**: Lower resolution and simplified effects
2. **Better Battery Life**: Reduced frame rates and animation complexity
3. **Smoother Scrolling**: Optimized backdrop blur and reduced motion
4. **Faster Loading**: CSS fallbacks for low-performance devices
5. **Better User Experience**: Device-appropriate animation speeds

## Browser Support

- **High-Performance Devices**: Full WebGL effects with mobile optimizations
- **Low-Performance Devices**: CSS-based fallback backgrounds
- **No WebGL Support**: Graceful degradation to CSS backgrounds
- **Reduced Motion Preference**: Respects user accessibility settings

## Testing

To test mobile optimizations:

1. Use browser dev tools to simulate mobile devices
2. Test on actual mobile devices with different performance levels
3. Monitor performance using browser performance tools
4. Verify fallback behavior on devices without WebGL support

## Future Improvements

- Add more granular performance detection
- Implement progressive enhancement for different device tiers
- Add user preference for performance vs. visual quality
- Consider implementing service worker for better caching

## Files Modified

- `src/hooks/useMobileDetection.ts` (new)
- `src/Components/DarkVeilWrapper.tsx`
- `src/Components/Footer.tsx`
- `src/Backgrounds/DarkVeil/DarkVeil.tsx`
- `src/app/globals.css`
- `src/app/page.tsx`
- `MOBILE_OPTIMIZATIONS.md` (this file)
