import React from 'react';
import ProductCard from '@components/ProductCard/ProductCard';
import supabase from '@utils/supabase';
import { productCategories } from '@lib/helperFunctions';

export default async function ShopGrid({ products }: { products: product[] }) {
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
