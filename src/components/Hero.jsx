import React from 'react';
import RoleCycler from './RoleCycler';

const roles = [
  "Video Editor",
  "Motion Graphics Artist",
  "Content Creator",
  "Creative Director"
];

const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Reels & Shorts",
  "Social Content"
];

// Replicated string for seamless horizontal ticker loop
const tickerText = "00:00:12:04  00:02:18:23  00:05:40:12  00:08:52:00  00:10:05:14  00:12:30:19  00:15:45:07  00:18:24:22  ";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Repeating horizontal timecode ticker */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-inner">
          {tickerText}{tickerText}{tickerText}{tickerText}
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            Based in India &middot; Available for Projects
          </div>
          
          <h1 className="hero-headline">
            I'm <span className="hero-accent-name">Ravi Ranjan</span>,<br />
            video editor.
          </h1>
          
          <div className="hero-role-row">
            <span className="hero-role-label">Focusing on</span>
            <RoleCycler roles={roles} />
          </div>
          
          <div className="hero-skills-row">
            {skills.map((skill, idx) => (
              <span key={idx} className="pill-chip">
                {skill}
              </span>
            ))}
          </div>
          
          <div className="hero-stats-row">
            <div className="hero-stat-col">
              <div className="hero-stat-num">2 Years</div>
              <div className="hero-stat-label">Experience</div>
            </div>
            <div className="hero-stat-col">
              <div className="hero-stat-num">5+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div className="hero-stat-col">
              <div className="hero-stat-num">CapCut &middot; DaVinci</div>
              <div className="hero-stat-label">Core Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
