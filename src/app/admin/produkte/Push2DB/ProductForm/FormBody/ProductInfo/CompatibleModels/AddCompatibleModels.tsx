'use client';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import CompatibleModelTags from '@components/ProductCard/SharedComponents/CompatibleModelTags';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ModelDialogue from './ModelDialogue';

export default function AddCompatibleModels() {
    const { newProduct } = React.useContext(
        NewProductContext
    ) as NewProductContextType;
    const [showModelDialogue, setShowModelDialogue] =
        React.useState<boolean>(false);
    const productHasCompatibleModels = newProduct?.compatibleModels
        ? true
        : false;

    const toggleColorDialogue = () => {
        setShowModelDialogue(!showModelDialogue);
    };

    const addCompatibleModels = (
        <div className='py-4'>
            <h2>kompatible Modelle</h2>
            <div className='relative flex items-center w-full py-2 space-x-2 '>
                <button
                    type='button'
                    onClick={() => setShowModelDialogue(true)}
                    className='grid w-6 h-6 border rounded-full place-content-center'
                >
                    <FiPlus className='text-slate-500' />
                </button>
                {productHasCompatibleModels && (
                    <CompatibleModelTags
                        compatibleModels_array={newProduct?.compatibleModels}
                    />
                )}
                {showModelDialogue && (
                    <ModelDialogue toggleColorDialogue={toggleColorDialogue} />
                )}
            </div>
        </div>
    );
    return addCompatibleModels;
}
