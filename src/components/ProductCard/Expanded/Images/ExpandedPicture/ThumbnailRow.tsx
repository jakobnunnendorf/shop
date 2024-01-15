import React from 'react';
import Thumbnail from './Thumbnail';
import ImageComponent from '@components/ImageComponent';
import { fetchImageURLArray } from '@lib/fetchProductData';

interface ThumbnailURLObject {
    imageURLArray: string[];
}

export default async function ThumbnailRow({
    productId,
    activeColorKey,
    activeIndex,
    imageURLArray,
    setActiveIndex,
    buttonSlot,
}: {
    productId?: UUID;
    activeColorKey?: ColorKey;
    activeIndex?: number;
    imageURLArray?: string[];
    setActiveIndex?: (index: number) => void;
    buttonSlot?: boolean;
}) {
    const URLs =
        imageURLArray || (await fetchImageURLArray(activeColorKey, productId));
    const thumbnailRow = (
        <ul className='z-20 grid w-full h-24 grid-cols-4 gap-4 px-4 lg:mb-8 lg:w-4/5 lg:px-0 '>
            {URLs.map((url, index) => {
                return (
                    <Thumbnail
                        imageComponent={
                            <ImageComponent src={url} size='full' />
                        }
                        activeColorKey={activeColorKey || 'defaultColor'}
                        imageIndex={index}
                        isSelected={activeIndex === index}
                    />
                );
            })}
        </ul>
    );
    return thumbnailRow;
}
