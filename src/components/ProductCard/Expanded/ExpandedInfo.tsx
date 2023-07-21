import React from 'react';
import CompatibleModelTags from '@components/ProductCard/CompatibleModelTags';
import CartButton from '@components/ProductCard/Expanded/CartButton';
import ColorRow from '@components/ProductCard/Expanded/ColorRow/ColorRow';
import Price from '@components/ProductCard/Price';

export default function ExpandedInfo({ product }: { product: product }) {
    const expandedInfo = (
        <div className='flex flex-col justify-evenly lg:col-span-2'>
            <h2 className='px-4 pt-8 text-center text-xl font-bold lg:pt-0 lg:text-3xl'>
                {product.title}
            </h2>
            <CompatibleModelTags
                compatibleModels_array={product.compatibleModels}
                expanded={true}
            />
            <div>
                <h3 className='px-8 text-lg font-bold'>Beschreibung</h3>
                <p className='px-8'>{product.description}</p>
            </div>
            <ColorRow imageURL_object={product.imageURL_object} />
            <div className='flex w-full items-center justify-evenly'>
                <Price productPrice={product.price} />
                <CartButton product={product} />
            </div>
        </div>
    );
    return expandedInfo;
}
