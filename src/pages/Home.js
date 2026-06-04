import React from 'react';
import HeroSection from '../components/HeroSection';
import ResearchListSection from '../components/ResearchListSection';
import SchoolEventsSection from '../components/SchoolEventsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* Services Section */}
      <ResearchListSection />
      
      {/* Academy & Events Section */}
      <SchoolEventsSection />
    </div>
  );
};

export default Home;
