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

    const { data: order } = (await supabase
        .from('orders')
        .select('*')
        .eq('order_id', orderID) as sb_fetchResponseObject<order[]>);
    
    const order_status = order ? order[0].status == 'paid' ? 'unpaid' : 'paid' : null;
    const handleStatusChange = async () => {
        const { data } = await supabase
            .from('orders')
            .update({status: order_status})
            .eq('order_id', orderID);
    };

    return order? (
        <section className='w-full h-full'>
            <div className=''>
                <CartRow cartItem={order[0].cart[0]}/>
            </div>
            <div className='flex justify-end items-center'>
                <button className='w-48 rounded-full border-2 p-2 font-bold text-1/2 text-coastal-blue-8 shadow-xl' onClick={handleStatusChange}>
                    Bestellung stornieren
                </button>
            </div>
        </section>
    )
        :  
    (
        <span>Error, product couldn't be found!</span>
    );

};
