import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TitanIcon } from '../TitanLogo';

/**
 * Hook to detect if user has requested reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReduced;
}

/**
 * Hook to detect if the device supports hover and fine pointer (desktop)
 */
export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return isDesktop;
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // In seconds, e.g. 0.1, 0.25
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // In pixels
  duration?: number; // In seconds
  className?: string;
  threshold?: number;
}

/**
 * Scroll Reveal Component using IntersectionObserver
 * Clean, lightweight, 60fps CSS transitions, respects prefers-reduced-motion
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 35,
  duration = 0.7,
  className = '',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, reducedMotion]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Calculate transform offset
  let initialTransform = 'none';
  if (direction === 'up') initialTransform = `translateY(${distance}px)`;
  if (direction === 'down') initialTransform = `translateY(-${distance}px)`;
  if (direction === 'left') initialTransform = `translateX(${distance}px)`;
  if (direction === 'right') initialTransform = `translateX(-${distance}px)`;

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) translateX(0)' : initialTransform,
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Max degrees (e.g. 2)
}

/**
 * Desktop-only subtle 3D tilt card based on mouse coordinates.
 * Automatically disabled on touch screens / mobile devices and when reduced motion is preferred.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 1.8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const shiftX = ((x - centerX) / centerX) * 4;
    const shiftY = ((y - centerY) / centerY) * 4;

    setTilt({ rotateX, rotateY, x: shiftX, y: shiftY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  const style: React.CSSProperties | undefined =
    isDesktop && !reducedMotion
      ? {
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: 'transform',
        }
      : undefined;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
};

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // In milliseconds
  className?: string;
}

/**
 * Animated number counter that counts up once when entering the viewport
 */
export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1200,
  className = '',
}) => {
  const [currentVal, setCurrentVal] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setCurrentVal(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(easeOut * value);
            setCurrentVal(val);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentVal(value);
            }
          };

          requestAnimationFrame(animate);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [value, duration, reducedMotion]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {currentVal}
      {suffix}
    </span>
  );
};

/**
 * Smooth Route Change Page Transition
 */
export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplayLocation(location);
      return;
    }

    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 140);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation, reducedMotion]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        opacity: transitionStage === 'fadeIn' ? 1 : 0,
        transform: transitionStage === 'fadeIn' ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.22s cubic-bezier(0.22, 1, 0.36, 1), transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

/**
 * 1. Global Page Load Experience (Initial fast 0.8–1.0s loader)
 * Shows TITAN logo, subtle cyan ambient glow, thin animated loading line, quick fade into website
 */
export const InitialPageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // If reduced motion is requested or already shown in this session, skip immediately
    if (reducedMotion || (typeof window !== 'undefined' && sessionStorage.getItem('titan_loaded'))) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setFading(true);
      const hideTimer = setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem('titan_loaded', 'true');
        } catch (_) {}
      }, 300);
      return () => clearTimeout(hideTimer);
    }, 850);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  if (!loading) return null;

  return (
    <div
      id="titan-initial-loader"
      style={{
        transition: 'opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020B1A] text-white"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#00D1FF]/15 blur-[90px] pointer-events-none animate-pulse" />

      <div className="relative flex flex-col items-center space-y-4">
        {/* TITAN Icon with gentle scale and drop-shadow */}
        <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-[#00D1FF]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,209,255,0.35)]">
          <TitanIcon className="w-10 h-10 drop-shadow-[0_0_12px_#00D1FF]" />
        </div>

        {/* Brand wordmark */}
        <div className="text-center">
          <div className="font-display font-extrabold text-xl tracking-[0.2em] text-white">
            TITAN
          </div>
          <div className="text-[10px] font-mono tracking-[0.3em] text-[#00D1FF] font-bold uppercase">
            AI AGENCY
          </div>
        </div>

        {/* Thin animated loading progress line */}
        <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden relative mt-2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D1FF] to-[#3BA9FF] animate-loader-line" />
        </div>
      </div>
    </div>
  );
};

/**
 * Desktop-only subtle ambient cursor glow follower
 */
export const DesktopCursorGlow: React.FC = () => {
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDesktop, reducedMotion, visible]);

  if (!isDesktop || reducedMotion || !visible) return null;

  return (
    <div
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.25s ease-out',
      }}
      className="fixed pointer-events-none z-40 w-72 h-72 rounded-full bg-[#00D1FF]/[0.055] blur-[80px]"
    />
  );
};

/**
 * Lightweight floating ambient particles for hero and dark sections
 */
export const FloatingParticles: React.FC<{ count?: number; className?: string }> = ({
  count = 6,
  className = '',
}) => {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const top = 15 + (i * 13) % 70;
        const left = 10 + (i * 17) % 80;
        const duration = 4 + (i % 3) * 2;
        const delay = (i * 0.7) % 3;
        const size = i % 2 === 0 ? 3 : 2;

        return (
          <span
            key={i}
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `float-gentle ${duration}s ease-in-out ${delay}s infinite`,
              boxShadow: '0 0 8px #00D1FF',
            }}
            className="absolute rounded-full bg-[#00D1FF] opacity-40 hidden sm:block"
          />
        );
      })}
    </div>
  );
};
