import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import ThumbnailRow from './ThumbnailRow';
//TODO: improve performance for looking at different colors
export default function ExpandedPicture({
    activeIndex,
    imageURL_array,
    setActiveIndex,
}: {
    activeIndex: number;
    imageURL_array: string[];
    setActiveIndex: (index: number) => void | Dispatch<SetStateAction<number>>;
}) {
    const activeImage = imageURL_array[activeIndex];

    const expandedPicture = (
        <div className='relative lg:h-[66vh] flex items-end justify-center lg:col-span-3'>
            <figure className='absolute w-full h-full '>
                <Image
                    src={activeImage}
                    fill
                    className='object-cover'
                    alt={activeImage}
                />
            </figure>
            <ThumbnailRow
                imageURL_array={imageURL_array}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
            />
        </div>
    );
    return expandedPicture;
}
