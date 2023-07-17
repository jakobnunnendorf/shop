import React, { useContext, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

type availableColorsType = [productColor, tailwind_productColor][];
const availableColors: availableColorsType = [
    ['schwarz', 'bg-black'],
    ['weiß', 'bg-white'],
    ['rot', 'bg-red-500'],
    ['blau', 'bg-blue-500'],
    ['grün', 'bg-green-500'],
    ['gelb', 'bg-yellow-500'],
    ['lila', 'bg-purple-500'],
    ['rosa', 'bg-pink-500'],
    ['orange', 'bg-orange-500'],
    ['braun', 'bg-[#965a3e]'],
    ['grau', 'bg-gray-500'],
    ['silber', 'bg-slate-300'],
];

export default function ColorDialogue({
    toggleColorDialogue,
}: {
    toggleColorDialogue: () => void;
}) {
    const { addProductColor, colorInFocus, setColorInFocus } = useContext(
        NewProductContext
    ) as NewProductContextType;
    const [productColorDraft, setProductColorDraft] = useState<productColor>();
    const colorDialogue = (
        <div className='absolute rounded-lg border bg-white p-2'>
            <h3 className='px-4 text-xl font-bold '>Farbe hinzufügen</h3>
            <div className='grid grid-cols-4 gap-2 py-4 '>
                {availableColors.map((color) => {
                    const selectThisColor = () => {
                        setProductColorDraft(color[0]);
                        setColorInFocus(color[0]);
                    };
                    return (
                        <button
                            type='button'
                            onClick={selectThisColor}
                            className={`flex flex-col items-center justify-center`}
                            key={color[0]}
                        >
                            <div
                                className={`h-6 w-6 ${
                                    color[1]
                                }  grid place-content-center rounded-full ${
                                    color[0] === colorInFocus
                                        ? 'border-2 border-blue-400 shadow-2xl'
                                        : ''
                                }`}
                            >
                                <FiPlus className='text-slate-200' />
                            </div>
                            <p
                                className={` ${
                                    color[0] === colorInFocus
                                        ? 'underline decoration-blue-400'
                                        : ''
                                }`}
                            >
                                {color[0]}
                            </p>
                        </button>
                    );
                })}
            </div>
            <div className='flex w-full justify-evenly py-4'>
                <button
                    onClick={toggleColorDialogue}
                    className='rounded-lg border border-red-500 px-4 py-2'
                >
                    Abbrechen
                </button>
                <button
                    onClick={() => {
                        toggleColorDialogue();
                        addProductColor(productColorDraft as productColor);
                    }}
                    className='rounded-lg border border-green-500 px-4 py-2'
                >
                    Speichern
                </button>
            </div>
        </div>
    );
    return colorDialogue;
}
