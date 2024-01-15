'use client';

import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
    wishListContext,
    WishListContextType,
} from '@globalState/WishListContext';

export default function WishListIcon() {
    const { getTotalQuantity } = useContext(
        wishListContext
    ) as WishListContextType;

    return (
        <Link
            href='/wunschliste'
            className='relative flex items-center h-full '
        >
            <FiHeart size={32} className='text-coastal-blue-10' />
            <p className='absolute font-bold left-full bottom-1/2 text-coastal-blue-8'>
                {getTotalQuantity()}
            </p>
        </Link>
    );
}
