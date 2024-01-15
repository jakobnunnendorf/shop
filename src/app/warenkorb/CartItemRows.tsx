'use client';

import React, { useContext } from 'react';
import CartRow from './CartRow/CartRow';
import SkeletonRow from './SkeletonRow';
import { CartContext, CartContextType } from '../../globalState/CartContext';

export default function CartItemRows() {
    const { cart } = useContext(CartContext) as CartContextType;

    const cartItemRows = (
        <div className='rounded-lg md:w-2/3'>
            {cart.map((cartItem: CartItem, index) => {
                return <CartRow key={index} cartItem={cartItem} />;
            })}
        </div>
    );
    return cartItemRows;
}
