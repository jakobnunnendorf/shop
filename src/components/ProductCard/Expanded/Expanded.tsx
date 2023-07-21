import React, { useContext } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
import ExpandedInfo from './ExpandedInfo';
import ExpandedPicture from './Images/ExpandedPicture';

export default function Expanded({ product }: { product: product }) {
    const { state, dispatch } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;
    const colorObject =
        product.imageURL_object[state.activeColorKey] ||
        product.imageURL_object.default_color;
    const imageURL_array = colorObject.imageURL_array;

    const setActiveIndex = (index: number) => {
        dispatch({ type: 'setActiveIndex', payload: index });
    };

    const expanded = (
        <div className='grid w-full grid-rows-2 h-4/5 lg:h-full lg:grid-cols-5 lg:grid-rows-none'>
            <ExpandedPicture
                imageURL_array={imageURL_array}
                activeIndex={state.activeIndex}
                setActiveIndex={setActiveIndex}
            />
            <ExpandedInfo product={product} />
        </div>
    );

    return expanded;
}
