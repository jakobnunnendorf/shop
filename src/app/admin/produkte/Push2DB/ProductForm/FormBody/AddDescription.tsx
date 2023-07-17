import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Description from '@components/ProductCase/ExtendedCard/ProductInfo/Description';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddDescription() {
    const { newDescription, setNewDescription } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [descriptionInput, setDescriptionInput] = React.useState('');

    const handleSubmit = (): void => {
        setNewDescription(descriptionInput);
    };

    const editDescription = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewDescription(null);
    };

    const addDescription = (
        <div className='flex justify-center space-x-2 p-4 '>
            <textarea
                className='rounded-lg border px-2 py-1'
                value={descriptionInput}
                onChange={(event) => setDescriptionInput(event.target.value)}
                placeholder='Produkt Beschreibung eingeben'
            />

            <button
                onClick={handleSubmit}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newDescription ? (
        <div className='flex space-x-4'>
            <button type='button' onClick={editDescription}>
                <Description productDescription={newDescription} />
            </button>
        </div>
    ) : (
        addDescription
    );
}
