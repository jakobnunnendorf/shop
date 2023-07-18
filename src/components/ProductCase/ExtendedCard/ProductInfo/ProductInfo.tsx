import React from 'react';
import ColorRow from './ColorRow/ColorRow';
import Description from './Description';
import Price from './Price';
import Reviews from './Reviews';
import Title from './Title';
import CartButton from '../CartButton';

export default function ProductInfo({ product }: { product: product }) {
    const productInfo = (
        <div className='space-y-8 p-8'>
            <Title productTitle={product.title} />
            <ColorRow imageURL_object={product.imageURL_object} />
            <Description productDescription={product.description} />
            <div className='flex h-12 items-center justify-around rounded-full '>
                <Reviews productReviews={product.reviews} />
                <Price productPrice={product.price} />
            </div>
            <CartButton />
        </div>
    );
    return productInfo;
}
