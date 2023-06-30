'use client'

import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../globalState/CartContext';

export default function CartIcon() {
    const { value: cartItems } = useContext(CartContext);
    function getTotalQuantityFromCart(cartItems: any) {
        let totalQuantity = 0;
        cartItems.forEach((cartItem: any) => {
            totalQuantity += cartItem.quantity;
        });
        return totalQuantity;
    }
    return (
        <Link href='/warenkorb' className='relative flex h-full items-center '>
            <FiShoppingCart size={32} className='text-coastal-blue-10' />
            <p className='absolute left-full top-0 font-bold text-coastal-blue-8'>
                {getTotalQuantityFromCart(cartItems)}
            </p>
        </Link>
    );
}
