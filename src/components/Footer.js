import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Section - 3 Columns */}
        <div className="footer-links-grid">
          
          <div className="footer-col">
            <h4>Security & Brand</h4>
            <ul>
              <li><Link to="#">Report Copyright Infringement</Link></li>
              <li><Link to="#">Report Security Issue</Link></li>
              <li><Link to="#">Trademark Notice</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Website</h4>
            <ul>
              <li><Link to="#">Accessibility</Link></li>
              <li><Link to="#">Digital Accessibility</Link></li>
              <li><Link to="#">Privacy statement</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Maps & Directions</Link></li>
              <li><Link to="#">Jobs</Link></li>
            </ul>
          </div>

        </div>

        {/* Middle Section - Logo */}
        <div className="footer-logo-section">
          <Link to="/" className="footer-harvard-logo">
            <div className="logo-text">
              <h1>BINARY</h1>
              <span>Blooms</span>
            </div>
            <div className="footer-harvard-shield">AI<br/>ML<br/>DL</div>
          </Link>
        </div>

        {/* Bottom Section - Copyright and Socials */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            Copyright © 2026 Binary Blooms
          </div>
          
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
