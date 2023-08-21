'use client'

import React from 'react';
import supabase from '@utils/supabase';
import CartRow from '@app/warenkorb/CartRow';

type params = {
    params: {
        orderID: string;
    };
};

export default async function OrderPage( {params: {orderID} } : params) {
    
    const { data: order } = await supabase
        .from('orders')
        .select('*')
        .eq('order_id', orderID)
        .single();
    const handleStatusChange = async () => {
        if (order.status !== 'dispatched' 
            && order.status !== 'paid'
             && order.status !== 'review written') {
                const { data } = await supabase
                .from('orders')
                .update({status: 'cancelled'})
                .eq('order_id', orderID);
        }
    };

    return (
        <section className='w-full h-full'>
            <div className=''>
                <CartRow cartItem={order.cart[0]}/>
            </div>
            <div className='flex items-center justify-end'>
                <button className='w-48 p-2 font-bold border-2 rounded-full shadow-xl text-1/2 text-coastal-blue-8' onClick={handleStatusChange}>
                    Bestellung stornieren
                </button>
            </div>
        </section>
    );
}
