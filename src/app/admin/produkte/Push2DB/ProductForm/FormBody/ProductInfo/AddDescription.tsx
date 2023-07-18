import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Description from '@components/ProductCase/ExtendedCard/ProductInfo/Description';
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
        <div className='flex justify-center space-x-2 p-4 '>
            <textarea
                className='rounded-lg border px-2 py-1'
                value={descriptionDraft}
                onChange={(event) => setDescriptionDraft(event.target.value)}
                placeholder='Produkt Beschreibung eingeben'
            />

            <button
                onClick={addDraftToNewProduct}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.description ? (
        <div className='flex space-x-4'>
            <button type='button' onClick={editDescription}>
                <Description productDescription={newProduct.description} />
            </button>
        </div>
    ) : (
        addDescription
    );
}
