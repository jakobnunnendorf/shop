import ImageComponent from '@components/ImageComponent';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function Thumbnail({
    imageURL,
    isSkeleton,
    isAddButton,
}: {
    imageURL?: string | BucketURL<'ProductImages'>;
    isSkeleton?: boolean;
    isAddButton?: boolean;
}) {
    const thumbnail = imageURL ? (
        <ImageComponent
            size='full'
            rounded='lg'
            desktopSize={24}
            src={imageURL}
        />
    ) : null;
    const skeleton = <div className='w-24 h-24 bg-gray-200 rounded-lg '></div>;
    const addButton = (
        <div className='grid w-24 h-24 bg-gray-200 rounded-lg place-content-center'>
            <FiPlus size={40} className='text-seafoam-green-7' />
        </div>
    );

    return isSkeleton ? skeleton : isAddButton ? addButton : thumbnail;
}
