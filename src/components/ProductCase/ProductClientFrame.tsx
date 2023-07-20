'use client';

import React, { useEffect, useRef, useState } from 'react';
import ExtendedCard from './ExtendedCard/ExtendedCard';
import SmallCard from './SmallCard/SmallCard';

export default function ProductClientFrame({ product }: { product: product }) {
    const [active, setActive] = useState(false);
    const ProductCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ProductCardRef.current &&
                !ProductCardRef.current.contains(event.target as Node)
            ) {
                collapse();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ProductCardRef]);

    const expand = () => {
        setActive(true);
    };
    const collapse = () => {
        setActive(false);
    };
    const wrapper_with_content = (
        <article
            ref={ProductCardRef}
            className={`${
                active
                    ? 'fixed right-1/2 top-20 z-50 h-[calc(100vh-6rem)] w-[calc(100vw-1rem)] translate-x-1/2 transform overflow-hidden rounded-3xl border bg-white shadow-xl lg:top-1/2  lg:h-2/3 lg:w-2/3 lg:-translate-y-1/2'
                    : 'relative h-96 w-64 rounded-3xl border shadow-xl'
            } duration-100 ease-in-out `}
        >
            {active ? (
                <ExtendedCard product={product} collapse={collapse} />
            ) : (
                <SmallCard product={product} expand={expand} />
            )}
        </article>
    );

    return wrapper_with_content;
}