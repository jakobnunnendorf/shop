import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import DiplayStockQuantity from './DisplayStockQuantity';

export default function AddStockQuantity() {
    const { newProduct, setNewProduct } = useContext(
        newProductContext
    ) as NewProductContextType;
    const [stockQuantityDraft, setStockQuantityDraft] = React.useState('');

    const addStockQuantityDraftToNewProduct = (): void => {
        const newStockQuantity = parseInt(stockQuantityDraft);
        setNewProduct({ ...newProduct, stock: newStockQuantity });
    };

    const editStockQuantity = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewProduct({ ...newProduct, stock: null });
    };

    const addStockQuantity = (
        <div className='flex items-center justify-center p-4 space-x-2'>
            <input
                className='w-20 px-2 py-1 border rounded-lg'
                value={stockQuantityDraft}
                onChange={(event) => {
                    setStockQuantityDraft(event.target.value);
                }}
                type='text'
                placeholder='Anzahl'
                pattern='\d+'
            />
            <button
                onClick={addStockQuantityDraftToNewProduct}
                className='grid w-8 h-8 border border-green-400 rounded-full place-content-center'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.stock ? (
        <button
            type='button'
            onClick={editStockQuantity}
            className='flex justify-end w-full '
        >
            <DiplayStockQuantity stock={newProduct.stock} />
        </button>
    ) : (
        addStockQuantity
    );
}
