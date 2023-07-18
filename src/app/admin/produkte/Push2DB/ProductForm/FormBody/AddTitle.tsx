import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Title from '@components/ProductCase/ExtendedCard/ProductInfo/Title';
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
        <div className='flex justify-center space-x-2 p-4 '>
            <input
                className='rounded-lg border px-2 py-1'
                value={titleDraft}
                onChange={(event) => setTitleDraft(event.target.value)}
                type='text'
                placeholder='Produkt Titel eingeben'
            />

            <button
                onClick={submitTitleDraftToNewProduct}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.title ? (
        <button type='button' onClick={editTitle}>
            <Title productTitle={newProduct.title} />
        </button>
    ) : (
        addTitle
    );
}
