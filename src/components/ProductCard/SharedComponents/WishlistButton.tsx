'use client';
import React, { useContext } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
    wishListContext,
    WishListContextType,
} from '@globalState/WishListContext';

export default function WishListButton({
    productId,
    small,
}: {
    productId: UUID;
    small?: boolean;
}) {
    const addThisItemToWishList = () => {
        addProductToWishList(productId);
    };

    const {
        addProductToWishList,
        isInWishList,
        removeWishListItemWithProduct,
    } = useContext(wishListContext) as WishListContextType;

    const toggleToWishList = () => {
        isInWishList(productId)
            ? removeWishListItemWithProduct(productId)
            : addProductToWishList(productId);
    };

    const wishlistButton = (
        <button
            onClick={addThisItemToWishList}
            className='flex items-center row-span-1 px-4 py-2 space-x-2 font-bold rounded-full bg-seafoam-green-8 text-coastal-blue-10'
        >
            <FiHeart className='font-bold ' />
        </button>
    );

    const smallWishListButton = (
        <button
            onClick={() => {
                toggleToWishList();
            }}
            className={`rounded-full border-2 p-2 shadow-xl text-slate-400 ${
                isInWishList(productId)
                    ? ` border-pink-400`
                    : `bg-white border-white`
            } `}
        >
            <FiHeart
                className={`hover:text-pink-400 ${
                    isInWishList(productId)
                        ? `text-pink-400`
                        : `text-coastal-blue-10`
                }`}
            />
        </button>
    );
    return small ? smallWishListButton : wishlistButton;
}