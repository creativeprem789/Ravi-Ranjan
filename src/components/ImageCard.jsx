import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function ImageCard({ project, num, onOpenLightbox }) {
  const [cardRef, isRevealed] = useReveal();
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div 
      ref={cardRef}
      className={`image-card-container reveal-item ${isRevealed ? 'reveal-active' : ''}`}
      onClick={onOpenLightbox}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onOpenLightbox();
        }
      }}
      aria-label={`Image project: ${project.title}. Category: ${project.category}. Press Enter or Space to view full screen.`}
    >
      <div className="image-card-wrapper">
        {/* Viewfinder brackets that animate inward on hover */}
        <div className="card-viewfinder-bracket tl"></div>
        <div className="card-viewfinder-bracket tr"></div>
        <div className="card-viewfinder-bracket bl"></div>
        <div className="card-viewfinder-bracket br"></div>

        {hasError ? (
          <div className="image-fallback-box">
            <p className="image-fallback-text">
              Drop <strong>{project.filename}</strong> in <code>/public/images/work</code> to preview.
            </p>
          </div>
        ) : (
          <img
            src={`/images/work/${project.filename}`}
            alt={project.title}
            className="image-card-element cinematic-img"
            loading="lazy"
            onError={handleImageError}
          />
        )}

        {/* Bottom card info & linear gradient overlay */}
        <div className="image-card-overlay">
          <div className="image-card-meta">
            <span className="image-card-num">{num}</span>
            <span className="image-card-tag">{project.category}</span>
          </div>
          <h3 className="image-card-headline">{project.title}</h3>
        </div>
      </div>
    </div>
  );
}
