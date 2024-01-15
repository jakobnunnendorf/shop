'use client';

import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../../globalState/CartContext';
import { getSubTotal } from '@lib/fetchProductData';
import { eur } from '@lib/dataManipulation';
import CheckoutButton from './CheckoutButton';

export default function CheckoutPanel() {
    const { cart } = useContext(CartContext) as CartContextType;
    const [subTotal, setSubTotal] = useState<number>(0);
    useEffect(() => {
        const calculateSubTotal = async () => {
            const subTotal = await getSubTotal(cart);
            setSubTotal(subTotal);
        };
        calculateSubTotal();
    }, [cart]);
    const shippingCosts = 4.99;

    const total = shippingCosts + subTotal;

    const itemsInCart = cart.length > 0;
    const colorsSelected = cart.find((cartItem) => cartItem.color === null)
        ? false
        : true;

    return (
        <div className='h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3'>
            <div className='flex justify-between mb-2'>
                <p className='text-gray-700'>Produktpreis</p>
                <p className='text-gray-700'>{eur(subTotal)}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-gray-700'>Lieferkosten</p>
                <p className='text-gray-700'>{eur(shippingCosts)}</p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
                <p className='text-lg font-bold'>Gesamt</p>
                <div className=''>
                    <p className='mb-1 text-lg font-bold'>{eur(total)}</p>
                    <p className='text-sm text-gray-700'>Incl. 19% Mwst.</p>
                </div>
            </div>
            <CheckoutButton active={itemsInCart && colorsSelected} />
        </div>
    );
}
