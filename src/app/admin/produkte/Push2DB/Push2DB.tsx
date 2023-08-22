'use client';

import React, { useContext, useEffect } from 'react';
import {
    blankNewProduct,
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ProductForm from './ProductForm/ProductForm';
export default function Push2DB() {
    const { setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;

    useEffect(() => {
        setNewProduct(blankNewProduct);
    }, [setNewProduct]);

    return (
        <div className=' h-fit'>
            <ProductForm />
        </div>
    );
}
