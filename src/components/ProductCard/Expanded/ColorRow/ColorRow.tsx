'use client';
import React from 'react';
import {
    ProductCardContext,
    ProductCardContextType,
} from '@globalState/ProductCardContext';
import ColorMap from './ColorMap';

export default function ColorRow({
    imageURL_object,
}: {
    imageURL_object: imageURL_object;
}) {
    const { activeColorKey, setActiveColorKey } = React.useContext(
        ProductCardContext
    ) as ProductCardContextType;
    const colors = Object.values(imageURL_object).filter(
        (color) => color !== null
    ) as ProductInColor[];
    const activeColor = imageURL_object[activeColorKey];
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
