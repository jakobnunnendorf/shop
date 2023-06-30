'use client';

import React, { useContext } from 'react';
import CartRow from './CartRow';
import CheckoutButton from './Checkout';
import { CartContext } from '../../globalState/CartContext';

export default function Cart() {
    const { value: cartItems } =
        useContext(CartContext);
    // const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

    const library_component = (
        <div className='p-8 h-fit rounded-xl'>
            <h1 className='mb-10 text-2xl font-bold text-center className'>
                Dein Warenkorb
            </h1>
            <div className='justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0'>
                <div className='rounded-lg md:w-2/3'>
                    {cartItems.length > 0 ? (
                        cartItems.map((cartItem: any, index: number) => {
                            return (
                                <CartRow
                                    key={index}
                                    product={cartItem.product}
                                    quantity={cartItem.quantity}
                                />
                            );
                        })
                    ) : (
                        <SkeletonRow />
                    )}
                </div>
                <CheckoutButton cartItems={cartItems} />
            </div>
        </div>
    );

    return library_component;
}
