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
        <div className='aspect-square w-full '>
            <figure className='relative h-full w-full rounded-lg bg-gray-200 lg:h-24 lg:w-24'>
                <Image
                    alt='product thumbnail'
                    src={imageURL}
                    fill={true}
                    objectFit='cover'
                />
            </figure>
        </div>
    ) : null;
    const skeleton = <div className='w-24 h-24 bg-gray-200 rounded-lg '></div>;
    const addButton = (
        <div className='grid w-24 h-24 bg-gray-200 rounded-lg place-content-center'>
            <FiPlus size={40} className='text-seafoam-green-7' />
        </div>
    );

    return isSkeleton ? skeleton : isAddButton ? addButton : thumbnail;
}
