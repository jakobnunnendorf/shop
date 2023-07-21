'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    blankNewProduct,
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ButtonCard from './ButtonCard';
import ProductForm from './ProductForm/ProductForm';
export default function Push2DB() {
    const ProductCardRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<boolean>(false);
    const { setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;

    useEffect(() => {
        setNewProduct(blankNewProduct);
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
    }, [ProductCardRef, setNewProduct]);

    const expandedFrame =
        'fixed right-1/2 top-16 z-50 h-[calc(100vh-4rem)] rounded-none lg:rounded-3xl w-screen translate-x-1/2 lg:top-1/2 lg:h-[75vh] lg:w-2/3 lg:-translate-y-1/2';
    const collapsedFrame =
        'relative w-full aspect-[4/7] lg:aspect-[2/3] max-w-xs';

    const renderButtonOrForm = (
        <article
            ref={ProductCardRef}
            className={` shadow-3xl 
                    overflow-hidden rounded-3xl border bg-[hsla(0,100%,100%,0.9)] backdrop-blur-3xl ${
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
