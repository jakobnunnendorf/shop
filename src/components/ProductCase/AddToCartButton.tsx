'use client';
import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from '../../globalState/CartContext';

export default function AddToCartButton(product: any) {
    const { value: cartItems, setValue: setCartItems } =
        useContext(CartContext);
    function addToCart() {
        setCartItems(() => [
            ...cartItems,
            { productInfo: product, quantity: 1 },
        ]);
    }
    return (
        <button
            onClick={addToCart}
            className='rounded-full border-2 p-2 shadow-xl'
        >
            <FiShoppingCart />
        </button>
    );
}
