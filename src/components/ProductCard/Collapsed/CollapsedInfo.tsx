import React from 'react';
import CompatibleModelTags from '@components/ProductCard/CompatibleModelTags';
import Price from '@components/ProductCard/Price';
import AddToCartButton from './AddToCartButton';
import styles from './collapsedInfo.module.css';
export default function CollapsedInfo({ product }: { product: product }) {
    const collapsedInfo = (
        <div className='row-span-3 flex w-full flex-col justify-between lg:row-span-1'>
            <h2
                className={`text-md h-2/5 overflow-hidden px-2 pt-4 text-center font-bold lg:w-full lg:px-4 ${styles.dashboard}`}
            >
                {product.title}
            </h2>
            <CompatibleModelTags
                compatibleModels_array={product.compatibleModels}
            />

            <div className='flex items-center justify-evenly pb-4'>
                <Price productPrice={product.price} />
                <AddToCartButton product={product} />
            </div>
        </div>
    );
    return collapsedInfo;
}
