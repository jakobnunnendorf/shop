import React from 'react';
import supabase from '@utils/supabase';
import CartRow from '@app/warenkorb/CartRow/CartRow';
import { getSubTotal } from '@lib/fetchProductData';
import { eur } from '@lib/dataManipulation';
import { uniqueId } from 'lodash';


interface cartObject {
    cart: CartItem[];
}
export default async function Items({ orderId }: { orderId: UUID }) {
    const { data: cartObject } = (await supabase
        .from('orders')
        .select('cart')
        .eq('orderId', orderId)
        .single()) as SbFetchResponseObject<cartObject>;
    const { cart } = cartObject || { cart: [] };
    const items = (
        <ul>
            {cart.map((cartItem: CartItem) => (
                <li key={uniqueId()}>
                    <CartRow cartItem={cartItem} />
                </li>
            ))}
        </ul>
    );
    return items;
}
