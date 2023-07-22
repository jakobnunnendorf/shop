'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function GuestCheckout({ cart }: { cart: cart_item[] }) {
    const router = useRouter();
    const handle_guest_checkout = async () => {
        const data: any = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartItems: [...cart],
                metadata: {
                    checkout_mode: 'guest_checkout',
                },
            }),
        });
        const { url } = await data.json();
        router.push(url);
    };

    const guestCheckout = (
        <li className='flex flex-col items-start justify-center space-x-4'>
            {' '}
            <div className='flex items-center space-x-4'>
                <div className='flex aspect-square h-8 w-8 items-center justify-center rounded-full border border-coastal-blue-10 p-2 font-bold text-coastal-blue-10'>
                    2
                </div>{' '}
                <h3>oder als Gast fortfahren</h3>
            </div>
            <div className='col-span-2 flex w-full justify-center'>
                <button
                    onClick={handle_guest_checkout}
                    className='relative mt-4 w-fit rounded-lg border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10'
                >
                    Gast Checkout
                </button>
            </div>
        </li>
    );

    return guestCheckout;
}
