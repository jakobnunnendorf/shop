'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function GuestCheckout({ cart }: { cart: cart_item[] }) {
    const router = useRouter();
  const handle_guest_checkout = async () => {
      const data: any = await fetch('/api/checkout/guest', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              cartItems: [...cart],
          }),
      });
      const { url, error } = await data.json();
      if (!error) {
          console.log(url);
          router.push(url);
      } else {
          console.log(error);
      }
  };

    const guestCheckout = (
        <li className='flex flex-col items-start justify-center space-x-4'>
            {' '}
            <div className='flex items-center space-x-4'>
                <div className='flex items-center justify-center w-8 h-8 p-2 font-bold border rounded-full aspect-square border-coastal-blue-10 text-coastal-blue-10'>
                    2
                </div>{' '}
                <h3>oder als Gast fortfahren</h3>
            </div>
            <div className='flex justify-center w-full col-span-2'>
                <button
                    onClick={handle_guest_checkout}
                    className='relative px-4 py-2 mt-4 font-bold border rounded-lg w-fit border-coastal-blue-10 text-coastal-blue-10'
                >
                    Gast Checkout
                </button>
            </div>
        </li>
    );

    return guestCheckout;
}
