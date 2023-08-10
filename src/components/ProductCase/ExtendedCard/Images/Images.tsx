import Image from 'next/image';
import React from 'react';
import ThumbnailRow from '@components/ProductCard/Expanded/Images/ThumbnailRow';

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
        <div className='relative flex h-full w-full items-end justify-center bg-gray-100 p-6 lg:col-span-2 '>
            {/* {imageURL_array && imageURL_array.length > 0 ? (
                <div className='absolute top-0 left-0 z-10 w-full h-full'>
                    <figure className='relative w-full h-full '>
                        <Image
                            src={getImageAt(activeIndex)}
                            fill={true}
                            className='object-cover'
                            alt={'product image'}
                        />
                    </figure>
                </div>
            ) : (
                <div className='relative w-full h-full'></div>
            )} */}
            <ThumbnailRow
                imageURL_array={imageURL_array}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
            />
        </div>
    );
    return images;
}
