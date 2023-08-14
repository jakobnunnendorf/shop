// import { Metadata } from 'next';
import Link from 'next/link';
import supabase from '@utils/supabase';
export const metadata = {
    title: '',
    description: '',
};

export default async function OrderManagementPage() {

    const getOrders = async () => {
        const { data: orders } = (await supabase
            .from('orders')
            .select('*')) as sb_fetchResponseObject<order[]>;
        return orders;
    }
    const orders = await getOrders() as order[];
    
    const ordersList = (
        orders.map((order, index) => (
            <ul className="grid grid-cols-4 py-2 border-b shadow-sm font-semibold text-1/2 text-center lg:shadow-none">
                <Link href={`/admin/bestellungen/${order.order_id}`} key={index}>
                    <li className='overflow-hidden truncate hover:text-multicolore-pink active:text-multicolore-pink'>
                        {order.cart[0].product.title}
                    </li>
                </Link>

                <Link href={`/admin/bestellungen/${order.order_id}`} key={index}>
                    <li className='overflow-hidden truncate hover:text-multicolore-pink active:text-multicolore-pink'>
                        {order.created_at.split('T')[0] + ' ' + order.created_at.split('T')[1].split('.')[0]}
                    </li>
                </Link>
                <li 
                    key={index}
                    className={`${order.status == 'paid' ? 'text-multicolore-green' : 'text-multicolore-pink'}`}
                >
                    {order.status}
                </li>
                <li key={index}>
                    {`${order.cart[0].product.price} ${' €'}`}
                </li>
            </ul>
        ))
    );

    return (
        <section className="w-full h-full">
            <ul className="grid grid-cols-4 py-2 border-b shadow-sm bg-sandy-beige-5 font-bold text-coastal-blue-10 text-xl text-center lg:shadow-none">
                <li>Order</li>
                <li>Date</li>
                <li>Status</li>
                <li>Price</li>
            </ul>
            {ordersList}

        </section>
    ); 
};
