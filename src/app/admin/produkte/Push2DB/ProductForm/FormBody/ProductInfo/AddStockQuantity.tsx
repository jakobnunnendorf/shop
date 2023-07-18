import React from 'react';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import DiplayStockQuantity from './DisplayStockQuantity';

export default function AddStockQuantity() {
    const { newProduct, setNewProduct } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [stockQuantityDraft, setStockQuantityDraft] = React.useState('');

    const addStockQuantityDraftToNewProduct = (): void => {
        const newStockQuantity = parseInt(stockQuantityDraft);
        setNewProduct({ ...newProduct, stock: newStockQuantity });
        console.log(newProduct);
    };

    const editStockQuantity = (e: React.FormEvent): void => {
        e.preventDefault();
        setNewProduct({ ...newProduct, stock: null });
    };

    const addStockQuantity = (
        <div className='flex items-center justify-center space-x-2 p-4'>
            <input
                className='w-20 rounded-lg border px-2 py-1'
                value={stockQuantityDraft}
                onChange={(event) => {
                    console.log(stockQuantityDraft);
                    setStockQuantityDraft(event.target.value);
                }}
                type='text'
                placeholder='Anzahl'
                pattern='\d+'
            />
            <button
                onClick={addStockQuantityDraftToNewProduct}
                className='grid h-8 w-8 place-content-center rounded-full border border-green-400'
            >
                <FiCheck />
            </button>
        </div>
    );
    return newProduct.stock ? (
        <button
            type='button'
            onClick={editStockQuantity}
            className='flex w-full justify-end '
        >
            <DiplayStockQuantity stock={newProduct.stock} />
        </button>
    ) : (
        addStockQuantity
    );
}
