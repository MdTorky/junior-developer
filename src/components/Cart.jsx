// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/cartContext';
import CartItem from './CartItem';
import { Icon } from '@iconify/react';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white w-96 ml-auto mr-10 my-20 p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 left-4 p-1 rounded-full border-2 border-gray-300">
          <Icon icon="fe:close" />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-radio-text">My Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem key={`${item.id}-${item.color}-${item.size}`} item={item} />
            ))}
            <div className="mt-4">
              <p className="text-lg font-bold">Total: ${total}</p>
              <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
