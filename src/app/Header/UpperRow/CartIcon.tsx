'use client';

import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext, CartContextType } from '../../../globalState/CartContext';

export default function CartIcon() {
    const { getTotalQuantity } = useContext(CartContext) as CartContextType;

    return (
        <Link href='/warenkorb' className='relative flex items-center h-full '>
            <FiShoppingCart size={32} className='text-coastal-blue-10' />
            <p className='absolute font-bold left-full bottom-1/2 text-coastal-blue-8'>
                {getTotalQuantity()}
            </p>
        </Link>
    );
}
