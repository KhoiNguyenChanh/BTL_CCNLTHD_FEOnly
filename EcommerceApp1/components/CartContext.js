import React, { createContext, useState, useContext } from 'react';
// Tạo context
const CartContext = createContext();
// Tạo provider cho context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
      };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>  useContext(CartContext);