import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import Price from '@components/ProductCard/SharedComponents/Price';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function AddPrice() {
    const { newProduct, setNewProduct } = useContext(
        newProductContext
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
        <div className='flex items-center justify-center p-4 space-x-2'>
            <input
                className='w-16 px-2 py-1 border rounded-lg'
                value={priceDraft}
                onChange={(event) => setPriceDraft(event.target.value)}
                type='text'
                placeholder='14,99'
                pattern='\d+ \, \d+'
            />
            <p>€</p>
            <button
                onClick={addPriceDraftToNewProduct}
                className='grid w-8 h-8 border border-green-400 rounded-full place-content-center'
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
