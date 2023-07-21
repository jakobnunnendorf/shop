'use client';
import React from 'react';

export default function ColorMap({
    colors,
    activeColor,
    selectColor,
}: {
    colors: ProductInColor[];
    activeColor: ProductInColor | null;
    selectColor: (color: ProductInColor) => void;
}) {
    const colorMap = colors.map((color) => {
        const selectThisColor = () => {
            selectColor(color);
        };
        return (
            <button
                type='button'
                onClick={selectThisColor}
                key={color.color_name}
            >
                <li
                    className={`h-6 w-6 ${
                        color.tailwind_color
                    } rounded-full border-2 ${
                        color.color_name === activeColor?.color_name
                            ? ' border-blue-400 shadow-2xl'
                            : ''
                    }}`}
                ></li>
            </button>
        );
    });
    return colorMap;
}
