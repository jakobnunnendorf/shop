'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProductForm from './ProductForm/ProductForm';
import ButtonCard from '../ButtonCard';
import { NewProductContextProvider } from '@globalState/NewProductContext';

export default function Push2DB() {
    const ProductCardRef = useRef<HTMLDivElement>(null); // for click outside
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
                    ? 'fixed left-1/2 top-1/2 h-[75vh] w-4/5 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl backdrop-filter'
                    : null
            } z-40 rounded-3xl border border-green-200 shadow-2xl`}
            onClick={() => setActive(true)}
        >
            {active ? <ProductForm /> : <ButtonCard />}
        </article>
    );

    return renderButtonOrForm;
}
