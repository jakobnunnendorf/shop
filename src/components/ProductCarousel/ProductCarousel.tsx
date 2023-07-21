// src/components/ProductCarousel/ProductCarousel.tsx
//NOTE: This is a comment
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
    // const productDataWithSkeletons: product[] = [
    //     ...(productData as product[]),
    //     ...Array.from({ length: 20 - productData.length }, () => ({})),
    // ];

    return (
        <div className='flex flex-col items-center py-16 '>
            <h2 className='gradient-text m-8 text-5xl font-bold text-coastal-blue-10 hover:underline'>
                {heading}
            </h2>
            <ul className='flex h-fit w-96 snap-x space-x-4 overflow-x-auto px-8 pb-8 scrollbar-hide lg:w-2/3'>
                {productData.map((product, index) => {
                    return (
                        <li className=' snap-center' key={index}>
                            <div className='w-64'>
                                <ProductCard product={product} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
