import React from 'react';
import CollapsedInfo from './CollapsedInfo';
import CollapsedPicture from './CollapsedPicture';

export default function Collapsed({ product }: { product: product }) {
    const imageURL = product.imageURL_object.default_color.imageURL_array[0];

    const collapsed = (
        <div className='grid w-full h-full grid-rows-5 lg:grid-rows-2'>
            <CollapsedPicture imageURL={imageURL} />
            <CollapsedInfo product={product} />
        </div>
    );

    return collapsed;
}
