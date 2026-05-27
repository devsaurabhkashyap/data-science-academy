import React from 'react';
import './NewsSection.css';

const sidebarNews = [
  {
    id: 1,
    headline: 'AI Bootcamp Series',
    description: "Join our intensive 12-week AI Bootcamp focusing on LLMs and generative models.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=100&fit=crop&q=80'
  },
  {
    id: 2,
    headline: 'Machine Learning Workshop',
    description: "Our next workshop will cover advanced deep learning techniques and computer vision.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=100&fit=crop&q=80'
  },
  {
    id: 3,
    headline: 'Data Science Mentorship',
    description: "Enroll in our 1-on-1 mentorship program to learn directly from industry leading Data Scientists.",
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&h=100&fit=crop&q=80'
  },
  {
    id: 4,
    headline: 'GenAI Hackathon Winners',
    description: "Congratulations to team NeuralNet for winning the first prize at the Binary Blooms GenAI Hackathon.",
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=100&fit=crop&q=80'
  },
  {
    id: 5,
    headline: 'NLP Masterclass',
    description: "Guest speaker Dr. Sarah Chen will be delivering a masterclass on Natural Language Processing.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=100&fit=crop&q=80'
  },
  {
    id: 6,
    headline: 'AI for Healthcare',
    description: "Explore the intersection of Artificial Intelligence and Healthcare in our upcoming weekend seminar.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=100&fit=crop&q=80'
  }
];

const NewsSection = () => {
  // We duplicate the list to create a seamless infinite scrolling loop
  const duplicatedNews = [...sidebarNews, ...sidebarNews];

  return (
    <section className="news-section">
      <div className="news-container">
        
        {/* Left Featured Article */}
        <div className="news-left">
          <div className="featured-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Conan O'Brien" 
              className="featured-image"
            />
          </div>
          <div className="featured-category">Upcoming Hackathon</div>
          <h2 className="featured-headline">Binary Blooms announces Global AI Hackathon 2026</h2>
        </div>

        {/* Right Auto-Scrolling News List */}
        <div className="news-right">
          <div className="scrolling-wrapper">
            {duplicatedNews.map((item, index) => (
              <div key={`${item.id}-${index}`} className="news-item">
                <div className="news-item-content">
                  <h3 className="news-item-headline">{item.headline}</h3>
                  <p className="news-item-desc">{item.description}</p>
                </div>
                <img src={item.image} alt={item.headline} className="news-item-thumb" />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default NewsSection;
