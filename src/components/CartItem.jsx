


// src/components/CartItem.js
import React from 'react';
import { useCart } from '../context/cartContext';
import { Icon } from '@iconify/react';

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center mb-4">
       <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
       <div className="flex-1 ml-4">
       <p className="font-semibold">{item.name}</p>
        <p className="text-gray-500">Color: {item.color}, Size: {item.size}</p>
        <p className="text-gray-500">${item.price} x {item.quantity}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => decrementQuantity(item.id, item.color, item.size)} className="p-1">
          <Icon icon="fe:minus" />
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => incrementQuantity(item.id, item.color, item.size)} className="p-1">
          <Icon icon="fe:plus" />
        </button>
        <button onClick={() => removeFromCart(item.id, item.color, item.size)} className="ml-4">
          <Icon icon="fe:trash" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
