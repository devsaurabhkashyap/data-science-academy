import React from 'react';
import { useCart } from '../context/CartContext';
import './PageStyles.css';

const courseCatalog = [
  {
    id: 'c1',
    title: 'Advanced Data Science Masterclass',
    description: 'Learn the core concepts of data science, machine learning, and build real-world AI projects.',
    price: 999,
    duration: '6 Months',
    instructor: 'Dr. Alan Turing'
  },
  {
    id: 'c2',
    title: 'Full-Stack Web Development Bootcamp',
    description: 'Master React, Node.js, and database design. Go from zero to deploying robust web apps.',
    price: 850,
    duration: '4 Months',
    instructor: 'Sarah Jenkins'
  },
  {
    id: 'c3',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Learn AWS, Docker, and Kubernetes. Build scalable, fault-tolerant cloud architectures.',
    price: 1200,
    duration: '5 Months',
    instructor: 'David Chen'
  },
  {
    id: 'c4',
    title: 'UI/UX Design for Engineers',
    description: 'Bridge the gap between code and design. Learn Figma, accessibility, and modern UI principles.',
    price: 600,
    duration: '3 Months',
    instructor: 'Elena Rossi'
  }
];

const Courses = () => {
  const { addToCart, cartItems } = useCart();

  const isCourseInCart = (courseId) => {
    return cartItems.some(item => item.id === courseId);
  };

  return (
    <div className="page-container" style={{ padding: '6rem 2rem' }}>
      <div className="container">
        <h1 className="page-title text-gradient" style={{ textAlign: 'center', marginBottom: '3rem' }}>Feynapps Academy</h1>
        
        <div className="courses-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {courseCatalog.map(course => (
            <div key={course.id} className="glass-card course-details animate-fade-in" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem',
              backgroundColor: '#fff',
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#111' }}>{course.title}</h3>
                <p className="description" style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
                  {course.description}
                </p>
                <div className="meta-info" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#777' }}>
                  <div style={{ marginBottom: '0.5rem' }}><strong>Duration:</strong> {course.duration}</div>
                  <div><strong>Instructor:</strong> {course.instructor}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #eaeaea', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  ${course.price}
                </div>
                <button 
                  onClick={() => addToCart(course)}
                  disabled={isCourseInCart(course.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: isCourseInCart(course.id) ? '#ccc' : 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: isCourseInCart(course.id) ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s'
                  }}
                >
                  {isCourseInCart(course.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
