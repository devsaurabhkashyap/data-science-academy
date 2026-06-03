import React from 'react';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import GradsSection from '../components/GradsSection';
import VideoSection from '../components/VideoSection';
import ResearchListSection from '../components/ResearchListSection';
import SchoolEventsSection from '../components/SchoolEventsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* Services Section */}
      <ResearchListSection />
      
      {/* Academy & HR Section */}
      <NewsSection />
      <GradsSection />
      <VideoSection />
      <SchoolEventsSection />
    </div>
  );
};

export default Home;
