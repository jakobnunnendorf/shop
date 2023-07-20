import React from 'react';
import CompatibleModelTags from '@components/ProductCase/components/CompatibleModelTags';
import ColorRow from './ColorRow/ColorRow';
import Description from './Description';
import Price from './Price';
import Reviews from './Reviews';
import Title from './Title';
import CartButton from '../CartButton';

export default function ProductInfo({ product }: { product: product }) {
    const productInfo = (
        <div className='flex h-full w-full flex-col justify-evenly p-8'>
            <div className='pb-4 lg:pb-0'>
                <Title productTitle={product.title} />
                <CompatibleModelTags
                    compatibleModels_array={product.compatibleModels}
                />
                <div className='lg:pt-8'>
                    <ColorRow imageURL_object={product.imageURL_object} />
                </div>
            </div>
            <div className='row-span-2 w-full'>
                <Description productDescription={product.description} />
                <div className='flex w-full justify-evenly py-4'>
                    <Reviews productReviews={product.reviews} />
                    <Price productPrice={product.price} />
                </div>
                <div className='pt-8'>
                    <CartButton />
                </div>
            </div>
        </div>
    );
    return productInfo;
}
