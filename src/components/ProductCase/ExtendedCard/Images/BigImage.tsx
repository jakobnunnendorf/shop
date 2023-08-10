import Image from 'next/image';
import React from 'react';

export default function BigImage({
    imageURL,
    isSkeleton,
}: {
    imageURL: bucketURL<'ProductImageBucket'> | string;
    isSkeleton?: boolean;
}) {
    const bigImage = (
        <div className='absolute z-10 h-full w-full '>
            <Image
                src={imageURL}
                fill={true}
                className='object-cover'
                alt={'product image'}
            />
        </div>
    );
    const skeleton = (
        <div className='absolute z-10 h-full w-full bg-gray-100 '></div>
    );
    return isSkeleton ? skeleton : bigImage;
}
