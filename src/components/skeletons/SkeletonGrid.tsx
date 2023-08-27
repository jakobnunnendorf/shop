import React from 'react';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function SkeletonGrid({
    numberOfSkeletons,
}: {
    numberOfSkeletons: number;
}) {
    const arr = new Array(numberOfSkeletons).fill(null); //
    return (
        <ul className='grid w-full grid-cols-2 gap-0 lg:grid-cols-5 lg:gap-4 lg:p-4 '>
            {arr.map((index) => {
                return <ProductCardSkeleton />;
            })}
        </ul>
    );
}
