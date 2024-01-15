import React, { useContext } from 'react';
import {
    wishListContext,
    WishListContextType,
} from '@globalState/WishListContext';

export default function RemoveItemFromWishList({
    wishListItem,
}: {
    wishListItem: CartItem;
}) {
    const { removeWishListItem } = useContext(
        wishListContext
    ) as WishListContextType;
    const removeThisWishListItem = () => {
        removeWishListItem(wishListItem);
    };
    const deleteButton = (
        <svg
            onClick={removeThisWishListItem}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-5 h-5 duration-150 cursor-pointer hover:text-red-500'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
            />
        </svg>
    );
    return deleteButton;
}
