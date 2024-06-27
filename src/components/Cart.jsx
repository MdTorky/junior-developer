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
            <div className="bg-white w-80 m-auto md:w-96 ml-auto md:mr-10 my-20 p-6 rounded-3xl shadow-lg relative">
                <button onClick={onClose} className="absolute top-4 left-4 p-1 rounded-full border-2 border-gray-300">
                    <Icon icon="fe:close" className='text-xs' />
                </button>
                <h2 className="text-3xl font-semibold mb-6 text-radio-text">My Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <CartItem key={`${item.id}-${item.color}-${item.size}`} item={item} />
                        ))}
                        <div className="mt-10 ">
                            <hr className='w-90% m-auto mb-4' />
                            <div className="flex justify-between px-4 mb-4">
                                <p className='text-gray-500 text-sm font-bold'>Total</p>
                                <p className='text-gray-500 text-sm font-bold'> ${total}</p>
                            </div>
                            <button
                                className='flex bg-radio-text m-auto px-4 py-3 rounded-full w-full justify-center gap-3 items-center hover:scale-105 duration-300 ease-linear'
                            >
                                <Icon icon="heroicons:shopping-bag" className={`text-white w-5 h-5text-white`} />
                                <p className='font-bold text-md text-white' >Checkout</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
