import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Clock, CheckCircle, X } from 'lucide-react';
import './Courses.css';

export const courseCatalog = [
  {
    id: 'c1',
    programType: 'Professional Certificate',
    title: 'Corporate Finance',
    university: 'Columbia University',
    universityLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Columbia_University_logo.svg/512px-Columbia_University_logo.svg.png',
    courseCount: '3 courses',
    duration: '4 months to complete',
    level: 'Introductory level',
    price: 607.50,
    originalPrice: 675,
    learnersEnrolled: '311,534',
    effort: '3 - 4 hours per week',
    curriculumList: [
      'Introduction to Corporate Finance',
      'Free Cash Flow Analysis',
      'Risk and Return',
      'Valuation Methodologies'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'Learn the core concepts of data science, machine learning, and build real-world AI projects.',
    instructor: 'Dr. Alan Turing'
  },
  {
    id: 'c2',
    programType: 'Professional Certificate',
    title: 'Computer Science for Python Programming',
    university: 'Harvard University',
    universityLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/512px-Harvard_University_logo.svg.png',
    courseCount: '2 courses',
    duration: '6 months to complete',
    level: 'Introductory level',
    price: 850,
    originalPrice: 950,
    learnersEnrolled: '142,890',
    effort: '4 - 5 hours per week',
    curriculumList: [
      'Python Syntax & Semantics',
      'Data Structures',
      'Algorithms',
      'Web Scraping'
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    description: 'Master React, Node.js, and database design. Go from zero to deploying robust web apps.',
    instructor: 'Sarah Jenkins'
  },
  {
    id: 'c3',
    programType: 'Professional Certificate',
    title: 'Computer Science for Artificial Intelligence',
    university: 'Harvard University',
    universityLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/512px-Harvard_University_logo.svg.png',
    courseCount: '2 courses',
    duration: '5 months to complete',
    level: 'Introductory level',
    price: 1200,
    originalPrice: 1500,
    learnersEnrolled: '89,450',
    effort: '5 - 7 hours per week',
    curriculumList: [
      'Machine Learning Models',
      'Neural Networks',
      'Natural Language Processing',
      'AI Ethics'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    description: 'Learn AWS, Docker, and Kubernetes. Build scalable, fault-tolerant cloud architectures.',
    instructor: 'David Chen'
  },
  {
    id: 'c4',
    programType: 'Professional Certificate',
    title: 'AI for Business',
    university: 'Microsoft',
    universityLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png',
    courseCount: '7 courses',
    duration: '8 weeks to complete',
    level: 'Introductory level',
    price: 600,
    originalPrice: 750,
    learnersEnrolled: '215,600',
    effort: '2 - 3 hours per week',
    curriculumList: [
      'AI Strategy for Executives',
      'Implementing AI in Operations',
      'Data-Driven Decision Making'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    description: 'Bridge the gap between code and design. Learn Figma, accessibility, and modern UI principles.',
    instructor: 'Elena Rossi'
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

  return (
    <div className="edx-courses-page">
      <div className="edx-container">
        
        {/* Results Header */}
        <h1 className="edx-results-header">4615 results</h1>
        
        {/* Filter Pills */}
        <div className="edx-filters-row">
          {filters.map((filter, index) => (
            <button key={index} className={`edx-filter-btn ${index === 0 ? 'active' : ''}`}>
              {filter} {index !== 0 && 'v'}
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="edx-section-header">
          <h2 className="edx-section-title">Programs</h2>
          <button className="edx-show-all">Show (621) {'>'}</button>
        </div>

        {/* Course Grid */}
        <div className="edx-course-grid">
          {courseCatalog.map(course => (
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
          ))}
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
