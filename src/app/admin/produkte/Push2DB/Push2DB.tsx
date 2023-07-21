'use client';

import React, { useEffect, useRef, useState } from 'react';
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

    const renderButtonOrForm = (
        <article
            ref={ProductCardRef}
            className={`${
                active
                    ? 'fixed left-1/2 top-1/2 h-[75vh] w-4/5 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl'
                    : 'w-full'
            } relative aspect-[2/3] w-full max-w-xs rounded-3xl border border-green-400`}
            onClick={() => setActive(true)}
        >
            {active ? <ProductForm setActive={setActive} /> : <ButtonCard />}
        </article>
    );

    return renderButtonOrForm;
}
