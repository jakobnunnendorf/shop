'use client';
import { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
    WishlistContext,
    WishlistContextType,
} from '@globalState/WishlistContext';
export default function AddToWishlistButton({ product }: { product: product }) {
    const {
        addProductToWishlist,
        isInWishlist,
        removeWishlistItemWithProduct,
    } = useContext(WishlistContext) as WishlistContextType;

    const toggleToWishlist = () => {
        isInWishlist(product)
            ? removeWishlistItemWithProduct(product)
            : addProductToWishlist(product);
    };

    return (
        <button
            onClick={() => {
                toggleToWishlist();
            }}
            className={`rounded-full border-2  p-2 shadow-xl hover:bg-pink-400 ${
                isInWishlist(product) ? `bg-pink-400` : `bg-white`
            } `}
        >
            <FiHeart
                className={`${isInWishlist(product) ? `text-white` : ``}`}
            />
        </button>
    );
}
