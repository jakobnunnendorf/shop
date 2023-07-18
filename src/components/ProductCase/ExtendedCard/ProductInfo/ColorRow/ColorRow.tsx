import React from 'react';
import ColorMap from './ColorMap';

export default function ColorRow({
    colors,
    selectColor,
    activeColorKey,
}: {
    colors: ProductInColor[];
    selectColor: (color: productColor) => void;
    activeColorKey: productColor | null;
}) {
    const colorRow = (
        <div className='space-y-4 '>
            <h3 className='text-xl font-bold'>Farbe</h3>
            <ul className='flex justify-around'>
                <ColorMap
                    colors={colors}
                    selectColor={selectColor}
                    activeColorKey={activeColorKey}
                />
            </ul>
        </div>
    );
    return colorRow;
}
