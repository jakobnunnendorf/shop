import React from 'react';
import Expanded from '@components/ProductCard/Expanded/Expanded';
import supabase from '@utils/supabase';

type params = {
    params: {
        productId: string;
    };
};

export default async function ProductPage({ params: { productId } }: params) {
    const { data: product } = (await supabase
        .from('products')
        .select('*')
        .eq('id', productId)) as sb_fetchResponseObject<product[]>;

    console.log(productId);

    return product ? (
        <div className='min-h-screen lg:p-16'>
            <Expanded product={product[0]} />
        </div>
    ) : null;
}
