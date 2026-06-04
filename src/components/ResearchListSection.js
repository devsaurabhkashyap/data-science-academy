import React from 'react';
import './ResearchListSection.css';

const researchData = [
  {
    id: 1,
    title: 'Website Management & Development',
    description: "We build, optimize, and maintain high-performance websites tailored to your brand. From seamless UX/UI to robust backend architecture, we handle everything so you can focus on growth.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop'
  }
];

const ResearchListSection = () => {
  return (
    <section className="research-list-section" id="web-management">
      <div className="research-list-container" style={{ gridTemplateColumns: '1fr' }}>
        {researchData.map((item) => (
          <div key={item.id} className="research-item" style={{ flexDirection: 'row', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div className="research-col-title">
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.title}</h3>
              </div>
              <div className="research-col-desc">
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{item.description}</p>
              </div>
            </div>
            <div className="research-col-img" style={{ flex: 1 }}>
              <img src={item.image} alt={item.title} className="research-thumbnail" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchListSection;
