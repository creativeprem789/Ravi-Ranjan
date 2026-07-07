import React from 'react';
import useReveal from '../hooks/useReveal';
import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  const [contactRef, isRevealed] = useReveal();

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <div className={`container reveal-item ${isRevealed ? 'reveal-active' : ''}`}>
        
        <div className="eyebrow">
          <span className="eyebrow-dot"></span>
          GET IN TOUCH
        </div>
        
        <h2 className="contact-headline">
          Let's make something <span className="contact-accent">together.</span>
        </h2>
        
        {/* Underlined mailto link */}
        <div className="contact-email-wrapper">
          <a 
            href="mailto:kumarraviranjan7916@gmail.com" 
            className="contact-email-link"
            aria-label="Send email to kumarraviranjan7916@gmail.com"
          >
            kumarraviranjan7916@gmail.com
          </a>
        </div>

        {/* Contact details metadata row */}
        <div className="contact-meta-row">
          <div className="contact-meta-item">
            <MapPin size={16} className="contact-icon" />
            <span>Remote-Based</span>
          </div>
          
          <div className="contact-meta-item">
            <Phone size={16} className="contact-icon" />
            <a href="tel:+919508317623" aria-label="Call phone number">+91 95083 17623</a>
          </div>
          
          <div className="contact-meta-item">
            <Instagram size={16} className="contact-icon" />
            <a 
              href="https://www.instagram.com/ravirjkk/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Instagram profile"
            >
              @ravirjkk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
