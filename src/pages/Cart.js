import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './PageStyles.css';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <div className="page-container" style={{ padding: '6rem 2rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="page-title text-gradient" style={{ textAlign: 'center', marginBottom: '3rem' }}>Your Shopping Cart</h1>
        
        <div className="glass-card" style={{ padding: '2rem', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <p style={{ fontSize: '1.2rem', color: '#777', marginBottom: '2rem' }}>Your cart is empty.</p>
              <Link to="/courses" className="btn btn-primary" style={{ textDecoration: 'none' }}>Browse Courses</Link>
            </div>
          ) : (
            <div>
              <div className="cart-items-list" style={{ borderBottom: '1px solid #eaeaea', marginBottom: '2rem', paddingBottom: '1rem' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', borderBottom: '1px solid #f5f5f5' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                      <img src={item.image} alt={item.title} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                      <div>
                        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{item.title}</h3>
                        <p style={{ margin: 0, color: '#777', fontSize: '0.9rem' }}>Instructor: {item.instructor}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>${item.price}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: 'none', border: 'none', color: '#888', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Total</span>
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>${cartTotal}</span>
              </div>
              
              <button 
                onClick={() => alert("Redirecting to third-party payment gateway...")}
                style={{
                  width: '100%',
                  padding: '1.2rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
