// import { Metadata } from 'next';

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

export const metadata = {
    title: '',
    description: '',
};

export default async function OrderManagementPage() {

    const supabase = createServerComponentClient( {cookies} );
    const getOrders = async ()=> {
        const { data } = await supabase
        .from('orders')
        .select('*');

        return data;
    };

    const orders = await getOrders() as order[];

    return (
        <section className="w-full h-full">
            <div className="grid w-full h-full grid-cols-4">
                <div className="col-span-1"></div>
            </div>
        </section>
    );
};
