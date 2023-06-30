'use client';

import React, { useContext } from 'react';
import CartRow from './CartRow';
import CheckoutButton from './CheckoutButton';
import { CartContext } from '../../globalState/CartContext';
import SkeletonRow from './SkeletonRow';

export default function CartPage() {
    const { value: cartItems } = useContext(CartContext);

    const cart_item_rows = (
        <div className='rounded-lg md:w-2/3'>
            {cartItems.length > 0 ? (
                cartItems.map((cartItem: any) => {
                    return <CartRow key={cartItem.id} cartItem={cartItem} />;
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
