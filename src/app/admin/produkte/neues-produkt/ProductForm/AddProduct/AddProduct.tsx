import React from 'react';
import AddImages from './AddImages/AddImages';
import ProductInfo from './ProductInfo/ProductInfo';

export default function AddProduct({
    state,
}: {
    state: UploadProductFormState;
}) {
    const addProduct = (
        <div className=' lg:grid lg:h-[66vh] lg:rounded-3xl bg-white lg:grid-cols-5 lg:shadow-2xl'>
            <AddImages state={state} />
            <ProductInfo />
        </div>
    );
    return addProduct;
}
