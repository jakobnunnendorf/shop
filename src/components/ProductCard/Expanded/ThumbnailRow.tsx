import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

export default function ThumbnailRow({
    imageURL_array,
    setActiveIndex,
    activeIndex,
}: {
    imageURL_array: bucketURL<'ProductImageBucket'>[] | string[];
    setActiveIndex: (index: number) => void | Dispatch<SetStateAction<number>>;
    activeIndex: number;
}) {
    const thumbnailRow = (
        <ul className='z-20 grid w-full h-24 grid-cols-4 gap-4 px-4 lg:mb-8 lg:w-4/5 lg:px-0'>
            {imageURL_array.map((imageURL, index) => {
                const setThisIndexActive = () => {
                    setActiveIndex(index);
                };
                return (
                    <button
                        type='button'
                        onClick={setThisIndexActive}
                        key={imageURL}
                    >
                        <li
                            className={`overflow-hidden rounded-lg bg-gray-400 ${
                                index === activeIndex
                                    ? 'outline outline-2 outline-seafoam-green-7'
                                    : ''
                            }`}
                        >
                            <figure className='relative h-full aspect-square'>
                                <Image
                                    src={imageURL}
                                    fill
                                    objectFit='cover'
                                    alt={imageURL}
                                />
                            </figure>
                        </li>
                    </button>
                );
            })}
        </ul>
    );
    return thumbnailRow;
}
