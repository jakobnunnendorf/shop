import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react';
import ProductCard from '@components/ProductCard/ProductCard';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import supabase from '@utils/supabase';

export default async function ShopGrid({
    categoryFilters,
} // priceFilters,
: {
    categoryFilters: string[];
    // priceFilters: string[] | undefined;
}) {
    const { data: products } = (await supabase
        .from('products')
        .select('*')
        .in('category', categoryFilters)
        .limit(30)) as sb_fetchResponseObject<product[]>;
    return (
        <ul className='grid w-full grid-cols-2 gap-0 lg:grid-cols-5 lg:gap-4 lg:p-4 '>
            {products?.map((product, index) => {
                return (
                    <li key={index} className='w-full pb-4'>
                        <ProductCard product={product} grid={true} />
                    </li>
                );
            })}
        </ul>
    );
}
