'use client'

import Link from 'next/link';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';
import { CartContext } from '../../globalState/CartContext';


export default function CartIcon() {
    const { value: cartItems } = useContext(CartContext);
    return (
        <Link href='/einkaufswagen' className='flex items-center h-full'>
            <FiShoppingCart size={32} className='text-coastal-blue-10' />
            {cartItems.length }
        </Link>
    );
}
