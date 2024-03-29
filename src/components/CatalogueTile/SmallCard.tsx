import Image from 'next/image';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { extractDefaultImage } from '@lib/helperFunctions';
import AddToCartButton from './AddToCartButton';

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
        <article className='flex h-48 flex-col justify-between overflow-hidden lg:h-full '>
            <figure
                onClick={expand}
                className='relative h-24 w-full flex-grow overflow-hidden rounded-t-3xl'
            >
                <Image
                    src={defaultImage()}
                    fill={true}
                    alt={product.title}
                    className='object-contain'
                />
            </figure>
            <div className='flex h-1/2 w-full flex-col justify-between px-2'>
                <h2
                    onClick={expand}
                    className='line-clamp-2 h-fit cursor-pointer text-center text-xs font-bold text-gray-700 lg:m-2'
                >
                    {product.title}
                </h2>
                <div className='flex flex-grow flex-wrap items-start justify-center space-x-1 '>
                    {compatibleModels_array?.map(
                        (model: device, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className='h-fit w-fit rounded-full border px-2 text-[5px] font-bold text-gray-500 lg:text-xs'
                                >
                                    {model.name}
                                </div>
                            );
                        }
                    )}
                </div>
                <div className='flex items-start justify-around '>
                    <p className='py-2 text-center text-xs font-bold text-gray-500'>
                        {String(product.price).replace('.', ',')}&nbsp;€
                    </p>
                    <div className='flex flex-col items-end '>
                        <span className='flex items-center space-x-1 text-gray-500'>
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

    const small_card_skeleton = (
        <article className='box-border h-full overflow-hidden'>
            <figure className='relative h-1/2 w-full overflow-hidden rounded-t-3xl border'></figure>
            <div className='flex h-1/2 w-full flex-col justify-between border px-2'>
                <h2 className='flex h-12 cursor-pointer items-center justify-center text-center font-bold lg:m-2'>
                    <div className='h-8 w-40 rounded-full bg-gray-100 '></div>
                </h2>
                <div className='flex flex-grow flex-wrap items-start justify-center space-x-1 '>
                    <div className='h-4 w-16 rounded-full bg-gray-100'></div>
                    <div className='h-4 w-16 rounded-full bg-gray-100'></div>
                    <div className='h-4 w-16 rounded-full bg-gray-100'></div>
                    <div className='h-4 w-16 rounded-full bg-gray-100'></div>
                </div>
                {/* <p className='text-center'>{product.description}</p> */}
                <div className='flex items-start justify-around '>
                    <p className='py-2 text-center'>
                        <span className='h-4 w-8 rounded-full bg-gray-100'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        &nbsp;€
                    </p>
                    <div className='flex flex-col items-end '>
                        <span className='flex items-center space-x-1 '>
                            <span className='text-sm'>Warenkorb</span>
                            <button className='rounded-full border-2 p-2 shadow-xl'>
                                <FiShoppingCart />
                            </button>
                        </span>
                        <p className='my-2 hidden text-end text-xs text-slate-500 lg:block'>
                            <span className='h-4 w-8 rounded-full bg-gray-100'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            &nbsp;übrig
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );

    const content = product ? wrapper : small_card_skeleton;

    return content;
}
