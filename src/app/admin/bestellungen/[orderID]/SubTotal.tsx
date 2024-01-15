import { getSubTotal } from '@lib/fetchProductData';
import React from 'react';
import supabase from '@utils/supabase';
import { eur } from '@lib/dataManipulation';

interface CartObject {
    cart: CartItem[];
}

export default async function SubTotal({ orderId }: { orderId: UUID }) {
    const { data: cartObject } = (await supabase
        .from('orders')
        .select('cart')
        .eq('orderId', orderId)
        .single()) as SbFetchResponseObject<CartObject>;
    if (!cartObject) {
        throw new Error(`Couldn't fetch cart with orderId: ${orderId}`);
    }
    const { cart } = cartObject;
    return (
        <div className='font-bold text-coastal-blue-10'>
            Gesamt: {eur(await getSubTotal(cart))}
        </div>
    );
}
