import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-content">
          <h1>Connecting Top Talent with Global Opportunities</h1>
          <p>We are a premier recruitment agency specializing in placing elite candidates. Explore our hiring drives, corporate workshops, and technical hackathons designed to source the best talent.</p>
          <button className="learn-more-btn">
            <div className="circle-arrow">
              <ArrowRight size={20} strokeWidth={2} />
            </div>
            Find Your Next Hire
          </button>
        </div>
        <div className="hero-image-content">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Recruitment Team Meeting" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
