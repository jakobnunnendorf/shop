'use client';

import React, { useContext } from 'react';
import { CartContext, CartContextType } from '@globalState/CartContext';

export default function SelectColorButton({
    cartItem,
    color,
}: {
    cartItem: CartItem;
    color: {
        colorObject: ProductInColor;
        colorKey: ColorKey;
    };
}) {
    const { cart, updateItemColor } = useContext(
        CartContext
    ) as CartContextType;
    const addColorToCartItem = () => {
        updateItemColor(cartItem, color.colorKey);
    };
    const selectColorButton = (
        <li
            className={`w-6 h-6 ${color.colorObject.tailwindColor} rounded-full`}
        >
            <button
                onClick={addColorToCartItem}
                className='w-full h-full '
            ></button>
        </li>
    );
    return selectColorButton;
}
