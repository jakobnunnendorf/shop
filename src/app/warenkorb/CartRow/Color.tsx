'use client';
import React from 'react';
import SelectColor from './SelectColor';

export default function Color({
    cartItem,
    imageURLObject,
}: {
    cartItem: CartItem;
    imageURLObject: ImageURLObject | undefined;
}) {
    const color = (
        <div className='p-4 '>
            <div className='flex'>
                <h3>Farbe:&nbsp;</h3>
                {cartItem.color && imageURLObject ? (
                    <div
                        className={`w-6 h-6 rounded-full ${imageURLObject[
                            cartItem.color
                        ]?.tailwindColor}`}
                    ></div>
                ) : (
                    <SelectColor cartItem={cartItem} />
                )}
            </div>
        </div>
    );
    return color;
}
