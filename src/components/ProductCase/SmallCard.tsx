import Image from 'next/image';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { extractDefaultImage } from '@lib/helperFunctions';
import AddToCartButton from './AddToCartButton';

export default function SmallCard({ product }: { product: product }) {
    const compatibleModels_array = product.compatibleModels as compatibleModels;

    const defaultImage = () => {
        return extractDefaultImage(product);
    };

    const wrapper = (
        <article className='flex flex-col h-full overflow-hidden '>
            <figure className='relative flex-grow w-full overflow-hidden rounded-t-3xl'>
                <Image
                    src={defaultImage()}
                    fill={true}
                    alt={product.title}
                    objectFit='contain'
                />
            </figure>
            <div className='flex flex-col justify-between w-full px-2 h-1/2'>
                <h2 className='font-bold text-center text-gray-700 cursor-pointer line-clamp-2 h-fit lg:m-2'>
                    {product.title}
                </h2>

                <div className='flex flex-wrap items-start justify-center flex-grow space-x-1 '>
                    {compatibleModels_array?.map(
                        (model: device, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className='px-2 text-xs font-bold text-gray-500 border rounded-full h-fit w-fit'
                                >
                                    {model.name}
                                </div>
                            );
                        }
                    )}
                </div>
                {/* <p className='text-center'>{product.description}</p> */}
                <div className='flex items-start justify-around '>
                    <p className='py-2 font-bold text-center text-gray-500'>
                        {product.price}
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

    const small_card_skeleton = (
        <article className='box-border h-full overflow-hidden'>
            <figure className='relative w-full overflow-hidden border h-1/2 rounded-t-3xl'></figure>
            <div className='flex flex-col justify-between w-full px-2 border h-1/2'>
                <h2 className='flex items-center justify-center h-12 font-bold text-center cursor-pointer lg:m-2'>
                    <div className='w-40 h-8 bg-gray-100 rounded-full '></div>
                </h2>
                <div className='flex flex-wrap items-start justify-center flex-grow space-x-1 '>
                    <div className='w-16 h-4 bg-gray-100 rounded-full'></div>
                    <div className='w-16 h-4 bg-gray-100 rounded-full'></div>
                    <div className='w-16 h-4 bg-gray-100 rounded-full'></div>
                    <div className='w-16 h-4 bg-gray-100 rounded-full'></div>
                </div>
                {/* <p className='text-center'>{product.description}</p> */}
                <div className='flex items-start justify-around '>
                    <p className='py-2 text-center'>
                        <span className='w-8 h-4 bg-gray-100 rounded-full'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        &nbsp;€
                    </p>
                    <div className='flex flex-col items-end '>
                        <span className='flex items-center space-x-1 '>
                            <span className='text-sm'>Warenkorb</span>
                            <button className='p-2 border-2 rounded-full shadow-xl'>
                                <FiShoppingCart />
                            </button>
                        </span>
                        <p className='hidden my-2 text-xs text-end text-slate-500 lg:block'>
                            <span className='w-8 h-4 bg-gray-100 rounded-full'>
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
