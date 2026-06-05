import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseCatalog } from './Courses';
import { MonitorPlay, User, Clock, CheckCircle, X, CheckCircle2 } from 'lucide-react';
import './CourseDetails.css';
import './Courses.css'; // Reusing chatbot CSS from here

const CourseDetails = () => {
  const { courseId } = useParams();
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  
  const course = courseCatalog.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="edx-details-page" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h1>Course Not Found</h1>
        <Link to="/courses" style={{ color: '#0056D2' }}>Back to Academy</Link>
      </div>
    );
  }

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  return (
    <div className="edx-details-page">
      <div className="edx-details-hero-bg"></div>

      <div className="edx-details-container">
        
        {/* Breadcrumbs */}
        <div className="edx-breadcrumbs">
          <Link to="/" className="edx-breadcrumb-link">Home</Link>
          <span className="edx-breadcrumb-separator">{'>'}</span>
          <Link to="/courses" className="edx-breadcrumb-link">Certificates</Link>
          <span className="edx-breadcrumb-separator">{'>'}</span>
          <Link to="/courses" className="edx-breadcrumb-link">{course.programType}</Link>
          <span className="edx-breadcrumb-separator">{'>'}</span>
          <span className="edx-breadcrumb-current">{course.title}</span>
        </div>

        <div className="edx-details-grid">
          
          {/* Main Left Column */}
          <div className="edx-details-main">
            
            {/* Primary White Card */}
            <div className="edx-details-card">
              <img src={course.universityLogo} alt={course.university} className="edx-details-logo" />
              <h1 className="edx-details-title">{course.title}</h1>
              <h3 className="edx-details-subtitle">{course.courseCount}, {course.duration.split(' ')[0]} months</h3>
              
              <button 
                className="edx-earn-btn"
                onClick={handleContactClick}
              >
                Contact to buy
              </button>

              <label className="edx-opt-in">
                <input type="checkbox" defaultChecked />
                <span>I would like to receive email from {course.university.split(' ')[0]}X and learn about other offerings related to {course.title}.</span>
              </label>
            </div>

            {/* Secondary Meta Strip Card */}
            <div className="edx-meta-strip">
              <div className="edx-meta-col">
                <MonitorPlay className="edx-meta-icon" size={24} />
                <div>
                  <h4 className="edx-meta-col-title">{course.level.split(' ')[0]}</h4>
                  <p className="edx-meta-col-desc">No prior experience required</p>
                </div>
              </div>
              <div className="edx-meta-col">
                <User className="edx-meta-icon" size={24} />
                <div>
                  <h4 className="edx-meta-col-title">Self-paced</h4>
                  <p className="edx-meta-col-desc">Progress at your own speed</p>
                </div>
              </div>
              <div className="edx-meta-col">
                <Clock className="edx-meta-icon" size={24} />
                <div>
                  <h4 className="edx-meta-col-title">{course.duration.split(' ')[0]} months</h4>
                  <p className="edx-meta-col-desc">{course.effort}</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn Section */}
            {course.whatYouWillLearn && course.whatYouWillLearn.length > 0 && (
              <div className="edx-what-you-learn">
                <h2>What you'll learn</h2>
                <div className="edx-learn-grid">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="edx-learn-item">
                      <CheckCircle2 size={18} className="edx-learn-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Promo Banner */}
            <div className="edx-promo-banner">
              <div className="edx-promo-content">
                <h2>Stay ahead of the curve with 30% off</h2>
                <p>Save on new skills with up to 30% off programs. Use code TAKE30OFFEDX26 at checkout. Offer ends Jun 30, 2026. ⓘ</p>
              </div>
              <button 
                className="edx-promo-btn"
                onClick={handleContactClick}
              >
                Contact to buy
              </button>
            </div>

          </div>

          {/* Right Sidebar Panel */}
          <div className="edx-sidebar-panel">
            <div className="edx-sidebar-header">
              <CheckCircle size={24} />
              Earn a certificate
            </div>

            <div className="edx-video-placeholder">
              <div className="edx-play-button"></div>
            </div>

            <div className="edx-enrolled-count">
              <strong>{course.learnersEnrolled}</strong> learners enrolled
            </div>

            <div className="edx-curriculum-box">
              <div className="edx-curriculum-header">
                There are {course.courseCount.split(' ')[0]} courses in this program
              </div>
              <div className="edx-curriculum-body">
                <ul className="edx-curriculum-list">
                  {course.curriculumList && course.curriculumList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button className="edx-curriculum-show">Show More</button>
              </div>
            </div>

            <div className="edx-pricing">
              <span style={{ fontSize: '1rem', color: '#555' }}>Price available upon request</span>
            </div>

            <button 
              className="edx-earn-btn edx-sidebar-btn"
              onClick={handleContactClick}
            >
              Contact to buy
            </button>
          </div>

        </div>

      </div>

      {/* Mock Chatbot Widget */}
      <div className="edx-chatbot-widget">
        {showChatBubble && (
          <div className="edx-chatbot-bubble">
            <button className="edx-bubble-close" onClick={() => setShowChatBubble(false)}>
              <X size={14} />
            </button>
            Hi! 👋 I'm Xpert, an AI assistant to help you find things.
          </div>
        )}
        <div className="edx-chatbot-icon" onClick={() => setShowChatBubble(!showChatBubble)}>
          <div className="edx-chatbot-face">
            <div className="edx-chatbot-eyes">
              <div className="edx-chatbot-eye"></div>
              <div className="edx-chatbot-eye"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Modal Popup */}
      {showContactModal && (
        <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={() => setShowContactModal(false)}><X size={24} /></button>
            <h2 className="contact-modal-title">Contact Us to Enroll</h2>
            <p className="contact-modal-subtitle">Ready to advance your career? Get in touch with our admissions team to secure your spot in <strong>{course.title}</strong>.</p>
            
            <div className="contact-options-grid">
              <a href="tel:+918448303836" className="contact-option-btn">
                <div className="contact-option-icon">📞</div>
                <div className="contact-option-text">
                  <span>Call Us</span>
                  <strong>+91 8448303836</strong>
                </div>
              </a>
              
              <a href="https://wa.me/918448303836" target="_blank" rel="noopener noreferrer" className="contact-option-btn whatsapp-btn">
                <div className="contact-option-icon">💬</div>
                <div className="contact-option-text">
                  <span>WhatsApp</span>
                  <strong>Message Us</strong>
                </div>
              </a>
              
              <a href="mailto:info@feynapps.com" className="contact-option-btn email-btn">
                <div className="contact-option-icon">✉️</div>
                <div className="contact-option-text">
                  <span>Email Us</span>
                  <strong>info@feynapps.com</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default CourseDetails;
