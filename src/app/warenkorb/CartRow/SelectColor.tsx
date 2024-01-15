'use client'
import React from 'react';
import ColorRow from './ColorRow';

export default function SelectColor({ cartItem }: { cartItem: CartItem }) {
    const selectColor = (
        <div>
            <h3>
                <span className='text-orange-400'>Bitte auswählen</span>
            </h3>
            <ColorRow cartItem={cartItem} />
        </div>
    );
    return selectColor;
}
