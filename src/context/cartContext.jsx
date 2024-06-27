// cartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const MAX_QUANTITY = 15;
  const MIN_QUANTITY = 1;

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        const updatedQuantity = updatedItems[existingItemIndex].quantity + newItem.quantity;
        updatedItems[existingItemIndex].quantity = Math.min(updatedQuantity, MAX_QUANTITY);
        return updatedItems;
      } else {
        const newItemWithQuantity = { ...newItem, quantity: Math.min(newItem.quantity, MAX_QUANTITY) };
        return [...prevItems, newItemWithQuantity];
      }
    });
  };

  const incrementQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: Math.min(item.quantity + 1, MAX_QUANTITY) }
          : item
      )
    );
  };

  const decrementQuantity = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.color === color && item.size === size && item.quantity > MIN_QUANTITY
          ? { ...item, quantity: Math.max(item.quantity - 1, MIN_QUANTITY) }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, color, size) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.id === id && item.color === color && item.size === size))
    );
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
