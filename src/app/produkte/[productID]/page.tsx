import React from 'react';
import Expanded from '@components/ProductCard/Expanded/Expanded';
import supabase from '@utils/supabase';

type params = {
    params: {
        productID: string;
    };
};

export default async function ProductPage({ params: { productID } }: params) {
    const { data: product } = (await supabase
        .from('products')
        .select('*')
        .eq('id', productID)) as sb_fetchResponseObject<product[]>;
    return product ? <Expanded product={product[0]} /> : null;
}
