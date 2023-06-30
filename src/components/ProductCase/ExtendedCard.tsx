import Image from 'next/image';
import React from 'react'; // TODO add colours

import { FiShoppingCart, FiStar } from 'react-icons/fi';

export default function ExtendedCard({
    product,
}: {
    product: productsFetchResponse;
}) {
    const reviews = product.reviews ? product.reviews?.split(',') : [];
    const wrapper = (
        <article className='grid h-full w-full grid-cols-3'>
            <div className='relative col-span-2 flex h-full items-end justify-center bg-gray-100 p-6'>
                {product.title ? (
                    <Image
                        src={product.imageURL[0]}
                        fill={true}
                        objectFit='cover'
                        alt={product.title}
                    />
                ) : null}
                <div className='z-50 flex w-4/5 justify-between space-x-4'>
                    <div className='aspect-square flex-grow rounded-lg bg-gray-200'></div>
                    <div className='aspect-square flex-grow rounded-lg bg-gray-200'></div>
                    <div className='aspect-square flex-grow rounded-lg bg-gray-200'></div>
                    <div className='aspect-square flex-grow rounded-lg bg-gray-200'></div>
                    <div className='aspect-square flex-grow rounded-lg bg-gray-200'></div>
                    <div className='aspect-square flex-grow rounded-lg bg-gray-200'></div>
                </div>
            </div>
            <div className='space-y-8 p-8'>
                {product ? (
                    <h2 className='text-xl font-bold'>{product.title}</h2>
                ) : (
                    <div className='h-12 rounded-full bg-gray-100'></div>
                )}
                <div className='space-y-4 '>
                    <h3 className='text-xl font-bold'>Farbe</h3>
                    <ul className='flex justify-around'>
                        <li className='h-6 w-6 rounded-full bg-green-400'></li>
                        <li className='h-6 w-6 rounded-full bg-blue-400'></li>
                        <li className='h-6 w-6 rounded-full bg-red-400'></li>
                        <li className='h-6 w-6 rounded-full bg-yellow-400'></li>
                        <li className='h-6 w-6 rounded-full bg-orange-400'></li>
                    </ul>
                </div>
                {product.description ? (
                    <div className='space-y-4 '>
                        <h3 className='text-xl font-bold'>Beschreibung</h3>
                        <p>{product.description}</p>
                    </div>
                ) : (
                    <div className='space-y-4 '>
                        <h3 className='text-xl font-bold'>Beschreibung</h3>
                        <div className='h-4 rounded-full bg-gray-100'></div>
                        <div className='h-4 rounded-full bg-gray-100'></div>
                        <div className='h-4 rounded-full bg-gray-100'></div>
                    </div>
                )}
                <div className='flex h-12 items-center justify-around rounded-full '>
                    <span className='flex items-center'>
                        <div className=''>
                            {reviews.length > 0 ? `(${reviews.length}) ` : ''}
                        </div>
                        <FiStar className='text-yellow-400' />
                        <FiStar className='text-yellow-400' />
                        <FiStar className='text-yellow-400' />
                        <FiStar className='text-yellow-400' />
                        <FiStar className='text-yellow-400' />
                    </span>
                    {product.price ? (
                        <span className='text-lg font-bold'>
                            {' '}
                            {product.price}
                        </span>
                    ) : (
                        <span className='flex text-lg font-bold'>
                            <div className='h-8 w-4 rounded-full bg-gray-100'></div>
                            ,
                            <div className='h-8 w-4 rounded-full bg-gray-100'></div>
                            &nbsp; €
                        </span>
                    )}
                </div>
                <button className='mx-auto mt-2 flex items-center space-x-2 rounded-full bg-seafoam-green-8 px-4 py-2 font-bold text-coastal-blue-10'>
                    <span>Einkaufswagen</span>{' '}
                    <FiShoppingCart className='font-bold' />
                </button>
            </div>
        </article>
    );
    return wrapper;
}
