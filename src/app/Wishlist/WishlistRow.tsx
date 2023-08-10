import Image from 'next/image';
import React from 'react';
import AddToCartButton from '@components/CatalogueTile/AddToCartButton';

import { useContext } from 'react';
import {
    WishlistContext,
    WishlistContextType,
} from '../../globalState/WishlistContext';

export default function WishlistRow({
    WishlistItem,
    product,
}: {
    WishlistItem: Wishlist_item;
    product: product;
}) {
    const { removeWishlistItem } = useContext(
        WishlistContext
    ) as WishlistContextType;

    const removeThisWishlistItem = () => {
        removeWishlistItem(WishlistItem);
    };

    const returnFirstPicture = () => {
        return WishlistItem.product.imageURL_object.default_color
            .imageURL_array[0];
    };

    return (
        <div className='mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
            <figure className='relative h-20 w-24 rounded-lg sm:w-40'>
                <Image
                    src={returnFirstPicture()}
                    alt='product-image'
                    fill={true}
                    className='object-contain'
                />
            </figure>
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900'>
                        {WishlistItem.product.title}
                    </h2>
                    <p className='mt-1 text-xs text-gray-700'>
                        {WishlistItem.product.compatibleModels?.map(
                            (model: device) => {
                                return (
                                    <span key={model.name}>{model.name}, </span>
                                );
                            }
                        )}
                    </p>
                </div>
                <div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center space-x-4'>
                        <p className='text-sm'>{WishlistItem.product.price}</p>
                        <svg
                            onClick={removeThisWishlistItem}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </div>
                    <AddToCartButton product={WishlistItem.product} />
                </div>
            </div>
        </div>
    );
}
