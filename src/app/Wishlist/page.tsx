'use client';

import React, { useContext } from 'react';
import WishlistRow from './WishlistRow';
import SkeletonRow from './SkeletonRow';
import {
    WishlistContext,
    WishlistContextType,
} from '../../globalState/WishlistContext';

export default function WishlistPage() {
    const { Wishlist } = useContext(WishlistContext) as WishlistContextType;

    const Wishlist_item_rows = (
        <div className='rounded-lg md:w-2/3'>
            {Wishlist.length > 0 ? (
                Wishlist.map((WishlistItem: Wishlist_item) => {
                    return (
                        <WishlistRow
                            key={WishlistItem.product.id}
                            WishlistItem={WishlistItem}
                        />
                    );
                })
            ) : (
                <SkeletonRow />
            )}
        </div>
    );

    const container = (
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
            {Wishlist_item_rows}
        </div>
    );

    const frame = (
        <div className='h-[calc(100vh-7rem)] w-full pt-20'>
            <h1 className='mb-10 text-center text-2xl font-bold'>
                Deine Artikek
            </h1>
            {container}
        </div>
    );

    return frame;
}
