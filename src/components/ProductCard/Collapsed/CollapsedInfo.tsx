import React from 'react';
import CompatibleModelTags from '@components/ProductCard/CompatibleModelTags';
import Price from '@components/ProductCase/ExtendedCard/ProductInfo/Price';
import AddToCartButton from './AddToCartButton';

export default function CollapsedInfo({ product }: { product: product }) {
    const collapsedInfo = (
        <div className='flex h-full w-full flex-col justify-evenly'>
            <h2 className='px-2 text-center text-xs font-bold lg:px-4'>
                {product.title}
            </h2>
            <CompatibleModelTags
                compatibleModels_array={product.compatibleModels}
            />
            <div className='flex items-center justify-evenly'>
                <Price productPrice={product.price} />
                <AddToCartButton product={product} />
            </div>
        </div>
    );
    return collapsedInfo;
}
