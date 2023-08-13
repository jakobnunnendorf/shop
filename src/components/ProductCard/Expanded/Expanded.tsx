'use client';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
import ExpandedInfo from './ExpandedInfo';
import ExpandedPicture from './Images/ExpandedPicture';

export default function Expanded({ product }: { product: product }) {
    const router = useRouter();

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
            <button
                className='absolute z-10 flex items-center justify-center w-20 h-8 text-sm font-bold text-white left-4 top-4 rounded-3xl bg-coastal-blue-3 lg:hidden'
                onClick={router.back}
            >
                <FiArrowLeft /> <p>Zurück</p>
            </button>
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
