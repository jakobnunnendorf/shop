import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddTitle() {
    const { newProduct, setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [titleDraft, setTitleDraft] = React.useState('');

    const submitTitleDraftToNewProduct = (): void => {
        setNewProduct({ ...newProduct, title: titleDraft });
    };

    const editTitle = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewProduct({ ...newProduct, title: null });
    };

    const addTitle = (
        <div className='flex justify-center p-4 space-x-2 '>
            <input
                className='px-2 py-1 border rounded-lg'
                value={titleDraft}
                onChange={(event) => setTitleDraft(event.target.value)}
                type='text'
                placeholder='Produkt Titel eingeben'
            />

            <button
                onClick={submitTitleDraftToNewProduct}
                className='grid w-8 h-8 border border-green-400 rounded-full place-content-center'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.title ? (
        <button type='button' onClick={editTitle}>
            <h2 className='px-4 pt-8 text-xl font-bold text-center lg:pt-0 lg:text-3xl'>
                {newProduct.title}
            </h2>
        </button>
    ) : (
        addTitle
    );
}
