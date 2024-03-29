'use client';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext, CartContextType } from '@globalState/CartContext';

export default function AddToCartButton({ product }: { product: product }) {
    const { addProductToCart } = useContext(CartContext) as CartContextType;

    const addThisItemToCart = () => {
        addProductToCart(product);
    };

    return (
        <button
            onClick={addThisItemToCart}
            className='rounded-full border-2 p-2 shadow-xl'
        >
            <FiShoppingCart />
        </button>
    );
}
