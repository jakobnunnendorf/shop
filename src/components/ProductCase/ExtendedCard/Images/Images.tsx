import Image from 'next/image';
import React from 'react';
import ThumbnailRow from './ThumbnailRow';

export default function Images({
    imageURL_array,
    activeIndex,
    setActiveIndex,
}: {
    imageURL_array: bucketURL<'ProductImageBucket'>[] | string[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
    const getImageAt = (index: number) => {
        return imageURL_array[index];
    };
    const images = (
        <div className='relative col-span-2 flex h-full w-full items-end justify-center bg-gray-100 p-6 '>
            {imageURL_array && imageURL_array.length > 0 ? (
                <Image
                    src={getImageAt(activeIndex)}
                    fill={true}
                    objectFit='cover'
                    alt={'product image'}
                />
            ) : (
                <div className='h-full w-full '></div>
            )}
            <ThumbnailRow
                imageURL_array={imageURL_array}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
            />
        </div>
    );
    return images;
}
