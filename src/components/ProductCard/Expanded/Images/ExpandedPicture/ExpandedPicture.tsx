import React from 'react';
import BigImage from './BigImage';
import ThumbnailRow from './ThumbnailRow';
//TODO: improve performance for looking at different colors
export default function ExpandedPicture({
    productId,
    activeColorKey,
    activeIndex,
}: {
    productId: UUID;
    activeColorKey: ColorKey;
    activeIndex: number;
}) {
    const expandedPicture = (
        <figure className='relative w-full h-full lg:h-[66vh] flex items-end justify-center lg:col-span-3'>
            <BigImage
                productId={productId}
                activeColorKey={activeColorKey}
                activeIndex={activeIndex}
            />
            <ThumbnailRow
                productId={productId}
                activeColorKey={activeColorKey}
                activeIndex={activeIndex}
            />
        </figure>
    );

    return expandedPicture;
}
