import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove, deleteIfLast = false) => {
    if (deleteIfLast || productToRemove.quantity === 1) {
      const updatedCart = cart.filter(product => product.id !== productToRemove.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map(product => 
        product.id === productToRemove.id ? { ...product, quantity: product.quantity - 1 } : product
      );
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
