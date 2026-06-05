import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cartItems } = useCart();

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
              <img src="/feynapps-logo.png?v=2" alt="Feynapps" className="nav-logo-img" />
            </Link>
            {!isMenuOpen && !isSearchOpen && (
              <div className="nav-announcement">
                <span className="dot"></span>
                <span>Join our next Web Development Masterclass!</span>
              </div>
            )}
          </div>

          <div className="nav-right">
            {!isMenuOpen && !isSearchOpen && (
              <>
                <button className="nav-action desktop-cart" onClick={() => navigate('/cart')}>
                  <div style={{ position: 'relative' }}>
                    <ShoppingCart className="icon" size={20} />
                    {cartItems.length > 0 && (
                      <span className="cart-badge">{cartItems.length}</span>
                    )}
                  </div>
                  <span>Cart</span>
                </button>
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

            {isMenuOpen && (
              <button className="nav-action close-action" onClick={() => setIsMenuOpen(false)}>
                <span>Close</span>
                <div className="close-circle">
                  <X className="icon" size={16} />
                </div>
              </button>
            )}

            {isSearchOpen && (
              <button className="nav-action" onClick={() => { setIsSearchOpen(false); setIsMenuOpen(true); }}>
                <Menu className="icon" size={20} />
                <span>Menu</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Overlay Dropdown */}
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
                <li><Link to="/courses" onClick={() => setIsSearchOpen(false)}>Academy Courses</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* Cart Overlay Dropdown removed */}
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <div className="menu-left">
            <ul className="main-links">
              <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>Academy</Link></li>
              <li><Link to="/#web-management" onClick={() => setIsMenuOpen(false)}>Web Services</Link></li>
              <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li className="mobile-cart" style={{ marginTop: '2rem' }}>
                <button 
                  onClick={() => { setIsMenuOpen(false); navigate('/cart'); }}
                  style={{ 
                    backgroundColor: 'var(--primary-color)', 
                    color: 'white',
                    border: 'none', 
                    borderRadius: '8px',
                    font: 'inherit', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '10px', 
                    padding: '1rem',
                    width: '100%',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}
                >
                  <ShoppingCart size={24} /> View Shopping Cart {cartItems.length > 0 && `(${cartItems.length})`}
                </button>
              </li>
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
            <li><Link to="/courses" onClick={() => setIsMenuOpen(false)}>View Courses</Link></li>
            <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Hackathons</Link></li>
            <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Job Board</Link></li>
            <li><Link to="#" onClick={() => setIsMenuOpen(false)}>Contact Support</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
