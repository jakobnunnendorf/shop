// src/components/ProductCase/ExtendedCard/ExtendedCard.tsx
'use client';
import React, { useContext, useEffect, useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';
import Collapsed from './Collapsed/Collapsed';
import Expanded from './Expanded/Expanded';

export default function ProductCard({
    product,
    grid,
}: {
    product: product;
    grid?: boolean;
}) {
    const { dispatch } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;
    const [expanded, setExpanded] = React.useState<boolean>(false);

    const expandedFrame =
        'fixed right-1/2 top-16 z-40 h-[calc(100vh-4rem)] rounded-none lg:rounded-3xl w-screen translate-x-1/2 lg:top-1/2 lg:h-2/3 lg:w-2/3 lg:-translate-y-1/2';
    const collapsedFrame =
        'relative w-full aspect-[4/7] lg:aspect-[2/3] max-w-xs';

    const ProductCardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                expanded &&
                ProductCardRef.current &&
                !ProductCardRef.current.contains(event.target as Node)
            ) {
                setExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ProductCardRef, dispatch, expanded]);

    const productCard = (
        <article
            ref={ProductCardRef}
            className={` overflow-hidden ${
                grid
                    ? 'lg:rounded-3xl lg:border lg:shadow-xl'
                    : 'rounded-3xl border shadow-xl'
            }  bg-white ${expanded ? expandedFrame : collapsedFrame}`}
        >
            {expanded && (
                <button
                    className='absolute z-40 text-3xl left-8 top-8 border-b-3 border-s-seafoam-green-7 text-coastal-blue-7'
                    onClick={() => setExpanded(false)}
                >
                    <FiArrowLeft />
                </button>
            )}
            {expanded ? (
                <Expanded product={product} />
            ) : (
                <Collapsed product={product} setExpanded={setExpanded} />
            )}
        </article>
    );

    return productCard;
}
