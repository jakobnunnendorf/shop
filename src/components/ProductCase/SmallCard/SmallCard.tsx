import React from 'react';
import { eur, extractDefaultImage } from '@lib/helperFunctions';
import CompatibleModelTags from './CompatibleModelTags';
import Skeleton from './Skeleton/Skeleton';
import SmallImage from './SmallImage';
import AddToCartButton from '../AddToCartButton';

export default function SmallCard({ product }: { product: product }) {
    const compatibleModels_array = product.compatibleModels as compatibleModels;

    const defaultImage = () => {
        return extractDefaultImage(product);
    };

    const wrapper = (
        <article className='flex flex-col h-full overflow-hidden '>
            <SmallImage imageURL={defaultImage()} title={product.title} />
            <div className='flex flex-col justify-between w-full px-2 h-1/2'>
                <h2 className='font-bold text-center text-gray-700 cursor-pointer line-clamp-2 h-fit lg:m-2'>
                    {product.title}
                </h2>
                <CompatibleModelTags
                    compatibleModels_array={compatibleModels_array}
                />
                <div className='flex items-start justify-around '>
                    <p className='py-2 font-bold text-center text-gray-500'>
                        {eur(product.price)}
                    </p>
                    <div className='flex flex-col items-end '>
                        <span className='flex items-center space-x-1 text-gray-500'>
                            <span className='text-sm'>Warenkorb</span>
                            <AddToCartButton product={product} />
                        </span>
                        <p className='hidden my-2 text-xs text-end text-slate-500 lg:block'>
                            {product.stock} übrig
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );

    const content = product ? wrapper : <Skeleton />;

    return content;
}
