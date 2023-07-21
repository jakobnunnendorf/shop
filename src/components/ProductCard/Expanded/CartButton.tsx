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
            className='row-span-1 flex items-center space-x-2 rounded-full bg-seafoam-green-8 px-4 py-2 font-bold text-coastal-blue-10'
        >
            <span>Einkaufswagen</span> <FiShoppingCart className='font-bold' />
        </button>
    );
    return cartButton;
}
