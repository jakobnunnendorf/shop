"use client"

import { returnDefaultPicture } from '@lib/helperFunctions';
import React, { useEffect, useRef, useState } from 'react';

import { FiShoppingCart } from 'react-icons/fi';
export default function ProductCard({ product }: { product: product }) {
    const [active, setActive] = useState(false);
    const ProductCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ProductCardRef.current &&
                !ProductCardRef.current.contains(event.target as Node)
            ) {
                setActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ProductCardRef]);

    const largeContent = (
        <div className=''>
            <img
                src={returnDefaultPicture(product)}
                className='cursor-pointer'
                alt={product.title}
            />
            <article className='p-2 '>
                <h2 className='m-2 line-clamp-2 cursor-pointer text-center'>
                    {product.title}
                </h2>
                <div className='flex items-center justify-around '>
                    <p className='text-center'>{product.price}</p>
                    <div className='flex flex-col items-center'>
                        <button className='rounded-full border-2 p-2'>
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
                <p className='my-2 px-4 text-end text-xs text-slate-500'>
                    {product.stock} übrig
                </p>
            </article>
        </div>
    );
    const smallContent = (
        <div>
            <img
                src={returnDefaultPicture(product)}
                className='cursor-pointer'
                alt={product.title}
            />
            <article className='p-2 '>
                <h2 className='line-clamp-2 cursor-pointer text-center lg:m-2'>
                    {product.title}
                </h2>
                <div className='flex items-center justify-around '>
                    <p className='text-center'>{product.price}</p>
                    <div className='flex flex-col items-center'>
                        <button className='rounded-full border-2 p-2'>
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
                <p className='my-2 hidden px-4 text-end text-xs text-slate-500 lg:block'>
                    {product.stock} übrig
                </p>
            </article>
        </div>
    );

    const wrapper_with_content = (
        <article
            ref={ProductCardRef}
            className={`${
                active
                    ? 'fixed left-1/2 top-1/2 z-10 h-[50vh] w-[66.67vw] -translate-x-1/2 -translate-y-1/2 transform overflow-auto bg-white'
                    : 'col-span-1'
            } flex flex-col justify-between overflow-hidden rounded-3xl border-2 text-xs shadow-xl transition-all duration-500 ease-in-out lg:text-base`}
            onClick={() => setActive(!active)}
        >
            {active ? largeContent : smallContent}
        </article>
    );
    return wrapper_with_content;
}
