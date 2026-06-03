import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`navbar ${(isMenuOpen || isSearchOpen) ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/" className="harvard-logo" onClick={() => { setIsMenuOpen(false); setIsSearchOpen(false); }}>
              <img src="/feynapps-logo.png" alt="Feynapps" className="nav-logo-img" />
            </Link>
            {!isMenuOpen && !isSearchOpen && (
              <div className="nav-announcement">
                <span className="dot"></span>
                <span>Join our upcoming Tech Hiring Drive this weekend!</span>
              </div>
            )}
          </div>

          <div className="nav-right">
            {/* When nothing is open */}
            {!isMenuOpen && !isSearchOpen && (
              <>
                <button className="nav-action" onClick={() => setIsSearchOpen(true)}>
                  <Search className="icon" size={20} />
                  <span>Search</span>
                </button>
                <button className="nav-action" onClick={() => setIsMenuOpen(true)}>
                  <Menu className="icon" size={20} />
                  <span>Menu</span>
                </button>
              </>
            )}

            {/* When Menu is open */}
            {isMenuOpen && (
              <button className="nav-action close-action" onClick={() => setIsMenuOpen(false)}>
                <span>Close</span>
                <div className="close-circle">
                  <X className="icon" size={16} />
                </div>
              </button>
            )}

            {/* When Search is open - Menu button remains visible to the right according to the image */}
            {isSearchOpen && (
              <button className="nav-action" onClick={() => { setIsSearchOpen(false); setIsMenuOpen(true); }}>
                <Menu className="icon" size={20} />
                <span>Menu</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Overlay Dropdown (anchored to navbar) */}
        {isSearchOpen && (
          <div className="search-overlay">
            <div className="search-input-area">
              <Search className="search-icon-inside" size={20} color="#777" />
              <form onSubmit={handleSearchSubmit} style={{ flex: 1, display: 'flex' }}>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search Feynapps" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-field"
                />
              </form>
              <button className="search-close-btn" onClick={() => setIsSearchOpen(false)}>
                <X size={16} />
              </button>
            </div>
            
            <div className="search-dropdown-pane">
              <div className="search-quick-links-title">QUICK LINKS</div>
              <ul className="search-quick-links-list">
                <li><Link to="#" onClick={() => setIsSearchOpen(false)}>A to Z index</Link></li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <div className="menu-left">
            <ul className="main-links">
              <li><Link to="/find-talent" className="active" onClick={() => setIsMenuOpen(false)}>Find Talent</Link></li>
              <li><Link to="/job-board" onClick={() => setIsMenuOpen(false)}>Job Board</Link></li>
              <li><Link to="/workshops" onClick={() => setIsMenuOpen(false)}>Workshops</Link></li>
              <li><Link to="/trainings" onClick={() => setIsMenuOpen(false)}>Trainings</Link></li>
              <li><Link to="/hackathons" onClick={() => setIsMenuOpen(false)}>Hackathons</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            </ul>
          </div>
          <div className="menu-right">
          </div>
        </div>
        
        <div className="menu-footer">
          <div className="quick-links-title">
            Quick Links <ChevronRight size={14} />
          </div>
          <ul className="footer-links">
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Hire Now</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Submit Resume</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>FAQs</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Corporate Partners</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
