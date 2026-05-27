import React from 'react';
import './PageStyles.css';

const Certifications = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title text-gradient">Industry Certifications</h1>
        <div className="glass-card animate-fade-in">
          <p className="description">
            Earn certifications that hold weight in the tech industry. Our rigorous assessment ensures you meet the standard of top tech companies.
          </p>
          <div className="meta-info">
            <div className="meta-item">
              <strong>Data Science Professional</strong>
              Master machine learning algorithms and data pipelines.
            </div>
            <div className="meta-item">
              <strong>AI & Deep Learning Expert</strong>
              Build and deploy LLMs and Neural Networks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
