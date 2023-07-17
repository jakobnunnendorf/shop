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
        <div className='relative w-full h-full '>
            <Image
                src={imageURL}
                fill={true}
                objectFit='cover'
                alt={'product image'}
            />
        </div>
    );
    const skeleton = (
        <div className='relative w-full h-full bg-gray-100 '></div>
    );
    return isSkeleton ? skeleton : bigImage;
}
