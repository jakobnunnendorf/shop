'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import CartButton from '@components/ProductCard/SharedComponents/CartButton';
import {
    createClientComponentClient,
    createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import RemoveItemFromWishList from './RemoveItemFromWishList';
import ImageComponent from '@components/ImageComponent';

export default async function WishListRow({ wishListItem }: { wishListItem: WishListItem }) {
    const [productData, setProductData] = useState<Product | null>(null);
    useEffect(() => {
        const fetchProductData = async () => {
            const supabase = createClientComponentClient();
            const { data: itemData, error } = (await supabase
                .from('products')
                .select('*')
                .eq('id', wishListItem.productId)
                .single()) as SbFetchResponseObject<Product>;
            if (!itemData) {
                throw new Error(
                    `Couldn't fetch item data: ${JSON.stringify(error)}`
                );
            }
            setProductData(itemData);
        };
        fetchProductData();
    }, []);
    const returnFirstPicture = () => {
        return productData?.imageURLObject.defaultColor.imageURLArray[0] || '';
    };

    return (
        <div className='justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start'>
            <ImageComponent
                src={returnFirstPicture()}
                size={20}
                width={40}
                desktopWidth={20}
                rounded='lg'
            />
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900'>
                        {productData?.title}
                    </h2>
                    <p className='mt-1 text-xs text-gray-700'>
                        {productData?.compatibleModels?.map((model: Device) => {
                            return <span key={model.name}>{model.name}, </span>;
                        })}
                    </p>
                </div>
                <div className='flex justify-between mt-4 sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center space-x-4'>
                        <p className='text-sm'>{productData?.price}</p>
                        <RemoveItemFromWishList wishListItem={wishListItem} />
                    </div>
                    <CartButton
                        small
                        productId={wishListItem.productId}
                        colorKey={wishListItem.color}
                    />
                </div>
            </div>
        </div>
    );
}
