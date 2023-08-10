'use client';

import React, { useContext } from 'react';
import CartRow from './CartRow';
import CheckoutButton from './CheckoutButton';
import SkeletonRow from './SkeletonRow';
import { CartContext, CartContextType } from '../../globalState/CartContext';

export default function CartPage() {
    const { cart } = useContext(CartContext) as CartContextType;

    const cart_item_rows = (
        <div className='rounded-lg md:w-2/3'>
            {cart.length > 0 ? (
                cart.map((cartItem: cart_item) => {
                    return (
                        <CartRow
                            key={cartItem.product.id}
                            cartItem={cartItem}
                        />
                    );
                })
            ) : (
                <SkeletonRow />
            )}
        </div>
    );

    const container = (
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
            {cart_item_rows}
            <CheckoutButton />
        </div>
    );

    const frame = (
        <div className='h-[calc(100vh-7rem)] w-full pt-20'>
            <h1 className='mb-10 text-center text-2xl font-bold'>
                Deine Artikel
            </h1>
            {container}
        </div>
    );

    return frame;
}
