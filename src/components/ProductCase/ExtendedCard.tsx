import Image from 'next/image';
import React from 'react'; // TODO add colours

import { FiShoppingCart, FiStar } from 'react-icons/fi';

export default function ExtendedCard({
    product,
}: {
    product: product;
    }) {
    
    //extract the default picture that will be displayed on the product card from the product object
    const returnDefaultPicture = (): string => {
        const getDefaultImage = (product: product) => {
            return product.imageURL_object.default_color.imageURL_array[0];
        }
        return getDefaultImage(product)
    }
    
    const wrapper = (
        <article className='grid w-full h-full grid-cols-3'>
            <div className='relative flex items-end justify-center h-full col-span-2 p-6 bg-gray-100'>
                {product.title ? (
                    <Image
                        src={returnDefaultPicture()}
                        fill={true}
                        objectFit='cover'
                        alt={product.title}
                    />
                ) : null}
                <div className='z-50 flex justify-between w-4/5 space-x-4'>
                    <div className='flex-grow bg-gray-200 rounded-lg aspect-square'></div>
                    <div className='flex-grow bg-gray-200 rounded-lg aspect-square'></div>
                    <div className='flex-grow bg-gray-200 rounded-lg aspect-square'></div>
                    <div className='flex-grow bg-gray-200 rounded-lg aspect-square'></div>
                    <div className='flex-grow bg-gray-200 rounded-lg aspect-square'></div>
                    <div className='flex-grow bg-gray-200 rounded-lg aspect-square'></div>
                </div>
            </div>
            <div className='p-8 space-y-8'>
                {product ? (
                    <h2 className='text-xl font-bold'>{product.title}</h2>
                ) : (
                    <div className='h-12 bg-gray-100 rounded-full'></div>
                )}
                <div className='space-y-4 '>
                    <h3 className='text-xl font-bold'>Farbe</h3>
                    <ul className='flex justify-around'>
                        <li className='w-6 h-6 bg-green-400 rounded-full'></li>
                        <li className='w-6 h-6 bg-blue-400 rounded-full'></li>
                        <li className='w-6 h-6 bg-red-400 rounded-full'></li>
                        <li className='w-6 h-6 bg-yellow-400 rounded-full'></li>
                        <li className='w-6 h-6 bg-orange-400 rounded-full'></li>
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
                        <div className='h-4 bg-gray-100 rounded-full'></div>
                        <div className='h-4 bg-gray-100 rounded-full'></div>
                        <div className='h-4 bg-gray-100 rounded-full'></div>
                    </div>
                )}
                <div className='flex items-center justify-around h-12 rounded-full '>
                    <span className='flex items-center'>
                        <div className=''>
                            {product.reviews.length > 0 ? `(${product.reviews.length}) ` : ''}
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
                            <div className='w-4 h-8 bg-gray-100 rounded-full'></div>
                            ,
                            <div className='w-4 h-8 bg-gray-100 rounded-full'></div>
                            &nbsp; €
                        </span>
                    )}
                </div>
                <button className='flex items-center px-4 py-2 mx-auto mt-2 space-x-2 font-bold rounded-full bg-seafoam-green-8 text-coastal-blue-10'>
                    <span>Einkaufswagen</span>{' '}
                    <FiShoppingCart className='font-bold' />
                </button>
            </div>
        </article>
    );
    return wrapper;
}
