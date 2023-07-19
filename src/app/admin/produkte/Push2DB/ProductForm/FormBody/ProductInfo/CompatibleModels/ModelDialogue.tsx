'use client';
import React from 'react';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function ModelDialogue({
    toggleColorDialogue,
}: {
    toggleColorDialogue: () => void;
}) {
    const { newProduct, setNewProduct } = React.useContext(
        NewProductContext
    ) as NewProductContextType;
    const [manufacturerDraft, setManufacturerDraft] =
        React.useState<string>('');
    const [categoryDraft, setCategoryDraft] =
        React.useState<deviceCategory>('');
    const [modelNameDraft, setModelNameDraft] = React.useState<string>('');
    const [errorMessage, setErrorMessage] = React.useState<string>('');

    const addDeviceToNewProduct = () => {
        if (
            manufacturerDraft.length > 0 &&
            categoryDraft.length > 0 &&
            modelNameDraft.length > 0
        ) {
            const newDevice: device = {
                name: modelNameDraft,
                brand: manufacturerDraft,
                deviceCategory: categoryDraft,
            };
            const newCompatibleModels = newProduct.compatibleModels
                ? [...newProduct.compatibleModels, newDevice]
                : [newDevice];
            setNewProduct({
                ...newProduct,
                compatibleModels: newCompatibleModels,
            });
            toggleColorDialogue();
        } else {
            setErrorMessage('Bitte alle Felder ausfüllen');
        }
    };

    const ModelDialogue = (
        <div className='absolute top-0 z-50 p-2 bg-white border rounded-lg h-fit w-fit '>
            <h2>Hinzufügen</h2>

            <div className='grid grid-cols-2'>
                <input
                    required
                    onChange={(e) => setManufacturerDraft(e.target.value)}
                    className='px-2 py-1 border border-b-0 rounded-tl-lg shadow-xl outline-none'
                    type='text'
                    placeholder='Hersteller'
                />
                <select
                    required
                    onChange={(e) =>
                        setCategoryDraft(e.target.value as deviceCategory)
                    }
                    className='w-full px-2 py-1 border-t border-r rounded-tr-lg outline-none'
                    placeholder='Kategorie'
                >
                    <option value=''>--Kategorie--</option>
                    <option value='phone'>Handy</option>
                    <option value='tablet'>Tablet</option>
                    <option value='laptop'>Laptop</option>
                    <option value='smartwatch'>Smartwatch</option>
                    <option value='headphones'>Kopfhörer</option>
                    <option value='speaker'>Lautsprecher</option>
                </select>
                <input
                    required
                    onChange={(e) => setModelNameDraft(e.target.value)}
                    className='col-span-2 px-2 py-1 border rounded-bl-lg rounded-br-lg outline-none'
                    type='text'
                    placeholder='Modell'
                />
                <p className='col-span-2 text-xs text-red-400 '>
                    {errorMessage}
                </p>
            </div>
            <div className='flex w-full py-4 bg-white justify-evenly'>
                <button
                    onClick={toggleColorDialogue}
                    className='px-4 py-2 border border-red-500 rounded-lg'
                >
                    Abbrechen
                </button>
                <button
                    onClick={addDeviceToNewProduct}
                    className='px-4 py-2 border border-green-500 rounded-lg'
                >
                    Speichern
                </button>
            </div>
        </div>
    );
    return ModelDialogue;
}
