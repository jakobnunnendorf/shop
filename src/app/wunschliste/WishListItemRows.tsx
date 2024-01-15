'use client';

import React, { useContext } from 'react';
import SkeletonRow from './SkeletonRow';
import WishListRow from './WishListRow';

import {
    wishListContext,
    WishListContextType,
} from '@globalState/WishListContext';

export default function WishListItemRows() {
    const { wishList } = useContext(wishListContext) as WishListContextType;

    const wishListItemRows = (
        <div className='rounded-lg md:w-2/3'>
            {wishList.length > 0 ? (
                wishList.map((wishListItem: WishListItem) => {
                    return (
                        <WishListRow
                            key={wishListItem.productId}
                            wishListItem={wishListItem}
                        />
                    );
                })
            ) : (
                <SkeletonRow />
            )}
        </div>
    );
    return wishListItemRows;
}
