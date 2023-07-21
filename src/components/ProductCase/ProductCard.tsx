// src/components/ProductCase/ExtendedCard/ExtendedCard.tsx
'use client';
import React, { useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from '@globalState/ActiveProductCardContext';

export default async function ProductCard({ product }: { product: product }) {
    const { state, dispatch } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;

    const expandedFrame =
        'fixed right-1/2 top-16 z-50 h-[calc(100vh-4rem)] rounded-none lg:rounded-3xl w-screen translate-x-1/2 lg:top-1/2 lg:h-2/3 lg:w-2/3 lg:-translate-y-1/2';
    const collapsedFrame = 'relative w-full aspect-[2/3] max-w-xs';

    const productCase = (
        <article
            className={` overflow-hidden rounded-3xl border bg-white shadow-xl ${
                state.expanded ? expandedFrame : collapsedFrame
            }`}
        >
            {state.expanded && (
                <button
                    className='absolute text-3xl left-8 top-8 border-b-3 border-s-seafoam-green-7 text-coastal-blue-7'
                    onClick={() =>
                        dispatch({ type: 'toggleExpanded', payload: false })
                    }
                >
                    <FiArrowLeft />
                </button>
            )}
            {/* {state.expanded ? <Expanded /> : <Collapsed />} */}
        </article>
    );

    return <div className='grid grid-cols-3 rborder w-96'>{productCase}</div>;
}
