import React from 'react';
import CompatibleModelTags from '@components/ProductCard/SharedComponents/CompatibleModelTags';
import Price from '@components/ProductCard/SharedComponents/Price';
import styles from './collapsedInfo.module.css';
import Link from 'next/link';
import CartButton from '../SharedComponents/CartButton/CartButton';
export default function CollapsedInfo({ product }: { product: product }) {
    const collapsedInfo = (
        <div className='flex flex-col justify-between w-full row-span-3 lg:row-span-1'>
            <Link
                href={`/produkte/${product.id}`}
                className={`text-md h-2/5 overflow-hidden px-2 pt-4 text-center font-bold lg:w-full lg:px-4 ${styles.dashboard}`}
            >
                <h2>{product.title}</h2>
            </Link>
            <CompatibleModelTags
                compatibleModels_array={product.compatibleModels}
            />

            <div className='flex items-center pb-4 justify-evenly'>
                <Price productPrice={product.price} />
                <CartButton product={product} small />
            </div>
        </div>
    );
    return collapsedInfo;
}
