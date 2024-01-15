'use client';
import React from 'react';
import UploadButton from './UploadButton';
import { uploadProduct } from '@lib/uploadData';
import Explain from './Explain';
import { useFormState } from 'react-dom';
import AddProduct from './AddProduct/AddProduct';

const initialState: UploadProductFormState = {
    message: 'edit',
    errors: {},
};

export default function ProductForm() {
    const [state, formAction] = useFormState(uploadProduct, initialState);
    console.log(state.message);

    const productForm = (
        <form
            action={formAction}
            className='flex flex-col h-full space-y-4 lg:p-4'
        >
            <UploadButton />
            {state.message === 'explain' ? (
                <Explain />
            ) : (
                <AddProduct state={state} />
            )}
        </form>
    );

    return productForm;
}
