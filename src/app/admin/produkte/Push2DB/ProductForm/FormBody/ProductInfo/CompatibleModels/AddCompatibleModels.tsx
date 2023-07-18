'use client';
import React from 'react';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import CompatibleModelTags from '@components/ProductCase/SmallCard/CompatibleModelTags';
import { FiPlus } from 'react-icons/fi';
import ModelDialogue from './ModelDialogue';

export default function AddCompatibleModels() {
    const { newProduct, setNewProduct } = React.useContext(
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
        <div>
            <h2>kompatible Modelle</h2>
            <div className='relative flex w-full items-center space-x-2 '>
                <button
                    type='button'
                    onClick={() => setShowModelDialogue(true)}
                    className='grid h-6 w-6 place-content-center rounded-full border'
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
