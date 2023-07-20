// src/components/ProductCarousel/ProductCarousel.tsx
//NOTE: This is a comment
'use client';
import React from 'react';
import ProductClientFrame from '@components/ProductCase/ProductClientFrame';
import ExtendedCard from '../ProductCase/ExtendedCard/ExtendedCard';
import SmallCard from '../ProductCase/SmallCard/SmallCard';

export function ProductCarousel({
    heading,
    productData,
}: {
    heading: string;
    productData: product[];
}) {
    // const productDataWithSkeletons: product[] = [
    //     ...(productData as product[]),
    //     ...Array.from({ length: 20 - productData.length }, () => ({})),
    // ];

    return (
        <div className='flex flex-col items-center py-16 '>
            <h2 className='gradient-text m-8 text-5xl font-bold text-coastal-blue-10 hover:underline'>
                {heading}
            </h2>
            <div className='flex w-96 snap-x space-x-4 overflow-x-auto px-4 py-16 scrollbar-hide lg:w-2/3'>
                {productData.map((product, index) => {
                    return (
                        <div className=' h-96 w-96 snap-center' key={index}>
                            <ProductClientFrame product={product} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
