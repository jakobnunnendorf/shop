import Image from 'next/image';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function Thumbnail({
    imageURL,
    isSkeleton,
    isAddButton,
}: {
    imageURL?: string | bucketURL<'ProductImageBucket'>;
    isSkeleton?: boolean;
    isAddButton?: boolean;
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
    const addButton = (
        <div className='grid h-24 w-24 place-content-center rounded-lg bg-gray-200'>
            <FiPlus size={40} className='text-seafoam-green-7' />
        </div>
    );

    return isSkeleton ? skeleton : isAddButton ? addButton : thumbnail;
}
