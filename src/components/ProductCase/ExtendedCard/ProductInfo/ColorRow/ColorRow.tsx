import React from 'react';
import ColorMap from './ColorMap';

export default function ColorRow({
    colors,
    selectColor,
    selectedColor,
}: {
    colors: ProductInColor[];
    selectColor: (color: productColor) => void;
    selectedColor: productColor | null;
}) {
    const colorRow = (
        <div className='space-y-4 '>
            <h3 className='text-xl font-bold'>Farbe</h3>
            <ul className='flex justify-around'>
                <ColorMap
                    colors={colors}
                    selectColor={selectColor}
                    selectedColor={selectedColor}
                />
            </ul>
        </div>
    );
    return colorRow;
}
