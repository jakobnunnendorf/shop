import React from 'react';
import FormBody from './FormBody/FormBody';
import HeaderRow from './HeaderRow';
export default function ProductForm() {
    const product_form = (
        <form
            //onSubmit={}
            className='flex flex-col h-full space-y-4 lg:p-4 '
        >
            <HeaderRow />
            <FormBody />
        </form>
    );

    return product_form;
}
