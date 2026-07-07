import React, { useState, useEffect } from 'react';

export default function Loader({ loading }) {
  const [timecode, setTimecode] = useState("00:00:12:00");

  useEffect(() => {
    // Generate a ticking film frame effect (24 fps)
    let frame = 0;
    const interval = setInterval(() => {
      frame = (frame + 1) % 24;
      const frameStr = frame.toString().padStart(2, '0');
      setTimecode(`00:00:12:${frameStr}`);
    }, 41.67); // 1000ms / 24 frames = 41.67ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader-overlay ${!loading ? 'fade-out' : ''}`} aria-hidden={!loading}>
      <div className="loader-timecode" aria-live="polite">
        {timecode}
      </div>
      
      <h1 className="loader-title">
        RAVI RANJAN
      </h1>
      
      <div className="loader-subtitle">
        2024 —— 2026
      </div>
      
      <div className="loader-bar-bg" role="progressbar" aria-valuenow={loading ? 50 : 100} aria-valuemin="0" aria-valuemax="100">
        <div className="loader-bar-fill"></div>
      </div>
    </div>
  );
}
