import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './PageStyles.css';

const Courses = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      // Fetching real-time data from Supabase
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('slug', courseId)
        .single();
      
      if (error) {
        console.error('Error fetching course:', error.message);
        // Fallback for demonstration since DB is not set up yet
        setCourseData({
          title: courseId === 'data-science' ? 'Data Science Masterclass' : 'AI Engineering',
          description: 'Learn the core concepts and build real-world projects.',
          price: '$999',
          duration: '6 Months',
          instructor: 'Industry Expert'
        });
      } else {
        setCourseData(data);
      }
      setLoading(false);
    };

    fetchCourse();
  }, [courseId]);

  if (loading) return <div className="page-container"><div className="loader">Loading real-time data...</div></div>;

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title text-gradient">{courseData?.title}</h1>
        <div className="glass-card course-details animate-fade-in">
          <p className="description">{courseData?.description}</p>
          <div className="meta-info">
            <div className="meta-item">
              <strong>Duration:</strong> {courseData?.duration}
            </div>
            <div className="meta-item">
              <strong>Instructor:</strong> {courseData?.instructor}
            </div>
            <div className="meta-item">
              <strong>Price:</strong> {courseData?.price}
            </div>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
