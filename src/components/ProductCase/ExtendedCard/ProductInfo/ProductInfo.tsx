import React from 'react'; // TODO add colours
import ColorRow from './ColorRow/ColorRow';
import Description from './Description';
import Price from './Price';
import Title from './Title';
import Reviews from './Reviews';
import CartButton from '../CartButton';

export default function ProductInfo({
    product,
    colors,
}: {
    product: product;
    colors: ProductInColor[];
}) {
    const productInfo = (
        <div className='space-y-8 p-8'>
            <Title productTitle={product.title} />
            <ColorRow colors={colors} />
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
