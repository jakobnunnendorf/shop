import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Title from '@components/ProductCase/ExtendedCard/ProductInfo/Title';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddTitle() {
    const { newTitle, setNewTitle } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [titleInput, setTitleInput] = React.useState('');

    const handleSubmit = (): void => {
        setNewTitle(titleInput);
    };

    const editTitle = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewTitle(null);
    };

    const addTitle = (
        <div className='flex justify-center p-4 space-x-2 '>
            <input
                className='px-2 py-1 border rounded-lg'
                value={titleInput}
                onChange={(event) => setTitleInput(event.target.value)}
                type='text'
                placeholder='Produkt Titel eingeben'
            />

            <button
                onClick={handleSubmit}
                className='grid w-8 h-8 border border-green-400 rounded-full place-content-center'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newTitle ? (
        <button type='button' onClick={editTitle}>
            <Title productTitle={newTitle} />
        </button>
    ) : (
        addTitle
    );
}
