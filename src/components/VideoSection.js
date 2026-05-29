import React, { useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './VideoSection.css';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      <div className="video-container">
        
        {/* Left Text Column */}
        <div className="video-text-content">
          <h2>Transforming careers in Tech</h2>
          <p>
            Watch Sarah, a recent candidate we placed, explain how our technical workshops and 
            dedicated recruitment team helped her land her dream role as a Senior Engineer at a top startup.
          </p>
          <button className="fay-prize-btn">
            <div className="black-circle">
              <ArrowRight size={16} strokeWidth={2} />
            </div>
            View more candidate success stories
          </button>
        </div>

        {/* Right Video Column */}
        <div className="video-player-wrapper">
          <video 
            ref={videoRef}
            className="html5-video"
            poster="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop"
            controls={isPlaying}
            onPause={handleVideoPause}
            onPlay={handleVideoPlay}
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          
          {/* Custom Overlay (hidden when playing) */}
          <div className={`video-overlay ${isPlaying ? 'hidden' : ''}`}>
            <div className="play-btn-circle" onClick={handlePlayClick}>
              <Play size={20} fill="currentColor" style={{ marginLeft: '4px' }} />
            </div>
            <span className="video-overlay-text" onClick={handlePlayClick}>
              Watch Sarah's Journey
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
