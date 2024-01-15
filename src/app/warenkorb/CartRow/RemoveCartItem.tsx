'use client';

import React from 'react';
import { useContext } from 'react';
import { CartContext, CartContextType } from '@globalState/CartContext';

export default function RemoveCartItem({ cartItem }: { cartItem: CartItem }) {
    const { removeCartItem } = useContext(CartContext) as CartContextType;

    const removeThisCartItem = () => {
        removeCartItem(cartItem);
    };
    return (
        <svg
            onClick={removeThisCartItem}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-5 h-5 duration-150 cursor-pointer hover:text-red-500'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
            />
        </svg>
    );
}
