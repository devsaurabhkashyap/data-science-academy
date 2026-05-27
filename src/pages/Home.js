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
      <NewsSection />
      <GradsSection />
      <VideoSection />
      <ResearchListSection />
      <SchoolEventsSection />
    </div>
  );
};

export default Home;
