'use client';

import React, { useEffect, useRef, useState } from 'react';
import ExtendedCard from '@components/ProductCase/ExtendedCard/ExtendedCard';
import SmallCard from './SmallCard';
// import ExtendedCard from '@components/ProductCase/ExtendedCard/ExtendedCard';

export default function ProductClientFrame({ product }: { product: product }) {
    const [active, setActive] = useState(false);
    const ProductCardRef = useRef<HTMLDivElement>(null);
    const collapse = () => {
        setActive(false);
    };
    const expand = () => {
        setActive(true);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Make sure we are in a browser environment
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    ProductCardRef.current &&
                    !ProductCardRef.current.contains(event.target as Node)
                ) {
                    // Your logic here
                }
            };

            window.addEventListener('mousedown', handleClickOutside);

            return () => {
                // cleanup function that removes the event listener when the component unmounts
                window.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    const wrapper_with_content = (
        <article
            ref={ProductCardRef}
            className={
                active
                    ? 'fixed bottom-4  left-1/2 z-50 h-[calc(100vh-6rem)] w-[calc(100vw-1rem)] -translate-x-1/2 transform overflow-hidden rounded-3xl border bg-white shadow-xl lg:bottom-1/2  lg:h-2/3 lg:w-2/3 lg:translate-y-1/2'
                    : 'relative rounded-3xl border shadow-xl lg:h-96 lg:w-64'
            }
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