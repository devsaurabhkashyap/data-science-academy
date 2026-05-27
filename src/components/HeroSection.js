import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-bg-image"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Master Artificial<br/>Intelligence Today</h1>
        
        <button className="learn-more-btn">
          <div className="circle-arrow">
            <ArrowRight size={24} strokeWidth={1.5} />
          </div>
          Explore our AI Training Programs
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
