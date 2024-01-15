import React from 'react';
import Link from 'next/link';
import { uniqueId } from 'lodash';
import { fetchCartThumbnail, getSubTotal } from '@lib/fetchProductData';
import { eur } from '@lib/dataManipulation';
import ImageComponent from '@components/ImageComponent';

export default async function OrderRow({ order }: { order: Order }) {
    const orderTotal = await getSubTotal(order.cart);
    const cartThumbnail = await fetchCartThumbnail(order.cart);
    const rowHeight = 24;
    const orderRow = (
        <tr className={`h-${rowHeight} font-semibold border-b`}>
            <td className='grid p-4 place-content-center'>
                <ImageComponent
                    size={rowHeight}
                    src={cartThumbnail}
                    href={`/admin/bestellungen/${order.orderId}`}
                />
            </td>
            <td className=''>
                <Link
                    href={`/admin/bestellungen/${order.orderId}`}
                    key={uniqueId()}
                >
                    <p>{order?.createdAt?.split('T')[0]}</p>
                </Link>
            </td>
            <td key={uniqueId()} className=''>
                <p>{order.cart.length}</p>
            </td>
            <td
                className={` ${
                    order.status == 'bezahlt'
                        ? 'text-multicolore-green'
                        : 'text-multicolore-pink'
                }`}
            >
                <p> {order.status}</p>
            </td>

            <td key={uniqueId()} className=''>
                <p>{eur(orderTotal)}</p>
            </td>
        </tr>
    );
    return orderRow;
}
