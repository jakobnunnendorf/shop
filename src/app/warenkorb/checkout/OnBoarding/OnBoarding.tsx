import React from 'react';
import GuestCheckout from './GuestCheckout/GuestCheckout';
import SignUpAndCheckout from './SignUpAndCheckout/SignUpAndCheckout';

export default function OnBoarding({ cart }: { cart: CartItem[] }) {
    const onBoarding = (
        <aside className='flex h-full w-full flex-col items-center justify-center border-r px-4 py-8 '>
            <div className='flex h-2/3 flex-col space-y-8'>
                <h2 className='text-center text-3xl font-bold text-coastal-blue-10'>
                    Ich bin zum ersten Mal hier
                </h2>
                <ul className='flex flex-col space-y-16'>
                    <SignUpAndCheckout cart={cart} />
                    <GuestCheckout cart={cart} />
                </ul>
            </div>
        </aside>
    );
    return onBoarding;
}
