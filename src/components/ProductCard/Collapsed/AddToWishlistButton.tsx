'use client';
import { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
    WishlistContext,
    WishlistContextType,
} from '@globalState/WishlistContext';

export default function AddToWishlistButton({ product }: { product: product }) {
    const { addProductToWishlist } = useContext(
        WishlistContext
    ) as WishlistContextType;

    const addThisItemToWishlist = () => {
        addProductToWishlist(product);
    };

    return (
        <button
            onClick={addThisItemToWishlist}
            className='rounded-full border-2 bg-white p-2 shadow-xl'
        >
            <FiHeart />
        </button>
    );
}
