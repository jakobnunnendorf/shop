import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Price from '@components/ProductCard/SharedComponents/Price';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddPrice() {
    const { newProduct, setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [priceDraft, setPriceDraft] = React.useState('');

    const addPriceDraftToNewProduct = (): void => {
        const newPrice = parseFloat(priceDraft.replace(',', '.'));
        setNewProduct({ ...newProduct, price: newPrice });
    };

    const editPrice = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewProduct({ ...newProduct, price: null });
    };

    const addPrice = (
        <div className='flex items-center justify-center space-x-2 p-4'>
            <input
                className='w-16 rounded-lg border px-2 py-1'
                value={priceDraft}
                onChange={(event) => setPriceDraft(event.target.value)}
                type='text'
                placeholder='14,99'
                pattern='\d+ \, \d+'
            />
            <p>€</p>
            <button
                onClick={addPriceDraftToNewProduct}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.price ? (
        <button type='button' onClick={editPrice}>
            <Price productPrice={newProduct.price} />
        </button>
    ) : (
        addPrice
    );
}
