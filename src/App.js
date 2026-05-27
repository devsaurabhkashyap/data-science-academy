import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Trainings from './pages/Trainings';
import Certifications from './pages/Certifications';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/:courseId" element={<Courses />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
