import React, { useState, useEffect } from 'react';

export default function RoleCycler({ roles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [roles.length]);

  if (reducedMotion) {
    return (
      <div className="role-static-wrapper">
        <span className="role-static-text">{roles[currentIndex]}</span>
      </div>
    );
  }

  return (
    <div className="role-cycler-container" aria-live="polite">
      <div 
        className="role-cycler-track" 
        style={{ 
          transform: `translateY(-${currentIndex * 40}px)`,
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {roles.map((role, idx) => (
          <div key={idx} className="role-cycler-item">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}
