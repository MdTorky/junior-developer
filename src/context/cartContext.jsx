// src/context/cartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const incrementQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color && item.size === size && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.color === color && item.size === size))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
