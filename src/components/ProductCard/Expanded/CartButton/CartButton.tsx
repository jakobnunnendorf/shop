import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext, CartContextType } from '@globalState/CartContext';

export default function CartButton({ product }: { product: product }) {
    const { addProductToCart } = useContext(CartContext) as CartContextType;

    const addThisItemToCart = () => {
        addProductToCart(product);
    };

    const cartButton = (
        <button
            onClick={addThisItemToCart}
            className='flex items-center row-span-1 px-4 py-2 space-x-2 font-bold rounded-full bg-seafoam-green-8 text-coastal-blue-10'
        >
            <span>Einkaufswagen</span> <FiShoppingCart className='font-bold' />
        </button>
    );
    return cartButton;
}
