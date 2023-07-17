import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Price from '@components/ProductCase/ExtendedCard/ProductInfo/Price';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddPrice() {
    const { newPrice, setNewPrice } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [priceInput, setPriceInput] = React.useState('');

    const handleSubmit = (): void => {
        setNewPrice(parseFloat(priceInput.replace(',', '.')));
    };

    const editPrice = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewPrice(null);
    };

    const addPrice = (
        <div className='flex items-center justify-center space-x-2 p-4'>
            <input
                className='w-16 rounded-lg border px-2 py-1'
                value={priceInput}
                onChange={(event) => setPriceInput(event.target.value)}
                type='text'
                placeholder='14,99'
                pattern='\d+ \, \d+'
            />
            <p>€</p>
            <button
                onClick={handleSubmit}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newPrice ? (
        <button type='button' onClick={editPrice}>
            <Price productPrice={newPrice} />
        </button>
    ) : (
        addPrice
    );
}
