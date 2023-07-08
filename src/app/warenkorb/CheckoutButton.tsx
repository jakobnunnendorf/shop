import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../globalState/CartContext';

export default function CheckoutButton() {
    const { getSubTotal, cart } =
        useContext(CartContext) as CartContextType;


    const shippingCosts = 4.99;

    const subtotal = getSubTotal().toFixed(2);
    const total = shippingCosts + getSubTotal();

    const items_in_cart = cart.length > 0;

    return (
        <div className='h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3'>
            <div className='flex justify-between mb-2'>
                <p className='text-gray-700'>Produktpreis</p>
                <p className='text-gray-700'>{subtotal}€</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-700'>Lieferkosten</p>
                <p className='text-gray-700'>{shippingCosts}€</p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-lg font-bold'>Gesamt</p>
                <div className=''>
                    <p className='mb-1 text-lg font-bold'>
                        {total.toFixed(2)}€
                    </p>
                    <p className='text-sm text-gray-700'>Incl. 19% Mwst.</p>
                </div>
            </div>
            <Link href='/warenkorb/checkout'>
                <button
                    className={`mt-6 w-full rounded-md ${
                        items_in_cart ? 'bg-blue-500' : 'bg-gray-400'
                    } py-1.5 font-medium text-blue-50 hover:bg-blue-600`}
                >
                    Jetzt kaufen
                </button>
            </Link>
        </div>
    );
}
