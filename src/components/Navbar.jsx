import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#" className="navbar-logo" aria-label="Ravi Ranjan Portfolio Home">
          RAVI RANJAN<span className="navbar-logo-dot">.</span>
        </a>
        
        <nav className="navbar-nav" aria-label="Desktop Navigation">
          <a href="#about" className="navbar-link">About</a>
          <a href="#video-work" className="navbar-link">Video Work</a>
          <a href="#image-work" className="navbar-link">Image Work</a>
          <a href="#tools" className="navbar-link">Tools</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>
        
        <div className="navbar-cta-wrapper">
          <a href="#contact" className="navbar-cta-btn" aria-label="Contact Ravi Ranjan">
            Let's Talk
          </a>
        </div>
      </div>
      
      {/* Scroll-based timeline progress seeker */}
      <div 
        className="navbar-timeline-progress" 
        style={{ width: `${scrollProgress}%` }}
        role="presentation"
      ></div>
    </header>
  );
}
