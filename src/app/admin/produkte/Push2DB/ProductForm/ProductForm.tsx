import React from 'react';
import FormBody from './FormBody/FormBody';
import HeaderRow from './HeaderRow';
export default function ProductForm({ setActive }: { setActive: React.Dispatch<React.SetStateAction<boolean>> }) {
    const product_form = (
        <form
            //onSubmit={}
            className='flex flex-col h-full p-4 space-y-4'
        >
            <HeaderRow setActive={setActive} />
            <FormBody />
        </form>
    );

    return product_form;
}
