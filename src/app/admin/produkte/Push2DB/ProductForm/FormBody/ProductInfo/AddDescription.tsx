import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddDescription() {
    const { newProduct, setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [descriptionDraft, setDescriptionDraft] = React.useState('');

    const addDraftToNewProduct = (): void => {
        setNewProduct({ ...newProduct, description: descriptionDraft });
    };

    const editDescription = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewProduct({ ...newProduct, description: null });
    };

    const addDescription = (
        <div className='flex justify-center p-4 space-x-2 '>
            <textarea
                className='px-2 py-1 border rounded-lg'
                value={descriptionDraft}
                onChange={(event) => setDescriptionDraft(event.target.value)}
                placeholder='Produkt Beschreibung eingeben'
            />

            <button
                onClick={addDraftToNewProduct}
                className='grid w-8 h-8 border border-green-400 rounded-full place-content-center'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.description ? (
        <div className='flex space-x-4'>
            <button type='button' onClick={editDescription}>
                <div className='lg:hidden'>
                    <h3 className='px-8 text-lg font-bold'>Beschreibung</h3>
                    <p className='px-8'>{newProduct.description}</p>
                </div>
            </button>
        </div>
    ) : (
        addDescription
    );
}
