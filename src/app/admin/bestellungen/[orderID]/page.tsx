import React from 'react';
import ChangeOrderStatus from './ChangeOrderStatus';
import Items from './Items';
import supabase from '@utils/supabase';
import OrderDetails from './OrderDetails';
import { eur } from '@lib/dataManipulation';
import { getSubTotal } from '@lib/fetchProductData';
import SubTotal from './SubTotal';

type params = {
    params: {
        orderId: UUID;
    };
};

export default async function OrderPage({ params: { orderId } }: params) {
    const { data: orderStatusObject } = await supabase
        .from('products')
        .select('status')
        .single();
    const { status } = orderStatusObject || { status: 'unbezahlt' };
    return (
        <section className='w-full h-full'>
            <OrderDetails orderId={orderId} />
            <Items orderId={orderId} />
            <div className='flex justify-end gap-8 px-8 items-center'>
                <ChangeOrderStatus orderId={orderId} status={status} />
                <SubTotal orderId={orderId} />
            </div>
        </section>
    );
}
