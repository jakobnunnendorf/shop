'use client';

import React, { useContext } from 'react';
import SkeletonRow from './SkeletonRow';
import WishlistRow from './WishlistRow';
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
        <div className='justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0'>
            {Wishlist_item_rows}
        </div>
    );

    const frame = (
        <div className='h-[calc(100vh-7rem)] w-full pt-20'>
            <h1 className='mb-10 text-2xl font-bold text-center'>
                Deine Artikek
            </h1>
            {container}
        </div>
    );

    return frame;
}
