'use client';
import React, { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
    WishlistContext,
    WishlistContextType,
} from '@globalState/WishlistContext';

export default function WishlistButton({
    product,
    small,
}: {
    product: product;
    small?: boolean;
}) {
    const addThisItemToWishlist = () => {
        addProductToWishlist(product);
    };

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

    const wishlistButton = (
        <button
            onClick={addThisItemToWishlist}
            className='flex items-center row-span-1 px-4 py-2 space-x-2 font-bold rounded-full bg-seafoam-green-8 text-coastal-blue-10'
        >
            <FiHeart className='font-bold' />
        </button>
    );

    const smallWishlistButton = (
        <button
            onClick={() => {
                toggleToWishlist();
            }}
            className={`rounded-full border-2  p-2 shadow-xl text-slate-400 hover:text-pink-400 ${
                isInWishlist(product)
                    ? ` border-pink-400`
                    : `bg-white border-white`
            } `}
        >
            <FiHeart
                className={`${
                    isInWishlist(product)
                        ? `text-pink-400`
                        : `text-coastal-blue-10`
                }`}
            />
        </button>
    );

    return small ? smallWishlistButton : wishlistButton;
}
