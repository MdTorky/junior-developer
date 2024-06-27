


// src/components/CartItem.js
import React from 'react';
import { useCart } from '../context/cartContext';
import { Icon } from '@iconify/react';

const CartItem = ({ item }) => {
    const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

    return (
        <div className="flex justify-between items-center mb-4 border-gray-200 rounded-xl border-2 p-4 relative text-start">
            <img src={item.image} alt={item.name} className="w-24 rounded-lg border-2 border-gray-100 " />
            <div className="flex-1 ml-4">
                <p className="text-sm  font-semibold capitalize whitespace-nowrap">{item.color} {item.name}</p>
                <div className="flex gap-2 items-center">
                    <p className="text-gray-500 capitalize text-sm">{item.size}</p>
                    <div className={`w-5 h-5 rounded-full relative flex items-center justify-center bg-${item.color}`}>
                        <div className="absolute items-center justify-center flex top-1 left-1 right-1 bottom-1 border-2 border-white rounded-full">
                        </div>

                    </div>
                </div>
                <div className="flex items-center mt-2 justify-between">
                    <p className="text-gray-800 font-semibold text-sm">${item.price}</p>

                    <div className="flex items-center">
                        <span className=" text-sm mr-1">{item.quantity}</span>
                        <div className='flex flex-col'>
                            <button onClick={() => incrementQuantity(item.id, item.color, item.size)} className=" text-xs">
                                <Icon icon="octicon:triangle-up-16" />
                            </button>
                            <button onClick={() => decrementQuantity(item.id, item.color, item.size)} className=" text-xs">
                                <Icon icon="octicon:triangle-down-16" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <button onClick={() => removeFromCart(item.id, item.color, item.size)} className="ml-4 absolute -top-3 -right-2 p-1 rounded-full bg-delivery w-5 h-5 flex items-center justify-center ">
                <Icon icon="material-symbols:close" className=' text-sm text-white' />
            </button>
        </div>
    );
};

export default CartItem;
