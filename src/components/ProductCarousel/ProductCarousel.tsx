// src/components/ProductCarousel/ProductCarousel.tsx
import React from 'react';
import { fetchProductsFromCategory } from '@lib/helperFunctions';
import Link from 'next/link';
import Collapsed from '@components/ProductCard/Collapsed/Collapsed';

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
                products && products.length > 0 ? 'flex' : 'hidden'
            }`}
        >
            <Link
                href={{
                    pathname: '/shop',
                    query: { category: productCategory },
                }}
            >
                <h2 className='m-8 text-5xl font-bold gradient-text text-coastal-blue-10 hover:underline'>
                    {heading}
                </h2>
            </Link>
            <ul className='flex px-8 pb-8 space-x-4 overflow-x-auto h-fit w-96 snap-x scrollbar-hide lg:w-2/3'>
                {products?.map((product, index) => {
                    return (
                        <li className=' snap-center' key={index}>
                            <div className='w-48 lg:w-64'>
                                <Collapsed productId={product.id} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
