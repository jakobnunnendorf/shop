'use client';

import React from 'react';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../../globalState/CartContext';

export default function Quantity({ cartItem }: { cartItem: CartItem }) {
    const { incrementQuantity, decrementQuantity, removeCartItem } = useContext(
        CartContext
    ) as CartContextType;

    const incrementThisQuantity = () => {
        incrementQuantity(cartItem);
    };

    const decrementThisQuantity = () => {
        decrementQuantity(cartItem);
    };

    const quantityPanel = (
        <div className='flex justify-between mt-4 sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
            <div className='flex items-center border-gray-100'>
                <span
                    onClick={decrementThisQuantity}
                    className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                >
                    {' '}
                    -{' '}
                </span>
                <input
                    className='w-8 h-8 text-xs text-center bg-white border outline-none'
                    type='number'
                    value={cartItem.quantity}
                    min='1'
                />
                <span
                    onClick={incrementThisQuantity}
                    className='px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50'
                >
                    {' '}
                    +{' '}
                </span>
            </div>
        </div>
    );
    return quantityPanel;
}
