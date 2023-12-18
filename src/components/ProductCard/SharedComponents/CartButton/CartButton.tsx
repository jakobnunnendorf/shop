'use client';
import React, { useContext, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
import { CartContext, CartContextType } from '@globalState/CartContext';
import ConfirmColor from './ConfirmColor';

export default function CartButton({
    productId,
    small,
}: {
    productId: UUID;
    small?: boolean;
}) {
    const { addProductToCart } = useContext(CartContext) as CartContextType;
    const { state } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;

    const smallStyling = 'rounded-full border-2 p-2 shadow-xl';
    const regularStyling =
        'flex items-center row-span-1 px-4 py-2 space-x-2 font-bold rounded-full bg-seafoam-green-8 text-coastal-blue-10';

    const [openConfirmColor, setOpenConfirmColor] = useState(false);

    const addThisItemToCart = () => {
        addProductToCart(productId);
    };

    const closeConfirmColor = () => {
        setOpenConfirmColor(false);
    };

    const cartButton = (
        <button
            onClick={() => setOpenConfirmColor(true)}
            className={small ? smallStyling : regularStyling}
        >
            {!small && <span>Einkaufswagen</span>}
            <FiShoppingCart className='font-bold' />
        </button>
    );
    return openConfirmColor ? (
        <ConfirmColor
            productId={productId}
            activeColorKey={state.activeColorKey}
            closeConfirmColor={closeConfirmColor}
            addThisProductToCart={addThisItemToCart}
        />
    ) : (
        cartButton
    );
}
