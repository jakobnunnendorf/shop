import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

export default function CartButton() {
    const cartButton = (
        <button className='row-span-1 mx-auto flex items-center space-x-2 rounded-full bg-seafoam-green-8 px-4 py-2  font-bold text-coastal-blue-10'>
            <span>Einkaufswagen</span> <FiShoppingCart className='font-bold' />
        </button>
    );
    return cartButton;
}
