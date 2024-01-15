'use client';
import { toggleQueryParam } from '@lib/URLProcessing';
import React from 'react';
import SelectColor from './LinkToColor';

export default function ColorMap({
    colors,
    activeColor,
    selectColor,
    productId,
}: {
    colors: ProductInColor[];
    activeColor: ProductInColor | null;
    selectColor: (color: ProductInColor) => void;
    productId: UUID;
}) {
    // toggleQueryParam('/produkte/48a3791b-4a89-4030-b5ee-8f88b8fc234c');
    const colorMap = colors.map((colorKey, index) => {
        return (
            <SelectColor
                colorObject={colorKey}
                productId={productId}
                key={index}
                colorKey={'defaultColor'}
            />
            /*<button
                type='button'
                onClick={selectThisColor}
                key={color.colorName}
            >
                <li
                    className={`h-6 w-6 ${
                        color.tailwindColor
                    } rounded-full border-2 ${
                        color.colorName === activeColor?.colorName
                            ? ' border-blue-400 shadow-2xl'
                            : ''
                    }}`}
                ></li>
            </button>*/
        );
    });
    return colorMap;
}
