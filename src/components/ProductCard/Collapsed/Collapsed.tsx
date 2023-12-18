import React from 'react';
import AddToWishlistButton from './AddToWishlistButton';
import CollapsedInfo from './CollapsedInfo';
import CollapsedPicture from './CollapsedPicture';
import EditProductButton from './EditProductButton';
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
            <CollapsedPicture imageURL={imageURL} productId={product.id} />
            <div className='absolute flex justify-between w-full px-2 py-2 '>
                <AddToWishlistButton product={product} />
                <EditProductButton productId={product.id} />
            </div>
            <CollapsedInfo product={product} />
        </div>
    );

    return collapsed;
}
