import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { courseCatalog } from './Courses';
import './PageStyles.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  
  const course = courseCatalog.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="page-container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 className="page-title text-gradient">Course Not Found</h1>
        <Link to="/courses" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Academy</Link>
      </div>
    );
  }

  const isCourseInCart = cartItems.some(item => item.id === course.id);

  return (
    <div className="page-container" style={{ padding: '6rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Link to="/courses" style={{ display: 'inline-block', marginBottom: '2rem', color: '#555', textDecoration: 'none' }}>
          ← Back to Academy
        </Link>
        
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          {/* Header Image */}
          <div style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
            <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Content Body */}
          <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
            
            <div style={{ flex: '1 1 600px' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#111' }}>{course.title}</h1>
              <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
                {course.description}
              </p>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem' }}>Course Curriculum</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#444' }}>
                <li style={{ padding: '1rem 0', borderBottom: '1px dashed #ccc' }}>Module 1: Introduction & Fundamentals</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px dashed #ccc' }}>Module 2: Advanced Core Concepts</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px dashed #ccc' }}>Module 3: Real-World Architecture & Tooling</li>
                <li style={{ padding: '1rem 0', borderBottom: '1px dashed #ccc' }}>Module 4: Final Capstone Project</li>
              </ul>
            </div>

            {/* Sidebar info */}
            <div style={{ flex: '1 1 300px', backgroundColor: '#fafafa', padding: '2rem', borderRadius: '8px', border: '1px solid #eaeaea', height: 'fit-content' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                ${course.price}
              </div>
              
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#777' }}>Duration:</span>
                <span style={{ fontWeight: 'bold' }}>{course.duration}</span>
              </div>
              
              <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#777' }}>Instructor:</span>
                <span style={{ fontWeight: 'bold' }}>{course.instructor}</span>
              </div>
              
              <button 
                onClick={() => {
                  if (isCourseInCart) {
                    navigate('/cart');
                  } else {
                    addToCart(course);
                  }
                }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: isCourseInCart ? '#333' : 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                {isCourseInCart ? 'Go to Cart →' : 'Add to Cart'}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
