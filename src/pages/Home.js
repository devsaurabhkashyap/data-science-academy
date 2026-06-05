import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ResearchListSection from '../components/ResearchListSection';
import SchoolEventsSection from '../components/SchoolEventsSection';
import './Home.css';

const Home = () => {
  const [showAd, setShowAd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show the ad popup shortly after mounting
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page-container">
      {/* Promotional Popup */}
      {showAd && (
        <div className="ad-popup-overlay" onClick={() => setShowAd(false)}>
          <div className="ad-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="ad-popup-close" onClick={() => setShowAd(false)}>
              <X size={20} />
            </button>
            <img 
              src="/post 1.png" 
              alt="Data Science Course Promotion" 
              className="ad-popup-image" 
              onClick={() => navigate('/courses')}
            />
          </div>
        </div>
      )}

      <HeroSection />
      {/* Services Section */}
      <ResearchListSection />
      
      {/* Academy & Events Section */}
      <SchoolEventsSection />
    </div>
  );
};

export default Home;
