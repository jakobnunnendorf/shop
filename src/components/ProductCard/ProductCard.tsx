"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { returnDefaultPicture } from '@lib/helperFunctions';

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
            <Image
                src={returnDefaultPicture(product)}
                className='cursor-pointer'
                alt={product.title}
            />
            <article className='p-2 '>
                <h2 className='m-2 text-center cursor-pointer line-clamp-2'>
                    {product.title}
                </h2>
                <div className='flex items-center justify-around '>
                    <p className='text-center'>{product.price}</p>
                    <div className='flex flex-col items-center'>
                        <button className='p-2 border-2 rounded-full'>
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
                <p className='px-4 my-2 text-xs text-end text-slate-500'>
                    {product.stock} übrig
                </p>
            </article>
        </div>
    );
    const smallContent = (
        <div>
            <Image
                src={returnDefaultPicture(product)}
                className='cursor-pointer'
                alt={product.title}
            />
            <article className='p-2 '>
                <h2 className='text-center cursor-pointer line-clamp-2 lg:m-2'>
                    {product.title}
                </h2>
                <div className='flex items-center justify-around '>
                    <p className='text-center'>{product.price}</p>
                    <div className='flex flex-col items-center'>
                        <button className='p-2 border-2 rounded-full'>
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
                <p className='hidden px-4 my-2 text-xs text-end text-slate-500 lg:block'>
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
