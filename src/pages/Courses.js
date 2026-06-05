import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Clock, CheckCircle, X } from 'lucide-react';
import './Courses.css';

export const courseCatalog = [
  {
    id: 'c1',
    programType: 'Professional Certificate',
    title: 'Data Science and Artificial Intelligence',
    university: 'Feynapps Academy',
    universityLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Columbia_University_logo.svg/512px-Columbia_University_logo.svg.png', // Temporary placeholder logo
    courseCount: '1 course',
    duration: '4 months to complete',
    level: 'Introductory level',
    learnersEnrolled: '12,534',
    effort: '5 - 7 hours per week',
    curriculumList: [
      'Python Programming for Data Science',
      'Machine Learning Models',
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'AI Ethics & Strategy'
    ],
    whatYouWillLearn: [
      'Understand both the sound theoretical principles of AI, and the practical environment in which data decisions are made.',
      'How to use predictive modeling for business evaluation.',
      'Apply frameworks for data cleaning and preprocessing.',
      'Build robust machine learning models.',
      'Compute the accuracy and efficiency of any algorithm.',
      'Measure risk and estimate the expected return of an AI model based on its performance.'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'Learn the core concepts of data science, machine learning, and build real-world AI projects.',
    instructor: 'Expert Faculty'
  }
];

const filters = [
  'All filters',
  'Subject',
  'Skills',
  'Educator',
  'Learning type',
  'Course language',
  'Level',
  'Transl'
];

const Courses = () => {
  const navigate = useNavigate();
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All filters');

  // Filter logic: if 'All filters' is selected, show everything. Otherwise, hide it (since we only have 1 course).
  const displayedCourses = activeFilter === 'All filters' ? courseCatalog : [];

  return (
    <div className="edx-courses-page">
      <div className="edx-container">
        
        {/* Results Header */}
        <h1 className="edx-results-header">{displayedCourses.length} results</h1>
        
        {/* Filter Pills */}
        <div className="edx-filters-row">
          {filters.map((filter, index) => (
            <button 
              key={index} 
              className={`edx-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter} {index !== 0 && 'v'}
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="edx-section-header">
          <h2 className="edx-section-title">Programs</h2>
          <button className="edx-show-all">Show ({displayedCourses.length}) {'>'}</button>
        </div>

        {/* Course Grid */}
        <div className="edx-course-grid">
          {displayedCourses.length === 0 ? (
            <div style={{ padding: '2rem 0', color: '#555', fontSize: '1.1rem' }}>No courses match the selected filter. Try "All filters".</div>
          ) : (
            displayedCourses.map(course => (
              <div key={course.id} className="edx-course-card" onClick={() => navigate(`/course/${course.id}`)}>
              {/* Top Label */}
              <div className="edx-card-type">
                {course.programType}
              </div>
              
              {/* Hero Banner with superimposed logo */}
              <div className="edx-card-hero">
                <img src={course.image} alt={course.title} className="edx-card-bg" />
                <div className="edx-card-logo-wrapper">
                  <img src={course.universityLogo} alt={course.university} className="edx-card-logo" />
                </div>
              </div>

              {/* Content Body */}
              <div className="edx-card-content">
                <h3 className="edx-card-title">{course.title}</h3>
                <p className="edx-card-subtitle">{course.university}</p>
                
                {/* Metadata List */}
                <div className="edx-card-meta">
                  <div className="edx-meta-item">
                    <List size={16} color="#555" />
                    <span>{course.courseCount}</span>
                  </div>
                  <div className="edx-meta-item">
                    <Clock size={16} color="#555" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="edx-meta-item">
                    <CheckCircle size={16} color="#555" />
                    <span>{course.level}</span>
                  </div>
                </div>
                </div>
              </div>
            ))
          )}
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
    </div>
  );
};

export default Courses;
