import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import './PageStyles.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    fetchSession();
  }, [navigate]);

  if (loading) return <div className="page-container"><div className="loader">Loading your dashboard...</div></div>;

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title text-gradient">Welcome back!</h1>
        <div className="glass-card animate-fade-in">
          <p className="description">
            This is your private dashboard. Your registered email is: <strong style={{ color: 'white' }}>{user?.email}</strong>
          </p>
          
          <h3 style={{ marginTop: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Your Enrolled Courses</h3>
          <div className="meta-info">
            <div className="meta-item">
              <strong style={{ color: 'white' }}>You haven't enrolled in any courses yet.</strong>
              <p style={{ marginTop: '1rem' }}>Head over to the courses section to start learning.</p>
              <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => navigate('/courses/data-science')}>Browse Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
