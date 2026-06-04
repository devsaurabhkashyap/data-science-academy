import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolEventsSection.css';

const SchoolEventsSection = () => {
  return (
    <section className="school-events-section">
      <div className="school-events-container">
        
        {/* Header Section */}
        <div className="school-events-header">
          <h2>Upcoming Events, Hackathons & Job Boards</h2>
          <p>
            Stay updated with our latest technical events, community hackathons, and curated job opportunities.
          </p>
        </div>

        {/* Thick Black Line */}
        <div className="school-events-divider"></div>

        {/* Three Columns Grid */}
        <div className="school-events-grid">
          
          {/* Column 1 */}
          <div className="school-events-col">
            <Link to="#" className="school-link-item">Summer Coding Hackathon 2026</Link>
            <Link to="#" className="school-link-item">Web Dev Portfolio Review</Link>
            <Link to="#" className="school-link-item">Open Source Contribution Day</Link>
          </div>

          {/* Column 2 */}
          <div className="school-events-col">
            <Link to="#" className="school-link-item">Tech Startup Job Board</Link>
            <Link to="#" className="school-link-item">Frontend Developer Meetup</Link>
            <Link to="#" className="school-link-item">React Native Workshop</Link>
          </div>

          {/* Column 3 */}
          <div className="school-events-col">
            <Link to="#" className="school-link-item">Freelance Opportunities Board</Link>
            <Link to="#" className="school-link-item">UI/UX Design Challenge</Link>
            <Link to="#" className="school-link-item">Cloud Deployment Webinar</Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolEventsSection;
