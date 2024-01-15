import React from 'react';
import Collapsed from '@components/ProductCard/Collapsed/Collapsed';
import { uniqueId } from 'lodash';

export default async function ShopGrid({ products }: { products: Product[] }) {
    return (
        <ul className='grid w-full grid-cols-2 gap-0 lg:grid-cols-5 lg:gap-4 lg:p-4 '>
            {products?.map((product) => {
                return (
                    <li key={uniqueId()} className='w-full pb-4'>
                        <Collapsed product={product} grid={true} />
                    </li>
                );
            })}
        </ul>
    );
}
