import React from 'react';
import './PageStyles.css';

const Trainings = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title text-gradient">Corporate & Live Trainings</h1>
        <div className="glass-card animate-fade-in">
          <p className="description">
            Enhance your team's capability with our specialized corporate training programs in Data Science, AI, and Software Engineering.
          </p>
          <div className="meta-info">
            <div className="meta-item">
              <strong>Customizable Curriculum</strong>
              Tailored to your company's tech stack.
            </div>
            <div className="meta-item">
              <strong>Expert Instructors</strong>
              Led by seasoned professionals.
            </div>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Request a Callback</button>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
