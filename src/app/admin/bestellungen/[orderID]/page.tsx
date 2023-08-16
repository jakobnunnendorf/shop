'use client'

import React, { useState } from 'react';
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
    
    const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { } = await supabase
        .from('orders')
        .update({ status: e.target.value })
        .eq('order_id', orderID);
    };

    return (
        <section className='w-full h-full'>
            <div className=''>
                <CartRow cartItem={order.cart[0]}/>
            </div>
            <div className='flex justify-end items-center'>
                <span className='text-1/2 font-bold text-coastal-blue-8'>Status</span>
                
                <select className='w-48 rounded-full ml-4 border-2 p-2 font-bold text-1/2 text-coastal-blue-5' onChange={handleStatusChange} defaultValue={order.status}>
                    <option value="paid">paid</option>
                    <option value="unpaid">unpaid</option>
                    <option value="shipped">shipped</option>
                    <option value="dispatched">dispatched</option>
                    <option value="review-written">review written</option>
                </select>
            </div>
        </section>
    ) 
    //     : 
    // (
    //     <span>Error, product couldn't be found!</span>
    // ); 
};
