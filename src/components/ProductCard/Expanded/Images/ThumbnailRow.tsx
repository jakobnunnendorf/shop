import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ThumbnailRow({
    imageURL_array,
    setActiveIndex,
    activeIndex,
    buttonSlot,
    setStatus,
}: {
    imageURL_array: bucketURL<'ProductImageBucket'>[] | string[];
    setActiveIndex: (index: number) => void | Dispatch<SetStateAction<number>>;
    activeIndex: number;
    buttonSlot?: boolean;
    setStatus?: React.Dispatch<React.SetStateAction<productStatus>>;
}) {
    const showButtonslot = buttonSlot && imageURL_array.length < 4;

    const thumbnailRow = (
        <ul className='z-50 grid w-full h-24 grid-cols-4 gap-4 px-4 lg:mb-8 lg:w-4/5 lg:px-0'>
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
            {showButtonslot && (
                <button
                    type='button'
                    onClick={() => {
                        if (setStatus) {
                            setStatus('edit');
                        }
                        setActiveIndex(imageURL_array.length);
                    }}
                >
                    <li className='w-full apect-square gradient rounded-xl border-3 border-seafoam-green-7'>
                        <div className='relative grid h-full aspect-square place-content-center'>
                            <FiPlus
                                size={40}
                                className='text-seafoam-green-7 '
                            />
                        </div>
                    </li>
                </button>
            )}
        </ul>
    );
    return thumbnailRow;
}
