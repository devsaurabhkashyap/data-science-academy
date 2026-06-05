import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Clock, CheckCircle, X, ChevronDown } from 'lucide-react';
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

const filterOptions = {
  'Subject': ['Data Science', 'Artificial Intelligence', 'Computer Science', 'Business'],
  'Skills': ['Python', 'Machine Learning', 'Deep Learning', 'NLP'],
  'Educator': ['Feynapps Academy', 'Harvard', 'MIT'],
  'Learning type': ['Professional Certificate', 'Degree', 'Course'],
  'Course language': ['English', 'Spanish', 'Hindi'],
  'Level': ['Introductory level', 'Intermediate', 'Advanced']
};

const Courses = () => {
  const navigate = useNavigate();
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    'Subject': [],
    'Skills': [],
    'Educator': [],
    'Learning type': [],
    'Course language': [],
    'Level': []
  });

  const toggleDropdown = (filterName) => {
    if (openDropdown === filterName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(filterName);
    }
  };

  const handleFilterChange = (category, option) => {
    setSelectedFilters(prev => {
      const currentSelections = prev[category];
      if (currentSelections.includes(option)) {
        return { ...prev, [category]: currentSelections.filter(item => item !== option) };
      } else {
        return { ...prev, [category]: [...currentSelections, option] };
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      'Subject': [],
      'Skills': [],
      'Educator': [],
      'Learning type': [],
      'Course language': [],
      'Level': []
    });
    setOpenDropdown(null);
  };

  // Real Filter logic
  const displayedCourses = courseCatalog.filter(course => {
    // Subject filter
    if (selectedFilters['Subject'].length > 0) {
      // Allow if any selected subject matches the course title loosely
      const matchesSubject = selectedFilters['Subject'].some(sub => course.title.toLowerCase().includes(sub.toLowerCase()));
      if (!matchesSubject) return false;
    }
    // Educator filter
    if (selectedFilters['Educator'].length > 0) {
      if (!selectedFilters['Educator'].includes(course.university)) return false;
    }
    // Level filter
    if (selectedFilters['Level'].length > 0) {
      if (!selectedFilters['Level'].includes(course.level)) return false;
    }
    // Learning type filter
    if (selectedFilters['Learning type'].length > 0) {
      if (!selectedFilters['Learning type'].includes(course.programType)) return false;
    }
    return true; // If no filters exclude it, keep it
  });

  const hasAnyFilter = Object.values(selectedFilters).some(arr => arr.length > 0);

  return (
    <div className="edx-courses-page">
      <div className="edx-container">
        
        {/* Results Header */}
        <h1 className="edx-results-header">{displayedCourses.length} results</h1>
        
        {/* Filter Pills */}
        <div className="edx-filters-row">
          <button 
            className={`edx-filter-btn ${!hasAnyFilter ? 'active' : ''}`}
            onClick={clearAllFilters}
          >
            All filters
          </button>
          
          {Object.keys(filterOptions).map((filterCategory) => (
            <div key={filterCategory} className="edx-filter-dropdown-container" style={{ position: 'relative' }}>
              <button 
                className={`edx-filter-btn ${selectedFilters[filterCategory].length > 0 ? 'active' : ''}`}
                onClick={() => toggleDropdown(filterCategory)}
              >
                {filterCategory} <ChevronDown size={14} style={{ marginLeft: '4px' }}/>
              </button>
              
              {openDropdown === filterCategory && (
                <div className="edx-dropdown-menu">
                  {filterOptions[filterCategory].map(option => (
                    <label key={option} className="edx-dropdown-item">
                      <input 
                        type="checkbox" 
                        checked={selectedFilters[filterCategory].includes(option)}
                        onChange={() => handleFilterChange(filterCategory, option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
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
