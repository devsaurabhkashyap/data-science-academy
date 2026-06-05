import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (course) => {
    setCartItems((prevItems) => {
      // Check if course is already in cart to prevent duplicates
      const exists = prevItems.find((item) => item.id === course.id);
      if (exists) return prevItems;
      return [...prevItems, course];
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, removeFromCart, clearCart, cartTotal,
      isCartOpen, setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};
