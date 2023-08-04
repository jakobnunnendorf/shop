import React, { useContext } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
import CollapsedInfo from './CollapsedInfo';
import CollapsedPicture from './CollapsedPicture';
import AddToWishlistButton from './AddToWishlistButton';
export default function Collapsed({
    product,
    setExpanded,
}: {
    product: product;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const imageURL = product.imageURL_object.default_color.imageURL_array[0];

    const collapsed = (
        <div className='grid h-full w-full grid-rows-5 lg:grid-rows-2'>
            <CollapsedPicture imageURL={imageURL} setExpanded={setExpanded} />
            <div className='absolute ml-1 mt-1'>
                <AddToWishlistButton product={product} />
            </div>
            <CollapsedInfo product={product} setExpanded={setExpanded} />
        </div>
    );

    return collapsed;
}
