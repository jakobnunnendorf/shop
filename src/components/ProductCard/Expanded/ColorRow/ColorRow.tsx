'use client';
import React, { useContext } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
import ColorMap from './ColorMap';

export default function ColorRow({
    imageURL_object,
}: {
    imageURL_object: imageURL_object;
}) {
    const { state, dispatch } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;

    const setActiveColorKey = (color: colorKey) => {
        dispatch({ type: 'setActiveColorKey', payload: color });
    };

    const colors = Object.values(imageURL_object).filter(
        (color) => color !== null
    ) as ProductInColor[];
    const activeColor = imageURL_object[state.activeColorKey];
    const selectKeyFromColor = (color: ProductInColor): void => {
        const newColorKey = Object.keys(imageURL_object).find(
            (colorKey): colorKey is colorKey => {
                return (
                    imageURL_object[colorKey]?.color_name === color.color_name
                );
            }
        ) as colorKey;

        setActiveColorKey(newColorKey);
    };

    const colorRow = (
        <div className='row-span-3 px-8 py-4'>
            <h3 className='pb-2 text-xl font-bold'>Farbe auswählen</h3>
            <ul className='flex space-x-4 '>
                <ColorMap
                    colors={colors}
                    selectColor={selectKeyFromColor}
                    activeColor={activeColor}
                />
            </ul>
        </div>
    );
    return colorRow;
}
