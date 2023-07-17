'use client';
import React from 'react';

export default function ColorMap({
    colors,
    selectedColor,
    selectColor,
}: {
    colors: ProductInColor[];
    selectedColor: productColor | null;
    selectColor: (color: productColor) => void;
}) {
    const colorMap = colors.map((color) => {
        const selectThisColor = () => {
            if (color.color_name) {
                selectColor(color.color_name);
            }
        };
        return (
            <button
                type='button'
                onClick={selectThisColor}
                key={color.color_name}
            >
                <li
                    className={`h-6 w-6 ${color.tailwind_color} rounded-full ${
                        color.color_name === selectedColor
                            ? 'border-2 border-blue-400 shadow-2xl'
                            : ''
                    }}`}
                ></li>
            </button>
        );
    });
    return colorMap;
}
