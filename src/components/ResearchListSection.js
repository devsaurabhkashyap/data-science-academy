import React from 'react';
import './ResearchListSection.css';

const researchData = [
  {
    id: 1,
    title: 'Website Management',
    description: "We build, optimize, and maintain high-performance websites tailored to your brand. From seamless UX/UI to robust backend architecture, we handle everything so you can focus on growth.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: "Amplify your digital presence with our comprehensive social media strategies. We manage content creation, community engagement, and targeted campaigns to build your audience.",
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: "Elite Technical Recruitment",
    description: "We source, vet, and place top-tier engineering talent in leading software companies worldwide. Our rigorous technical screening ensures only the best candidates make it to your interview table.",
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=200&h=200&auto=format&fit=crop'
  }
];

const ResearchListSection = () => {
  return (
    <section className="research-list-section">
      <div className="research-list-container">
        {researchData.map((item) => (
          <div key={item.id} className="research-item">
            <div className="research-col-title">
              <h3>{item.title}</h3>
            </div>
            <div className="research-col-desc">
              <p>{item.description}</p>
            </div>
            <div className="research-col-img">
              <img src={item.image} alt={item.title} className="research-thumbnail" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchListSection;
