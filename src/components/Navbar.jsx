import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Prevent background scroll when mobile overlay menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a 
          href="#" 
          className="navbar-logo" 
          aria-label="Ravi Ranjan Portfolio Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          RAVI RANJAN<span className="navbar-logo-dot">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="navbar-nav" aria-label="Desktop Navigation">
          <a href="#about" className="navbar-link">About</a>
          <a href="#video-work" className="navbar-link">Video Work</a>
          <a href="#image-work" className="navbar-link">Image Work</a>
          <a href="#tools" className="navbar-link">Tools</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </nav>
        
        {/* Desktop CTA */}
        <div className="navbar-cta-wrapper">
          <a href="#contact" className="navbar-cta-btn" aria-label="Contact Ravi Ranjan">
            Let's Talk
          </a>
        </div>

        {/* Hamburger Menu Toggle Button for Mobile */}
        <button 
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Overlay (overlapping menu bar) */}
      <div className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'is-active' : ''}`}>
        <a href="#about" className="navbar-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#video-work" className="navbar-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Video Work</a>
        <a href="#image-work" className="navbar-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Image Work</a>
        <a href="#tools" className="navbar-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Tools</a>
        <a href="#contact" className="navbar-mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        <a href="#contact" className="navbar-mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
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
