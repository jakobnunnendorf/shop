'use client';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '@globalState/CartContext';
import { AddToCart } from '@lib/helperFunctions';

export default function AddToCartButton({ product }: { product: any }) {
    const { value: cartItems, setValue: setCartItems } =
        useContext(CartContext);
    return (
        <button
            onClick={() => AddToCart(product, cartItems, setCartItems)}
            className='rounded-full border-2 p-2 shadow-xl'
        >
            <FiShoppingCart />
        </button>
    );
}
