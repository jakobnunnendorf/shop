import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function HeaderRow() {
    const headerRow = (
        <div className='flex items-center justify-between h-20 px-12 mt-2 lg:mt-4'>
            <h2 className='text-2xl '>Neues Produkt hinzufügen</h2>
            <button
                type='submit' //TODO add server action to upload the product
                className='flex items-center px-2 py-1 space-x-2 border-2 border-green-400 rounded-xl'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
        </div>
    );
    return headerRow;
}
