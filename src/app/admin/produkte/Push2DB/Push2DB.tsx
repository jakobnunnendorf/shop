'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import ButtonCard from './ButtonCard';
import ProductForm from './ProductForm/ProductForm';
export default function Push2DB() {
    const ProductCardRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<boolean>(false);

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

    const expandedFrame =
        'fixed right-1/2 top-16 z-50 h-[calc(100vh-4rem)] rounded-none lg:rounded-3xl w-screen translate-x-1/2 lg:top-1/2 lg:h-[70vh] lg:w-2/3 lg:-translate-y-1/2';
    const collapsedFrame =
        'relative w-full aspect-[4/7] lg:aspect-[2/3] max-w-xs';

    const renderButtonOrForm = (
        <article
            ref={ProductCardRef}
            className={` overflow-hidden 
                    rounded-3xl border shadow-xl backdrop-blur-3xl ${
                        active ? expandedFrame : collapsedFrame
                    }`}
        >
            {active ? (
                <ProductForm setActive={setActive} />
            ) : (
                <ButtonCard setActive={setActive} />
            )}
        </article>
    );

    return renderButtonOrForm;
}
