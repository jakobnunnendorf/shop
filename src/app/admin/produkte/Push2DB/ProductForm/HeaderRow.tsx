'use client';
import Image from 'next/image';
import React from 'react';
import { FiCheck, FiUploadCloud } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function HeaderRow({
    setActive,
}: {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const supabase = createClientComponentClient();
    const { newProduct, fileStorage } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const uploadProduct = async () => {
        setLoading(true);
        console.log('newProduct', newProduct, 'fileStorage', fileStorage);
        const { data, error } = await supabase
            .from('products')
            .insert([newProduct]);
        await supabase.from('debugging').insert([
            {
                message: 'data and error',
                content_2: data,
                content_3: error,
            },
        ]);
        setLoading(false);
        if (!error) {
            setSuccess(true);
            setTimeout(() => {
                setActive(false);
            }, 2000);
        }
    };
    const headerRow = (
        <div className='flex items-center justify-between h-20 px-12 mt-2 lg:mt-4'>
            <h2 className='text-2xl '>Neues Produkt hinzufügen</h2>
            <button
                type='button'
                onClick={uploadProduct}
                className='flex items-center px-2 py-1 space-x-2 border-2 border-green-400 rounded-xl'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
            {success && (
                <div
                    className={`absolute z-50 grid h-48 w-48 border bg-white text-xl font-bold text-green-400 ${
                        success
                            ? 'border-green-400'
                            : loading
                            ? 'border-seafoam-green-7'
                            : ''
                    } left-1/2 top-1/2 place-content-center rounded-lg`}
                >
                    {loading && (
                        <div className='flex'>
                            <p> success</p>{' '}
                            <FiCheck className='text-2xl text-green-400' />
                        </div>
                    )}
                    {loading && (
                        <div className='relative w-40 h-40'>
                            <Image
                                src={'/loading.gif'}
                                fill={true}
                                objectFit='contain'
                                alt='loading'
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
    return headerRow;
}
