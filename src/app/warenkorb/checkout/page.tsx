'use client';
import { useContext } from 'react';
import { CartContext, CartContextType } from '@globalState/CartContext';
import LoginAndCheckout from './LoginAndCheckout/LoginAndCheckout';
import OnBoarding from './OnBoarding/OnBoarding';

export default function CheckoutPage() {
    const { cart } = useContext(CartContext) as CartContextType;

    return (
        <section className=' grid h-fit w-full grid-rows-2 lg:h-[calc(100vh-6rem)] lg:grid-cols-2 lg:grid-rows-none'>
            <OnBoarding cart={cart} />
            <LoginAndCheckout cart={cart} />
        </section>
    );
}
