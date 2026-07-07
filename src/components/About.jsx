import React from 'react';
import useReveal from '../hooks/useReveal';

export default function About() {
  const [textRef, isTextRevealed] = useReveal();
  const [imgRevealRef, isImgRevealed] = useReveal();

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        
        {/* Left: profile image column with viewfinder frames */}
        <div 
          ref={imgRevealRef} 
          className={`about-image-col reveal-item ${isImgRevealed ? 'reveal-active' : ''}`}
        >
          <div className="viewfinder-container about-image-wrapper">
            <div className="viewfinder-bracket tl"></div>
            <div className="viewfinder-bracket br"></div>
            
            <img 
              src="/images/profile.jpg" 
              alt="Ravi Ranjan - Professional Video Editor" 
              className="about-image cinematic-img"
              loading="lazy"
            />
            <div className="about-image-gradient-overlay"></div>
          </div>
          
          <div className="about-image-caption">
            REC [00:02:14:15] &middot; STU_MUM &middot; 24FPS &middot; 2026
          </div>
        </div>

        {/* Right: biography text column */}
        <div 
          ref={textRef} 
          className={`about-text-col reveal-item ${isTextRevealed ? 'reveal-active' : ''}`}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            ABOUT
          </div>
          
          <h2 className="about-heading">
            The person behind the cuts.
          </h2>
          
          <div className="about-body">
            <p>
              I am a dedicated video editor and motion designer with 2 years of professional experience crafting high-retention reels, brand promotions, and short-form social content. My editing style merges precise rhythmic pacing, visual sound design, and clean color grading to translate raw concepts into striking cinematic edits.
            </p>
            
            <p>
              By focusing heavily on narrative flow and viewer psychology, I create video content that triggers emotional engagement and holds attention from the very first frame. I believe that every cut should serve a purpose, and every frame should carry weight.
            </p>
            
            <div className="about-currently">
              <span className="currently-tag">CURRENTLY:</span> Editing high-impact reels & YouTube content for digital creators and startup brands.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
