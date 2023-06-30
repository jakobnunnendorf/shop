// src/components/ProductCarousel/ProductCarousel.tsx
//NOTE: This is a comment
'use client';
import React from 'react';
import ProductClientFrame from '@components/ProductCase/ProductClientFrame';
import ExtendedCard from '../ProductCase/ExtendedCard';
import SmallCard from '../ProductCase/SmallCard';

export function ProductCarousel({
    heading,
    productData,
}: {
    heading: string;
    productData: productsFetchResponse[];
}) {
    const productDataWithSkeletons = [
        ...(productData as productsFetchResponse[]),
        ...Array.from({ length: 20 - productData.length }, () => ({})),
    ];

    return (
        <div className='flex flex-col items-center py-16 '>
            <h2 className='m-8 text-5xl font-bold gradient-text text-coastal-blue-10 hover:underline'>
                {heading}
            </h2>
            <div className='flex py-16 space-x-4 overflow-x-auto w-96 snap-x scrollbar-hide lg:w-2/3'>
                {productDataWithSkeletons.map((product, index) => {
                    const extended_card_component_with_props = (
                        <ExtendedCard
                            product={product as productsFetchResponse}
                        />
                    );
                    const small_card_component_with_props = (
                        <SmallCard product={product as productsFetchResponse} />
                    );
                    return (
                        <div className=' h-96 w-96 snap-center' key={index}>
                            <ProductClientFrame
                                ExtendedCard={
                                    extended_card_component_with_props
                                }
                                SmallCard={small_card_component_with_props}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
