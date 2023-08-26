// src/components/ProductCarousel/ProductCarousel.tsx
import React from 'react';
import ProductCard from '@components/ProductCard/ProductCard';
import { fetchProductsFromCategory } from '@lib/helperFunctions';

export async function ProductCarousel({
    heading,
    productCategory,
    amountOfProducts = 10,
}: {
    heading: string;
    productCategory?: string;
    amountOfProducts?: number;
}) {
    const products = await fetchProductsFromCategory(
        amountOfProducts,
        productCategory
    );

    return (
        <div
            className={`flex-col items-center py-8 lg:py-16 ${
                products.length > 0 ? 'flex' : 'hidden'
            }`}
        >
            <h2 className='m-8 text-5xl font-bold gradient-text text-coastal-blue-10 hover:underline'>
                {heading}
            </h2>
            <ul className='flex px-8 pb-8 space-x-4 overflow-x-auto h-fit w-96 snap-x scrollbar-hide lg:w-2/3'>
                {products?.map((product, index) => {
                    return (
                        <li className=' snap-center' key={index}>
                            <div className='w-48 lg:w-64'>
                                <ProductCard product={product} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
