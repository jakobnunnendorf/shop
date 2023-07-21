import React, { useContext } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
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
        <div className='grid h-full w-full grid-rows-5 lg:grid-rows-2'>
            <CollapsedPicture imageURL={imageURL} setExpanded={setExpanded} />
            <CollapsedInfo product={product} setExpanded={setExpanded} />
        </div>
    );

    return collapsed;
}
