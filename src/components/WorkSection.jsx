import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import useReveal from '../hooks/useReveal';
import { X } from 'lucide-react';

export default function WorkSection({ type, title, projects }) {
  const [headerRef, isHeaderRevealed] = useReveal();
  const [activeProject, setActiveProject] = useState(null);

  // Keyboard accessibility: Close lightbox on Escape keypress
  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  const countBadgeText = `${projects.length.toString().padStart(2, '0')} PROJECTS`;

  return (
    <section 
      className={`work-section ${type}-work-section`} 
      id={type === 'video' ? 'video-work' : 'image-work'}
    >
      <div className="container">
        
        {/* Header container with title & count */}
        <div 
          ref={headerRef} 
          className={`work-section-header reveal-item ${isHeaderRevealed ? 'reveal-active' : ''}`}
        >
          <div className="work-header-left">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              {type === 'video' ? 'SHOWCASE' : 'GALLERY'}
            </div>
            <h2 className="work-title">{title}</h2>
          </div>
          
          <div className="work-count-badge">
            {countBadgeText}
          </div>
        </div>

        {/* Responsive grid mapping each card */}
        <div className={`work-grid ${type}-grid`}>
          {projects.map((project, idx) => {
            const projectNumber = (idx + 1).toString().padStart(2, '0');
            
            if (type === 'video') {
              return (
                <VideoCard 
                  key={project.id} 
                  project={project} 
                  num={projectNumber} 
                  onOpenLightbox={() => setActiveProject(project)}
                />
              );
            } else {
              return (
                <ImageCard 
                  key={project.id} 
                  project={project} 
                  num={projectNumber} 
                  onOpenLightbox={() => setActiveProject(project)}
                />
              );
            }
          })}
        </div>
        
      </div>

      {/* Accessible Lightbox Modal */}
      {activeProject && (
        <div 
          className="lightbox-overlay" 
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded work preview"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setActiveProject(null)}
              aria-label="Close project viewer"
            >
              <X size={20} />
            </button>
            
            {type === 'video' ? (
              <video 
                src={`/videos/${activeProject.filename}`} 
                className="lightbox-video"
                autoPlay
                controls
                loop
                playsInline
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  borderRadius: '8px',
                  border: '1px solid var(--line)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
                }}
              />
            ) : (
              <img 
                src={`/images/work/${activeProject.filename}`} 
                alt={activeProject.title} 
                className="lightbox-image"
              />
            )}
            
            <div className="lightbox-caption">
              <span>{activeProject.category}</span> &bull; <span>{activeProject.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
