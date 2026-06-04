import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cartItems, removeFromCart, cartTotal } = useCart();

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
      <nav className={`navbar ${(isMenuOpen || isSearchOpen || isCartOpen) ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/" className="harvard-logo" onClick={() => { setIsMenuOpen(false); setIsSearchOpen(false); setIsCartOpen(false); }}>
              <img src="/feynapps-logo.png?v=2" alt="Feynapps" className="nav-logo-img" />
            </Link>
            {!isMenuOpen && !isSearchOpen && !isCartOpen && (
              <div className="nav-announcement">
                <span className="dot"></span>
                <span>Join our next Web Development Masterclass!</span>
              </div>
            )}
          </div>

          <div className="nav-right">
            {!isMenuOpen && !isSearchOpen && !isCartOpen && (
              <>
                <button className="nav-action" onClick={() => setIsCartOpen(true)}>
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
              <button className="nav-action" onClick={() => { setIsSearchOpen(false); setIsMenuOpen(true); setIsCartOpen(false); }}>
                <Menu className="icon" size={20} />
                <span>Menu</span>
              </button>
            )}

            {isCartOpen && (
              <button className="nav-action close-action" onClick={() => setIsCartOpen(false)}>
                <span>Close</span>
                <div className="close-circle">
                  <X className="icon" size={16} />
                </div>
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

        {/* Cart Overlay Dropdown */}
        {isCartOpen && (
          <div className="cart-overlay">
            <div className="cart-header">
              <h2>Your Cart</h2>
            </div>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div>
                      <h4>{item.title}</h4>
                      <p>${item.price}</p>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${cartTotal}</span>
                </div>
                <button className="checkout-btn" onClick={() => {
                  alert("Redirecting to third-party payment gateway...");
                  setIsCartOpen(false);
                }}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <div className="menu-left">
            <ul className="main-links">
              <li><Link to="/courses" className="active" onClick={() => setIsMenuOpen(false)}>Academy</Link></li>
              <li><Link to="/#web-management" onClick={() => setIsMenuOpen(false)}>Web Services</Link></li>
              <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
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
