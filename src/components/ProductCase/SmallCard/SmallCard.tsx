import React from 'react';
import { eur, extractDefaultImage } from '@lib/helperFunctions';
import Skeleton from './Skeleton/Skeleton';
import SmallImage from './SmallImage';
import AddToCartButton from '../AddToCartButton';
import CompatibleModelTags from '../components/CompatibleModelTags';

export default function SmallCard({
    product,
    expand,
}: {
    product: product;
    expand: () => void;
}) {
    const compatibleModels_array = product.compatibleModels as compatibleModels;

    const defaultImage = () => {
        return extractDefaultImage(product);
    };

    const wrapper = (
        <article className='flex h-full flex-col overflow-hidden'>
            <SmallImage
                imageURL={defaultImage()}
                title={product.title}
                expand={expand}
            />
            <div className='flex h-1/2 w-full flex-col justify-between px-2 pb-8 pt-4 lg:py-0'>
                <h2
                    onClick={expand}
                    className='line-clamp-2 h-fit cursor-pointer text-center font-bold text-gray-700 lg:m-2'
                >
                    {product.title}
                </h2>
                <CompatibleModelTags
                    compatibleModels_array={compatibleModels_array}
                />
                <div className='flex items-start justify-around '>
                    <p className='py-2 text-center font-bold text-gray-500'>
                        {eur(product.price)}
                    </p>
                    <div className='flex flex-col items-end '>
                        <span className='flex items-center space-x-1 text-gray-500'>
                            <span className='text-sm'>Warenkorb</span>
                            <AddToCartButton product={product} />
                        </span>
                        <p className='my-2 hidden text-end text-xs text-slate-500 lg:block'>
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
