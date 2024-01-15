'use client';

import React from 'react';
import supabase from '@utils/supabase';

export default function ChangeOrderStatus({
    orderId,
    status,
}: {
    orderId: UUID;
    status: OrderStatus;
}) {
    const handleStatusChange = async (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const {} = await supabase
            .from('orders')
            .update({ status: e.target.value })
            .eq('order_id', orderId);
    };
    return (
        <div className='flex items-center justify-end'>
            <span className='font-bold text-1/2 text-coastal-blue-8'>
                Status
            </span>

            <select
                className='w-48 p-2 ml-4 font-bold border-2 rounded-full text-1/2 text-coastal-blue-5'
                onChange={handleStatusChange}
                defaultValue={status}
            >
                <option value='unbezahlt'>unbezahlt</option>
                <option value='bezahlt'>bezahlt</option>
                <option value='versandt'>versandt</option>
                <option value='zugestellt'>zugestellt</option>
                <option value='storniert'>storniert</option>
            </select>
        </div>
    );
}
