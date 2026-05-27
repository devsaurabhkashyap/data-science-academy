import React from 'react';
import './ResearchListSection.css';

const researchData = [
  {
    id: 1,
    title: 'Optimizing Model Weights',
    description: "Our recent hackathon winning team developed a novel algorithm for quantizing LLMs that reduces VRAM usage by 40% without significant loss in accuracy.",
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Computer Vision in Agriculture',
    description: "A standout project from the Binary Blooms AI training program focused on utilizing computer vision models to identify crop diseases early.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: "Ethics in Generative AI",
    description: "Our mentors recently published a paper exploring the gender, race, and age biases that popular image generating artificial intelligence models have.",
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
