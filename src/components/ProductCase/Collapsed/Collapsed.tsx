import React from 'react';
import CollapsedPicture from './CollapsedPicture';

export default function Collapsed({ product }: { product: product }) {
    const imageURL = product.imageURL_object.default_color.imageURL_array[0];

    const collapsed = (
        <div className='grid h-full w-full grid-rows-2'>
            <CollapsedPicture imageURL={imageURL} />
            <article className=''></article>
        </div>
    );

    return collapsed;
}
