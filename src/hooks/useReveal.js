import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport and trigger entry animations.
 * Automatically respects prefers-reduced-motion queries by setting revealed to true instantly.
 */
export default function useReveal() {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // If reduced motion is preferred, reveal immediately without animations
    if (mediaQuery.matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Listen for changes to reduced motion settings
    const handleChange = (e) => {
      if (e.matches) {
        setIsRevealed(true);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return [elementRef, isRevealed];
}
