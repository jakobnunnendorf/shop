// src/components/ProductCarousel/ProductCarousel.tsx
'use client';
import React from 'react';
import ProductCard from '@components/ProductCard/ProductCard';

export function ProductCarousel({
    heading,
    productData,
}: {
    heading: string;
    productData: product[];
}) {
    return (
        <div className='flex flex-col items-center py-8 lg:py-16 '>
            <h2 className='m-8 text-5xl font-bold gradient-text text-coastal-blue-10 hover:underline'>
                {heading}
            </h2>
            <ul className='flex px-8 pb-8 space-x-4 overflow-x-auto h-fit w-96 snap-x scrollbar-hide lg:w-2/3'>
                {productData?.map((product, index) => {
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
