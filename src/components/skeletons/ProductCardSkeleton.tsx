import React from 'react';
import Skeleton from './Skeleton';

export default function ProductCardSkeleton() {
    return (
        <div className='grid w-full h-full grid-rows-5 lg:grid-rows-2'>
            <Skeleton classes='' />
            <div>
                <Skeleton classes='' />
            </div>
        </div>
    );
}
