import React from 'react';
import OrderRow from './OrderRow';
import supabase from '@utils/supabase';
export default async function OrderTable() {
    const { data: orders } = (await supabase
        .from('orders')
        .select('*')) as SbFetchResponseObject<Order[]>;
    if (!orders) return <div>Noch keine Bestellungen vorhanden</div>;

    const orderTable = (
        <table className='w-full py-2 text-xl font-bold text-center border-b shadow-sm table-fixe text-coastal-blue-10 lg:shadow-none'>
            <tr className=' bg-sandy-beige-5'>
                <th className='p-4'></th>
                <th className='p-4'>Datum</th>
                <th className='p-4'>Artikel</th>
                <th className='p-4'>Status</th>
                <th className='p-4'>Bestellwert</th>
            </tr>
            {orders.map((order, index) => (
                <OrderRow order={order} key={index} />
            ))}
        </table>
    );
    return orderTable;
}
