import React from 'react';
import useReveal from '../hooks/useReveal';

const toolsList = [
  { name: "CapCut", desc: "Fast cuts, auto-captions, mobile editing, and social aspect layouts" },
  { name: "DaVinci Resolve", desc: "Cinematic color grading, advanced nodes, matching, and finishing" },
  { name: "Photoshop", desc: "High-retention YouTube thumbnails, key art posters, and graphic design" },
  { name: "Canva", desc: "Quick social graphics, custom brand assets, overlays, and template layouts" }
];

export default function Toolkit() {
  const [headerRef, isHeaderRevealed] = useReveal();
  const [listRef, isListRevealed] = useReveal();

  return (
    <section className="toolkit-section" id="tools">
      <div className="container">
        
        {/* Section Header */}
        <div 
          ref={headerRef} 
          className={`toolkit-header reveal-item ${isHeaderRevealed ? 'reveal-active' : ''}`}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            EDITING STACK
          </div>
          
          <h2 className="toolkit-title">
            Toolkit.
          </h2>
        </div>

        {/* Tools grid */}
        <div 
          ref={listRef} 
          className={`toolkit-grid reveal-item ${isListRevealed ? 'reveal-active' : ''}`}
        >
          {toolsList.map((tool, idx) => (
            <div key={idx} className="tool-card">
              <div className="tool-card-header">
                <span className="tool-accent-dot"></span>
                <h3 className="tool-name">{tool.name}</h3>
              </div>
              
              <p className="tool-desc">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
