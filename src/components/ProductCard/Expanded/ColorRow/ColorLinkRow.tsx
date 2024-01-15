import React from 'react';
import LinkToColor from './LinkToColor';

export default function ColorLinkRow({
    imageURLObject,
    productId,
}: {
    imageURLObject: ImageURLObject;
    productId: UUID;
}) {
    const availableColorKeys: ColorKey[] = Object.keys(
        imageURLObject
    ) as ColorKey[];
    const colorRow = (
        <div className='row-span-3 px-8 py-4'>
            <h3 className='pb-2 text-xl font-bold'>Farbe auswählen</h3>
            <ul className='flex space-x-4 '>
                {availableColorKeys.map((colorKey) => {
                    return (
                        <LinkToColor
                            colorObject={
                                imageURLObject[colorKey] as ProductInColor
                            }
                            productId={productId}
                            colorKey={colorKey}
                        />
                    );
                })}
            </ul>
        </div>
    );
    return colorRow;
}
