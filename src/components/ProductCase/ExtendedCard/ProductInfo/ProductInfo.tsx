import React from 'react';
import CompatibleModelTags from '@components/ProductCard/CompatibleModelTags';
import ColorRow from '../../../ProductCard/Expanded/ColorRow/ColorRow';
import Description from './Description';
import Price from '../../../ProductCard/Price';
import Reviews from './Reviews';
import Title from './Title';
import CartButton from '../../../ProductCard/Expanded/CartButton';

export default function ProductInfo({ product }: { product: product }) {
    const productInfo = (
        <div className='flex h-full w-full flex-col justify-evenly p-8'>
            <div className='pb-0 lg:pb-4'>
                <Title productTitle={product.title} />
                <CompatibleModelTags
                    compatibleModels_array={product.compatibleModels}
                />
                <div className='lg:pt-8'>
                    <ColorRow imageURL_object={product.imageURL_object} />
                </div>
            </div>
            <Description productDescription={product.description} />
            <div className='flex w-full items-center lg:block '>
                <div className='w-full justify-evenly py-4 lg:flex'>
                    <Price productPrice={product.price} />
                    <Reviews productReviews={product.reviews} />
                </div>
                <div className='lg:pt-8'>
                    <CartButton product={product} />
                </div>
            </div>
        </div>
    );
    return productInfo;
}
