import React from 'react';
import { ArrowRight } from 'lucide-react';
import './GradsSection.css';

const GradsSection = () => {
  // Using high quality placeholders to match the diverse cast in the screenshot
  const gradImages = [
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop"
  ];

  return (
    <section className="grads-section">
      {/* Scattered Images Layer */}
      <div className="scattered-images">
        {gradImages.map((src, index) => (
          <div key={index} className={`scatter-img-wrapper img-${index + 1}`}>
            <img src={src} alt={`Grad ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Center Content Layer */}
      <div className="grads-center-content">
        <h2>Our Successful Placements</h2>
        <p>
          Meet the top candidates we've recently placed at leading Fortune 500 tech companies and high-growth startups globally.
        </p>
        
        <button className="grads-btn">
          <div className="circle-arrow">
            <ArrowRight size={20} strokeWidth={2} />
          </div>
          View All Placements
        </button>
      </div>
    </section>
  );
};

export default GradsSection;
