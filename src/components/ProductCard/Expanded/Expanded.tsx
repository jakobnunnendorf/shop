'use client';
import React from 'react';
import ExpandedInfo from './ExpandedInfo';
import ExpandedPicture from './Images/ExpandedPicture/ExpandedPicture';
import NavigateBack from '@app/produkte/[productId]/NavigateBack';

export default function Expanded({
    product,
    activeColorKey,
    activeIndex,
}: {
    product: Product;
    activeColorKey: ColorKey;
    activeIndex: number;
}) {
    const expanded = (
        <div className='grid w-full grid-rows-2 h-4/5 lg:grid-cols-5 lg:grid-rows-none '>
            <NavigateBack />
            <ExpandedPicture
                productId={product.id}
                activeColorKey={activeColorKey}
                activeIndex={activeIndex}
            />
            <ExpandedInfo
                productId={product.id}
                activeColorKey={activeColorKey}
            />
            <div className='hidden py-16 lg:block lg:col-span-5'>
                <h2 className='px-8 text-2xl font-bold'>Beschreibung</h2>
                <p className='px-8'>{product.description}</p>
            </div>
        </div>
    );

    return expanded;
}
