import React, { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import HeaderRow from './HeaderRow';
import FormBody from './FormBody/FormBody';
import { NewProductContextProvider } from '@globalState/NewProductContext';

export default function ProductForm() {
    const product_form = (
        <form
            //onSubmit={}
            className='flex h-full flex-col space-y-4 p-4'
        >
            <HeaderRow />
            <FormBody />
        </form>
    );

    return product_form;
}
