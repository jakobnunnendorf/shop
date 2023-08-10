import React, { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
    WishlistContext,
    WishlistContextType,
} from '@globalState/WishlistContext';

export default function WishlistButton({ product }: { product: product }) {
    const { addProductToWishlist } = useContext(
        WishlistContext
    ) as WishlistContextType;

    const addThisItemToWishlist = () => {
        addProductToWishlist(product);
    };

    const WishlistButton = (
        <button
            onClick={addThisItemToWishlist}
            className='row-span-1 flex items-center space-x-2 rounded-full bg-seafoam-green-8 px-4 py-2 font-bold text-coastal-blue-10'
        >
            <FiHeart className='font-bold' />
        </button>
    );
    return WishlistButton;
}
