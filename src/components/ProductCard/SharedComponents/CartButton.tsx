'use client';
import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext, CartContextType } from '@globalState/CartContext';
export default function CartButton({
    productId,
    colorKey,
    small,
}: {
    productId: UUID;
    colorKey: ColorKey | null;
    small?: boolean;
}) {
    const { addProductToCart } = useContext(CartContext) as CartContextType;

    const smallStyling = 'rounded-full border-2 p-2 shadow-xl';
    const regularStyling =
        'flex items-center row-span-1 px-4 py-2 space-x-2 font-bold rounded-full bg-seafoam-green-8 text-coastal-blue-10';

    const addThisItemToCart = () => {
        addProductToCart(productId, colorKey);
    };

    const cartButton = (
        <button
            onClick={addThisItemToCart}
            className={small ? smallStyling : regularStyling}
        >
            {!small && <span>Einkaufswagen</span>}
            <FiShoppingCart className='font-bold' />
        </button>
    );
    return cartButton;
}
