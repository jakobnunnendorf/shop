'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Quantity from './Quantity';
import RemoveCartItem from './RemoveCartItem';
import Color from './Color';
import ImageComponent from '@components/ImageComponent';

export default function CartRow({ cartItem }: { cartItem: CartItem }) {
    const supabase = createClientComponentClient();
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        const fetchProductData = async () => {
            const { data: product } = (await supabase
                .from('products')
                .select('*')
                .eq('id', cartItem.productId)
                .single()) as SbFetchResponseObject<Product>;
            setProduct(product);
        };
        fetchProductData();
    }, [cartItem]);

    const returnFirstPicture = () => {
        const imageURLs =
            product?.imageURLObject[cartItem.color || 'defaultColor']
                ?.imageURLArray || [];
        return imageURLs[0];
    };

    return (
        <div className='shadow-md '>
            <div className='justify-between p-6 mb-6 bg-white rounded-lg sm:flex sm:justify-start'>
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
                            {product?.title}
                        </h2>
                        <p className='mt-1 text-xs text-gray-700'>
                            {product?.compatibleModels?.map((model: Device) => {
                                return (
                                    <span key={model.name}>{model.name}, </span>
                                );
                            })}
                        </p>
                        <Color
                            cartItem={cartItem}
                            imageURLObject={product?.imageURLObject}
                        />
                    </div>
                    <div className='flex justify-between mt-4 sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                        <Quantity cartItem={cartItem} />
                        <div className='flex items-center space-x-4'>
                            <p className='text-sm'>{product?.price}</p>
                            <RemoveCartItem cartItem={cartItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
