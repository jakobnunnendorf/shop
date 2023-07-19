import React from 'react';
import Thumbnail from './Thumbnail';

export default function ThumbnailRow({
    imageURL_array,
    setActiveIndex,
    activeIndex,
}: {
    imageURL_array: bucketURL<'ProductImageBucket'>[] | string[];
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    activeIndex: number;
    }) {
    const amountOfImages = imageURL_array.length;
    const fillUp = new Array(5 - amountOfImages).fill(null);
    const thumbnailRow = (
        <ul className='absolute z-40 flex justify-start w-4/5 h-24 space-x-6 translate-x-1/2 bottom-4 right-1/2 '>
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
                            <Thumbnail imageURL={imageURL} />
                        </li>
                    </button>
                );
            })}
            {fillUp.map((filler, index) => {
                const setThisIndexActive = () => {
                    const continueAt = imageURL_array.length;
                    setActiveIndex(continueAt + index);
                };
                return (
                    <button
                        type='button'
                        onClick={setThisIndexActive}
                        key={index}
                    >
                        <li
                            className={`overflow-hidden rounded-lg bg-gray-400 ${
                                imageURL_array.length + index === activeIndex
                                    ? 'border border-seafoam-green-7'
                                    : ''
                            }`}
                            key={index}
                        >
                            <Thumbnail isSkeleton={true} />
                        </li>
                    </button>
                );
            })}
        </ul>
    );
    return thumbnailRow;
}
