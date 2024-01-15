
import React from 'react';
import Link from 'next/link';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { uniqueId } from 'lodash';

type params = {
    params: {
        orderID: string;
    };
};

export default async function UseOrdersPage({ params: { orderID } }: params) {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currenSession },
    } = await supabase.auth.getSession();

    const userId = currenSession?.user?.id;

    const getOrders = async () => {
        const { data: orders } = (await supabase
            .from('orders')
            .select('*')
            .eq('userId', userId)) as SbFetchResponseObject<Order[]>;
        return orders;
    };
    const orders = (await getOrders()) as Order[];

    const ordersList = orders.map((order, index) => (
        <ul
            key={index}
            className='grid grid-cols-4 py-2 font-semibold text-center border-b shadow-sm text-1/2 lg:shadow-none'
        >
            <Link href={`/user/bestellungen/${order.orderId}`}>
                <li
                    key={uniqueId()}
                    className='overflow-hidden truncate hover:text-multicolore-pink active:text-multicolore-pink'
                >
                    {order.cart[0].product.title}
                </li>
            </Link>

            <Link href={`/user/bestellungen/${order.orderId}`}>
                <li
                    key={uniqueId()}
                    className='overflow-hidden truncate hover:text-multicolore-pink active:text-multicolore-pink'
                >
                    {order.createdAt.split('T')[0] +
                        ' ' +
                        order.createdAt.split('T')[1].split('.')[0]}
                </li>
            </Link>
            <li
                className={`${
                    order.status == 'paid'
                        ? 'text-multicolore-green'
                        : 'text-multicolore-pink'
                }`}
            >
                {order.status}
            </li>
            <li>{`${order.cart[0].product.price} ${' €'}`}</li>
        </ul>
    ));

    return (
        <section className='w-full h-full'>
            <ul className='grid grid-cols-4 py-2 text-xl font-bold text-center border-b shadow-sm bg-sandy-beige-5 text-coastal-blue-10 lg:shadow-none'>
                <li>Order</li>
                <li>Date</li>
                <li>Status</li>
                <li>Price</li>
            </ul>
            {ordersList}
        </section>
    );
}
