import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-copyright">
          &copy; {currentYear} Ravi Ranjan. All rights reserved.
        </div>
        
        <div className="footer-tagline">
          Video Editor &bull; Motion Graphics &bull; Color Grading
        </div>
        
      </div>
    </footer>
  );
}
