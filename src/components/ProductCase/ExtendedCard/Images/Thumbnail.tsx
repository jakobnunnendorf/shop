import Image from 'next/image';
import React from 'react';

export default function Thumbnail({
    imageURL,
    isSkeleton,
}: {
    imageURL?: string | bucketURL<'ProductImageBucket'>;
    isSkeleton?: boolean;
}) {
    const thumbnail = imageURL ? (
        <figure className='relative h-24 w-24 rounded-lg bg-gray-200'>
            <Image
                alt='product thumbnail'
                src={imageURL}
                fill={true}
                objectFit='cover'
            />
        </figure>
    ) : null;
    const skeleton = <div className='h-24 w-24 rounded-lg bg-gray-200 '></div>;
    return isSkeleton ? skeleton : thumbnail;
}
