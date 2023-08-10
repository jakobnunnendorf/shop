import React from 'react';
import AddToWishlistButton from './AddToWishlistButton';
import CollapsedInfo from './CollapsedInfo';
import CollapsedPicture from './CollapsedPicture';
export default function Collapsed({
    product,
    setExpanded,
}: {
    product: product;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const imageURL = product.imageURL_object.default_color.imageURL_array[0];

    const collapsed = (
        <div className='grid w-full h-full grid-rows-5 lg:grid-rows-2'>
            <CollapsedPicture imageURL={imageURL} setExpanded={setExpanded} />
            <div className='absolute mt-1 ml-1'>
                <AddToWishlistButton product={product} />
            </div>
            <CollapsedInfo product={product} setExpanded={setExpanded} />
        </div>
    );

    return collapsed;
}
