import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkSection from './components/WorkSection';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Portfolio project data matching assets in public/videos and public/images/work
const videoProjects = [
  { id: 1, title: "Cleanse & Glow Promo", filename: "video1.mp4", category: "Commercial Cut" },
  { id: 2, title: "Short Reel Compilation", filename: "video2.mp4", category: "Reel Edit" },
  { id: 3, title: "Vlog Production Snippet", filename: "video3.mp4", category: "Social Reel" },
  { id: 4, title: "Quick Motion Reel Showcase", filename: "video4.mp4", category: "Music Video Cut" },
  { id: 5, title: "Cinematic Travel Narrative", filename: "video5.mp4", category: "Brand Promo" }
];

const imageProjects = [
  { id: 1, title: "Fresh Sprite Showcase", filename: "image1.png", category: "Poster Design" },
  { id: 2, title: "Fuel Your Nature Editorial", filename: "image2.png", category: "Color Grade Still" },
  { id: 3, title: "Economic Podcast Collage", filename: "image3.png", category: "Youtube Thumbnail" },
  { id: 4, title: "Refresh & Cleanse Layout", filename: "image4.png", category: "Behind the Scenes" }
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timer;
    const handleLoad = () => {
      // Let the loader animations display fully (at least 1.8 seconds)
      timer = setTimeout(() => {
        setLoading(false);
      }, 1800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: If load event doesn't trigger, release loader after 3.2s
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Remove Loader component from DOM after fade out transition (0.6s) completes
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {showLoader && <Loader loading={loading} />}
      
      {/* Content wrapper transitions in as loader disappears */}
      <div 
        className={`app-container ${loading ? 'pointer-events-none overflow-hidden h-screen opacity-0' : 'opacity-100'}`}
        style={{ transition: 'opacity 0.8s ease-in-out' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <WorkSection type="video" title="Selected Video Work" projects={videoProjects} />
          <WorkSection type="image" title="Selected Image Work" projects={imageProjects} />
          <Toolkit />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
