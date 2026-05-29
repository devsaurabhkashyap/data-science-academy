import React from 'react';
import './ResearchListSection.css';

const researchData = [
  {
    id: 1,
    title: 'Elite Technical Recruitment',
    description: "We source, vet, and place top-tier engineering talent in leading software companies worldwide. Our rigorous technical screening ensures only the best candidates make it to your interview table.",
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Corporate Training & Workshops',
    description: "Upskill your existing workforce with our specialized corporate training programs. We offer intensive workshops in advanced topics like Machine Learning, Cloud Architecture, and DevOps.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: "Hackathon Organization",
    description: "We organize and host global technical hackathons on behalf of corporate partners to crowdsource innovation and identify rising talent in a competitive environment.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop'
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
