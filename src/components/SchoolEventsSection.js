import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolEventsSection.css';

const SchoolEventsSection = () => {
  return (
    <section className="school-events-section">
      <div className="school-events-container">
        
        {/* Header Section */}
        <div className="school-events-header">
          <h2>Global Hiring & Tech Events</h2>
          <p>
            Feynapps hosts recruitment drives and technical events worldwide. Find your nearest event below.
          </p>
        </div>

        {/* Thick Black Line */}
        <div className="school-events-divider"></div>

        {/* Three Columns Grid */}
        <div className="school-events-grid">
          
          {/* Column 1 */}
          <div className="school-events-col">
            <Link to="#" className="school-link-item">Global Online Career Fair</Link>
            <Link to="#" className="school-link-item">San Francisco Tech Hiring</Link>
            <Link to="#" className="school-link-item">London Finance Recruitment</Link>
            <Link to="#" className="school-link-item">Berlin Tech Talent Days</Link>
            <Link to="#" className="school-link-item">Bangalore Enterprise Summit</Link>
          </div>

          {/* Column 2 */}
          <div className="school-events-col">
            <Link to="#" className="school-link-item">New York GenAI Meetup</Link>
            <Link to="#" className="school-link-item">
              Tokyo Machine Learning Workshop
            </Link>
            <Link to="#" className="school-link-item">Singapore AI Week</Link>
            <Link to="#" className="school-link-item">
              Sydney Data Science Conference
            </Link>
          </div>

          {/* Column 3 */}
          <div className="school-events-col">
            <Link to="#" className="school-link-item">Toronto AI Summit</Link>
            <Link to="#" className="school-link-item">Paris Deep Learning</Link>
            <Link to="#" className="school-link-item">Austin Innovation Weekend</Link>
            <Link to="#" className="school-link-item">Dubai Future of AI</Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolEventsSection;
