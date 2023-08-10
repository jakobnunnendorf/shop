import Image from 'next/image';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ThumbnailRow({
    imageURL_array,
    setActiveIndex,
    activeIndex,
    buttonSlot,
}: {
    buttonSlot?: boolean;
    imageURL_array: bucketURL<'ProductImageBucket'>[] | string[];
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    activeIndex: number;
}) {
    const amountOfImages = imageURL_array.length;
    // const fillUp = new Array(5 - amountOfImages).fill(null);
    const thumbnailRow = (
        <ul className='z-50 grid h-24 w-full grid-cols-4 lg:mb-4 lg:w-4/5'>
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
                                    ? 'border border-seafoam-green-7'
                                    : ''
                            }`}
                        >
                            <figure className='relative aspect-square h-full'>
                                <Image
                                    src={imageURL}
                                    fill
                                    className='object-cover'
                                    alt={imageURL}
                                />
                            </figure>
                        </li>
                    </button>
                );
            })}
            {buttonSlot && (
                <button
                    type='button'
                    onClick={() => setActiveIndex(amountOfImages)}
                >
                    <figure className='relative aspect-square h-full'>
                        <FiPlus />
                    </figure>
                </button>
            )}
        </ul>
    );
    return thumbnailRow;
}
