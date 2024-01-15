import React from 'react';
import WishListItemRows from './WishListItemRows';

export default function WishListPage() {
    const frame = (
        <div className='h-[calc(100vh-7rem)] w-full pt-20'>
            <h1 className='mb-10 text-2xl font-bold text-center'>
                Deine Artikel
            </h1>
            <div className='justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0'>
                <WishListItemRows />
            </div>
        </div>
    );

    return frame;
}
