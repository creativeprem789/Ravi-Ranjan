import React, { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import { Play } from 'lucide-react';

export default function VideoCard({ project, num, onOpenLightbox }) {
  const [cardRef, isRevealed] = useReveal();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Muted autoplay on desktop hover
  const handleMouseEnter = () => {
    if (!videoRef.current || hasError) return;
    videoRef.current.muted = true;

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Muted autoplay blocked or interrupted:", err));
    }
  };

  // Pause on mouse exit
  const handleMouseLeave = () => {
    if (!videoRef.current || hasError) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    <div 
      ref={cardRef}
      className={`video-card-container reveal-item ${isRevealed ? 'reveal-active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenLightbox}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onOpenLightbox();
        }
      }}
      aria-label={`Video project: ${project.title}. Category: ${project.category}. Press Enter or Space to open video.`}
    >
      <div className="video-card-wrapper">
        {/* Viewfinder brackets that animate inward on hover */}
        <div className="card-viewfinder-bracket tl"></div>
        <div className="card-viewfinder-bracket tr"></div>
        <div className="card-viewfinder-bracket bl"></div>
        <div className="card-viewfinder-bracket br"></div>

        {hasError ? (
          <div className="video-fallback-box">
            <p className="video-fallback-text">
              Drop <strong>{project.filename}</strong> in <code>/public/videos</code> to preview.
            </p>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={`/videos/${project.filename}`}
            className="video-card-element"
            muted
            loop
            playsInline
            onError={handleVideoError}
          />
        )}

        {/* Top-right play/expand control */}
        <button 
          className="video-control-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox();
          }}
          aria-label="Play video full screen"
        >
          <Play size={14} fill="currentColor" style={{ transform: 'translateX(1px)' }} />
        </button>

        {/* Bottom card info & linear gradient overlay */}
        <div className="video-card-overlay">
          <div className="video-card-meta">
            <span className="video-card-num">{num}</span>
            <span className="video-card-tag">{project.category}</span>
          </div>
          <h3 className="video-card-headline">{project.title}</h3>
        </div>
      </div>
    </div>
  );
}
