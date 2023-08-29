import React from 'react';
import CollapsedInfo from './CollapsedInfo';
import CollapsedPicture from './CollapsedPicture';
import WishlistButton from '../SharedComponents/WishlistButton';
export default function Collapsed({
    product,
    grid,
}: {
    product: product;
    grid?: boolean;
}) {
    const imageURL = product.imageURL_object.default_color.imageURL_array[0];

    const gridStyling = 'lg:rounded-3xl lg:border lg:shadow-xl';
    const regularStyling = 'rounded-3xl border shadow-xl';

    const collapsed = (
        <article
            className={` overflow-hidden  bg-white relative w-full aspect-[4/7] lg:aspect-[2/3] max-w-xs ${
                grid ? gridStyling : regularStyling
            }`}
        >
            <div className='grid w-full h-full grid-rows-5 lg:grid-rows-2'>
                <CollapsedPicture imageURL={imageURL} productId={product.id} />
                <div className='absolute mt-1 ml-1'>
                    <WishlistButton small product={product} />
                </div>
                <CollapsedInfo product={product} />
            </div>
        </article>
    );

    return collapsed;
}
